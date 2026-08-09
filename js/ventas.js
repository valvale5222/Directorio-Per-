/* ============================================================
   DATA — Fuente: DATA_PRODUC_25.07.xlsx
   ============================================================ */
const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

/* ── Ventas acumuladas por año (US$ MM) — 2021-2026 ── */
const VC = {
  21: [1.81,2.90,4.02,6.08,8.59,12.18,14.10,15.24,16.51,16.55,17.70,20.31],
  22: [0.23,4.10,7.70,13.93,19.16,20.58,24.06,25.93,27.14,27.29,28.59,33.20],
  23: [0.67,1.19,3.60,5.33,8.10,9.09,10.60,11.64,11.67,12.26,13.67,15.29],
  24: [0.08,1.25,4.84,6.46,9.58,10.74,12.30,12.88,13.21,14.88,15.35,15.45],
  25: [0.20,1.29,7.91,12.52,14.75,19.02,19.91,25.27,29.34,31.33,33.76,34.77],
  26: [4.36,7.94,8.42,12.69,25.73,28.59,29.10,null,null,null,null,null]
};

/* ── Margen ponderado acumulado (%) — 2021-2026 ── */
const MCA = {
  21: [15.81,14.17,15.05,10.03,11.49,12.88,13.44,12.43,12.71,12.71,13.10,13.41],
  22: [14.98,13.74,14.94,10.66,12.52,12.83,13.39,13.50,13.97,13.98,14.06,14.10],
  23: [17.73,17.78,15.29,16.51,17.68,17.52,17.49,17.58,17.56,17.46,16.90,17.09],
  24: [16.67,16.42,15.36,15.21,15.55,15.83,15.30,15.25,15.26,15.21,15.30,15.30],
  25: [15.20,15.48,15.11,15.82,15.91,15.49,15.40,15.80,15.81,15.92,16.02,15.96],
  26: [15.10,15.77,15.90,16.69,15.34,15.32,15.36,null,null,null,null,null]
};

/* ── Ventas acumuladas — Venta de Servicios (VSA + VSI, US$ MM) ── */
const VC_SRV = {
  21: [0,0.02,0.02,0.04,0.04,0.04,0.04,0.09,0.11,0.11,0.12,0.12],
  22: [0,0,0,0,0,0,0,0,0,0,0,0],
  23: [0,0,0,0,0,0,0,0,0,0,0,0],
  24: [0,0,0,0,0,0,0,0,0,0,0,0],
  25: [0,0,0.03,0.05,0.05,0.06,0.11,0.21,0.30,0.32,0.32,0.33],
  26: [0,0.08,0.08,0.08,0.09,0.10,0.16,null,null,null,null,null]
};

/* ── Ventas acumuladas SIN OO.CC y EE.MM (US$ MM) — cruce por CODIGO PROYECTO
   contra hoja "OO.CC Y EEMM"; reemplaza venta/margen solo en los proyectos
   con código coincidente, resto de la data cruda queda igual ── */
const VC_OOCC = {21:[1.55,3.22,4.34,6.4,8.91,12.5,14.42,15.56,16.83,16.87,18.01,20.63],22:[0.23,4.1,7.7,13.33,18.47,19.9,23.37,25.24,25.67,25.81,27.12,30.27],23:[0.67,1.19,3.09,4.62,7.39,8.38,9.88,10.92,10.95,11.55,12.96,14.65],24:[0.08,1,4.59,6.15,9.26,10.42,11.98,12.56,12.9,14.34,14.81,14.91],25:[0.2,1.17,6.12,10.73,12.96,16.51,17.4,22.92,26.99,28.98,31.41,32.42],26:[4.25,7.82,8.31,12.57,21.84,24.70,25.21,null,null,null,null,null]};

/* ── Margen ponderado acumulado SIN OO.CC y EE.MM (%) — usa margen frío ajustado
   ponderado por venta ajustada para los proyectos con código coincidente ── */
const MCA_OOCC = {21:[16.69,13.93,14.81,10.12,11.5,12.86,13.4,12.42,12.69,12.7,13.07,13.38],22:[14.98,13.74,14.94,10.67,12.65,12.96,13.51,13.61,14.21,14.22,14.28,14.48],23:[17.73,17.78,16.27,17.55,18.44,18.18,18.05,18.09,18.07,17.93,17.29,17.56],24:[16.67,17.83,15.62,15.61,15.83,16.08,15.5,15.45,15.45,15.46,15.55,15.54],25:[15.2,16.06,16.43,16.69,16.43,16.06,15.93,16.27,16.22,16.31,16.38,16.31],26:[15.23,15.85,15.98,16.75,16.06,15.95,15.98,null,null,null,null,null]};

/* Alias legacy para compatibilidad con otras secciones */
const V = { 23:VC[23], 24:VC[24], 25:VC[25], 26:VC[26] };
const M = { 23:MCA[23], 24:MCA[24], 25:MCA[25], 26:MCA[26] };


/* ============================================================
   DATA ESTACIONALIDAD — Fuente: DATA_PRODUC_25.07.xlsx
   Hojas "7. Análisis por Zona" y "8. Estacionalidad"
   ============================================================ */

/* Ventas mensuales por zona (US$ nominales) — 2021-2026 */
const ZMON = {
  total:{
    21:[1810393,1089232,1116870,2068493,2505141,3589384,1917228,1140241,1276015,33998,1148205,2615340],
    22:[229757,3871836,3602116,6230558,5222935,1427790,3476462,1870213,1212619,142300,1305490,4607690],
    23:[673095,516517,2410566,1729389,2771063,993087,1503733,1039788,27778,594477,1413141,1616741],
    24:[77020,1168612,3590757,1626869,3115788,1156829,1562516,578586,334649,1672198,470764,96562],
    25:[197251,1096221,6615418,4607683,2233583,4274626,888259,5353131,4071840,1992459,2432241,1003761],
    26:[4362016,3578570,481539,4267062,13044891,2860617,503373,0,0,0,0,0]
  },
  norte:{
    21:[1073934,257020,379433,2041744,1559152,482827,1024067,488536,150224,20343,312581,1334431],
    22:[57347,3433230,215660,2585750,4144792,100194,141924,1721571,1123247,17429,133299,2413],
    23:[388659,11674,2147024,1699794,343575,132426,2925,640313,6251,3357,31021,1559462],
    24:[18480,371629,2331665,1599788,192553,6405,1238261,65145,222056,135702,60851,11261],
    25:[3882,1081789,4713415,3672249,1407724,2139804,412648,1136674,4050638,1446019,2162000,10566],
    26:[3200000,1837982,292455,187219,11543568,17810,4500,0,0,0,0,0]
  },
  centro:{
    21:[385223,706847,133807,2826,791516,1851,259402,0,974211,100,569506,664624],
    22:[124425,107517,16979,1084629,19072,340752,146621,20754,50056,0,292200,4423682],
    23:[0,256151,36755,13717,522198,121000,550208,63970,7551,4745,88658,22000],
    24:[3047,505514,6657,5052,1404340,55025,0,205000,79941,0,404267,0],
    25:[0,3092,38670,117308,227378,0,159825,99000,0,514967,0,360886],
    26:[946218,41690,0,144516,382560,10600,57857,0,0,0,0,0]
  },
  sur:{
    21:[351236,125365,603630,23923,154473,3104706,633759,651705,151580,13555,266118,616285],
    22:[47985,331089,3369477,2560180,1059071,986844,3187916,127889,39316,124871,879990,181595],
    23:[284436,248692,226787,15878,1905291,739661,950600,335505,13976,586375,1293462,35279],
    24:[55493,291470,1252435,22029,1518895,1095400,324255,308440,32652,1536495,5646,85301],
    25:[193369,11340,1863333,818127,598482,2134822,315785,4117457,21202,31474,270241,632309],
    26:[215798,1698898,189083,3935327,1118763,2832208,441016,0,0,0,0,0]
  }
};

/* Estacionalidad promedio por mes (2021-2026) */
const SEAS_PCT = [5.0,7.2,12.7,13.1,19.6,9.7,7.4,6.2,4.0,3.5,4.8,6.8];
const SEAS_AVG_M = [1224922,1886831,2969544,3421676,4815567,2383722,1641929,1663660,1153817,739239,1128307,1656682];


/* ============================================================
   DATA ANÁLISIS DETALLADO — Fuente: "2. Análisis Anual"
   ============================================================ */

/* Refrigerante: Freón / Amoniaco / Otros (US$ MM) */
const REF_DATA = {
  freon:    [9.72,11.78,10.02,6.48,6.47,5.25],
  amoniaco: [9.84,20.44, 4.06,7.45,21.03,21.82],
  otros:    [0.75, 0.97, 1.21,1.53, 7.26, 2.03]
};

/* Tipo de venta: PR / AD / VSA / VSI (% participación y montos nominales) */
const TCV_PCT = {
  PR: [95.3,85.3,93.2,90.8,95.5,95.30],
  AD: [ 4.1, 3.3, 6.8, 9.2, 3.5, 4.15],
  VSA:[ 0.3, 0.0, 0.0, 0.0, 0.9, 0.52],
  VSI:[ 0.3, 0.0, 0.0, 0.0, 0.1, 0.03]
};
const TCV_MONTO = {
  PR: [19355389,28303498,14249025,14024848,33216546,27730585],
  AD: [  832200, 1109472, 1040349, 1426301, 1219229, 1208141],
  VSA:[   52000,       0,       0,       0,  306698,  150872],
  VSI:[   69252,       0,       0,       0,   24000,    8470]
};

/* Margen por refrigerante por año (%) */
/* Configuración visual por año para gráficos de ventas */
const VT_YR_CFG = [
  {yr:21,label:'2021',c:'#B8C4D0',d:[5,4],w:1.5,r:2,  hr:4  },
  {yr:22,label:'2022',c:'#9AAEC2',d:[5,4],w:1.5,r:2,  hr:4  },
  {yr:23,label:'2023',c:'#7B98B2',d:[4,3],w:1.5,r:2.5,hr:4.5},
  {yr:24,label:'2024',c:'#F59E0B',d:[],  w:2,  r:3.5,hr:5.5},
  {yr:25,label:'2025',c:'#3EC6AC',d:[5,3],w:2.5,r:4,  hr:6  },
  {yr:26,label:'2026',c:'#0A1E64',d:[],  w:3.5,r:5.5,hr:8   }
];

let _vtFilter = 'frio'; /* legacy compat */
let _vtExclSrv  = false; /* toggle: exclude VSA+VSI */
let _vtExclOocc = false; /* toggle: exclude OO.CC   */

/* Compute effective ventas dataset after exclusions */
function _vtEffData() {
  var base = _vtExclOocc ? VC_OOCC : VC;
  if (!_vtExclSrv) return base;
  var r = {};
  Object.keys(base).forEach(function(yr) {
    r[yr] = base[yr].map(function(v, i) {
      if (v === null) return null;
      var s = (VC_SRV[yr] && VC_SRV[yr][i] != null) ? VC_SRV[yr][i] : 0;
      return Math.round((v - s) * 1000) / 1000;
    });
  });
  return r;
}

/* Margen ponderado acumulado efectivo — solo responde al toggle OO.CC/EE.MM
   (no hay desagregación de margen por segmento de servicios en la fuente) */
function _vtEffMargin() {
  return _vtExclOocc ? MCA_OOCC : MCA;
}

/* Último valor no-nulo de un array acumulado — cierre de año (o YTD para 2026) */
function _vtYearClose(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== null && arr[i] !== undefined) return arr[i];
  }
  return null;
}
function _vtAnnualCloseArr(data) {
  return VT_YR_CFG.map(function(cfg) { return _vtYearClose(data[cfg.yr]); });
}

/* Actualiza únicamente los 4 gráficos gobernados por el filtro de Segmento.
   El margen (chMargenAcum y chMargenAnualProgress) no se recalcula por segmento:
   no existe desagregación de margen por segmento en la fuente de datos, así que
   se mantiene el margen total para no inventar cifras. */
function updateSegmentCharts(data) {
  if (_chVA) {
    _chVA.data.datasets.forEach(function(ds, i) { ds.data = data[VT_YR_CFG[i].yr]; });
    _chVA.update('active');
  }
  if (_chVAB) {
    _chVAB.data.datasets[0].data = _vtAnnualCloseArr(data);
    _chVAB.update('active');
  }
  var mdata = _vtEffMargin();
  if (_chMA) {
    _chMA.data.datasets.forEach(function(ds, i) { ds.data = mdata[VT_YR_CFG[i].yr]; });
    _chMA.update('active');
  }
  if (_chMAP) {
    _chMAP.data.datasets[0].data = _vtAnnualCloseArr(mdata);
    _chMAP.update('active');
  }
}

/* Multi-toggle filter (replaces setVtFilter) */
function vtToggle(seg, el) {
  if (seg === 'srv') {
    _vtExclSrv = !_vtExclSrv;
    el.classList.toggle('off', _vtExclSrv);
  } else {
    _vtExclOocc = !_vtExclOocc;
    el.classList.toggle('off', _vtExclOocc);
  }
  updateSegmentCharts(_vtEffData());
  _vtUpdateHeroMargen();
}

/* KPI "Margen ponderado" del hero de Ventas — único elemento del hero que
   reacciona a los segmentadores del tab Evolución de Ventas. Reutiliza
   _vtEffMargin()/_vtYearClose() (misma base filtrada que chMargenAcum y
   chMargenAnualProgress); fuera de ese tab conserva el valor global original. */
var _vtHeroMargenGlobal = { val: 15.36, meta: 18 };
function _vtUpdateHeroMargen() {
  var valEl = document.getElementById('vtHeroMargenVal');
  var subEl = document.getElementById('vtHeroMargenSub');
  if (!valEl || !subEl) return;
  var activeTab = document.querySelector('#vtTabs .vt-tab-btn.active');
  var inEvol = !!activeTab && activeTab.dataset.vtview === 'evol';
  var val = inEvol ? _vtYearClose(_vtEffMargin()[26]) : _vtHeroMargenGlobal.val;
  if (val === null || val === undefined) val = _vtHeroMargenGlobal.val;
  var diff = val - _vtHeroMargenGlobal.meta;
  var up = diff >= 0;
  valEl.textContent = val.toFixed(2) + '%';
  subEl.style.color = up ? '#4ade80' : '#f87171';
  subEl.innerHTML = (up ? '&#8593;' : '&#8595;') + ' Meta ' + _vtHeroMargenGlobal.meta + '% &middot; ' +
    (up ? '+' : '&minus;') + Math.abs(diff).toFixed(2) + ' pp';
}

/* Legacy wrapper kept for backward compat */
function setVtFilter(type, btn) {
  if (type === 'servicios') vtToggle('srv', document.getElementById('vtTogSrv') || btn);
  else if (type === 'oocc') vtToggle('oocc', document.getElementById('vtTogOocc') || btn);
}

