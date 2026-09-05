
(()=>{
const cfg=window.BONZI_SITE||{};
document.querySelectorAll('.js-download').forEach(a=>a.href=cfg.downloadUrl||'#');
document.querySelectorAll('[data-version]').forEach(e=>e.textContent=cfg.version||'4.1.4');
document.querySelectorAll('[data-installer]').forEach(e=>e.textContent=cfg.installerName||'BonziBrowser-Setup-4.1.4.exe');
document.querySelectorAll('[data-size]').forEach(e=>e.textContent=cfg.installerSize||'—');
document.querySelectorAll('[data-sha]').forEach(e=>e.textContent=cfg.sha256||'—');
document.querySelectorAll('[data-date]').forEach(e=>e.textContent=cfg.releaseDate||'—');
document.querySelectorAll('.js-release').forEach(a=>a.href=cfg.releaseUrl||cfg.releasesUrl||'#');
const navBtn=document.querySelector('.nav-toggle'),nav=document.querySelector('.main-nav');if(navBtn&&nav){navBtn.onclick=()=>nav.classList.toggle('open');document.addEventListener('click',e=>{if(!nav.contains(e.target)&&e.target!==navBtn)nav.classList.remove('open')})}
const selector=document.querySelector('.demo-selector');if(selector){selector.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;selector.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.demo-view').forEach(v=>v.classList.toggle('active',v.dataset.view===b.dataset.view))})}
const counters=document.querySelectorAll('[data-count]');if(counters.length&&'IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,to=Number(el.dataset.count||0),start=performance.now(),dur=900;function tick(t){const p=Math.min(1,(t-start)/dur);el.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString();if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);io.unobserve(el)}),{threshold:.4});counters.forEach(c=>io.observe(c))}
if(matchMedia('(max-width:700px)').matches){document.querySelectorAll('.js-download').forEach(a=>{const ml=a.querySelector('.mobile-label');if(ml)ml.textContent='Download on Windows PC';else a.textContent='Download for Windows on your PC'})}
})();
