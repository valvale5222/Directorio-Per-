/* ============================================================
   OBJETIVOS 2026 — Filas "barra vs meta" (escala 0–200%)
   Cabecera con marcador X/5 + pills por estado; cada fila: número,
   emoji 3D flotante, nombre, barra con línea de meta al 100%, % grande
   (con conteo animado), valor/meta y badge de estado. Clic → detalle (odOpen).
   ============================================================ */
(function() {
  var ST = {
    ok:   {cls:'ok',   lbl:'Meta superada'},
    warn: {cls:'warn', lbl:'En seguimiento'},
    crit: {cls:'crit', lbl:'En riesgo'}
  };
  var SCALE = 200;

  function realPct(o) { var r = parseFloat(o.pctLabel); return isNaN(r) ? o.pct : r; }
  function fmtPct(v) { return v === 0 ? '0' : v.toFixed(2); }

  function buildRow(o, i) {
    var st = ST[o.status] || ST.warn;
    var real = realPct(o);
    var w = Math.min(real, SCALE) / SCALE * 100;
    var over = real > SCALE;
    var stLbl = o.stxt || st.lbl;
    var stCls = o.status === 'ok' ? (/cumplida/i.test(stLbl) ? 'ok2' : 'ok') : st.cls;
    return '<button type="button" class="o6-row" style="--c:' + o.color + ';--cd:' + o.colorDark + ';--cbg:' + o.colorBg + ';--i:' + i + '" onclick="odOpen(' + o.id + ')" aria-label="Objetivo ' + o.num + ' — ' + o.name + '">'
      + '<span class="o6-num">' + o.num + '</span>'
      + '<span class="o6-emo" aria-hidden="true">' + o.icon + '</span>'
      + '<span class="o6-name"><b>' + o.name + '</b><i>' + o.cat + '</i></span>'
      + '<span class="o6-bar"><span class="o6-track"><span class="o6-fill" data-w="' + w.toFixed(2) + '"></span></span>'
      + '<span class="o6-meta" aria-hidden="true"></span>'
      + (over ? '<span class="o6-over" title="Supera la escala de 200%">+</span>' : '')
      + '</span>'
      + '<span class="o6-pct"><b data-v="' + real + '" data-d="' + (real === 0 ? 0 : 2) + '">' + fmtPct(real) + '</b><i>%</i></span>'
      + '<span class="o6-val">' + (o.stats[0].lbl ? '<span class="o6-vl">' + o.stats[0].lbl + '</span>' : '') + '<span class="o6-vv"><b>' + o.stats[0].val + '</b> / ' + o.metaLabel + '</span>'
      + '<span class="o6-st ' + stCls + '"><i></i>' + stLbl + '</span></span>'
      + '</button>';
  }

  var grid = document.getElementById('obj5Grid');
  if (!grid) return;

  var nOk = OBJ5.filter(function(o) { return o.status === 'ok'; }).length;
  var groups = {};
  OBJ5.forEach(function(o) {
    var k = o.status === 'ok' ? (/cumplida/i.test(o.stxt) ? 'cumplida' : 'superada') : o.status;
    groups[k] = (groups[k] || 0) + 1;
  });
  var PILLS = [
    {k:'superada', cls:'ok',   s:'superada', p:'superadas'},
    {k:'cumplida', cls:'ok2',  s:'cumplida', p:'cumplidas'},
    {k:'warn',     cls:'warn', s:'en seguimiento', p:'en seguimiento'},
    {k:'crit',     cls:'crit', s:'en riesgo', p:'en riesgo'}
  ];

  grid.className = 'o6';
  grid.innerHTML =
    '<div class="o6-top">'
      + '<div class="o6-score"><b>' + nOk + '</b><span>/' + OBJ5.length + '</span><em>objetivos cumplidos</em></div>'
      + '<div class="o6-pills">' + PILLS.filter(function(p) { return groups[p.k]; }).map(function(p) {
          return '<span class="o6-pill ' + p.cls + '"><i></i><b>' + groups[p.k] + '</b> ' + (groups[p.k] === 1 ? p.s : p.p) + '</span>';
        }).join('') + '</div>'
    + '</div>'
    + '<div class="o6-card">'
      + '<div class="o6-scale" aria-hidden="true"><span></span><span></span><span></span>'
      + '<span class="o6-scale-bar"><em>0%</em><em class="m">Meta 100%</em><em>200%</em></span><span></span><span></span></div>'
      + OBJ5.map(buildRow).join('')
    + '</div>';

  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timers = [];

  window.o5rAnimate = function() {
    timers.forEach(clearTimeout); timers = [];
    grid.querySelectorAll('.o6-fill').forEach(function(f, i) {
      f.style.transition = 'none';
      f.style.width = '0%';
      void f.offsetWidth;
      timers.push(setTimeout(function() {
        f.style.transition = 'width 1.2s cubic-bezier(.4,0,.2,1)';
        f.style.width = f.getAttribute('data-w') + '%';
      }, 140 + i * 80));
    });
    /* Conteo de los porcentajes */
    grid.querySelectorAll('.o6-pct b').forEach(function(b, i) {
      var v = parseFloat(b.getAttribute('data-v')), d = +b.getAttribute('data-d');
      if (REDUCED || !v) { b.textContent = fmtPct(v); return; }
      var t0 = null, delay = 140 + i * 80, DUR = 1200;
      /* token: una ejecución nueva o el respaldo detienen cualquier conteo previo */
      var tok = b._cuTok = {done:false};
      function step(ts) {
        if (b._cuTok !== tok || tok.done) return;
        if (t0 === null) t0 = ts + delay;
        var p = Math.max(0, Math.min(1, (ts - t0) / DUR));
        b.textContent = (v * (1 - Math.pow(1 - p, 3))).toFixed(d);
        if (p < 1) requestAnimationFrame(step); else tok.done = true;
      }
      requestAnimationFrame(step);
      /* Respaldo: si el navegador pausa los frames, el valor final queda escrito igual */
      timers.push(setTimeout(function() { tok.done = true; b.textContent = fmtPct(v); }, delay + DUR + 300));
    });
    grid.classList.remove('o6-in'); void grid.offsetWidth; grid.classList.add('o6-in');
  };

  setTimeout(window.o5rAnimate, 160);
})();

