import fs from 'node:fs/promises';
const assets=JSON.parse(await fs.readFile('src/content/assets.json','utf8'));
for(const [name,a]of Object.entries(assets)){if(!a.width||!a.height||!a.variants.length)throw new Error(`Invalid asset ${name}`);for(const v of a.variants)await fs.access('public'+v.path);}
for(const lang of ['es','en']){const dictionary=await fs.readFile('src/i18n/index.ts','utf8');if(!dictionary.includes(`${lang}:`))throw new Error('Missing language');}
console.log('Content and asset references validated. Editorial drafts remain review-only.');
