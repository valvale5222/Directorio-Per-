/* ============================================================
   ORGANIGRAMA — DATA, TABS, EXPAND, MODAL
   ============================================================ */
var DATA_ORG = {
  misael:{name:'José Misael Estrada Jiménez', incomingDate : '01/11/2012', role:'Gerente Comercial',area:'GERENCIA',color:'#0a0a1e',av:'ME',sede:'Miraflores',photo:'img/team/misael.jpg',roles:['Liderar la estrategia comercial de la empresa.','Articular la dirección y objetivos del área comercial.','Definir metas de ventas y rentabilidad.','Supervisar el desempeño de los equipos comerciales.','Aprobar estrategias de captación y fidelización de clientes.','Analizar indicadores de gestión y resultados comerciales.']},
  valeria:{name:'Valeria del Carmen Rodríguez Allca', incomingDate: '13/04/2026', role:'Planner Comercial',area:'PLANEAMIENTO COMERCIAL',color:'#0F6E56',av:'VR',sede:'Miraflores',photo:'img/team/Valeria Rodriguez..jpeg',imgPos:'center 25%',roles:['Asistir al Gerente Comercial en la gestión del área.','Monitorear el flujo de oportunidades comerciales.','Elaborar reportes de seguimiento y desempeño.','Coordinar actividades entre áreas involucradas en los proyectos.','Dar seguimiento a los objetivos y planes comerciales.']},
  chavez:{name:'Jesús Marcio Chávez Girao', incomingDate: '24/06/2021', role:'Jefe de Arquitectura',area:'ARQUITECTURA',color:'#1a86cc',av:'JC',sede:'Miraflores',photo:'img/team/chavez.jpg',roles:['Conducir el diseño técnico-arquitectónico de las propuestas.','Supervisar el desarrollo de proyectos arquitectónicos.','Validar la calidad técnica de los entregables.','Coordinar con clientes y áreas internas los requerimientos.','Promover mejoras metodológicas en el diseño de proyectos.','Supervisar la elaboración de presupuestos.']},
  victor:{name:'Víctor Ramírez Dilas', incomingDate: '03/08/2026', role:'Ejecutivo Comercial',area:'COMERCIAL',color:'#3EC6AC',av:'VR',sede:'Piura',zona:'Norte',photo:'img/team/victor.jpg',roles:['Gestionar la cobertura comercial de la zona asignada.','Brindar atención y seguimiento a clientes.','Identificar nuevas oportunidades de negocio.','Cumplir metas de ventas establecidas.','Mantener actualizada la información de clientes.','Coordinar el cierre y seguimiento de contratos.']},
  hugo:{name:'Hugo Alexander Escobar Pacheco', incomingDate: '01/10/2024', role:'Ejecutivo Comercial',area:'COMERCIAL',color:'#3EC6AC',av:'HE',sede:'Miraflores',zona:'Centro',photo:'img/team/hugo.jpg',roles:['Gestionar la cobertura comercial de la zona asignada.','Brindar atención y seguimiento a clientes.','Identificar nuevas oportunidades de negocio.','Cumplir metas de ventas establecidas.','Mantener actualizada la información de clientes.','Coordinar el cierre y seguimiento de contratos.']},
  jhon:{name:'Jhon Jacinto Rojas Quispe', incomingDate: '01/03/2017',role:'Ejecutivo Comercial',area:'COMERCIAL',color:'#3EC6AC',av:'JR',sede:'Ica',zona:'Sur',photo:'img/team/jhon.jpg',roles:['Gestionar la cobertura comercial de la zona asignada.','Brindar atención y seguimiento a clientes.','Identificar nuevas oportunidades de negocio.','Cumplir metas de ventas establecidas.','Mantener actualizada la información de clientes.','Coordinar el cierre y seguimiento de contratos.']},
  piero:{name:'Piero Giuseppe Añanca Portillo', incomingDate: '18/07/2023',role:'Arquitecto de Proyectos',area:'ARQUITECTURA',color:'#1a86cc',av:'PA',sede:'Miraflores',photo:'img/team/piero.jpg',roles:['Desarrollar planos y propuestas técnicas.','Elaborar documentación arquitectónica.','Realizar levantamientos y análisis de información.','Verificar el cumplimiento de estándares de diseño.','Participar en reuniones técnicas con clientes.','Estructurar y consolidar presupuestos (ratios).']},
  diego:{name:'Diego Sebastián Morales Alarcón', incomingDate: '09/03/2026',role:'Arquitecto de Proyectos',area:'ARQUITECTURA',color:'#1a86cc',av:'DM',sede:'Miraflores',photo:'img/team/diego.jpg',roles:['Desarrollar planos y propuestas técnicas.','Elaborar documentación arquitectónica.','Realizar levantamientos y análisis de información.','Verificar el cumplimiento de estándares de diseño.','Participar en reuniones técnicas con clientes.','Estructurar y consolidar presupuestos (ratios).']},
  tiffany:{name:'Tiffany Nicole Ollero de la Cruz',incomingDate: '01/09/2025',role:'Arquitecta de Proyectos',area:'ARQUITECTURA',color:'#1a86cc',av:'TO',sede:'Miraflores',photo:'img/team/tiffany.jpg',roles:['Desarrollar planos y propuestas técnicas.','Elaborar documentación arquitectónica.','Realizar levantamientos y análisis de información.','Verificar el cumplimiento de estándares de diseño.','Participar en reuniones técnicas con clientes.','Estructurar y consolidar presupuestos (ratios).']},
  lizeth:{name:'Lizeth Arevalo Mateo', incomingDate: '12/08', role:'Auxiliar de Arquitectura',area:'ARQUITECTURA',color:'#1a86cc',av:'LA',sede:'Miraflores',photo:'img/team/Lizeth Arevalo.jpeg',imgZoom:1.2,roles:['Apoyar en el desarrollo de planos y propuestas técnicas.','Colaborar en la elaboración de documentación arquitectónica.','Realizar levantamientos y recopilación de información en campo.','Brindar soporte en la verificación de estándares de diseño.','Participar en reuniones técnicas de seguimiento de proyectos.']}
};

