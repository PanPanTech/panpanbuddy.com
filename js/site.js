(function(){
  var toggle=document.querySelector('.lc-menu-toggle');
  var links=document.querySelector('.lc-links');
  if(toggle && links){
    toggle.addEventListener('click',function(){
      var open=links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('[data-mock-ticket]').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      var concept=btn.getAttribute('data-mock-ticket')||'concept';
      var base=btn.getAttribute('data-ticket-base')||'ticket-success.html';
      window.location.href=base + (base.indexOf('?')>=0?'&':'?') + 'concept=' + encodeURIComponent(concept);
    });
  });
  var params=new URLSearchParams(window.location.search);
  var concept=params.get('concept');
  document.querySelectorAll('[data-concept-slot]').forEach(function(el){
    if(concept){ el.textContent=concept.replace(/-/g,' '); }
  });
  document.querySelectorAll('form[data-mock-form]').forEach(function(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var box=form.querySelector('[data-form-success]');
      if(box){ box.hidden=false; box.focus(); }
      form.reset();
    });
  });

  document.querySelectorAll('.lc-concept-visual').forEach(function(wrap){
    var main=wrap.querySelector('.lc-concept-main');
    if(!main) return;
    var thumbs=wrap.querySelectorAll('.lc-concept-thumb');
    thumbs.forEach(function(btn,i){
      if(i===0) btn.classList.add('is-active');
      btn.addEventListener('click',function(){
        var src=btn.getAttribute('data-src');
        if(src){ main.src=src; }
        thumbs.forEach(function(b){ b.classList.remove('is-active'); });
        btn.classList.add('is-active');
      });
    });
  });
})();