/* Render inline legend for chart cards */
function _renderVtLegend(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = VT_YR_CFG.map(function(c) {
    var style = 'border-color:' + c.c + ';border-style:' +
      (c.d && c.d.length ? 'dashed' : 'solid') + ';border-width:' + c.w + 'px';
    return '<span class="vt-leg-item"><span class="vt-leg-line" style="' + style + '"></span>' + c.label + '</span>';
  }).join('');
}
_renderVtLegend('vtLeg1');
_renderVtLegend('vtLeg2');
_renderVtLegend('seasLeg');

function _vtDs(data) {
  return VT_YR_CFG.map(function(cfg) {
    var is26 = cfg.yr === 26;
    var is25 = cfg.yr === 25;
    var is24 = cfg.yr === 24;
    /* Solid fill for protagonists; open (white) circles for background years */
    var ptBg = is26 ? '#0A1E64' : (is25 ? '#3EC6AC' : (is24 ? '#F59E0B' : '#fff'));
    var ptBw = is26 ? 2.5 : (is25 || is24 ? 2 : 1.5);
    return {
      label: cfg.label,
      data: data[cfg.yr],
      borderColor: cfg.c,
      borderWidth: cfg.w,
      borderDash: cfg.d,
      /* Permanent visible markers — size varies by year prominence */
      pointRadius: cfg.r,
      pointHoverRadius: cfg.hr,
      pointBackgroundColor: ptBg,
      pointBorderColor: cfg.c,
      pointBorderWidth: ptBw,
      /* Hover: white fill + colored border for clean pop effect */
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: cfg.c,
      pointHoverBorderWidth: is26 ? 3 : 2,
      fill: false,
      spanGaps: false
    };
  });
}

/* Zona × mes (US$ MM) — DATA VENTAS */
const Z = {
  23:{n:[0.39,0.01,2.15,1.70,0.34,0.13,0,0.64,0.01,0,0.03,1.56],
      s:[0.28,0.25,0.23,0.02,1.91,0.74,0.95,0.34,0,0.59,1.29,0.04],
      c:[0,0.26,0.04,0.01,0.52,0.12,0.55,0.06,0.01,0,0.09,0.02],
      e:[0,0,0,0,0,0,0,0,0.20,0,0.03,0]},
  24:{n:[0.02,0.37,2.33,1.60,0.19,0.01,1.24,0.07,0.22,0.14,0.06,0.01],
      s:[0.06,0.29,1.25,0.02,1.52,1.10,0.32,0.31,0.03,1.54,0.01,0.09],
      c:[0,0.51,0.01,0.01,1.40,0.06,0,0.20,0.08,0,0.40,0],
      e:[0,0.02,0,0,0,0,0,0,0,0.82,0.19,0]},
  25:{n:[0,1.08,4.69,3.67,1.41,2.14,0.41,1.14,4.05,1.45,2.16,0.01],
      s:[0.19,0.01,1.86,0.82,0.60,2.13,0.32,4.12,0.02,0.03,0.27,0.63],
      c:[0,0,0.04,0,0.23,0,0.16,0.10,0,0.51,0,0.36],
      e:[0,0,0,0,0,0,0,0,0,0,0,0]},
  26:{n:[3.20,1.84,0.29,0.19,11.54,0.01,0,0,0,0,0,0],
      s:[0.22,1.70,0.19,3.94,1.12,2.51,0,0,0,0,0,0],
      c:[0.95,0.04,0,0.14,0.38,0.01,0,0,0,0,0,0],
      e:[0,0,0,0,0,0,0,0,0,0,0,0]}
};


/* ============================================================
   DATA VENTAS 2026 — Fuente única: DATA_PRODUC_25.07.xlsx (hoja "Data Cruda")
   Filtro aplicado: Año = 2026, Mes = Enero..Julio → 90 registros reales.
   Cada fila = 1 operación real (columna "Importe total" y "Margen Comercial").
   Nombres normalizados a Title Case desde el valor exacto del Excel (sin inventar).
   Se fusionaron 2 pares de variantes de escritura del mismo cliente (mismo
   nombre base, misma zona, error evidente de tipeo en la razón social):
     "TAL S A" + "TAL S.A." → "Tal S.A."
     "AGRICOLA HUARMEY S.A." + "AGRICOLA HUARMEY S.A.C." → "Agricola Huarmey S.A.C."
   No se fusionó ningún otro cliente: cada razón social distinta se mantuvo tal cual.
   ============================================================ */
const ventas2026 = [
  {mes:'May',cli:'Agroberries Peru S.A.C.',zona:'Norte',imp:9500000,mg:13.78,tipo:'PR'},
  {mes:'Abr',cli:'Corporacion Agrolatina S.A.C.',zona:'Sur',imp:2320000,mg:18.87,tipo:'PR'},
  {mes:'Jun',cli:'Procesos Agroindustriales Sociedad Anonima',zona:'Sur',imp:2034100.57,mg:14.01,tipo:'PR'},
  {mes:'Ene',cli:'Tal S.A.',zona:'Norte',imp:1700000,mg:13.09,tipo:'PR'},
  {mes:'May',cli:'Bomarea S.R.L.',zona:'Norte',imp:1560000,mg:13.81,tipo:'PR'},
  {mes:'Ene',cli:'Bomarea S.R.L.',zona:'Norte',imp:1500000,mg:15.48,tipo:'PR'},
  {mes:'Feb',cli:'Ta Export S.A.C.',zona:'Sur',imp:1460000,mg:16.35,tipo:'PR'},
  {mes:'Ene',cli:'Procesadora Torre Blanca S.A.C',zona:'Centro',imp:718498.3,mg:19.46,tipo:'PR'},
  {mes:'May',cli:'Procesadora Laran SAC',zona:'Sur',imp:715885.05,mg:13.27,tipo:'PR'},
  {mes:'Feb',cli:'Agroberries Peru S.A.C.',zona:'Norte',imp:552380.14,mg:15.39,tipo:'PR'},
  {mes:'Feb',cli:'Camposol S.A.',zona:'Norte',imp:497385.27,mg:15.1,tipo:'PR'},
  {mes:'Abr',cli:'Estanterias Metalicas J.R.M. S.A.C',zona:'Sur',imp:455000,mg:14.24,tipo:'PR'},
  {mes:'Abr',cli:'Agroindustrias Aib S.A',zona:'Sur',imp:394694.81,mg:15.16,tipo:'PR'},
  {mes:'Abr',cli:'Agricola Pampa Baja S.A.C.',zona:'Sur',imp:392255.23,mg:13.94,tipo:'PR'},
  {mes:'May',cli:'Qali Fruits S.A.C.',zona:'Centro',imp:379901.83,mg:15.38,tipo:'PR'},
  {mes:'Feb',cli:'Tal S.A.',zona:'Norte',imp:352587.8,mg:16.79,tipo:'PR'},
  {mes:'Ene',cli:'T & T Fruits S.A.',zona:'Centro',imp:227719.49,mg:13.89,tipo:'PR'},
  {mes:'May',cli:'Agricola Pampa Baja S.A.C.',zona:'Sur',imp:221756.97,mg:11.9,tipo:'PR'},
  {mes:'Mar',cli:'Viveros El Tambo S.A.C.',zona:'Norte',imp:216754.9,mg:19.52,tipo:'PR'},
  {mes:'Ene',cli:'Imbarex S.A.',zona:'Sur',imp:215000,mg:15,tipo:'AD'},
  {mes:'Jun',cli:'Sun Fruits Exports S.A.',zona:'Sur',imp:211139.96,mg:22.69,tipo:'PR'},
  {mes:'Abr',cli:'Universidad Federico Henriquez Y Carvajal',zona:'Sur',imp:206089.67,mg:37.2,tipo:'PR'},
  {mes:'Feb',cli:'Arca Continental Lindley S.A.',zona:'Norte',imp:203678.39,mg:21.3,tipo:'PR'},
  {mes:'Jun',cli:'Sun Fruits Exports S.A.',zona:'Sur',imp:184026.24,mg:21.17,tipo:'PR'},
  {mes:'Abr',cli:'Agricola Huarmey S.A.C.',zona:'Norte',imp:169653.6,mg:16.29,tipo:'AD'},
  {mes:'Feb',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:118131.56,mg:15,tipo:'AD'},
  {mes:'Abr',cli:'Reiter Peruvian Berry S.A.',zona:'Sur',imp:110710,mg:14.17,tipo:'PR'},
  {mes:'Mar',cli:'Sociedad Agricola Drokasa S.A.',zona:'Sur',imp:105000,mg:17.92,tipo:'PR'},
  {mes:'May',cli:'Sociedad Agricola Drokasa S.A.',zona:'Sur',imp:103585.21,mg:17,tipo:'PR'},
  {mes:'Abr',cli:'Ingenieria En Cartones Y Papeles S.A.C',zona:'Centro',imp:101933.16,mg:20.03,tipo:'PR'},
  {mes:'May',cli:'Ara Foods Industry S.A.C.',zona:'Norte',imp:100000,mg:20,tipo:'PR'},
  {mes:'Feb',cli:'Berry Harvest S.A.',zona:'Norte',imp:97846.74,mg:15,tipo:'AD'},
  {mes:'May',cli:'Bomarea S.R.L.',zona:'Norte',imp:97000,mg:19,tipo:'AD'},
  {mes:'May',cli:'Q Pack S.A.C.',zona:'Norte',imp:80000.05,mg:17.15,tipo:'AD'},
  {mes:'May',cli:'Agricola Huarmey S.A.C.',zona:'Norte',imp:69630.79,mg:17.08,tipo:'PR'},
  {mes:'Mar',cli:'Smart Packing S.A.C.',zona:'Norte',imp:68825.16,mg:14.18,tipo:'PR'},
  {mes:'Jun',cli:'Sun Fruits Exports S.A.',zona:'Sur',imp:64950.84,mg:8.17,tipo:'PR'},
  {mes:'Feb',cli:'Florisert S.A.C.',zona:'Sur',imp:61715.57,mg:16.84,tipo:'PR'},
  {mes:'Abr',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:56577.26,mg:18.39,tipo:'AD'},
  {mes:'Mar',cli:'Imbarex S.A.',zona:'Sur',imp:54100,mg:20.15,tipo:'AD'},
  {mes:'Feb',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:53240.92,mg:19.5,tipo:'PR'},
  {mes:'Feb',cli:'Agroberries Peru S.A.C.',zona:'Norte',imp:50864.99,mg:15,tipo:'AD'},
  {mes:'Feb',cli:'Agroberries Peru S.A.C.',zona:'Norte',imp:38315,mg:30,tipo:'VSA'},
  {mes:'May',cli:'Agricola Huarmey S.A.C.',zona:'Norte',imp:36416.39,mg:18.58,tipo:'PR'},
  {mes:'May',cli:'Packing del Carmen S.A.C.',zona:'Sur',imp:36347.87,mg:17.64,tipo:'PR'},
  {mes:'Feb',cli:'Vitafoods Peru S.A.C.',zona:'Centro',imp:35000,mg:30,tipo:'VSA'},
  {mes:'Feb',cli:'Q Pack S.A.C.',zona:'Norte',imp:30773.49,mg:15,tipo:'AD'},
  {mes:'May',cli:'Berry Harvest S.A.',zona:'Norte',imp:27857.31,mg:19.15,tipo:'AD'},
  {mes:'Abr',cli:'Delice S.A.C',zona:'Centro',imp:25500,mg:23,tipo:'AD'},
  {mes:'May',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:24000,mg:18,tipo:'AD'},
  {mes:'May',cli:'Berry Harvest S.A.',zona:'Norte',imp:20966.56,mg:25,tipo:'AD'},
  {mes:'Mar',cli:'Agro Floral Peru S.A.C.',zona:'Sur',imp:19881.8,mg:16.14,tipo:'AD'},
  {mes:'May',cli:'Tal S.A.',zona:'Norte',imp:17671.66,mg:25,tipo:'AD'},
  {mes:'Abr',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:17565.18,mg:17.34,tipo:'PR'},
  {mes:'Abr',cli:'Delice S.A.C',zona:'Centro',imp:17083.21,mg:12.55,tipo:'AD'},
  {mes:'May',cli:'Agricola Pampa Baja S.A.C.',zona:'Sur',imp:12000,mg:30,tipo:'VSA'},
  {mes:'May',cli:'Q Pack S.A.C.',zona:'Norte',imp:10183.62,mg:17.29,tipo:'AD'},
  {mes:'Jun',cli:'Vitafoods Peru S.A.C.',zona:'Centro',imp:8470,mg:14.99,tipo:'VSI'},
  {mes:'May',cli:'El Parque Alaya Packing S.A.C.',zona:'Norte',imp:8441.32,mg:12.27,tipo:'AD'},
  {mes:'Jun',cli:'Consorcio Agricola Moquegua S.A.C.',zona:'Sur',imp:8240,mg:25.01,tipo:'PR'},
  {mes:'Feb',cli:'El Parque Alaya Packing S.A.C.',zona:'Norte',imp:7500,mg:15,tipo:'AD'},
  {mes:'Mar',cli:'Smart Packing S.A.C.',zona:'Norte',imp:6875,mg:14.24,tipo:'PR'},
  {mes:'Mar',cli:'Cia. de Exp. y Negocios Grles. S.A. (COEXA)',zona:'Sur',imp:6840.69,mg:8.06,tipo:'PR'},
  {mes:'Feb',cli:'Agro Floral Peru S.A.C.',zona:'Centro',imp:6690,mg:15,tipo:'AD'},
  {mes:'Feb',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:5810,mg:15,tipo:'AD'},
  {mes:'May',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:5725.28,mg:15.5,tipo:'AD'},
  {mes:'May',cli:'Bomarea S.R.L.',zona:'Norte',imp:5368.75,mg:20,tipo:'PR'},
  {mes:'May',cli:'Santa Sofia del Sur S.A.C.',zona:'Sur',imp:5187.52,mg:15,tipo:'AD'},
  {mes:'Feb',cli:'Danper Trujillo S.A.C.',zona:'Norte',imp:5000,mg:30,tipo:'VSA'},
  {mes:'May',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:4306.7,mg:18.2,tipo:'AD'},
  {mes:'Mar',cli:'Agro Floral Peru S.A.C.',zona:'Sur',imp:3261,mg:17.93,tipo:'AD'},
  {mes:'Jun',cli:'Agricola Pampa Baja S.A.C.',zona:'Sur',imp:2700,mg:30,tipo:'VSA'},
  {mes:'Jun',cli:'Q Pack S.A.C.',zona:'Norte',imp:2700,mg:-82.59,tipo:'AD'},
  {mes:'May',cli:'Procesadora Torre Blanca S.A.C',zona:'Centro',imp:2658.59,mg:29.47,tipo:'AD'},
  {mes:'Jun',cli:'Austral Group S.A.A',zona:'Norte',imp:2310,mg:12.94,tipo:'AD'},
  {mes:'Jun',cli:'Agro Floral Peru S.A.C.',zona:'Centro',imp:2130,mg:13.31,tipo:'AD'},
  {mes:'Jun',cli:'Smart Packing S.A.C.',zona:'Norte',imp:1996.83,mg:17,tipo:'PR'},
  {mes:'Jun',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:1900,mg:13.58,tipo:'AD'},
  {mes:'Jun',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:1414.83,mg:17.08,tipo:'AD'},
  {mes:'Feb',cli:'El Rocio S.A.',zona:'Norte',imp:890,mg:15,tipo:'AD'},
  {mes:'Ene',cli:'Uvica S.A.C.',zona:'Sur',imp:798,mg:15,tipo:'AD'},
  {mes:'Feb',cli:'Agroindustria Frutos de Oro S.A.C.',zona:'Norte',imp:760,mg:15,tipo:'AD'},
  {mes:'Jun',cli:'Sociedad Agricola 3P S.A.C.',zona:'Sur',imp:500,mg:20,tipo:'AD'},
  {mes:'Jul',cli:'Sociedad Agricola Drokasa S.A.',zona:'Sur',imp:435000,mg:16,tipo:'PR'},
  {mes:'Jun',cli:'Sociedad Agricola Drokasa S.A.',zona:'Sur',imp:325000,mg:16,tipo:'PR'},
  {mes:'Jul',cli:'In Vitro Lab Perú S.A.C.',zona:'Centro',imp:57857,mg:26,tipo:'VSA'},
  {mes:'Jun',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:7488.07,mg:13,tipo:'PR'},
  {mes:'Jul',cli:'Consorcio Agricola Moquegua S.A.C.',zona:'Sur',imp:6016,mg:25,tipo:'AD'},
  {mes:'Jul',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:4500,mg:23,tipo:'AD'},
  {mes:'Jun',cli:'Family Farms Perú S.R.L.',zona:'Sur',imp:1550,mg:20,tipo:'AD'}
];


