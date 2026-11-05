/* ============================================================
   CAMBIO DE IMAGEN (portada)
   ============================================================ */
/* La imagen elegida se aplica a la portada y a la intro de apertura, y se guarda en
   este navegador (comprimida a JPEG ≤ 2400 px para caber en localStorage), de modo que
   la próxima vez que se abra la presentación la intro arranque ya con esa imagen. */
(function(){
  const ci = document.getElementById('coverImg');
  if (ci && !ci.style.backgroundImage) {
    ci.style.backgroundImage = "url('img/portada-bg.jpg')";
  }
  /* La card protagonista del Resumen (01 · Ventas) usa también la foto de portada. */
  const rp = document.getElementById('rsPhoto');
  if (ci && rp) rp.style.backgroundImage = ci.style.backgroundImage;
})();
function _applyCoverImg(url) {
  var css = 'url(' + url + ')';
  var ci = document.getElementById('coverImg'); if (ci) ci.style.backgroundImage = css;
  var xp = document.getElementById('xiPhoto');  if (xp) xp.style.backgroundImage = css;
  var rp = document.getElementById('rsPhoto');  if (rp) rp.style.backgroundImage = css;
}
function _saveCoverImg(dataUrl) {
  var img = new Image();
  img.onload = function() {
    var MAX = 2400, w = img.naturalWidth, h = img.naturalHeight, k = Math.min(1, MAX / Math.max(w, h));
    var cv = document.createElement('canvas');
    cv.width = Math.round(w * k); cv.height = Math.round(h * k);
    cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
    var q = [0.85, 0.75, 0.62, 0.5];
    for (var i = 0; i < q.length; i++) {
      try { localStorage.setItem('fp_cover_img', cv.toDataURL('image/jpeg', q[i])); return; }
      catch (e) { /* cuota excedida: se reintenta con menor calidad */ }
    }
    try { localStorage.removeItem('fp_cover_img'); } catch (e) {}
    console.warn('Portada: la imagen es demasiado grande para guardarse; solo se usará en esta sesión.');
  };
  img.src = dataUrl;
}
document.getElementById('imgInput').onchange = function(e) {
  const f = e.target.files[0]; if (!f) return;
  const rd = new FileReader();
  rd.onload = ev => { _applyCoverImg(ev.target.result); _saveCoverImg(ev.target.result); };
  rd.readAsDataURL(f);
};

let _chVA = null, _chMA = null, _chVAB = null, _chMAP = null;
var _chSeas = null;
var _chRef  = null;

/* ── Premium external tooltip — Frioteam identity ──
   Replaces Chart.js built-in tooltip entirely.
   Formatter auto-detected from canvas data-vt-fmt attribute.
   data-vt-fmt="mm"  → fmtMM  (ventas)
   data-vt-fmt="pct" → fmtPct (margen)                        ── */
function _vtExternalTooltip(ctx) {
  var chart = ctx.chart;
  var tooltip = ctx.tooltip;
  var wrap = chart.canvas.parentNode;

  /* Get or create tooltip element — one per chart-wrap */
  var el = wrap.querySelector('.vt-ext-tip');
  if (!el) {
    el = document.createElement('div');
    el.className = 'vt-ext-tip';
    wrap.appendChild(el);
  }

  /* Hide when cursor leaves chart */
  if (!tooltip.dataPoints || tooltip.opacity === 0) {
    el.style.opacity = '0';
    return;
  }

  /* Auto-detect formatter from canvas attribute */
  var isPct = chart.canvas.dataset && chart.canvas.dataset.vtFmt === 'pct';
  var fmt   = isPct ? fmtPct : fmtMM;

  /* Non-null data points, sorted 2026 → 2021 (protagonist first) */
  var dp = tooltip.dataPoints
    .filter(function(p){ return p.parsed.y !== null && p.parsed.y !== undefined; })
    .sort(function(a, b){ return parseInt(b.dataset.label,10) - parseInt(a.dataset.label,10); });

  if (!dp.length) { el.style.opacity = '0'; return; }

  var month = dp[0].label || '';
  var html = '<div class="vt-tip-hdr">' + month + '</div><div class="vt-tip-rows">';
  dp.forEach(function(p) {
    var yr  = p.dataset.label;
    var v   = p.parsed.y;
    var c   = p.dataset.borderColor;
    var star = yr === '2026';
    html += '<div class="vt-tip-row' + (star ? ' star' : '') + '">'
      + '<span class="vt-tip-dot" style="background:' + c + '"></span>'
      + '<span class="vt-tip-yr">' + yr + '</span>'
      + '<span class="vt-tip-val">' + fmt(v) + '</span>'
      + '</div>';
  });
  html += '</div>';
  el.innerHTML = html;
  el.style.opacity = '1';

  /* Position: right of caret, flip left if near chart edge */
  var wW   = wrap.offsetWidth;
  var wH   = wrap.offsetHeight;
  var tipW = el.offsetWidth  || 200;
  var tipH = el.offsetHeight || 130;
  var cx   = tooltip.caretX;
  var cy   = tooltip.caretY;

  var left = (cx + tipW + 20 > wW) ? (cx - tipW - 12) : (cx + 16);
  left = Math.max(0, Math.min(left, wW - tipW));
  var top  = Math.max(0, Math.min(cy - Math.round(tipH / 2), wH - tipH));

  el.style.left = left + 'px';
  el.style.top  = top  + 'px';
}

