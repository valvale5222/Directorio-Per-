/* ============================================================
   NAVEGACIÓN
   ============================================================ */
function go(s, sub) {
  document.querySelectorAll('.section').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  document.getElementById(s).classList.add('active');
  document.querySelector('.tab[data-s="' + s + '"]').classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  if (sub) {
    if (s === 'ventas' && window._vtSwitchTab) window._vtSwitchTab(sub);
    if (s === 'objetivos') goObjTab(sub);
  }
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize'));
    if(s==='clientes'){
      if(window._renderTm)window._renderTm();
      if(window._initCliCharts)window._initCliCharts();
    }
    if(s==='ventas'){
      if(window._animVtHero)window._animVtHero();
    }
    if(s==='participacion'){
      if(window._initPartCharts)window._initPartCharts();
    }
  },80);
}
document.querySelectorAll('.tab').forEach(t => t.onclick = () => go(t.dataset.s));


/* ============================================================
   MODAL
   ============================================================ */
function openModal(title, html, subtitle) {
  document.getElementById('modalTitle').textContent = title;
  var sub = document.getElementById('modalSubtitle');
  if (sub) { sub.textContent = subtitle || ''; sub.style.display = subtitle ? 'block' : 'none'; }
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modalBg').classList.add('open');
}
let _mci = null;
function closeModal() {
  if(_mci){ _mci.destroy(); _mci = null; }
  /* Reset flip state so next open always shows front face */
  var inner = document.getElementById('mdlFlipInner');
  if (inner) inner.classList.remove('is-flipped');
  document.getElementById('modalBg').classList.remove('open');
}
document.addEventListener('keydown', function(e){ if(e.key==='Escape'){closeModal();closeOrgModal();} });

/* Formato moneda */
function fmtMM(n) {
  if (n === null || n === undefined) return '—';
  if (Math.abs(n) >= 1) return '$' + n.toFixed(2) + 'MM';
  return '$' + Math.round(n * 1000) + 'k';
}
function fmtPct(n) {
  if (n === null || n === undefined) return '—';
  return n.toFixed(2) + '%';
}
function fmt(n) { return n == null ? '—' : n.toFixed(2); }



/* ============================================================
   CHART.JS INITS — guarded
   ============================================================ */

/* ============================================================
   CHART-IN-MODAL
   ============================================================ */
function _openChartModal(title, cfg, tableHtml) {
  if(_mci){ _mci.destroy(); _mci = null; }
  const h = tableHtml ? 320 : 420;
  const mb = tableHtml ? 'margin-bottom:18px' : 'margin-bottom:0';
  const html = `<div class="chart-wrap" style="height:${h}px;${mb}"><canvas id="_mcanvas"></canvas></div>` + (tableHtml||'');
  openModal(title, html);
  if(typeof Chart!=='undefined'){
    setTimeout(()=>{ const el=document.getElementById('_mcanvas'); if(el) _mci=new Chart(el,cfg); },60);
  }
}

/* ============================================================
   FLIP CARDS
   ============================================================ */
const _ct = {};
function cardClick(cardEl, dblFn) {
  const k = cardEl.dataset.flip;
  if (_ct[k]) {
    clearTimeout(_ct[k]); delete _ct[k];
    if (dblFn) dblFn();
  } else {
    _ct[k] = setTimeout(() => {
      delete _ct[k];
      if (!cardEl.classList.contains('flipped')) flipCard(cardEl);
    }, 250);
  }
}
function flipCard(cardEl) {
  const back = cardEl.querySelector('.flip-card-back');
  const inner = cardEl.querySelector('.flip-card-inner');
  if (!back.dataset.ready) {
    back.innerHTML = _getFlipTable(cardEl.dataset.flip);
    back.dataset.ready = '1';
  }
  const goingToBack = !cardEl.classList.contains('flipped');
  if (goingToBack) {
    inner.style.minHeight = back.scrollHeight + 'px';
  } else {
    inner.style.minHeight = '';
  }
  cardEl.classList.toggle('flipped');
}


/* ============================================================
   LOGO (base64)
   ============================================================ */
var _logoB64='img/logo-white.png';
document.getElementById('hdrLogo').src = _logoB64;
(function(){ var cl = document.getElementById('coverBrandLogo'); if (cl) cl.src = _logoB64; })();




/* ============================================================
   Formato ejecutivo compartido — $X.XXMM / $XXXK / $X entero
   Usado por Top 20, Por Tipo de Venta y Detalle de Ventas.
   ============================================================ */
function fmtEjecutivo(v){
  var neg = v<0, a = Math.abs(v), s;
  if(a>=1000000) s='$'+(a/1000000).toFixed(2)+'MM';
  else if(a>=1000) s='$'+Math.round(a/1000)+'K';
  else s='$'+Math.round(a);
  return neg?('-'+s):s;
}
/* Gradiente radial reutilizable para donas premium (con fallback a color plano) */
function radialGrad(ctx, area, c1, c2){
  if(!area || typeof ctx.createRadialGradient!=='function') return c2;
  var cx=area.left+area.width/2, cy=area.top+area.height/2;
  var r=Math.max(area.width,area.height)/2;
  var g=ctx.createRadialGradient(cx,cy,r*0.25,cx,cy,r);
  g.addColorStop(0,c1);
  g.addColorStop(1,c2);
  return g;
}