function switchOrgTab(btn, panelId) {
  document.querySelectorAll('.org-tab').forEach(function(t){t.classList.remove('active');});
  document.querySelectorAll('.org-panel').forEach(function(p){p.classList.remove('active');});
  btn.classList.add('active');
  var panel = document.getElementById('ot-' + panelId);
  if (panel) panel.classList.add('active');
}

function orgToggle2(groupId, btnId, n) {
  var group = document.getElementById(groupId);
  var btn = document.getElementById(btnId);
  if (!group) return;
  var isOpen = group.style.display !== 'none';
  var li = btn ? btn.closest('.org-li') : null;
  if (!isOpen) {
    group.style.display = 'flex';
    /* rAF 1: browser ha terminado layout → leer scrollWidth real del l4-wrap
       (org-l4-wrap como flex-item de org-li column/center toma su max-content = 590px)
       y asignarlo al org-li padre para contenerlo sin clipping */
    requestAnimationFrame(function() {
      if (li) li.style.width = group.scrollWidth + 'px';
      /* rAF 2: con el nuevo ancho aplicado, el org-l3-inner (min-width:max-content)
         ya creció; hacer scroll suave para que la columna expandida quede visible */
      requestAnimationFrame(function() {
        if (li) li.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'nearest'});
      });
    });
  } else {
    if (li) li.style.width = '';
    group.style.display = 'none';
  }
  if (btn) {
    btn.classList.toggle('open', !isOpen);
    btn.innerHTML = isOpen ? '<span>▾</span> Ver equipo (' + n + ')' : '<span>▴</span> Ocultar equipo';
  }
}

