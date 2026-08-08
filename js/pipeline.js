/* ============================================================
   PIPELINE COMERCIAL — DATOS REALES (Excel "PIPELINE 2026-2027.xlsx", hoja PIPELINE)
   Fila = [Cliente, Importe (col VENTA), Probabilidad de cierre (0–1, desde "% PROBABILIDAD DE ÉXITO"),
           Mes de cierre (1–12, desde "MES ESTIMADO DE CIERRE"), Proyecto/Descripción (col REQUERIMIENTO),
           Estado (col STATUS), Año (col AÑO, 2026 o 2027 — dato real de la hoja, no inferido)]
   Nombres/descripciones normalizados a Title Case desde el valor exacto del Excel (sin inventar contenido).
   Actualizado Ago 2026: 94 oportunidades (reemplazo completo desde "PIPELINE 2026-2027.xlsx").
   ============================================================ */
const PIPE_ROWS = [
  ['Vitafoods',6304645.35,0.6,2,'Planta de Congelado Multiproposito','En análisis del cliente',2027],
  ['Frutos Tropicales',5986141.91,0.05,4,'Planta de Congelado de Mango','Postpuesto',2027],
  ['Medlog Ica',5800000,0.2,1,'Planta Empacadora de Uva y Arandanos','En análisis del cliente',2027],
  ['Maestranza',5139992,0.05,1,'Equipos de Refrigeracion','Postpuesto',2027],
  ['Danper',5000000,0.2,1,'Ampliación Olmos','Prospecto',2027],
  ['Avocado Packing Company (Mission Produce)',4589259,0.2,5,'Layout Base Planta Congelado APC Chao','En análisis del cliente',2027],
  ['Gloria',4000000,0.05,4,'Planta de Congelado Multiproposito','Postpuesto',2027],
  ['Medlog Cayalti',3580000,0.2,1,'Planta Empacadora de Arandanos','Prospecto',2027],
  ['Yamboli',3500000,0.2,10,'Camaras de Congelado de Helado (Sistema de Frio) : C02 y Freon','En proceso de cotización',2026],
  ['Rapel',3211211,0.4,1,'10/14 Tuneles de Planta de Uva - Piura','En análisis del cliente',2027],
  ['Hijuelas',3000000,0.6,10,'Laboratorio de Crecimiento de Arandanos','En análisis del cliente',2026],
  ['San Fernando',2934737.67,0,8,'Implementación del Sistema de Refrigeracion - PPPC Huaral','Perdido',2026],
  ['Broom Frio',2850000,0.4,2,'3 Camaras y Pasillo de Despacho','En proceso de cotización',2027],
  ['Atgro (Ecosac)',2500000,0.4,1,'Planta de Procesamiento de Arandanos','En análisis del cliente',2027],
  ['Hass Peru',2000000,0.05,2,'Planta Olmos','Prospecto',2027],
  ['Ransa',1950000,0.05,2,'Planta de Congelado - Callao Ó Paita','Prospecto',2027],
  ['Delice',1572931.74,0.8,9,'Planta Procesadora de Lacteos y Derivados (Sistema de Frio)','Negociación',2026],
  ['Agroextiende',1545500,0,6,'Planta Empacadora de Arandanos','Perdido',2026],
  ['Frozen Processed Fruits SAC',1500000,0.05,5,'Camara de Congelados','Postpuesto',2027],
  ['Vanguard - Ica',1500000,0.8,1,'Ampliación de Sala de Procesos 3 y 4: 02 Túneles Californianos y 1 de Cámara Terminado','En análisis del cliente',2027],
  ['Savia Corp',1493776.65,0.6,11,'Planta Empacadora de Fruta Multiproposito','En análisis del cliente',2026],
  ['Proagro Nazca',1325752.5,0.05,1,'Planta Empacadora de Arandanos','Postpuesto',2027],
  ['Sur Export',1258000,0,6,'Acopio de Arandanos','Perdido',2026],
  ['Ngr - Nutra',1100000,0.4,9,'Implementación de Cámaras de Frio para Planta de Producción Proyecto Chronos (Freon)','Prospecto',2026],
  ['Quelen',1024378.89,0.4,2,'Planta Empacadora de Arandanos - 2da Etapa','En análisis del cliente',2027],
  ['Axion Log',1004484,0.05,2,'CD Trujillo','Prospecto',2027],
  ['La Grama',1000000,0.2,10,'Cámara y Tunel de Congelado (CO2)','En proceso de cotización',2026],
  ['Perupez',1000000,0.6,11,'Ampliación de Planta Pesquera','En análisis del cliente',2026],
  ['Reiter',1000000,0.4,2,'Ampliación Planta','Prospecto',2027],
  ['Fruglobe',1000000,0.05,6,'Planta de Palta','Prospecto',2027],
  ['Prolan',957966,0.6,9,'Ampliacion de la Planta San Fernando - Chincha','En análisis del cliente',2026],
  ['Inka Select Fruit - Ica',877000,0.05,4,'Suministro de Sistema de Frio','Postpuesto',2027],
  ['Pura Fruits',850000,0,4,'Ampliación de Planta de Arandanos','Perdido',2026],
  ['Prosembra (Vanguard) - Pisco',850000,0.6,10,'Ampliacion de Camara de Arandanos','Prospecto',2026],
  ['Pesquera Altair-oceano',840000,0.2,9,'Camara de Congelado y Anden de Congelado','En proceso de cotización',2026],
  ['Emergent Cold',824838,0.6,1,'Túnel Congelado','En análisis del cliente',2027],
  ['Atgro (Ecosac)',817400,0.2,9,'Ingeneria','En análisis del cliente',2026],
  ['Pampa Baja - Arequipa',800000,0.6,1,'Ampliacion de Planta de Arandanos','Prospecto',2027],
  ['Sociedad Agricola Drokasa S.A.',780000,0.4,10,'Planta Antigua de Esparragos - Mejoras','En análisis del cliente',2026],
  ['San Efisio Sac',772012.6,0.6,1,'Acopio de Arandanos','En análisis del cliente',2027],
  ['Sunshine Export S.A.C',760000,0.05,6,'Nueva Cámara de Congelado','Prospecto',2027],
  ['Agrolatina - Nazca',750000,0.4,3,'Climatizacion de Sala de Procesos - Camara de Materia Prima','Prospecto',2027],
  ['Camposol',700000,0,3,'Acopio Nuevo','Perdido',2026],
  ['Agricola Chapi',680000,0.4,1,'Ampliacion de Tunel de Materia Prima y Producto Terminado. Camara de Producto Terminado y Sala de Despacho. (Multifruta)','Prospecto',2027],
  ['Aib Motupe',657241.41,0.8,8,'Planta de Congelado de Fruta Multiproposito (Motupe)','Negociación',2026],
  ['Productos Naturales de Exportacion S.A. - Pronex S.A.',620035.84,0.2,11,'Cámara + Esclusa (Recepción/despacho)','En proceso de cotización',2026],
  ['Frutos de Oro',616364.4,0.6,8,'02 Tuneles de Maduracion','Negociación',2026],
  ['Don Ricardo',580000,0.2,3,'Ampliacion de Planta "Casa Chica" - Procesamiento de Uva','Prospecto',2027],
  ['Frutos de Oro',542014.85,0.6,8,'Camaras de C02 y Freon','Negociación',2026],
  ['El Parque Alaya Packing Sac',500000,0.05,9,'Implementación de Campamento','Postpuesto',2026],
  ['El Parque Alaya Packing Sac',500000,0.2,9,'Ampliación de Packing Palta','En proceso de cotización',2026],
  ['El Parque Alaya Packing Sac',487628.54,0.2,9,'Equipos','En análisis del cliente',2026],
  ['Sociedad Agricola Drokasa S.A.',460000,0.4,1,'PV2 - NH3','En análisis del cliente',2027],
  ['2M',450000,0.6,1,'Ampliacion Recepción, Cmp, Sp','En análisis del cliente',2027],
  ['Camsac',450000,0.6,2,'Ampliacion de Planta de Arandanos 2 TMP, 1 CPT, 1 Despacho','Prospecto',2027],
  ['Torre Blanca',450000,0.4,1,'Proyecto 1 Túnel, Pasillo )','En proceso de cotización',2027],
  ['Agropecuarios del Sur',421755.7,0,5,'Planta de Embutidos','Perdido',2026],
  ['Agrofloral',380000,0.6,11,'Ampliacion de Camara de Producto Terminado','En análisis del cliente',2026],
  ['Don Packing',372462.18,0,4,'Planta Empacadaora de Fruta Multiproposito','Perdido',2026],
  ['Prize',329805.2,0.2,2,'Oficinas','Postpuesto',2027],
  ['Grupo Rocío: Noraves Santa Elena (Virú)',328879.93,0.4,9,'Sistema de Respaldo (Backup) de Refrigeración','En análisis del cliente',2026],
  ['Tyt',300000,0.4,12,'Proyecto de 03 Tuneles y 01 Camara de Proudcto Terminado','En proceso de cotización',2026],
  ['Zedina',274409.85,0.2,2,'Planta de Carnicos','En análisis del cliente',2027],
  ['Agricola Huarmey',272704.88,0.2,9,'Deshumidificadores, 4 Esclusas','En análisis del cliente',2026],
  ['Limatambo',259000,0.05,1,'Camara 140 Ps y 1 Tunel de 20 Pallets (Freon)','Postpuesto',2027],
  ['Pedregal Ica',256000,0,5,'Ampliación de Túneles en PK1 y PK2','Perdido',2026],
  ['Country Home',250000,0.2,9,'Cámara de Almacenamiento de Producto Terminado - Limon','En proceso de cotización',2026],
  ['Europan - San Antonio',250000,0.4,12,'Cámaras de Refrigeracion y Congelados','Prospecto',2026],
  ['Uvas del Sur',200000,0.2,8,'Planta Empacadora de Uva','En proceso de cotización',2026],
  ['Kamuk',198801,0.2,10,'Túnel','Prospecto',2026],
  ['Emergent Cold',167000,0.8,8,'Suministro e Instalación de Compresor (3er para Back Up)','Negociación',2026],
  ['Agro Develop',150000,0.2,3,'Packing de Jengibre','Prospecto',2027],
  ['Cultivos Orgánicos',150000,0.05,10,'Tunel y Camara de Arandanos','Prospecto',2026],
  ['Delice',150000,0.2,9,'Lineas de Proceso de Agua Helada y Agua de Torre','En análisis del cliente',2026],
  ['Cementos Pacasmayo',128992.98,0.05,2,'Instalacion de 2 Chilleres - Ecuador','En proceso de cotización',2027],
  ['Hayduk',120000,0.2,10,'Suministro e Instalación de Compresor','En proceso de cotización',2026],
  ['Agroberries',103694.6,0.8,1,'Tunel 02 - Adicional para Materia Prima','En análisis del cliente',2027],
  ['Frutos de Oro',100000,0.2,9,'Sistema de Frio IQF','En proceso de cotización',2026],
  ['Molitalia',100000,0.05,1,'Suministro de Chiller','En análisis del cliente',2027],
  ['Agricola la Joya',98000,0.05,1,'Planta Empacadora de Uva','Postpuesto',2027],
  ['Vitafoods',90928,0.8,8,'Servicio de Ingeneria','Negociación',2026],
  ['3P',79900,0.05,8,'Instalacion y Puesta en Marcha - Chiller','Prospecto',2026],
  ['2M',78297,0.8,8,'Ampliacion del Despacho (Multifruta)','Negociación',2026],
  ['Safco',78000,0.8,8,'Suministros e Instalación de de Condensador Frioraf','En análisis del cliente',2026],
  ['Agrofutura',75000,0.4,10,'Ampliación de Planta Multiproposito - Uva','En análisis del cliente',2026],
  ['Aib Chinca',60000,0.4,8,'Evaporador para Tunel IQF','En proceso de cotización',2026],
  ['Aib Chinca',60000,0.6,8,'Evaporador para Tunel Estatico 2 (Chincha)','En análisis del cliente',2026],
  ['Aib Chinca',54334,0.2,8,'Climatización de Prefrio','En análisis del cliente',2026],
  ['Agrofutura',38534.24,0.4,8,'Inst. Camaras de Gasificado Acopios 1Y2','Negociación',2026],
  ['Talma',35000,0.05,12,'Ingeneria','Prospecto',2026],
  ['Grupo Rocío: Noraves Santa Elena (Virú)',33894.15,0.4,9,'Repuestos','En proceso de cotización',2026],
  ['Tricao',32000,0.2,12,'Plan de Arquitectura, Diseño de 3 Plantas','En análisis del cliente',2026],
  ['Europan - San Antonio',30600,0.8,8,'Expediente Técnico','Negociación',2026],
  ['Agrovisión',28155.56,0.05,9,'Camara de Gasificado','Prospecto',2026]
];
const PIPE_ESTADOS = ['Prospecto','En proceso de cotización','En análisis del cliente','Negociación','Postpuesto','Perdido'];
const PIPE_ESTADO_COLOR = {
  'Prospecto':'#7B8DB0',
  'En proceso de cotización':'#4FA8E0',
  'En análisis del cliente':'#1E3A5F',
  'Negociación':'#D97706',
  'Postpuesto':'#AAB6C9',
  'Perdido':'#D85A30'
};
const PIPE_ESTADO_BG = {
  'Prospecto':'#f1f5f9',
  'En proceso de cotización':'rgba(79,168,224,.12)',
  'En análisis del cliente':'rgba(30,58,95,.10)',
  'Negociación':'#fef3c7',
  'Postpuesto':'#eef1f6',
  'Perdido':'rgba(216,90,48,.12)'
};
let _pipeProbSel = new Set(['all']);
let _pipeEstadoSel = new Set(['all']);

