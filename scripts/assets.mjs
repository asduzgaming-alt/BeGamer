import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

// Fuentes originales organizadas por temática en la raíz del proyecto:
//   site/  services/  events/  projects/<proyecto>/  studio/<juego>/  brands/
// Cada imagen genera /assets/images/<misma ruta>/<nombre>-<ancho>.webp y su id es "<ruta>/<nombre>",
// por ejemplo projects/upc/upc-2.jpg -> id "projects/upc/upc-2".
// Para sumar fotos a un proyecto basta con copiarlas en su carpeta y correr `npm run assets`.
// HEIC no se procesa: guarda una copia .jpg junto al original.
const roots=['site','services','events','projects','studio'];
const imageExt=/\.(jpe?g|png|webp)$/i;

async function walk(dir){
 const out=[];
 for(const entry of (await fs.readdir(dir,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))){
  const full=path.posix.join(dir,entry.name);
  if(entry.isDirectory())out.push(...await walk(full));
  else if(imageExt.test(entry.name))out.push(full);
 }
 return out;
}

await fs.rm('public/assets/images',{recursive:true,force:true});
const manifest={};
for(const root of roots){
 for(const file of await walk(root)){
  const id=file.replace(imageExt,'');
  const input=await fs.readFile(file);
  const oriented=await sharp(input).rotate().toBuffer({resolveWithObject:true});
  const {width,height}=oriented.info;
  // Las fotos de site/ (hero) se ven a pantalla grande: llegan hasta 2560 px para pantallas retina.
  const steps=root==='site'?[480,800,1200,1600,2000,2560]:[480,800,1200,1600];const max=steps.at(-1);
  const widths=steps.filter(w=>w<width);widths.push(Math.min(width,max));
  await fs.mkdir('public/assets/images/'+path.posix.dirname(id),{recursive:true});
  const variants=[];
  for(const w of [...new Set(widths)]){
   const out=`/assets/images/${id}-${w}.webp`;
   await sharp(oriented.data).resize({width:w,withoutEnlargement:true}).webp({quality:root==='site'?88:80}).toFile('public'+out);
   variants.push({width:w,path:out,bytes:(await fs.stat('public'+out)).size});
  }
  manifest[id]={source:file,width,height,sha256:crypto.createHash('sha256').update(input).digest('hex'),variants};
 }
}

await fs.rm('public/assets/brands',{recursive:true,force:true});
await fs.mkdir('public/assets/brands',{recursive:true});
const brandFiles=(await fs.readdir('brands')).filter(f=>imageExt.test(f));
for(const file of brandFiles)await sharp('brands/'+file).trim().resize({width:320,height:120,fit:'inside',withoutEnlargement:true}).webp({quality:90}).toFile('public/assets/brands/'+file.replace(imageExt,'.webp'));
await fs.copyFile('logo.png','public/assets/logo.png');
await fs.mkdir('src/content',{recursive:true});
await fs.writeFile('src/content/assets.json',JSON.stringify(manifest,null,2));
console.log(`Optimized ${Object.keys(manifest).length} images and ${brandFiles.length} brand logos; originals unchanged.`);
