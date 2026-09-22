/* ============================================================
   CAMBIO DE IMAGEN (portada)
   ============================================================ */
(function(){
  const ci = document.getElementById('coverImg');
  if (ci && !ci.style.backgroundImage) {
    ci.style.backgroundImage = "url('img/portada-bg.jpg')";
  }
})();
document.getElementById('imgInput').onchange = function(e) {
  const f = e.target.files[0]; if (!f) return;
  const rd = new FileReader();
  rd.onload = ev => document.getElementById('coverImg').style.backgroundImage = 'url(' + ev.target.result + ')';
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
       ticks:{font:{size:10}, color:'#94a3b8', maxRotation:0}},
    y:{grid:{color:'rgba(10,10,30,.05)', lineWidth:1}, border:{display:false},
       ticks:{font:{size:10}, color:'#94a3b8', padding:6}}
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
   EXECUTIVE INTRO · Apertura institucional previa al dashboard
   ------------------------------------------------------------
   La composición (isotipo rodando → logotipo Friopacking → Revisión
   Ejecutiva → barra de carga → pie institucional) corre en CSS,
   declarada en css/portada.css (bloque EXECUTIVE INTRO). Aquí se
   orquesta únicamente el cierre:

     · esperar a que los logotipos estén decodificados, para que
       el lockup nunca aparezca a medias ni salte;
     · esperar a que la composición termine (un único temporizador
       medido desde el inicio del documento, más un respaldo global);
     · crossfade continuo: primero se hace visible la plataforma por
       debajo (tapada aún por la intro, que es opaca) y un frame
       después la intro empieza a ceder opacidad, de modo que nunca
       hay pantalla vacía entre ambas. Solo se anima una capa —la
       intro—, lo que mantiene el paso a la portada a 60 fps;
     · liberar la aplicación: se retiran las clases de bloqueo, se
       devuelve el scroll y se elimina la capa del DOM cuando la
       transición ya terminó (nunca con display:none en pleno paso).

   No inicializa ni altera ningún módulo del dashboard: la app se
   monta con normalidad detrás de la intro (layout y medidas reales,
   solo la opacidad está en 0), por lo que ningún listener ni cálculo
   de los gráficos se ve afectado.

   Respeta prefers-reduced-motion: el CSS muestra la composición ya
   terminada y aquí solo se acorta la permanencia.
   ============================================================ */
(function(){
  var root  = document.documentElement;
  var intro = document.getElementById('xIntro');

  /* Una sola ejecución por carga, aunque el script llegase a incluirse dos veces. */
  if (window.__xIntroDone) return;
  window.__xIntroDone = true;

  /* Sin capa o sin la marca de arranque: la aplicación queda visible tal cual. */
  if (!intro || !root.classList.contains('xi-boot')) {
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
    root.classList.remove('xi-boot', 'xi-reveal');
    return;
  }

  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HOLD    = REDUCED ? 900  : 850;   /* permanencia tras completarse la composición */
  var GUARD   = REDUCED ? 1400 : 6500;  /* respaldo global, nunca deja la app bloqueada*/
  var COMP_END = 4150;                  /* fin de la composición declarada en el CSS   */
  var HANDOFF = 90;                     /* la app se revela antes de que la intro ceda */
  var OUT_DUR = REDUCED ? 320  : 870;   /* debe cubrir la transición de .xintro (CSS)  */

  var closing = false, done = false, guardId = null, holdId = null;

  /* ── Salida: crossfade continuo intro → plataforma ───────────────────── */
  function close(){
    if (closing) return;
    closing = true;
    clearTimeout(guardId); clearTimeout(holdId);

    /* 1) la plataforma entra por debajo (sigue tapada por la intro, opaca) */
    root.classList.add('xi-reveal');

    /* 2) un instante después la intro cede opacidad sobre la app ya visible */
    setTimeout(function(){
      intro.classList.add('is-out');
      setTimeout(release, OUT_DUR);
    }, HANDOFF);
  }

  /* ── Liberación: comportamiento normal de la aplicación ──────────────── */
  function release(){
    if (done) return;
    done = true;
    if (intro.parentNode) intro.parentNode.removeChild(intro);
    root.classList.remove('xi-boot', 'xi-reveal');   /* devuelve scroll y estados */
  }

  /* ── Espera 1: logotipos listos (nunca bloquea si alguno falla) ───────── */
  function logosReady(cb){
    var imgs = [].slice.call(intro.querySelectorAll('img'));
    var pending = imgs.length;
    var fired = false;
    function step(){ if (!fired && --pending <= 0){ fired = true; cb(); } }
    if (!pending) { cb(); return; }
    imgs.forEach(function(img){
      if (img.complete) { step(); return; }
      img.addEventListener('load',  step, {once:true});
      img.addEventListener('error', step, {once:true});   /* imagen rota: se sigue igual */
    });
    /* Respaldo: ninguna imagen puede retrasar la apertura más de 1.2 s. */
    setTimeout(function(){ if (!fired){ fired = true; pending = 0; cb(); } }, 1200);
  }

  /* ── Espera 2: fin de la composición ─────────────────────────────────── */
  /* Un solo temporizador, medido desde el inicio del documento: si el script
     (defer) se ejecuta tarde, lo que reste de composición se descuenta y la
     apertura no se alarga. COMP_END = último nivel del CSS (1.3 s + 0.6 s). */
  function afterComposition(cb){
    var remaining = REDUCED ? 0 : Math.max(0, COMP_END - performance.now());
    holdId = setTimeout(cb, remaining + HOLD);
  }

  logosReady(function(){ afterComposition(close); });

  /* Respaldo global: la intro nunca puede dejar la aplicación bloqueada. */
  guardId = setTimeout(close, GUARD);
})();
