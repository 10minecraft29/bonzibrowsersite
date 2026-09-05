(()=>{
  const cfg=window.BONZI_SITE||{};
  const q=(s)=>document.querySelector(s), qa=(s)=>[...document.querySelectorAll(s)];
  qa('.js-download').forEach(a=>a.href=cfg.downloadUrl||'#');
  qa('.js-release').forEach(a=>a.href=cfg.releaseUrl||cfg.releasesUrl||'#');
  qa('.js-repo').forEach(a=>a.href=cfg.repoUrl||'#');
  qa('[data-version]').forEach(e=>e.textContent=cfg.version||'4.1.13');
  qa('[data-installer]').forEach(e=>e.textContent=cfg.installerName||'BonziBrowser-Setup-4.1.13.exe');
  qa('[data-size]').forEach(e=>e.textContent=cfg.installerSize||'—');
  qa('[data-sha]').forEach(e=>e.textContent=cfg.sha256||'—');
  qa('[data-date]').forEach(e=>e.textContent=cfg.releaseDate||'—');
  qa('[data-platform]').forEach(e=>e.textContent=cfg.platform||'Windows x64');

  const navBtn=q('.nav-toggle'), nav=q('.main-nav');
  if(navBtn&&nav){
    navBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');navBtn.setAttribute('aria-expanded',String(open));});
    document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!navBtn.contains(e.target)){nav.classList.remove('open');navBtn.setAttribute('aria-expanded','false')}});
  }
  const selector=q('.demo-selector');
  if(selector){selector.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;qa('.demo-selector button').forEach(x=>x.classList.toggle('active',x===b));qa('.demo-view').forEach(v=>v.classList.toggle('active',v.dataset.view===b.dataset.view));});}

  const counters=qa('[data-count]');
  if(counters.length&&'IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    const io=new IntersectionObserver(entries=>entries.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,to=Number(el.dataset.count||0),start=performance.now(),dur=850;function tick(t){const p=Math.min(1,(t-start)/dur);el.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString();if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);io.unobserve(el)}),{threshold:.35});counters.forEach(c=>io.observe(c));
  } else counters.forEach(c=>c.textContent=Number(c.dataset.count||0).toLocaleString());

  qa('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{const text=btn.dataset.copy==='download'?cfg.downloadUrl:btn.dataset.copy;const feedback=btn.parentElement?.querySelector('.copy-feedback');try{await navigator.clipboard.writeText(text||'');if(feedback)feedback.textContent='Copied';setTimeout(()=>{if(feedback)feedback.textContent=''},1600)}catch{if(feedback)feedback.textContent='Copy failed'}}));

  const isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if(isMobile){qa('.js-download').forEach(a=>{const ml=a.querySelector('.mobile-label');if(ml)ml.textContent='Download on Windows PC';});qa('.mobile-download-note').forEach(n=>n.style.display='block');}
})();