/* ============================================================
   ESTACIONALIDAD — helpers de dataset y filtro de zona
   ============================================================ */
function _seasDsData(zone, yr) {
  var raw = ZMON[zone][yr];
  return raw.map(function(v, i) {
    if (yr === 26 && i >= 7) return null; /* meses sin datos en 2026 */
    return v;
  });
}

function _seasBuildDs(zone) {
  return VT_YR_CFG.map(function(cfg) {
    var yr = cfg.yr;
    var d = _seasDsData(zone, yr);
    var is26 = yr===26, is25 = yr===25, is24 = yr===24;
    return {
      label: cfg.label,
      data: d,
      borderColor: cfg.c,
      borderWidth: cfg.w,
      borderDash: cfg.d,
      pointRadius: cfg.r,
      pointHoverRadius: cfg.hr,
      pointBackgroundColor: is26?'#0A1E64':(is25?'#3EC6AC':(is24?'#F59E0B':'#fff')),
      pointBorderColor: cfg.c,
      pointBorderWidth: is26?2.5:(is25||is24?2:1.5),
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: cfg.c,
      pointHoverBorderWidth: is26?3:2,
      fill: false, spanGaps: false
    };
  });
}

function seasSetZone(btn) {
  /* Legacy wrapper — kept for backward compat; now delegates to hmapSetZone */
  hmapSetZone(btn);
}


/* ================================================================
   SECCIÓN 2 — MAPA DE CALOR PREMIUM DE ESTACIONALIDAD
   ================================================================ */
var _hmapZone = 'total';
var _hmTip = null;

function hmapSetZone(btn) {
  document.querySelectorAll('.zone-btn').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  _hmapZone = btn.dataset.z || 'total';
  _hmapRender();
}

function _hmTipShow(ev, title) {
  if (!_hmTip) {
    _hmTip = document.createElement('div');
    _hmTip.style.cssText = 'position:fixed;z-index:9999;pointer-events:none;opacity:0;'
      + 'transition:opacity .15s;background:rgba(9,12,30,.95);border:1px solid rgba(62,198,172,.28);'
      + 'border-radius:10px;padding:9px 14px;font-family:Inter,sans-serif;font-size:11px;'
      + 'font-weight:600;color:#fff;box-shadow:0 14px 40px rgba(10,10,30,.4),0 3px 10px rgba(10,10,30,.22);'
      + 'white-space:nowrap;letter-spacing:.2px';
    document.body.appendChild(_hmTip);
  }
  _hmTip.textContent = title;
  _hmTip.style.opacity = '1';
  _hmTip.style.left = (ev.clientX + 16) + 'px';
  _hmTip.style.top  = (ev.clientY - 40) + 'px';
}
function _hmTipHide() { if (_hmTip) _hmTip.style.opacity = '0'; }
function _hmTipMove(ev) {
  if (!_hmTip || _hmTip.style.opacity === '0') return;
  var tipW = _hmTip.offsetWidth || 180;
  var left = ev.clientX + 16;
  if (left + tipW > window.innerWidth - 10) left = ev.clientX - tipW - 10;
  _hmTip.style.left = left + 'px';
  _hmTip.style.top  = (ev.clientY - 40) + 'px';
}

function _hmapRender() {
  var el = document.getElementById('hmapGrid');
  if (!el) return;
  var zone = _hmapZone || 'total';
  var data = ZMON[zone] || ZMON.total;
  var mes  = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  var years = [21,22,23,24,25,26];

  /* Max value for color normalization (sqrt for perceptual balance) */
  var allVals = [];
  years.forEach(function(yr){
    (data[yr]||[]).forEach(function(v){ if(v && v>0) allVals.push(v); });
  });
  var vmax = allVals.length ? Math.max.apply(null,allVals) : 1;

  /* Progresión cromática por importe — paleta real de la app (celeste/azul → turquesa → ámbar → coral):
     azul frío (celeste #4FA8E0) → turquesa brand (#3EC6AC) → ámbar (#D97706) → coral (#D85A30).
     El coral queda reservado exclusivamente al importe más alto, sin connotación de alerta. */
  var stops = [[0,224,240,252],[0.22,79,168,224],[0.46,62,198,172],[0.70,217,119,6],[1,216,90,48]];
  function interpHm(t) {
    if(t<=0) return stops[0].slice(1);
    for(var i=1;i<stops.length;i++){
      if(t<=stops[i][0]){
        var a=stops[i-1],b=stops[i],f=(t-a[0])/(b[0]-a[0]);
        return [Math.round(a[1]+(b[1]-a[1])*f),Math.round(a[2]+(b[2]-a[2])*f),Math.round(a[3]+(b[3]-a[3])*f)];
      }
    }
    return stops[stops.length-1].slice(1);
  }

  function cellFmt(v) {
    if(!v||v===0) return '';
    if(v>=1000000) return '$'+(v/1000000).toFixed(1)+'M';
    if(v>=1000)    return '$'+Math.round(v/1000)+'K';
    return '$'+Math.round(v);
  }
  function cellTitle(yr,m,v) {
    var yStr='20'+(yr<10?'0':'')+yr;
    var vStr=v&&v>0?(v>=1000000?'$'+(v/1000000).toFixed(3)+'M':(v>=1000?'$'+Math.round(v/1000)+'K':'$'+v)):'Sin datos';
    return yStr+' · '+mes[m]+': '+vStr;
  }

  var h = '<table class="hmap-table"><thead><tr>';
  h += '<th class="hmap-yr-th" style="vertical-align:bottom;padding-bottom:8px;width:6.5%">&nbsp;</th>';
  mes.forEach(function(m){ h += '<th class="hmap-th">'+m+'</th>'; });
  h += '</tr></thead><tbody>';

  years.forEach(function(yr){
    var yData = data[yr]||[];
    var yStr  = '20'+(yr<10?'0':'')+yr;
    h += '<tr><td class="hmap-yr-th">'+yStr+'</td>';
    for(var m=0;m<12;m++){
      var v = yData[m];
      var isFuture = (yr===26 && m>=7);
      var isEmpty  = (v===null||v===undefined||v===0||isFuture);
      var tipText  = cellTitle(yr,m,isEmpty?0:v);
      if(isEmpty){
        var stripeStyle = isFuture
          ? 'background:repeating-linear-gradient(135deg,#edf1f7 0px,#edf1f7 4px,#e2e8f0 4px,#e2e8f0 8px)'
          : 'background:#f5f7fa';
        h += '<td class="hmap-cell" style="'+stripeStyle+';color:#c8d0de"'
          + ' onmouseenter="_hmTipShow(event,\''+tipText+'\')" onmouseleave="_hmTipHide()" onmousemove="_hmTipMove(event)"></td>';
      } else {
        var t  = Math.sqrt(v/vmax);
        var c  = interpHm(t);
        var bg = 'rgb('+c[0]+','+c[1]+','+c[2]+')';
        var lum = 0.299*c[0]+0.587*c[1]+0.114*c[2];
        var tx = lum>150?'#0A1E64':'#fff';
        var lbl= cellFmt(v);
        h += '<td class="hmap-cell" style="background:'+bg+';color:'+tx+'"'
          + ' onmouseenter="_hmTipShow(event,\''+tipText+'\')" onmouseleave="_hmTipHide()" onmousemove="_hmTipMove(event)">'+lbl+'</td>';
      }
    }
    h += '</tr>';
  });
  h += '</tbody></table>';
  el.innerHTML = h;

  /* Scale bar */
  var sb = document.getElementById('hmapScaleBar');
  if(sb){
    var sbH='';
    for(var i=0;i<30;i++){var c=interpHm(i/29);sbH+='<div style="flex:1;background:rgb('+c[0]+','+c[1]+','+c[2]+')"></div>';}
    sb.innerHTML = sbH;
  }
}

/* Initial render — runs after DOM is parsed */
(function(){ _hmapRender(); })();

if(typeof Chart!=='undefined'){
Chart.defaults.font.family = "'Inter','Segoe UI',sans-serif";
Chart.defaults.font.size = 10;
Chart.defaults.color = '#7b8db0';

const lineOpts = {
  responsive:true, maintainAspectRatio:false,
  plugins:{legend:{display:false}, tooltip:{mode:'index', intersect:false,
    callbacks:{label:ctx => {
      const v = ctx.parsed.y;
      if (v === null) return null;
      const lbl = ctx.dataset.label || '';
      return lbl + ': ' + (ctx.chart.canvas.id === 'chMargen' ? fmtPct(v) : fmtMM(v));
    }}}},
  interaction:{mode:'index', intersect:false},
  scales:{x:{grid:{display:false}}, y:{grid:{color:'rgba(0,0,0,.05)'}}},
  elements:{point:{radius:0, hoverRadius:4}, line:{tension:.35}}
};

const _elVA = document.getElementById('chVentasAcum');
const _elMA = document.getElementById('chMargenAcum');
/* External tooltip reads data-vt-fmt from canvas element (set in HTML) */
if (_elVA) {
  _chVA = new Chart(_elVA, {type:'line', data:{labels:meses, datasets:_vtDs(VC)},
    plugins:[window._sheenPlugin],
    options:{..._vtSharedOpts,
      animation:{..._vtSharedOpts.animation, onComplete:function(a){window._triggerSheen(a.chart);}},
      scales:{..._vtSharedOpts.scales,
        y:{..._vtSharedOpts.scales.y, ticks:{..._vtSharedOpts.scales.y.ticks,
          callback:function(v){return '$'+v+'MM';}}}}}});
}
if (_elMA) {
  _chMA = new Chart(_elMA, {type:'line', data:{labels:meses, datasets:_vtDs(MCA)},
    plugins:[window._sheenPlugin],
    options:{..._vtSharedOpts,
      animation:{..._vtSharedOpts.animation, onComplete:function(a){window._triggerSheen(a.chart);}},
      scales:{..._vtSharedOpts.scales,
        y:{..._vtSharedOpts.scales.y, min:8, max:20,
          ticks:{..._vtSharedOpts.scales.y.ticks, callback:function(v){return v+'%';}}}}}});
}

/* ── Evolución de ventas acumuladas · barras por cierre de año (respeta filtro de segmento) ── */
const VT_YR_LBL_YTD = ['2021','2022','2023','2024','2025','2026 YTD'];
const _elVAB = document.getElementById('chVentasAnualBar');
if (_elVAB) {
  _chVAB = new Chart(_elVAB, {
    type:'bar',
    data:{
      labels: VT_YR_LBL_YTD,
      datasets:[{
        data: _vtAnnualCloseArr(_vtEffData()),
        backgroundColor: VT_YR_CFG.map(function(c){ return c.c; }),
        borderRadius:{topLeft:10,topRight:10,bottomLeft:0,bottomRight:0},
        borderSkipped:false,
        maxBarThickness:54,
        barPercentage:0.62,
        categoryPercentage:0.7
      }]
    },
    plugins:[window._sheenPlugin],
    options:{
      responsive:true, maintainAspectRatio:false,
      animation:{duration:900, easing:'easeInOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(9,12,30,.95)', padding:{top:11,bottom:11,left:13,right:13}, cornerRadius:10,
          borderColor:'rgba(62,198,172,.25)', borderWidth:1,
          titleColor:'rgba(255,255,255,.4)', titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.85)', bodyFont:{size:12,weight:'600'},
          callbacks:{
            title:function(items){ return items.length ? items[0].label : ''; },
            label:function(ctx){ return 'Ventas acumuladas: ' + fmtMM(ctx.parsed.y); },
            afterLabel:function(ctx){ return ctx.dataIndex === 5 ? 'YTD Ene–Jul 2026' : null; }
          }
        }
      },
      scales:{
        x:{grid:{display:false}, border:{display:false}, ticks:{font:{size:10}, color:'#94a3b8'}},
        y:{grid:{color:'rgba(10,10,30,.05)'}, border:{display:false},
           ticks:{font:{size:10}, color:'#94a3b8', callback:function(v){return '$'+v+'MM';}}}
      }
    }
  });
}

/* ── Márgenes acumulados por año · barras horizontales progresivas + referencia meta 18% ──
   No se filtra por segmento: no existe desagregación de margen por segmento en la fuente.
   Color por año (mismo VT_YR_CFG que "Evolución de ventas acumuladas") para que ambos
   gráficos se lean como una misma familia visual; el cumplimiento vs meta ya lo comunican
   la línea punteada de 18% y el tooltip (+/- pp vs meta). */
