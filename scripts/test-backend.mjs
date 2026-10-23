import fs from 'node:fs/promises';import path from 'node:path';import {spawn,spawnSync} from 'node:child_process';import assert from 'node:assert/strict';import crypto from 'node:crypto';import os from 'node:os';
const root=process.cwd();const php=process.env.PHP_BIN||path.join(root,'tools/php/php.exe');const ext=path.join(root,'tools/php/ext');
const temp=await fs.mkdtemp(path.join(os.tmpdir(),'begamer-test-'));const origin='http://127.0.0.1:4389';
for(const file of ['server/private/bootstrap.php','server/private/validation.php','server/public/api/_loader.php','server/public/api/csrf.php','server/public/api/contact.php']){const lint=spawnSync(php,['-l',file],{encoding:'utf8'});assert.equal(lint.status,0,lint.stdout+lint.stderr);}
const privateDir=path.join(root,'server/private');const config=path.join(temp,'config.php');
await fs.writeFile(config,`<?php return ['enabled'=>true,'origin'=>'${origin}','transport'=>'test','rate_secret'=>'${crypto.randomBytes(32).toString('hex')}','storage'=>'${temp.replaceAll('\\','/')}','privacy_version'=>'test-only'];`);
async function start(failure=false,disabled=false){const server=spawn(php,['-d',`extension_dir=${ext}`,'-d','extension=mbstring','-d','extension=openssl','-S','127.0.0.1:4389','scripts/php-router.php'],{cwd:root,env:{...process.env,BEGAMER_PRIVATE_DIR:privateDir,BEGAMER_CONFIG:disabled?path.join(temp,'missing.php'):config,BEGAMER_TEST_MODE:'1',BEGAMER_TEST_FAILURE:failure?'1':'0'},stdio:'pipe',windowsHide:true});server.stderr.on('data',()=>{});await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('PHP did not start')),10000);server.stderr.on('data',data=>{if(data.toString().includes('Development Server')){clearTimeout(timer);resolve();}});server.once('error',reject);});return server;}
const stop=server=>new Promise(resolve=>{server.once('exit',resolve);server.kill();});
async function session(){const r=await fetch(origin+'/api/csrf.php');assert.equal(r.status,200);return{cookie:r.headers.get('set-cookie').split(';')[0],token:(await r.json()).token};}
const payload=()=>({name:'Prueba local',email:'test@example.com',company:'Pruebas',projectType:'schools',message:'Mensaje de prueba local, no enviar a personas reales.',privacy:true,website:'',requestId:crypto.randomUUID(),locale:'es'});
async function send(s,p,extra={}){return fetch(origin+'/api/contact.php',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json',Cookie:s.cookie,'X-CSRF-Token':s.token,...extra},body:JSON.stringify(p)});}
let server=await start();let count=0;
try{
 const s=await session();assert.equal((await send(s,payload(),{Origin:'https://invalid.example'})).status,403);count++;
 assert.equal((await send(s,payload(),{'X-CSRF-Token':'bad'})).status,403);count++;
 let p=payload();p.email='bad\r\nBcc: other@example.com';let r=await send(s,p);assert.equal(r.status,422);assert.equal((await r.json()).fields.email,'email');count++;
 p=payload();p.privacy=false;assert.equal((await send(s,p)).status,422);count++;
 p=payload();r=await send(s,p);assert.equal(r.status,200);assert.equal((await r.json()).ok,true);count++;
 assert.equal((await send(s,p)).status,200);assert.equal((await fs.readFile(path.join(temp,'test-deliveries.log'),'utf8')).trim().split('\n').length,1);count++;
 assert.equal((await send(s,payload())).status,200);r=await send(s,payload());assert.equal(r.status,429);assert.ok(r.headers.get('retry-after'));count++;
 await stop(server);await fs.writeFile(path.join(temp,'rate-limits.json'),'{}');server=await start(true);const fail=await session();r=await send(fail,payload());assert.equal(r.status,503);assert.equal((await r.json()).error,'network');count++;
 await stop(server);server=await start(false,true);assert.equal((await fetch(origin+'/api/csrf.php')).status,503);count++;
 console.log(`PASS: PHP lint + ${count} integration assertions. Simulated transport only; no email sent.`);
}finally{await stop(server);await fs.rm(temp,{recursive:true,force:true});}
