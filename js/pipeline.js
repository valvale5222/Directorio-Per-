/* ============================================================
   PIPELINE COMERCIAL — DATOS REALES (Excel "PIPELINE 01.07", pestaña PIPELINE)
   Fila = [Cliente, Importe, Probabilidad de cierre (0–1), Mes de cierre (1–12|null), Proyecto/Descripción, Estado]
   Estado 'Perdido' fuerza probabilidad=0 (coherencia: perdido = 0% de cierre).
   Actualizado Jul 2026: 80 oportunidades (reemplazo completo desde el Excel actualizado).
   ============================================================ */
const PIPE_ROWS = [
  ['Vita Foods',90928,0.8,8,'Servicio de ingeniería','En análisis del cliente'],
  ['Vita Foods',4500000,0.6,11,'Planta de congelado','En análisis del cliente'],
  ['NGR - Nutra',1100000,0.4,7,'Implementación de cámaras de frío para Planta de producción Proyecto Chronos (freón)','En análisis del cliente'],
  ['Emergent Cold',771249.7,0.4,11,'Túnel Congelado','En análisis del cliente'],
  ['El Parque Alaya Packing Sac',487628.54,0.4,1,'Equipos','En análisis del cliente'],
  ['Prize',329805.2,0.4,7,'Oficinas','En análisis del cliente'],
  ['Rapel',3211211,0.4,11,'10/14 Túneles de planta de uva - Piura','En análisis del cliente'],
  ['Retail',25245.6,0.2,7,'Cámara de congelado','Prospecto'],
  ['Frutos De Oro',616364.4,0.2,8,'02 Túneles de maduración','En análisis del cliente'],
  ['Cultivos Orgánicos',150000,0.05,7,'Túnel y cámara de arándanos','Postpuesto'],
  ['Tyt',300000,0.2,8,'Proyecto de 03 túneles y 01 cámara de producto terminado','Prospecto'],
  ['Agro Develop',150000,0.2,8,'Packing de Jengibre','Prospecto'],
  ['Agrovisión',28155.56,0.2,8,'Cámara de gasificado','Prospecto'],
  ['Maestranza',5139992,0.2,7,'Equipos de refrigeración','Prospecto'],
  ['Uvas Del Sur',200000,0.2,8,'Planta empacadora de Uva','Prospecto'],
  ['Almacenera del norte',391611.8,0,null,'Cámaras de refrigeración','Perdido'],
  ['Rinti SA',469188.52,0,null,'Chiller','Perdido'],
  ['Danper - Arequipa',35800,0.05,8,'Suministro e instalación de Chiller','Postpuesto'],
  ['Proagro Nazca',1325752.5,0.05,1,'Planta empacadora de arándanos','Postpuesto'],
  ['Inka Select Fruit',789000,0.05,10,'Planta para procesos de frutas frescas – Primera etapa','Postpuesto'],
  ['Sociedad Agrícola Drokasa S.A.',460000,0.05,12,'PV2 - NH3','Postpuesto'],
  ['Agrícola La Joya',98000,0.05,10,'Planta empacadora de Uva','Postpuesto'],
  ['AIB Chincha',48500,0.05,12,'Planta de congelado de fruta multipropósito (Chincha)','Postpuesto'],
  ['Frutos Tropicales',5986141.91,0.05,10,'Planta de congelado de Mango','Postpuesto'],
  ['Don Packing',372462.18,0,null,'Planta empacadora de fruta multipropósito','Perdido'],
  ['Sur Export',1258000,0,null,'Acopio de arándanos','Perdido'],
  ['San Fernando',2923052.67,0,null,'Implementación del Sistema de refrigeración - PPPC Huaral','Perdido'],
  ['Agroextiende',1545500,0,null,'Planta empacadora de arándanos','Perdido'],
  ['Agropecuarios del Sur',421755.7,0,null,'Planta de Embutidos','Perdido'],
  ['Camposol',700000,0,null,'Acopio Nuevo','Perdido'],
  ['Danper',3500000,0,null,'Ampliación Muchik','Perdido'],
  ['Danper',5000000,0.4,9,'Proyecto: Olmos','En proceso de cotización'],
  ['Pedregal',256000,0,null,'Planta antigua de uva - mejoras','Perdido'],
  ['Pura Fruits',850000,0,null,'Ampliación de planta de arándanos','Perdido'],
  ['Delice',1572931.74,0.8,7,'Planta procesadora de lácteos y derivados (sistema de frío)','Negociación'],
  ['Agrokasa - Pisco',435000,0.8,7,'2 Túneles de MP','Negociación'],
  ['Europan - San Antonio',30600,0.8,7,'Antecámara - Fuera del agro','Negociación'],
  ['Atgro (Ecosac)',32000,0.6,7,'Planta de procesamiento de arándanos','En proceso de cotización'],
  ['Tricao',4000000,0.4,8,'Planta de arándanos (Proyecto)','Prospecto'],
  ['Tricao',40000,0.4,8,'Plan de arquitectura, diseño de 3 plantas','En proceso de cotización'],
  ['El Parque Alaya Packing Sac',500000,0.4,7,'Implementación de campamento','En proceso de cotización'],
  ['Delice',150000,0.4,8,'Líneas de proceso de agua helada y agua de torre','En proceso de cotización'],
  ['Agroberries',103694.6,0.8,7,'Túnel 02 - adicional para materia prima','En proceso de cotización'],
  ['Grupo Rocío: Noraves Santa Elena (Virú)',500000,0.4,9,'Sistema de respaldo (backup) de refrigeración','En proceso de cotización'],
  ['Kamuk',189900,0.4,10,'Planta multipropósito','En proceso de cotización'],
  ['Vitafoods',0,0.2,8,'Cotización de infraestructura','En proceso de cotización'],
  ['Molitalia',100000,0.2,8,'Suministro de Chiller','En proceso de cotización'],
  ['Frozen Processed Fruits SAC',0,0.2,null,'Cámara de congelados','En proceso de cotización'],
  ['Prolan',800000,0.6,10,'Ampliación de la planta San Fernando - Chincha','En proceso de cotización'],
  ['Frutos De Oro',800000,0.8,8,'Cámaras de C02 y freón','En proceso de cotización'],
  ['Broom frío',2850000,0.4,12,'3 Cámaras y pasillo de despacho','En proceso de cotización'],
  ['Sociedad Agrícola Drokasa S.A.',400000,0.6,9,'Planta antigua de espárragos - mejoras','En proceso de cotización'],
  ['Cementos Pacasmayo',128992.98,0.2,9,'Instalación de 2 Chilleres - Ecuador','En proceso de cotización'],
  ['2M',180000,0.6,7,'Ampliación de planta de arándanos','En proceso de cotización'],
  ['Zedina',75928,0.2,7,'Áreas de inyección y proporcionado de carnes','En proceso de cotización'],
  ['Country Home',0,0.2,9,'Cámara de almacenamiento de producto terminado - limón','En proceso de cotización'],
  ['Torre Blanca',0,0.2,8,'Ingeniería y estudio de Planta','En proceso de cotización'],
  ['La Grama',1000000,0.2,9,'Cámara y túnel de congelado (CO2)','En proceso de cotización'],
  ['Hayduk',0,0.2,8,'Suministro e instalación de compresor','En proceso de cotización'],
  ['El Parque Alaya Packing Sac',0,0.2,8,'Ampliación de Packing Palta','En proceso de cotización'],
  ['Agrícola Huarmey',30000,0.6,7,'Implementación de cocina','En proceso de cotización'],
  ['Medlog Ica',5800000,0.4,10,'Planta empacadora de Uva y arándanos','En análisis del cliente'],
  ['AIB Motupe',645833,0.8,8,'Planta de congelado de fruta multipropósito (Motupe)','Negociación'],
  ['Quelen',1024378.89,0.4,12,'Planta empacadora de arándanos - 2da etapa','En análisis del cliente'],
  ['Hijuelas',6805759.24,0.6,9,'Laboratorio de crecimiento de arándanos','En análisis del cliente'],
  ['Agrofutura',75000,0.4,10,'Ampliación de planta multipropósito - uva','En análisis del cliente'],
  ['Gloria',4000000,0.6,12,'Planta de congelado multipropósito','En análisis del cliente'],
  ['Avocado Packing Company (Mission Produce)',4589259,0.2,1,'Layout base planta congelado APC Chao','En análisis del cliente'],
  ['Savia Corp',1493776.65,0.6,8,'Planta empacadora de fruta multipropósito','En análisis del cliente'],
  ['Perupez',1000000,0.6,10,'Ampliación de planta pesquera','En análisis del cliente'],
  ['Medlog Cayalti',3580000,0.2,1,'Planta empacadora de arándanos','En análisis del cliente'],
  ['Talma',35000,0.2,10,'Ingeniería','En análisis del cliente'],
  ['San Efisio Sac',772012.6,0.6,11,'Acopio de arándanos','En análisis del cliente'],
  ['Zedina',274409.85,0.2,11,'Planta de cárnicos','En análisis del cliente'],
  ['Productos Naturales de Exportación S.A. - Pronex S.A.',620035.84,0.2,7,'Cámara + Esclusa (Recepción/despacho)','En análisis del cliente'],
  ['Limatambo',259000,0.05,1,'Cámara 140 ps y 1 túnel de 20 pallets (freón)','En análisis del cliente'],
  ['Agrofloral',23500,0.2,7,'Suministro e instalación de Chiller','En análisis del cliente'],
  ['Agrícola Huarmey',272704.88,0.6,7,'Planta empacadora de arándanos // 5 Esclusas','En análisis del cliente'],
  ['Frutos De Oro',100000,0.6,8,'Sistema de frío IQF','En análisis del cliente'],
  ['AIB Chincha',60000,0.6,9,'Evaporador para túnel estático 2 (Chincha)','En análisis del cliente'],
  ['Emergent Cold',0,0.2,9,'Suministro e instalación de compresor','En proceso de cotización']
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

/* Objetivos estratégicos 2026 — datos reales del Excel */
const OBJ5 = [
  {id:1, num:'01', cat:'Comercial', name:'Venta Comercial', icon:'📈',
   pct:94.2, pctLabel:'94.20', color:'#185fa5', colorBg:'#dbeef9', colorDark:'#0e4a7a',
   status:'ok', stxt:'En ritmo',
   metaLabel:'$30M anual',
   stats:[
     {lbl:'Acumulado Ene–Jun', val:'$28.26M', cls:'c-ok'},
     {lbl:'Meta anual', val:'$30.00M', cls:''},
     {lbl:'Pendiente', val:'$1.74M', cls:''},
     {lbl:'vs Ene–Jun 2025', val:'+48.55%', cls:'c-ok'}
   ],
   minis:[
     {lbl:'Pendiente meta', val:'$1.74M'},
     {lbl:'Margen 2026', val:'15.32%'}
   ]},
  {id:2, num:'02', cat:'Tecnología CO₂', name:'Proyectos CO₂', icon:'❄️',
   pct:0, pctLabel:'0.00', color:'#10b981', colorBg:'#d1fae5', colorDark:'#065f46',
   status:'crit', stxt:'En riesgo',
   metaLabel:'2 proyectos',
   stats:[
     {lbl:'Proyectos vendidos', val:'0 / 2', cls:'c-crit'},
     {lbl:'Pipeline activo', val:'4 oport.', cls:''},
     {lbl:'Importe pipeline', val:'$3.75M', cls:''},
     {lbl:'Proyectos vendidos', val:'0/2', cls:''}
   ],
   minis:[
     {lbl:'Oportunidades', val:'4 activas'},
     {lbl:'Importe pot.', val:'$3.75M'}
   ]},
  {id:4, num:'03', cat:'Nuevas líneas', name:'Valor Sin Frío', icon:'🏗️',
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
  {id:3, num:'04', cat:'Diversificación', name:'Clientes No Agro', icon:'🏭',
   pct:50, pctLabel:'50.00', color:'#0891b2', colorBg:'#e0f7fa', colorDark:'#164e63',
   status:'warn', stxt:'En seguimiento',
   metaLabel:'4 clientes',
   stats:[
     {lbl:'Logrados', val:'2 / 4', cls:'c-warn'},
     {lbl:'Pendiente', val:'2 clientes', cls:''},
     {lbl:'Pipeline no agro', val:'13 oport.', cls:''},
     {lbl:'Importe pipeline', val:'$17.74M', cls:''}
   ],
   minis:[
     {lbl:'Logrados', val:'2 de 4'},
     {lbl:'En pipeline', val:'13 oport.'}
   ]},
  {id:5, num:'05', cat:'Cross Selling', name:'Cross Selling – Frioteam', icon:'🔧',
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
  /* Horizonte de forecast: mes actual (Jul 2026) hasta Abr 2027 — evita ambigüedad entre
     los meses Ene–Abr (2027) y el resto del año en curso (2026). */
  var FORECAST_HORIZON = [
    {m:7,  lbl:'Jul 26'}, {m:8,  lbl:'Ago 26'}, {m:9,  lbl:'Sep 26'}, {m:10, lbl:'Oct 26'},
    {m:11, lbl:'Nov 26'}, {m:12, lbl:'Dic 26'}, {m:1,  lbl:'Ene 27'}, {m:2,  lbl:'Feb 27'},
    {m:3,  lbl:'Mar 27'}, {m:4,  lbl:'Abr 27'}
  ];
  var FORECAST_HORIZON_MONTHS = FORECAST_HORIZON.map(function(h){ return h.m; });
  var FORECAST_HORIZON_LABELS = FORECAST_HORIZON.map(function(h){ return h.lbl; });
  function horizonIdx(m) { return FORECAST_HORIZON_MONTHS.indexOf(m); }
  var PROB_LABELS = [['all','Todas'],['0','0%'],['5','5%'],['20','20%'],['40','40%'],['60','60%'],['80','80%'],['100','100%']];
  var _chPipeSeas = null;
  var _pipeSeasCache = {};
  var _pipeMesSel = 'all';
  var _pipeStageSel = null;
  var _pipeClienteFocus = 'all';
  var _pipeClienteSearch = '';
  var _pipeClienteMes = 'all';
  function rowMatchesClienteMes(r) { return _pipeClienteMes === 'all' || (r[3] != null && String(r[3]) === String(_pipeClienteMes)); }

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
        var mesLbl = r[3] != null ? MESES_ABR[r[3]-1] : '—';
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
  function rowMatchesMes(r) { return _pipeMesSel === 'all' || (r[3] != null && String(r[3]) === String(_pipeMesSel)); }
  function forecastRows() { return PIPE_ROWS.filter(function(r){ return rowMatchesProb(r) && rowMatchesEstado(r) && rowMatchesMes(r); }); }

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
  function renderMesSelect() {
    var el = document.getElementById('pfMes'); if (!el) return;
    el.innerHTML = '<option value="all">Todos los meses</option>' + MESES_ABR.map(function(m,i){ return '<option value="' + (i+1) + '">' + m + '</option>'; }).join('');
    el.value = _pipeMesSel;
  }
  var pfProbEl = document.getElementById('pfProb');
  if (pfProbEl) pfProbEl.addEventListener('click', function(e) {
    var t = e.target.closest('.pf-chip'); if (!t) return;
    toggleSel(_pipeProbSel, t.dataset.prob);
    renderProbChips(); renderForecastAll();
  });
  var pfEstadoEl = document.getElementById('pfEstado');
  if (pfEstadoEl) pfEstadoEl.addEventListener('click', function(e) {
    var t = e.target.closest('.pf-chip'); if (!t) return;
    toggleSel(_pipeEstadoSel, t.dataset.estado);
    renderEstadoChips(); renderForecastAll();
  });
  var pfMesEl = document.getElementById('pfMes');
  if (pfMesEl) pfMesEl.addEventListener('change', function() { _pipeMesSel = this.value; renderForecastAll(); });

  function renderForecastKpis() {
    var rows = forecastRows();
    var a = agg(rows);
    var fixedA = agg(activeRows());
    var peakM = null, peakVal = -1;
    FORECAST_HORIZON.forEach(function(h) {
      var mAgg = agg(rows.filter(function(r){ return r[3]===h.m; }));
      if (mAgg.importe > peakVal) { peakVal = mAgg.importe; peakM = h.m; }
    });
    var peakLbl = peakVal > 0 ? FORECAST_HORIZON_LABELS[horizonIdx(peakM)] : '—';
    var peakCtx = peakVal > 0 ? ('Importe: ' + fmtEjecutivo(peakVal)) : 'Sin cierres estimados en el filtro';
    var html = ''
      + kpiCard('#1E3A5F', 'Pipeline Bruto Total', fmtEjecutivo(fixedA.importe), 'Importe de todas las oportunidades activas', null)
      + kpiCard('#0F6E56', 'Forecast', fmtEjecutivo(a.importe), a.count + ' oportunidades seg&uacute;n filtro', null)
      + kpiCard('#3EC6AC', 'Oportunidades', String(a.count), 'N&uacute;mero de oportunidades filtradas', null)
      + kpiCard('#D97706', 'Mes Pico', peakLbl, peakCtx, null);
    var el = document.getElementById('pipeKpiForecast');
    if (el) el.innerHTML = html;
  }

  function renderPipeSeasChart() {
    var rows = forecastRows();
    var byMonthEtapa = {};
    PIPE_ESTADOS.forEach(function(e) {
      byMonthEtapa[e] = [];
      for (var m=0; m<FORECAST_HORIZON.length; m++) byMonthEtapa[e].push({importe:0, count:0, probSum:0, probN:0});
    });
    rows.forEach(function(r) {
      if (r[3] == null) return;
      var idx = horizonIdx(r[3]);
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
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: {duration:450, easing:'easeInOutQuart'},
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
    var rows = allFiltered.filter(function(r){ return r[3] != null && horizonIdx(r[3]) !== -1; });
    var body = '';
    var totCount = 0, totImporte = 0, totProbSum = 0, totProbN = 0;
    FORECAST_HORIZON.forEach(function(h) {
      var mr = rows.filter(function(r){ return r[3]===h.m; });
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
     Reutiliza el mismo horizonte Jul 26–Abr 27 para que los meses fuera de 2026 (Ene–Abr)
     se lean sin ambigüedad como 2027. */
  function renderClienteMesSelect() {
    var el = document.getElementById('pipeClienteMes'); if (!el) return;
    el.innerHTML = '<option value="all">Todos los meses</option>' + FORECAST_HORIZON.map(function(h) {
      return '<option value="' + h.m + '">' + h.lbl + '</option>';
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
        var mesLbl = r[3] != null ? MESES_ABR[r[3]-1] : '—';
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
    renderMesSelect();
    renderForecastAll();
    renderClienteMesSelect();
    renderClienteTabs();
    renderClienteGroups();
  }
  window._renderPipeAll = renderPipeAll;

  _pipeStageSel = pickDefaultStage();
  renderPipeAll();
})();