function openPersonModal(key) {
  var p = DATA_ORG[key];
  if (!p) return;
  var funcList = p.roles.map(function(r){return '<li>'+r+'</li>';}).join('');
  var sedeText = p.zona ? 'Zona '+p.zona+' &nbsp;·&nbsp; '+p.sede : p.sede;
  var html = '<div class="org-modal-hdr">'
    + '<div class="org-modal-hdr-photo" style="box-shadow:0 0 0 2.5px '+p.color+',0 4px 16px rgba(0,0,0,.14)">'
    + '<img src="'+p.photo+'" style="width:100%;height:100%;object-fit:cover;object-position:'+(p.imgPos||'top')+(p.imgZoom?';transform:scale('+p.imgZoom+');transform-origin:center 20%':'')+'" onerror="this.outerHTML=\'<div style=&quot;width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#fff;background:'+p.color+'&quot;>'+p.av+'</div>\'">'
    + '</div>'
    + '<div class="org-modal-hdr-info">'
    + '<div class="org-modal-tag" style="color:'+p.color+'">'+p.role+'</div>'
    + '<div class="org-modal-name">'+p.name+'</div>'
    + '</div>'
    + '<button class="org-modal-close" onclick="closeOrgModal()">✕</button>'
    + '</div>'
    + '<div class="org-modal-body">'
    + '<table class="org-modal-info-tbl">'
    + '<tr><td class="org-mi-lbl">Puesto</td><td class="org-mi-val" style="color:'+p.color+';font-weight:700">'+p.role+'</td></tr>'
    + '<tr><td class="org-mi-lbl">F. Ingreso</td><td class="org-mi-val">🗓️ '+p.incomingDate+'</td></tr>'
    + '<tr><td class="org-mi-lbl">Sede</td><td class="org-mi-val">📍 '+sedeText+'</td></tr>'
    + '</table>'
    + '<div class="org-modal-sec-title" style="color:'+p.color+';margin-top:14px">Funciones</div>'
    + '<ul class="org-modal-func-list">'+funcList+'</ul>'
    + perfBlockHTML(key)
    + '</div>';
  document.getElementById('orgModalContent').innerHTML = html;
  document.getElementById('orgModalOverlay').classList.add('open');
  /* El innerHTML anterior ya elimina el canvas previo; perfInit destruye
     la instancia de Chart.js antes de crear la nueva, de modo que la
     animación se reproduce íntegra cada vez que se abre un perfil. */
  perfInit(key);
}

function closeOrgModal() {
  document.getElementById('orgModalOverlay').classList.remove('open');
  if (_orgRadar) { _orgRadar.destroy(); _orgRadar = null; }
}



/* ============================================================
   DESEMPENO — RADAR DE COMPETENCIAS (perfil individual)
   ------------------------------------------------------------
   Fuente unica: Ficha_Jugador_Friopacking.xlsx (hoja "Evaluacion").
   Cada dimension = promedio de sus 3 criterios (cols R:V).
   Puntaje final  = promedio simple de las 5 dimensiones (col W).
   Indicador /100 = Puntaje final / 5 * 100.

   Para cargar a una persona basta con pegar aqui sus 5 dimensiones
   y el puntaje final tal como los calcula el Excel; con `null` la
   ficha se muestra automaticamente en estado "Evaluacion pendiente".
   ============================================================ */

/* Dimensiones del Excel, en el orden de las columnas R:V */
var PERF_DIMS = [
  {ic:'\u{1F9E0}', nm:'Dominio de su función',              lbl:['Dominio de','su función']},
  {ic:'\u{1F50D}', nm:'Análisis y resolución',              lbl:['Análisis y','resolución']},
  {ic:'⚙️', nm:'Ejecución y organización',           lbl:['Ejecución y','organización']},
  {ic:'\u{1F4AC}', nm:'Comunicación y trabajo en equipo', lbl:['Comunicación','y equipo']},
  {ic:'\u{1F680}', nm:'Iniciativa y desarrollo',            lbl:['Iniciativa y','desarrollo']}
];

/* d = [R,S,T,U,V] · f = W (puntaje final).
   null  = evaluacion pendiente (se muestra el bloque en estado vacio).
   false = no aplica ficha de evaluacion (el bloque no se renderiza). */
var DATA_PERF = {
  misael : false,   /* Gerente Comercial — sin ficha de evaluacion */
  valeria: {d:[11/3, 4, 13/3, 13/3, 13/3], f:4.133333333333333},
  chavez : {d:[13/3, 4, 13/3, 14/3, 13/3], f:4.333333333333333},
  victor : {d:[10/3, 4, 8/3, 8/3, 11/3],   f:3.2666666666666666},
  hugo   : {d:[10/3, 10/3, 3, 8/3, 11/3],  f:3.2},
  jhon   : {d:[11/3, 4, 3, 10/3, 11/3],    f:3.5333333333333337},
  piero  : {d:[13/3, 3, 10/3, 10/3, 10/3],    f:3.4666666666666663},
  diego  : {d:[13/3, 11/3, 11/3, 11/3, 4],    f:3.8666666666666663},
  tiffany: {d:[13/3, 10/3, 3, 10/3, 11/3],    f:3.5333333333333337},
  lizeth : {d:[11/3, 8/3, 11/3, 3, 10/3],     f:3.2666666666666666}
};