/* Objetivos estratégicos 2026 — datos reales del Excel
   Obj. 01 actualizado Ago 2026 (dato directo: cierre real Jun/Jul 2026 y 2025).
   Obj. 02–05 actualizados desde "Friopacking_Objetivos_2_3_4_5.xlsx". */
const OBJ5 = [
  {id:1, num:'01', cat:'Comercial', name:'Venta Comercial',
   icon:"<img src='https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Chart%20increasing/3D/chart_increasing_3d.png' alt='' loading='lazy' style='width:82%;height:82%;object-fit:contain;display:block' onerror='this.outerHTML=\"📈\"'>",
   pct:96.98, pctLabel:'96.98', color:'#185fa5', colorBg:'#dbeef9', colorDark:'#0e4a7a',
   status:'ok', stxt:'En ritmo',
   metaLabel:'$30M anual',
   stats:[
     {lbl:'Acumulado Ene–Jul', val:'$29.09M', cls:'c-ok'},
     {lbl:'Meta anual', val:'$30.00M', cls:''},
     {lbl:'Pendiente', val:'$906K', cls:''},
     {lbl:'vs Ene–Jul 2025', val:'+47.14%', cls:'c-ok'}
   ],
   minis:[
     {lbl:'Pendiente meta', val:'$906K'},
     {lbl:'Margen 2026', val:'15.36%'}
   ]},
  {id:2, num:'02', cat:'Tecnología CO₂', name:'Proyectos CO₂',
   icon:"<img src='https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Snowflake/3D/snowflake_3d.png' alt='' loading='lazy' style='width:82%;height:82%;object-fit:contain;display:block' onerror='this.outerHTML=\"❄️\"'>",
   pct:0, pctLabel:'0.00', color:'#10b981', colorBg:'#d1fae5', colorDark:'#065f46',
   status:'crit', stxt:'En riesgo',
   metaLabel:'2 proyectos',
   stats:[
     {lbl:'Proyectos vendidos', val:'0 / 2', cls:'c-crit'},
     {lbl:'Pipeline activo', val:'6 oport.', cls:''},
     {lbl:'Importe pipeline', val:'$9.35M', cls:''},
     {lbl:'Proyectos vendidos', val:'0/2', cls:''}
   ],
   minis:[
     {lbl:'Oportunidades', val:'6 activas'},
     {lbl:'Importe pot.', val:'$9.35M'}
   ]},
  {id:4, num:'03', cat:'Nuevas líneas', name:'Valor Sin Frío',
   icon:"<img src='https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Building%20construction/3D/building_construction_3d.png' alt='' loading='lazy' style='width:82%;height:82%;object-fit:contain;display:block' onerror='this.outerHTML=\"🏗️\"'>",
   pct:100, pctLabel:'193.80', color:'#0d9488', colorBg:'#ccfbf1', colorDark:'#115e59',
   status:'ok', stxt:'Meta superada',
   metaLabel:'$2.8M',
   stats:[
     {lbl:'OOCC + EEMM logrado', val:'$5,426,217', cls:'c-ok'},
     {lbl:'EEMM logrado', val:'$2.74M', cls:'c-ok'},
     {lbl:'Total sin frío', val:'$5.43M', cls:'c-ok'},
     {lbl:'Meta', val:'$2.80M', cls:''}
   ],
   minis:[
     {lbl:'OOCC', val:'$2.69M'},
     {lbl:'EEMM', val:'$2.74M'}
   ]},
  {id:3, num:'04', cat:'Diversificación', name:'Clientes No Agro',
   icon:"<img src='https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Factory/3D/factory_3d.png' alt='' loading='lazy' style='width:82%;height:82%;object-fit:contain;display:block' onerror='this.outerHTML=\"🏭\"'>",
   pct:50, pctLabel:'50.00', color:'#0891b2', colorBg:'#e0f7fa', colorDark:'#164e63',
   status:'warn', stxt:'En seguimiento',
   metaLabel:'4 clientes',
   stats:[
     {lbl:'Logrados', val:'2 / 4', cls:'c-warn'},
     {lbl:'Pendiente', val:'2 clientes', cls:''},
     {lbl:'Pipeline no agro', val:'19 oport.', cls:''},
     {lbl:'Importe pipeline', val:'$16.67M', cls:''}
   ],
   minis:[
     {lbl:'Logrados', val:'2 de 4'},
     {lbl:'En pipeline', val:'19 oport.'}
   ]},
  {id:5, num:'05', cat:'Cross Selling', name:'Cross Selling – Frioteam',
   icon:"<img src='https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Wrench/3D/wrench_3d.png' alt='' loading='lazy' style='width:82%;height:82%;object-fit:contain;display:block' onerror='this.outerHTML=\"🔧\"'>",
   pct:132.03, pctLabel:'132.03', color:'#3d4a6a', colorBg:'#e7eaf2', colorDark:'#20283f',
   status:'ok', stxt:'Meta superada',
   metaLabel:'$250K',
   stats:[
     {lbl:'Total vendido', val:'$330,083', cls:'c-warn'},
     {lbl:'Meta anual', val:'$250,000', cls:''},
     {lbl:'Pendiente', val:'$0', cls:''},
     {lbl:'Servicios', val:'4', cls:''}
   ],
   minis:[
     {lbl:'Servicios', val:'4'},
     {lbl:'Pendiente', val:'$0'}
   ]}
];


