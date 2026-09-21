/* ════════════════════════════════════════════════════════════════
   CLIMA LABORAL · Área Comercial
   Fuente única: «Evaluación de Clima Laboral.xlsx» (carpeta raíz)
   12 respuestas · 11 preguntas de escala 1–5 · 3 preguntas abiertas
   + edad, subárea y antigüedad declaradas por cada participante.

   ROWS guarda la matriz tal como está en el Excel; todos los
   indicadores se derivan en runtime sobre el subconjunto activo,
   de modo que un filtro de subárea / edad / antigüedad recalcula
   la vista completa. No hay histórico en la fuente: no se muestran
   tendencias, variaciones ni proyecciones.

   Anonimato: la lectura es siempre agregada. Sólo se puede filtrar
   por segmentos con al menos MIN_N respuestas, y los comentarios
   literales se consultan únicamente en la vista consolidada.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var view = document.getElementById('movClima');
  if (!view) return;

  /* ══════════════════════════════════════════════════════════════
     1 · DATOS DEL EXCEL
     ══════════════════════════════════════════════════════════════ */

  /* Preguntas de escala, en el orden del Excel (cols H→R) */
  var QS = [
    { d: 0, s: 'Motivación',                  t: 'Me siento motivado(a) para realizar mi trabajo' },
    { d: 0, s: 'Compromiso',                  t: 'Me siento comprometido(a) con los objetivos de mi puesto' },
    { d: 0, s: 'Orgullo de pertenencia',      t: 'Me siento orgulloso(a) de formar parte del área comercial' },
    { d: 1, s: 'Claridad de responsabilidades', t: 'Tengo claridad sobre mis responsabilidades y prioridades' },
    { d: 1, s: 'Flujo de información',        t: 'La información que necesito para trabajar llega de manera clara y oportuna' },
    { d: 2, s: 'Escucha',                     t: 'Siento que mis ideas y dificultades son escuchadas' },
    { d: 2, s: 'Orientación',                 t: 'Recibo orientación clara cuando la necesito' },
    { d: 2, s: 'Ambiente y colaboración',     t: 'Existe un ambiente de respeto y colaboración dentro del equipo' },
    { d: 2, s: 'Confianza con jefatura',      t: 'Siento la confianza de conversar con mi jefe inmediato sobre mis dudas y dificultades' },
    { d: 3, s: 'Oportunidades de desarrollo', t: 'Tengo oportunidades para aprender y desarrollarme' },
    { d: 3, s: 'Reconocimiento',              t: 'Considero que mi esfuerzo y desempeño son reconocidos adecuadamente' }
  ];

  /* Las 4 dimensiones — cada una con identidad cromática propia */
  var DIMS = [
    { t: 'Motivación, compromiso y sentido de pertenencia',                    s: 'Motivación y pertenencia',  c: '#3aabef' },
    { t: 'Claridad de responsabilidades, coordinación y flujo de información', s: 'Claridad y coordinación',   c: '#6366f1' },
    { t: 'Escucha, orientación, apertura y ambiente de colaboración',          s: 'Escucha y colaboración',    c: '#14b8a6' },
    { t: 'Desarrollo y reconocimiento',                                        s: 'Desarrollo y reconocimiento', c: '#f59e0b' }
  ];

  /* Una fila por participante: edad, subárea, antigüedad,
     las 11 valoraciones y las 3 respuestas abiertas (literales). */
  var ROWS = [
    { e: 35, sb: 'Ejecutivo Comercial', an: '1 a 3 años', v: [5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5], o: [
      'Oportunidades y crecimiento',
      'Proceso técnicos',
      'Mejoe comunicación entre subareas'] },
    { e: 34, sb: 'Ejecutivo Comercial', an: 'Menos de 1 año', v: [5, 5, 5, 4, 4, 5, 5, 5, 5, 5, 5], o: [
      'Compromiso',
      'Aperturas conversaciones entre todos',
      'Reunión inicio y fin de semana para ver el avance'] },
    { e: 40, sb: 'Ejecutivo Comercial', an: 'Más de 3 años', v: [4, 5, 5, 5, 4, 4, 4, 5, 5, 5, 4], o: [
      'Herramientas y continuó aprendizaje en conservar la fruta',
      'Orden y fluidez en la entrega de presupuestos',
      'Mejor comunicación'] },
    { e: 24, sb: 'Soporte Comercial / G.G', an: 'Menos de 1 año', v: [4, 4, 5, 4, 3, 3, 4, 4, 5, 4, 3], o: [
      'El buen ambiente, jovialidad y confianza',
      'comunicación',
      'creo que si es obligatorio marcar reportes diarios para saber el avanzar comunicar que nos falta . y mas integracion entresubareas'] },
    { e: 27, sb: 'Presupuestos', an: '1 a 3 años', v: [3, 4, 3, 4, 3, 3, 3, 3, 3, 5, 2], o: [
      'El potencial de los presupuestadores',
      'La forma en que se realiza los presupuestos',
      'Información clara'] },
    { e: 27, sb: 'Arquitectura', an: 'Más de 3 años', v: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], o: [
      'El aprendizaje continuo y el trabajo en equipo',
      'Mejor coordinación en compatibilizacion con área de ingenieria',
      'Elaborar una plantilla arquitectónica para de modelado 3D'] },
    { e: 29, sb: 'Arquitectura', an: 'Menos de 1 año', v: [4, 5, 5, 4, 4, 5, 5, 5, 5, 5, 5], o: [
      'Flexibilidad',
      'Mejorar prioridades',
      'Establecer prioridades claras'] },
    { e: 24, sb: 'Arquitectura', an: 'Más de 3 años', v: [5, 5, 5, 4, 4, 5, 4, 5, 5, 5, 4], o: [
      'La comunicación vertical y horizontal, hay la confianza y naturalidad para expresar las ideas',
      'La comunicación y claridad al detalle de los requerimientos, para evitar vacíos y retrabajos',
      'Que la asignación de pendientes sea viernes por la tarde, para arrancar desde el lunes con la agenda programada.'] },
    { e: 24, sb: 'Arquitectura', an: '1 a 3 años', v: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], o: [
      'Trabajo en equipo',
      'Comunicación',
      'Comunicación entre sub áreas'] },
    { e: 24, sb: 'Arquitectura', an: 'Menos de 1 año', v: [5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5], o: [
      'El compañerismo',
      'Los tiempo de organización',
      'Tener un cronograma con todos lo proyectos y quien es respondable de que proyecto ademas de saber cuando es la entrega de cada uno de los proyectos'] },
    { e: 28, sb: 'Presupuestos', an: '1 a 3 años', v: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], o: [
      'Todo',
      'Nada',
      'Mas chamba'] },
    { e: 30, sb: 'Presupuestos', an: 'Menos de 1 año', v: [2, 5, 4, 3, 2, 4, 4, 5, 4, 4, 2], o: [
      'El compromiso de los colaboradores de presupuestos',
      'La organización',
      'La priorización de proyectos clave con alto porcentaje de éxito de ventas y notoriedad en la industria'] }
  ];

  /* Preguntas abiertas: índice en ROWS[i].o */
  var OPENQ = [
    { k: 0, ico: 'heart',  t: 'Lo que más se valora', q: '¿Qué es lo que más valoras del área?',                 c: '#10b981' },
    { k: 1, ico: 'tool',   t: 'Aspectos por mejorar', q: '¿Qué aspecto consideras que deberíamos mejorar?',      c: '#f59e0b' },
    { k: 2, ico: 'rocket', t: 'Cambios propuestos',   q: 'Si pudieras proponer un cambio concreto para trabajar mejor como equipo, ¿cuál sería?', c: '#3aabef' }
  ];

  /* ── Agrupación temática de las respuestas abiertas ───────────
     Cada tema apunta a los participantes que lo sustentan (índice
     base 1 en ROWS). El conteo no se escribe: sale de esa lista.
     `dim` enlaza el tema con las dimensiones que le corresponden,
     para poder mostrar comentarios relacionados en su análisis.   */
  var THEMES = [
    /* k:0 — lo que más se valora */
    { k: 0, t: 'Aprendizaje y desarrollo',            r: [1, 3, 6],     dim: [3] },
    { k: 0, t: 'Trabajo en equipo y compañerismo',    r: [6, 9, 10],    dim: [2] },
    { k: 0, t: 'Ambiente, confianza y cercanía',      r: [4, 8],        dim: [2] },
    { k: 0, t: 'Compromiso del equipo',               r: [2, 12],       dim: [0] },
    { k: 0, t: 'Talento y capacidad del equipo',      r: [5, 12],       dim: [3] },
    { k: 0, t: 'Comunicación abierta',                r: [8],           dim: [1, 2] },
    { k: 0, t: 'Flexibilidad',                        r: [7],           dim: [0] },
    { k: 0, t: 'Valoración general del área',         r: [11],          dim: [0] },
    /* k:1 — aspectos por mejorar */
    { k: 1, t: 'Comunicación y apertura',             r: [2, 4, 8, 9],  dim: [1, 2] },
    { k: 1, t: 'Organización y tiempos',              r: [3, 10, 12],   dim: [1] },
    { k: 1, t: 'Proceso de presupuestos',             r: [3, 5],        dim: [1] },
    { k: 1, t: 'Claridad de los requerimientos',      r: [8],           dim: [1] },
    { k: 1, t: 'Coordinación con otras áreas',        r: [6],           dim: [1] },
    { k: 1, t: 'Definición de prioridades',           r: [7],           dim: [1] },
    { k: 1, t: 'Procesos técnicos',                   r: [1],           dim: [1] },
    { k: 1, t: 'Sin observaciones',                   r: [11],          dim: [] },
    /* k:2 — cambios propuestos */
    { k: 2, t: 'Comunicación e integración entre subáreas', r: [1, 3, 4, 9], dim: [1, 2] },
    { k: 2, t: 'Prioridades y planificación',         r: [7, 8, 12],    dim: [1] },
    { k: 2, t: 'Rituales de seguimiento del avance',  r: [2, 4, 8],     dim: [1] },
    { k: 2, t: 'Cronograma y responsables',           r: [10],          dim: [1] },
    { k: 2, t: 'Claridad de la información',          r: [5],           dim: [1] },
    { k: 2, t: 'Plantillas y estándares de trabajo',  r: [6],           dim: [1] },
    { k: 2, t: 'Mayor carga de trabajo',              r: [11],          dim: [0] }
  ];

  /* Tramos de edad — contiguos y derivados del rango real (24–40) */
  var AGES = [
    { key: '24-27', lbl: '24 a 27', min: 24, max: 27 },
    { key: '28-33', lbl: '28 a 33', min: 28, max: 33 },
    { key: '34-40', lbl: '34 a 40', min: 34, max: 40 }
  ];
  var ANTS = ['Menos de 1 año', '1 a 3 años', 'Más de 3 años'];

  /* Mínimo de respuestas para habilitar una lectura segmentada */
  var MIN_N = 3;

  /* ══════════════════════════════════════════════════════════════
     2 · CÁLCULO
     índice 0–100 = (promedio 1–5 − 1) / 4 × 100
     ══════════════════════════════════════════════════════════════ */
  function idx100(avg) { return (avg - 1) / 4 * 100; }

  function stats(vals) {
    var n = vals.length || 1;
    var avg = vals.reduce(function (a, b) { return a + b; }, 0) / n;
    var d = [5, 4, 3, 2, 1].map(function (k) {
      return vals.filter(function (v) { return v === k; }).length;
    });
    return {
      n: vals.length, avg: avg, idx: idx100(avg),
      fav: (d[0] + d[1]) / n * 100, top: d[0] / n * 100,
      d: d,                       /* [c5,c4,c3,c2,c1] */
      seg: [d[0], d[1], d[2], d[3] + d[4]]   /* 5 · 4 · 3 · 1–2 */
    };
  }

  /* Modelo completo sobre un subconjunto de participantes */
  function model(ids) {
    var rs = ids.map(function (i) { return ROWS[i]; });
    var q = QS.map(function (qq, j) {
      var s = stats(rs.map(function (r) { return r.v[j]; }));
      s.j = j; s.s = qq.s; s.t = qq.t; s.dim = qq.d;
      return s;
    });
    var d = DIMS.map(function (D, di) {
      var vals = [];
      QS.forEach(function (qq, j) {
        if (qq.d === di) rs.forEach(function (r) { vals.push(r.v[j]); });
      });
      var s = stats(vals);
      s.i = di; s.t = D.t; s.s = D.s; s.c = D.c;
      s.qs = q.filter(function (x) { return x.dim === di; });
      return s;
    });
    var all = stats(rs.reduce(function (a, r) { return a.concat(r.v); }, []));
    return { ids: ids, n: ids.length, all: all, q: q, d: d };
  }

  var ALLIDS = ROWS.map(function (_, i) { return i; });

  /* ── Segmentos del universo ─────────────────────────────────── */
  function segsSub() {
    var map = {}, order = [];
    ROWS.forEach(function (r, i) {
      if (!map[r.sb]) { map[r.sb] = []; order.push(r.sb); }
      map[r.sb].push(i);
    });
    return order.map(function (k) { return { type: 'sb', key: k, lbl: k, ids: map[k] }; })
      .sort(function (a, b) { return b.ids.length - a.ids.length; });
  }
  function segsAge() {
    return AGES.map(function (b) {
      return {
        type: 'ed', key: b.key, lbl: b.lbl + ' años',
        ids: ROWS.map(function (r, i) { return (r.e >= b.min && r.e <= b.max) ? i : -1; })
          .filter(function (i) { return i >= 0; })
      };
    });
  }
  function segsAnt() {
    return ANTS.map(function (a) {
      return {
        type: 'an', key: a, lbl: a,
        ids: ROWS.map(function (r, i) { return r.an === a ? i : -1; })
          .filter(function (i) { return i >= 0; })
      };
    });
  }
  var SEG = { sb: segsSub(), ed: segsAge(), an: segsAnt() };
  var SEG_TITLE = { sb: 'Subárea', ed: 'Edad', an: 'Antigüedad' };

  /* Paleta categórica de subáreas — estable por posición */
  var SUBC = ['#3aabef', '#6366f1', '#14b8a6', '#f59e0b', '#ec4899'];

  /* ── Bandas de lectura ──────────────────────────────────────── */
  var BANDS = [
    { min: 95, k: 'exc', lbl: 'Excelente' },
    { min: 90, k: 'str', lbl: 'Muy fuerte' },
    { min: 80, k: 'sol', lbl: 'Sólido' },
    { min: 70, k: 'att', lbl: 'Atención' },
    { min: 0,  k: 'low', lbl: 'Bajo' }
  ];
  function band(v) {
    for (var i = 0; i < BANDS.length; i++) if (v >= BANDS[i].min - 1e-9) return BANDS[i];
    return BANDS[BANDS.length - 1];
  }
  var HEX = { exc: '#10b981', str: '#14b8a6', sol: '#3aabef', att: '#f59e0b', low: '#ef4444' };
  /* Escala de la distribución: 5 · 4 · 3 · 1–2 */
  var SEGC = [
    { c: '#10b981', t: 'Puntuación 5', s: 'Totalmente de acuerdo' },
    { c: '#3aabef', t: 'Puntuación 4', s: 'De acuerdo' },
    { c: '#f59e0b', t: 'Puntuación 3', s: 'Neutral' },
    { c: '#ef4444', t: 'Puntuación 1–2', s: 'En desacuerdo' }
  ];

  /* ── Formato ────────────────────────────────────────────────── */
  function n1(v) { return (Math.round(v * 10) / 10).toFixed(1); }
  function n0(v) { return String(Math.round(v)); }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function pc(part, tot) { return tot ? part / tot * 100 : 0; }

  /* ── Iconografía SVG (línea, sin emojis) ────────────────────── */
  var ICO = {
    team: '<svg viewBox="0 0 64 44" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="32" cy="12" r="7.2"/><path d="M18 40c0-7.7 6.3-13 14-13s14 5.3 14 13"/>' +
      '<circle cx="12" cy="17" r="5.6" opacity=".62"/><path d="M2 39c0-6.3 4.5-10.6 10-10.6 1.5 0 2.9.3 4.2.9" opacity=".62"/>' +
      '<circle cx="52" cy="17" r="5.6" opacity=".62"/><path d="M62 39c0-6.3-4.5-10.6-10-10.6-1.5 0-2.9.3-4.2.9" opacity=".62"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19.2S3.4 13.8 3.4 8.7a4.5 4.5 0 0 1 8.6-1.8 4.5 4.5 0 0 1 8.6 1.8c0 5.1-8.6 10.5-8.6 10.5z"/></svg>',
    tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3.4a5 5 0 0 0 5.4 8.2l-8.9 8.9a2.5 2.5 0 0 1-3.5-3.5l8.9-8.9a5 5 0 0 1-1.9-4.7z"/><circle cx="9.6" cy="17.9" r="1"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.8c3.4 2.2 5.2 5.6 5.2 9.4l-2.6 3.3H9.4l-2.6-3.3c0-3.8 1.8-7.2 5.2-9.4z"/><circle cx="12" cy="9.8" r="1.9"/><path d="M9.4 15.5l-2.6 2.1.8 3.6 2.9-2M14.6 15.5l2.6 2.1-.8 3.6-2.9-2"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5.5h17l-6.6 7.6v5.9l-3.8 2v-7.9z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2.2"/><path d="M8.3 10.5V7.8a3.7 3.7 0 017.4 0v2.7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12.5 6l6 6-6 6"/></svg>'
  };

  /* ══════════════════════════════════════════════════════════════
     3 · ESTADO
     ══════════════════════════════════════════════════════════════ */
  var FILTER = null;                 /* {type, key, lbl, ids} */
  var M = model(ALLIDS);             /* modelo del subconjunto activo */
  var U = model(ALLIDS);             /* universo completo, nunca filtrado */

  function activeIds() { return FILTER ? FILTER.ids : ALLIDS; }
  function filtered() { return !!FILTER; }
  function ctxLabel() {
    return FILTER ? (SEG_TITLE[FILTER.type] + ' · ' + FILTER.lbl) : 'Equipo comercial completo';
  }

  /* ══════════════════════════════════════════════════════════════
     4 · ① FICHA DEL UNIVERSO EVALUADO
     ══════════════════════════════════════════════════════════════ */
  var elUni = document.getElementById('clUni');

  function donutSubareas() {
    var segs = SEG.sb, total = ROWS.length;
    var R = 52, SW = 19, C = 2 * Math.PI * R, off = 0;
    var arcs = segs.map(function (s, i) {
      var frac = s.ids.length / total;
      var len = C * frac;
      var gap = segs.length > 1 ? 2.4 : 0;
      var on = FILTER && FILTER.type === 'sb' && FILTER.key === s.key;
      var dim = FILTER && !on;
      var a = '<circle class="cl-arc' + (on ? ' is-on' : '') + (dim ? ' is-dim' : '') +
        (s.ids.length >= MIN_N ? ' is-clk' : '') + '"' +
        ' data-seg="sb" data-key="' + esc(s.key) + '"' +
        ' cx="70" cy="70" r="' + R + '" fill="none" stroke="' + SUBC[i % SUBC.length] + '"' +
        ' stroke-width="' + SW + '"' +
        ' stroke-dasharray="0 ' + C.toFixed(2) + '"' +
        ' data-arc="' + Math.max(0, len - gap).toFixed(2) + ' ' + C.toFixed(2) + '"' +
        ' stroke-dashoffset="' + (-off).toFixed(2) + '"' +
        ' transform="rotate(-90 70 70)"><title>' + esc(s.lbl) + ' · ' + s.ids.length + '</title></circle>';
      off += len;
      return a;
    }).join('');

    var legend = segs.map(function (s, i) {
      var okN = s.ids.length >= MIN_N;
      var on = FILTER && FILTER.type === 'sb' && FILTER.key === s.key;
      return '<button type="button" class="cl-lgrow' + (on ? ' is-on' : '') + (okN ? '' : ' is-lock') + '"' +
        (okN ? ' data-seg="sb" data-key="' + esc(s.key) + '"' : ' disabled aria-disabled="true"') +
        ' style="--c:' + SUBC[i % SUBC.length] + '">' +
        '<i></i><span class="cl-lgrow-t">' + esc(s.lbl) + '</span>' +
        '<span class="cl-lgrow-lk">' + (okN ? '' : ICO.lock) + '</span>' +
        '<span class="cl-lgrow-n">' + s.ids.length + '</span>' +
        '<span class="cl-lgrow-p">' + n0(pc(s.ids.length, total)) + '%</span>' +
        '</button>';
    }).join('');

    return '<div class="cl-uni-z">' +
        '<div class="cl-uni-lbl">Composición por subárea</div>' +
        '<div class="cl-donut-wrap">' +
          '<svg class="cl-donut" viewBox="0 0 140 140" role="img" aria-label="Participantes por subárea">' +
            '<circle cx="70" cy="70" r="' + R + '" fill="none" stroke="#eef2f8" stroke-width="' + SW + '"/>' +
            arcs +
          '</svg>' +
          '<div class="cl-donut-c">' +
            '<div class="cl-donut-n" data-count="' + total + '" data-dec="0">0</div>' +
            '<div class="cl-donut-s">participantes</div>' +
          '</div>' +
        '</div>' +
        '<div class="cl-lgrows">' + legend + '</div>' +
      '</div>';
  }

  function histo(type, title, note) {
    var segs = SEG[type], total = ROWS.length;
    var max = Math.max.apply(null, segs.map(function (s) { return s.ids.length; })) || 1;
    var bars = segs.map(function (s) {
      var okN = s.ids.length >= MIN_N;
      var on = FILTER && FILTER.type === type && FILTER.key === s.key;
      var h = s.ids.length / max * 100;
      return '<button type="button" class="cl-hb' + (on ? ' is-on' : '') + (okN ? '' : ' is-lock') + '"' +
        (okN ? ' data-seg="' + type + '" data-key="' + esc(s.key) + '"' : ' disabled aria-disabled="true"') +
        '>' +
        '<span class="cl-hb-n">' + s.ids.length + '</span>' +
        '<span class="cl-hb-track"><i data-h="' + h.toFixed(1) + '"></i></span>' +
        '<span class="cl-hb-l">' + esc(s.lbl) + '</span>' +
        '<span class="cl-hb-p">' + n0(pc(s.ids.length, total)) + '%</span>' +
        '</button>';
    }).join('');
    return '<div class="cl-uni-z">' +
        '<div class="cl-uni-lbl">' + title + '</div>' +
        '<div class="cl-histo">' + bars + '</div>' +
        '<div class="cl-uni-note">' + note + '</div>' +
      '</div>';
  }

  function renderUni() {
    var total = ROWS.length;
    var ages = ROWS.map(function (r) { return r.e; }).sort(function (a, b) { return a - b; });
    var avgAge = ages.reduce(function (a, b) { return a + b; }, 0) / ages.length;
    var nSub = SEG.sb.length;

    var dark =
      '<div class="cl-uni-dark">' +
        '<div class="cl-uni-dark-in">' +
          '<div class="cl-eyebrow">Universo evaluado</div>' +
          '<div class="cl-uni-ico" aria-hidden="true"><span class="cl-uni-emoji">👥</span></div>' +
          '<div class="cl-uni-big"><span data-count="' + total + '" data-dec="0">0</span>' +
            '<em>participantes</em></div>' +
          '<div class="cl-uni-sub">Área Comercial · ' + nSub + ' subáreas · ' +
            U.all.n + ' valoraciones</div>' +
          '<div class="cl-uni-stats">' +
            '<div class="cl-uni-st"><span>Edad promedio</span><b>' + n1(avgAge) + '</b></div>' +
            '<div class="cl-uni-st"><span>Rango de edad</span><b>' + ages[0] + '–' + ages[ages.length - 1] + '</b></div>' +
            '<div class="cl-uni-st"><span>Preguntas</span><b>' + QS.length + ' + 3</b></div>' +
          '</div>' +
          '<div class="cl-uni-chip">' + ICO.lock + 'Lectura agregada · segmentos desde ' + MIN_N + ' respuestas</div>' +
        '</div>' +
      '</div>';

    elUni.innerHTML = dark +
      donutSubareas() +
      histo('ed', 'Distribución por edad', 'Tramos contiguos sobre el rango real ' + ages[0] + '–' + ages[ages.length - 1] + ' años') +
      histo('an', 'Distribución por antigüedad', 'Tal como se declara en la encuesta');

    bindSegs();
  }

  /* ── Barra de filtro activo ─────────────────────────────────── */
  var elFbar = document.getElementById('clFbar');

  function renderFbar() {
    if (!FILTER) {
      elFbar.className = 'cl-fbar';
      elFbar.innerHTML =
        '<span class="cl-fbar-ico">' + ICO.filter + '</span>' +
        '<span class="cl-fbar-tx">Analizando las <b>' + ROWS.length + '</b> respuestas del área. ' +
        'Haz clic en una subárea, tramo de edad o antigüedad para segmentar el análisis.</span>';
      return;
    }
    var pct = pc(FILTER.ids.length, ROWS.length);
    elFbar.className = 'cl-fbar is-on';
    elFbar.innerHTML =
      '<span class="cl-fbar-ico">' + ICO.filter + '</span>' +
      '<span class="cl-fbar-tx">Filtro activo</span>' +
      '<span class="cl-fbar-pill">' + esc(SEG_TITLE[FILTER.type]) + ' · <b>' + esc(FILTER.lbl) + '</b></span>' +
      '<span class="cl-fbar-tx">Analizando <b>' + FILTER.ids.length + '</b> de ' + ROWS.length +
        ' respuestas (' + n0(pct) + '%)</span>' +
      '<button type="button" class="cl-fbar-x" id="clClear">Ver todo ✕</button>';
    var c = document.getElementById('clClear');
    if (c) c.addEventListener('click', function () { setFilter(null); });
  }

  function bindSegs() {
    view.querySelectorAll('[data-seg]').forEach(function (el) {
      el.addEventListener('click', function () {
        setFilter({ type: el.dataset.seg, key: el.dataset.key });
      });
    });
  }

  function setFilter(req) {
    if (!req) { FILTER = null; }
    else {
      var s = (SEG[req.type] || []).filter(function (x) { return x.key === req.key; })[0];
      if (!s || s.ids.length < MIN_N) return;
      /* volver a pulsar el mismo segmento limpia el filtro */
      if (FILTER && FILTER.type === s.type && FILTER.key === s.key) FILTER = null;
      else FILTER = { type: s.type, key: s.key, lbl: s.lbl, ids: s.ids };
    }
    M = model(activeIds());
    renderUni();
    renderFbar();
    renderAnalysis();
    view.classList.remove('cl-swap'); void view.offsetWidth; view.classList.add('cl-swap');
    animate();
  }

  /* ══════════════════════════════════════════════════════════════
     5 · ② PULSO DEL CLIMA
     ══════════════════════════════════════════════════════════════ */
  var elIdxCard = document.getElementById('clIdxCard');
  var elDims = document.getElementById('clDims');
  var elDimsSub = document.getElementById('clDimsSub');

  function ringSvg(v, size) {
    var R = 59, C = 2 * Math.PI * R;
    var b = band(v);
    return '<svg class="cl-ring" viewBox="0 0 138 138" width="' + size + '" height="' + size + '" aria-hidden="true">' +
      '<circle cx="69" cy="69" r="' + R + '" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="10"/>' +
      '<circle class="cl-ring-f" cx="69" cy="69" r="' + R + '" fill="none" stroke="' + HEX[b.k] + '"' +
      ' stroke-width="10" stroke-linecap="round" stroke-dasharray="' + C.toFixed(1) + '"' +
      ' stroke-dashoffset="' + C.toFixed(1) + '" data-dash="' + (C * (1 - v / 100)).toFixed(2) + '"' +
      ' data-full="' + C.toFixed(1) + '" transform="rotate(-90 69 69)"/>' +
      '</svg>';
  }

  function renderIdxCard() {
    var a = M.all, b = band(a.idx);
    var segbar = SEGC.map(function (s, i) {
      return '<span data-w="' + pc(a.seg[i], a.n).toFixed(2) + '" style="background:' + s.c + '"></span>';
    }).join('');

    elIdxCard.innerHTML =
      '<div class="cl-ic-glow"></div>' +
      '<div class="cl-ic-in">' +
        '<div class="cl-eyebrow">Índice general de clima</div>' +
        '<div class="cl-ic-main">' +
          '<div class="cl-ic-ring">' + ringSvg(a.idx, 150) +
            '<div class="cl-ic-rc"><span data-count="' + a.idx.toFixed(2) + '" data-dec="1">0.0</span><em>/100</em></div>' +
          '</div>' +
          '<div class="cl-ic-side">' +
            '<div class="cl-ic-chip" style="--c:' + HEX[b.k] + '"><i></i>' + b.lbl + '</div>' +
            '<div class="cl-ic-st"><span>Promedio</span><b>' + n1(a.avg) + '<em>/5</em></b></div>' +
            '<div class="cl-ic-st"><span>Favorabilidad 4–5</span><b>' + n1(a.fav) + '<em>%</em></b></div>' +
            '<div class="cl-ic-st"><span>Puntuación 5</span><b>' + n1(a.top) + '<em>%</em></b></div>' +
          '</div>' +
        '</div>' +
        '<div class="cl-ic-bar">' + segbar + '</div>' +
        '<div class="cl-ic-foot">' + esc(ctxLabel()) + ' · ' + M.n + ' respuestas · ' + a.n + ' valoraciones</div>' +
      '</div>';
  }

  function renderDims() {
    elDimsSub.textContent = 'Índice 0–100 y distribución real de cada bloque de preguntas · ' + esc(ctxLabel());

    elDims.innerHTML = M.d.map(function (d) {
      var b = band(d.idx);
      var segbar = SEGC.map(function (s, i) {
        return '<span data-w="' + pc(d.seg[i], d.n).toFixed(2) + '" style="background:' + s.c + '"></span>';
      }).join('');
      return '<button type="button" class="cl-dcard" data-dim="' + d.i + '" style="--c:' + d.c + '">' +
          '<div class="cl-dcard-h">' +
            '<span class="cl-dcard-n">D' + (d.i + 1) + '</span>' +
            '<span class="cl-dcard-t">' + esc(d.s) + '</span>' +
          '</div>' +
          '<div class="cl-dcard-m">' +
            '<div class="cl-dcard-v" data-count="' + d.idx.toFixed(2) + '" data-dec="1">0.0</div>' +
            '<div class="cl-dcard-meta">' +
              '<span class="cl-pill" style="--c:' + HEX[b.k] + '"><i></i>' + b.lbl + '</span>' +
              '<span class="cl-dcard-sub">' + n1(d.avg) + '/5 · fav ' + n0(d.fav) + '%</span>' +
            '</div>' +
          '</div>' +
          '<div class="cl-dcard-bar">' + segbar + '</div>' +
          '<div class="cl-dcard-f">' +
            '<span>' + d.qs.length + ' preguntas</span>' +
            '<span class="cl-dcard-cta">Ver análisis ' + ICO.arrow + '</span>' +
          '</div>' +
        '</button>';
    }).join('');

    elDims.querySelectorAll('[data-dim]').forEach(function (el) {
      el.addEventListener('click', function () { openDim(+el.dataset.dim); });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     7 · ④ MAPA DE CLIMA + DISTRIBUCIÓN
     ══════════════════════════════════════════════════════════════ */
  var elHeat = document.getElementById('clHeat');

  function renderHeat() {
    elHeat.innerHTML = M.d.map(function (d) {
      var bd = band(d.idx);
      var cells = d.qs.map(function (q) {
        var b = band(q.idx);
        var dots = q.seg.map(function (c, k) {
          return c ? '<i class="s' + k + '" style="flex:' + c + '"></i>' : '';
        }).join('');
        return '<div class="cl-hcell cl-c-' + b.k + '" data-q="' + q.j + '">' +
            '<div class="cl-hcell-t">' + esc(q.s) + '</div>' +
            '<div class="cl-hcell-v">' + n0(q.idx) + '<em>%</em></div>' +
            '<div class="cl-hcell-dots">' + dots + '</div>' +
          '</div>';
      }).join('');
      return '<div class="cl-hgrp cl-c-' + bd.k + '" style="--dc:' + d.c + '">' +
          '<div class="cl-hgrp-id">' +
            '<div class="cl-hgrp-t">' + esc(d.s) + '</div>' +
            '<div class="cl-hgrp-m"><span class="cl-hgrp-v">' + n1(d.idx) + '</span>' +
            '<span class="cl-hgrp-s">' + d.qs.length + ' indicadores</span></div>' +
          '</div>' +
          '<div class="cl-hcells">' + cells + '</div>' +
        '</div>';
    }).join('');
    bindTip();
  }

  /* Tooltip */
  var tip = document.getElementById('clTip');

  function tipHtml(q) {
    var b = band(q.idx);
    var rows = [5, 4, 3, 2, 1].map(function (lv, i) {
      return '<div class="cl-tip-b" style="--bc:' + HEX[b.k] + '">' +
          '<s>Punt. ' + lv + '</s>' +
          '<i><b style="width:' + pc(q.d[i], q.n) + '%"></b></i>' +
          '<u>' + q.d[i] + '</u>' +
        '</div>';
    }).join('');
    return '<div class="cl-tip-t">' + esc(q.t) + '</div>' +
      '<div class="cl-tip-d">' + esc(DIMS[q.dim].s) + ' · ' + b.lbl + '</div>' +
      '<div class="cl-tip-row"><span>Promedio</span><b>' + n1(q.avg) + ' / 5.0</b></div>' +
      '<div class="cl-tip-row"><span>Índice 0–100</span><b>' + n1(q.idx) + '</b></div>' +
      '<div class="cl-tip-row"><span>Favorabilidad (4–5)</span><b>' + n0(q.fav) + '%</b></div>' +
      '<div class="cl-tip-hr"></div>' +
      '<div class="cl-tip-dist">' + rows + '</div>' +
      '<div class="cl-tip-f">' + esc(ctxLabel()) + ' · ' + q.n + ' respuestas</div>';
  }

  function placeTip(e) {
    if (!tip) return;
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var x = e.clientX + 16, y = e.clientY + 16;
    if (x + w > window.innerWidth - 10) x = e.clientX - w - 16;
    if (y + h > window.innerHeight - 10) y = Math.max(10, e.clientY - h - 16);
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
  }

  function bindTip() {
    view.querySelectorAll('.cl-hcell').forEach(function (c) {
      var q = M.q[+c.dataset.q];
      function on(e) { tip.innerHTML = tipHtml(q); tip.classList.add('is-on'); placeTip(e); }
      function off() { tip.classList.remove('is-on'); }
      c.addEventListener('mouseenter', on);
      c.addEventListener('mousemove', placeTip);
      c.addEventListener('mouseleave', off);
      c.addEventListener('click', function (e) { on(e); setTimeout(off, 3200); });
    });
  }

  /* Distribución general */
  function renderDist() {
    var a = M.all;
    document.getElementById('clDistN').innerHTML =
      '<b>' + a.n + '</b> valoraciones · ' + M.n + ' respuestas × ' + QS.length + ' preguntas · ' + esc(ctxLabel());

    document.getElementById('clSeg').innerHTML = SEGC.map(function (s, i) {
      var p = pc(a.seg[i], a.n);
      return '<span data-w="' + p.toFixed(2) + '" style="background:' + s.c + '">' +
        (p >= 8 ? '<em>' + n1(p) + '%</em>' : '') + '</span>';
    }).join('');

    document.getElementById('clSegLgnd').innerHTML = SEGC.map(function (s, i) {
      return '<div class="cl-lg" style="--c:' + s.c + ';--cw:' + s.c + '22">' +
          '<i></i><span class="cl-lg-t">' + s.t + '</span>' +
          '<span class="cl-lg-v">' + a.seg[i] + '<em>' + n1(pc(a.seg[i], a.n)) + '%</em></span>' +
        '</div>';
    }).join('');

    document.getElementById('clMini').innerHTML = M.d.map(function (d) {
      var bars = SEGC.map(function (s, i) {
        return '<span data-w="' + pc(d.seg[i], d.n).toFixed(2) + '" style="background:' + s.c + '"></span>';
      }).join('');
      return '<div class="cl-mini-r">' +
          '<div class="cl-mini-t" title="' + esc(d.t) + '"><i style="background:' + d.c + '"></i>' + esc(d.s) + '</div>' +
          '<div class="cl-mini-bar">' + bars + '</div>' +
          '<div class="cl-mini-v">' + n1(d.idx) + '</div>' +
        '</div>';
    }).join('');
  }

  /* ══════════════════════════════════════════════════════════════
     8 · ⑤ VOZ DEL EQUIPO
     ══════════════════════════════════════════════════════════════ */
  var elVoice = document.getElementById('clVoice');
  var elVoiceSub = document.getElementById('clVoiceSub');

  /* Temas del bloque k, contados sólo sobre los participantes activos */
  function themesOf(k) {
    var ids = activeIds();
    return THEMES.filter(function (t) { return t.k === k; })
      .map(function (t) {
        var hit = t.r.filter(function (n) { return ids.indexOf(n - 1) >= 0; });
        return { t: t.t, r: hit, dim: t.dim, all: t.r };
      })
      .filter(function (t) { return t.r.length > 0; })
      .sort(function (a, b) { return b.r.length - a.r.length || a.t.localeCompare(b.t); });
  }

  function renderVoice() {
    elVoiceSub.textContent = 'Temas agrupados sin alterar el sentido de las respuestas · ' + ctxLabel();

    elVoice.innerHTML = OPENQ.map(function (v) {
      var th = themesOf(v.k);
      var tot = th.reduce(function (a, t) { return a + t.r.length; }, 0) || 1;
      var max = th[0] ? th[0].r.length : 1;

      var blocks = th.map(function (t) {
        var w = t.r.length / max;
        var lvl = w >= .85 ? 'lv1' : (w >= .5 ? 'lv2' : 'lv3');
        return '<div class="cl-th ' + lvl + '">' +
            '<div class="cl-th-t">' + esc(t.t) + '</div>' +
            '<div class="cl-th-m">' +
              '<span class="cl-th-n">' + t.r.length + '</span>' +
              '<span class="cl-th-l">' + (t.r.length === 1 ? 'mención' : 'menciones') + '</span>' +
              '<span class="cl-th-p">' + n0(pc(t.r.length, tot)) + '%</span>' +
            '</div>' +
            '<div class="cl-th-bar"><i data-w="' + (w * 100).toFixed(1) + '"></i></div>' +
          '</div>';
      }).join('');

      var foot = filtered()
        ? '<span class="cl-vfoot-lock">' + ICO.lock + 'Comentarios literales sólo en vista consolidada</span>'
        : '<button type="button" class="cl-vbtn" data-open="' + v.k + '">Ver comentarios ' + ICO.arrow + '</button>';

      return '<div class="cl-vcard" style="--c:' + v.c + ';--cw:' + v.c + '1f">' +
          '<div class="cl-vhead">' +
            '<span class="cl-vico">' + ICO[v.ico] + '</span>' +
            '<div><div class="cl-vt">' + v.t + '</div>' +
            '<div class="cl-vs">' + th.length + ' temas · ' + M.n + ' respuestas</div></div>' +
          '</div>' +
          '<div class="cl-vbody">' + blocks + '</div>' +
          '<div class="cl-vfoot">' + foot + '</div>' +
        '</div>';
    }).join('');

    elVoice.querySelectorAll('[data-open]').forEach(function (b) {
      b.addEventListener('click', function () { openComments(+b.dataset.open); });
    });
  }

  /* Lectura transversal cuanti + cuali */
  function renderRead() {
    var lowQ = M.q.slice().sort(function (a, b) { return a.idx - b.idx; })[0];
    var lowD = M.d.slice().sort(function (a, b) { return a.idx - b.idx; })[0];
    var topMej = themesOf(1)[0];
    var topCam = themesOf(2)[0];
    var el = document.getElementById('clRead');
    if (!el) return;
    if (!topMej || !topCam) {
      el.innerHTML = '<span class="cl-read-ic">LECTURA</span><span class="cl-read-tx">' +
        'La dimensión más baja de este segmento es <b>' + esc(lowD.s) + '</b> (' + n1(lowD.idx) +
        ') y el indicador más bajo, <b>' + esc(lowQ.s) + '</b> (' + n1(lowQ.idx) + ').</span>';
      return;
    }

    el.innerHTML = '<span class="cl-read-ic">LECTURA</span><span class="cl-read-tx">' +
      'Lo cuantitativo y lo cualitativo apuntan al mismo punto: la dimensión más baja es <b>' +
      esc(lowD.s) + '</b> (' + n1(lowD.idx) + ') y el indicador más bajo, <b>' + esc(lowQ.s) + '</b> (' +
      n1(lowQ.idx) + '). En las respuestas abiertas, <b>' + esc(topMej.t) + '</b> concentra ' +
      topMej.r.length + (topMej.r.length === 1 ? ' mención' : ' menciones') + ' de mejora y <b>' +
      esc(topCam.t) + '</b> es el cambio más propuesto (' + topCam.r.length +
      (topCam.r.length === 1 ? ' mención' : ' menciones') + ').</span>';
  }

  /* ══════════════════════════════════════════════════════════════
     9 · DRAWER DE ANÁLISIS
     ══════════════════════════════════════════════════════════════ */
  var dwBg = document.getElementById('clDwBg');
  var dwH = document.getElementById('clDwH');
  var dwEye = document.getElementById('clDwEye');
  var dwT = document.getElementById('clDwT');
  var dwS = document.getElementById('clDwS');
  var dwChips = document.getElementById('clDwChips');
  var dwBody = document.getElementById('clDwBody');

  function dwStat(l, v, u) {
    return '<div class="cl-dws"><span>' + l + '</span><b>' + v + (u ? '<em>' + u + '</em>' : '') + '</b></div>';
  }

  function distBlock(s, color) {
    return [5, 4, 3, 2, 1].map(function (lv, i) {
      return '<div class="cl-dwd" style="--c:' + color + '">' +
          '<s>Puntuación ' + lv + '</s>' +
          '<i><b style="width:' + pc(s.d[i], s.n) + '%"></b></i>' +
          '<u>' + s.d[i] + '</u><o>' + n0(pc(s.d[i], s.n)) + '%</o>' +
        '</div>';
    }).join('');
  }

  function openDim(i) {
    var d = M.d[i];
    if (!d) return;
    var b = band(d.idx);

    dwH.style.setProperty('--dwc', d.c);
    dwEye.textContent = 'Análisis de dimensión · D' + (i + 1);
    dwT.textContent = d.t;
    dwS.textContent = d.qs.length + ' preguntas · ' + d.n + ' valoraciones';
    dwChips.innerHTML =
      '<span class="cl-dwchip" style="--c:' + HEX[b.k] + '"><i></i>' + b.lbl + '</span>' +
      '<span class="cl-dwchip is-ghost">' + esc(ctxLabel()) + ' · ' + M.n + ' resp.</span>';

    var sorted = d.qs.slice().sort(function (a, b2) { return b2.idx - a.idx; });
    var strong = sorted[0], weak = sorted[sorted.length - 1];

    var preguntas = sorted.map(function (q) {
      var qb = band(q.idx);
      return '<div class="cl-dwq cl-c-' + qb.k + '">' +
          '<div class="cl-dwq-h"><span class="cl-dwq-t">' + esc(q.t) + '</span>' +
          '<span class="cl-dwq-v">' + n1(q.idx) + '</span></div>' +
          '<div class="cl-dwq-bar"><i style="width:' + q.idx.toFixed(1) + '%"></i></div>' +
          '<div class="cl-dwq-m">' + n1(q.avg) + '/5 · favorabilidad ' + n0(q.fav) + '% · ' +
            q.d[0] + ' respuestas en 5</div>' +
        '</div>';
    }).join('');

    /* Comentarios relacionados — sólo en vista consolidada */
    var rel = THEMES.filter(function (t) { return t.dim.indexOf(i) >= 0; });
    var relHtml;
    if (filtered()) {
      relHtml = '<div class="cl-dwlock">' + ICO.lock +
        '<span>Los comentarios literales se consultan en la vista consolidada, ' +
        'para no vincular opiniones con un segmento reducido.</span></div>';
    } else if (!rel.length) {
      relHtml = '<div class="cl-dwempty">No hay respuestas abiertas asociadas a esta dimensión.</div>';
    } else {
      var seen = {};
      var items = [];
      rel.forEach(function (t) {
        t.r.forEach(function (n) {
          var key = t.k + '-' + n;
          if (seen[key]) return;
          seen[key] = 1;
          items.push({ k: t.k, n: n, tema: t.t, txt: ROWS[n - 1].o[t.k] });
        });
      });
      relHtml = items.map(function (it, ix) {
        return '<div class="cl-qt" style="--c:' + OPENQ[it.k].c + ';--cw:' + OPENQ[it.k].c +
            '1f;animation-delay:' + (ix * .03).toFixed(3) + 's">' +
            '<div class="cl-qt-tx">“' + esc(it.txt) + '”</div>' +
            '<div class="cl-qt-m"><span class="cl-qt-src">' + esc(OPENQ[it.k].t) + '</span>' +
            '<span class="cl-qt-tag">' + esc(it.tema) + '</span></div>' +
          '</div>';
      }).join('');
    }

    dwBody.innerHTML =
      '<div class="cl-dwgrid">' +
        dwStat('Índice', n1(d.idx), '/100') +
        dwStat('Promedio', n1(d.avg), '/5') +
        dwStat('Favorabilidad', n0(d.fav), '%') +
      '</div>' +
      '<div class="cl-dwsec">Distribución de respuestas</div>' +
      '<div class="cl-dwdist">' + distBlock(d, d.c) + '</div>' +
      '<div class="cl-dwsec">Preguntas que la componen</div>' + preguntas +
      '<div class="cl-dwsec">Lectura</div>' +
      '<div class="cl-dwread">' +
        '<div class="cl-dwread-r is-up"><span>Fortaleza</span><b>' + esc(strong.s) + '</b>' +
          '<em>' + n1(strong.idx) + ' · ' + n0(strong.fav) + '% favorable</em></div>' +
        (weak !== strong
          ? '<div class="cl-dwread-r is-dn"><span>Foco de atención</span><b>' + esc(weak.s) + '</b>' +
            '<em>' + n1(weak.idx) + ' · ' + n0(weak.fav) + '% favorable</em></div>'
          : '') +
      '</div>' +
      '<div class="cl-dwsec">Comentarios relacionados</div>' + relHtml;

    openDrawer();
  }

  function openComments(k) {
    if (filtered()) return;
    var v = OPENQ[k];
    dwH.style.setProperty('--dwc', v.c);
    dwEye.textContent = 'Voz del equipo · comentarios originales';
    dwT.textContent = v.t;
    dwS.textContent = v.q;
    dwChips.innerHTML =
      '<span class="cl-dwchip" style="--c:' + v.c + '"><i></i>' + ROWS.length + ' respuestas</span>' +
      '<span class="cl-dwchip is-ghost">Texto literal, sin editar</span>';

    dwBody.innerHTML = ROWS.map(function (r, i) {
      var tags = THEMES.filter(function (t) { return t.k === k && t.r.indexOf(i + 1) >= 0; })
        .map(function (t) { return '<span class="cl-qt-tag">' + esc(t.t) + '</span>'; }).join('');
      return '<div class="cl-qt" style="--c:' + v.c + ';--cw:' + v.c + '1f;animation-delay:' +
          (i * .03).toFixed(3) + 's">' +
          '<div class="cl-qt-tx">“' + esc(r.o[k]) + '”</div>' +
          '<div class="cl-qt-m">' + tags + '</div>' +
        '</div>';
    }).join('');

    openDrawer();
  }

  function openDrawer() {
    dwBg.classList.add('is-open');
    dwBody.scrollTop = 0;
  }
  function closeDrawer() { dwBg.classList.remove('is-open'); }

  if (dwBg) {
    dwBg.addEventListener('click', function (e) { if (e.target === dwBg) closeDrawer(); });
    var x = document.getElementById('clDwX');
    if (x) x.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dwBg.classList.contains('is-open')) closeDrawer();
    });
  }

  /* ══════════════════════════════════════════════════════════════
     10 · ANIMACIÓN — primero estructura, después cifras
     ══════════════════════════════════════════════════════════════ */
  function countUp(el) {
    var target = parseFloat(el.dataset.count);
    var dec = el.dataset.dec === undefined ? 1 : +el.dataset.dec;
    var dur = 900, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(dec);
    }
    requestAnimationFrame(step);
  }

  function animate() {
    var bars = view.querySelectorAll('[data-w]');
    var cols = view.querySelectorAll('[data-h]');
    var arcs = view.querySelectorAll('[data-dash]');
    var donut = view.querySelectorAll('[data-arc]');
    var nums = view.querySelectorAll('[data-count]');

    bars.forEach(function (b) { b.style.width = '0'; });
    cols.forEach(function (c) { c.style.height = '0'; });
    arcs.forEach(function (a) {
      a.style.transition = 'none';
      a.style.strokeDashoffset = a.dataset.full;
    });
    donut.forEach(function (a) {
      a.style.transition = 'none';
      a.style.strokeDasharray = '0 9999';
    });
    view.querySelectorAll('.cl-hcell').forEach(function (c) { c.classList.remove('is-in'); });
    view.querySelectorAll('.cl-th').forEach(function (c) { c.classList.remove('is-in'); });

    void view.offsetWidth;

    /* 1 · estructura */
    view.querySelectorAll('.cl-hcell').forEach(function (c, i) {
      setTimeout(function () { c.classList.add('is-in'); }, 40 + i * 22);
    });
    view.querySelectorAll('.cl-th').forEach(function (c, i) {
      setTimeout(function () { c.classList.add('is-in'); }, 40 + i * 18);
    });

    /* 2 · trazos y cifras */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        bars.forEach(function (b) { b.style.width = b.dataset.w + '%'; });
        cols.forEach(function (c) { c.style.height = c.dataset.h + '%'; });
        arcs.forEach(function (a) {
          a.style.transition = '';
          a.style.strokeDashoffset = a.dataset.dash;
        });
        donut.forEach(function (a) {
          a.style.transition = '';
          a.style.strokeDasharray = a.dataset.arc;
        });
        nums.forEach(countUp);
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     11 · PINTADO
     ══════════════════════════════════════════════════════════════ */
  function renderAnalysis() {
    renderIdxCard();
    renderDims();
    renderHeat();
    renderDist();
    renderVoice();
    renderRead();
  }

  var elMeta = document.getElementById('clMeta');
  if (elMeta) {
    elMeta.innerHTML =
      '<span class="cl-meta-i"><b>' + ROWS.length + '</b>respuestas</span>' +
      '<span class="cl-meta-i"><b>' + QS.length + '</b>preguntas 1–5</span>' +
      '<span class="cl-meta-i"><b>' + SEG.sb.length + '</b>subáreas</span>';
  }

  renderUni();
  renderFbar();
  renderAnalysis();

  window._initClimaView = function () {
    var hero = view.querySelector('.cl-uni-dark');
    if (hero) { hero.classList.remove('cl-anim'); void hero.offsetWidth; hero.classList.add('cl-anim'); }
    animate();
  };
})();


