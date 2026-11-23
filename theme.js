// Light/dark switch for reading pages; the choice is remembered per browser.
(function(){
  var root=document.documentElement, KEY='reading-theme';
  try{ if(localStorage.getItem(KEY)==='light') root.dataset.theme='light'; }catch(e){}
  function label(b){ b.textContent = root.dataset.theme==='light' ? '☾ dark' : '☀ light'; }
  document.addEventListener('DOMContentLoaded',function(){
    var top=document.querySelector('.top'); if(!top) return;
    var b=document.createElement('button'); b.className='theme-toggle'; b.type='button';
    b.setAttribute('aria-label','Switch reading theme'); label(b);
    b.onclick=function(){
      if(root.dataset.theme==='light') delete root.dataset.theme; else root.dataset.theme='light';
      try{ localStorage.setItem(KEY, root.dataset.theme||'dark'); }catch(e){}
      label(b);
    };
    top.appendChild(b);
  });
})();