const _mgnCloseArr = _vtAnnualCloseArr(MCA);
const _elMAP = document.getElementById('chMargenAnualProgress');
if (_elMAP) {
  _chMAP = new Chart(_elMAP, {
    type:'bar',
    data:{
      labels: VT_YR_LBL_YTD,
      datasets:[{
        data: _mgnCloseArr,
        backgroundColor: VT_YR_CFG.map(function(c){ return c.c; }),
        borderRadius:{topLeft:0,topRight:10,bottomLeft:0,bottomRight:10},
        borderSkipped:false,
        barThickness:20,
        categoryPercentage:0.7
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false, indexAxis:'y',
      animation:{duration:900, easing:'easeInOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(9,12,30,.95)', padding:{top:11,bottom:11,left:13,right:13}, cornerRadius:10,
          borderColor:'rgba(62,198,172,.25)', borderWidth:1,
          titleColor:'rgba(255,255,255,.4)', titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.85)', bodyFont:{size:12,weight:'600'},
          callbacks:{
            title:function(items){ return items.length ? items[0].label : ''; },
            label:function(ctx){
              var v = ctx.parsed.x, diff = v - 18;
              return ['Margen ponderado: ' + fmtPct(v), 'Meta: 18.00%', (diff>=0?'+':'') + diff.toFixed(2) + ' pp vs meta'];
            }
          }
        }
      },
      scales:{
        x:{min:0, max:22, grid:{color:'rgba(10,10,30,.05)'}, border:{display:false},
           ticks:{font:{size:10}, color:'#94a3b8', callback:function(v){return v+'%';}}},
        y:{grid:{display:false}, border:{display:false}}
      }
    },
    plugins:[{
      id:'metaLine18',
      afterDraw:function(chart){
        var xs = chart.scales.x, x = xs.getPixelForValue(18), c2 = chart.ctx;
        c2.save(); c2.strokeStyle = '#D85A30'; c2.lineWidth = 1.5; c2.setLineDash([4,3]);
        c2.beginPath(); c2.moveTo(x, chart.chartArea.top); c2.lineTo(x, chart.chartArea.bottom); c2.stroke();
        c2.restore();
      }
    }, window._sheenPlugin]
  });
}

/* Gráfico pipeline donut — removido (canvas reemplazado por funnel-v2 premium) */

/* Cover ring */
new Chart(document.getElementById('coverRing'), {type:'doughnut',
  data:{datasets:[{data:[1,1,2], backgroundColor:['#3EC6AC','#d97706','#D85A30'], borderWidth:0}]},
  options:{responsive:false, cutout:'68%', plugins:{legend:{display:false}, tooltip:{enabled:false}}, events:[]}});


/* ================================================================
   SECCIÓN 2 — ANÁLISIS DE ESTACIONALIDAD
   ================================================================ */

/* === Gráfico principal: ventas mensuales por zona === */
(function(){
  var el = document.getElementById('chSeas');
  if (!el) return;
  _chSeas = new Chart(el, {
    type: 'line',
    data: {labels: meses, datasets: _seasBuildDs('total')},
    options: {
      responsive:true, maintainAspectRatio:false,
      animation:{duration:450, easing:'easeInOutQuart'},
      interaction:{mode:'index', intersect:false},
      plugins:{
        legend:{display:false},
        tooltip:{
          mode:'index', intersect:false,
          backgroundColor:'rgba(10,10,30,.92)',
          padding:{top:10,bottom:10,left:12,right:12},
          cornerRadius:8, titleColor:'#c4cbe4', bodyColor:'#c4cbe4',
          filter:function(item){return item.parsed.y !== null && item.parsed.y !== undefined;},
          callbacks:{
            title:function(items){return items.length?items[0].label:'';},
            label:function(ctx){
              var v = ctx.parsed.y;
              if (v === null || v === undefined) return null;
              var s = v>=1000000?'$'+(v/1000000).toFixed(2)+'MM':'$'+Math.round(v/1000)+'k';
              return ctx.dataset.label+': '+s;
            }
          }
        }
      },
      scales:{
        x:{grid:{display:false},border:{display:false},ticks:{font:{size:10},color:'#94a3b8',maxRotation:0}},
        y:{grid:{color:'rgba(10,10,30,.05)',lineWidth:1},border:{display:false},
           ticks:{font:{size:10},color:'#94a3b8',padding:6,
             callback:function(v){
               if(v>=1000000)return '$'+(v/1000000).toFixed(1)+'M';
               if(v>=1000)return '$'+Math.round(v/1000)+'k';
               return '$0';
             }
           }
        }
      },
      elements:{point:{radius:2},line:{tension:.35,borderCapStyle:'round',borderJoinStyle:'round'}}
    }
  });
})();

/* Paleta fija — tab "Análisis de Ventas" (Estacionalidad, Refrigerante, Tipo de Venta)
   Reutiliza exactamente los tonos ya validados en Ventas 2026/Evolución (VT_YR_CFG) y Pipeline
   (PIPE_ESTADO_COLOR): navy, celeste/azul, turquesa brand, plomos y ámbar/coral como acento. */
var AV_COLOR = {
  navy:'#1E3A5F', azul:'#4FA8E0', turquesa:'#3EC6AC',
  slate:'#7B98B2', slate2:'#9AAEC2', plomo:'#AAB6C9', amber:'#D97706', coral:'#D85A30'
};

/* === Estacionalidad promedio: barras horizontales === */
(function(){
  var el = document.getElementById('chSeasAvg');
  if (!el) return;
  /* Paleta corporativa fría (navy, celeste/azul, turquesa, plomos) con acentos cálidos
     reservados a los meses de mayor peso del año (Abr–May, pico en mayo) */
  var cols = [
    AV_COLOR.navy, AV_COLOR.azul, AV_COLOR.turquesa, AV_COLOR.amber, AV_COLOR.coral, AV_COLOR.slate2,
    AV_COLOR.turquesa, AV_COLOR.plomo, AV_COLOR.azul, AV_COLOR.slate, AV_COLOR.navy, AV_COLOR.slate2
  ];
  new Chart(el, {
    type:'bar',
    data:{
      labels:meses,
      datasets:[{
        data:SEAS_PCT,
        backgroundColor:cols,
        borderRadius:4,
        barPercentage:0.72
      }]
    },
    plugins:[window._sheenPlugin],
    options:{
      indexAxis:'y',
      responsive:true, maintainAspectRatio:false,
      animation:{duration:900, easing:'easeInOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(10,10,30,.92)',padding:10,cornerRadius:8,
          titleColor:'#c4cbe4',bodyColor:'#fff',
          callbacks:{
            label:function(ctx){
              var pct = ctx.parsed.x;
              var m = SEAS_AVG_M[ctx.dataIndex];
              var ms = m>=1000000?'$'+(m/1000000).toFixed(2)+'MM':'$'+Math.round(m/1000)+'k';
              return pct.toFixed(1)+'% del año  ·  prom. '+ms;
            }
          }
        }
      },
      scales:{
        x:{grid:{color:'rgba(10,10,30,.05)'},border:{display:false},max:22,
           ticks:{font:{size:10},color:'#94a3b8',callback:function(v){return v+'%';}}},
        y:{grid:{display:false},border:{display:false},
           ticks:{font:{size:11,weight:'600'},color:'#3d4a6a'}}
      }
    }
  });
})();

/* === Concentración trimestral: barras verticales === */
(function(){
  var el = document.getElementById('chSeasQ');
  if (!el) return;
  /* Mismos 4 colores y mismo orden que "Análisis por Tipo de Venta" */
  var qVals = [24.7,43.1,17.8,14.3];
  var qCols = ['#3EC6AC','#4FA8E0','#AAB6C9','#D97706'];
  new Chart(el, {
    type:'bar',
    data:{
      labels:['Q1','Q2','Q3','Q4'],
      datasets:[{
        data:qVals,
        backgroundColor:qCols,
        borderRadius:7,
        barPercentage:0.65
      }]
    },
    plugins:[window._sheenPlugin],
    options:{
      responsive:true, maintainAspectRatio:false,
      animation:{duration:900, easing:'easeInOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(10,10,30,.92)',padding:10,cornerRadius:8,
          titleColor:'#c4cbe4',bodyColor:'#fff',
          callbacks:{
            title:function(items){
              var lbls=['Ene–Mar','Abr–Jun','Jul–Sep','Oct–Dic'];
              return 'Q'+(items[0].dataIndex+1)+' · '+lbls[items[0].dataIndex];
            },
            label:function(ctx){
              var tags=['Normal','▲ Pico','Normal','▼ Valle'];
              return ctx.parsed.y.toFixed(1)+'% del año  ·  '+tags[ctx.dataIndex];
            }
          }
        }
      },
      scales:{
        x:{grid:{display:false},border:{display:false},
           ticks:{font:{size:13,weight:'800'},color:'#0a0a1e'}},
        y:{grid:{color:'rgba(10,10,30,.05)'},border:{display:false},max:50,
           ticks:{font:{size:10},color:'#94a3b8',callback:function(v){return v+'%';}}}
      }
    }
  });
})();


/* ================================================================
   SECCIÓN 3 — ANÁLISIS DETALLADO 2021–2026
   ================================================================ */

/* === Análisis por refrigerante — Freón vs Otros (participación en ventas) === */
(function(){
  var el = document.getElementById('chRef');
  if (!el) return;
  /* Participación en ventas: Freón / Otros (Amoniaco + Otros) — Fuente: DATA_PRODUC_25.07 */
  var V_FREON_IMP = REF_DATA.freon;
  var V_OTROS_IMP = REF_DATA.amoniaco.map(function(v,i){return Math.round((v+REF_DATA.otros[i])*100)/100;});
  var V_TOTAL     = V_FREON_IMP.map(function(v,i){return Math.round((v+V_OTROS_IMP[i])*100)/100;});
  var V_FREON_PCT = V_FREON_IMP.map(function(v,i){return Math.round(v/V_TOTAL[i]*10000)/100;});
  var V_OTROS_PCT = V_OTROS_IMP.map(function(v,i){return Math.round(v/V_TOTAL[i]*10000)/100;});

  _chRef = new Chart(el, {
    type:'bar',
    data:{
      labels:['2021','2022','2023','2024','2025','2026'],
      datasets:[
        {label:'Freón', data:V_FREON_PCT, backgroundColor:'#3EC6AC',
          borderRadius:{topLeft:4,topRight:4,bottomLeft:0,bottomRight:0}, stack:'r',
          borderColor:'rgba(255,255,255,.1)', borderWidth:1},
        {label:'Otros', data:V_OTROS_PCT, backgroundColor:'#1E3A5F',
          borderRadius:{topLeft:4,topRight:4,bottomLeft:0,bottomRight:0}, stack:'r',
          borderColor:'rgba(255,255,255,.1)', borderWidth:1}
      ]
    },
    plugins:[window._sheenPlugin],
    options:{
      responsive:true, maintainAspectRatio:false,
      animation:{duration:900, easing:'easeInOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        legend:{display:true,position:'bottom',labels:{boxWidth:9,font:{size:10},padding:12,color:'#7b8db0'}},
        tooltip:{
          mode:'index',intersect:false,
          backgroundColor:'rgba(9,12,30,.95)',
          padding:{top:11,bottom:11,left:13,right:13},
          cornerRadius:10,
          borderColor:'rgba(62,198,172,.25)',borderWidth:1,
          titleColor:'rgba(255,255,255,.4)',titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.82)',
          callbacks:{
            label:function(ctx){
              var i=ctx.dataIndex;
              if(ctx.dataset.label==='Freón'){
                return 'Fre\xf3n: '+V_FREON_PCT[i].toFixed(2)+'%  ($'+V_FREON_IMP[i]+'MM)';
              }
              return 'Otros: '+V_OTROS_PCT[i].toFixed(2)+'%  ($'+V_OTROS_IMP[i]+'MM)';
            }
          }
        }
      },
      scales:{
        x:{stacked:true,grid:{display:false},border:{display:false},ticks:{font:{size:10},color:'#94a3b8'}},
        y:{stacked:true,max:100,grid:{color:'rgba(10,10,30,.05)'},border:{display:false},
           ticks:{font:{size:10},color:'#94a3b8',callback:function(v){return v+'%';}}}
      }
    }
  });
})();

/* === Análisis por tipo de venta: barras apiladas (%) === */
(function(){
  var el = document.getElementById('chTcv');
  if (!el) return;
  var TCV_COLOR = {PR:'#3EC6AC', AD:'#4FA8E0', VSA:'#AAB6C9', VSI:'#D97706'};
  var TCV_NAME  = {PR:'Proyecto', AD:'Adicional', VSA:'V. servicio arquitectura', VSI:'V. servicio de ingeniería'};
  new Chart(el, {
    type:'bar',
    data:{
      labels:['2021','2022','2023','2024','2025','2026'],
      datasets:[
        {label:'PR',  data:TCV_PCT.PR,  backgroundColor:TCV_COLOR.PR,  borderRadius:3, stack:'t', borderColor:'rgba(255,255,255,.1)', borderWidth:1},
        {label:'AD',  data:TCV_PCT.AD,  backgroundColor:TCV_COLOR.AD,  borderRadius:3, stack:'t', borderColor:'rgba(255,255,255,.1)', borderWidth:1},
        {label:'VSA', data:TCV_PCT.VSA, backgroundColor:TCV_COLOR.VSA, borderRadius:3, stack:'t', borderColor:'rgba(255,255,255,.1)', borderWidth:1},
        {label:'VSI', data:TCV_PCT.VSI, backgroundColor:TCV_COLOR.VSI, borderRadius:3, stack:'t', borderColor:'rgba(255,255,255,.1)', borderWidth:1}
      ]
    },
    plugins:[window._sheenPlugin],
    options:{
      responsive:true, maintainAspectRatio:false,
      animation:{duration:900, easing:'easeInOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        /* Leyenda visible sin abrir modal — nombres completos, compacta y alineada */
        legend:{display:true,position:'bottom',
          labels:{boxWidth:9,boxHeight:9,font:{size:10},padding:12,color:'#7b8db0',usePointStyle:true,pointStyle:'rectRounded',
            generateLabels:function(chart){
              var items=Chart.defaults.plugins.legend.labels.generateLabels(chart);
              items.forEach(function(item){item.text=TCV_NAME[item.text]||item.text;});
              return items;
            }}},
        tooltip:{
          mode:'index',intersect:false,
          backgroundColor:'rgba(9,12,30,.95)',padding:{top:11,bottom:11,left:13,right:13},
          cornerRadius:10,borderColor:'rgba(62,198,172,.25)',borderWidth:1,
          titleColor:'rgba(255,255,255,.4)',titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.82)',
          callbacks:{
            label:function(ctx){
              var key = ctx.dataset.label;
              var idx = ctx.dataIndex;
              var arr = TCV_MONTO[key];
              var m = arr?arr[idx]:0;
              return TCV_NAME[key]+': '+ctx.parsed.y.toFixed(2)+'%  ('+fmtEjecutivo(m)+')';
            }
          }
        }
      },
      scales:{
        x:{stacked:true,grid:{display:false},border:{display:false},ticks:{font:{size:10},color:'#94a3b8'}},
        y:{stacked:true,max:101,grid:{color:'rgba(10,10,30,.05)'},border:{display:false},
           ticks:{font:{size:10},color:'#94a3b8',callback:function(v){return v+'%';}}}
      }
    }
  });
})();

} // fin guard Chart.js CDN