/* ════════════════════════════════════════════════════════════════
   PRIMER NIVEL DE MANO DE OBRA · Productividad | Clima Laboral
   La vista de Productividad queda intacta (con sus tabs Comercial /
   Arquitectura); este conmutador sólo alterna qué bloque se muestra.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var bar = document.getElementById('movLvl1');
  if (!bar) return;

  var ink = document.getElementById('movLvl1Ink');
  var views = {
    prod:  document.getElementById('movProd'),
    clima: document.getElementById('movClima')
  };
  var current = 'prod';

  /* instant = colocar sin deslizar (primer pintado, reentrada a la
     pestaña y resize); el deslizamiento se reserva al cambio manual. */
  function moveInk(btn, instant) {
    if (!ink || !btn || !btn.offsetWidth) return;
    if (instant) ink.style.transition = 'none';
    ink.style.opacity = '1';
    ink.style.width = btn.offsetWidth + 'px';
    ink.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
    if (instant) { void ink.offsetWidth; ink.style.transition = ''; }
    bar.classList.add('is-ready');
  }

  function enter(key) {
    if (key === 'clima') { if (window._initClimaView) window._initClimaView(); }
    else if (origInit) origInit();
  }

  function setView(key, fromUser) {
    if (!views[key]) return;
    current = key;
    bar.querySelectorAll('.mov-lvl1-btn').forEach(function (b) {
      var on = b.dataset.view === key;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) moveInk(b, !fromUser);
    });
    Object.keys(views).forEach(function (k) {
      views[k].classList.toggle('is-on', k === key);
    });
    if (fromUser) enter(key);
  }

  bar.addEventListener('click', function (e) {
    var b = e.target.closest('.mov-lvl1-btn');
    if (b && b.dataset.view !== current) setView(b.dataset.view, true);
  });

  bar.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var b = e.target.closest('.mov-lvl1-btn');
    if (!b) return;
    e.preventDefault();
    var list = Array.prototype.slice.call(bar.querySelectorAll('.mov-lvl1-btn'));
    var next = list[(list.indexOf(b) + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
    next.focus();
    setView(next.dataset.view, true);
  });

  window.addEventListener('resize', function () {
    var on = bar.querySelector('.mov-lvl1-btn.active');
    if (on) moveInk(on, true);
  });

  /* shared.js llama a _initMoCharts al entrar a la pestaña: se
     redirige a la subvista activa para que las barras se midan y
     animen sobre contenido ya visible.                            */
  var origInit = window._initMoCharts;
  window._initMoCharts = function () {
    var on = bar.querySelector('.mov-lvl1-btn.active');
    if (on) moveInk(on, true);
    enter(current);
  };
})();
