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

