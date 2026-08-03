(function(){
  var moTabsEl = document.getElementById('moTabs');
  if (!moTabsEl) return;
  function moSwitchTab(tab){
    document.querySelectorAll('#moTabs .mo3-tab-btn').forEach(function(t){ t.classList.toggle('active', t.dataset.motab===tab); });
    document.querySelectorAll('#moventas .mo3-view').forEach(function(v){ v.classList.toggle('active', v.dataset.motab===tab); });
  }
  moTabsEl.addEventListener('click', function(e){
    var t = e.target.closest('.mo3-tab-btn');
    if (!t || !t.dataset.motab) return;
    moSwitchTab(t.dataset.motab);
  });

  var srcImg = document.getElementById('coverImg');
  var frameBg = document.getElementById('moFrameBg');
  if (srcImg && frameBg && srcImg.style.backgroundImage) {
    frameBg.style.backgroundImage = srcImg.style.backgroundImage;
  }
})();
