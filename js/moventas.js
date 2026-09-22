/* ════════════════════════════════════════════════════════════════
   MANO DE OBRA · Productividad Operativa
   Render declarativo desde MO_DATA → KPI cards, board de
   productividad y cuadro comparativo.
   Una sola fuente de datos por unidad (Comercial / Arquitectura).
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var root = document.getElementById('moventas');
  if (!root) return;

  /* ── Periodos fijos de la vista ───────────────────────────── */
  var PERIODS = [
    { lbl: '2024',  sub: 'Ene–Dic' },
    { lbl: '2025',  sub: 'Ene–Dic' },
    { lbl: '2026',  sub: 'Ene–Ago' },
    { lbl: '2026',  sub: 'Proyecc.' }
  ];
  var I_2025 = 1, I_YTD = 2, I_PROY = 3;

  /* ── Datos por unidad ─────────────────────────────────────────
     Fuente: cuadro de productividad 2024–2025 · acumulado Ago 2026
     · proyección de cierre 2026. Los porcentajes de costo sobre
     venta se muestran tal como vienen del cuadro de origen.      */
  var MO_DATA = {
    com: {
      name: 'Comercial',
      ico: '💼',
      a: '#3EC6AC', a2: '#0F6E56',
      venta:      [15450000, 34960000, 30010000, 38190000],
      margenPct:  [15.30, 15.87, 15.55, 15.60],
      margenUsd:  [2363110, 5548519, 4666555, 5957640],
      team:       [8, 10, 11, 11],
      costo:      [795000, 935000, 562000, 934000],
      otros:      [null, null, 123000, 185000],
      costoVenta: [5.14, 2.6745, 1.8727, 2.4449],
      note: 'La venta proyecta <em>+9.24%</em> sobre 2025 y el costo de mano de obra baja a <em>2.45%</em> de la venta. ' +
            'El punto de atención es la productividad: con el equipo de 10 a 11 personas, la venta por colaborador ' +
            'retrocede de <b>$3.50MM</b> (2025) a <b>$3.47MM</b> proyectado.'
    },
    arq: {
      name: 'Arquitectura',
      ico: '📐',
      a: '#5B9DFF', a2: '#1E4FA8',
      venta:      [0, 306900, 171000, 346100],
      margenPct:  [0, 30.00, 28.47, 30.00],
      margenUsd:  [0, 92009, 48683, 103833],
      team:       [2, 3, 5, 5],
      costo:      [76804, 123660, 102509, 205627],
      otros:      [null, null, null, null],
      costoVenta: [null, 74, null, 50],
      note: 'El área crece en venta <em>+12.8%</em>, pero el costo de mano de obra sube <em>+66%</em> al pasar de 3 a 5 ' +
            'colaboradores. La venta por colaborador cae de <b>$102K</b> a <b>$69K</b> y el costo del área representa ' +
            'el <b>50%</b> de la venta proyectada.'
    }
  };

  /* ── Formatos ─────────────────────────────────────────────── */
  function money(v) {
    if (v === null || v === undefined) return '—';
    return (typeof fmtEjecutivo === 'function') ? fmtEjecutivo(v) : ('$' + v);
  }
  function pct2(v) { return (v === null || v === undefined) ? '—' : v.toFixed(2) + '%'; }
  function pctSmart(v) {
    if (v === null || v === undefined) return '—';
    return (Math.abs(v) >= 10 ? Math.round(v) : v.toFixed(2)) + '%';
  }
  function intg(v) { return (v === null || v === undefined) ? '—' : String(v); }

  /* Variación relativa entre dos valores → {txt, cls} */
  function delta(now, before, dir) {
    if (now === null || before === null || !before) return { txt: '—', cls: 'flat' };
    var d = (now / before - 1) * 100;
    var cls = (Math.abs(d) < 0.05) ? 'flat' : ((d > 0 ? 1 : -1) * (dir || 1) > 0 ? 'up' : 'dn');
    var arw = Math.abs(d) < 0.05 ? '' : (d > 0 ? '▲' : '▼');
    return { txt: arw + ' ' + Math.abs(d).toFixed(1) + '%', cls: cls, v: d };
  }

  /* Venta por colaborador — derivada, no se carga a mano */
  function vpcArr(u) {
    return u.venta.map(function (v, i) {
      return u.team[i] ? v / u.team[i] : null;
    });
  }

  /* ── Definición de filas del cuadro comparativo ───────────── */
  var ROWS = [
    { k: 'venta',      lbl: 'Venta',                   fmt: money,    dir: 1,  dot: 'a',        hl: true },
    { k: 'margenPct',  lbl: 'Margen bruto',            fmt: pct2,     dir: 1,  dot: '#2C6FBF' },
    { k: 'margenUsd',  lbl: 'Margen bruto en dólares', fmt: money,    dir: 1,  dot: '#2C6FBF' },
    { k: 'team',       lbl: 'Colaboradores',           fmt: intg,     dir: 1,  dot: '#8B7BE8' },
    { k: 'costo',      lbl: 'Costo de mano de obra',   fmt: money,    dir: -1, dot: '#EFA93B' },
    { k: 'otros',      lbl: 'Otros gastos del área · Marketing', fmt: money, dir: -1, dot: '#EFA93B', opt: true },
    { k: 'costoVenta', lbl: 'Costo M.O. / Venta',      fmt: pctSmart, dir: -1, dot: '#EFA93B' },
    { k: 'vpc',        lbl: 'Venta por colaborador',   fmt: money,    dir: 1,  dot: 'a', key: true }
  ];

  /* ════════════════════════════════════════════════════════════
     RENDER — KPI cards
     Acabado ejecutivo tipo Ventas 2026: card con gradiente de color,
     icono en chip, label uppercase, valor protagonista y contexto +
     delta al pie. La primera card hereda el acento de la unidad
     activa (teal en Comercial, azul en Arquitectura, igual que el
     hero y el segmentado); las otras tres usan acentos propios de
     Mano de Obra, distintos de la paleta de Ventas.
     ════════════════════════════════════════════════════════════ */
  function deltaPP(now, before, dir) {
    if (now === null || before === null || now === undefined || before === undefined) return { txt: '—', cls: 'flat' };
    var d = now - before;
    var cls = (Math.abs(d) < 0.05) ? 'flat' : ((d > 0 ? 1 : -1) * (dir || 1) > 0 ? 'up' : 'dn');
    var arw = Math.abs(d) < 0.05 ? '' : (d > 0 ? '▲' : '▼');
    return { txt: arw + ' ' + Math.abs(d).toFixed(2) + 'pp', cls: cls };
  }

  /* "#rrggbb" → "r,g,b", para componer la sombra de color de cada
     card sin hardcodear un rgba por acento.                        */
  function hexRgb(hex) {
    var n = parseInt(String(hex).replace('#', ''), 16);
    return ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255);
  }

  function renderKpis(u, vpc) {
    var dVenta  = delta(u.venta[I_PROY], u.venta[I_2025], 1);
    var dMargen = deltaPP(u.margenPct[I_PROY], u.margenPct[I_2025], 1);
    var dTeam   = delta(u.team[I_PROY], u.team[I_2025], 1);
    var dVpc    = delta(vpc[I_PROY], vpc[I_2025], 1);
    var avance  = u.venta[I_PROY] ? Math.max(0, Math.min(100, u.venta[I_YTD] / u.venta[I_PROY] * 100)) : 0;

    var items = [
      {
        acc: u.a, accD: u.a2, ico: '💰', lbl: 'Venta 2026 · Proyectada',
        val: money(u.venta[I_PROY]), bar: avance,
        ctx: 'Ene–Ago ' + money(u.venta[I_YTD]) + ' · ', d: dVenta
      },
      {
        acc: '#10b981', accD: '#047857', ico: '📈', lbl: 'Margen bruto 2026',
        val: pct2(u.margenPct[I_PROY]),
        ctx: money(u.margenUsd[I_PROY]) + ' de margen · ', d: dMargen
      },
      {
        acc: '#8b5cf6', accD: '#5b21b6', ico: '👥', lbl: 'Equipo 2026',
        val: intg(u.team[I_PROY]) + '<span class="mo5-kc-u">pers.</span>',
        ctx: '2025: ' + intg(u.team[I_2025]) + ' · ', d: dTeam
      },
      {
        acc: '#d97706', accD: '#92400e', ico: '⚡', lbl: 'Venta por colaborador',
        val: money(vpc[I_PROY]),
        ctx: '2025: ' + money(vpc[I_2025]) + ' · ', d: dVpc
      }
    ];

    return items.map(function (it) {
      return '<div class="mo5-kcard" style="--acc:' + it.acc + ';--acc-d:' + it.accD +
               ';--acc-sh:' + hexRgb(it.accD) + '">' +
               '<span class="mo5-kc-ico">' + it.ico + '</span>' +
               '<div class="mo5-kc-lbl">' + it.lbl + '</div>' +
               '<div class="mo5-kc-val">' + it.val + '</div>' +
               (it.bar !== undefined
                 ? '<div class="mo5-kc-bar"><i data-w="' + it.bar.toFixed(1) + '"></i></div>'
                 : '') +
               '<div class="mo5-kc-ctx">' + it.ctx +
                 '<span class="mo5-kc-delta ' + it.d.cls + '">' + it.d.txt + '</span>' +
               '</div>' +
             '</div>';
    }).join('');
  }

  /* ════════════════════════════════════════════════════════════
     RENDER — Board de productividad por colaborador
     ════════════════════════════════════════════════════════════ */
  function renderBoard(u, vpc) {
    var max = Math.max.apply(null, vpc.map(function (v) { return v || 0; })) || 1;
    var best = vpc.indexOf(Math.max.apply(null, vpc.map(function (v) { return v || 0; })));

    var rows = PERIODS.map(function (p, i) {
      var w = (vpc[i] || 0) / max * 100;
      /* La proyección se compara contra el último año cerrado (2025),
         no contra el acumulado parcial: comparar cierre vs Ene–Ago
         daría una variación falsamente positiva.                    */
      var d;
      if (i === 0) d = { txt: 'base', cls: 'flat' };
      else if (i === I_YTD) d = { txt: 'parcial', cls: 'flat' };
      else if (i === I_PROY) { d = delta(vpc[i], vpc[I_2025], 1); if (d.v !== undefined) d.txt += ' vs 2025'; }
      else { d = delta(vpc[i], vpc[i - 1], 1); if (d.v !== undefined) d.txt += ' vs 2024'; }

      return '<div class="mo5-brow' + (i === I_PROY ? ' is-proj' : '') + (i === best ? ' is-best' : '') + '">' +
               '<div class="mo5-byr">' + p.lbl + '<span>' + p.sub + '</span></div>' +
               '<div class="mo5-btrack">' +
                 '<div class="mo5-bfill" data-w="' + w.toFixed(1) + '" style="--bc:' + u.a + ';--bc2:' + u.a2 + '"></div>' +
               '</div>' +
               '<div class="mo5-bval">' +
                 '<div class="mo5-bnum">' + money(vpc[i]) + '</div>' +
                 '<div class="mo5-bdelta ' + d.cls + '">' + d.txt + '</div>' +
               '</div>' +
             '</div>';
    }).join('');

    var dCv = delta(u.costoVenta[I_PROY], u.costoVenta[I_2025], -1);
    return rows +
      '<div class="mo5-bfoot">' +
        '<span>⚙️</span><span>Costo de mano de obra sobre venta ' +
        '<b>' + pctSmart(u.costoVenta[I_PROY]) + '</b> en 2026 · ' +
        '<b>' + pctSmart(u.costoVenta[I_2025]) + '</b> en 2025 ' +
        '<span class="mo5-bdelta ' + dCv.cls + '" style="display:inline;margin:0">' + dCv.txt + '</span></span>' +
      '</div>';
  }

  /* ════════════════════════════════════════════════════════════
     RENDER — Cuadro comparativo
     ════════════════════════════════════════════════════════════ */
  function renderTable(u, vpc) {
    var head = '<tr><th>Indicador</th>' +
      PERIODS.map(function (p, i) {
        var hl = (i >= I_YTD) ? ' class="mo5-th-hl"' : '';
        return '<th' + hl + '>' + p.lbl + '<small>' + p.sub + '</small></th>';
      }).join('') +
      '<th class="mo5-th-hl">Var.<small>2025 → 2026</small></th></tr>';

    var body = ROWS.filter(function (r) {
      /* Filas opcionales: se omiten en las unidades que no reportan el dato. */
      return !r.opt || (u[r.k] || []).some(function (v) { return v !== null && v !== undefined; });
    }).map(function (r) {
      var arr = (r.k === 'vpc') ? vpc : u[r.k];
      var d = delta(arr[I_PROY], arr[I_2025], r.dir);
      var dot = (r.dot === 'a') ? u.a : r.dot;

      var cells = arr.map(function (v, i) {
        return '<td class="' + (i >= I_YTD ? 'mo5-hl' : '') + '">' + r.fmt(v) + '</td>';
      }).join('');

      return '<tr class="' + (r.key ? 'mo5-key' : '') + '">' +
               '<td class="mo5-ind"><span class="mo5-ind-in">' +
                 '<i class="mo5-dot" style="background:' + dot + '"></i>' + r.lbl +
               '</span></td>' +
               cells +
               '<td><span class="mo5-var ' + d.cls + '">' + d.txt + '</span></td>' +
             '</tr>';
    }).join('');

    return '<thead>' + head + '</thead><tbody>' + body + '</tbody>';
  }

  /* ════════════════════════════════════════════════════════════
     PINTADO COMPLETO DE LA UNIDAD ACTIVA
     ════════════════════════════════════════════════════════════ */
  var current = 'com';
  var elKpis  = document.getElementById('moKpis');
  var elBoard = document.getElementById('moBoard');
  var elTbl   = document.getElementById('moTbl');
  var elNote  = document.getElementById('moNote');
  var elTags  = root.querySelectorAll('[data-mo-name]');
  var elScope = document.getElementById('moScope');

  /* Las barras (board y KPI cards) nacen en 0 y crecen al valor real
     en el frame siguiente. Se reinician en cada entrada a la pestaña
     para que el movimiento acompañe siempre la aparición.            */
  function animateBars(scope) {
    var bars = scope.querySelectorAll('[data-w]');
    bars.forEach(function (b) { b.style.width = '0'; b.classList.remove('sheen'); });
    void scope.offsetWidth;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        bars.forEach(function (b) {
          b.style.width = b.dataset.w + '%';
          b.classList.add('sheen');
        });
      });
    });
  }

  function paint(unitKey, animate) {
    var u = MO_DATA[unitKey];
    if (!u) return;
    current = unitKey;
    root.dataset.unit = unitKey;

    var vpc = vpcArr(u);

    elKpis.innerHTML  = renderKpis(u, vpc);
    elBoard.innerHTML = renderBoard(u, vpc);
    elTbl.innerHTML   = renderTable(u, vpc);
    elNote.innerHTML  = '<span class="mo5-note-ic">◆</span><span>' + u.note + '</span>';

    elTags.forEach(function (t) { t.textContent = u.name; });
    if (elScope) {
      elScope.textContent = 'Unidad ' + u.name + ' · 2024–2025 cerrado · acumulado a Agosto 2026 · proyección de cierre';
    }

    if (animate) {
      [elKpis, elBoard, elTbl.closest('.mo5-card'), elNote].forEach(function (n) {
        if (!n) return;
        n.classList.remove('mo5-swap');
        void n.offsetWidth;
        n.classList.add('mo5-swap');
      });
    }

    animateBars(root);
  }

  /* ── Segmentado Comercial / Arquitectura ──────────────────── */
  var seg = document.getElementById('moSeg');
  var ink = document.getElementById('moSegInk');

  /* instant = colocar sin deslizar (primer pintado, reentrada a la
     pestaña y resize); el deslizamiento se reserva al cambio manual. */
  function moveInk(btn, instant) {
    if (!ink || !btn || !btn.offsetWidth) return;
    if (instant) { ink.style.transition = 'none'; }
    ink.style.opacity = '1';
    ink.style.width = btn.offsetWidth + 'px';
    ink.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
    if (instant) { void ink.offsetWidth; ink.style.transition = ''; }
  }

  function setUnit(key, fromUser) {
    if (!MO_DATA[key]) return;
    var btns = seg ? seg.querySelectorAll('.mo5-seg-btn') : [];
    btns.forEach(function (b) {
      var on = b.dataset.unit === key;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) moveInk(b, !fromUser);
    });
    paint(key, !!fromUser);
  }

  if (seg) {
    seg.addEventListener('click', function (e) {
      var b = e.target.closest('.mo5-seg-btn');
      if (b && b.dataset.unit !== current) setUnit(b.dataset.unit, true);
    });
    seg.addEventListener('keydown', function (e) {
      var b = e.target.closest('.mo5-seg-btn');
      if (!b) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (b.dataset.unit !== current) setUnit(b.dataset.unit, true);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        var list = Array.prototype.slice.call(seg.querySelectorAll('.mo5-seg-btn'));
        var i = list.indexOf(b);
        var next = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
        next.focus();
        setUnit(next.dataset.unit, true);
      }
    });
    window.addEventListener('resize', function () {
      var on = seg.querySelector('.mo5-seg-btn.active');
      if (on) moveInk(on, true);
    });
  }

  /* ── Arranque ─────────────────────────────────────────────── */
  setUnit('com', false);

  /* Las barras necesitan que la sección esté visible para medir su
     ancho real: shared.js llama a este hook al entrar a la pestaña. */
  window._initMoCharts = function () {
    var on = seg && seg.querySelector('.mo5-seg-btn.active');
    if (on) moveInk(on, true);
    animateBars(root);
    var hero = document.getElementById('moHero');
    if (hero) {
      hero.classList.remove('mo5-anim');
      void hero.offsetWidth;
      hero.classList.add('mo5-anim');
    }
  };
})();