/* ============================================================
   HEATMAP ESTACIONALIDAD
   ============================================================ */
(function() {
  const all = [];
  [23,24,25,26].forEach(y => ['n','s','c','e'].forEach(z => Z[y][z].forEach(v => { if (v != null) all.push(v); })));
  const vmax = Math.max(...all);
  const stops = [[0,241,239,232],[.05,225,245,238],[.20,159,225,203],[.40,93,202,165],[.65,29,158,117],[1,15,110,86]];
  function interp(t) {
    if (t <= 0) return stops[0].slice(1);
    for (let i = 1; i < stops.length; i++) {
      if (t <= stops[i][0]) {
        const a = stops[i-1], b = stops[i], f = (t - a[0]) / (b[0] - a[0]);
        return [Math.round(a[1]+(b[1]-a[1])*f), Math.round(a[2]+(b[2]-a[2])*f), Math.round(a[3]+(b[3]-a[3])*f)];
      }
    }
    return stops[5].slice(1);
  }
  function cs(v) {
    if (v == null) return 'background:repeating-linear-gradient(45deg,#fafafa,#fafafa 3px,#f3f3f3 3px,#f3f3f3 6px);color:#ccc';
    if (v === 0) return 'background:#FAFAF8;color:#D3D1C7';
    const t = Math.sqrt(v / vmax), c = interp(t), tx = t>.55?'#fff':(t>.25?'#04342C':'#888780');
    return `background:rgb(${c[0]},${c[1]},${c[2]});color:${tx}`;
  }
  const ml = ['E','F','M','A','M','J','J','A','S','O','N','D'];
  let h = '<div class="hm-grid">';
  h += '<div class="hm-row"><div></div>';
  [23,24,25,26].forEach(y => { for (let m = 0; m < 12; m++) h += `<div class="hm-yrhead">${m===5?'20'+y:''}</div>`; });
  h += '</div>';
  h += '<div class="hm-row"><div></div>';
  [23,24,25,26].forEach(() => ml.forEach(m => h += `<div class="hm-mlabel">${m}</div>`));
  h += '</div>';
  [['Norte','n'],['Sur','s'],['Centro','c'],['Exterior','e']].forEach(([nm,k]) => {
    h += `<div class="hm-row"><div class="hm-rowlbl">${nm}</div>`;
    [23,24,25,26].forEach(y => Z[y][k].forEach(v => {
      h += `<div class="hm-cell" style="${cs(v)}">${v != null && v >= 1 ? fmtMM(v).replace('MM','') : ''}</div>`;
    }));
    h += '</div>';
  });
  h += '</div>';
  const _hwrap = document.getElementById('heatmap-wrap');
  if (_hwrap) { _hwrap.innerHTML = h; }
  let sb = '';
  for (let i = 0; i < 30; i++) { const c = interp(i/29); sb += `<div style="background:rgb(${c[0]},${c[1]},${c[2]})"></div>`; }
  const _sbar = document.getElementById('scaleBar');
  if (_sbar) { _sbar.innerHTML = sb; }
})();



/* ── Flip toggle — locks modal overflow during 3D transition to kill scrollbar flicker ── */
function _vtDoFlip() {
  var inner = document.getElementById('mdlFlipInner');
  if (!inner) return;
  var modal = document.querySelector('#modalBg .modal');
  if (modal) modal.style.overflow = 'hidden';
  inner.classList.toggle('is-flipped');
  setTimeout(function(){ if (modal) modal.style.overflow = ''; }, 640);
}

/* ── Ventas modal legend HTML ── */
function _vtLegHtml() {
  return VT_YR_CFG.map(function(c){
    var style='border-color:'+c.c+';border-style:'+(c.d&&c.d.length?'dashed':'solid')+';border-width:'+c.w+'px';
    return '<span class="vt-leg-item"><span class="vt-leg-line" style="'+style+'"></span>'+c.label+'</span>';
  }).join('');
}

/* ── Compute optimal flip height: maximize chart area without scroll ── */
function _vtFlipHeight() {
  /* 90vh modal max - header(~70px) - subtitle(~18px) - body padding(40px) - buffer(2px) = 130px overhead */
  return Math.max(380, Math.min(Math.floor(window.innerHeight * 0.90) - 130, 720));
}

/* ── Build modal body with flip card — stable UX ──
   Both faces are flex columns inside a fixed-height grid cell.
   chart-wrap uses flex:1 to fill remaining height after legend row.
   Table wrapper uses flex:1 + overflow:hidden to contain table exactly.
   Height is computed dynamically to fill available modal space.
   No layout shift. No scroll flicker. No modal movement. ── */
function _vtFlipModal(chartId, tableHtml) {
  var h = _vtFlipHeight();

  /* Front face: legend + "Ver detalle" button row (fixed height), then chart fills rest */
  var legRow = '<div style="display:flex;align-items:center;gap:10px;flex-shrink:0;'
    + 'padding-bottom:10px;margin-bottom:10px;border-bottom:.5px solid var(--border)">'
    + '<div class="vt-legend" style="flex:1;border-bottom:none;padding-bottom:0;margin-bottom:0">'+_vtLegHtml()+'</div>'
    + '<button class="btn-det-v2" onclick="_vtDoFlip()">&#9783;&nbsp; Ver detalle</button>'
    + '</div>';

  var front = '<div class="mdl-flip-front">'
    + legRow
    /* chart-wrap: flex:1 fills (container_height - legRow_height); min-height:0 required for flex shrink */
    + '<div class="chart-wrap" style="flex:1;min-height:0"><canvas id="'+chartId+'"></canvas></div>'
    + '</div>';

  /* Back face: "Ver gráfico" button (fixed), then table fills rest — overflow:hidden prevents scroll */
  var back = '<div class="mdl-flip-back" style="padding:6px 0 0">'
    + '<div style="flex-shrink:0;padding-bottom:12px;margin-bottom:0;border-bottom:.5px solid var(--border);'
    + 'display:flex;align-items:center;justify-content:space-between">'
    + '<span style="font-size:11px;font-weight:600;color:var(--ts);text-transform:uppercase;letter-spacing:.7px">Detalle mensual</span>'
    + '<button class="btn-back-v2" style="margin-bottom:0" onclick="_vtDoFlip()">&#8592;&nbsp; Ver gr&aacute;fico</button>'
    + '</div>'
    + '<div style="flex:1;overflow:hidden;padding-top:10px">'
    + tableHtml
    + '</div>'
    + '</div>';

  /* Fixed height on inner = both faces always same height → zero reflow on flip */
  return '<div class="mdl-flip">'
    + '<div class="mdl-flip-inner" id="mdlFlipInner" style="height:' + h + 'px">'
    + front + back
    + '</div></div>';
}

/* ── Monthly table for ventas (derived from cumulative data) ── */
function _vtTableV(data) {
  function monthly(yr) {
    return data[yr].map(function(v, i) {
      if (v === null) return null;
      if (i === 0) return v;
      var p = data[yr][i-1];
      return p !== null ? Math.round((v - p) * 1000) / 1000 : v;
    });
  }
  var m21=monthly(21),m22=monthly(22),m23=monthly(23),m24=monthly(24),m25=monthly(25),m26=monthly(26);
  var head=[{t:'Mes'},{t:'2021',r:1},{t:'2022',r:1},{t:'2023',r:1},{t:'2024',r:1},{t:'2025',r:1},{t:'2026',r:1}];
  var rows=meses.map(function(m,i){return[m,
    fmtMM(m21[i]),fmtMM(m22[i]),fmtMM(m23[i]),fmtMM(m24[i]),fmtMM(m25[i]),
    m26[i]!=null?fmtMM(m26[i]):'—'];});
  var foot=['Total año',fmtMM(data[21][11]),fmtMM(data[22][11]),fmtMM(data[23][11]),
    fmtMM(data[24][11]),fmtMM(data[25][11]),'$29.10MM *'];
  return tbl(head,rows,foot)+'<div class="mnote">* 2026 enero&ndash;julio. Valores mensuales de venta. Total = suma del a&ntilde;o.</div>';
}

/* ── Cumulative table for margen ── */
function _vtTableM(data) {
  data = data || MCA;
  var head=[{t:'Mes'},{t:'2021',r:1},{t:'2022',r:1},{t:'2023',r:1},{t:'2024',r:1},{t:'2025',r:1},{t:'2026',r:1}];
  var rows=meses.map(function(m,i){return[m,
    fmtPct(data[21][i]),fmtPct(data[22][i]),fmtPct(data[23][i]),
    fmtPct(data[24][i]),fmtPct(data[25][i]),data[26][i]!=null?fmtPct(data[26][i]):'—'];});
  var close26 = _vtYearClose(data[26]);
  var foot=['Cierre año',fmtPct(data[21][11]),fmtPct(data[22][11]),fmtPct(data[23][11]),
    fmtPct(data[24][11]),fmtPct(data[25][11]),fmtPct(close26)+' *'];
  return tbl(head,rows,foot)+'<div class="mnote">* 2026 hasta julio. Margen ponderado acumulado. Meta: 18.00%.</div>';
}

function openVtVentas() {
  var data = _vtEffData();
  var title = _vtExclSrv ? 'Ventas acumuladas · Frío sin servicios' : 'Ventas acumuladas · 2021–2026';
  var sub = 'US$ MM — evolución acumulada mensual por año';
  openModal(title, _vtFlipModal('_mcanvas', _vtTableV(data)), sub);
  if(typeof Chart!=='undefined'){
    setTimeout(function(){
      var el=document.getElementById('_mcanvas');
      if(!el) return;
      if(_mci){_mci.destroy();_mci=null;}
      el.style.width='100%'; el.style.height='100%';
      el.dataset.vtFmt = 'mm'; /* formatter for external tooltip */
      _mci=new Chart(el,{type:'line',data:{labels:meses,datasets:_vtDs(data)},
        options:{..._vtSharedOpts,
          scales:{..._vtSharedOpts.scales,
            y:{..._vtSharedOpts.scales.y, ticks:{..._vtSharedOpts.scales.y.ticks,
              callback:function(v){return '$'+v+'MM';}}}}
        }});
    },80);
  }
}

function openVtMargen() {
  var data = _vtEffMargin();
  openModal('Margen ponderado acumulado · 2021–2026', _vtFlipModal('_mcanvas', _vtTableM(data)), '% — margen ponderado acumulado por año');
  if(typeof Chart!=='undefined'){
    setTimeout(function(){
      var el=document.getElementById('_mcanvas');
      if(!el) return;
      if(_mci){_mci.destroy();_mci=null;}
      el.style.width='100%'; el.style.height='100%';
      el.dataset.vtFmt = 'pct'; /* formatter for external tooltip */
      _mci=new Chart(el,{type:'line',data:{labels:meses,datasets:_vtDs(data)},
        options:{..._vtSharedOpts,
          scales:{..._vtSharedOpts.scales,
            y:{..._vtSharedOpts.scales.y, min:8, max:20,
              ticks:{..._vtSharedOpts.scales.y.ticks, callback:function(v){return v+'%';}}}}
        }});
    },80);
  }
}

/* Legacy aliases (referenced elsewhere in the codebase) */
function openVentasChart() { openVtVentas(); }
function openMargenChart() { openVtMargen(); }


/* ================================================================
   SECCIÓN 3 — Flip modals: Análisis Detallado 2021–2026
   ================================================================ */

/* Shared flip modal builder for the 3 AD3 charts */
function _ad3FlipModal(chartId, tableHtml, customFrontHtml) {
  var h = _vtFlipHeight();
  var frontContent = customFrontHtml
    ? customFrontHtml
    : '<div class="chart-wrap" style="flex:1;min-height:0"><canvas id="'+chartId+'"></canvas></div>';
  var front = '<div class="mdl-flip-front">'
    + '<div style="flex-shrink:0;padding-bottom:10px;margin-bottom:10px;border-bottom:.5px solid var(--border);'
    + 'display:flex;align-items:center;justify-content:flex-end">'
    + '<button class="btn-det-v2" onclick="_vtDoFlip()">&#9783;&nbsp; Ver detalle</button>'
    + '</div>'
    + frontContent
    + '</div>';
  var back = '<div class="mdl-flip-back" style="padding:6px 0 0">'
    + '<div style="flex-shrink:0;padding-bottom:12px;border-bottom:.5px solid var(--border);'
    + 'display:flex;align-items:center;justify-content:space-between">'
    + '<span style="font-size:11px;font-weight:600;color:var(--ts);text-transform:uppercase;letter-spacing:.7px">Tabla de datos</span>'
    + '<button class="btn-back-v2" onclick="_vtDoFlip()">&#8592;&nbsp; Ver gr&aacute;fico</button>'
    + '</div>'
    + '<div style="flex:1;overflow-x:auto;overflow-y:hidden;padding-top:10px;-webkit-overflow-scrolling:touch">'+tableHtml+'</div>'
    + '</div>';
  return '<div class="mdl-flip">'
    + '<div class="mdl-flip-inner" id="mdlFlipInner" style="height:'+h+'px">'
    + front+back+'</div></div>';
}

