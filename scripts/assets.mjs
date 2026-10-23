import sharp from 'sharp';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
await fs.mkdir('public/assets/images',{recursive:true});
await fs.mkdir('public/assets/brands',{recursive:true});
const sources={hero:'projects/ascension.png',ascension:'projects/ascension.png',ecup:'projects/ecup.jpg',nubyx:'projects/nubyx.png',upc:'projects/upc.jpg',corporate:'services/marketing.jpg',esports:'services/production.jpeg',building:'services/immersive.png',about:'hero-bg.jpg','roblox-main':'studio/roblox-main.png','roblox-sub1':'studio/roblox-sub1.png','roblox-sub2':'studio/roblox-sub2.png','minecraft-main':'studio/minecraft-main.jpeg','minecraft-sub1':'studio/minecraft-sub1.jpeg','minecraft-sub2':'studio/minecraft-sub2.jpeg','event-ascension':'events/ascension.png','event-ignite':'events/ignite.jpeg','event-mobilemasters':'events/mobilemasters.jpeg'};
const manifest={};
for(const [id,file] of Object.entries(sources)){
 const input=await fs.readFile(file); const meta=await sharp(input).metadata();
 const widths=[480,800,1200,1600].filter(w=>w<meta.width); widths.push(Math.min(meta.width,1600));
 const variants=[];
 for(const w of [...new Set(widths)]){
  const path=`/assets/images/${id}-${w}.webp`;
  await sharp(input).rotate().resize({width:w,withoutEnlargement:true}).webp({quality:82}).toFile('public'+path);
  variants.push({width:w,path,bytes:(await fs.stat('public'+path)).size});
 }
 manifest[id]={source:file,width:meta.width,height:meta.height,sha256:crypto.createHash('sha256').update(input).digest('hex'),variants};
}
const brandFiles=['logo1.png','logo2.png','logo3.jpg','logo4.png','logo5.png','logo6.png','logo7.png','logo8.png','logo9.png','logo.19.png'];
for(const file of brandFiles) await sharp('brands/'+file).trim().resize({width:320,height:120,fit:'inside',withoutEnlargement:true}).webp({quality:90}).toFile('public/assets/brands/'+file.replace(/\.(png|jpg)$/,'.webp'));
await fs.copyFile('logo.png','public/assets/logo.png');
await fs.mkdir('src/content',{recursive:true});
await fs.writeFile('src/content/assets.json',JSON.stringify(manifest,null,2));
console.log(`Optimized ${Object.keys(sources).length} image uses and 10 brand logos; originals unchanged.`);