/* ── Ventas: shared Chart.js options (outside guard, used in modals too) ── */
var _vtSharedOpts = {
  responsive:true, maintainAspectRatio:false,
  animation:{duration:900, easing:'easeInOutQuart'},
  interaction:{mode:'index', intersect:false},
  plugins:{
    legend:{display:false},
    tooltip:{
      enabled:false,              /* built-in disabled — external tooltip renders instead */
      external:_vtExternalTooltip,
      mode:'index', intersect:false  /* still needed for dataPoints collection */
    }
  },
  scales:{
    x:{grid:{display:false}, border:{display:false},
       ticks:{font:{size:12}, color:'#94a3b8', maxRotation:0}},
    y:{grid:{color:'rgba(10,10,30,.05)', lineWidth:1}, border:{display:false},
       ticks:{font:{size:12}, color:'#94a3b8', padding:6}}
  },
  elements:{
    point:{radius:2},            /* fallback default; ventas datasets override via _vtDs() */
    line:{tension:.35, borderCapStyle:'round', borderJoinStyle:'round'}
  }
};

/* ── Destello sutil compartido — un solo barrido diagonal de luz cuando un gráfico
   (línea o barra) termina de cargar o de actualizarse. Reutilizable en cualquier Chart.js
   de Ventas/Pipeline: se agrega vía `plugins:[window._sheenPlugin]` en la config del chart
   y se dispara desde `animation.onComplete: function(a){ window._triggerSheen(a.chart); }` ── */