/* ============================================================
   PIPELINE COMERCIAL — RENDER ENGINE (3 vistas: Resumen Embudo /
   Forecast / Clientes por Etapa). Datos reales: Excel "PIPELINE 01.07"
   ============================================================ */
(function() {
  var MESES_ABR = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  /* Horizonte de forecast — construido dinámicamente desde los pares (Año, Mes) reales de
     PIPE_ROWS (columna AÑO del Excel "PIPELINE 2026-2027"), ordenado cronológicamente.
     Cada opción usa la clave compuesta "AAAA-M" para nunca confundir, por ejemplo, enero 2026
     con enero 2027 (ambos años están presentes en la data real). */
  function mesKey(anio, mes) { return anio + '-' + mes; }
  var FORECAST_HORIZON = (function() {
    var seen = {}, list = [];
    PIPE_ROWS.forEach(function(r) {
      if (r[3] == null || r[6] == null) return;
      var k = mesKey(r[6], r[3]);
      if (seen[k]) return;
      seen[k] = true;
      list.push({anio:r[6], m:r[3], key:k, lbl: MESES_ABR[r[3]-1] + ' ' + String(r[6]).slice(2)});
    });
    list.sort(function(a,b){ return (a.anio-b.anio) || (a.m-b.m); });
    return list;
  })();
  var FORECAST_HORIZON_KEYS = FORECAST_HORIZON.map(function(h){ return h.key; });
  var FORECAST_HORIZON_LABELS = FORECAST_HORIZON.map(function(h){ return h.lbl; });
  function horizonIdx(anio, mes) { return FORECAST_HORIZON_KEYS.indexOf(mesKey(anio, mes)); }
  var PROB_LABELS = [['all','Todas'],['0','0%'],['5','5%'],['20','20%'],['40','40%'],['60','60%'],['80','80%'],['100','100%']];
  /* Años reales presentes en PIPE_ROWS (columna AÑO del Excel), no hardcodeados */
  var PIPE_ANIOS = (function() {
    var seen = {}, list = [];
    PIPE_ROWS.forEach(function(r) { if (r[6] != null && !seen[r[6]]) { seen[r[6]] = true; list.push(r[6]); } });
    list.sort(function(a,b){ return a-b; });
    return list;
  })();
  var _chPipeSeas = null;
  var _pipeSeasCache = {};
  var _pipeAnioSel = new Set(['all']);
  var _pipeMesSel = new Set(['all']);
  var _pipeStageSel = null;
  var _pipeClienteFocus = 'all';
  var _pipeClienteSearch = '';
  var _pipeClienteMes = 'all';
  function rowMatchesClienteMes(r) { return _pipeClienteMes === 'all' || (r[3] != null && r[6] != null && mesKey(r[6], r[3]) === _pipeClienteMes); }

  function agg(rows) {
    var importe = 0;
    rows.forEach(function(r){ importe += (r[1]||0); });
    return {count: rows.length, importe: importe};
  }
  function avgProb(rows) {
    var vs = rows.filter(function(r){ return r[2] != null; });
    if (!vs.length) return 0;
    return vs.reduce(function(s,r){ return s+r[2]; }, 0) / vs.length * 100;
  }
  function activeRows() { return PIPE_ROWS.filter(function(r){ return r[5] !== 'Perdido' && r[5] !== 'Postpuesto'; }); }
  function normSearch(s) { return String(s||'').toLowerCase().trim().replace(/\s+/g,' '); }
  function kpiCard(color, label, val, ctx, barPct) {
    var track = (barPct == null) ? '' :
      '<div class="kv3-bar-track"><div class="kv3-bar-fill" style="width:' + Math.min(barPct,100).toFixed(1) + '%;background:' + color + '"></div></div>';
    return '<div class="kpi-v3" style="--accent:' + color + ';cursor:default">'
      + '<div class="kv3-lbl">' + label + '</div>'
      + '<div class="kv3-val" style="color:' + color + '">' + val + '</div>'
      + track
      + '<div class="kv3-ctx">' + ctx + '</div>'
      + '</div>';
  }

  /* ── Mini-tabs de vista ── */
  function switchView(view) {
    document.querySelectorAll('#pipeViewTabs .pipe-tab').forEach(function(t){ t.classList.toggle('active', t.dataset.view===view); });
    var map = {resumen:'pipeViewResumen', forecast:'pipeViewForecast', clientes:'pipeViewClientes'};
    Object.keys(map).forEach(function(k){
      var el = document.getElementById(map[k]); if (el) el.classList.toggle('active', k===view);
    });
    if (view === 'forecast' && _chPipeSeas) _chPipeSeas.resize();
  }
  var viewTabsEl = document.getElementById('pipeViewTabs');
  if (viewTabsEl) viewTabsEl.addEventListener('click', function(e) {
    var t = e.target.closest('.pipe-tab'); if (!t || !t.dataset.view) return;
    switchView(t.dataset.view);
  });

  /* ── Ventas: tabs internos (Ventas 2026 / Evolución / Análisis) ── */
  function vtSwitchTab(view) {
    document.querySelectorAll('#vtTabs .vt-tab-btn').forEach(function(t){ t.classList.toggle('active', t.dataset.vtview===view); });
    document.querySelectorAll('#ventas .vt-view').forEach(function(v){ v.classList.toggle('active', v.dataset.vtview===view); });
    if (typeof _vtUpdateHeroMargen === 'function') _vtUpdateHeroMargen();
    setTimeout(function(){ window.dispatchEvent(new Event('resize')); }, 60);
  }
  window._vtSwitchTab = vtSwitchTab;
  var vtTabsEl = document.getElementById('vtTabs');
  if (vtTabsEl) vtTabsEl.addEventListener('click', function(e) {
    var t = e.target.closest('.vt-tab-btn'); if (!t || !t.dataset.vtview) return;
    vtSwitchTab(t.dataset.vtview);
  });

  /* ── Hero fijo — universo completo, no reacciona a selección ni filtros ── */
  function renderHero() {
    var negAgg = agg(PIPE_ROWS.filter(function(r){ return r[5]==='Negociación'; }));
    var perdAgg = agg(PIPE_ROWS.filter(function(r){ return r[5]==='Perdido'; }));
    var actAgg = agg(activeRows());
    var html = ''
      + '<div class="pipe-hkpi"><div class="pipe-hkpi-l">Oportunidades en Negociación</div>'
      + '<div class="pipe-hkpi-v">' + fmtEjecutivo(negAgg.importe) + '</div>'
      + '<div class="pipe-hkpi-s">' + negAgg.count + ' oportunidades</div></div>'
      + '<div class="pipe-hkpi"><div class="pipe-hkpi-l">Pipeline Activo</div>'
      + '<div class="pipe-hkpi-v">' + fmtEjecutivo(actAgg.importe) + '</div>'
      + '<div class="pipe-hkpi-s">' + actAgg.count + ' oportunidades activas</div></div>'
      + '<div class="pipe-hkpi"><div class="pipe-hkpi-l">Oportunidades Perdidas</div>'
      + '<div class="pipe-hkpi-v" style="color:#F0997B">' + perdAgg.count + '</div>'
      + '<div class="pipe-hkpi-s">' + fmtEjecutivo(perdAgg.importe) + ' en importe</div></div>';
    var el = document.getElementById('pipeHeroKpis');
    if (el) el.innerHTML = html;
  }

  /* Sincroniza el KPI de Pipeline en Portada con el mismo cálculo (agg + activeRows) usado en esta sección */
  function renderCoverPipelineKpi() {
    var count = agg(activeRows()).count;
    var el = document.getElementById('coverPipeCount');
    if (el) el.textContent = count;
  }

  /* ════════════════════════════════════════════════════════════
     VISTA 1 — RESUMEN EMBUDO (KPIs fijos + embudo + detalle)
     ════════════════════════════════════════════════════════════ */
  function renderResumenKpis() {
    var act = activeRows();
    var a = agg(act);
    var ticket = a.count ? a.importe / a.count : 0;
    var pAvg = avgProb(act);
    var html = ''
      + kpiCard('#3EC6AC', 'Pipeline Total', fmtEjecutivo(a.importe), 'Importe de oportunidades activas', null)
      + kpiCard('#1E3A5F', 'Oportunidades Activas', String(a.count), 'Excluye vendido, perdido y postpuesto', null)
      + kpiCard('#0F6E56', 'Probabilidad Promedio', pAvg.toFixed(2) + '%', 'Lectura comercial de cierre con nosotros', null)
      + kpiCard('#D97706', 'Ticket Promedio', fmtEjecutivo(ticket), 'Pipeline total / oportunidades activas', null);
    var el = document.getElementById('pipeKpiFixed');
    if (el) el.innerHTML = html;
  }

  function pickDefaultStage() {
    var best = null, bestVal = -1;
    PIPE_ESTADOS.forEach(function(e) {
      if (e === 'Perdido') return;
      var a = agg(PIPE_ROWS.filter(function(r){ return r[5]===e; }));
      if (a.importe > bestVal) { bestVal = a.importe; best = e; }
    });
    return best;
  }

  function renderFunnel() {
    var byEstado = {};
    PIPE_ESTADOS.forEach(function(e){ byEstado[e] = agg(PIPE_ROWS.filter(function(r){ return r[5]===e; })); });
    var maxN = Math.max.apply(null, PIPE_ESTADOS.map(function(e){ return byEstado[e].count; }).concat([1]));
    var fh = '';
    PIPE_ESTADOS.forEach(function(nm) {
      if (nm === 'Perdido') fh += '<div class="funnel-sep-v2"></div>';
      var a = byEstado[nm];
      var w = a.count ? Math.max(12, a.count/maxN*100) : 4;
      var c = PIPE_ESTADO_COLOR[nm];
      fh += '<div class="fstage-v2' + (nm===_pipeStageSel?' sel':'') + '" data-etapa="' + nm + '" style="--stage-c:' + c + '">'
        + '<div class="fv2-label-wrap"><span class="fv2-dot" style="background:' + c + '"></span>'
        + '<div><div class="fv2-label">' + nm + '</div><div class="fv2-count">' + a.count + ' oportunidad' + (a.count===1?'':'es') + '</div></div></div>'
        + '<div class="fv2-bar-wrap"><div class="fv2-bar" style="width:' + w + '%;background:linear-gradient(90deg,' + c + 'b3,' + c + ')"></div></div>'
        + '<div class="fv2-meta">' + fmtEjecutivo(a.importe) + '</div></div>';
    });
    var el = document.getElementById('funnelV2');
    if (!el) return;
    el.innerHTML = fh;
    el.querySelectorAll('.fstage-v2').forEach(function(node) {
      node.addEventListener('click', function() {
        _pipeStageSel = node.dataset.etapa;
        renderFunnel();
        renderStageDetail();
      });
    });
  }

  function renderStageDetail() {
    var nm = _pipeStageSel;
    var card = document.getElementById('pipeStageDetail');
    if (!card) return;
    if (!nm) { card.innerHTML = '<div style="text-align:center;color:var(--ts);padding:40px 10px;font-size:12px">Selecciona una etapa del embudo para ver su detalle.</div>'; return; }
    var rows = PIPE_ROWS.filter(function(r){ return r[5]===nm; });
    var a = agg(rows);
    var pAvg = avgProb(rows);
    var ticket = a.count ? a.importe / a.count : 0;
    var top5 = rows.slice().sort(function(x,y){ return (y[1]||0)-(x[1]||0); }).slice(0,5);
    var html = ''
      + '<div class="psd-hdr"><div><div class="psd-name">' + nm + '</div><div class="psd-sub">' + a.count + ' oportunidades &middot; ' + fmtEjecutivo(a.importe) + '</div></div>'
      + '<span style="font-size:10px;font-weight:700;padding:4px 11px;border-radius:20px;background:' + PIPE_ESTADO_BG[nm] + ';color:' + PIPE_ESTADO_COLOR[nm] + '">' + nm + '</span></div>'
      + '<div class="psd-stats">'
      + '<div class="psd-stat"><div class="psd-stat-l">Importe</div><div class="psd-stat-v">' + fmtEjecutivo(a.importe) + '</div></div>'
      + '<div class="psd-stat"><div class="psd-stat-l">Ticket Promedio</div><div class="psd-stat-v">' + fmtEjecutivo(ticket) + '</div></div>'
      + '<div class="psd-stat"><div class="psd-stat-l">Prob. Promedio</div><div class="psd-stat-v">' + pAvg.toFixed(2) + '%</div></div>'
      + '</div>'
      + '<div class="psd-list-h">Top 5 oportunidades</div>';
    if (!top5.length) {
      html += '<div style="font-size:11.5px;color:var(--ts);padding:8px 0 2px">Sin oportunidades registradas en esta etapa.</div>';
    } else {
      html += '<div class="psd-list-scroll">';
      top5.forEach(function(r) {
        var mesLbl = (r[3] != null && r[6] != null) ? (MESES_ABR[r[3]-1] + ' ' + r[6]) : '—';
        html += '<div class="psd-item"><div class="psd-item-main">'
          + '<div class="psd-item-cli">' + r[0] + '</div>'
          + '<div class="psd-item-proj">' + (r[4] || 'Sin descripción registrada') + '</div></div>'
          + '<div class="psd-item-meta"><div class="psd-item-val">' + fmtEjecutivo(r[1]) + '</div>'
          + '<div class="psd-item-sub">' + (r[2] != null ? (r[2]*100).toFixed(2)+'%' : '—') + ' &middot; ' + mesLbl + '</div></div></div>';
      });
      html += '</div>';
    }
    card.innerHTML = html;
  }

  /* ════════════════════════════════════════════════════════════
     VISTA 2 — FORECAST (filtros propios + KPI + gráfico + tabla)
     ════════════════════════════════════════════════════════════ */
  function rowMatchesProb(r) { return _pipeProbSel.has('all') || (r[2] != null && _pipeProbSel.has(String(Math.round(r[2]*100)))); }
  function rowMatchesEstado(r) { return _pipeEstadoSel.has('all') || _pipeEstadoSel.has(r[5]); }
  function rowMatchesAnio(r) { return _pipeAnioSel.has('all') || (r[6] != null && _pipeAnioSel.has(String(r[6]))); }
  function rowMatchesMes(r) { return _pipeMesSel.has('all') || (r[3] != null && r[6] != null && _pipeMesSel.has(mesKey(r[6], r[3]))); }
  function forecastRows() { return PIPE_ROWS.filter(function(r){ return rowMatchesProb(r) && rowMatchesEstado(r) && rowMatchesAnio(r) && rowMatchesMes(r); }); }

  function toggleSel(sel, val) {
    if (val === 'all') { sel.clear(); sel.add('all'); }
    else {
      sel.delete('all');
      if (sel.has(val)) sel.delete(val); else sel.add(val);
      if (!sel.size) sel.add('all');
    }
  }
  function renderProbChips() {
    var el = document.getElementById('pfProb'); if (!el) return;
    el.innerHTML = PROB_LABELS.map(function(p) {
      var active = _pipeProbSel.has(p[0]);
      return '<div class="pf-chip' + (active?' active':'') + '" data-prob="' + p[0] + '">' + p[1] + '</div>';
    }).join('');
  }
  function renderEstadoChips() {
    var el = document.getElementById('pfEstado'); if (!el) return;
    var items = [['all','Todas',null]].concat(PIPE_ESTADOS.map(function(e){ return [e, e, PIPE_ESTADO_COLOR[e]]; }));
    el.innerHTML = items.map(function(it) {
      var active = _pipeEstadoSel.has(it[0]);
      var dot = it[2] ? '<span class="pf-dot" style="background:' + it[2] + '"></span>' : '';
      return '<div class="pf-chip' + (active?' active':'') + '" data-estado="' + it[0] + '">' + dot + it[1] + '</div>';
    }).join('');
  }
  function renderAnioChips() {
    var el = document.getElementById('pfAnio'); if (!el) return;
    var items = [['all','Todos']].concat(PIPE_ANIOS.map(function(a){ return [String(a), String(a)]; }));
    el.innerHTML = items.map(function(it) {
      var active = _pipeAnioSel.has(it[0]);
      return '<div class="pf-chip' + (active?' active':'') + '" data-anio="' + it[0] + '">' + it[1] + '</div>';
    }).join('');
  }
  /* Opciones de mes visibles — solo los meses del/los año(s) seleccionados en "Año"
     (con "Todos" en Año, se muestra el horizonte completo 2026–2027) */
  function currentMesOptions() {
    if (_pipeAnioSel.has('all')) return FORECAST_HORIZON;
    return FORECAST_HORIZON.filter(function(h){ return _pipeAnioSel.has(String(h.anio)); });
  }
  /* Si al cambiar de Año quedan meses seleccionados que ya no aplican (p.ej. "Mar 27"
     con Año=2026), se descartan para no filtrar en silencio contra un universo vacío */
  function pruneMesSel() {
    var validKeys = currentMesOptions().map(function(h){ return h.key; });
    _pipeMesSel.forEach(function(k){ if (k !== 'all' && validKeys.indexOf(k) === -1) _pipeMesSel.delete(k); });
    if (!_pipeMesSel.size) _pipeMesSel.add('all');
  }
  function renderMesChips() {
    var el = document.getElementById('pfMes'); if (!el) return;
    /* Con un único Año seleccionado, el filtro Año ya deja claro el año: el chip de Mes
       no debe repetirlo (evita "Feb 2027" redundante — solo "Feb"). Con "Todos" (o varios
       años a la vez) sí se mantiene el año corto para no confundir Feb 2026 con Feb 2027. */
    var singleYear = !_pipeAnioSel.has('all') && _pipeAnioSel.size === 1;
    var items = [['all','Todos']].concat(currentMesOptions().map(function(h){
      return [h.key, singleYear ? MESES_ABR[h.m-1] : h.lbl];
    }));
    el.innerHTML = items.map(function(it) {
      var active = _pipeMesSel.has(it[0]);
      return '<div class="pf-chip' + (active?' active':'') + '" data-mes="' + it[0] + '">' + it[1] + '</div>';
    }).join('');
  }

  /* ── Contador de filtros activos + limpiar filtros ── */
  function countActiveFilterGroups() {
    var n = 0;
    if (!_pipeProbSel.has('all')) n++;
    if (!_pipeEstadoSel.has('all')) n++;
    if (!_pipeAnioSel.has('all')) n++;
    if (!_pipeMesSel.has('all')) n++;
    return n;
  }
  function updatePfSummary() {
    var el = document.getElementById('pfActiveCount'); if (!el) return;
    var n = countActiveFilterGroups();
    el.textContent = n ? (n + (n===1 ? ' filtro activo' : ' filtros activos')) : '';
  }
  function clearAllForecastFilters() {
    _pipeProbSel = new Set(['all']);
    _pipeEstadoSel = new Set(['all']);
    _pipeAnioSel = new Set(['all']);
    _pipeMesSel = new Set(['all']);
    renderProbChips(); renderEstadoChips(); renderAnioChips(); renderMesChips();
    renderForecastAll();
    updatePfSummary();
  }

  var pfProbEl = document.getElementById('pfProb');
  if (pfProbEl) pfProbEl.addEventListener('click', function(e) {
    var t = e.target.closest('.pf-chip'); if (!t) return;
    toggleSel(_pipeProbSel, t.dataset.prob);
    renderProbChips(); renderForecastAll(); updatePfSummary();
  });
  var pfEstadoEl = document.getElementById('pfEstado');
  if (pfEstadoEl) pfEstadoEl.addEventListener('click', function(e) {
    var t = e.target.closest('.pf-chip'); if (!t) return;
    toggleSel(_pipeEstadoSel, t.dataset.estado);
    renderEstadoChips(); renderForecastAll(); updatePfSummary();
  });
  var pfAnioEl = document.getElementById('pfAnio');
  if (pfAnioEl) pfAnioEl.addEventListener('click', function(e) {
    var t = e.target.closest('.pf-chip'); if (!t) return;
    toggleSel(_pipeAnioSel, t.dataset.anio);
    pruneMesSel();
    renderAnioChips(); renderMesChips(); renderForecastAll(); updatePfSummary();
  });
  var pfMesEl = document.getElementById('pfMes');
  if (pfMesEl) pfMesEl.addEventListener('click', function(e) {
    var t = e.target.closest('.pf-chip'); if (!t) return;
    toggleSel(_pipeMesSel, t.dataset.mes);
    renderMesChips(); renderForecastAll(); updatePfSummary();
  });

  /* ── Panel plegable ── */
  var pfPanelEl = document.getElementById('pfPanel');
  var pfPanelToggleEl = document.getElementById('pfPanelToggle');
  if (pfPanelToggleEl) pfPanelToggleEl.addEventListener('click', function() {
    if (pfPanelEl) pfPanelEl.classList.toggle('collapsed');
  });
  var pfClearBtnEl = document.getElementById('pfClearBtn');
  if (pfClearBtnEl) pfClearBtnEl.addEventListener('click', function(e) {
    e.stopPropagation();
    clearAllForecastFilters();
  });

  /* "Importe ponderado" = Σ(importe × probabilidad) de las oportunidades que cumplen los
     filtros activos de Forecast (probabilidad / estado / mes — mismo universo que forecastRows(),
     igual que las tarjetas "Forecast" y "Oportunidades" de esta misma fila). Ponderación exclusiva
     de esta KPI: no toca importes nominales, gráficos, tablas ni el resto de tarjetas. */
  function weightedImporte(rows) {
    return rows.reduce(function(s, r) { return s + (r[1] || 0) * (r[2] || 0); }, 0);
  }

  function renderForecastKpis() {
    var rows = forecastRows();
    var a = agg(rows);
    var fixedA = agg(activeRows());
    var weighted = weightedImporte(rows);
    var html = ''
      + kpiCard('#1E3A5F', 'Pipeline Bruto Total', fmtEjecutivo(fixedA.importe), 'Importe de todas las oportunidades activas', null)
      + kpiCard('#0F6E56', 'Forecast', fmtEjecutivo(a.importe), a.count + ' oportunidades seg&uacute;n filtro', null)
      + kpiCard('#3EC6AC', 'Oportunidades', String(a.count), 'N&uacute;mero de oportunidades filtradas', null)
      + kpiCard('#D97706', 'Importe ponderado', fmtEjecutivo(weighted), 'Suma de (importe &times; probabilidad) seg&uacute;n filtro', null);
    var el = document.getElementById('pipeKpiForecast');
    if (el) el.innerHTML = html;
  }

  /* Destello sutil sobre las barras del gráfico de Forecast — un solo barrido diagonal
     cuando terminan de cargar/actualizar (no interfiere con tooltips ni con los datos) */
  var _reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pipeBarSheenPlugin = {
    id: 'pipeBarSheen',
    afterDatasetsDraw: function(chart) {
      var s = chart.$sheen;
      if (!s) return;
      var area = chart.chartArea;
      var w = area.right - area.left, h = area.bottom - area.top;
      var band = 90;
      var x = area.left - band + s.progress * (w + band * 2);
      var ctx = chart.ctx;
      var grad = ctx.createLinearGradient(x, 0, x + band, 0);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(0.5, 'rgba(255,255,255,.30)');
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
  function triggerBarSheen(chart) {
    if (_reduceMotion || !chart || chart.$sheenRunning) return;
    chart.$sheenRunning = true;
    chart.$sheen = {progress: 0};
    var start = null, DUR = 650;
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
  }

  function renderPipeSeasChart() {
    var rows = forecastRows();
    var byMonthEtapa = {};
    PIPE_ESTADOS.forEach(function(e) {
      byMonthEtapa[e] = [];
      for (var m=0; m<FORECAST_HORIZON.length; m++) byMonthEtapa[e].push({importe:0, count:0, probSum:0, probN:0});
    });
    rows.forEach(function(r) {
      if (r[3] == null || r[6] == null) return;
      var idx = horizonIdx(r[6], r[3]);
      if (idx === -1) return;
      var cell = byMonthEtapa[r[5]][idx];
      cell.importe += (r[1]||0);
      cell.count += 1;
      if (r[2] != null) { cell.probSum += r[2]; cell.probN += 1; }
    });
    _pipeSeasCache = byMonthEtapa;

    var ctx = document.getElementById('chPipeSeas');
    if (!ctx || typeof Chart === 'undefined') return;
    var newDataByEstado = {};
    PIPE_ESTADOS.forEach(function(e) {
      newDataByEstado[e] = byMonthEtapa[e].map(function(c){ return c.importe; });
    });

    if (_chPipeSeas) {
      _chPipeSeas.data.datasets.forEach(function(ds) { ds.data = newDataByEstado[ds.label]; });
      _chPipeSeas.update('active');
      return;
    }

    var datasets = PIPE_ESTADOS.map(function(e) {
      return {
        label: e,
        data: newDataByEstado[e],
        backgroundColor: PIPE_ESTADO_COLOR[e],
        borderRadius: 4,
        borderSkipped: false,
        maxBarThickness: 42,
        stack: 'pipe',
        hidden: e === 'Perdido'
      };
    });

    _chPipeSeas = new Chart(ctx, {
      type: 'bar',
      data: { labels: FORECAST_HORIZON_LABELS, datasets: datasets },
      plugins: [pipeBarSheenPlugin],
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: {duration:450, easing:'easeInOutQuart', onComplete: function(a) { triggerBarSheen(a.chart); }},
        interaction: {mode:'index', intersect:false},
        plugins: {
          legend: {display:true, position:'bottom', labels:{boxWidth:9, font:{size:9.5}, padding:10, color:'#7b8db0'}},
          tooltip: {
            backgroundColor:'rgba(9,12,30,.95)', padding:{top:11,bottom:11,left:13,right:13}, cornerRadius:10,
            borderColor:'rgba(62,198,172,.25)', borderWidth:1,
            titleColor:'rgba(255,255,255,.4)', titleFont:{size:9.5,weight:'700'},
            bodyColor:'rgba(255,255,255,.85)', bodyFont:{size:11,weight:'600'},
            filter: function(item) {
              var cell = (_pipeSeasCache[item.dataset.label]||[])[item.dataIndex];
              return !!(cell && cell.count);
            },
            callbacks: {
              title: function(items) { return items.length ? items[0].label : ''; },
              label: function(c) {
                var cell = _pipeSeasCache[c.dataset.label][c.dataIndex];
                var pAvg = cell.probN ? (cell.probSum/cell.probN*100) : 0;
                return c.dataset.label + ': ' + fmtEjecutivo(cell.importe) + ' · '
                  + cell.count + ' oport. · ' + pAvg.toFixed(2) + '% prob. prom.';
              }
            }
          }
        },
        scales: {
          x: {stacked:true, grid:{display:false}, border:{display:false}, ticks:{font:{size:10}, color:'#94a3b8'}},
          y: {stacked:true, grid:{color:'rgba(10,10,30,.05)'}, border:{display:false}, ticks:{font:{size:10}, color:'#94a3b8', callback:function(v){ return fmtEjecutivo(v); }}}
        }
      }
    });
  }

  function renderForecastTable() {
    var allFiltered = forecastRows();
    var rows = allFiltered.filter(function(r){ return r[3] != null && r[6] != null && horizonIdx(r[6], r[3]) !== -1; });
    var body = '';
    var totCount = 0, totImporte = 0, totProbSum = 0, totProbN = 0;
    FORECAST_HORIZON.forEach(function(h) {
      var mr = rows.filter(function(r){ return r[3]===h.m && r[6]===h.anio; });
      if (!mr.length) return;
      var a = agg(mr);
      var pAvg = avgProb(mr);
      var byE = {};
      mr.forEach(function(r){ byE[r[5]] = (byE[r[5]]||0) + (r[1]||0); });
      var domE = '—', domV = -1;
      Object.keys(byE).forEach(function(e){ if (byE[e] > domV) { domV = byE[e]; domE = e; } });
      totCount += a.count; totImporte += a.importe;
      mr.forEach(function(r){ if (r[2] != null) { totProbSum += r[2]; totProbN += 1; } });
      var domBadge = domE === '—' ? '—' : ('<span style="font-size:9.5px;padding:2px 7px;border-radius:14px;font-weight:700;background:' + PIPE_ESTADO_BG[domE] + ';color:' + PIPE_ESTADO_COLOR[domE] + '">' + domE + '</span>');
      body += '<tr><td>' + h.lbl + '</td><td class="r">' + a.count + '</td>'
        + '<td class="r" style="font-weight:700">' + fmtEjecutivo(a.importe) + '</td><td>' + domBadge + '</td><td class="r">' + pAvg.toFixed(2) + '%</td></tr>';
    });
    if (!body) {
      body = '<tr><td colspan="5" style="text-align:center;color:var(--ts);padding:16px">Sin oportunidades con mes de cierre en el filtro actual</td></tr>';
    } else {
      var totProbAvg = totProbN ? (totProbSum/totProbN*100) : 0;
      body += '<tr style="background:#f7faff;font-weight:700;border-top:2px solid var(--brand)"><td>Total</td><td class="r">' + totCount + '</td>'
        + '<td class="r">' + fmtEjecutivo(totImporte) + '</td><td>—</td><td class="r">' + totProbAvg.toFixed(2) + '%</td></tr>';
    }
    var bodyEl = document.getElementById('pipeForecastTblBody');
    if (bodyEl) bodyEl.innerHTML = body;
    var infoEl = document.getElementById('pipeForecastTblInfo');
    if (infoEl) {
      var excluded = allFiltered.length - rows.length;
      infoEl.textContent = rows.length + ' oportunidades con mes de cierre estimado' + (excluded ? ' · ' + excluded + ' sin mes asignado (no incluidas)' : '');
    }
  }

  /* Cinco etapas activas del Forecast (excluye "Perdido", que no es una etapa en curso) */
  var PIPE_ESTADOS_ACTIVOS = PIPE_ESTADOS.filter(function(e){ return e !== 'Perdido'; });

  function renderForecastStageCards() {
    var el = document.getElementById('pfStageGrid');
    if (!el) return;
    var rows = forecastRows();
    el.innerHTML = PIPE_ESTADOS_ACTIVOS.map(function(estado) {
      var stageRows = rows.filter(function(r){ return r[5] === estado; })
        .slice()
        .sort(function(a, b) {
          var av = a[1], bv = b[1];
          if (av == null && bv == null) return 0;
          if (av == null) return 1;
          if (bv == null) return -1;
          return bv - av;
        });
      var listHtml;
      if (!stageRows.length) {
        listHtml = '<div class="pf-stage-empty">Sin oportunidades para los filtros seleccionados</div>';
      } else {
        listHtml = stageRows.map(function(r) {
          var cliente = r[0] || '—';
          var val = r[1] != null ? fmtEjecutivo(r[1]) : '—';
          return '<div class="pf-stage-row"><span class="pf-stage-cli" title="' + cliente.replace(/"/g,'&quot;') + '">' + cliente + '</span>'
            + '<span class="pf-stage-val">' + val + '</span></div>';
        }).join('');
      }
      return '<div class="pf-stage-card" style="--accent:' + PIPE_ESTADO_COLOR[estado] + '">'
        + '<div class="pf-stage-head"><span class="pf-stage-name">' + estado + '</span>'
        + '<span class="pf-stage-count">' + stageRows.length + '</span></div>'
        + '<div class="pf-stage-list">' + listHtml + '</div>'
        + '</div>';
    }).join('');
  }

  function renderForecastAll() {
    renderForecastKpis();
    renderPipeSeasChart();
    renderForecastTable();
    renderForecastStageCards();
  }

  /* ════════════════════════════════════════════════════════════
     VISTA 3 — CLIENTES POR ETAPA (agrupado, con búsqueda)
     ════════════════════════════════════════════════════════════ */
  function renderClienteTabs() {
    var el = document.getElementById('pipeClienteTabs'); if (!el) return;
    var base = PIPE_ROWS.filter(rowMatchesClienteMes);
    var items = [['all','Todas', base.length]].concat(PIPE_ESTADOS.map(function(e) {
      return [e, e, base.filter(function(r){ return r[5]===e; }).length];
    }));
    el.innerHTML = items.map(function(it) {
      var active = _pipeClienteFocus === it[0];
      return '<div class="pipe-tab' + (active?' active':'') + '" data-etapa="' + it[0] + '">' + it[1] + ' <span class="pt-count">' + it[2] + '</span></div>';
    }).join('');
  }
  var clienteTabsEl = document.getElementById('pipeClienteTabs');
  if (clienteTabsEl) clienteTabsEl.addEventListener('click', function(e) {
    var t = e.target.closest('.pipe-tab'); if (!t) return;
    _pipeClienteFocus = t.dataset.etapa;
    renderClienteTabs(); renderClienteGroups();
  });
  var clienteSearchEl = document.getElementById('pipeClienteSearch');
  if (clienteSearchEl) clienteSearchEl.addEventListener('input', function() { _pipeClienteSearch = this.value; renderClienteGroups(); });

  /* Filtro de Mes propio de "Clientes por Etapa" — independiente del filtro de Forecast.
     Reutiliza el mismo horizonte dinámico (clave "Año-Mes") para nunca confundir, por
     ejemplo, enero 2026 con enero 2027. */
  function renderClienteMesSelect() {
    var el = document.getElementById('pipeClienteMes'); if (!el) return;
    el.innerHTML = '<option value="all">Todos los meses</option>' + FORECAST_HORIZON.map(function(h) {
      return '<option value="' + h.key + '">' + h.lbl + '</option>';
    }).join('');
    el.value = _pipeClienteMes;
  }
  var clienteMesEl = document.getElementById('pipeClienteMes');
  if (clienteMesEl) clienteMesEl.addEventListener('change', function() {
    _pipeClienteMes = this.value;
    renderClienteTabs(); renderClienteGroups();
  });

  function renderClienteGroups() {
    var q = normSearch(_pipeClienteSearch);
    var total = agg(PIPE_ROWS.filter(rowMatchesClienteMes));
    var etapas = _pipeClienteFocus === 'all' ? PIPE_ESTADOS : [_pipeClienteFocus];
    var html = '';
    var grandCount = 0, grandImporte = 0, grandProbSum = 0, grandProbN = 0;

    etapas.forEach(function(nm) {
      var rows = PIPE_ROWS.filter(function(r){ return r[5]===nm && rowMatchesClienteMes(r); });
      var filtered = rows.filter(function(r) {
        return normSearch(r[0]).indexOf(q) >= 0 || normSearch(r[4]).indexOf(q) >= 0;
      });
      if (q && !filtered.length) return;
      var a = agg(rows);
      var fa = agg(filtered);
      var part = total.importe ? (a.importe/total.importe*100) : 0;
      grandCount += filtered.length; grandImporte += fa.importe;
      filtered.forEach(function(r){ if (r[2] != null) { grandProbSum += r[2]; grandProbN += 1; } });

      var sorted = filtered.slice().sort(function(x,y){ return (y[1]||0)-(x[1]||0); });
      var rowsHtml = sorted.map(function(r) {
        var mesLbl = (r[3] != null && r[6] != null) ? (MESES_ABR[r[3]-1] + ' ' + r[6]) : '—';
        var proyecto = r[4] || 'Sin descripción registrada';
        return '<tr><td>' + r[0] + '</td>'
          + '<td style="color:var(--tm);max-width:280px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="' + String(proyecto).replace(/"/g,'&quot;') + '">' + proyecto + '</td>'
          + '<td>' + mesLbl + '</td>'
          + '<td class="r" style="font-weight:700">' + fmtEjecutivo(r[1]) + '</td>'
          + '<td class="r">' + (r[2] != null ? (r[2]*100).toFixed(2)+'%' : '—') + '</td></tr>';
      }).join('');
      if (!sorted.length) rowsHtml = '<tr><td colspan="5" style="text-align:center;color:var(--ts);padding:12px">Sin oportunidades' + (q ? ' que coincidan con la búsqueda' : ' registradas') + '</td></tr>';

      html += '<div class="pipe-etapa-group">'
        + '<div class="pipe-etapa-hdr">'
        + '<span class="peh-dot" style="background:' + PIPE_ESTADO_COLOR[nm] + '"></span>'
        + '<span class="peh-name" style="color:' + PIPE_ESTADO_COLOR[nm] + '">' + nm + '</span>'
        + '<span class="peh-meta">' + a.count + ' oportunidad' + (a.count===1?'':'es') + ' &middot; ' + part.toFixed(2) + '% participaci&oacute;n &middot; ' + fmtEjecutivo(a.importe) + ' importe total</span>'
        + '</div>'
        + '<div class="pipe-etapa-tbl"><table><thead><tr>'
        + '<th>Cliente</th><th>Proyecto</th><th>Mes cierre</th><th class="r">Importe</th><th class="r">Probabilidad</th>'
        + '</tr></thead><tbody>' + rowsHtml + '</tbody>'
        + (sorted.length ? '<tfoot><tr><td colspan="3">Total etapa' + (q?' (filtrado)':'') + '</td><td class="r">' + fmtEjecutivo(fa.importe) + '</td><td></td></tr></tfoot>' : '')
        + '</table></div></div>';
    });

    var groupsEl = document.getElementById('pipeEtapaGroups');
    if (!groupsEl) return;
    if (!html) {
      groupsEl.innerHTML = '<div class="card" style="text-align:center;color:var(--ts);padding:30px">Sin resultados para la búsqueda actual.</div>';
      return;
    }
    var grandProbAvg = grandProbN ? (grandProbSum/grandProbN*100) : 0;
    groupsEl.innerHTML = html
      + '<div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap">'
      + '<div style="font-size:11px;color:var(--ts);font-weight:600;text-transform:uppercase;letter-spacing:.6px">Total general' + (q?' (filtrado)':'') + '</div>'
      + '<div style="display:flex;gap:22px;flex-wrap:wrap">'
      + '<div><div style="font-size:9.5px;color:var(--ts);text-transform:uppercase;letter-spacing:.5px">Oportunidades</div><div style="font-size:15px;font-weight:800;color:var(--t)">' + grandCount + '</div></div>'
      + '<div><div style="font-size:9.5px;color:var(--ts);text-transform:uppercase;letter-spacing:.5px">Importe</div><div style="font-size:15px;font-weight:800;color:var(--t)">' + fmtEjecutivo(grandImporte) + '</div></div>'
      + '<div><div style="font-size:9.5px;color:var(--ts);text-transform:uppercase;letter-spacing:.5px">Probabilidad Promedio</div><div style="font-size:15px;font-weight:800;color:#0F6E56">' + grandProbAvg.toFixed(2) + '%</div></div>'
      + '</div></div>';
  }

  /* ── Orquestador ── */
  function renderPipeAll() {
    renderHero();
    renderCoverPipelineKpi();
    renderResumenKpis();
    renderFunnel();
    renderStageDetail();
    renderProbChips();
    renderEstadoChips();
    renderAnioChips();
    renderMesChips();
    renderForecastAll();
    updatePfSummary();
    renderClienteMesSelect();
    renderClienteTabs();
    renderClienteGroups();
  }
  window._renderPipeAll = renderPipeAll;

  _pipeStageSel = pickDefaultStage();
  renderPipeAll();
})();

