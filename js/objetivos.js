/* ============================================================
   OBJETIVOS 5 — Render + Navegación
   ============================================================ */
(function() {
  var statusStyles = {
    ok:   {color:'#16a34a', dot:'#16a34a'},
    warn: {color:'#ca8a04', dot:'#ca8a04'},
    crit: {color:'#dc2626', dot:'#dc2626'}
  };

  var RING_R = 52;
  var RING_C = 2 * Math.PI * RING_R;

  function buildCard(o, i) {
    var ss = statusStyles[o.status] || statusStyles.warn;
    var real = parseFloat(o.pctLabel);
    if (isNaN(real)) real = o.pct;
    var fillPct = Math.min(real, 100);
    var off = RING_C * (1 - fillPct / 100);
    var over = real > 100;
    return '<button type="button" class="o5r' + (over ? ' is-over' : '') + '" style="--c:' + o.color + ';--cd:' + o.colorDark + ';--cbg:' + o.colorBg + ';--i:' + i + '" onclick="odOpen(' + o.id + ')" aria-label="Objetivo ' + o.num + ' — ' + o.name + '">'
      + '<span class="o5r-head">'
      + '<span class="o5r-num">' + o.num + '</span>'
      + '<span class="o5r-ico">' + o.icon + '</span>'
      + '</span>'
      + '<span class="o5r-cat">' + o.cat + '</span>'
      + '<span class="o5r-name">' + o.name + '</span>'
      + '<span class="o5r-ringwrap">'
      + '<svg class="o5r-ring" viewBox="0 0 120 120" aria-hidden="true">'
      + '<circle class="o5r-ring-t" cx="60" cy="60" r="' + RING_R + '"></circle>'
      + '<circle class="o5r-ring-f" cx="60" cy="60" r="' + RING_R + '"'
      + ' stroke-dasharray="' + RING_C.toFixed(2) + '"'
      + ' stroke-dashoffset="' + RING_C.toFixed(2) + '"'
      + ' data-off="' + off.toFixed(2) + '"></circle>'
      + '</svg>'
      + '<span class="o5r-ring-c">'
      + '<span class="o5r-pct">' + o.pctLabel + '<i>%</i></span>'
      + '<span class="o5r-pct-lbl">avance</span>'
      + '</span>'
      + (over ? '<span class="o5r-crown" title="Meta superada">&#10003;</span>' : '')
      + '</span>'
      + '<span class="o5r-val">' + o.stats[0].val + '</span>'
      + '<span class="o5r-val-lbl">' + o.stats[0].lbl + '</span>'
      + '<span class="o5r-meta"><i>Meta</i>' + o.metaLabel + '</span>'
      + '<span class="o5r-state" style="color:' + ss.color + '">'
      + '<span class="o5r-state-dot" style="background:' + ss.dot + '"></span>' + o.stxt + '</span>'
      + '<span class="o5r-go">Ver detalle <i>&#8594;</i></span>'
      + '</button>';
  }

  var grid = document.getElementById('obj5Grid');
  grid.className = 'o5r-grid';
  grid.innerHTML = OBJ5.map(buildCard).join('');

  window.o5rAnimate = function() {
    document.querySelectorAll('#obj5Grid .o5r-ring-f').forEach(function(arc, i) {
      arc.style.transition = 'none';
      arc.style.strokeDashoffset = arc.getAttribute('stroke-dasharray');
      setTimeout(function() {
        arc.style.transition = 'stroke-dashoffset 1.25s cubic-bezier(.34,.8,.3,1)';
        arc.style.strokeDashoffset = arc.getAttribute('data-off');
      }, 120 + i * 90);
    });
  };

  setTimeout(window.o5rAnimate, 160);
})();

function paSmartToggle(card) {
  if (!card) return;
  card.classList.toggle('open');
}

function objTab(name, btn) {
  document.querySelectorAll('#objetivos .obj-tab').forEach(function(t) { t.classList.remove('active'); });
  document.querySelectorAll('#objetivos .obj-pane').forEach(function(p) { p.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  var pane = document.getElementById('objPane-' + name);
  if (pane) pane.classList.add('active');
  if (name === 'o2026' && window.o5rAnimate) {
    setTimeout(window.o5rAnimate, 80);
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
  'SMART1.A.png',
  'SMART1.B.png',
  'SMART1.C.png',
  'SMART2.A.png',
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
  var noEv = card.hasAttribute('data-noev');
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
  if (adv) adv.innerHTML = pct ? pct.innerHTML + '<em>avance</em>' : '';

  var evState = document.getElementById('paEvState');
  if (state && evState) {
    evState.innerHTML = state.innerHTML;
    evState.style.color = state.style.color || '';
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