var _reduceMotionGlobal = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
window._sheenPlugin = {
  id: 'sheenOnLoad',
  afterDatasetsDraw: function(chart) {
    var s = chart.$sheen;
    if (!s) return;
    var area = chart.chartArea;
    var w = area.right - area.left, h = area.bottom - area.top;
    var band = 100;
    var x = area.left - band + s.progress * (w + band * 2);
    var ctx = chart.ctx;
    var grad = ctx.createLinearGradient(x, 0, x + band, 0);
    grad.addColorStop(0, 'rgba(255,255,255,0)');
    grad.addColorStop(0.5, 'rgba(255,255,255,.28)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, w, h);
    ctx.clip();
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = grad;
    ctx.fillRect(x, area.top, band, h);
    ctx.restore();
  }
};
/* Relleno en gradiente vertical reutilizable para barras Chart.js (en vez de color plano) */
window._vtGrad = function(top, bottom) {
  return function(ctx) {
    var area = ctx.chart.chartArea;
    if (!area) return top;
    var g = ctx.chart.ctx.createLinearGradient(0, area.top, 0, area.bottom);
    g.addColorStop(0, top); g.addColorStop(1, bottom);
    return g;
  };
};
window._triggerSheen = function(chart) {
  if (_reduceMotionGlobal || !chart || chart.$sheenRunning) return;
  chart.$sheenRunning = true;
  chart.$sheen = {progress: 0};
  var start = null, DUR = 700;
  function step(ts) {
    if (!chart.ctx) { chart.$sheenRunning = false; return; }
    if (!start) start = ts;
    var p = Math.min(1, (ts - start) / DUR);
    chart.$sheen.progress = p;
    chart.draw();
    if (p < 1) requestAnimationFrame(step);
    else { chart.$sheen = null; chart.$sheenRunning = false; }
  }
  requestAnimationFrame(step);
};

/* ============================================================
   EXECUTIVE INTRO · Apertura con foto de marca
   ------------------------------------------------------------
   La composición (foto de portada → isotipo rodando → logotipo →
   Revisión Ejecutiva / período / Grupo → barra de carga 0-100 %)
   corre en CSS (css/portada.css, bloque EXECUTIVE INTRO). Aquí se
   orquesta el cierre:

     1. cuando la barra de carga termina, la plataforma se revela
        por debajo y el marco fotográfico se reacomoda (top/left/
        width/height) hasta el rectángulo exacto de la portada: la
        cabecera aparece alrededor y la foto termina con el mismo
        encuadre, opacidad y velo que .cover;
     2. el marco cede opacidad sobre la portada real y su contenido
        (título, período, tarjetas) entra con un fadeUp escalonado;
     3. se retira la capa del DOM y se devuelve el scroll.

   Si la portada no está visible (p. ej. otra pestaña activa) se
   hace un fundido simple. Respeta prefers-reduced-motion.
   ============================================================ */
(function(){
  var root  = document.documentElement;
  var intro = document.getElementById('xIntro');

  if (window.__xIntroDone) return;
  window.__xIntroDone = true;

  if (!intro || !root.classList.contains('xi-boot')) {
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
    root.classList.remove('xi-boot', 'xi-reveal');
    return;
  }

  var REDUCED  = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COMP_END = REDUCED ? 1150 : 3550;  /* fin de la barra de carga: .35 s + --xi-load (3.2 s) */
  var HOLD     = REDUCED ? 300  : 250;   /* respiro con la barra llena                        */
  var GUARD    = 7000;                   /* respaldo global: nunca deja la app bloqueada      */
  var MORPH    = REDUCED ? 20   : 850;   /* = transición de .xi-frame.is-moving               */
  var OUT_DUR  = 500;                    /* = .xintro.is-out .xi-frame                        */

  var frame = document.getElementById('xiFrame');
  var closing = false, done = false, guardId = null, holdId = null;

  function close(){
    if (closing) return;
    closing = true;
    clearTimeout(guardId); clearTimeout(holdId);

    var cover = document.querySelector('#portada.active .cover');
    var r = cover ? cover.getBoundingClientRect() : null;

    /* La plataforma ya puede verse alrededor del marco. */
    root.classList.add('xi-reveal');
    intro.classList.add('is-morph');

    if (!r || !r.width || !r.height || !frame) {
      intro.classList.add('is-out');
      setTimeout(release, OUT_DUR);
      return;
    }

    /* 1) Reacomodo del marco hacia el rectángulo de la portada. */
    var vw = window.innerWidth, vh = window.innerHeight;
    frame.style.top = '0px'; frame.style.left = '0px';
    frame.style.width = vw + 'px'; frame.style.height = vh + 'px';
    void frame.offsetWidth;
    frame.classList.add('is-moving');
    frame.style.top    = r.top + 'px';
    frame.style.left   = r.left + 'px';
    frame.style.width  = r.width + 'px';
    frame.style.height = r.height + 'px';

    /* 2) Relevo: el marco cede y el contenido de la portada entra. */
    setTimeout(function(){
      cover.classList.remove('xi-done');
      cover.classList.add('xi-enter');
      /* Al terminar: xi-done fija el estado final sin animación (no se relanza fadeUp)
         y se retira xi-enter para no fijar transform y bloquear el hover. */
      setTimeout(function(){
        cover.classList.add('xi-done');
        cover.classList.remove('xi-enter');
      }, 1400);
      intro.classList.add('is-out');
      setTimeout(release, OUT_DUR);
    }, MORPH);
  }

  function release(){
    if (done) return;
    done = true;
    if (intro.parentNode) intro.parentNode.removeChild(intro);
    root.classList.remove('xi-boot', 'xi-reveal');
  }

  /* Espera a los logotipos y a la foto (máx. 1.2 s), luego al fin de la barra. */
  function assetsReady(cb){
    var fired = false;
    function go(){ if (!fired){ fired = true; cb(); } }
    var imgs = [].slice.call(intro.querySelectorAll('img'));
    var photo = document.getElementById('xiPhoto');
    var m = photo && /url\(["']?(.*?)["']?\)/.exec(photo.style.backgroundImage || '');
    if (m && m[1]) { var pi = new Image(); pi.src = m[1]; imgs.push(pi); }
    var pending = imgs.length;
    if (!pending) { go(); return; }
    imgs.forEach(function(img){
      if (img.complete) { if (--pending <= 0) go(); return; }
      function step(){ if (--pending <= 0) go(); }
      img.addEventListener('load',  step, {once:true});
      img.addEventListener('error', step, {once:true});
    });
    setTimeout(go, 1200);
  }

  assetsReady(function(){
    var remaining = Math.max(0, COMP_END - performance.now());
    holdId = setTimeout(close, remaining + HOLD);
  });

  guardId = setTimeout(close, GUARD);
})();
