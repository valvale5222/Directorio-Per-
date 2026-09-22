/* ============================================================
   MAPA COMERCIAL — sub-tab de Ventas
   Vista conectada:  AÑO → ZONA → DEPARTAMENTO (opcional)
   Datos: js/mapa-data.js (MapaData)   Geometría: js/mapa-geo.js (MapaGeo)
   Sin librerías: SVG a mano, cero dependencias nuevas.
   ============================================================ */
(function () {
  'use strict';

  var root = document.getElementById('mapaComercial');
  if (!root || !window.MapaData || !window.MapaGeo) return;

  var D = window.MapaData, GEO = window.MapaGeo;

  /* ── Paleta (colores ya presentes en el proyecto) ─────────── */
  var ZONA_COLOR = { NORTE: '#3EC6AC', CENTRO: '#4FA8E0', SUR: '#8b5cf6' };

  /* Vista agregada "Perú" (todas las zonas): navy institucional, para que el
     acento del agregado no compita con ninguno de los tres colores de zona. */
  var ALL_COLOR = '#0a0a1e';
  var ALL_LABEL = 'Perú';

  function zonaColor(z) { return z ? ZONA_COLOR[z] : ALL_COLOR; }

  var SECTOR_COLOR = {
    AGRO:         '#3EC6AC',   // brand
    FRUVER:       '#3EC6AC',
    FLORES:       '#0F6E56',   // brand oscuro
    NOAGRO:       '#4FA8E0',   // azul de analytics
    INTERCOMPANY: '#AAB6C9'    // gris: operación interna, no venta de mercado
  };

  /* Umbrales de margen — mismos que la tabla Top 20 de Ventas. */
  function margenColor(m) {
    var p = m * 100;
    if (p >= 18) return '#16a34a';
    if (p >= 12) return '#d97706';
    return '#dc2626';
  }

  /* ── Utilidades de color (sin color-mix, para navegadores de TV) ── */
  function hex2rgb(h) {
    h = h.replace('#', '');
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function mix(hex, target, t) {
    var a = hex2rgb(hex), b = hex2rgb(target);
    return '#' + a.map(function (v, i) {
      return Math.round(v + (b[i] - v) * t).toString(16).padStart(2, '0');
    }).join('');
  }
  function rgba(hex, al) { var c = hex2rgb(hex); return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + al + ')'; }

  /* ── Estado ───────────────────────────────────────────────── */
  /* zona: null = todas las zonas (agregado nacional) — es el estado inicial. */
  var state = { anio: 2026, zona: null, dep: null };

  /* Departamento → zona, deducido de los propios registros. Sirve para pintar
     el mapa nacional con el color de cada zona y para resolver el % de zona de
     un departamento aunque el filtro esté en "Perú". */
  var DEP_ZONA = {};
  D.ROWS.forEach(function (r) { if (r.dep && !DEP_ZONA[r.dep]) DEP_ZONA[r.dep] = r.zona; });

  /** Zona con la que se consulta: la seleccionada o, en vista nacional con un
      departamento abierto, la zona a la que ese departamento pertenece. */
  function zonaEfectiva() {
    return state.zona || (state.dep ? (DEP_ZONA[state.dep] || null) : null);
  }

  /* ── Construcción del DOM ─────────────────────────────────── */
  /* El viewBox ceñido al país: las etiquetas se colocan en píxeles sobre
     el overlay (que desborda), así que no hace falta reservar margen aquí
     — y el mapa queda centrado en lugar de empujado a la derecha. */
  var vb = { x: -10, y: -10, w: GEO.width + 20, h: GEO.height + 20 };

  var el = {};

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function build() {
    root.innerHTML =
      '<div class="mc-shell">' +
        '<div class="mc-topbar">' +
          '<div class="mc-zones" id="mcZones"></div>' +
          '<div class="mc-years" id="mcYears"></div>' +
        '</div>' +
        '<div class="mc-stage" id="mcStage">' +
          /* El overlay de etiquetas debe cubrir EXACTAMENTE el <svg> del mapa,
             no el escenario completo (en móvil las cards flotantes pasan a
             flujo normal y el escenario crece). */
          '<div class="mc-mapwrap" id="mcMapWrap">' +
            '<svg class="mc-map" id="mcMap" viewBox="' + vb.x + ' ' + vb.y + ' ' + vb.w + ' ' + vb.h + '" ' +
                 'preserveAspectRatio="xMidYMid meet" role="img" ' +
                 'aria-label="Mapa de ventas por departamento del Perú"></svg>' +
            '<svg class="mc-ovl" id="mcOvl" aria-hidden="true"></svg>' +
          '</div>' +
          '<div class="mc-float mc-parts" id="mcParts"></div>' +
          '<div class="mc-float mc-detail" id="mcDetail"></div>' +
          '<div class="mc-tip" id="mcTip"></div>' +
        '</div>' +
      '</div>' +
      '<div class="mc-grid">' +
        '<div class="card" style="--i:0"><div class="mc-eyebrow" id="mcSecHd"></div><div id="mcSec"></div></div>' +
        '<div class="card" style="--i:1"><div class="mc-eyebrow" id="mcDepHd"></div><div id="mcDeps"></div></div>' +
        '<div class="card" style="--i:2"><div class="mc-eyebrow" id="mcCliHd"></div><div id="mcCli"></div></div>' +
      '</div>' +
      '<div class="mc-grid2">' +
        '<div class="card" style="--i:3"><div class="mc-eyebrow" id="mcRefHd"></div><div id="mcRef"></div></div>' +
        '<div class="card" style="--i:4"><div class="mc-eyebrow" id="mcTipoHd"></div><div id="mcTipo"></div></div>' +
      '</div>';

    ['mcZones', 'mcYears', 'mcStage', 'mcMapWrap', 'mcMap', 'mcOvl', 'mcParts', 'mcDetail', 'mcTip',
     'mcSecHd', 'mcSec', 'mcDepHd', 'mcDeps', 'mcCliHd', 'mcCli',
     'mcRefHd', 'mcRef', 'mcTipoHd', 'mcTipo'].forEach(function (id) {
      el[id] = document.getElementById(id);
    });
    el.mcGrids = root.querySelectorAll('.mc-grid, .mc-grid2');

    /* Selector de zona — "Perú" (agregado) delante de las tres zonas */
    el.mcZones.innerHTML =
      '<button class="mc-zone mc-zone-all" data-z="" style="--zc:' + ALL_COLOR + ';--zc-sh:' + rgba(ALL_COLOR, .34) + '">' +
        '<span class="mc-dot"></span>' + esc(ALL_LABEL) + '</button>' +
      D.ZONAS.map(function (z) {
        return '<button class="mc-zone" data-z="' + z + '" style="--zc:' + ZONA_COLOR[z] + ';--zc-sh:' + rgba(ZONA_COLOR[z], .42) + '">' +
          '<span class="mc-dot"></span>' + esc(D.ZONA_LABEL[z]) + '</button>';
      }).join('');

    /* Selector de año — con el total de cada año */
    el.mcYears.innerHTML = D.YEARS.map(function (y) {
      return '<button class="mc-year" data-y="' + y + '">' +
        '<span class="mc-year-n">' + y + '</span>' +
        '<span class="mc-year-v">' + D.money(D.zonas(y).total) + '</span></button>';
    }).join('');

    /* Mapa — los 25 departamentos, una sola vez.
       <g id="mcPulse"> queda encima para los destellos de selección. */
    el.mcMap.innerHTML =
      GEO.deps.map(function (d) {
        return '<path class="mc-dep" data-dep="' + esc(d.key) + '" d="' + d.d + '"></path>';
      }).join('') +
      '<g id="mcPulse"></g>';
    el.mcPulse = document.getElementById('mcPulse');

    wire();
  }

  /* ── Destello de selección (entra y sale, no permanece) ────── */
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var GEO_BY_KEY = {};
  GEO.deps.forEach(function (g) { GEO_BY_KEY[g.key] = g; });

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Ritmo de la cascada norte→sur del mapa (ms entre departamentos).
     La entrada a la vista va al doble de lento: es el momento en que se mira
     el mapa, así que la ola debe poder seguirse. Cambiar de zona es una
     respuesta a un click y tiene que sentirse inmediata. */
  var ENTRY_STAGGER = 115, ZONE_STAGGER = 42;
  var entering = false;
  var ordenLen = 0;          // departamentos encendidos en el último render

  /* Variantes de color por zona (base / seleccionado / atenuado), para pintar
     el mapa nacional con el color propio de cada departamento. */
  var ZONA_VARS = {};
  Object.keys(ZONA_COLOR).forEach(function (z) {
    var c = ZONA_COLOR[z];
    ZONA_VARS[z] = { base: c, dark: mix(c, '#0a0a1e', .24), light: mix(c, '#ffffff', .66) };
  });

  /** Un pulso sobre el contorno del departamento; se autodestruye.
      `soft` (entrada a la vista) lo hace más largo y mucho más tenue. */
  function ping(depKey, delay, soft) {
    if (reduce || !el.mcPulse) return;
    var g = GEO_BY_KEY[depKey];
    if (!g) return;
    var p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', g.d);
    p.setAttribute('class', 'mc-ping' + (soft ? ' soft' : ''));
    /* En vista nacional cada departamento destella con el color de su zona. */
    if (!state.zona) {
      var c = ZONA_COLOR[DEP_ZONA[depKey]];
      if (c) p.style.setProperty('--zc', c);
    }
    if (delay) p.style.animationDelay = delay + 'ms';
    p.addEventListener('animationend', function () {
      if (p.parentNode) p.parentNode.removeChild(p);
    });
    el.mcPulse.appendChild(p);
  }

  /* ── Contadores: el número rueda desde el valor anterior ───── */
  var prevNum = {};

  function tween(node, slot, to, fmt) {
    if (!node) return;
    var from = prevNum[slot];
    prevNum[slot] = to;

    if (reduce || from == null || from === to || !isFinite(from)) {
      node.textContent = fmt(to);
      return;
    }
    var t0 = 0, DUR = 620;
    function step(ts) {
      if (!t0) t0 = ts;
      var k = Math.min((ts - t0) / DUR, 1);
      var e = 1 - Math.pow(1 - k, 3);              // easeOutCubic
      node.textContent = fmt(from + (to - from) * e);
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ── Eventos ──────────────────────────────────────────────── */

  /** Un click del usuario termina la entrada: de ahí en más la cascada es
      rápida, porque ya no es una apertura sino una respuesta. Quita también
      .mc-boot, o el relleno seguiría tardando 1.15 s en cada click. */
  function corteEntrada() {
    if (!entering && !root.classList.contains('mc-boot')) return;
    entering = false;
    clearTimeout(bootT);
    root.classList.remove('mc-boot');
  }

  function wire() {
    el.mcZones.addEventListener('click', function (e) {
      corteEntrada();
      var b = e.target.closest('.mc-zone');
      if (!b) return;
      var z = b.dataset.z || null;    // "" = todas las zonas
      if (state.zona === z && !state.dep) return;
      state.zona = z;
      state.dep = null;               // cambiar de zona limpia el departamento
      render('zona');
    });

    el.mcYears.addEventListener('click', function (e) {
      corteEntrada();
      var b = e.target.closest('.mc-year');
      if (!b) return;
      if (state.anio === Number(b.dataset.y)) return;
      state.anio = Number(b.dataset.y);
      state.dep = null;               // el departamento puede no existir en el otro año
      render('zona');
    });

    /* Mapa: click y hover sobre departamentos de la zona activa */
    el.mcMap.addEventListener('click', function (e) {
      corteEntrada();
      var p = e.target.closest('.mc-dep');
      if (!p || !p.classList.contains('on')) return;
      var k = p.dataset.dep;
      state.dep = (state.dep === k) ? null : k;   // volver a hacer click deselecciona
      render({ dep: k });                          // destella igual al entrar y al salir
    });

    el.mcMap.addEventListener('mousemove', function (e) {
      var p = e.target.closest('.mc-dep');
      if (!p || !p.classList.contains('on')) { hideTip(); return; }
      showTip(p.dataset.dep, e);
    });
    el.mcMap.addEventListener('mouseleave', hideTip);

    /* Participación por zona: también cambia de zona */
    el.mcParts.addEventListener('click', function (e) {
      corteEntrada();
      var r = e.target.closest('.mc-part-row');
      if (!r) return;
      var z = r.dataset.z || null;    // la fila total vuelve al agregado nacional
      if (state.zona === z && !state.dep) return;
      state.zona = z; state.dep = null; render('zona');
    });

    /* Volver a la zona desde el detalle del departamento */
    el.mcDetail.addEventListener('click', function (e) {
      if (e.target.closest('.mc-back')) {
        var prev = state.dep; state.dep = null;
        render(prev ? { dep: prev } : null);       // destello de salida
      }
    });

    /* Chips de departamento */
    el.mcDeps.addEventListener('click', function (e) {
      corteEntrada();
      var c = e.target.closest('.mc-chip');
      if (!c) return;
      var k = c.dataset.dep;
      state.dep = (state.dep === k) ? null : k;
      render({ dep: k });
    });

    /* Reposicionar etiquetas al cambiar de tamaño o al activarse el tab
       (oculto mide 0, así que ResizeObserver cubre ambos casos), y disparar
       el arranque del grid cada vez que la vista pasa de oculta a visible. */
    var visible = false;
    function onResize() {
      layoutLabels();
      var ahora = el.mcMap.clientWidth > 0;
      if (ahora && !visible) boot();
      visible = ahora;
    }
    if (window.ResizeObserver) {
      new ResizeObserver(onResize).observe(el.mcMap);
    } else {
      window.addEventListener('resize', onResize);
      onResize();
    }
  }

  /* ── Tooltip ──────────────────────────────────────────────── */
  function hideTip() { el.mcTip.classList.remove('show'); }

  function showTip(depKey, ev) {
    var q = D.query(state.anio, state.zona || DEP_ZONA[depKey] || null, depKey);
    var geo = GEO.deps.filter(function (g) { return g.key === depKey; })[0];
    el.mcTip.innerHTML =
      '<div class="mc-tip-ttl">' + esc(geo ? geo.label : depKey) + '</div>' +
      row('Venta', D.money(q.total)) +
      row(state.zona ? '% de la zona' : '% nacional',
          D.pct(state.zona ? q.partZona : q.partNacional)) +
      row('Clientes únicos', q.clientes) +
      row('Proyectos únicos', q.proyectos);

    var r = el.mcStage.getBoundingClientRect();
    var tw = el.mcTip.offsetWidth || 160;
    var x = ev.clientX - r.left;
    x = Math.max(tw / 2 + 4, Math.min(x, r.width - tw / 2 - 4));   // dentro del escenario
    el.mcTip.style.left = x + 'px';
    el.mcTip.style.top = Math.max(el.mcTip.offsetHeight + 4, ev.clientY - r.top - 14) + 'px';
    el.mcTip.classList.add('show');

    function row(k, v) {
      return '<div class="mc-tip-r"><span class="mc-tip-k">' + k + '</span>' +
        '<span class="mc-tip-v">' + esc(v) + '</span></div>';
    }
  }

  /* ── Etiquetas del mapa (overlay en px, no en unidades SVG) ── */
  var activeLabels = [];

  function layoutLabels() {
    /* Medidas del <svg> del mapa — nunca del escenario. */
    var W = el.mcMap.clientWidth, H = el.mcMap.clientHeight;
    if (!W || !H || !activeLabels.length) { el.mcOvl.innerHTML = ''; return; }

    /* Transformación de preserveAspectRatio="xMidYMid meet" */
    var s = Math.min(W / vb.w, H / vb.h);
    var ox = (W - vb.w * s) / 2, oy = (H - vb.h * s) / 2;
    var px = function (x) { return ox + (x - vb.x) * s; };
    var py = function (y) { return oy + (y - vb.y) * s; };

    /* Columna de etiquetas: a la izquierda del departamento más occidental */
    var minCx = Math.min.apply(null, activeLabels.map(function (l) { return l.cx; }));
    var colX = Math.max(px(minCx) - 26, 6);

    /* Anti-colisión vertical */
    var GAP = 22;
    var items = activeLabels.map(function (l) { return { l: l, y: py(l.cy) }; })
      .sort(function (a, b) { return a.y - b.y; });
    for (var i = 1; i < items.length; i++) {
      if (items[i].y - items[i - 1].y < GAP) items[i].y = items[i - 1].y + GAP;
    }
    var over = items.length ? items[items.length - 1].y - (H - 6) : 0;
    if (over > 0) items.forEach(function (it) { it.y -= over; });

    /* Cada etiqueta entra con su departamento: misma ola norte→sur. */
    var stagger = entering ? ENTRY_STAGGER : ZONE_STAGGER;
    el.mcOvl.innerHTML = items.map(function (it) {
      var tx = px(it.l.cx), ty = py(it.l.cy);
      var dl = ' style="animation-delay:' + ((it.l.i || 0) * stagger + 120) + 'ms"';
      return '<line class="mc-lbl-line" x1="' + (colX + 4).toFixed(1) + '" y1="' + it.y.toFixed(1) +
             '" x2="' + tx.toFixed(1) + '" y2="' + ty.toFixed(1) + '"' + dl + '></line>' +
             '<text class="mc-lbl" x="' + colX.toFixed(1) + '" y="' + (it.y + 4).toFixed(1) +
             '" text-anchor="end"' + dl + '>' + esc(it.l.label) + '</text>';
    }).join('');
  }

  /* ── Render ───────────────────────────────────────────────── */
  function render(flash) {
    var zc = zonaColor(state.zona);
    root.style.setProperty('--zc', zc);
    root.style.setProperty('--zc-d', mix(zc, '#0a0a1e', .24));
    root.style.setProperty('--zc-l', mix(zc, '#ffffff', .66));
    root.style.setProperty('--zc-sh', rgba(zc, state.zona ? .38 : .3));
    root.classList.toggle('mc-all', !state.zona);

    /* Selectores */
    Array.prototype.forEach.call(el.mcZones.children, function (b) {
      b.classList.toggle('active', (b.dataset.z || null) === state.zona);
    });
    Array.prototype.forEach.call(el.mcYears.children, function (b) {
      b.classList.toggle('active', Number(b.dataset.y) === state.anio);
    });

    var zonasInfo = D.zonas(state.anio);
    var deps = D.departamentos(state.anio, state.zona);   // zona null = los 25
    var depKeys = deps.map(function (d) { return d.key; });

    /* Si el departamento seleccionado no existe este año/zona, se limpia */
    if (state.dep && depKeys.indexOf(state.dep) === -1) state.dep = null;

    var q = D.query(state.anio, zonaEfectiva(), state.dep);

    var orden = renderMap(depKeys);
    renderParts(zonasInfo);
    renderDetail(q, deps);
    renderSectores(q);
    renderDeps(deps, q);
    renderClientes(q);
    renderRefrigerantes(q);
    renderTipos(q);

    /* Destello: breve, y se va solo. En la entrada a la vista la ola recorre
       el país despacio y con menos opacidad — se aprecia, no interrumpe. */
    if (flash === 'zona') {
      var st = entering ? ENTRY_STAGGER : ZONE_STAGGER;
      orden.forEach(function (k, i) { ping(k, i * st, entering); });
    } else if (flash && flash.dep) {
      ping(flash.dep, 0);
    }
  }

  /* Mapa: enciende la zona, atenúa el resto.
     Los departamentos de la zona se encienden en cascada norte→sur;
     los que salen de la zona se apagan de inmediato. */
  function renderMap(depKeys) {
    /* Orden geográfico para la cascada */
    var orden = depKeys.slice().sort(function (a, b) {
      return (GEO_BY_KEY[a] ? GEO_BY_KEY[a].cy : 0) - (GEO_BY_KEY[b] ? GEO_BY_KEY[b].cy : 0);
    });

    var stagger = entering ? ENTRY_STAGGER : ZONE_STAGGER;
    var nacional = !state.zona;
    ordenLen = orden.length;

    Array.prototype.forEach.call(el.mcMap.querySelectorAll('.mc-dep'), function (p) {
      var k = p.dataset.dep;
      var i = orden.indexOf(k);
      var on = i !== -1;
      p.classList.toggle('on', on);
      p.classList.toggle('void', !on);
      p.classList.toggle('sel', on && k === state.dep);
      p.style.transitionDelay = (on && !reduce) ? (i * stagger) + 'ms' : '0ms';

      /* En vista nacional cada departamento lleva el color de SU zona; con una
         zona activa manda el acento global que fija render(). */
      var v = (nacional && on) ? ZONA_VARS[DEP_ZONA[k]] : null;
      if (v) {
        p.style.setProperty('--zc', v.base);
        p.style.setProperty('--zc-d', v.dark);
        p.style.setProperty('--zc-l', v.light);
      } else {
        p.style.removeProperty('--zc');
        p.style.removeProperty('--zc-d');
        p.style.removeProperty('--zc-l');
      }
    });
    el.mcStage.classList.toggle('has-sel', !!state.dep);

    activeLabels = GEO.deps.filter(function (g) { return depKeys.indexOf(g.key) !== -1; })
      .map(function (g) {
        return { cx: g.cx, cy: g.cy, label: g.label, i: Math.max(orden.indexOf(g.key), 0) };
      });
    layoutLabels();

    /* Entrada suave de las etiquetas — sólo tras un cambio de selección,
       para que arrastrar la ventana no las haga parpadear. Cada etiqueta
       aparece con su departamento, así que la ola se lee de norte a sur. */
    if (!reduce) {
      el.mcOvl.classList.remove('in');
      void el.mcOvl.getBoundingClientRect();
      el.mcOvl.classList.add('in');
      clearTimeout(ovlT);
      ovlT = setTimeout(function () { el.mcOvl.classList.remove('in'); },
                        orden.length * stagger + 900);
    }
    return orden;
  }
  var ovlT = null;

  /* Participación por zona (siempre sobre el total nacional del año).
     La fila "Perú" es el totalizador y devuelve la vista al agregado. */
  function renderParts(info) {
    el.mcParts.innerHTML =
      '<div class="mc-eyebrow">Participación por zona</div>' +
      info.lista.map(function (z) {
        return '<div class="mc-part-row' + (z.key === state.zona ? ' active' : '') + '" data-z="' + z.key +
          '" style="--zc:' + ZONA_COLOR[z.key] + '">' +
          '<span class="mc-part-nm">' + esc(z.label) + '</span>' +
          '<span></span>' +
          '<span class="mc-part-pct">' + D.pct(z.part) + '</span>' +
          '<span class="mc-part-val">' + D.money(z.imp) + '</span>' +
        '</div>';
      }).join('') +
      '<div class="mc-part-row mc-part-total' + (state.zona ? '' : ' active') + '" data-z="" ' +
        'style="--zc:' + ALL_COLOR + '">' +
        '<span class="mc-part-nm">' + esc(ALL_LABEL) + '</span>' +
        '<span></span>' +
        '<span class="mc-part-pct">100%</span>' +
        '<span class="mc-part-val">' + D.money(info.total) + ' &middot; total ' + state.anio + '</span>' +
      '</div>';

    var pcts = el.mcParts.querySelectorAll('.mc-part-pct');
    info.lista.forEach(function (z, i) {
      tween(pcts[i], 'part' + z.key, z.part, function (v) { return D.pct(v); });
    });
  }

  /* Card de detalle: cambia de zona a departamento al seleccionar */
  function renderDetail(q, deps) {
    var esDep = !!state.dep;
    var zEf = zonaEfectiva();
    var geo = esDep ? GEO.deps.filter(function (g) { return g.key === state.dep; })[0] : null;
    var titulo = esDep ? (geo ? geo.label : q.depLabel)
               : (state.zona ? 'Zona ' + D.ZONA_LABEL[state.zona] : ALL_LABEL);
    var eyebrow = esDep ? (zEf ? 'Zona ' + D.ZONA_LABEL[zEf] : 'Departamento')
                : (state.zona ? 'Zona comercial' : 'Todas las zonas');

    /* [valor, etiqueta, formateador] — el valor se anima al cambiar */
    var entero = function (v) { return String(Math.round(v)); };
    var micros = esDep
      ? [[q.margen, 'Margen', function (v) { return D.pct(v, 1); }],
         [q.clientes, 'Clientes activos', entero]]
      : state.zona
        ? [[deps.length, deps.length === 1 ? 'Departamento' : 'Departamentos', entero],
           [q.clientes, 'Clientes activos', entero]]
        /* Agregado nacional: el margen ponderado pesa más que el conteo de zonas */
        : [[q.margen, 'Margen', function (v) { return D.pct(v, 1); }],
           [q.clientes, 'Clientes activos', entero]];

    /* Barra apilada de sectores (grupos consolidados) */
    var segs = q.sectores.map(function (g) {
      return '<div class="mc-sbar-seg" style="width:' + (g.part * 100).toFixed(2) + '%;background:' +
        (SECTOR_COLOR[g.key] || '#AAB6C9') + '" title="' + esc(g.label) + ' ' + D.pct(g.part) + '"></div>';
    }).join('');

    /* Sólo los grupos con peso visible — un "0.0%" en la leyenda es ruido. */
    var leg = q.sectores.filter(function (g) { return g.part >= .005; }).slice(0, 3)
      .map(function (g) {
        return '<span class="mc-sleg-i" style="--sc:' + (SECTOR_COLOR[g.key] || '#AAB6C9') + '">' +
          esc(g.label) + ' ' + D.pct(g.part) + '</span>';
      }).join('');

    el.mcDetail.innerHTML =
      '<div class="mc-detail-hd">' +
        '<div class="mc-detail-bar"></div>' +
        '<div class="mc-detail-ttls">' +
          '<div class="mc-detail-eye">' + esc(eyebrow) + '</div>' +
          '<div class="mc-detail-ttl" title="' + esc(titulo) + '">' + esc(titulo) + '</div>' +
        '</div>' +
        (esDep ? '<button class="mc-back" type="button">&#8592; ' +
                 (state.zona ? 'Zona' : esc(ALL_LABEL)) + '</button>' : '') +
      '</div>' +
      '<div class="mc-detail-val">' + D.money(q.total) + '</div>' +
      '<div class="mc-detail-sub">' +
        (esDep || state.zona
          ? D.pct(q.partNacional) + ' de la venta nacional ' + state.anio +
            (esDep ? ' &middot; ' + D.pct(q.partZona) + ' de la zona' : '')
          : 'Venta total ' + state.anio + ' &middot; ' + D.ZONAS.length + ' zonas &middot; ' +
            deps.length + ' departamentos') +
      '</div>' +
      '<div class="mc-micros">' +
        micros.map(function (m) {
          return '<div class="mc-micro"><div class="mc-micro-v">' + esc(m[2](m[0])) + '</div>' +
            '<div class="mc-micro-l">' + esc(m[1]) + '</div></div>';
        }).join('') +
      '</div>' +
      '<div class="mc-sbar">' + segs + '</div>' +
      '<div class="mc-sleg">' + leg + '</div>';

    /* Los números ruedan desde el valor anterior — el "slot" incluye el
       tipo de vista para no interpolar entre magnitudes distintas. */
    tween(el.mcDetail.querySelector('.mc-detail-val'), 'total', q.total, D.money);
    var vs = el.mcDetail.querySelectorAll('.mc-micro-v');
    var ambito = esDep ? 'D' : (state.zona ? 'Z' : 'N');
    micros.forEach(function (m, i) {
      tween(vs[i], 'micro' + i + ambito, m[0], m[2]);
    });
  }

  /* Sectores consolidados, con subgrupos de Agroexportación */
  function renderSectores(q) {
    el.mcSecHd.textContent = 'Sectores · ' + ctxLabel();

    if (!q.sectores.length) { el.mcSec.innerHTML = vacio(); return; }

    el.mcSec.innerHTML = q.sectores.map(function (g) {
      var html = fila(g.label, g.part, g.imp, SECTOR_COLOR[g.key], false);
      /* Los subgrupos sólo aportan cuando hay más de uno con venta */
      if (g.subs.length >= 2) {
        html += g.subs.map(function (s) {
          return fila(s.label, s.part, s.imp, SECTOR_COLOR[s.key], true);
        }).join('');
      }
      return html;
    }).join('');

    function fila(label, part, imp, color, sub) {
      return '<div class="mc-sec-row' + (sub ? ' sub' : '') + '" style="--sc:' + (color || '#AAB6C9') + '">' +
        '<span class="mc-sec-nm" title="' + esc(label) + '">' + esc(label) + '</span>' +
        '<span class="mc-sec-pct">' + D.pct(part) + '</span>' +
        '<span class="mc-sec-val">' + D.money(imp) + '</span>' +
      '</div>';
    }
  }

  /* Chips de departamento — el activo lleva la × para quitar el filtro */
  function renderDeps(deps, q) {
    el.mcDepHd.textContent = 'Departamentos · ' +
      (state.zona ? 'Zona ' + D.ZONA_LABEL[state.zona] : ALL_LABEL);

    el.mcDeps.className = deps.length ? 'mc-chips' : '';
    if (!deps.length) { el.mcDeps.innerHTML = vacio(); return; }

    el.mcDeps.innerHTML = deps.map(function (d) {
      var act = d.key === state.dep;
      var zc = state.zona ? null : ZONA_COLOR[DEP_ZONA[d.key]];
      return '<button class="mc-chip' + (act ? ' active' : '') + '" type="button" data-dep="' + esc(d.key) + '" ' +
        (zc ? 'style="--zc:' + zc + ';--zc-sh:' + rgba(zc, .38) + '" ' : '') +
        'title="' + esc(d.label) + ' &middot; ' + D.pct(d.part) +
        (state.zona ? ' de la zona' : ' del total nacional') + '">' +
        '<span class="mc-chip-nm">' + esc(d.label) + '</span>' +
        '<span class="mc-chip-v">' + D.money(d.imp) + '</span>' +
        (act ? '<span class="mc-chip-x">&times;</span>' : '') +
      '</button>';
    }).join('');
  }

  /* Top 5 clientes de la selección activa */
  function renderClientes(q) {
    el.mcCliHd.textContent = 'Top clientes · ' + ctxLabel() + ' · ' + state.anio;

    if (!q.clientesTop.length) { el.mcCli.innerHTML = vacio(); return; }

    el.mcCli.innerHTML =
      '<table class="mc-cli"><thead><tr>' +
        '<th>Cliente</th>' + (state.dep ? '' : '<th>Depto.</th>') +
        '<th class="r">Venta</th><th class="r">Part.</th><th class="r">Margen</th>' +
      '</tr></thead><tbody>' +
      q.clientesTop.map(function (c) {
        return '<tr>' +
          '<td class="c-nm" title="' + esc(c.label) + '">' + esc(c.label) + '</td>' +
          (state.dep ? '' : '<td class="c-dep">' + esc(c.dep) + '</td>') +
          '<td class="r c-val">' + D.money(c.imp) + '</td>' +
          '<td class="r">' + D.pct(c.part) + '</td>' +
          '<td class="r c-mg" style="color:' + margenColor(c.margen) + '">' + D.pct(c.margen, 1) + '</td>' +
        '</tr>';
      }).join('') +
      '</tbody></table>';
  }

  /* Refrigerante — ranking por importe, orden DESC. Sólo lo que trae la
     hoja; no se inventan categorías. */
  function renderRefrigerantes(q) {
    el.mcRefHd.textContent = 'Refrigerante · ' + ctxLabel();

    if (!q.refrigerantes.length) { el.mcRef.innerHTML = vacio(); return; }

    var max = q.refrigerantes[0].imp || 1;
    el.mcRef.innerHTML = q.refrigerantes.map(function (r) {
      return '<div class="mc-rank">' +
        '<span class="mc-rank-nm" title="' + esc(r.label) + '">' + esc(r.label) + '</span>' +
        '<span class="mc-rank-bar"><i style="width:' + (r.imp / max * 100).toFixed(1) + '%"></i></span>' +
        '<span class="mc-rank-v">' + D.money(r.imp) + '</span>' +
        '<span class="mc-rank-p">' + D.pct(r.part) + '</span>' +
      '</div>';
    }).join('');
  }

  /* Tipo de proyecto — importe, participación y proyectos únicos
     (CODIGO PROYECTO distintos). */
  function renderTipos(q) {
    el.mcTipoHd.textContent = 'Tipo de proyecto · ' + ctxLabel();

    if (!q.tipos.length) { el.mcTipo.innerHTML = vacio(); return; }

    var max = q.tipos[0].imp || 1;
    el.mcTipo.innerHTML = q.tipos.map(function (t) {
      return '<div class="mc-rank">' +
        '<span class="mc-rank-nm" title="' + esc(t.label) + ' (' + esc(t.key) + ')">' + esc(t.label) + '</span>' +
        '<span class="mc-rank-bar"><i style="width:' + (t.imp / max * 100).toFixed(1) + '%"></i></span>' +
        '<span class="mc-rank-v">' + D.money(t.imp) + '</span>' +
        '<span class="mc-rank-p">' + D.pct(t.part) + '</span>' +
        '<span class="mc-rank-n">' + t.proyectos + (t.proyectos === 1 ? ' pry' : ' prys') + '</span>' +
      '</div>';
    }).join('');
  }

  function ctxLabel() {
    if (!state.dep) return state.zona ? 'Zona ' + D.ZONA_LABEL[state.zona] : ALL_LABEL;
    var geo = GEO.deps.filter(function (g) { return g.key === state.dep; })[0];
    return geo ? geo.label : state.dep;
  }

  function vacio() { return '<div class="mc-empty">Sin ventas registradas en esta selección.</div>'; }

  /* ── Arranque del grid inferior (sólo al entrar a la vista) ── */
  var bootT = null;

  /** Apaga el mapa sin transición y lo vuelve a encender con la cascada lenta.
      Sin esto el mapa ya estaría pintado al mostrarse el tab y la animación
      sólo se vería al cambiar de zona. */
  function replayMap() {
    el.mcMap.classList.add('mc-off');
    Array.prototype.forEach.call(el.mcMap.querySelectorAll('.mc-dep'), function (p) {
      p.classList.remove('on', 'sel');
      p.classList.add('void');
      p.style.transitionDelay = '0ms';
    });
    el.mcOvl.innerHTML = '';
    void el.mcMap.getBoundingClientRect();      // fija el estado apagado
    el.mcMap.classList.remove('mc-off');
    render('zona');                              // reenciende norte→sur
  }

  function boot() {
    if (reduce) return;
    clearTimeout(bootT);
    root.classList.remove('mc-boot');
    /* reflow para poder reiniciar las animaciones */
    void root.offsetWidth;
    root.classList.add('mc-boot');
    entering = true;
    replayMap();
    /* Se quita al terminar para que los re-renders por filtro no reanimen */
    var dur = Math.max(ordenLen, 1) * ENTRY_STAGGER + 1700;
    bootT = setTimeout(function () {
      root.classList.remove('mc-boot');
      entering = false;
    }, dur);
  }

  /* ── Arranque ─────────────────────────────────────────────── */
  build();
  render();

})();
