// Al entrar a una página nueva (no al volver atrás) se empieza siempre arriba, salvo que el enlace apunte a una sección (#id).
const nav0=performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming|undefined;
if(!location.hash&&nav0?.type!=='back_forward'){scrollTo(0,0);document.documentElement.scrollIntoView({block:'start'});}
import {categories} from '../content/projects';
const locale=document.documentElement.lang;
const menu=document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav=document.querySelector<HTMLElement>('.main-nav');
function closeMenu(restore=false){menu?.setAttribute('aria-expanded','false');nav?.classList.remove('open');if(restore)menu?.focus();}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav?.classList.toggle('open',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true')closeMenu(true);});
document.addEventListener('click',e=>{if(!(e.target as Element).closest('.site-header'))closeMenu();});
matchMedia('(min-width: 768px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
document.querySelectorAll<HTMLAnchorElement>('[data-language]').forEach(a=>{a.addEventListener('click',()=>{if(document.querySelector('.hero')&&location.hash)a.hash=location.hash;});});
const sections=Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
if(sections.length>1){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;const id=entry.target.id;document.querySelectorAll('[data-section-link]').forEach(a=>{if(a.getAttribute('data-section-link')===id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});document.querySelectorAll('[data-nav]').forEach(a=>{if(a.getAttribute('data-nav')===id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}},{rootMargin:'-25% 0px -50% 0px',threshold:0});sections.forEach(s=>observer.observe(s));}
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!reduced.matches)import('./motion').then(m=>m.initMotion()).catch(()=>{});
document.querySelectorAll<HTMLElement>('.service-card,.project-card,.faq-item').forEach(el=>el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--mx',`${e.clientX-r.left}px`);el.style.setProperty('--my',`${e.clientY-r.top}px`);}));
const track=document.querySelector<HTMLElement>('.brand-track');
document.querySelector('[data-brand-prev]')?.addEventListener('click',()=>track?.scrollBy({left:-350,behavior:reduced.matches?'instant':'smooth'}));
document.querySelector('[data-brand-next]')?.addEventListener('click',()=>track?.scrollBy({left:350,behavior:reduced.matches?'instant':'smooth'}));
document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(gallery=>{
 const buttons=gallery.querySelectorAll<HTMLButtonElement>('[data-filter]');const cards=gallery.querySelectorAll<HTMLElement>('[data-categories]');
 if(!buttons.length)return;
 function filter(value:string,update=false){const category=categories.includes(value)?value:'all';let count=0;cards.forEach(card=>{const show=category==='all'||card.dataset.categories?.split(' ').includes(category);card.hidden=!show;if(show)count++;});buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===category)));const empty=gallery.querySelector<HTMLElement>('[data-empty]');if(empty)empty.hidden=count>0;const status=gallery.querySelector('[data-result-count]');if(status)status.textContent=`${count} ${gallery.dataset.resultsLabel}`;if(update){const url=new URL(location.href);if(category==='all')url.searchParams.delete('category');else url.searchParams.set('category',category);history.pushState({},'',url);}}
 buttons.forEach(button=>button.addEventListener('click',()=>filter(button.dataset.filter||'all',true)));
 filter(new URLSearchParams(location.search).get('category')||'all');addEventListener('popstate',()=>filter(new URLSearchParams(location.search).get('category')||'all'));
});
const dialog=document.querySelector<HTMLDialogElement>('.lightbox');let trigger:HTMLElement|null=null;
document.querySelectorAll<HTMLButtonElement>('[data-lightbox]').forEach(button=>button.addEventListener('click',()=>{const img=dialog?.querySelector<HTMLImageElement>('img');if(!dialog||!img)return;trigger=button;img.src=button.dataset.lightbox||'';img.alt=button.querySelector('img')?.alt||'';dialog.showModal();}));
dialog?.querySelector('button')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('close',()=>trigger?.focus());dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach(form=>{
 const messages=JSON.parse(form.dataset.messages||'{}') as Record<string,string>;const status=form.querySelector<HTMLElement>('.form-status')!;const submit=form.querySelector<HTMLButtonElement>('[type=submit]')!;const label=submit.querySelector('span')!;const select=form.elements.namedItem('projectType') as HTMLSelectElement;
 const service=new URLSearchParams(location.search).get('service');if(service&&Array.from(select.options).some(o=>o.value===service))select.value=service;
 let requestId=crypto.randomUUID();let busy=false;
 function showError(name:string,code:string){const input=form.elements.namedItem(name) as HTMLElement|null;const el=form.querySelector<HTMLElement>(`#${name}-error`);if(input&&el){input.setAttribute('aria-invalid','true');input.setAttribute('aria-describedby',el.id);el.textContent=messages[code]||messages.invalid;}}
 form.addEventListener('input',()=>{if(!busy)requestId=crypto.randomUUID();});
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(busy)return;status.textContent='';status.classList.remove('success');form.querySelectorAll('[aria-invalid]').forEach(el=>{el.removeAttribute('aria-invalid');el.removeAttribute('aria-describedby');});form.querySelectorAll('.field-error').forEach(el=>el.textContent='');
  const data=new FormData(form);let invalid=false;
  for(const name of ['name','email','company','projectType','message','privacy']){const field=form.elements.namedItem(name) as HTMLInputElement;const val=String(data.get(name)||'').trim();if(field.validity.valueMissing||!val){showError(name,name==='privacy'?'privacy':'required');invalid=true;}else if(field.validity.typeMismatch){showError(name,'email');invalid=true;}else if((field.minLength>0&&val.length<field.minLength)||(field.maxLength>0&&val.length>field.maxLength)){showError(name,'length');invalid=true;}}
  if(invalid){status.textContent=messages.invalid;form.querySelector<HTMLElement>('[aria-invalid]')?.focus();return;}
  busy=true;submit.disabled=true;label.textContent=form.dataset.sending||'';
  const abort=new AbortController();const timeout=setTimeout(()=>abort.abort(),15000);
  try{
   const tokenRes=await fetch('/api/csrf.php',{credentials:'same-origin',signal:abort.signal,headers:{Accept:'application/json'}});
   if(!tokenRes.headers.get('content-type')?.includes('application/json'))throw new Error('unavailable');
   const session=await tokenRes.json();if(!tokenRes.ok)throw new Error(session.error||'unavailable');
   const payload={name:String(data.get('name')).trim(),email:String(data.get('email')).trim(),company:String(data.get('company')).trim(),projectType:data.get('projectType'),message:String(data.get('message')).trim(),privacy:data.get('privacy')==='on',website:String(data.get('website')||''),requestId,locale};
   const response=await fetch('/api/contact.php',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json','X-CSRF-Token':session.token},body:JSON.stringify(payload),signal:abort.signal});
   const result=await response.json();if(!response.ok){if(result.fields)Object.entries(result.fields).forEach(([name,code])=>showError(name,String(code)));throw new Error(result.error||'network');}
   if(result.ok!==true)throw new Error('network');status.textContent=messages.success;status.classList.add('success');form.reset();requestId=crypto.randomUUID();
  }catch(error){const code=error instanceof Error?error.message:'network';status.textContent=messages[code]||messages.network;}
  finally{clearTimeout(timeout);busy=false;submit.disabled=false;label.textContent=form.dataset.send||'';status.focus();}
 });
});