/* Misma formula que la columna "Nivel final" del Excel */
function perfNivel(w) {
  if (w === '' || w === null || w === undefined || isNaN(w)) return '';
  if (w < 1.5) return 'Requiere desarrollar';
  if (w < 2.5) return 'En desarrollo';
  if (w < 3.5) return 'Nivel esperado';
  if (w < 4.5) return 'Nivel destacado';
  return 'Fortaleza consolidada';
}

/* Una evaluacion es valida solo si estan las 5 dimensiones y el puntaje final */
function perfValido(ev) {
  if (!ev || !ev.d || ev.d.length !== 5) return false;
  if (typeof ev.f !== 'number' || isNaN(ev.f)) return false;
  return ev.d.every(function(v){ return typeof v === 'number' && !isNaN(v); });
}

var _orgRadar = null;

/* Etiqueta numerica junto a cada vertice. La opacidad sigue al radio
   animado del punto, asi aparece progresivamente junto con el. */
var orgPerfValueLabels = {
  id: 'orgPerfValueLabels',
  afterDatasetsDraw: function(chart) {
    var meta = chart.getDatasetMeta(0), sc = chart.scales.r, ctx = chart.ctx;
    if (!meta || !sc || !chart.$perfValues) return;
    var cx = sc.xCenter, cy = sc.yCenter, target = chart.$perfPointR || 4.5;
    ctx.save();
    ctx.font = '800 10.5px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    meta.data.forEach(function(pt, i) {
      var a = Math.max(0, Math.min(1, (pt.options.radius || 0) / target));
      if (a < 0.02) return;
      var dx = pt.x - cx, dy = pt.y - cy, d = Math.sqrt(dx*dx + dy*dy);
      if (d < 1) return;
      ctx.globalAlpha = a;
      ctx.fillStyle = '#6b3f05';
      ctx.fillText(chart.$perfValues[i].toFixed(1), pt.x + dx/d*14, pt.y + dy/d*14);
    });
    ctx.restore();
  }
};

/* Pentagono de fondo para el estado pendiente (mismo grid que el radar) */
function perfEmptyGrid() {
  var pts = [], rings = '', spokes = '';
  for (var i = 0; i < 5; i++) {
    var a = (-90 + i*72) * Math.PI/180;
    pts.push([100 + Math.cos(a)*76, 100 + Math.sin(a)*76]);
  }
  var poly = pts.map(function(p){ return p[0].toFixed(1)+','+p[1].toFixed(1); }).join(' ');
  [1, 0.75, 0.5, 0.25].forEach(function(s){
    rings += '<polygon points="'+poly+'" transform="translate(100 100) scale('+s+') translate(-100 -100)"/>';
  });
  pts.forEach(function(p){ spokes += '<line x1="100" y1="100" x2="'+p[0].toFixed(1)+'" y2="'+p[1].toFixed(1)+'"/>'; });
  return '<svg viewBox="0 0 200 200" fill="none" stroke="rgba(148,163,184,.34)" stroke-width="1" '
       + 'stroke-linejoin="round" aria-hidden="true">' + rings + spokes + '</svg>';
}

/* HTML del bloque (se inyecta dentro del modal de persona) */
function perfBlockHTML(key) {
  var ev = DATA_PERF[key];
  if (ev === false) return '';   /* sin ficha: el perfil no lleva bloque de desempeno */
  var ok = perfValido(ev);
  var head = '<div class="org-perf-top">'
    + '<div class="org-perf-tt">'
    +   '<div class="org-perf-h1">Desempeño</div>'
    +   '<div class="org-perf-h2"><span class="org-perf-em">\u{1F3C6}</span>'
    +   'Evaluación de competencias · 2026</div>'
    +   '<span class="org-perf-max">máx. 100</span>'
    + '</div>'
    + (ok
        ? '<div class="org-perf-score"><b id="orgPerfScore">0.0</b><i>/100</i>'
          + '<span class="org-perf-lvl">' + perfNivel(ev.f) + '</span></div>'
        : '')
    + '</div>';

  if (!ok) {
    return '<div class="org-perf">' + head
      + '<div class="org-perf-empty">' + perfEmptyGrid()
      + '<div class="org-perf-empty-in">'
      +   '<div class="org-perf-empty-dot">\u{1F553}</div>'
      +   '<div class="org-perf-empty-t">Evaluación pendiente</div>'
      +   '<div class="org-perf-empty-s">Los resultados se mostrarán cuando se complete la evaluación.</div>'
      + '</div></div></div>';
  }

  var rows = PERF_DIMS.map(function(dim, i) {
    var v = ev.d[i], full = Math.floor(v), frac = v - full, dots = '';
    for (var j = 0; j < 5; j++) {
      if (j < full) dots += '<span class="on"></span>';
      else if (j === full && frac > 0.05) dots += '<span class="on" style="opacity:' + frac.toFixed(2) + '"></span>';
      else dots += '<span></span>';
    }
    return '<div class="org-crit-row" style="animation-delay:' + (0.30 + i*0.055).toFixed(3) + 's">'
      + '<span class="org-crit-ic">' + dim.ic + '</span>'
      + '<span class="org-crit-nm">' + dim.nm + '</span>'
      + '<span class="org-crit-dots">' + dots + '</span>'
      + '<span class="org-crit-val">' + v.toFixed(1) + '</span>'
      + '<span class="org-crit-w">20%</span>'
      + '</div>';
  }).join('');

  return '<div class="org-perf">' + head
    + '<div class="org-perf-radar"><canvas id="orgPerfRadar"></canvas></div>'
    + '<div class="org-perf-crit"><div class="org-perf-crit-h">Criterios de evaluación</div>'
    + rows + '</div></div>';
}