/* Planes de contingencia: cada card del mosaico abre su detalle en el modal
   compartido (paEv), sin desplegarse dentro del tile. */
function paSmartToggle(card) {
  if (!card) return;
  paEvOpen(card);
}
document.querySelectorAll(".o5m-cont").forEach(function(c) {
  c.setAttribute("data-kind", "cont");
  /* "contexto — periodo": el periodo pasa a un chip propio bajo el contexto */
  var ctx = c.querySelector(".o5m-ctx");
  if (!ctx || ctx.querySelector(".o5m-when")) return;
  var parts = ctx.innerHTML.split(/\s*(?:&mdash;|—)\s*/);
  if (parts.length < 2) return;
  var when = parts.pop();
  ctx.innerHTML = parts.join(" &mdash; ");
  var chip = document.createElement("span");
  chip.className = "o5m-when";
  chip.innerHTML = "<i></i>" + when;

  /* Acción principal (visible solo en los tiles grandes del mosaico):
     se toma del propio detalle; si no hay campo Acción, la descripción. */
  var act = c.querySelector(".pa-detail .pa-action-txt");
  var desc = c.querySelector(".pa-detail .pa-sc-desc");
  if (act || desc) {
    var lead = document.createElement("div");
    lead.className = "o5m-lead";
    lead.innerHTML = "<b>" + (act ? "Acci&oacute;n principal" : "Medida") + "</b><span>" + (act || desc).innerHTML + "</span>";
    ctx.parentNode.insertBefore(lead, ctx.nextSibling);
  }

  /* Pie: periodo + "Detalle" en una sola fila */
  var foot = document.createElement("div");
  foot.className = "o5m-foot";
  foot.appendChild(chip);
  var go = c.querySelector(".o5m-go");
  if (go) foot.appendChild(go);
  var detail = c.querySelector(".pa-detail");
  c.insertBefore(foot, detail || null);
});