/* === Modal: Análisis por Refrigerante — Freón vs Otros (participación en ventas) === */
function openAD3Ref() {
  var V_FREON_IMP = REF_DATA.freon;
  var V_OTROS_IMP = REF_DATA.amoniaco.map(function(v,i){return Math.round((v+REF_DATA.otros[i])*100)/100;});
  var V_TOTAL     = V_FREON_IMP.map(function(v,i){return Math.round((v+V_OTROS_IMP[i])*100)/100;});
  var V_FREON_PCT = V_FREON_IMP.map(function(v,i){return Math.round(v/V_TOTAL[i]*10000)/100;});
  var V_OTROS_PCT = V_OTROS_IMP.map(function(v,i){return Math.round(v/V_TOTAL[i]*10000)/100;});

  function _fi(v){return '$'+v.toFixed(2)+'MM';}
  var head = [{t:'A\xf1o'},{t:'Fre\xf3n US$',r:1},{t:'Fre\xf3n %',r:1},{t:'Otros US$',r:1},{t:'Otros %',r:1}];
  var yrs  = ['2021','2022','2023','2024','2025','2026'];
  var rows = yrs.map(function(yr,i){
    return [yr,_fi(V_FREON_IMP[i]),V_FREON_PCT[i].toFixed(2)+'%',_fi(V_OTROS_IMP[i]),V_OTROS_PCT[i].toFixed(2)+'%'];
  });
  var totF=Math.round(V_FREON_IMP.reduce(function(a,b){return a+b;},0)*100)/100;
  var totO=Math.round(V_OTROS_IMP.reduce(function(a,b){return a+b;},0)*100)/100;
  var totA=Math.round((totF+totO)*100)/100;
  var foot=['TOTAL',_fi(totF),(totF/totA*100).toFixed(2)+'%',_fi(totO),(totO/totA*100).toFixed(2)+'%'];

  openModal('An\xe1lisis por Refrigerante \xb7 2021–2026',
    _ad3FlipModal('_mcanvas3ref', tbl(head,rows,foot)),
    'Fre\xf3n vs Otros — participaci\xf3n en ventas');
  if(typeof Chart!=='undefined'){
    setTimeout(function(){
      var el=document.getElementById('_mcanvas3ref');
      if(!el)return;
      if(_mci){_mci.destroy();_mci=null;}
      _mci=new Chart(el,{type:'bar',
        data:{labels:['2021','2022','2023','2024','2025','2026'],datasets:[
          {label:'Fre\xf3n',data:V_FREON_PCT,backgroundColor:'#3EC6AC',borderRadius:{topLeft:5,topRight:5,bottomLeft:0,bottomRight:0},stack:'r'},
          {label:'Otros',   data:V_OTROS_PCT,backgroundColor:'#1E3A5F',borderRadius:{topLeft:5,topRight:5,bottomLeft:0,bottomRight:0},stack:'r'}
        ]},
        options:{responsive:true,maintainAspectRatio:false,
          animation:{duration:900,easing:'easeInOutQuart'},
          plugins:{
            legend:{display:true,position:'bottom',labels:{boxWidth:9,font:{size:11},padding:14,color:'#7b8db0'}},
            tooltip:{mode:'index',intersect:false,backgroundColor:'rgba(9,12,30,.95)',
              padding:{top:12,bottom:12,left:14,right:14},cornerRadius:10,
              borderColor:'rgba(62,198,172,.25)',borderWidth:1,
              titleColor:'rgba(255,255,255,.38)',titleFont:{size:9.5,weight:'700'},
              bodyColor:'rgba(255,255,255,.85)',
              callbacks:{label:function(ctx){
                var i=ctx.dataIndex;
                if(ctx.dataset.label==='Fre\xf3n')return 'Fre\xf3n: '+V_FREON_PCT[i].toFixed(2)+'%  ($'+V_FREON_IMP[i]+'MM)';
                return 'Otros: '+V_OTROS_PCT[i].toFixed(2)+'%  ($'+V_OTROS_IMP[i]+'MM)';
              }}}
          },
          scales:{
            x:{stacked:true,grid:{display:false},border:{display:false},ticks:{font:{size:11},color:'#94a3b8'}},
            y:{stacked:true,max:100,grid:{color:'rgba(10,10,30,.05)'},border:{display:false},
              ticks:{font:{size:11},color:'#94a3b8',callback:function(v){return v+'%';}}}
          }}});
    },80);
  }
}

/* === Modal: Análisis por Tipo de Venta === */
function openAD3Tcv() {
  function _f(v){return v>=1000000?'$'+(v/1000000).toFixed(2)+'MM':v>=1000?'$'+Math.round(v/1000)+'K':'$'+v;}
  var head = [{t:'A\xf1o'},{t:'PR US$',r:1},{t:'PR %',r:1},{t:'AD US$',r:1},{t:'AD %',r:1},{t:'VSA US$',r:1},{t:'VSA %',r:1},{t:'VSI US$',r:1},{t:'VSI %',r:1}];
  var yrs  = ['2021','2022','2023','2024','2025','2026'];
  var rows = yrs.map(function(yr,i){
    return [yr,
      _f(TCV_MONTO.PR[i]),TCV_PCT.PR[i].toFixed(2)+'%',
      _f(TCV_MONTO.AD[i]),TCV_PCT.AD[i].toFixed(2)+'%',
      _f(TCV_MONTO.VSA[i]),TCV_PCT.VSA[i].toFixed(2)+'%',
      _f(TCV_MONTO.VSI[i]),TCV_PCT.VSI[i].toFixed(2)+'%'
    ];
  });
  var totPR =TCV_MONTO.PR.reduce(function(a,b){return a+b;},0);
  var totAD =TCV_MONTO.AD.reduce(function(a,b){return a+b;},0);
  var totVSA=TCV_MONTO.VSA.reduce(function(a,b){return a+b;},0);
  var totVSI=TCV_MONTO.VSI.reduce(function(a,b){return a+b;},0);
  var totAll=totPR+totAD+totVSA+totVSI;
  var foot=['TOTAL',
    _f(totPR),(totPR/totAll*100).toFixed(2)+'%',
    _f(totAD),(totAD/totAll*100).toFixed(2)+'%',
    _f(totVSA),(totVSA/totAll*100).toFixed(2)+'%',
    _f(totVSI),(totVSI/totAll*100).toFixed(2)+'%'
  ];

  openModal('Análisis por Tipo de Venta · 2021–2026',
    _ad3FlipModal('_mcanvas3tcv', tbl(head,rows,foot)+'<div class="mnote">PR: Proyecto &middot; AD: Adicional &middot; VSA: Venta de Servicio Arquitectura &middot; VSI: Venta de servicio de ingenier\xeda</div>'),
    'Proyecto · Adicional · V. servicio arquitectura · V. servicio de ingeniería — participación % de importe anual');
  if(typeof Chart!=='undefined'){
    setTimeout(function(){
      var el=document.getElementById('_mcanvas3tcv');
      if(!el)return;
      if(_mci){_mci.destroy();_mci=null;}
      var TCV_COLOR = {PR:'#3EC6AC', AD:'#4FA8E0', VSA:'#AAB6C9', VSI:'#D97706'};
      var TCV_NAME  = {PR:'Proyecto', AD:'Adicional', VSA:'V. servicio arquitectura', VSI:'V. servicio de ingeniería'};
      _mci=new Chart(el,{type:'bar',
        data:{labels:['2021','2022','2023','2024','2025','2026'],datasets:[
          {label:'PR', data:TCV_PCT.PR, backgroundColor:TCV_COLOR.PR, borderRadius:{topLeft:4,topRight:4,bottomLeft:0,bottomRight:0},stack:'t', borderColor:'rgba(255,255,255,.1)', borderWidth:1},
          {label:'AD', data:TCV_PCT.AD, backgroundColor:TCV_COLOR.AD, borderRadius:{topLeft:4,topRight:4,bottomLeft:0,bottomRight:0},stack:'t', borderColor:'rgba(255,255,255,.1)', borderWidth:1},
          {label:'VSA', data:TCV_PCT.VSA, backgroundColor:TCV_COLOR.VSA, borderRadius:{topLeft:4,topRight:4,bottomLeft:0,bottomRight:0},stack:'t', borderColor:'rgba(255,255,255,.1)', borderWidth:1},
          {label:'VSI',data:TCV_PCT.VSI,backgroundColor:TCV_COLOR.VSI,borderRadius:{topLeft:4,topRight:4,bottomLeft:0,bottomRight:0},stack:'t', borderColor:'rgba(255,255,255,.1)', borderWidth:1}
        ]},
        options:{responsive:true,maintainAspectRatio:false,
          animation:{duration:900,easing:'easeInOutQuart'},
          plugins:{
            legend:{display:true,position:'bottom',
              labels:{boxWidth:9,boxHeight:9,font:{size:11},padding:14,color:'#7b8db0',usePointStyle:true,pointStyle:'rectRounded',
                generateLabels:function(chart){
                  var items=Chart.defaults.plugins.legend.labels.generateLabels(chart);
                  items.forEach(function(item){item.text=TCV_NAME[item.text]||item.text;});
                  return items;
                }}},
            tooltip:{mode:'index',intersect:false,backgroundColor:'rgba(9,12,30,.95)',
              padding:{top:12,bottom:12,left:14,right:14},cornerRadius:10,
              borderColor:'rgba(62,198,172,.25)',borderWidth:1,
              titleColor:'rgba(255,255,255,.38)',titleFont:{size:9.5,weight:'700'},
              bodyColor:'rgba(255,255,255,.85)',
              callbacks:{label:function(ctx){
                var key=ctx.dataset.label,i=ctx.dataIndex;
                var m=TCV_MONTO[key]?TCV_MONTO[key][i]:0;
                return TCV_NAME[key]+': '+ctx.parsed.y.toFixed(2)+'%  ('+_f(m)+')';
              }}}
          },
          scales:{
            x:{stacked:true,grid:{display:false},border:{display:false},ticks:{font:{size:11},color:'#94a3b8'}},
            y:{stacked:true,max:101,grid:{color:'rgba(10,10,30,.05)'},border:{display:false},
              ticks:{font:{size:11},color:'#94a3b8',callback:function(v){return v+'%';}}}
          }}});
    },80);
  }
}

function openRefriChart() {
  const _th = tbl([{t:'Refrigerante'},{t:'Monto 2025',r:1},{t:'% 2025',r:1},{t:'Monto 2026',r:1},{t:'% 2026',r:1},{t:'Var pp',r:1}],
    [['Amoniaco','$13.40MM','70.97%','$21.82MM','77.22%','+6.25'],['Freón','$3.41MM','18.07%','$4.91MM','17.39%','−0.68'],['Otros','$2.07MM','10.96%','$1.53MM','5.40%','−5.56']],
    ['TOTAL','$18.88MM','100%','$28.26MM','100%','—']);
  _openChartModal('Refrigerante · Ene–Jun 2025 vs 2026',
    {type:'bar',data:{labels:['Amoniaco','Freón','Otros'],datasets:[
      {label:'2025',data:[70.97,18.07,10.96],backgroundColor:'#B5D4F4'},
      {label:'2026',data:[77.22,17.39,5.40],backgroundColor:'#185FA5'}
    ]},options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:8,font:{size:10}}},
        tooltip:{callbacks:{label:ctx=>ctx.dataset.label+': '+fmtPct(ctx.parsed.y)}}},
      scales:{x:{grid:{display:false}},y:{min:0,max:90,grid:{color:'rgba(0,0,0,.05)'},ticks:{callback:v=>v+'%'}}}}},
    _th);
}
function openRefriModal() { openRefriChart(); }

function openTipoChart() {
  const _th = tbl([{t:'Tipo'},{t:'Monto 2025',r:1},{t:'% 2025',r:1},{t:'Monto 2026',r:1},{t:'% 2026',r:1},{t:'Var pp',r:1}],
    [['Proyecto (PRY)','$18.55MM','98.24%','$26.96MM','95.40%','−2.84'],['Adicional (PRD)','$0.33MM','1.76%','$1.17MM','4.12%','+2.36'],['Servicio (VSR)','—','0.00%','$0.13MM','0.47%','+0.47']],
    ['TOTAL','$18.88MM','100%','$28.26MM','100%','—'])+
    '<div class="mnote">PRY = Proyectos; PRD = Adicionales; VSR = Servicios de ingeniería.</div>';
  _openChartModal('Tipo de venta · 2025 vs 2026',
    {type:'bar',data:{labels:['2025','2026'],datasets:[
      {label:'Proyecto (PRY)',data:[98.24,95.40],backgroundColor:'#1D9E75',stack:'s'},
      {label:'Adicional (PRD)',data:[1.76,4.12],backgroundColor:'#5DCAA5',stack:'s'},
      {label:'Servicio (VSR)',data:[0.00,0.47],backgroundColor:'#EF9F27',stack:'s'}
    ]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',
      plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:8,font:{size:10}}},
        tooltip:{callbacks:{label:ctx=>ctx.dataset.label+': '+fmtPct(ctx.parsed.x)}}},
      scales:{x:{stacked:true,max:100,grid:{display:false},ticks:{callback:v=>v+'%'}},y:{stacked:true,grid:{display:false}}}}},
    _th);
}
function openTipoModal() { openTipoChart(); }

const _sectorChartCfg = {type:'bar',data:{labels:['Arándanos','Uva','Palta','Cítricos','Otros'],datasets:[
  {label:'2025',data:[16.49,13.05,16.16,null,15.00],backgroundColor:'rgba(93,202,165,0.55)',borderColor:'#5DCAA5',borderWidth:1},
  {label:'2026',data:[14.45,17.48,13.21,18.10,15.67],backgroundColor:['#F0997B','#5DCAA5','#F0997B','#5DCAA5','#FAC775']}
]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',
  plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:8,font:{size:10}}},
    tooltip:{callbacks:{label:ctx=>(ctx.dataset.label||'')+': '+(ctx.parsed.x!=null?fmtPct(ctx.parsed.x):'N/D')}}},
  scales:{x:{min:0,max:22,grid:{color:'rgba(0,0,0,.05)'},ticks:{callback:v=>v+'%'},
    afterDraw:chart=>{const c2=chart.ctx,xs=chart.scales.x,x=xs.getPixelForValue(18);c2.save();c2.strokeStyle='#D85A30';c2.lineWidth=1.5;c2.setLineDash([4,3]);c2.beginPath();c2.moveTo(x,chart.chartArea.top);c2.lineTo(x,chart.chartArea.bottom);c2.stroke();c2.restore();}},
    y:{grid:{display:false}}}}};
function openSectorChart() {
  const _th = tbl([{t:'Sector'},{t:'Monto 2025',r:1},{t:'Margen 2025',r:1},{t:'Monto 2026',r:1},{t:'Margen 2026',r:1},{t:'Var pp',r:1}],
    [['Arándanos','$12.27MM','16.49%','$15.86MM','14.45%','−2.04'],['Uva','$4.20MM','13.05%','$5.41MM','17.48%','+4.43'],['Palta','$0.87MM','16.16%','$1.72MM','13.21%','−2.95'],['Cítricos','—','—','$0.95MM','18.10%','—'],['Otros','$1.54MM','15.00%','$4.32MM','15.67%','+0.67']],
    ['TOTAL','$18.88MM','15.59%','$28.26MM','15.32%','−0.27'])+
    '';
  _openChartModal('Margen × sector · 2025 vs 2026', _sectorChartCfg, _th);
}
function openSectorVModal() { openSectorChart(); }

function openSectorMgnModal() {
  const _th = tbl([{t:'Sector'},{t:'Monto 2025',r:1},{t:'Margen 2025',r:1},{t:'Monto 2026',r:1},{t:'Margen 2026',r:1},{t:'Var pp',r:1}],
    [['Arándanos','$12.27MM','16.49%','$15.86MM','14.45%','−2.04'],['Uva','$4.20MM','13.05%','$5.41MM','17.48%','+4.43'],['Palta','$0.87MM','16.16%','$1.72MM','13.21%','−2.95'],['Cítricos','—','—','$0.95MM','18.10%','—'],['Otros','$1.54MM','15.00%','$4.32MM','15.67%','+0.67']],
    ['TOTAL','$18.88MM','15.59%','$28.26MM','15.32%','−0.27'])+
    '<div class="mnote">Cítricos: sector nuevo en 2026.</div>';
  _openChartModal('Margen × sector · 2025 vs 2026', _sectorChartCfg, _th);
}