/* Monta radar + count-up una vez el HTML ya esta en el DOM */
function perfInit(key) {
  if (_orgRadar) { _orgRadar.destroy(); _orgRadar = null; }
  var ev = DATA_PERF[key];
  if (!perfValido(ev)) return;

  /* Count-up del score /100 */
  var el = document.getElementById('orgPerfScore');
  if (el) {
    var end = ev.f / 5 * 100, t0 = null;
    requestAnimationFrame(function tick(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / 700);
      el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(1);
      if (p < 1) requestAnimationFrame(tick);
    });
  }

  var cv = document.getElementById('orgPerfRadar');
  if (!cv || typeof Chart === 'undefined') return;

  var R = 4.5;
  _orgRadar = new Chart(cv.getContext('2d'), {
    type: 'radar',
    data: {
      labels: PERF_DIMS.map(function(d){ return d.lbl; }),
      datasets: [{
        label: 'Nota',
        data: [0,0,0,0,0],
        borderColor: '#f59e0b',
        borderWidth: 2,
        backgroundColor: 'rgba(245,158,11,.17)',
        fill: true,
        tension: 0,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#b45309',
        pointBorderWidth: 2,
        pointRadius: R,
        pointHoverRadius: 6.5,
        pointHoverBorderWidth: 2.5,
        pointHoverBackgroundColor: '#f59e0b',
        pointHitRadius: 14
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {padding: {top: 4, bottom: 2, left: 6, right: 6}},
      animation: {duration: 820, easing: 'easeOutQuart'},
      animations: {
        radius: {
          duration: 380, easing: 'easeOutQuart', from: 0,
          delay: function(c){ return c.type === 'data' ? 240 + c.dataIndex*55 : 0; }
        }
      },
      plugins: {
        legend: {display: false},
        tooltip: {
          backgroundColor: 'rgba(10,10,30,.92)',
          padding: 9, cornerRadius: 8, displayColors: false,
          titleFont: {size: 11, weight: '700'},
          bodyFont: {size: 11.5, weight: '800'},
          callbacks: {
            title: function(it){ return PERF_DIMS[it[0].dataIndex].nm; },
            label: function(it){ return it.parsed.r.toFixed(1) + ' / 5'; }
          }
        }
      },
      scales: {
        r: {
          min: 0, max: 5, beginAtZero: true,
          ticks: {
            stepSize: 1, showLabelBackdrop: false,
            color: '#b8c4d8', font: {size: 8.5, weight: '600'},
            callback: function(v){ return v === 0 ? '' : v; }
          },
          grid: {circular: false, color: 'rgba(148,163,184,.26)', lineWidth: 1},
          angleLines: {color: 'rgba(148,163,184,.22)'},
          pointLabels: {
            color: '#64748b', padding: 7,
            font: {size: 9.5, weight: '700', family: 'Inter, system-ui, sans-serif'}
          }
        }
      }
    },
    plugins: [orgPerfValueLabels]
  });

  _orgRadar.$perfValues = ev.d;
  _orgRadar.$perfPointR = R;

  /* El poligono nace en el centro (data 0) y crece hasta el valor real */
  requestAnimationFrame(function(){
    if (!_orgRadar) return;
    _orgRadar.data.datasets[0].data = ev.d.slice();
    _orgRadar.update();
  });
}
