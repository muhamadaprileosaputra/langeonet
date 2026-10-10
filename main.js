document.addEventListener('DOMContentLoaded',()=>{
 if(window.lucide) lucide.createIcons();
 const nav=document.getElementById('navbar');
 const updateNav=()=>{if(nav)nav.classList.toggle('nav-scrolled',window.scrollY>20); const btt=document.getElementById('btt'); if(btt){const s=window.scrollY>400;btt.classList.toggle('opacity-0',!s);btt.classList.toggle('translate-y-3',!s);btt.classList.toggle('pointer-events-none',!s);btt.classList.toggle('opacity-100',s);btt.classList.toggle('translate-y-0',s);}};
 window.addEventListener('scroll',updateNav);updateNav();
 let mo=false;const mm=document.getElementById('mobile-menu'), im=document.getElementById('icon-menu'),ic=document.getElementById('icon-close'),mb=document.getElementById('menu-btn');
 window.closeMenu=()=>{mo=false;if(mm)mm.classList.remove('open');if(im)im.classList.remove('hidden');if(ic)ic.classList.add('hidden');if(mb){mb.style.background='';mb.style.borderColor='';}};
 if(mb)mb.addEventListener('click',()=>{mo=!mo;if(mm)mm.classList.toggle('open',mo);if(im)im.classList.toggle('hidden',mo);if(ic)ic.classList.toggle('hidden',!mo);if(mo){mb.style.background='#e0f2fe';mb.style.borderColor='#38bdf8'}else{mb.style.background='';mb.style.borderColor=''}});
 const ro=('IntersectionObserver' in window)?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08}):null;document.querySelectorAll('.reveal').forEach(el=>{if(ro)ro.observe(el);else el.classList.add('visible')});
 document.querySelectorAll('.faq-trigger').forEach(t=>t.addEventListener('click',()=>{const p=t.parentElement,was=p.classList.contains('active');document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('active'));if(!was)p.classList.add('active')}));
 let tick=0,lag=61;setInterval(()=>{const p=document.getElementById('ping-value');if(!p)return;p.innerText=(tick++%10===9)?(lag=lag>=70?61:lag+1):Math.floor(Math.random()*21)+40;},1000);
});
function goToPaket(){window.location.href='/paket/';}