function openZonaMgnModal() {
  _openChartModal('Margen × zona 2026',
    {type:'bar',data:{labels:['Norte','Sur','Centro'],datasets:[{data:[14.40,16.54,17.84],backgroundColor:['#F0997B','#FAC775','#FAC775'],label:'Margen %'}]},
     options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>fmtPct(ctx.parsed.x)}}},
      scales:{x:{min:0,max:22,grid:{color:'rgba(0,0,0,.05)'},ticks:{callback:v=>v+'%'},
        afterDraw:chart=>{const c2=chart.ctx,xs=chart.scales.x,x=xs.getPixelForValue(18);c2.save();c2.strokeStyle='#D85A30';c2.lineWidth=1.5;c2.setLineDash([4,3]);c2.beginPath();c2.moveTo(x,chart.chartArea.top);c2.lineTo(x,chart.chartArea.bottom);c2.stroke();c2.restore();}},
        y:{grid:{display:false}}}}},
    tbl([{t:'Zona'},{t:'% vol. 2026',r:1},{t:'Margen',r:1},{t:'vs meta 18%',r:1}],
      [['Norte','69%','14.40%','−3.60 pp'],['Sur','25%','16.54%','−1.46 pp'],['Centro','6%','17.84%','−0.16 pp'],['Exterior','0%','—','—']])+
    '<div class="mnote">Norte concentra el 69% del volumen con el margen más bajo.</div>');
}


/* ============================================================
   MODALES DE DETALLE
   ============================================================ */
function tbl(head, rows, foot) {
  function pn(s) {
    if (!s || s === '—') return NaN;
    const c = String(s).replace(/−/g,'-').replace(/[^\d.\-]/g,'');
    const m = c.match(/^-?\d+\.?\d*/);
    return m ? parseFloat(m[0]) : NaN;
  }
  const colV = head.map((hh,ci) => {
    if (!hh.r) return null;
    const vs = rows.map(r => pn(r[ci])).filter(v => !isNaN(v));
    return vs.length >= 3 ? vs : null;
  });
  const cMax = colV.map(v => v ? Math.max(...v) : null);
  const cMin = colV.map(v => v ? Math.min(...v) : null);
  let h = '<div style="overflow-x:auto"><table class="dt"><tr>' +
    head.map(x => `<th class="${x.r?'num':''}">${x.t}</th>`).join('') + '</tr>';
  rows.forEach(r => {
    h += '<tr>' + r.map((c,ci) => {
      const base = head[ci]&&head[ci].r ? 'num' : '';
      const n = pn(c);
      let cls = base;
      if (!isNaN(n) && cMax[ci] !== null && cMax[ci] !== cMin[ci]) {
        if (n === cMax[ci]) cls = (base?'num ':'') + 'td-hi';
        else if (n === cMin[ci]) cls = (base?'num ':'') + 'td-lo';
      }
      return `<td class="${cls}">${c}</td>`;
    }).join('') + '</tr>';
  });
  if (foot) h += '<tr class="tot">' + foot.map((c,i) => `<td class="${head[i]&&head[i].r?'num':''}">${c}</td>`).join('') + '</tr>';
  return h + '</table></div>';
}

function _getFlipTable(k) {
  const bb = '<button class="btn-back" onclick="event.stopPropagation();flipCard(this.closest(\'.flip-card\'))">&#8592; Ver gráfico</button>';
  switch(k) {
    case 'ventas': {
      const h=[{t:'Mes'},{t:'2023',r:1},{t:'2024',r:1},{t:'2025',r:1},{t:'2026',r:1}];
      const r=meses.map((m,i)=>[m,fmtMM(V[23][i]),fmtMM(V[24][i]),fmtMM(V[25][i]),V[26][i]!=null?fmtMM(V[26][i]):'—']);
      const s=y=>fmtMM(V[y].reduce((a,b)=>a+(b||0),0));
      return bb+'<div class="card-h" style="margin-bottom:8px">Ventas mensuales · US$ MM</div>'+tbl(h,r,['Total',s(23),s(24),s(25),s(26)])+'<div class="mnote" style="margin-top:8px">* 2026 hasta junio.</div>';
    }
    case 'margen': {
      const h=[{t:'Mes'},{t:'2023',r:1},{t:'2024',r:1},{t:'2025',r:1},{t:'2026',r:1}];
      const r=meses.map((m,i)=>[m,M[23][i]?fmtPct(M[23][i]):'—',M[24][i]?fmtPct(M[24][i]):'—',M[25][i]?fmtPct(M[25][i]):'—',M[26][i]!=null?fmtPct(M[26][i]):'—']);
      return bb+'<div class="card-h" style="margin-bottom:8px">Margen mensual · %</div>'+tbl(h,r)+'<div class="mnote" style="margin-top:8px">Acumulado 2026 (Ene–Jun): 15.32%.</div>';
    }
    case 'refri': {
      const h=[{t:'Refrigerante'},{t:'Monto 2025',r:1},{t:'% 2025',r:1},{t:'Monto 2026',r:1},{t:'% 2026',r:1},{t:'Var pp',r:1}];
      const r=[['Amoniaco','$13.40MM','70.97%','$21.82MM','77.22%','+6.25'],['Freón','$3.41MM','18.07%','$4.91MM','17.39%','−0.68'],['Otros','$2.07MM','10.96%','$1.53MM','5.40%','−5.56']];
      return bb+tbl(h,r,['TOTAL','$18.88MM','100%','$28.26MM','100%','—']);
    }
    case 'tipo': {
      const h=[{t:'Tipo'},{t:'Monto 2025',r:1},{t:'% 2025',r:1},{t:'Monto 2026',r:1},{t:'% 2026',r:1},{t:'Var pp',r:1}];
      const r=[['Proyecto (PRY)','$18.55MM','98.24%','$26.96MM','95.40%','−2.84'],['Adicional (PRD)','$0.33MM','1.76%','$1.17MM','4.12%','+2.36'],['Servicio (VSR)','—','0.00%','$0.13MM','0.47%','+0.47']];
      return bb+tbl(h,r,['TOTAL','$18.88MM','100%','$28.26MM','100%','—'])+'<div class="mnote" style="margin-top:8px">PRY = Proyectos; PRD = Adicionales; VSR = Servicios.</div>';
    }
    case 'sector-v':
    case 'sector-mgn': {
      const h=[{t:'Sector'},{t:'Monto 2025',r:1},{t:'Margen 2025',r:1},{t:'Monto 2026',r:1},{t:'Margen 2026',r:1},{t:'Var pp',r:1}];
      const r=[['Arándanos','$12.27MM','16.49%','$15.86MM','14.45%','−2.04'],['Uva','$4.20MM','13.05%','$5.41MM','17.48%','+4.43'],['Palta','$0.87MM','16.16%','$1.72MM','13.21%','−2.95'],['Cítricos','—','—','$0.95MM','18.10%','—'],['Otros','$1.54MM','15.00%','$4.32MM','15.67%','+0.67']];
      return bb+tbl(h,r,['TOTAL','$18.88MM','15.59%','$28.26MM','15.32%','−0.27']);
    }
    case 'zona-mgn': {
      const h=[{t:'Zona'},{t:'% vol. 2026',r:1},{t:'Margen',r:1},{t:'vs meta 18%',r:1}];
      const r=[['Norte','69%','14.40%','−3.60 pp'],['Sur','25%','16.54%','−1.46 pp'],['Centro','6%','17.84%','−0.16 pp'],['Exterior','0%','—','—']];
      return bb+tbl(h,r)+'<div class="mnote" style="margin-top:8px">Norte concentra el 69% del volumen con el margen más bajo.</div>';
    }
    case 'estac': {
      const sum=(y,z)=>fmtMM(Z[y][z].reduce((a,b)=>a+(b||0),0));
      const h=[{t:'Zona'},{t:'2023',r:1},{t:'2024',r:1},{t:'2025',r:1},{t:'2026*',r:1}];
      const r=[['Norte',sum(23,'n'),sum(24,'n'),sum(25,'n'),sum(26,'n')],['Sur',sum(23,'s'),sum(24,'s'),sum(25,'s'),sum(26,'s')],['Centro',sum(23,'c'),sum(24,'c'),sum(25,'c'),sum(26,'c')],['Exterior',sum(23,'e'),sum(24,'e'),sum(25,'e'),sum(26,'e')]];
      return bb+'<div class="card-h" style="margin-bottom:8px">Estacionalidad · Zona × año (US$ MM)</div>'+tbl(h,r)+'<div class="mnote" style="margin-top:8px">* 2026 hasta junio.</div>';
    }
    default: return bb;
  }
}

function openVentasDetalle() {
  const head = [{t:'Mes'},{t:'2023',r:1},{t:'2024',r:1},{t:'2025',r:1},{t:'2026',r:1}];
  const rows = meses.map((m, i) => [m, fmtMM(V[23][i]), fmtMM(V[24][i]), fmtMM(V[25][i]), V[26][i] != null ? fmtMM(V[26][i]) : '—']);
  const sum = y => fmtMM(V[y].reduce((a,b) => a + (b||0), 0));
  openModal('Ventas mensuales · US$ MM', tbl(head, rows, ['Total', sum(23), sum(24), sum(25), sum(26)]) +
    '<div class="mnote">* 2026 con datos hasta junio.</div>');
}

function openMargenDetalle() {
  const head = [{t:'Mes'},{t:'2023',r:1},{t:'2024',r:1},{t:'2025',r:1},{t:'2026',r:1}];
  const rows = meses.map((m, i) => [
    m,
    M[23][i] ? fmtPct(M[23][i]) : '—',
    M[24][i] ? fmtPct(M[24][i]) : '—',
    M[25][i] ? fmtPct(M[25][i]) : '—',
    M[26][i] != null ? fmtPct(M[26][i]) : '—'
  ]);
  openModal('Margen mensual · %', tbl(head, rows) +
    '<div class="mnote">Margen comercial ponderado por mes. Acumulado 2026 (Ene–Jun): 15.32%.</div>');
}

function openEstacionalidad() {
  const head = [{t:'Zona'},{t:'2023',r:1},{t:'2024',r:1},{t:'2025',r:1},{t:'2026*',r:1}];
  const sum = (y,z) => fmtMM(Z[y][z].reduce((a,b) => a+(b||0), 0));
  const rows = [
    ['Norte', sum(23,'n'), sum(24,'n'), sum(25,'n'), sum(26,'n')],
    ['Sur',   sum(23,'s'), sum(24,'s'), sum(25,'s'), sum(26,'s')],
    ['Centro',sum(23,'c'), sum(24,'c'), sum(25,'c'), sum(26,'c')],
    ['Exterior',sum(23,'e'), sum(24,'e'), sum(25,'e'), sum(26,'e')]
  ];
  openModal('Estacionalidad · Zona × año (US$ MM)', tbl(head, rows) +
    '<div class="mnote">* 2026 hasta junio.</div>');
}

function openRefri() {
  const head = [{t:'Refrigerante'},{t:'Monto 2025',r:1},{t:'% 2025',r:1},{t:'Monto 2026',r:1},{t:'% 2026',r:1},{t:'Var pp',r:1}];
  const rows = [
    ['Amoniaco', '$13.40MM', '70.97%', '$21.82MM', '77.22%', '+6.25'],
    ['Freón',     '$3.41MM', '18.07%',  '$4.91MM', '17.39%', '−0.68'],
    ['Otros',     '$2.07MM', '10.96%',  '$1.53MM',  '5.40%', '−5.56']
  ];
  const foot = ['TOTAL', '$18.88MM', '100%', '$28.26MM', '100%', '—'];
  openModal('Refrigerante · Ene–Jun 2025 vs 2026', tbl(head, rows, foot) +
    '<div class="mnote">Amoniaco incluye variante "Amoniaco/Glicol". Otros incluye Glicol independiente y demás refrigerantes.</div>');
}

function openTipo() {
  const head = [{t:'Tipo'},{t:'Monto 2025',r:1},{t:'% 2025',r:1},{t:'Monto 2026',r:1},{t:'% 2026',r:1},{t:'Var pp',r:1}];
  const rows = [
    ['Proyecto (PRY)',  '$18.55MM', '98.24%', '$26.96MM', '95.40%', '−2.84'],
    ['Adicional (PRD)',  '$0.33MM',  '1.76%',  '$1.17MM',  '4.12%', '+2.36'],
    ['Servicio (VSR)',        '—',  '0.00%',  '$0.13MM',  '0.47%', '+0.47']
  ];
  const foot = ['TOTAL', '$18.88MM', '100%', '$28.26MM', '100%', '—'];
  openModal('Tipo de venta · Ene–Jun 2025 vs 2026', tbl(head, rows, foot) +
    '<div class="mnote">PRY = Proyectos · PRD = Adicionales · VSR = Servicios de ingeniería.</div>');
}

function openSector() {
  const head = [{t:'Sector'},{t:'Monto 2026',r:1},{t:'Margen',r:1},{t:'vs meta 18%',r:1}];
  const rows = [
    ['Arándanos', '$15.86MM', '14.45%', '−3.55'],
    ['Uva',        '$5.41MM', '17.48%', '−0.52'],
    ['Otros',      '$4.27MM', '15.64%', '−2.36'],
    ['Palta',      '$1.72MM', '13.21%', '−4.79'],
    ['Cítricos',   '$0.95MM', '18.10%', '+0.10'],
    ['Queso',      '$0.04MM', '18.81%', '+0.81']
  ];
  openModal('Margen × sector · 2026', tbl(head, rows) +
    '<div class="mnote">Arándanos concentran el 56.10% del volumen con el margen más bajo — arrastran el promedio global a 15.32%.</div>');
}

function openSectorMgn() {
  const head = [{t:'Sector'},{t:'Monto 2025',r:1},{t:'Margen 2025',r:1},{t:'Monto 2026',r:1},{t:'Margen 2026',r:1},{t:'Var pp',r:1}];
  const rows = [
    ['Arándanos', '$12.27MM', '16.49%', '$15.86MM', '14.45%', '−2.04'],
    ['Uva',        '$4.20MM', '13.05%',  '$5.41MM', '17.48%', '+4.43'],
    ['Palta',      '$0.87MM', '16.16%',  '$1.72MM', '13.21%', '−2.95'],
    ['Cítricos',       '—',       '—',  '$0.95MM', '18.10%',     '—'],
    ['Otros',      '$1.54MM', '15.00%',  '$4.32MM', '15.67%', '+0.67']
  ];
  const foot = ['TOTAL', '$18.88MM', '15.59%', '$28.26MM', '15.32%', '−0.27'];
  openModal('Margen × sector · 2025 vs 2026', tbl(head, rows, foot) +
    '<div class="mnote">Cítricos: sector nuevo en 2026. Otros incluye Queso, Bulbos, Cárnicos, Mango y demás cultivos menores.</div>');
}

