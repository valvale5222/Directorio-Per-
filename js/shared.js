/* ============================================================
   NAVEGACIÓN
   ============================================================ */
function go(s, sub) {
  document.querySelectorAll('.section').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  document.getElementById(s).classList.add('active');
  document.querySelector('.tab[data-s="' + s + '"]').classList.add('active');
  /* La portada ocupa justo la pantalla y no admite scroll; el resto de vistas sí */
  document.documentElement.classList.toggle('on-portada', s === 'portada');
  /* Al volver a la portada, su entrada normal (fadeUp) corre una sola vez */
  if (s === 'portada') { var cv = document.querySelector('#portada .cover'); if (cv) cv.classList.remove('xi-done'); }
  window.scrollTo({top:0, behavior: s === 'portada' ? 'auto' : 'smooth'});
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
    if(s==='moventas'){
      if(window._initMoCharts)window._initMoCharts();
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

/* Configuración común de las donas de "Composición de Ventas 2026"
   (Por clientes / Por tipo): mismo grosor de anillo y misma separación en hover. */
var DONA_CUTOUT = '70%';
var DONA_HOVER_OFFSET = 12;

/* Centro unificado para donas: % grande · etiqueta uppercase · importe.
   Todo se dimensiona con el radio interior real del anillo y cada línea se
   reduce si no cabe, de modo que el texto nunca toca el aro.
   o = {pct:Number, label:String, sub:String, color:String} */
function drawDonaCenter(chart, o){
  var area = chart.chartArea; if(!area || !o) return;
  var ctx = chart.ctx;
  var cx = area.left + area.width/2, cy = area.top + area.height/2;
  var arc = chart.getDatasetMeta(0).data[0];
  var ir = (arc && arc.innerRadius) ? arc.innerRadius : Math.min(area.width, area.height)*0.35;
  var maxW = ir*1.5;                 /* ancho útil en la franja central del hueco */

  function fit(weight, size, min, text, width){
    ctx.font = weight+' '+size+'px Inter,sans-serif';
    while(size > min && ctx.measureText(text).width > width){
      size -= 0.5;
      ctx.font = weight+' '+size+'px Inter,sans-serif';
    }
    return size;
  }

  var pctTxt = o.pct.toFixed(2)+'%';
  var fPct = fit(900, Math.max(18, Math.min(ir*0.40, 36)), 14, pctTxt, maxW*0.92);
  var fLbl = Math.max(9.5, Math.min(ir*0.135, 12.5));
  var fSub = Math.max(10, Math.min(ir*0.14, 12.5));

  /* Etiqueta en mayúsculas, envuelta en máximo 2 líneas */
  var lblTxt = String(o.label || '').toUpperCase();
  ctx.font = '700 '+fLbl+'px Inter,sans-serif';
  var words = lblTxt.split(' '), lines = [], cur = '';
  words.forEach(function(w){
    var t = cur ? cur+' '+w : w;
    if(ctx.measureText(t).width > maxW*0.88 && cur){ lines.push(cur); cur = w; } else cur = t;
  });
  if(cur) lines.push(cur);
  if(lines.length > 2) lines = [lines[0], lines.slice(1).join(' ')];
  lines.forEach(function(l){ fLbl = Math.min(fLbl, fit(700, fLbl, 8.5, l, maxW*0.88)); });

  var lh = fLbl*1.2, g1 = Math.max(5, ir*0.09), g2 = Math.max(4, ir*0.07);
  var total = fPct*0.86 + g1 + lines.length*lh + g2 + fSub;
  var y = cy - total/2;

  ctx.save();
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillStyle = o.color || '#0a0a1e';
  ctx.font = '900 '+fPct+'px Inter,sans-serif';
  ctx.fillText(pctTxt, cx, y - fPct*0.07);
  y += fPct*0.86 + g1;
  ctx.fillStyle = '#7b8db0';
  ctx.font = '700 '+fLbl+'px Inter,sans-serif';
  if('letterSpacing' in ctx) ctx.letterSpacing = '0.8px';
  lines.forEach(function(l, i){ ctx.fillText(l, cx, y + i*lh); });
  if('letterSpacing' in ctx) ctx.letterSpacing = '0px';
  y += lines.length*lh + g2;
  if(o.sub){
    /* Ancho disponible = cuerda real del hueco a la altura de esta línea */
    var dy = Math.max(Math.abs(y - cy), Math.abs(y + fSub - cy));
    var chord = 2*Math.sqrt(Math.max(ir*ir - dy*dy, 0))*0.86;
    fSub = fit(600, fSub, 9, o.sub, chord);
    ctx.fillStyle = '#3d4a6a';
    ctx.font = '600 '+fSub+'px Inter,sans-serif';
    ctx.fillText(o.sub, cx, y);
  }
  ctx.restore();
}


/* Altura real de la cabecera fija → --hdr-h (la usan las vistas que deben
   caber en una pantalla sin scroll, p. ej. el mosaico del Resumen). */
(function(){
  function setHdr(){
    var h = document.querySelector('header');
    if (h) document.documentElement.style.setProperty('--hdr-h', h.offsetHeight + 'px');
  }
  setHdr();
  window.addEventListener('resize', setHdr);
  window.addEventListener('load', setHdr);
  /* La cabecera puede cambiar de alto al cargar fuentes o al ajustar tabs */
  var hdr = document.querySelector('header');
  if (hdr && window.ResizeObserver) new ResizeObserver(setHdr).observe(hdr);
})();

/* Arranque en la portada: sin desplazamiento inicial ni restauración de scroll */
(function(){
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch(e){}
  var p = document.getElementById('portada');
  if (p && p.classList.contains('active')) {
    document.documentElement.classList.add('on-portada');
    window.scrollTo(0, 0);
    window.addEventListener('load', function(){
      if (p.classList.contains('active')) window.scrollTo(0, 0);
    });
  }
})();


/* ============================================================
   TEMPO DE PRESENTACIÓN — Ventas · Pipeline · Objetivos · Clientes
   Las animaciones de entrada (fadeUp, apariciones de cards, barras que
   crecen, cambio de sub-vista…) se reproducen más pausadas para una
   lectura sutil en sala de directorio. Un solo control para las tres
   vistas: cada animación finita se estira a TEMPO_MIN–TEMPO_MAX ms.
   No toca animaciones en bucle (pulsos, brillos) ni las que ya son
   lentas, y respeta prefers-reduced-motion. Los retrasos escalonados
   (--i, --d) se mantienen tal cual.
   ============================================================ */
(function(){
  if (!document.getAnimations) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var SCOPE = '#ventas, #pipeline, #objetivos, #clientes';
  var FACTOR = 1.7, TEMPO_MIN = 600, TEMPO_MAX = 1100;

  document.addEventListener('animationstart', function(e){
    var el = e.target;
    if (!el || !el.closest || !el.closest(SCOPE)) return;
    var pseudo = e.pseudoElement || '';
    el.getAnimations({subtree:true}).forEach(function(a){
      if (a.animationName !== e.animationName || a._tempo) return;
      var fx = a.effect;
      if (!fx || fx.target !== el || (fx.pseudoElement || '') !== pseudo) return;
      var t = fx.getTiming();
      if (t.iterations === Infinity || !(t.duration > 0) || t.duration >= TEMPO_MAX) return;
      var target = Math.min(Math.max(t.duration * FACTOR, TEMPO_MIN), TEMPO_MAX);
      a._tempo = true;
      a.updatePlaybackRate(t.duration / target);
    });
  }, true);
})();


/* ============================================================
   BARRAS DE SUB-PESTAÑAS EN TABLET / MÓVIL
   Indicio de "hay más" (desvanecido, ver responsive.css) que se retira al
   llegar al final, y la pestaña activa siempre a la vista al cambiar.
   ============================================================ */
(function(){
  var SEL = '.vt-tabs, .obj-tabs, .part-tabs, .org-tabs';
  function upd(bar){
    var more = bar.scrollWidth - bar.clientWidth - bar.scrollLeft > 4;
    bar.classList.toggle('rs-more', more);
  }
  function showActive(bar){
    var a = bar.querySelector('.active');
    if (!a || bar.scrollWidth <= bar.clientWidth) return;
    var l = a.offsetLeft - bar.offsetLeft, r = l + a.offsetWidth;
    if (l < bar.scrollLeft || r > bar.scrollLeft + bar.clientWidth) {
      bar.scrollTo({left: Math.max(0, l - 24), behavior: 'smooth'});
    }
  }
  function init(){
    document.querySelectorAll(SEL).forEach(function(bar){
      upd(bar);
      bar.addEventListener('scroll', function(){ upd(bar); }, {passive: true});
      bar.addEventListener('click', function(){ setTimeout(function(){ showActive(bar); upd(bar); }, 60); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.addEventListener('resize', function(){ document.querySelectorAll(SEL).forEach(upd); });
  /* Al cambiar de sección las barras pasan de ocultas (ancho 0) a visibles */
  document.addEventListener('click', function(e){
    if (e.target.closest && e.target.closest('.tab')) setTimeout(function(){ document.querySelectorAll(SEL).forEach(upd); }, 120);
  });
})();