function objTab(name, btn) {
  document.querySelectorAll('#objetivos .obj-tab').forEach(function(t) { t.classList.remove('active'); });
  document.querySelectorAll('#objetivos .obj-pane').forEach(function(p) { p.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  var pane = document.getElementById('objPane-' + name);
  if (pane) pane.classList.add('active');
  if (name === 'o2026' && window.o5rAnimate) {
    setTimeout(window.o5rAnimate, 80);
  }
  if (name === 'plan') {
    /* La nav discreta trae la vista (SMART / Plan de acción) en data-pnv */
    var v = btn && btn.getAttribute('data-pnv');
    if (v && typeof pnView === 'function') pnView(v);
    else if (typeof pnAnimate === 'function') setTimeout(pnAnimate, 40);
  }
  if (pane && typeof o5mAnimate === 'function') {
    setTimeout(function() { o5mAnimate(pane); }, 80);
  }
}

function goObjTab(name) {
  var btn = document.querySelector('#objetivos .obj-tab[data-otab="' + name + '"]');
  objTab(name, btn);
}

function odOpen(id) {
  var el = document.getElementById('od-' + id);
  if (!el) return;
  document.querySelectorAll('.od').forEach(function(d) { d.classList.remove('open'); });
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(function() {
    el.querySelectorAll('.od-hero-prog-fill').forEach(function(bar) {
      bar.style.width = bar.getAttribute('data-w') || '0%';
    });
  }, 320);
}

function odClose() {
  document.querySelectorAll('.od').forEach(function(d) { d.classList.remove('open'); });
  document.body.style.overflow = '';
  document.querySelectorAll('.od-hero-prog-fill').forEach(function(bar) {
    bar.style.transition = 'none';
    bar.style.width = '0';
    setTimeout(function() { bar.style.transition = ''; }, 50);
  });
}

/* ── Objetivo 05 — ordenamiento interactivo de "Detalle completo" ── */
(function() {
  var MES_ORDER = {'Enero':1,'Febrero':2,'Marzo':3,'Abril':4,'Mayo':5,'Junio':6,'Julio':7,'Agosto':8,'Septiembre':9,'Octubre':10,'Noviembre':11,'Diciembre':12};
  var sortState = {};
  window.od5SortTable = function(key, colIndex, th) {
    var table = document.getElementById('od5DetailTbl');
    if (!table) return;
    var tbody = table.querySelector('tbody');
    var totalRow = tbody.querySelector('tr.od-total-row');
    var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr')).filter(function(r) { return r !== totalRow; });
    var dir = sortState[key] === 'asc' ? 'desc' : 'asc';
    sortState = {};
    sortState[key] = dir;
    rows.sort(function(a, b) {
      var av = a.children[colIndex].textContent.trim();
      var bv = b.children[colIndex].textContent.trim();
      var cmp = (key === 'importe')
        ? parseFloat(av.replace(/[^0-9.-]/g, '')) - parseFloat(bv.replace(/[^0-9.-]/g, ''))
        : (MES_ORDER[av] || 0) - (MES_ORDER[bv] || 0);
      return dir === 'asc' ? cmp : -cmp;
    });
    rows.forEach(function(r) { tbody.appendChild(r); });
    if (totalRow) tbody.appendChild(totalRow);
    table.querySelectorAll('th.sortable .sort-ic').forEach(function(ic) {
      ic.textContent = '⇅';
      ic.classList.remove('active');
    });
    var ic = th.querySelector('.sort-ic');
    if (ic) {
      ic.textContent = dir === 'asc' ? '▲' : '▼';
      ic.classList.add('active');
    }
  };
})();

function odTab(detailId, paneId) {
  var det = document.getElementById(detailId);
  if (!det) return;
  det.querySelectorAll('.od-tab').forEach(function(t) { t.classList.remove('active'); });
  det.querySelectorAll('.od-pane').forEach(function(p) { p.classList.remove('active'); });
  var pane = document.getElementById(paneId);
  if (pane) pane.classList.add('active');
  var btn = det.querySelector('[onclick*="' + paneId + '"]');
  if (btn) btn.classList.add('active');
}


/* ============================================================
   O5M — Módulos de Plan de Acción y Planes de contingencia
   Ruedas animadas, teclado y modal de evidencias (SMART 01/02)
   ============================================================ */

/* Evidencias de los Objetivos SMART.
   Los archivos viven en la carpeta raíz "SUSTENTO SMART": los que empiezan
   con SMART1 son evidencia del Objetivo 01 y los que empiezan con SMART2
   del Objetivo 02. Para sumar una evidencia basta con dejar el archivo en
   esa carpeta y agregar su nombre a PA_EV_FILES. */
var PA_EV_DIR = 'SUSTENTO SMART/';

var PA_EV_FILES = [
  'smarT1A.png',
  'SMART1B.jpeg',
  'smart1c.png',
  'SMART2.A.png',
  'smart2.a2.png',
  'SMART2.B.png',
  'SMART2.C.png'
];

var PA_EVIDENCE = (function() {
  var map = {'1': [], '2': []};
  PA_EV_FILES.forEach(function(file) {
    var m = /^SMART(\d+)[.\-_ ]?(.*)\.[a-z0-9]+$/i.exec(file);
    if (!m) return;
    var id = m[1];
    if (!map[id]) map[id] = [];
    map[id].push({
      src: encodeURI(PA_EV_DIR + file),
      cap: 'Evidencia ' + (m[2] ? m[2].toUpperCase() : (map[id].length + 1))
    });
  });
  return map;
})();

function o5mAnimate(scope) {
  var root = scope || document;
  root.querySelectorAll('.o5m-ring-f').forEach(function(arc, i) {
    arc.style.transition = 'none';
    arc.style.strokeDashoffset = arc.getAttribute('stroke-dasharray');
    setTimeout(function() {
      arc.style.transition = 'stroke-dashoffset 1.25s cubic-bezier(.34,.8,.3,1)';
      arc.style.strokeDashoffset = arc.getAttribute('data-off');
    }, 140 + i * 90);
  });
}

function paKey(e, el) {
  if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
    e.preventDefault();
    el.click();
  }
}

/* ── Modal de evidencias ── */
var _paEvCard = null;
var _paLbList = [];
var _paLbN = 0;

function paEvRender(id) {
  var list = PA_EVIDENCE[id] || [];
  var stage = document.getElementById('paEvStage');
  var thumbs = document.getElementById('paEvThumbs');
  if (!stage || !thumbs) return;
  stage.classList.remove('is-img');
  stage.onclick = null;
  thumbs.classList.remove('is-single');
  if (!list.length) {
    stage.innerHTML = '<div class="pa-ev-empty">'
      + '<b>Zona lista para evidencias</b>'
      + '<span>Las capturas y fotograf&iacute;as del logro se mostrar&aacute;n aqu&iacute; en formato ampliado.</span>'
      + '</div>';
    thumbs.innerHTML = '<div class="pa-ev-th pa-ev-th-ghost">1</div>'
      + '<div class="pa-ev-th pa-ev-th-ghost">2</div>'
      + '<div class="pa-ev-th pa-ev-th-ghost">3</div>';
    return;
  }
  _paLbList = list;
  function show(n) {
    var it = list[n];
    _paLbN = n;
    stage.innerHTML = '<img src="' + it.src + '" alt="' + (it.cap || '') + '">'
      + '<span class="pa-ev-zoom">&#9970; Ampliar</span>'
      + (list.length > 1 ? '<span class="pa-ev-count">' + (n + 1) + ' / ' + list.length + '</span>' : '');
    stage.classList.add('is-img');
    stage.onclick = function() { paLbOpen(n); };
    thumbs.querySelectorAll('.pa-ev-th').forEach(function(t, k) {
      t.classList.toggle('active', k === n);
    });
  }
  thumbs.classList.toggle('is-single', list.length < 2);
  thumbs.innerHTML = list.map(function(it, n) {
    return '<button type="button" class="pa-ev-th" data-n="' + n + '" title="' + (it.cap || '') + '">'
      + '<img src="' + it.src + '" alt="' + (it.cap || '') + '"></button>';
  }).join('');
  thumbs.querySelectorAll('.pa-ev-th').forEach(function(t) {
    t.onclick = function() { show(parseInt(t.getAttribute('data-n'), 10)); };
  });
  show(0);
}

function paEvOpen(card) {
  var modal = document.getElementById('paEv');
  if (!modal || !card) return;
  _paEvCard = card;
  var id = card.getAttribute('data-ev');
  var noEv = card.hasAttribute('data-noev') || !card.hasAttribute('data-ev');
  var kind = card.getAttribute('data-kind') || 'smart';
  var eye = modal.querySelector('.pa-ev-eye');
  if (eye) eye.innerHTML = kind === 'plan' ? 'Plan de acci&oacute;n &middot; Ago&ndash;Oct 2026'
    : kind === 'cont' ? 'Plan de contingencia &middot; Nov&ndash;Dic 2026'
    : 'Objetivo SMART &middot; Plan de Acci&oacute;n Ago&ndash;Oct 2026';
  var detail = card.querySelector('.pa-detail');
  var full = detail ? detail.querySelector('.pa-sc-full') : null;
  var state = card.querySelector('.o5m-state');
  var pct = card.querySelector('.o5m-pct');
  var num = card.querySelector('.o5m-num');
  var box = modal.querySelector('.pa-ev-box');

  box.style.setProperty('--c', getComputedStyle(card).getPropertyValue('--c'));
  box.classList.toggle('no-ev', noEv);
  document.getElementById('paEvNum').textContent = num ? num.textContent : '';
  document.getElementById('paEvTitle').innerHTML = full ? full.innerHTML : '';
  document.getElementById('paEvDetail').innerHTML = detail ? detail.innerHTML : '';

  var adv = document.getElementById('paEvAdv');
  var seq = card.querySelector('.o5m-seq');
  if (adv) adv.innerHTML = pct ? pct.innerHTML + '<em>avance</em>' : (seq ? seq.innerHTML : '');

  var evState = document.getElementById('paEvState');
  if (evState) {
    var tag = card.querySelector('.omz-tag');
    evState.innerHTML = state ? state.innerHTML : (tag ? tag.innerHTML : '');
    evState.style.color = state ? (state.style.color || '') : '';
    evState.style.display = (state || tag) ? '' : 'none';
  }

  if (!noEv) paEvRender(id);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function paEvClose() {
  var modal = document.getElementById('paEv');
  if (!modal) return;
  paLbClose();
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (_paEvCard) { _paEvCard.focus(); _paEvCard = null; }
}

function paEvBackdrop(e) {
  if (e.target && e.target.id === 'paEv') paEvClose();
}

/* ── Visor ampliado de evidencias (lightbox sobre el modal) ── */
function paLbShow(n) {
  var lb = document.getElementById('paLb');
  if (!lb || !_paLbList.length) return;
  var total = _paLbList.length;
  _paLbN = (n + total) % total;
  var it = _paLbList[_paLbN];
  var img = document.getElementById('paLbImg');
  var cap = document.getElementById('paLbCap');
  var nav = lb.querySelectorAll('.pa-lb-nav');
  img.src = it.src;
  img.alt = it.cap || '';
  cap.textContent = total > 1 ? (it.cap || '') + ' · ' + (_paLbN + 1) + ' / ' + total : (it.cap || '');
  nav.forEach(function(b) { b.style.display = total > 1 ? '' : 'none'; });
}

function paLbOpen(n) {
  var lb = document.getElementById('paLb');
  if (!lb || !_paLbList.length) return;
  paLbShow(typeof n === 'number' ? n : _paLbN);
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
}

function paLbClose() {
  var lb = document.getElementById('paLb');
  if (!lb) return;
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
}

function paLbStep(e, d) {
  if (e) e.stopPropagation();
  paLbShow(_paLbN + d);
}

function paLbBackdrop(e) {
  if (e.target && (e.target.id === 'paLb' || e.target.classList.contains('pa-lb-body'))) paLbClose();
}

document.addEventListener('keydown', function(e) {
  var lb = document.getElementById('paLb');
  var lbOpen = lb && lb.classList.contains('open');
  if (lbOpen) {
    if (e.key === 'Escape') { paLbClose(); return; }
    if (e.key === 'ArrowRight') { paLbShow(_paLbN + 1); return; }
    if (e.key === 'ArrowLeft') { paLbShow(_paLbN - 1); return; }
    return;
  }
  if (e.key !== 'Escape') return;
  var modal = document.getElementById('paEv');
  if (modal && modal.classList.contains('open')) paEvClose();
});


/* ============================================================
   PLAN ND — Objetivos SMART y Planes de Acción · Noviembre–Diciembre 2026
   Vista 1 · SMART: anillo segmentado por peso de componente (no barra),
     estado de cada componente y avance acreditado al centro.
   Vista 2 · Planes: contexto macro 2025–2026 (participación de ventas por
     zona desde MapaData — misma base del Mapa Comercial — y cartera de
     clientes por zona) + ejes Cuotas · Visitas · Conversión.
   ============================================================ */

/* Cartera de clientes por zona — misma base y criterios que la vista Clientes:
   254 clientes únicos (2014–oct 2026, clave = razón social sin puntos ni espacios
   repetidos; alias Huarmey y Gloria), activo = compró en 2025 o 2026 (76),
   inactivo = segmento "Sin actividad" (178). Zona con la regla del Mapa
   (Lima → Centro, Áncash → Norte); 16 clientes con ventas en más de una zona
   se asignan a su zona principal por importe (2025–26 si es activo, histórico
   si es inactivo). Ningún registro quedó sin zona válida. */
var PN_CARTERA = {
  NORTE:  {act:37, inact:52},
  CENTRO: {act:14, inact:42},
  SUR:    {act:25, inact:84},
  sinZona: 0, multiZona: 16
};
var PN_ZCOL = {NORTE:'#3EC6AC', CENTRO:'#4FA8E0', SUR:'#8b5cf6'};
var PN_ZLBL = {NORTE:'Norte', CENTRO:'Centro', SUR:'Sur'};

var PN_SMART = [
  {num:'01', name:'Flujo comercial integrado y trazable', c:'#185fa5', cd:'#0e4a7a',
   emo:'Link/3D/link_3d.png', fb:'🔗', adv:60, advLbl:'avance',
   comps:[
     {w:40, t:'Implementación y estandarización en plataforma', st:'done', s:'Completado', pts:'40/40'},
     {w:25, t:'Adopción de ejecutivos comerciales', st:'partial', earned:20, s:'En curso', pts:'20/25'},
     {w:20, t:'Cumplimiento del flujo, etapas y validaciones', st:'pend', s:'Pendiente', pts:'0/20'},
     {w:15, t:'Actas y documentos de entrada / salida', st:'pend', s:'Pendiente', pts:'0/15'}
   ],
   note:'Uso consolidado de la plataforma y flujo respetado: Ejecutivos → Arquitectura → Presupuestos.'},
  {num:'02', name:'Estandarización de propuestas comerciales', c:'#0d9488', cd:'#115e59',
   emo:'Memo/3D/memo_3d.png', fb:'📝', adv:60, advLbl:'avance',
   comps:[
     {w:40, t:'Plantilla automatizada con IA', st:'done', s:'Completado'},
     {w:25, t:'Revisión de presupuestos en plazo', st:'prog', s:'Por consolidar'},
     {w:20, t:'Incorporación de esquemas técnicos', st:'prog', s:'En desarrollo'},
     {w:15, t:'Entrega oportuna de propuestas completas', st:'pend', s:'Por medir'}
   ],
   note:'Plantilla IA operativa: se carga el presupuesto y se genera la propuesta. Foco: menos demora en revisión y tiempo para esquemas técnicos.'},
  {num:'03', name:'Comercial, Presupuestos y Operaciones', sub:'Lecciones aprendidas desde obra', c:'#7c5cd6', cd:'#4c3496',
   emo:'Clipboard/3D/clipboard_3d.png', fb:'📋', adv:20, advLbl:'avance',
   tag:'En ejecución',
   comps:[
     {w:30, t:'Coordinación entre áreas · Comercial, Presupuestos y Operaciones', st:'partial', earned:20, s:'En ejecución', pts:'20/30'},
     {w:30, t:'Reuniones con supervisores de próximos proyectos', st:'plan', s:'Por iniciar'},
     {w:25, t:'Actas y registro de observaciones en plataforma', st:'plan', s:'Por iniciar'},
     {w:15, t:'Hallazgos incorporados en futuras propuestas', st:'plan', s:'Por iniciar'}
   ],
   resp:['Valeria Rodríguez','Thalia Borja','Pablo Paredes'],
   note:'Objetivo en ejecución: la coordinación entre las tres áreas forma parte de la implementación. Desviaciones entre lo presupuestado y lo encontrado en obra, visibles en la plataforma existente.'}
];

/* Anillo segmentado: cada componente ocupa su peso; el color indica su estado */
function pnRing(s) {
  var R = 50, C = 2 * Math.PI * R, GAP = 2.2, start = 0, arcs = '';
  function arc(len, cls, off, i) {
    return '<circle class="pn-arc ' + cls + '" cx="60" cy="60" r="' + R + '" '
      + 'style="--len:' + Math.max(len, 0).toFixed(2) + ';--off:' + (-off).toFixed(2) + ';--C:' + C.toFixed(2) + ';--ad:' + (0.15 + i * 0.12).toFixed(2) + 's"></circle>';
  }
  s.comps.forEach(function(k, i) {
    var L = k.w / 100 * C;
    if (k.st === 'partial') {
      var e = k.earned / 100 * C;
      arcs += arc(e - GAP / 2, 'a-done', start, i) + arc(L - e - GAP / 2, 'a-pend', start + e + GAP / 2, i);
    } else {
      arcs += arc(L - GAP, 'a-' + k.st, start, i);
    }
    start += L;
  });
  return '<svg class="pn-ring" viewBox="0 0 120 120" aria-hidden="true">'
    + '<circle class="pn-ring-bg" cx="60" cy="60" r="' + R + '"></circle>' + arcs + '</svg>';
}

function pnSmartCard(s, i) {
  var center = s.adv === null
    ? '<b class="na">&mdash;</b><em>' + s.advLbl + '</em>'
    : '<b><span data-cu="' + s.adv + '">' + s.adv + '</span><i>%</i></b><em>' + s.advLbl + '</em>';
  var rows = s.comps.map(function(k, j) {
    return '<div class="pn-cr st-' + k.st + '" style="--d:' + (0.2 + j * 0.06).toFixed(2) + 's">'
      + '<span class="pn-w">' + k.w + '<i>%</i></span>'
      + '<span class="pn-ct">' + k.t + '</span>'
      + '<span class="pn-cs">' + (k.pts ? '<b>' + k.pts + '</b>' : '') + k.s + '</span></div>';
  }).join('');
  return '<div class="pn-sc" style="--c:' + s.c + ';--cd:' + s.cd + ';--i:' + i + '">'
    + '<div class="pn-sc-head"><span class="pn-sc-num">SMART ' + s.num + '</span>'
    + (s.tag ? '<span class="pn-sc-tag">' + s.tag + '</span>' : '')
    + '<span class="pn-sc-emo" aria-hidden="true"><img src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/' + s.emo + '" alt="" loading="lazy" onerror=\'this.outerHTML="' + s.fb + '"\'></span></div>'
    + '<div class="pn-sc-name"' + (s.note ? ' title="' + s.note.replace(/"/g, '&quot;') + '"' : '') + '>' + s.name + (s.sub ? '<span class="pn-sc-sub">' + s.sub + '</span>' : '') + '</div>'
    + '<div class="pn-sc-mid"><div class="pn-ringwrap">' + pnRing(s) + '<div class="pn-ring-c">' + center + '</div></div>'
    + '<div class="pn-crs">' + rows + '</div></div>'
    + pnFoot(s, i)
    + '</div>';
}

/* Pie de la card SMART: responsables + acceso discreto a las evidencias
   (carpeta "SUSTENTO SMART", mismo mapa PA_EVIDENCE que usa el modal paEv). */
function pnEvList(s) { return PA_EVIDENCE[String(parseInt(s.num, 10))] || []; }
function pnFoot(s, i) {
  var ev = pnEvList(s);
  var resp = s.resp ? '<div class="pn-resp">' + s.resp.map(function(r) { return '<i>' + r + '</i>'; }).join('') + '</div>' : '';
  var btn = ev.length
    ? '<button type="button" class="pn-ev-btn" onclick="pnEvOpen(' + i + ',this)">'
      + '<span aria-hidden="true">&#128247;</span>Ver evidencias<b>' + ev.length + '</b></button>'
    : '';
  return (resp || btn) ? '<div class="pn-sc-foot">' + resp + btn + '</div>' : '';
}

/* Evidencias SMART: abre directamente el visor ampliado (paLb) con las fotos del
   objetivo, navegación entre imágenes y cierre. Mismas rutas de PA_EVIDENCE. */
function pnEvOpen(i, btn) {
  var s = PN_SMART[i];
  if (!s) return;
  var list = pnEvList(s);
  if (!list.length) return;
  _paLbList = list.map(function(it) {
    return {src: it.src, cap: 'SMART ' + s.num + ' · ' + s.name + ' — ' + (it.cap || '')};
  });
  paLbOpen(0);
}

/* Plan 01 · desglose de ventas y cartera por zona en el modal compartido,
   para que la vista de planes quepa completa en una pantalla. */
function pnDesglose() {
  var src = document.getElementById('pnMore');
  if (!src || typeof openModal !== 'function') return;
  openModal('Desglose de ventas y cartera por zona',
    '<div class="pn-desg">' + src.innerHTML + '</div>',
    'Plan de acción 01 · Planificación y control de la gestión comercial 2027');
}

/* Plegables de los planes de acción: se expanden en el flujo (sin scroll interno) */
function pnFold(btn) {
  var f = btn && btn.closest('.pf');
  if (!f) return;
  var open = f.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function pnRenderSmart() {
  var el = document.getElementById('pnSmart');
  if (el) el.innerHTML = PN_SMART.map(pnSmartCard).join('');
}

function pnRenderPlans() {
  var MD = window.MapaData;
  var zb = document.getElementById('pnZBar'), zg = document.getElementById('pnZones');
  var ZK = ['NORTE', 'CENTRO', 'SUR'];
  var z25 = null, z26 = null;
  if (MD && zb && zg) {
    z25 = MD.zonas(2025); z26 = MD.zonas(2026);
    var by = function(z, k) { return z.lista.filter(function(x) { return x.key === k; })[0]; };
    /* Dos barras de composición al 100% (2025 y 2026) */
    zb.innerHTML = [[2025, z25], [2026, z26]].map(function(p) {
      return '<div class="pn-zrow"><span class="pn-zy">' + p[0] + (p[0] === 2026 ? '<i>Ene–Oct</i>' : '') + '</span><div class="pn-zstack">'
        + ZK.map(function(k) {
          var z = by(p[1], k);
          return '<span class="pn-zseg" style="--zc:' + PN_ZCOL[k] + ';--w:' + (z.part * 100).toFixed(2) + '" title="' + PN_ZLBL[k] + ' ' + MD.pct(z.part) + '">'
            + (z.part >= 0.08 ? MD.pct(z.part) : '') + '</span>';
        }).join('') + '</div></div>';
    }).join('');
    /* Evolución por zona con variación en pp (calculada sobre las cifras exactas) */
    zg.innerHTML = ZK.map(function(k, i) {
      var a = by(z25, k), b = by(z26, k), pp = (b.part - a.part) * 100;
      var up = pp >= 0;
      return '<div class="pn-z" style="--zc:' + PN_ZCOL[k] + ';--d:' + (0.15 + i * 0.06).toFixed(2) + 's">'
        + '<span class="pn-z-n"><i></i>' + PN_ZLBL[k] + '</span>'
        + '<span class="pn-z-v"><em>' + MD.pct(a.part) + '</em><i>&rarr;</i><b>' + MD.pct(b.part) + '</b></span>'
        + '<span class="pn-z-d ' + (up ? 'up' : 'dn') + '">' + (up ? '&#8593; +' : '&#8595; &minus;') + Math.abs(pp).toFixed(1) + ' pp</span></div>';
    }).join('');
  }

  /* Cartera por zona */
  var cg = document.getElementById('pnCartera'), ct = document.getElementById('pnCartTot');
  var tot = 0, act = 0;
  ZK.forEach(function(k) { tot += PN_CARTERA[k].act + PN_CARTERA[k].inact; act += PN_CARTERA[k].act; });
  tot += PN_CARTERA.sinZona;
  if (ct) ct.innerHTML = tot + ' clientes &middot; ' + act + ' activos';
  if (cg) cg.innerHTML = ZK.map(function(k, i) {
    var c = PN_CARTERA[k], n = c.act + c.inact;
    return '<div class="pn-c" style="--zc:' + PN_ZCOL[k] + ';--d:' + (0.2 + i * 0.06).toFixed(2) + 's">'
      + '<span class="pn-z-n"><i></i>' + PN_ZLBL[k] + '<em>' + (n / tot * 100).toFixed(1) + '%</em></span>'
      + '<span class="pn-c-big">' + n + '</span>'
      + '<span class="pn-c-split"><b>' + c.act + '</b> activos <i>&middot;</i> <b class="off">' + c.inact + '</b> inactivos</span>'
      + '<span class="pn-c-dots">' + '<i class="on" style="flex:' + c.act + '"></i><i style="flex:' + c.inact + '"></i>' + '</span>'
      + '</div>';
  }).join('');

  /* Lectura ejecutiva (máx. 2 líneas) */
  var rd = document.getElementById('pnRead');
  if (rd && z26) {
    var p = function(k) { return z26.lista.filter(function(x) { return x.key === k; })[0].part; };
    var cen = PN_CARTERA.CENTRO, cenN = cen.act + cen.inact;
    rd.innerHTML = '<span class="pn-read-lbl"><i aria-hidden="true">!</i>&iexcl;Tener en cuenta!</span>'
      + 'Norte y Sur concentran el <b>' + MD.pct(p('NORTE') + p('SUR')) + '</b> de las ventas 2026; Centro reúne el <b>' + (cenN / tot * 100).toFixed(0) + '%</b> de la cartera, pero solo el <b>' + MD.pct(p('CENTRO')) + '</b> de las ventas. '
      + 'En 2027, el ejecutivo <b>No Agro</b> ampliará la prospección en Centro, otras provincias y sectores menos atendidos.';
  }

  /* Plegable: desglose monetario + detalle de cartera */
  var mo = document.getElementById('pnMore');
  if (mo && z25 && z26) {
    var by2 = function(z, k) { return z.lista.filter(function(x) { return x.key === k; })[0]; };
    mo.innerHTML = '<table class="pn-tbl"><thead><tr><th>Zona</th><th class="r">Ventas 2025</th><th class="r">Part.</th><th class="r">Ventas 2026 <i>Ene–Oct</i></th><th class="r">Part.</th>'
      + '<th class="r">Activos</th><th class="r">Inactivos</th><th class="r">Cartera</th></tr></thead><tbody>'
      + ZK.map(function(k) {
        var a = by2(z25, k), b = by2(z26, k), c = PN_CARTERA[k];
        return '<tr><td><span class="pn-dot" style="background:' + PN_ZCOL[k] + '"></span>' + PN_ZLBL[k] + '</td>'
          + '<td class="r">' + MD.money(a.imp) + '</td><td class="r">' + MD.pct(a.part) + '</td>'
          + '<td class="r">' + MD.money(b.imp) + '</td><td class="r">' + MD.pct(b.part) + '</td>'
          + '<td class="r">' + c.act + '</td><td class="r">' + c.inact + '</td><td class="r"><b>' + (c.act + c.inact) + '</b></td></tr>';
      }).join('')
      + '<tr class="tot"><td>Total</td><td class="r">' + MD.money(z25.total) + '</td><td class="r">100%</td><td class="r">' + MD.money(z26.total) + '</td><td class="r">100%</td>'
      + '<td class="r">' + act + '</td><td class="r">' + (tot - act) + '</td><td class="r"><b>' + tot + '</b></td></tr></tbody></table>'
      + '<div class="pn-more-note">Clientes únicos sin duplicar por proyecto o factura. Inactivo: sin compras en 2025–2026. '
      + PN_CARTERA.multiZona + ' clientes con ventas en más de una zona se asignan a su zona principal por importe. '
      + (PN_CARTERA.sinZona ? PN_CARTERA.sinZona + ' registros sin zona válida.' : 'Todos los clientes tienen zona válida.') + '</div>';
  }

  /* Plan 02 · avance 20% en mini anillo */
  var r2 = document.getElementById('pnP2Ring');
  if (r2) {
    var C = 2 * Math.PI * 42;
    r2.innerHTML = '<svg viewBox="0 0 100 100" aria-hidden="true"><circle class="pn-mini-bg" cx="50" cy="50" r="42"></circle>'
      + '<circle class="pn-mini-f" cx="50" cy="50" r="42" style="--len:' + (0.2 * C).toFixed(2) + ';--C:' + C.toFixed(2) + '"></circle></svg>'
      + '<div class="pn-mini-c"><b>20<i>%</i></b><em>avance</em></div>';
  }
}

/* Cambio de vista dentro del pane (SMART / Planes) */
function pnView(v, btn) {
  var pane = document.getElementById('objPane-plan');
  if (!pane) return;
  pane.querySelectorAll('.pn-seg-b').forEach(function(b) { b.classList.toggle('active', b === btn || b.getAttribute('data-pnv') === v); });
  pane.querySelectorAll('.pn-view').forEach(function(x) { x.classList.toggle('active', x.getAttribute('data-pnv') === v); });
  var nav = document.querySelector('#objetivos .obj-tab[data-otab="plan"][data-pnv="' + v + '"]');
  if (nav && pane.classList.contains('active')) {
    document.querySelectorAll('#objetivos .obj-tab').forEach(function(t) { t.classList.toggle('active', t === nav); });
  }
  pnAnimate();
}

/* Re-dispara las entradas (anillos, cifras) al mostrar la vista */
function pnAnimate() {
  var pane = document.getElementById('objPane-plan');
  if (!pane) return;
  pane.classList.remove('pn-in'); void pane.offsetWidth; pane.classList.add('pn-in');
  /* El % central sube junto con el llenado del anillo */
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  pane.querySelectorAll('[data-cu]').forEach(function(el) {
    var v = parseFloat(el.getAttribute('data-cu'));
    if (RM || !v) { el.textContent = v; return; }
    var t0 = null, DUR = 1100, DL = 250;
    var tok = el._cu = {};
    function step(ts) {
      if (el._cu !== tok) return;
      if (t0 === null) t0 = ts + DL;
      var p = Math.max(0, Math.min(1, (ts - t0) / DUR));
      el.textContent = Math.round(v * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    setTimeout(function() { if (el._cu === tok) el.textContent = v; }, DL + DUR + 400);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  pnRenderSmart();
  pnRenderPlans();
  pnAnimate();
});