function openZonaMgn() {
  const head = [{t:'Zona'},{t:'% volumen 2026',r:1},{t:'Margen',r:1},{t:'vs meta 18%',r:1}];
  const rows = [
    ['Norte',    '69%', '14.40%', '−3.60 pp'],
    ['Sur',      '25%', '16.54%', '−1.46 pp'],
    ['Centro',    '6%', '17.84%', '−0.16 pp'],
    ['Exterior',  '0%',      '—',          '—']
  ];
  openModal('Margen × zona · detalle 2026', tbl(head, rows) +
    '<div class="mnote">Norte concentra el 69% del volumen y tiene el margen más bajo. Centro tiene el mejor margen pero baja participación. Pregunta clave: ¿cómo elevar el margen en Norte sin perder volumen?</div>');
}

/* Funciones openCli/openSeg reemplazadas por openCliModal/openCliCat/openCliSeg arriba */


/* ============================================================
   HERO VENTAS — animación barra de progreso (re-dispara cada visita)
   ============================================================ */
window._animVtHero = function(){
  var fill = document.getElementById('vtHeroFill');
  if(!fill) return;
  /* Resetear instantáneamente a 0 */
  fill.style.transition = 'none';
  fill.style.width = '0%';
  /* Doble rAF: fuerza reflow entre el reset y la animación */
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      fill.style.transition = 'width 1.1s cubic-bezier(.4,0,.2,1)';
      fill.style.width = '96.99%';
    });
  });
};


/* ============================================================
   DONA: Por Tipo de Venta · 2026
   ============================================================ */
(function(){
  var chEl = document.getElementById('chTipoVenta');
  if(!chEl) return;
  /* Nombres completos — nunca mostrar la sigla como nombre principal (solo como referencia secundaria) */
  var TIPO_META = {
    PR:  {lbl:'Proyecto',                        c1:'#3A5FA8', c2:'#0A1E64'},
    AD:  {lbl:'Adicional',                       c1:'#6EE7D3', c2:'#0F6E56'},
    VSA: {lbl:'V. servicio arquitectura',         c1:'#c3ccd9', c2:'#7b8db0'},
    VSI: {lbl:'V. servicio de ingeniería',        c1:'#f3c88a', c2:'#b45309'}
  };
  var tipoAgg = {};
  ventas2026.forEach(function(r){
    if(!tipoAgg[r.tipo]) tipoAgg[r.tipo] = {cant:0, imp:0};
    tipoAgg[r.tipo].cant++;
    tipoAgg[r.tipo].imp += r.imp;
  });
  var totalCantTipo = ventas2026.length;
  var totalImpTipo = ventas2026.reduce(function(s,r){return s+r.imp;},0);
  var tipoData = Object.keys(TIPO_META).map(function(cod){
    var a = tipoAgg[cod] || {cant:0, imp:0};
    var meta = TIPO_META[cod];
    return {
      cod:cod, lbl:meta.lbl, c1:meta.c1, c2:meta.c2,
      imp:a.imp, cant:a.cant,
      pctCant: totalCantTipo ? a.cant/totalCantTipo*100 : 0,
      pctImp: totalImpTipo ? a.imp/totalImpTipo*100 : 0
    };
  });
  /* Participación por IMPORTE facturado (no por cantidad de operaciones) */
  var defaultCod = tipoData.reduce(function(best,d){ return d.pctImp>best.pctImp?d:best; }, tipoData[0]).cod;
  var centerState = { cod: defaultCod };
  var chartRefTipo = null;

  function drawCenterTipo(chart){
    var d = tipoData.filter(function(x){return x.cod===centerState.cod;})[0];
    if(!d) return;
    var area=chart.chartArea; if(!area) return;
    var ctx2=chart.ctx, w=area.width, h=area.height;
    var cx=area.left+w/2, cy=area.top+h/2;
    var r=Math.min(w,h);
    var gap=Math.min(r*0.1,12);
    ctx2.save();
    ctx2.textAlign='center'; ctx2.textBaseline='middle';
    /* % de importe — dato principal */
    ctx2.fillStyle=d.c2;
    ctx2.font='900 '+Math.min(r*0.185,22)+'px Inter,sans-serif';
    ctx2.fillText(d.pctImp.toFixed(2)+'%',cx,cy-gap*1.05);
    /* Nombre completo del tipo — envuelto en hasta 2 líneas si es largo */
    ctx2.fillStyle='#7b8db0';
    ctx2.font='700 '+Math.min(r*0.07,9.5)+'px Inter,sans-serif';
    var words=d.lbl.split(' '), lines=[], cur='';
    var maxW=w*0.78;
    words.forEach(function(word){
      var test=cur?cur+' '+word:word;
      if(ctx2.measureText(test).width>maxW && cur){ lines.push(cur); cur=word; } else cur=test;
    });
    if(cur) lines.push(cur);
    lines.forEach(function(line,i){ ctx2.fillText(line,cx,cy+gap*0.65+i*(gap*0.85)); });
    /* Importe */
    ctx2.fillStyle='#3d4a6a';
    ctx2.font='700 '+Math.min(r*0.085,10.5)+'px Inter,sans-serif';
    ctx2.fillText(fmtEjecutivo(d.imp),cx,cy+gap*0.65+lines.length*(gap*0.85)+gap*0.6);
    ctx2.restore();
  }

  function setTipoSelection(cod){
    centerState.cod = cod;
    var legEl=document.getElementById('chTipoLeg');
    if(legEl){
      [].slice.call(legEl.querySelectorAll('[data-cod]')).forEach(function(row){
        var isActive = row.getAttribute('data-cod')===cod;
        row.classList.toggle('active', isActive);
        if(isActive) row.scrollIntoView({block:'nearest'});
      });
    }
    if(chartRefTipo) chartRefTipo.update('none');
  }

  chartRefTipo = new Chart(chEl,{
    type:'doughnut',
    data:{
      labels:tipoData.map(function(d){return d.lbl;}),
      datasets:[{
        data:tipoData.map(function(d){return d.imp;}),
        backgroundColor:function(context){
          var chart=context.chart, d=tipoData[context.dataIndex];
          return radialGrad(chart.ctx, chart.chartArea, d.c1, d.c2);
        },
        borderColor:'#ffffff',
        borderWidth:3,
        spacing:3,
        borderRadius:7,
        hoverOffset:10,
        hoverBorderWidth:3
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      cutout:'70%',
      layout:{padding:{top:6,bottom:6,left:6,right:6}},
      animation:{animateRotate:true,animateScale:false,duration:450,easing:'easeOutQuart'},
      onHover:function(evt, elements, chart){ chart.canvas.style.cursor = elements.length ? 'pointer' : 'default'; },
      onClick:function(evt, elements){
        if(!elements.length) return;
        setTipoSelection(tipoData[elements[0].index].cod);
      },
      plugins:{
        legend:{display:false},
        /* Mismo estilo de tooltip que la dona "Participación Top 20" para que ambas
           donas se lean como una misma familia visual. */
        tooltip:{
          backgroundColor:'rgba(9,12,30,.95)',
          padding:{top:10,bottom:10,left:13,right:13},
          cornerRadius:10,
          borderColor:'rgba(62,198,172,.25)',borderWidth:1,
          titleColor:'rgba(255,255,255,.4)',titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.85)',
          callbacks:{
            title:function(items){ return items.length ? tipoData[items[0].dataIndex].lbl : ''; },
            label:function(ctx){
              var d = tipoData[ctx.dataIndex];
              return ' '+fmtEjecutivo(d.imp)+' ('+d.pctImp.toFixed(2)+'%)';
            }
          }
        }
      }
    },
    plugins:[{
      id:'centerTextTipo',
      afterDraw:function(chart){ drawCenterTipo(chart); }
    }]
  });

  /* Leyenda ejecutiva compacta — cuerpo scrolleable 1x1 (Tipo · Importe · % Importe · Cantidad) */
  var legEl=document.getElementById('chTipoLeg');
  if(legEl){
    legEl.innerHTML = tipoData.map(function(d){
      return '<div class="vt-tipo-row" data-cod="'+d.cod+'">'
        +'<span class="vt-tipo-col-tipo"><span class="vt-tipo-dot" style="background:'+d.c2+'"></span>'+d.lbl+'</span>'
        +'<span class="vt-tipo-col-imp">'+fmtEjecutivo(d.imp)+'</span>'
        +'<span class="vt-tipo-col-pct">'+d.pctImp.toFixed(2)+'%</span>'
        +'<span class="vt-tipo-col-cant">'+d.cant+'</span>'
        +'</div>';
    }).join('');
    [].slice.call(legEl.querySelectorAll('[data-cod]')).forEach(function(row){
      row.addEventListener('click',function(){ setTipoSelection(row.getAttribute('data-cod')); });
    });
  }
  /* Fila de total — fija, fuera del cuerpo scrolleable */
  var totalRowEl = document.getElementById('vtTipoTotalRow');
  if(totalRowEl){
    totalRowEl.innerHTML = '<span class="vt-tipo-col-tipo">TOTAL</span>'
      +'<span class="vt-tipo-col-imp">'+fmtEjecutivo(totalImpTipo)+'</span>'
      +'<span class="vt-tipo-col-pct">100.00%</span>'
      +'<span class="vt-tipo-col-cant">'+totalCantTipo+'</span>';
  }
  /* Selección inicial — ya con la leyenda construida, para que el resaltado "active" aplique desde el primer render */
  setTipoSelection(defaultCod);
  /* Total e insight dinámicos — participación explicada por IMPORTE, no por cantidad */
  var totalEl = document.getElementById('vtTipoTotal');
  if(totalEl) totalEl.textContent = 'Total: '+totalCantTipo+' ventas · '+fmtEjecutivo(totalImpTipo);
})();


/* ============================================================
   TABLA DETALLE VENTAS 2026
   ============================================================ */
(function(){
  var tbody=document.getElementById('vt26Body');
  if(!tbody)return;
  /* Ordenar de mayor a menor por importe */
  var rows=[].concat(ventas2026).sort(function(a,b){return b.imp-a.imp;});
  var PG=15, pg=0, sc=-1, sa=true, q='';
  var MES_ORD={Ene:1,Feb:2,Mar:3,Abr:4,May:5,Jun:6,Jul:7};

  var fmt = fmtEjecutivo;
  function mgCls(v){return v>=18?'mg-ok':v>=12?'mg-warn':'mg-crit';}

  /* Totales del período completo (83 registros) — siempre visibles, no dependen del filtro/página */
  var totalImpAll = rows.reduce(function(s,r){return s+r.imp;},0);
  var totalMgAll = rows.reduce(function(s,r){return s+r.imp*r.mg;},0)/totalImpAll;

  /* Encabezado dinámico — cantidad y total real de registros filtrados desde el Excel */
  (function(){
    var infoEl = document.getElementById('vt26Info');
    if(!infoEl) return;
    infoEl.textContent = rows.length+' operaciones · Total: '+fmtEjecutivo(totalImpAll)+' · '+PG+' por página';
  })();

  function renderTable(){
    var fq=q.toLowerCase();
    var filtered=rows.filter(function(r){return r.cli.toLowerCase().includes(fq)||r.mes.toLowerCase().includes(fq)||r.zona.toLowerCase().includes(fq);});
    if(sc>=0){
      filtered=[].concat(filtered).sort(function(a,b){
        var keys=['mes','cli','zona','imp','mg'];
        var k=keys[sc];
        var va=a[k],vb=b[k];
        if(k==='mes'){va=MES_ORD[va]||99;vb=MES_ORD[vb]||99;}
        var c=typeof va==='number'?(va-vb):(va<vb?-1:va>vb?1:0);
        return sa?c:-c;
      });
    }
    var maxP=Math.max(0,Math.ceil(filtered.length/PG)-1);
    if(pg>maxP)pg=maxP;
    var pr=filtered.slice(pg*PG,(pg+1)*PG);
    var html='';
    pr.forEach(function(r){
      html+='<tr>'
        +'<td>'+r.mes+'</td>'
        +'<td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px">'+r.cli+'</td>'
        +'<td><span style="font-size:10px;padding:2px 7px;border-radius:4px;background:#f0f4f9;color:var(--ts);font-weight:600">'+r.zona+'</span></td>'
        +'<td class="r" style="font-weight:700">'+fmt(r.imp)+'</td>'
        +'<td class="r"><span class="'+mgCls(r.mg)+'">'+r.mg.toFixed(2)+'%</span></td>'
        +'</tr>';
    });
    if(!pr.length)html='<tr><td colspan="5" style="text-align:center;color:var(--ts);padding:20px">Sin resultados</td></tr>';
    /* Fila de total — siempre sobre el período completo (83 registros), no sobre el filtro/página actual */
    html += '<tr class="tbl-total-row">'
      +'<td colspan="3" style="font-weight:800">TOTAL ('+rows.length+' operaciones)</td>'
      +'<td class="r" style="font-weight:900">'+fmtEjecutivo(totalImpAll)+'</td>'
      +'<td class="r" style="font-weight:900">'+totalMgAll.toFixed(2)+'%</td>'
      +'</tr>';
    tbody.innerHTML=html;
    var info=document.getElementById('vt26PagInfo');
    if(info)info.textContent='Pág. '+(pg+1)+'/'+(maxP+1)+' · '+filtered.length+' registros';
    var prev=document.getElementById('vt26Prev'),next=document.getElementById('vt26Next');
    if(prev)prev.disabled=pg===0;
    if(next)next.disabled=pg>=maxP;
  }

  /* Sort by header click */
  document.querySelectorAll('#vt26Tbl th[data-col]').forEach(function(th){
    th.style.cursor='pointer';
    th.addEventListener('click',function(){
      var col=+th.getAttribute('data-col');
      if(sc===col)sa=!sa; else{sc=col;sa=col===3||col===4?false:true;}
      document.querySelectorAll('#vt26Tbl th').forEach(function(t){t.classList.remove('sorted');var si=t.querySelector('.sic');if(si)si.textContent='↕';});
      th.classList.add('sorted');var si=th.querySelector('.sic');if(si)si.textContent=sa?'▲':'▼';
      pg=0;renderTable();
    });
  });

  /* Search */
  var srch=document.getElementById('vt26Search');
  if(srch)srch.addEventListener('input',function(){q=this.value;pg=0;renderTable();});

  /* Pagination */
  var prev=document.getElementById('vt26Prev'),next=document.getElementById('vt26Next');
  if(prev)prev.addEventListener('click',function(){pg--;renderTable();});
  if(next)next.addEventListener('click',function(){pg++;renderTable();});

  renderTable();
})();

