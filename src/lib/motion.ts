import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

/* Splits a heading into masked words so each word can rise into view. */
function splitWords(el:HTMLElement){
 if(el.dataset.split)return el.querySelectorAll<HTMLElement>('.word-inner');
 const words=(el.textContent||'').trim().split(/\s+/);
 el.setAttribute('aria-label',words.join(' '));
 el.innerHTML=words.map(w=>`<span class="word" aria-hidden="true"><span class="word-inner">${w.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]!))}</span></span>`).join(' ');
 el.dataset.split='1';
 return el.querySelectorAll<HTMLElement>('.word-inner');
}

export function initMotion(){
 gsap.registerPlugin(ScrollTrigger);
 const root=document.documentElement;root.classList.add('has-motion');
 const bar=document.querySelector('.scroll-progress span');
 if(bar)gsap.to(bar,{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:.3}});
 const mm=gsap.matchMedia();

 mm.add('(prefers-reduced-motion: no-preference)',()=>{
  /* Hero: staggered entrance */
  if(document.querySelector('.hero')){
   gsap.fromTo('.hero h1>span',{yPercent:105,clipPath:'inset(0 0 100% 0)',skewY:6},{yPercent:0,clipPath:'inset(-20% -6% -25% -6%)',skewY:0,duration:1.1,ease:'expo.out',stagger:.09,delay:.1});
   gsap.from('.hero-eyebrow,.hero-description,.hero .button,.scroll-cue',{y:26,autoAlpha:0,duration:.8,ease:'power3.out',stagger:.08,delay:.5});
   gsap.from('.hero-photo img',{scale:1.25,autoAlpha:0,duration:1.6,ease:'expo.out'});
   gsap.from('.hero-emblem',{scale:.4,rotation:-35,autoAlpha:0,duration:1.4,ease:'back.out(1.6)',delay:.35});
  }

  /* Background beams drift at different depths while scrolling */
  gsap.utils.toArray<HTMLElement>('.bg-fx [data-depth]').forEach(el=>{const d=Number(el.dataset.depth)||0;gsap.to(el,{y:()=>d*innerHeight*2.2,xPercent:d*-40,invalidateOnRefresh:true,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:1}});});
  gsap.to('.bg-glow',{rotate:120,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:2}});

  /* Giant marquee: driven by scroll, skews with scroll speed */
  gsap.utils.toArray<HTMLElement>('[data-marquee]').forEach(row=>{
   const dir=Number(row.dataset.marquee)||1;const track=row.querySelector('.marquee-track');
   gsap.fromTo(track,{xPercent:dir>0?0:-33.333},{xPercent:dir>0?-33.333:0,ease:'none',scrollTrigger:{trigger:'.mega-marquee',start:'top bottom',end:'bottom top',scrub:.5}});
  });
  const skew=gsap.quickTo('.marquee-track',"skewX",{duration:.4,ease:'power3'});
  ScrollTrigger.create({trigger:'.mega-marquee',start:'top bottom',end:'bottom top',onUpdate:self=>skew(gsap.utils.clamp(-14,14,self.getVelocity()/-180)),onLeave:()=>skew(0),onLeaveBack:()=>skew(0)});

  /* Headings: words rise out of a mask */
  gsap.utils.toArray<HTMLElement>('.section-heading h2,.contact-copy h2,.faq-section h2,.internal-title,.detail-layout h2,.detail-cta h2,.legal h1').forEach(h=>{
   gsap.from(splitWords(h),{yPercent:115,rotate:5,duration:1,ease:'expo.out',stagger:.045,scrollTrigger:{trigger:h,start:'top 88%'}});
  });
  ScrollTrigger.batch('.section-intro,.eyebrow:not(.hero .eyebrow),.brand-item,.faq-description,.faq-aside .button',{start:'top 92%',once:true,onEnter:els=>gsap.from(els,{y:34,autoAlpha:0,duration:.8,ease:'power3.out',stagger:.06})});

  /* Form keeps full opacity (contrast + autofill), it only slides in */
  ScrollTrigger.batch('.contact-form',{start:'top 92%',once:true,onEnter:els=>gsap.from(els,{y:60,duration:.9,ease:'power3.out'})});

  /* Internal pages: hero copy, framed media that opens on scroll, staggered lists */
  gsap.from('.internal-hero .breadcrumbs,.internal-hero .eyebrow,.internal-description,.internal-hero .button',{y:24,opacity:0,duration:.8,ease:'power3.out',stagger:.08,delay:.2});
  gsap.utils.toArray<HTMLElement>('.internal-media').forEach(m=>{
   gsap.fromTo(m,{clipPath:'inset(8% 10% 8% 10% round 18px)'},{clipPath:'inset(0% 0% 0% 0% round 14px)',ease:'none',scrollTrigger:{trigger:m,start:'top 92%',end:'center 55%',scrub:.6}});
   const img=m.querySelector('img');if(img)gsap.fromTo(img,{scale:1.18},{scale:1,ease:'none',scrollTrigger:{trigger:m,start:'top bottom',end:'bottom top',scrub:true}});
  });
  gsap.utils.toArray<HTMLElement>('.format-list,.process-grid,.media-gallery').forEach(list=>gsap.from(list.children,{y:40,opacity:0,duration:.8,ease:'power3.out',stagger:.09,scrollTrigger:{trigger:list,start:'top 85%'}}));

  /* Projects: wipe-in reveal + inner parallax */
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card,i)=>{
   gsap.fromTo(card,{clipPath:'polygon(0 100%,100% 100%,100% 100%,0 100%)'},{clipPath:'polygon(0 0,100% 0,100% 100%,0 100%)',duration:1.25,ease:'expo.out',delay:(i%2)*.08,scrollTrigger:{trigger:card,start:'top 90%'}});
   const img=card.querySelector('img');
   if(img)gsap.fromTo(img,{yPercent:-7,scale:1.18},{yPercent:7,scale:1.18,ease:'none',scrollTrigger:{trigger:card,start:'top bottom',end:'bottom top',scrub:true}});
  });

  /* FAQ items slide in one by one */
  gsap.from('.faq-item',{y:36,opacity:0,duration:.7,ease:'power3.out',stagger:.07,scrollTrigger:{trigger:'.faq-list',start:'top 85%'}});
  gsap.fromTo('.faq-count',{yPercent:15},{yPercent:-15,ease:'none',scrollTrigger:{trigger:'.faq-section',start:'top bottom',end:'bottom top',scrub:true}});
 });

 mm.add('(prefers-reduced-motion: no-preference) and (min-width: 1024px)',()=>{
  /* Hero: photo shrinks into a framed card while the copy drifts away */
  if(document.querySelector('.hero'))gsap.timeline({scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.6}})
   .fromTo('.hero-photo',{clipPath:'inset(0% 0% 0% 0% round 0px)'},{clipPath:'inset(10% 5% 18% 6% round 22px)',scale:.94,ease:'none'},0)
   .to('.hero-content',{yPercent:-22,autoAlpha:.1,ease:'none'},0)
   .to('.hero-emblem',{y:180,rotation:28,scale:.65,ease:'none'},0)
   .to('.hero-diagonals',{x:220,ease:'none'},0);

  /* Services: cards flip up from the floor, one after another */
  gsap.from('.services-grid .service-card',{y:90,opacity:0,duration:1,ease:'expo.out',stagger:.12,clearProps:'transform',scrollTrigger:{trigger:'.services-grid',start:'top 82%'}});
  gsap.fromTo('.services-grid .service-image img',{yPercent:-8,scale:1.15},{yPercent:8,scale:1.15,ease:'none',scrollTrigger:{trigger:'.services-grid',start:'top bottom',end:'bottom top',scrub:true}});

  /* Brands: stage photo zooms out and opens like a curtain */

  /* About: the photo opens from a narrow window */
  gsap.fromTo('.about-photo',{clipPath:'polygon(30% 25%,70% 25%,75% 35%,75% 75%,25% 75%,25% 35%)'},{clipPath:'polygon(5% 0%,95% 0%,100% 16%,100% 100%,0% 100%,0% 16%)',ease:'none',scrollTrigger:{trigger:'.about-photo',start:'top 95%',end:'center 55%',scrub:.6}});
 });

 document.querySelectorAll('[data-filter],.faq-item summary').forEach(el=>el.addEventListener('click',()=>requestAnimationFrame(()=>ScrollTrigger.refresh())));
 addEventListener('load',()=>ScrollTrigger.refresh());
}
