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
  26: [4.36,7.94,8.42,12.69,25.73,28.59,29.10,30.01,null,null,null,null]
};

/* ── Margen ponderado acumulado (%) — 2021-2026 ── */
const MCA = {
  21: [15.81,14.17,15.05,10.03,11.49,12.88,13.44,12.43,12.71,12.71,13.10,13.41],
  22: [14.98,13.74,14.94,10.66,12.52,12.83,13.39,13.50,13.97,13.98,14.06,14.10],
  23: [17.73,17.78,15.29,16.51,17.68,17.52,17.49,17.58,17.56,17.46,16.90,17.09],
  24: [16.67,16.42,15.36,15.21,15.55,15.83,15.30,15.25,15.26,15.21,15.30,15.30],
  25: [15.20,15.48,15.11,15.82,15.91,15.49,15.40,15.80,15.81,15.92,16.02,15.96],
  26: [15.10,15.77,15.90,16.69,15.34,15.32,15.37,15.55,null,null,null,null]
};

/* ── Ventas acumuladas — Venta de Servicios (VSA + VSI, US$ MM) ── */
const VC_SRV = {
  21: [0,0.02,0.02,0.04,0.04,0.04,0.04,0.09,0.11,0.11,0.12,0.12],
  22: [0,0,0,0,0,0,0,0,0,0,0,0],
  23: [0,0,0,0,0,0,0,0,0,0,0,0],
  24: [0,0,0,0,0,0,0,0,0,0,0,0],
  25: [0,0,0.03,0.05,0.05,0.06,0.11,0.21,0.30,0.32,0.32,0.33],
  26: [0,0.08,0.08,0.08,0.09,0.10,0.16,0.16,null,null,null,null]
};

/* ── Ventas acumuladas SIN OO.CC y EE.MM (US$ MM) — cruce por CODIGO PROYECTO
   contra hoja "OO.CC Y EEMM"; reemplaza venta/margen solo en los proyectos
   con código coincidente, resto de la data cruda queda igual ── */
const VC_OOCC = {21:[1.55,3.22,4.34,6.4,8.91,12.5,14.42,15.56,16.83,16.87,18.01,20.63],22:[0.23,4.1,7.7,13.33,18.47,19.9,23.37,25.24,25.67,25.81,27.12,30.27],23:[0.67,1.19,3.09,4.62,7.39,8.38,9.88,10.92,10.95,11.55,12.96,14.65],24:[0.08,1,4.59,6.15,9.26,10.42,11.98,12.56,12.9,14.34,14.81,14.91],25:[0.2,1.17,6.12,10.73,12.96,16.51,17.4,22.92,26.99,28.98,31.41,32.42],26:[4.25,7.82,8.31,12.57,21.84,24.70,25.21,26.12,null,null,null,null]};

/* ── Margen ponderado acumulado SIN OO.CC y EE.MM (%) — usa margen frío ajustado
   ponderado por venta ajustada para los proyectos con código coincidente ── */
const MCA_OOCC = {21:[16.69,13.93,14.81,10.12,11.5,12.86,13.4,12.42,12.69,12.7,13.07,13.38],22:[14.98,13.74,14.94,10.67,12.65,12.96,13.51,13.61,14.21,14.22,14.28,14.48],23:[17.73,17.78,16.27,17.55,18.44,18.18,18.05,18.09,18.07,17.93,17.29,17.56],24:[16.67,17.83,15.62,15.61,15.83,16.08,15.5,15.45,15.45,15.46,15.55,15.54],25:[15.2,16.06,16.43,16.69,16.43,16.06,15.93,16.27,16.22,16.31,16.38,16.31],26:[15.23,15.85,15.98,16.75,16.06,15.95,15.99,16.18,null,null,null,null]};

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
    26:[4362016,3578570,481539,4267062,13044891,2860617,507563,909187,0,0,0,0]
  },
  norte:{
    21:[1073934,257020,379433,2041744,1559152,482827,1024067,488536,150224,20343,312581,1334431],
    22:[57347,3433230,215660,2585750,4144792,100194,141924,1721571,1123247,17429,133299,2413],
    23:[388659,11674,2147024,1699794,343575,132426,2925,640313,6251,3357,31021,1559462],
    24:[18480,371629,2331665,1599788,192553,6405,1238261,65145,222056,135702,60851,11261],
    25:[3882,1081789,4713415,3672249,1407724,2139804,412648,1136674,4050638,1446019,2162000,10566],
    26:[3200000,1837982,292455,187219,11543568,17810,4500,721774,0,0,0,0]
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
    26:[215798,1698898,189083,3935327,1118763,2832208,445206,187412,0,0,0,0]
  }
};

/* Estacionalidad promedio por mes (2021-2026) */
const SEAS_PCT = [4.9,7.6,12.0,13.8,19.4,9.6,6.6,7.3,4.6,3.0,4.5,6.7];
const SEAS_AVG_M = [1224922,1886831,2969544,3421676,4815567,2383722,1642627,1815191,1153817,739239,1128307,1656682];


/* ============================================================
   DATA ANÁLISIS DETALLADO — Fuente: "2. Análisis Anual"
   ============================================================ */

/* Refrigerante: Freón / Amoniaco / Otros (US$ MM) */
const REF_DATA = {
  freon:    [9.72,11.78,10.02,6.48,6.47,5.25],
  amoniaco: [9.84,20.44, 4.06,7.45,21.03,22.45],
  otros:    [0.75, 0.97, 1.21,1.53, 7.26, 2.31]
};

/* Tipo de venta: PR / AD / VSA / VSI (% participación y montos nominales) */
const TCV_PCT = {
  PR: [95.3,85.3,93.2,90.8,95.5,95.19],
  AD: [ 4.1, 3.3, 6.8, 9.2, 3.5, 4.28],
  VSA:[ 0.3, 0.0, 0.0, 0.0, 0.9, 0.50],
  VSI:[ 0.3, 0.0, 0.0, 0.0, 0.1, 0.03]
};
const TCV_MONTO = {
  PR: [19355389,28303498,14249025,14024848,33216546,28568208],
  AD: [  832200, 1109472, 1040349, 1426301, 1219229, 1283895],
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

/* ============================================================
   EVOLUCIÓN DE VENTAS — utilidades visuales (no tocan datos ni lógica)
   Mismo sistema gráfico de Ventas 2026: glow sutil en la serie protagonista,
   relleno en degradado para barras y track base bajo cada barra.
   ============================================================ */
function _vtHexA(hex, a){
  var h = String(hex).replace('#','');
  if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
  var n = parseInt(h,16);
  return 'rgba('+((n>>16)&255)+','+((n>>8)&255)+','+(n&255)+','+a+')';
}
function _vtLighten(col, t){
  var r, g, b;
  var c = String(col).trim();
  var m = c.match(/rgba?\(([^)]+)\)/);
  if (m) {                                   /* acepta rgb()/rgba(), no solo hex */
    var pr = m[1].split(',');
    r = parseFloat(pr[0]); g = parseFloat(pr[1]); b = parseFloat(pr[2]);
  } else {
    var h = c.replace('#','');
    if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
    var n = parseInt(h,16);
    r = (n>>16)&255; g = (n>>8)&255; b = n&255;
  }
  if (isNaN(r)||isNaN(g)||isNaN(b)) return c;   /* color no reconocido: se devuelve tal cual */
  r = Math.round(r+(255-r)*t); g = Math.round(g+(255-g)*t); b = Math.round(b+(255-b)*t);
  return 'rgb('+r+','+g+','+b+')';
}

/* Halo suave bajo la serie marcada con _glow — profundidad sin ensuciar la lectura */
window._vtLineGlow = {
  id:'vtLineGlow',
  beforeDatasetDraw:function(chart, args){
    var ds = chart.data.datasets[args.index];
    if (!ds || !ds._glow) return;
    var c = chart.ctx;
    c.save();
    c.shadowColor = ds._glow; c.shadowBlur = ds._glowBlur || 10;
    c.shadowOffsetX = 0; c.shadowOffsetY = 2;
  },
  afterDatasetDraw:function(chart, args){
    var ds = chart.data.datasets[args.index];
    if (!ds || !ds._glow) return;
    chart.ctx.restore();
  }
};

/* Cifras mes a mes sobre los puntos de las series marcadas con _lbl.
   Formato tomado de data-vt-fmt del canvas (mm = ventas, pct = margen),
   igual que el tooltip premium. Se omite la etiqueta si no cabe en el carril
   del mes, antes que saturar la lectura. */
window._vtLineLabels = {
  id:'vtLineLabels',
  afterDatasetsDraw:function(chart){
    var area = chart.chartArea;
    if (!area) return;
    var c = chart.ctx;

    /* Secuencia de entrada: la cifra aparece cuando el trazo ya terminó su
       animación (duración del chart + respiro). Mismo criterio que _vtBarLabels. */
    var st = chart.$vtLnLbl || (chart.$vtLnLbl = {t0:null, raf:0});
    var nowT = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    if (st.t0 === null) st.t0 = nowT;
    function _again(){
      if (st.raf) return;
      st.raf = requestAnimationFrame(function(){ st.raf = 0; if (chart.ctx) chart.draw(); });
    }
    var alpha = 1, rise = 0;
    if (!_vtReduceMotion) {
      var anim = (chart.options && chart.options.animation) || {};
      var wait = (typeof anim.duration === 'number' ? anim.duration : 650) + _VT_LBL_LAG;
      var t = nowT - st.t0 - wait;
      if (t <= 0) { _again(); return; }        /* el gráfico aún se está dibujando */
      var prog = Math.min(1, t / _VT_LBL_DUR);
      alpha = 1 - Math.pow(1 - prog, 3);       /* ease-out cúbico, sin rebote */
      rise = (1 - alpha) * 4;
      if (prog < 1) _again();
    }

    var isPct = chart.canvas.dataset && chart.canvas.dataset.vtFmt === 'pct';
    var fmt = isPct ? function(v){ return v.toFixed(1)+'%'; }
                    : function(v){ return '$'+v.toFixed(2); };
    var n = (chart.data.labels || []).length || 1;
    var slot = (area.right - area.left) / n;
    c.save();
    c.globalAlpha = alpha;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.lineJoin = 'round';
    chart.data.datasets.forEach(function(ds, di){
      if (!ds._lbl) return;
      var meta = chart.getDatasetMeta(di);
      if (!meta || meta.hidden || !meta.data) return;
      var size = ds._lblSize || 9;
      c.font = '800 ' + size + 'px Inter, "Segoe UI", sans-serif';
      var up  = ds._lblUp !== false;
      var gap = ds._lblGap || 12;
      meta.data.forEach(function(pt, i){
        var v = ds.data[i];
        if (v === null || v === undefined) return;
        var q = pt.getProps(['x','y'], true);
        var txt = fmt(v);
        var w = c.measureText(txt).width;
        if (w > slot - 3) return;                 /* no cabe en el carril del mes */
        var y = (up ? q.y - gap : q.y + gap) + rise;
        if (y - size/2 < area.top || y + size/2 > area.bottom) y = up ? q.y + gap : q.y - gap;
        if (y - size/2 < area.top || y + size/2 > area.bottom) return;
        var x = Math.max(area.left + w/2 + 1, Math.min(q.x, area.right - w/2 - 1));
        c.lineWidth = 3.2;
        c.strokeStyle = 'rgba(255,255,255,.94)';  /* halo para separar de la línea */
        c.strokeText(txt, x, y);
        c.fillStyle = ds._lblColor || '#0a0a1e';
        c.fillText(txt, x, y);
      });
    });
    c.restore();
  }
};

/* Relleno en degradado por barra (color base por año).
   El degradado se ancla al LARGO PROPIO de cada barra (base → valor), nunca al
   ancho/alto total del área de dibujo: si se ancla al área completa, el mismo
   degradado se muestrea en un punto distinto cada vez que el segmentador cambia
   el valor (y por lo tanto el largo) de una barra, y el color visible parece
   "cambiar" aunque la función nunca varió. Ancladdo al propio largo, el color
   se ve idéntico sin importar cuánto mida la barra. */
function _vtBarFill(colors, vertical){
  return function(ctx){
    var area = ctx.chart.chartArea;
    var base = colors[ctx.dataIndex] || colors[0];
    if (!area) return base;
    var scales = ctx.chart.scales || {};
    var parsed = ctx.parsed;
    var chartCtx = ctx.chart.ctx;
    var g;
    if (vertical) {
      var yScale = scales.y;
      var yVal = parsed ? parsed.y : null;
      var yEnd = (yScale && yVal !== null && yVal !== undefined) ? yScale.getPixelForValue(yVal) : area.top;
      if (area.bottom - yEnd < 1) return base;             /* barra ~0: degradado inválido */
      g = chartCtx.createLinearGradient(0, yEnd, 0, area.bottom);
      g.addColorStop(0, _vtLighten(base,.30)); g.addColorStop(1, base);
    } else {
      var xScale = scales.x;
      var xVal = parsed ? parsed.x : null;
      var xEnd = (xScale && xVal !== null && xVal !== undefined) ? xScale.getPixelForValue(xVal) : area.right;
      if (xEnd - area.left < 1) return base;                /* barra ~0: degradado inválido */
      g = chartCtx.createLinearGradient(area.left, 0, xEnd, 0);
      g.addColorStop(0, base); g.addColorStop(1, _vtLighten(base,.32));
    }
    return g;
  };
}

function _vtRoundRect(c,x,y,w,h,r){
  r = Math.max(0, Math.min(r, h/2, w/2));
  c.beginPath();
  c.moveTo(x+r,y); c.lineTo(x+w-r,y); c.quadraticCurveTo(x+w,y,x+w,y+r);
  c.lineTo(x+w,y+h-r); c.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  c.lineTo(x+r,y+h); c.quadraticCurveTo(x,y+h,x,y+h-r);
  c.lineTo(x,y+r); c.quadraticCurveTo(x,y,x+r,y);
  c.closePath(); c.fill();
}

/* Track base: carril neutro detrás de cada barra — mejora el contraste
   entre el valor actual y el máximo de referencia del eje */
function _vtBarTrack(opt){
  opt = opt || {};
  return {
    id:'vtBarTrack'+(opt.id||''),
    beforeDatasetsDraw:function(chart){
      var meta = chart.getDatasetMeta(0);
      if (!meta || !meta.data || !chart.chartArea) return;
      var area = chart.chartArea, c = chart.ctx;
      var horiz = chart.options.indexAxis === 'y';
      c.save();
      c.fillStyle = opt.color || 'rgba(10,10,30,.045)';
      meta.data.forEach(function(bar){
        var b = bar.getProps(['x','y','width','height'], true);
        if (horiz) _vtRoundRect(c, area.left, b.y - b.height/2, area.right-area.left, b.height, opt.r||9);
        else       _vtRoundRect(c, b.x - b.width/2, area.top, b.width, area.bottom-area.top, opt.r||9);
      });
      c.restore();
    }
  };
}

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
    _chVA.update();
  }
  if (_chVAB) {
    var dsVAB = _chVAB.data.datasets[0];
    dsVAB.data = _vtAnnualCloseArr(data);
    /* El segmentador sólo cambia los valores: la paleta de las barras se
       re-fija siempre a los colores originales (VT_YR_CFG), nunca a otra */
    dsVAB.backgroundColor = _vtBarFill(dsVAB._baseColors, false);
    dsVAB.hoverBackgroundColor = _vtBarFill(dsVAB._baseColors.map(function(c){ return _vtLighten(c,.12); }), false);
    _chVAB.update();
  }
  var mdata = _vtEffMargin();
  if (_chMA) {
    _chMA.data.datasets.forEach(function(ds, i) { ds.data = mdata[VT_YR_CFG[i].yr]; });
    _chMA.update();
  }
  if (_chMAP) {
    var dsMAP = _chMAP.data.datasets[0];
    dsMAP.data = _vtAnnualCloseArr(mdata);
    dsMAP.backgroundColor = _vtBarFill(dsMAP._baseColors, false);
    dsMAP.hoverBackgroundColor = _vtBarFill(dsMAP._baseColors.map(function(c){ return _vtLighten(c,.12); }), false);
    _chMAP.update();
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
  _vtEvolKpis();
}

/* KPI "Margen ponderado" del hero de Ventas — único elemento del hero que
   reacciona a los segmentadores del tab Evolución de Ventas. Reutiliza
   _vtEffMargin()/_vtYearClose() (misma base filtrada que chMargenAcum y
   chMargenAnualProgress); fuera de ese tab conserva el valor global original. */
var _vtHeroMargenGlobal = { val: 15.55, meta: 18 };
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
  subEl.style.color = up ? '#bbf7d0' : '#fecaca';
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
    /* Años de contexto (2021-2023): mismo color, menor peso visual */
    var bc = cfg.yr <= 23 ? _vtHexA(cfg.c, .58) : cfg.c;
    return {
      label: cfg.label,
      data: data[cfg.yr],
      borderColor: bc,
      borderWidth: cfg.w,
      /* Halo: marcado solo en las series protagonistas */
      _glow: is26 ? 'rgba(10,30,100,.34)' : (is25 ? 'rgba(62,198,172,.30)' : null),
      _glowBlur: is26 ? 12 : 8,
      /* Cifra mes a mes: 2026 arriba de la línea, 2025 debajo */
      _lbl: is26 || is25,
      _lblUp: is26,
      _lblSize: is26 ? 9.5 : 9,
      _lblColor: is26 ? '#0A1E64' : '#0F6E56',
      borderDash: cfg.d,
      /* Permanent visible markers — size varies by year prominence */
      pointRadius: cfg.r,
      pointHoverRadius: cfg.hr,
      pointBackgroundColor: ptBg,
      pointBorderColor: bc,
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
  26:{n:[3.20,1.84,0.29,0.19,11.54,0.02,0,0.72,0,0,0,0],
      s:[0.22,1.70,0.19,3.94,1.12,2.83,0.45,0.19,0,0,0,0],
      c:[0.95,0.04,0,0.14,0.38,0.01,0.06,0,0,0,0,0],
      e:[0,0,0,0,0,0,0,0,0,0,0,0]}
};


/* ============================================================
   DATA VENTAS 2026 — Fuente única: DATA_PRODUC_25.07.xlsx (hoja "Data Cruda")
   Filtro aplicado: Año = 2026, Mes = Enero..Agosto → 101 registros reales.
   Cada fila = 1 operación real (columna "Importe total" y "Margen Comercial").
   Nombres normalizados a Title Case desde el valor exacto del Excel (sin inventar).
   Se fusionaron 2 pares de variantes de escritura del mismo cliente (mismo
   nombre base, misma zona, error evidente de tipeo en la razón social):
     "TAL S A" + "TAL S.A." → "Tal S.A."
     "AGRICOLA HUARMEY S.A." + "AGRICOLA HUARMEY S.A.C." → "Agricola Huarmey S.A.C."
   No se fusionó ningún otro cliente: cada razón social distinta se mantuvo tal cual.

   TIPO DE VENTA: se toma tal cual de la columna "TIPO DE PROYECTO" de la hoja.
   La hoja mezcla dos convenciones equivalentes y aquí se unifican:
   PRY = PR (proyecto) y VSR = VSA (venta de servicio); AD y VSI van igual.
   El tipo declarado manda sobre el prefijo del código: hay 3 filas 2026 donde no
   coinciden (p. ej. EL PEDREGAL, código PRY 2026-0000046, declarado AD).
   ============================================================ */
const ventas2026 = [
  {mes:'May',cli:'Agroberries Peru S.A.C.',zona:'Norte',imp:9500000,mg:13.78,desc:'PLANTA ARANDANO',tipo:'PR'},
  {mes:'Abr',cli:'Corporacion Agrolatina S.A.C.',zona:'Sur',imp:2320000,mg:18.87,desc:'PLANTA UVA',tipo:'PR'},
  {mes:'Jun',cli:'Procesos Agroindustriales Sociedad Anonima',zona:'Sur',imp:2034100.57,mg:14.01,desc:'PLANTA DE PROCESO DE UVA',tipo:'PR'},
  {mes:'Ene',cli:'Tal S.A.',zona:'Norte',imp:1700000,mg:13.09,desc:'PLANTA DE PROCESOS PALTA',tipo:'PR'},
  {mes:'May',cli:'Bomarea S.R.L.',zona:'Norte',imp:1560000,mg:13.81,desc:'PLANTA ARANDANO - 2 ETAPA AMONIACO',tipo:'PR'},
  {mes:'Ene',cli:'Bomarea S.R.L.',zona:'Norte',imp:1500000,mg:15.48,desc:'PLANTA DE PROCESO DE ARÁNDANO',tipo:'PR'},
  {mes:'Feb',cli:'Ta Export S.A.C.',zona:'Sur',imp:1460000,mg:16.35,desc:'PACKING PARA ARANDANOS',tipo:'PR'},
  {mes:'Ene',cli:'Procesadora Torre Blanca S.A.C',zona:'Centro',imp:718498.3,mg:19.46,desc:'AMPLIACION DE PLANTA',tipo:'PR'},
  {mes:'May',cli:'Procesadora Laran SAC',zona:'Sur',imp:715885.05,mg:13.27,desc:'AMPLIACIÓN DE TÚNELES, CÁMARA Y',tipo:'PR'},
  {mes:'Feb',cli:'Agroberries Peru S.A.C.',zona:'Norte',imp:552380.14,mg:15.39,desc:'CONSTRUCCION ACOPIO ARANDANOS',tipo:'PR'},
  {mes:'Feb',cli:'Camposol S.A.',zona:'Norte',imp:497385.27,mg:15.1,desc:'NAVE PRODUCTO TERMINADO',tipo:'PR'},
  {mes:'Abr',cli:'Estanterias Metalicas J.R.M. S.A.C',zona:'Sur',imp:455000,mg:14.24,desc:'CÁMARA DE CONGELADO Y AMBIENTES',tipo:'PR'},
  {mes:'Abr',cli:'Agroindustrias Aib S.A',zona:'Sur',imp:394694.81,mg:15.16,desc:'CÁMARA DE CONGELADOS',tipo:'PR'},
  {mes:'Abr',cli:'Agricola Pampa Baja S.A.C.',zona:'Sur',imp:392255.23,mg:13.94,desc:'AMPLIACIÓN PACKING DE UVA',tipo:'PR'},
  {mes:'May',cli:'Qali Fruits S.A.C.',zona:'Centro',imp:379901.83,mg:15.38,desc:'AMPLIACION CPT',tipo:'PR'},
  {mes:'Feb',cli:'Tal S.A.',zona:'Norte',imp:352587.8,mg:16.79,desc:'ACOPIO DE ARANDANOS',tipo:'PR'},
  {mes:'Ene',cli:'T & T Fruits S.A.',zona:'Centro',imp:227719.49,mg:13.89,desc:'SUMINISTRO E INSTALACION DE SERVICIO DE SISTEMA DE ENFRIAMIENTO PARA CAMARA DE FRIO',tipo:'PR'},
  {mes:'May',cli:'Agricola Pampa Baja S.A.C.',zona:'Sur',imp:221756.97,mg:11.9,desc:'INSTALACION RACK PALLETS RUNNER',tipo:'PR'},
  {mes:'Mar',cli:'Viveros El Tambo S.A.C.',zona:'Norte',imp:216754.9,mg:19.52,desc:'PROYECTO VIVEROS TAMBO',tipo:'PR'},
  {mes:'Ene',cli:'Imbarex S.A.',zona:'Sur',imp:215000,mg:15,desc:'PLANTA PROCESOS CITRICOS Y ARANDANOS',tipo:'AD'},
  {mes:'Jun',cli:'Sun Fruits Exports S.A.',zona:'Sur',imp:211139.96,mg:22.69,desc:'REPOTENCIACION COMPRESOR',tipo:'PR'},
  {mes:'Abr',cli:'Universidad Federico Henriquez Y Carvajal',zona:'Sur',imp:206089.67,mg:37.2,desc:'PACKING DE UVA',tipo:'PR'},
  {mes:'Feb',cli:'Arca Continental Lindley S.A.',zona:'Norte',imp:203678.39,mg:21.3,desc:'SUMINISTRO E INSTALACIÓN DE SERPENTIN',tipo:'PR'},
  {mes:'Jun',cli:'Sun Fruits Exports S.A.',zona:'Sur',imp:184026.24,mg:21.17,desc:'CONDENSADOR - REPONTENCIACION TUNELES',tipo:'PR'},
  {mes:'Abr',cli:'Agricola Huarmey S.A.C.',zona:'Norte',imp:169653.6,mg:16.29,desc:'1° ETAPA PLANTA PROCESO ARANDANO - ADICIONAL',tipo:'AD'},
  {mes:'Feb',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:118131.56,mg:15,desc:'OFICINAS TERMOACÚSTICAS PACKING',tipo:'AD'},
  {mes:'Abr',cli:'Reiter Peruvian Berry S.A.',zona:'Sur',imp:110710,mg:14.17,desc:'AMPLIACION PLANTA',tipo:'PR'},
  {mes:'Mar',cli:'Sociedad Agricola Drokasa S.A.',zona:'Sur',imp:105000,mg:17.92,desc:'REPOTENCIACIÓN DE TÚNELES DE PT',tipo:'PR'},
  {mes:'May',cli:'Sociedad Agricola Drokasa S.A.',zona:'Sur',imp:103585.21,mg:17,desc:'REPOTENCIACIÓN DE TÚNELES DE PT',tipo:'PR'},
  {mes:'Abr',cli:'Ingenieria En Cartones Y Papeles S.A.C.',zona:'Centro',imp:101933.16,mg:20.03,desc:'ICYP - SUMINISTRO E INSTALACIÓN',tipo:'PR'},
  {mes:'May',cli:'Ara Foods Industry S.A.C.',zona:'Norte',imp:100000,mg:20,desc:'TÚNEL CONGELADO',tipo:'PR'},
  {mes:'Feb',cli:'Berry Harvest S.A.',zona:'Norte',imp:97846.74,mg:15,desc:'REFORZAMIENTO ESTRUCTURAL SOLDADURA Y ENSAMBLE PUERTAS',tipo:'AD'},
  {mes:'May',cli:'Bomarea S.R.L.',zona:'Norte',imp:97000,mg:19,desc:'PLANTA PROCESO ARANDANO - 2DA ETAPA AMONIACO-GLICOL',tipo:'AD'},
  {mes:'May',cli:'Q Pack S.A.C.',zona:'Norte',imp:80000.05,mg:17.15,desc:'AMPLIACIÓN SALA DE PROCESOS',tipo:'AD'},
  {mes:'May',cli:'Agricola Huarmey S.A.C.',zona:'Norte',imp:69630.79,mg:17.08,desc:'SUMINISTRO E INSTALACION EQUIPOS Y',tipo:'PR'},
  {mes:'Mar',cli:'Smart Packing S.A.C.',zona:'Norte',imp:68825.16,mg:14.18,desc:'CLIMATIZACIÓN PRE-TÚNELES',tipo:'PR'},
  {mes:'Jun',cli:'Sun Fruits Exports S.A.',zona:'Sur',imp:64950.84,mg:8.17,desc:'ADECUACIÓN DE VANO EN TÚNEL',tipo:'PR'},
  {mes:'Feb',cli:'Florisert S.A.C.',zona:'Sur',imp:61715.57,mg:16.84,desc:'AMPLIACION PROCESADORA FLORES',tipo:'PR'},
  {mes:'Abr',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:56577.26,mg:18.39,desc:'Climatizacion de Camara Mercado Nacional',tipo:'AD'},
  {mes:'Mar',cli:'Imbarex S.A.',zona:'Sur',imp:54100,mg:20.15,desc:'ESTRUCTURA METALICA',tipo:'AD'},
  {mes:'Feb',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:53240.92,mg:19.5,desc:'TERMOMETRIA MAMUT',tipo:'PR'},
  {mes:'Feb',cli:'Agroberries Peru S.A.C.',zona:'Norte',imp:50864.99,mg:15,desc:'CONSTRUCCION ACOPIO ARANDANOS',tipo:'AD'},
  {mes:'Feb',cli:'Agroberries Peru S.A.C.',zona:'Norte',imp:38315,mg:30,desc:'ANTEPROYECTO PLANTA EMPACADORA',tipo:'VSA'},
  {mes:'May',cli:'Agricola Huarmey S.A.C.',zona:'Norte',imp:36416.39,mg:18.58,desc:'TUNEL DE GASIFICADO',tipo:'PR'},
  {mes:'May',cli:'Packing del Carmen S.A.C.',zona:'Sur',imp:36347.87,mg:17.64,desc:'SUMINISTRO DE MATERIALES PARA TÚNELE',tipo:'PR'},
  {mes:'Feb',cli:'Vitafoods Peru S.A.C.',zona:'Centro',imp:35000,mg:30,desc:'SERVICIO ARQUITECTURA',tipo:'VSA'},
  {mes:'Feb',cli:'Q Pack S.A.C.',zona:'Norte',imp:30773.49,mg:15,desc:'PACKING DE ARANDANOS',tipo:'AD'},
  {mes:'May',cli:'Berry Harvest S.A.',zona:'Norte',imp:27857.31,mg:19.15,desc:'DESMONTAJE PISOS Y MONTAJE TRIPLAY',tipo:'AD'},
  {mes:'Abr',cli:'Delice S.A.C',zona:'Centro',imp:25500,mg:23,desc:'SUMINISTRO E INSTALACION RACKS',tipo:'AD'},
  {mes:'May',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:24000,mg:18,desc:'IMPLEMENTACION DE SISTEMA DE GASIFICADO',tipo:'AD'},
  {mes:'May',cli:'Berry Harvest S.A.',zona:'Norte',imp:20966.56,mg:25,desc:'SUMINISTRO E INSTALACION ELECTRICA',tipo:'AD'},
  {mes:'Mar',cli:'Agro Floral Peru S.A.C.',zona:'Sur',imp:19881.8,mg:16.14,desc:'SUMINISTRO E INSTALACION DE CORTINAS DE AIRE',tipo:'AD'},
  {mes:'May',cli:'Tal S.A.',zona:'Norte',imp:17671.66,mg:25,desc:'ADICIONAL TUBERIAS Y ASILAMIENTO CONEXION EVAPORADORES',tipo:'AD'},
  {mes:'Abr',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:17565.18,mg:17.34,desc:'MANTENIMIENTO PANELES PACKING AQU ANQ',tipo:'PR'},
  {mes:'Abr',cli:'Delice S.A.C',zona:'Centro',imp:17083.21,mg:12.55,desc:'RAMPAS ENCUENTOS Y BOMBA CONDESADO',tipo:'AD'},
  {mes:'May',cli:'Agricola Pampa Baja S.A.C.',zona:'Sur',imp:12000,mg:30,desc:'ANTEPROYECTO DE PLANTA EMPAQUE',tipo:'VSA'},
  {mes:'May',cli:'Q Pack S.A.C.',zona:'Norte',imp:10183.62,mg:17.29,desc:'ALQUILER DE MONTACARGAS CONTENEDORMONTAJE LINEA',tipo:'AD'},
  {mes:'Jun',cli:'Vitafoods Peru S.A.C.',zona:'Centro',imp:8470,mg:14.99,desc:'ESTUDIO SISTEMA GESTION AGUA',tipo:'VSI'},
  {mes:'May',cli:'El Parque Alaya Packing S.A.C.',zona:'Norte',imp:8441.32,mg:12.27,desc:'Ampliación de Planta de Proceso - ESCENARIO 2',tipo:'AD'},
  {mes:'Jun',cli:'Consorcio Agricola Moquegua S.A.C.',zona:'Sur',imp:8240,mg:25.01,desc:'BATERIAS REPONTENCIACION TUNELES',tipo:'PR'},
  {mes:'Feb',cli:'El Parque Alaya Packing S.A.C.',zona:'Norte',imp:7500,mg:15,desc:'AMPLIACION PACKING',tipo:'AD'},
  {mes:'Mar',cli:'Smart Packing S.A.C.',zona:'Norte',imp:6875,mg:14.24,desc:'UNIDAD CONDENSADORA DANFOSS',tipo:'PR'},
  {mes:'Mar',cli:'Cia. de Exp. y Negocios Grles. S.A. (COEXA)',zona:'Sur',imp:6840.69,mg:8.06,desc:'IMPLEMENTACION DE PACKING',tipo:'PR'},
  {mes:'Feb',cli:'Agro Floral Peru S.A.C.',zona:'Centro',imp:6690,mg:15,desc:'AMPLIACION DE PLANTA',tipo:'AD'},
  {mes:'Feb',cli:'Prosembra Sociedad Anonima Cerrada',zona:'Sur',imp:5810,mg:15,desc:'PACKING ARANDANOS',tipo:'AD'},
  {mes:'May',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:5725.28,mg:15.5,desc:'SUMINISTRO E INSTALACION VENTILADOR',tipo:'AD'},
  {mes:'May',cli:'Bomarea S.R.L.',zona:'Norte',imp:5368.75,mg:20,desc:'REPARACION PANELES',tipo:'PR'},
  {mes:'May',cli:'Santa Sofia del Sur S.A.C.',zona:'Sur',imp:5187.52,mg:15,desc:'NIVELADOR HIDRAULICO',tipo:'AD'},
  {mes:'Feb',cli:'Danper Trujillo S.A.C.',zona:'Norte',imp:5000,mg:30,desc:'ANTEPROYECTO PLANTA CONGELADO MANGO',tipo:'VSA'},
  {mes:'May',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:4306.7,mg:18.2,desc:'SUMINISTRO E INSTALACION PUERTA CORREDERA',tipo:'AD'},
  {mes:'Mar',cli:'Agro Floral Peru S.A.C.',zona:'Sur',imp:3261,mg:17.93,desc:'SUMINISTRO E INSTALACION DE PUERTA CORREDERA',tipo:'AD'},
  {mes:'Jun',cli:'Agricola Pampa Baja S.A.C.',zona:'Sur',imp:2700,mg:30,desc:'LEVANTAMIENTO INFORMACION ARQUITECTURA',tipo:'VSA'},
  {mes:'Jun',cli:'Q Pack S.A.C.',zona:'Norte',imp:2700,mg:-82.59,desc:'ESTRUCTURA TUBERIAS NH3 SADEMA',tipo:'AD'},
  {mes:'May',cli:'Procesadora Torre Blanca S.A.C',zona:'Centro',imp:2658.59,mg:29.47,desc:'FOSA PARA TABLEROS',tipo:'AD'},
  {mes:'Jun',cli:'Austral Group S.A.A.',zona:'Norte',imp:2310,mg:12.94,desc:'PUESTA EN MARCHA DE COMPRESOR FRICK R',tipo:'AD'},
  {mes:'Jun',cli:'Agro Floral Peru S.A.C.',zona:'Centro',imp:2130,mg:13.31,desc:'MANTENIMIENTO UCS',tipo:'AD'},
  {mes:'Jun',cli:'Smart Packing S.A.C.',zona:'Norte',imp:1996.83,mg:17,desc:'SUMINSTRO E INSTALACION VENTILADOR ESCLUSA',tipo:'PR'},
  {mes:'Jun',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:1900,mg:13.58,desc:'SUMINISTRO E INSTALACION PUERTA EMERGENCIA',tipo:'AD'},
  {mes:'Jun',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:1414.83,mg:17.08,desc:'DESMONTAJE Y MONTAJE PUERTA CORREDERAS',tipo:'AD'},
  {mes:'Feb',cli:'El Rocio S.A.',zona:'Norte',imp:890,mg:15,desc:'DESMONTAJE Y MONTAJE PANELES',tipo:'AD'},
  {mes:'Ene',cli:'Uvica S.A.C.',zona:'Sur',imp:798,mg:15,desc:'OFICINAS UVICA',tipo:'AD'},
  {mes:'Feb',cli:'Agroindustria Frutos de Oro S.A.C.',zona:'Norte',imp:760,mg:15,desc:'INSTALACIÓN DE MOTORES Y MODIFICACION P.CORREDERA',tipo:'AD'},
  {mes:'Jun',cli:'Sociedad Agricola 3P S.A.C.',zona:'Sur',imp:500,mg:20,desc:'MANTENIMIENTO DE COMPRESOR PACKING',tipo:'AD'},
  {mes:'Jul',cli:'Sociedad Agricola Drokasa S.A.',zona:'Sur',imp:435000,mg:16.46,desc:'TÚNELES MP',tipo:'PR'},
  {mes:'Jun',cli:'Sociedad Agricola Drokasa S.A.',zona:'Sur',imp:325000,mg:16,desc:'MODIFICACIÓN DE TÚNEL RÁPIDO',tipo:'PR'},
  {mes:'Jul',cli:'In Vitro Lab Perú S.A.C.',zona:'Centro',imp:57857,mg:26.38,desc:'EXPEDIENTE TECNICO',tipo:'VSA'},
  {mes:'Jun',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:7488.07,mg:13,desc:'REPARACION JUNTAS LOSA',tipo:'PR'},
  {mes:'Jul',cli:'Consorcio Agricola Moquegua S.A.C.',zona:'Sur',imp:6016,mg:25,desc:'REPARACIÓN DE FUGA',tipo:'AD'},
  {mes:'Jul',cli:'Aqu Anqa S.A.C.',zona:'Norte',imp:4500,mg:23.33,desc:'MANTENIMIENTO RAMPAS VERTICALES',tipo:'AD'},
  {mes:'Jun',cli:'Family Farms Perú S.R.L.',zona:'Sur',imp:1550,mg:20,desc:'INSTALACION Y SUMINISTRO PUERTA BATIENTE',tipo:'AD'},
  {mes:'Ago',cli:'Agroindustrias Aib S.A',zona:'Norte',imp:611603.32,mg:21.85,desc:'AMPLIACIÓN PLANTA DE CONGELADOS',tipo:'PR'},
  {mes:'Ago',cli:'Agricola Safco Peru S.A.',zona:'Sur',imp:153872.62,mg:24.22,desc:'SUMINISTRO E INSTALACIÓN DE CONDENSAD',tipo:'PR'},
  {mes:'Ago',cli:'Agricola Huarmey S.A.C.',zona:'Norte',imp:33994.43,mg:16.31,desc:'SUMINISTRO E INSTALACION CORTINAS',tipo:'PR'},
  {mes:'Ago',cli:'Uvica S.A.C.',zona:'Sur',imp:33539.69,mg:17.92,desc:'IMPLEMENTACIÓN DE CÁMARA DE GASIFICAD',tipo:'PR'},
  {mes:'Ago',cli:'Agricola Huarmey S.A.C.',zona:'Norte',imp:26316.26,mg:19.24,desc:'ADICIONAL MODIFICACION TUBERIA',tipo:'AD'},
  {mes:'Ago',cli:'El Pedregal S.A.',zona:'Norte',imp:21297,mg:5,desc:'TERMOMETRIA INALAMBRICA P NUEVOS TUN',tipo:'AD'},
  {mes:'Ago',cli:'Agricola Huarmey S.A.C.',zona:'Norte',imp:14820.87,mg:22.5,desc:'PUERTAS BATIENTE CAMARA GASIFICADO',tipo:'AD'},
  {mes:'Ago',cli:'Viru Frozen S.A.',zona:'Norte',imp:4612.5,mg:20,desc:'DESMONTAJE DE DESHUMIDIFICADORES',tipo:'PR'},
  {mes:'Ago',cli:'Q Pack S.A.C.',zona:'Norte',imp:4580,mg:20,desc:'MANTENIMIENTO COMPRESORES',tipo:'AD'},
  {mes:'Ago',cli:'Q Pack S.A.C.',zona:'Norte',imp:4550,mg:28.9,desc:'SUMINSTRO E INSTALACION ALARMA FUGA NH3',tipo:'AD'},
  {mes:'Jul',cli:'Agricola Pampa Baja S.A.C.',zona:'Sur',imp:4190,mg:16.42,desc:'SISTEMA ENFRIAMIENTO CABEZALES',tipo:'AD'}
];


/* ============================================================
   ESTACIONALIDAD — helpers de dataset y filtro de zona
   ============================================================ */
function _seasDsData(zone, yr) {
  var raw = ZMON[zone][yr];
  return raw.map(function(v, i) {
    if (yr === 26 && i >= 8) return null; /* meses sin datos en 2026 */
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

/* Tooltip del mapa de calor — dos niveles de lectura (contexto arriba, cifra
   abajo) con el mismo lenguaje que los tooltips de Chart.js de esta pestaña.
   `title` llega como "contexto|cifra"; sin separador se pinta en una sola línea. */
function _hmTipShow(ev, title) {
  if (!_hmTip) {
    _hmTip = document.createElement('div');
    _hmTip.style.cssText = 'position:fixed;z-index:9999;pointer-events:none;opacity:0;'
      + 'transition:opacity .15s ease,transform .15s ease;transform:translateY(3px);'
      + 'background:rgba(9,12,30,.96);border:1px solid rgba(79,168,224,.30);'
      + 'border-radius:10px;padding:9px 13px;font-family:Inter,sans-serif;'
      + 'box-shadow:0 14px 40px rgba(10,10,30,.36),0 3px 10px rgba(10,10,30,.2);'
      + 'white-space:nowrap;letter-spacing:.2px;line-height:1.35';
    document.body.appendChild(_hmTip);
  }
  var parts = String(title).split('|');
  _hmTip.innerHTML = '<div style="font-size:9.5px;font-weight:700;letter-spacing:.9px;'
    + 'text-transform:uppercase;color:rgba(255,255,255,.45)">' + parts[0] + '</div>'
    + (parts.length > 1
        ? '<div style="font-size:13.5px;font-weight:800;color:#fff;margin-top:2px">' + parts[1] + '</div>'
        : '');
  _hmTip.style.opacity = '1';
  _hmTip.style.transform = 'none';
  _hmTip.style.left = (ev.clientX + 16) + 'px';
  _hmTip.style.top  = (ev.clientY - 44) + 'px';
}
function _hmTipHide() { if (_hmTip) { _hmTip.style.opacity = '0'; _hmTip.style.transform = 'translateY(3px)'; } }
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

  /* Progresión cromática por importe — escala premium navy → teal → aqua → ámbar.
     Arranca en el navy de profundidad de la app, pasa por el celeste/turquesa ya
     usados en Ventas 2026 y Evolución, abre a un aqua claro y reserva el ámbar/
     naranja para los importes más altos (pico, no alerta). */
  var stops = [
    [0.00,  22, 41, 74],   /* navy profundo            */
    [0.20,  17, 84,106],   /* teal oscuro              */
    [0.42,  26,145,140],   /* teal medio               */
    [0.60,  62,198,172],   /* turquesa brand #3EC6AC   */
    [0.78, 150,228,196],   /* aqua claro               */
    [0.90, 243,196, 90],   /* ámbar claro              */
    [1.00, 216,120, 40]    /* naranja — pico de serie  */
  ];
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
  /* "contexto|cifra" — el tooltip parte por "|" para pintar los dos niveles */
  var mesLargo = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
                  'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  var zonaLbl  = {total:'Todas las zonas', norte:'Zona Norte', centro:'Zona Centro', sur:'Zona Sur'};
  function cellTitle(yr,m,v) {
    var yStr='20'+(yr<10?'0':'')+yr;
    var vStr=v&&v>0?(v>=1000000?'$'+(v/1000000).toFixed(3)+'M':(v>=1000?'$'+Math.round(v/1000)+'K':'$'+v)):'Sin datos';
    return mesLargo[m]+' '+yStr+' · '+(zonaLbl[zone]||zonaLbl.total)+'|'+vStr;
  }

  var h = '<table class="hmap-table"><thead><tr>';
  h += '<th class="hmap-yr-th" style="vertical-align:bottom;padding-bottom:9px;width:7%">&nbsp;</th>';
  mes.forEach(function(m){ h += '<th class="hmap-th">'+m+'</th>'; });
  h += '</tr></thead><tbody>';

  /* Aparición progresiva: cada celda recibe su propio retardo (--d) en diagonal,
     de modo que el mapa se "revela" de arriba-izquierda a abajo-derecha. */
  years.forEach(function(yr, yi){
    var yData = data[yr]||[];
    var yStr  = '20'+(yr<10?'0':'')+yr;
    h += '<tr><td class="hmap-yr-th">'+yStr+'</td>';
    for(var m=0;m<12;m++){
      var v = yData[m];
      var isFuture = (yr===26 && m>=8);
      var isEmpty  = (v===null||v===undefined||v===0||isFuture);
      var tipText  = cellTitle(yr,m,isEmpty?0:v);
      var delay    = 'style="--d:'+((yi*3 + m*9))+'ms;';
      var evts     = ' onmouseenter="_hmTipShow(event,\''+tipText+'\')"'
                   + ' onmouseleave="_hmTipHide()" onmousemove="_hmTipMove(event)"';
      if(isEmpty){
        var stripeStyle = isFuture
          ? 'background:repeating-linear-gradient(135deg,#f2f5fa 0px,#f2f5fa 4px,#e7edf5 4px,#e7edf5 8px)'
          : 'background:#f4f7fb';
        h += '<td class="hmap-cell is-empty" '+delay+stripeStyle+';color:#c8d0de;'
          + 'box-shadow:inset 0 0 0 1px rgba(10,10,30,.03)"'+evts+'></td>';
      } else {
        var t  = Math.sqrt(v/vmax);
        var c  = interpHm(t);
        var bg = 'rgb('+c[0]+','+c[1]+','+c[2]+')';
        /* Contraste del texto según la intensidad real de la celda (luminancia
           percibida): tinta clara sobre navy/teal, navy sobre aqua y ámbar. */
        var lum = 0.299*c[0]+0.587*c[1]+0.114*c[2];
        var tx = lum>152?'#0B2136':'rgba(255,255,255,.95)';
        var lbl= cellFmt(v);
        h += '<td class="hmap-cell" '+delay+'background:'+bg+';color:'+tx+'"'+evts+'>'+lbl+'</td>';
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

/* ============================================================
   ETIQUETAS DE VALOR SOBRE BARRAS — tab Ventas
   Dibuja el valor de cada barra directamente sobre el canvas, sin hover y sin
   depender de plugins externos (no se agrega ninguna librería). Se registra por
   gráfico vía `plugins:[..., _vtBarLabels({...})]` y corre en afterDatasetsDraw,
   después del sheen, para que nada lo tape.

   No toca datos, escalas, colores, tipos de gráfico ni tooltips: solo pinta texto.

   ENTRADA — la etiqueta no aparece junto con la barra: espera a que ESA barra
   termine de crecer y recién entra con un fundido sutil (opacity 0→1 + 5px de
   desplazamiento vertical, ~300ms, ease-out). El momento de arranque se deriva
   de la animación real del gráfico (`options.animation.duration` y, si existe,
   `delay` escalonado por barra), no de un tiempo fijo: si mañana cambia la
   duración de las barras, las etiquetas se reacomodan solas.
   ============================================================ */

/* Luminancia relativa WCAG de un color CSS (#hex o rgb/rgba). Devuelve null si
   no es un color plano legible (p. ej. un CanvasGradient). */
function _vtRelLum(color){
  if (typeof color !== 'string') return null;
  var c = color.trim(), r, g, b;
  if (c.charAt(0) === '#') {
    if (c.length === 4)      { r=parseInt(c[1]+c[1],16); g=parseInt(c[2]+c[2],16); b=parseInt(c[3]+c[3],16); }
    else if (c.length >= 7)  { r=parseInt(c.substr(1,2),16); g=parseInt(c.substr(3,2),16); b=parseInt(c.substr(5,2),16); }
    else return null;
  } else {
    var m = c.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    var p = m[1].split(',');
    r=parseFloat(p[0]); g=parseFloat(p[1]); b=parseFloat(p[2]);
    if (p.length > 3 && parseFloat(p[3]) < 0.5) return null; /* casi transparente */
  }
  if (isNaN(r)||isNaN(g)||isNaN(b)) return null;
  function lin(v){ v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); }
  return 0.2126*lin(r) + 0.7152*lin(g) + 0.0722*lin(b);
}

var _VT_LBL_DARK  = '#0a0a1e';                /* tinta sobre superficie clara */
var _VT_LBL_LIGHT = 'rgba(255,255,255,.95)';  /* tinta sobre superficie oscura */
var _VT_LUM_DARK  = 0.0037;                   /* luminancia de #0a0a1e */
var _VT_LBL_GAP   = 7;                        /* separación barra → número (px) */
var _VT_LBL_RISE  = 5;                        /* desplazamiento de entrada (px) */
var _VT_LBL_DUR   = 300;                      /* duración del fundido (ms) */
var _VT_LBL_LAG   = 80;                       /* respiro tras cerrar la barra (ms) */
var _vtReduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

/* Elige blanco o navy según cuál contrasta más contra el relleno dado */
function _vtBarBaseColor(ds, i, bar){
  if (ds && ds._baseColors) return ds._baseColors[i] || ds._baseColors[0];
  return bar && bar.options ? bar.options.backgroundColor : null;
}
function _vtInkOn(fill){
  var L = _vtRelLum(fill);
  if (L === null) return _VT_LBL_DARK;
  var cWhite = 1.05 / (L + 0.05);
  var cDark  = (L + 0.05) / (_VT_LUM_DARK + 0.05);
  return cWhite >= cDark ? _VT_LBL_LIGHT : _VT_LBL_DARK;
}

/* Tinta para etiquetas fuera de la barra: se lee el fondo real de la card, de
   modo que la etiqueta se adapta sola a tema claro u oscuro. Cacheado 1s porque
   el sheen redibuja a 60fps y getComputedStyle no es gratis. */
function _vtInkOnSurface(chart){
  var now = Date.now();
  if (chart.$vtInk && now - chart.$vtInkT < 1000) return chart.$vtInk;
  var el = chart.canvas ? chart.canvas.parentNode : null, n = 0;
  while (el && el.nodeType === 1 && n < 6) {
    var L = _vtRelLum(getComputedStyle(el).backgroundColor);
    if (L !== null) { chart.$vtInk = (L < 0.5 ? _VT_LBL_LIGHT : _VT_LBL_DARK); chart.$vtInkT = now; return chart.$vtInk; }
    el = el.parentNode; n++;
  }
  chart.$vtInk = _VT_LBL_DARK; chart.$vtInkT = now;
  return _VT_LBL_DARK;
}

/* Instante (ms desde el inicio de la animación) en que ESA barra termina de
   crecer = delay propio + duración. Lee la config real del gráfico para respetar
   un escalonado si algún día se agrega. */
function _vtBarEnd(chart, di, i){
  var dur = 900, dly = 0;
  try {
    var an = chart.options && chart.options.animation;
    if (an) {
      var c = {chart:chart, type:'data', datasetIndex:di, dataIndex:i, mode:'default'};
      var d = (typeof an.duration === 'function') ? an.duration(c) : an.duration;
      var y = (typeof an.delay === 'function') ? an.delay(c) : an.delay;
      if (typeof d === 'number' && isFinite(d)) dur = d;
      if (typeof y === 'number' && isFinite(y)) dly = y;
    }
  } catch(e) { /* config no estándar: se usa el valor por defecto */ }
  return dly + dur;
}

/* Fábrica del plugin.
   opt.fmt(valor, indice, indiceDataset) -> string ('' u omitido = no se pinta)
   opt.size  tamaño base en px (se reduce hasta opt.min si no cabe)
   opt.min   tamaño mínimo antes de omitir la etiqueta */
function _vtBarLabels(opt){
  opt = opt || {};
  var BASE = opt.size || 10.5, MIN = opt.min || 8.5, FAM = "'Inter','Segoe UI',sans-serif";
  return {
    id: 'vtBarValueLabels',

    /* Reinicia el reloj cuando las barras vuelven a animarse (carga inicial y
       cambios del filtro de Segmento). En 'resize' no, para no re-animar
       mientras se arrastra la ventana. */
    afterUpdate: function(chart, args){
      if (args && args.mode === 'resize') return;
      chart.$vtLbl = {t0:null, raf:0};
    },

    afterDatasetsDraw: function(chart){
      var area = chart.chartArea;
      if (!area || typeof opt.fmt !== 'function') return;
      var ctx = chart.ctx;
      var st = chart.$vtLbl || (chart.$vtLbl = {t0:null, raf:0});
      var now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      if (st.t0 === null) st.t0 = now;

      var horiz = chart.options.indexAxis === 'y';
      var inkOut = opt.ink || _vtInkOnSurface(chart);
      var nCat = (chart.data.labels || []).length || 1;
      /* Espacio disponible por categoría — evita que dos etiquetas se toquen */
      var slot = horiz ? (area.bottom - area.top) / nCat : (area.right - area.left) / nCat;
      var pending = false;

      ctx.save();
      ctx.textAlign = 'center';

      chart.data.datasets.forEach(function(ds, di){
        var meta = chart.getDatasetMeta(di);
        if (!meta || meta.hidden) return;
        meta.data.forEach(function(bar, i){
          var raw = ds.data[i];
          if (raw === null || raw === undefined || isNaN(raw)) return;
          var txt = opt.fmt(raw, i, di);
          if (!txt) return;

          /* ── Progreso de entrada de ESTA etiqueta ── */
          var prog;
          if (_vtReduceMotion) {
            prog = 1;
          } else {
            var t = now - st.t0 - _vtBarEnd(chart, di, i) - _VT_LBL_LAG;
            if (t <= 0) { pending = true; return; }   /* la barra aún está creciendo */
            prog = Math.min(1, t / _VT_LBL_DUR);
            if (prog < 1) pending = true;
          }
          var e = 1 - Math.pow(1 - prog, 3);          /* ease-out cúbico, sin rebote */
          var rise = (1 - e) * _VT_LBL_RISE;

          var p = bar.getProps(['x','y','base'], true);
          if (p.base === undefined) return;

          /* Ajuste de tamaño hasta que la etiqueta quepa en su carril */
          var size = BASE, w;
          ctx.font = '800 ' + size + 'px ' + FAM;
          w = ctx.measureText(txt).width;
          if (!horiz) {
            while (w > slot - 6 && size > MIN) {
              size -= 0.5; ctx.font = '800 ' + size + 'px ' + FAM; w = ctx.measureText(txt).width;
            }
            if (w > slot - 2) return; /* no cabe: se omite antes que saturar */
          } else if (slot < size + 4) {
            return;                   /* carriles demasiado juntos en vertical */
          }

          ctx.globalAlpha = e;

          if (horiz) {
            var len = Math.abs(p.x - p.base);
            var end = p.x, dir = (p.x >= p.base) ? 1 : -1;
            ctx.textBaseline = 'middle';
            if (!opt.outside && len >= w + 18) {        /* cabe dentro de la barra */
              ctx.fillStyle = _vtInkOn(_vtBarBaseColor(ds, i, bar));
              ctx.textAlign = dir > 0 ? 'right' : 'left';
              ctx.fillText(txt, end - dir * 8, p.y + rise);
            } else {                                    /* si no, justo al lado */
              var xo = end + dir * 7;
              if (dir > 0 && xo + w > area.right) xo = area.right - w - 1;
              ctx.fillStyle = inkOut;
              ctx.textAlign = dir > 0 ? 'left' : 'right';
              ctx.fillText(txt, xo, p.y + rise);
            }
            ctx.textAlign = 'center';
          } else {
            var top = Math.min(p.y, p.base), lenV = Math.abs(p.base - p.y);
            var yOut = top - _VT_LBL_GAP;
            if (yOut - size >= area.top) {              /* encima de la barra */
              ctx.fillStyle = inkOut;
              ctx.textBaseline = 'bottom';
              ctx.fillText(txt, p.x, yOut + rise);
            } else if (lenV >= size + 16) {             /* sin aire arriba: dentro */
              ctx.fillStyle = _vtInkOn(_vtBarBaseColor(ds, i, bar));
              ctx.textBaseline = 'top';
              ctx.fillText(txt, p.x, top + _VT_LBL_GAP + rise);
            } else {                                    /* barra mínima al tope */
              ctx.fillStyle = inkOut;
              ctx.textBaseline = 'top';
              ctx.fillText(txt, p.x, area.top + 1 + rise);
            }
          }
          ctx.globalAlpha = 1;
        });
      });
      ctx.restore();

      /* Mientras haya etiquetas entrando, se pide otro frame. Mismo patrón que
         _triggerSheen; el bucle se detiene solo al completar el fundido. */
      if (pending && !st.raf) {
        st.raf = requestAnimationFrame(function(){
          st.raf = 0;
          if (chart.ctx) chart.draw();
        });
      }
    }
  };
}

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
    plugins:[window._vtLineGlow, window._sheenPlugin, window._vtLineLabels],
    options:{..._vtSharedOpts,
      animation:{..._vtSharedOpts.animation, duration:650, easing:'easeOutQuart',
        onComplete:function(a){window._triggerSheen(a.chart);}},
      scales:{..._vtSharedOpts.scales,
        y:{..._vtSharedOpts.scales.y, ticks:{..._vtSharedOpts.scales.y.ticks,
          callback:function(v){return '$'+v+'MM';}}}}}});
}
if (_elMA) {
  _chMA = new Chart(_elMA, {type:'line', data:{labels:meses, datasets:_vtDs(MCA)},
    plugins:[window._vtLineGlow, window._sheenPlugin, window._vtLineLabels],
    options:{..._vtSharedOpts,
      animation:{..._vtSharedOpts.animation, duration:650, easing:'easeOutQuart',
        onComplete:function(a){window._triggerSheen(a.chart);}},
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
        _baseColors: VT_YR_CFG.map(function(c){ return c.c; }),
        backgroundColor: _vtBarFill(VT_YR_CFG.map(function(c){ return c.c; }), false),
        hoverBackgroundColor: _vtBarFill(VT_YR_CFG.map(function(c){ return _vtLighten(c.c,.12); }), false),
        borderRadius:{topLeft:0,topRight:9,bottomLeft:0,bottomRight:9},
        borderSkipped:false,
        maxBarThickness:28,
        barPercentage:0.72,
        categoryPercentage:0.8
      }]
    },
    /* Etiqueta de importe encima de cada barra — visible sin hover (data en US$ MM) */
    plugins:[_vtBarTrack({id:'VAB', r:9}), window._sheenPlugin,
             _vtBarLabels({outside:true, ink:'#3d4a6a', fmt:function(v){ return fmtEjecutivo(v*1e6); }})],
    options:{
      responsive:true, maintainAspectRatio:false, indexAxis:'y',
      animation:{duration:650, easing:'easeOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      animations:{colors:{duration:0}},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(9,12,30,.95)', padding:{top:11,bottom:11,left:13,right:13}, cornerRadius:10,
          borderColor:'rgba(62,198,172,.25)', borderWidth:1,
          titleColor:'rgba(255,255,255,.4)', titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.85)', bodyFont:{size:12,weight:'600'},
          callbacks:{
            title:function(items){ return items.length ? items[0].label : ''; },
            label:function(ctx){ return 'Ventas acumuladas: ' + fmtMM(ctx.parsed.x); },
            afterLabel:function(ctx){ return ctx.dataIndex === 5 ? 'YTD Ene–Ago 2026' : null; }
          }
        }
      },
      scales:{
        /* Holgura del ~16% sobre el maximo para que la cifra quepa a la DERECHA de
           la barra mas larga sin agrandar la card. Es solo tope de eje: no toca
           datos y se recalcula al filtrar segmento. */
        x:{grid:{color:'rgba(10,10,30,.04)'}, border:{display:false},
           afterDataLimits:function(sc){ if(sc.max > 0) sc.max = sc.max * 1.16; },
           ticks:{font:{size:10}, color:'#94a3b8', callback:function(v){return '$'+v+'MM';}}},
        y:{grid:{display:false}, border:{display:false},
           ticks:{color:'#94a3b8', padding:4,
             font:function(c){ return {size:10, weight: c.index === 5 ? '800' : '600'}; }}}
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
        _baseColors: VT_YR_CFG.map(function(c){ return c.c; }),
        backgroundColor: _vtBarFill(VT_YR_CFG.map(function(c){ return c.c; }), false),
        hoverBackgroundColor: _vtBarFill(VT_YR_CFG.map(function(c){ return _vtLighten(c.c,.12); }), false),
        borderRadius:{topLeft:0,topRight:9,bottomLeft:0,bottomRight:9},
        borderSkipped:false,
        maxBarThickness:28,
        barPercentage:0.72,
        categoryPercentage:0.8
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false, indexAxis:'y',
      animation:{duration:650, easing:'easeOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      animations:{colors:{duration:0}},
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
        x:{min:0, max:22, grid:{color:'rgba(10,10,30,.04)'}, border:{display:false},
           ticks:{font:{size:10}, color:'#94a3b8', callback:function(v){return v+'%';}}},
        y:{grid:{display:false}, border:{display:false},
           ticks:{color:'#94a3b8', padding:4,
             font:function(c){ return {size:10, weight: c.index === 5 ? '800' : '600'}; }}}
      }
    },
    plugins:[{
      id:'metaLine18',
      afterDraw:function(chart){
        var xs = chart.scales.x, x = xs.getPixelForValue(18), c2 = chart.ctx;
        c2.save(); c2.strokeStyle = '#EF9F27'; c2.lineWidth = 1.5; c2.setLineDash([4,3]);
        c2.beginPath(); c2.moveTo(x, chart.chartArea.top); c2.lineTo(x, chart.chartArea.bottom); c2.stroke();
        c2.restore();
      }
    }, _vtBarTrack({id:'MAP', r:9}), window._sheenPlugin,
    /* Este grafico trabaja en % de margen, no en importe: se etiqueta el % */
    _vtBarLabels({outside:true, ink:'#3d4a6a', fmt:function(v){ return v.toFixed(2)+'%'; }})]
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
   (PIPE_ESTADO_COLOR): navy, celeste/azul, turquesa brand, plomos y ámbar como acento.
   `violeta` es el único tono añadido — se usa como cuarta familia categórica y
   toma el valor ya documentado en la guía de diseño para el Objetivo 4. */
var AV_COLOR = {
  navy:'#1E3A5F', azul:'#4FA8E0', turquesa:'#3EC6AC', violeta:'#8B7CF0',
  slate:'#7B98B2', slate2:'#9AAEC2', plomo:'#AAB6C9', amber:'#D97706', coral:'#D85A30'
};

/* Referencias a los gráficos de la pestaña — las usa el relanzador de entrada */
var _chSeasAvg = null, _chSeasQ = null, _chRef = null, _chTcv = null;

/* ── Lenguaje común de los gráficos de esta pestaña ──────────────────────────
   Barras horizontales finas sobre un track suave, sin rejilla ni ejes: la
   lectura la dan el label (izquierda) y la cifra (derecha). Los helpers de
   abajo son puramente de dibujo; no tocan datos, escalas ni tooltips. */
var AV_BAR_H   = 9;                       /* grosor de barra (px)            */
var AV_TRACK   = 'rgba(10,10,30,.045)';   /* track de fondo                  */
var AV_LBL_PAD = 46;                      /* carril reservado a la cifra (px)*/

/* Cifra alineada a la derecha del carril, fuera del área del gráfico.

   ENTRADA — barrido de izquierda a derecha: una vez que las barras terminan de
   crecer, cada total se revela progresivamente recortando su propio ancho de
   texto (clip que avanza de izquierda a derecha) con un fundido corto encima.
   Las filas entran escalonadas de arriba abajo para que se lea como secuencia
   y no como un parpadeo simultáneo. Solo pinta texto: no toca datos ni escalas. */
var _AV_SWEEP = 340;   /* duración del barrido por cifra (ms) */
var _AV_STAG  = 30;    /* escalonado entre filas (ms)         */

function _avValueRight(opt){
  opt = opt || {};
  var FAM = "'Inter','Segoe UI',sans-serif";
  return {
    id:'avValueRight'+(opt.id||''),
    afterUpdate:function(chart, args){
      if (args && args.mode === 'resize') return;
      chart.$avVR = {t0:null, raf:0};
    },
    afterDatasetsDraw:function(chart){
      var area = chart.chartArea;
      if (!area || typeof opt.fmt !== 'function') return;
      var meta = chart.getDatasetMeta(opt.ds || 0);
      if (!meta || meta.hidden || !meta.data) return;
      var ctx = chart.ctx;
      var st = chart.$avVR || (chart.$avVR = {t0:null, raf:0});
      var now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      if (st.t0 === null) st.t0 = now;

      /* El barrido arranca cuando la barra ya cerró su animación */
      var an = (chart.options && chart.options.animation) || {};
      var wait = (typeof an.duration === 'number' ? an.duration : 900) + _VT_LBL_LAG;
      var elapsed = now - st.t0 - wait;
      var pending = false;

      ctx.save();
      ctx.textAlign = 'right';
      ctx.textBaseline = opt.baseline || 'middle';
      ctx.font = '800 ' + (opt.size || 11.5) + 'px ' + FAM;
      ctx.fillStyle = opt.color || '#0a0a1e';

      var xr = chart.width - (opt.right !== undefined ? opt.right : 2);
      meta.data.forEach(function(bar, i){
        var txt = opt.fmt(chart.data.datasets[opt.ds || 0].data[i], i);
        if (!txt) return;
        var y = bar.getProps(['y'], true).y + (opt.dy || 0);

        if (_vtReduceMotion) { ctx.fillText(txt, xr, y); return; }

        var t = elapsed - i * _AV_STAG;
        if (t <= 0) { pending = true; return; }            /* aún no le toca */
        var prog = Math.min(1, t / _AV_SWEEP);
        if (prog < 1) pending = true;
        var e = 1 - Math.pow(1 - prog, 3);                 /* ease-out, sin rebote */

        if (e >= 1) { ctx.fillText(txt, xr, y); return; }  /* ya revelada */

        /* Ventana de revelado sobre el ancho real de la cifra */
        var w = ctx.measureText(txt).width;
        ctx.save();
        ctx.beginPath();
        ctx.rect(xr - w - 1, 0, w * e + 1, chart.height);
        ctx.clip();
        ctx.globalAlpha = Math.min(1, prog * 3);           /* opaca ya al inicio */
        ctx.fillText(txt, xr, y);
        ctx.restore();
      });
      ctx.restore();

      if (pending && !st.raf) {
        st.raf = requestAnimationFrame(function(){ st.raf = 0; if (chart.ctx) chart.draw(); });
      }
    }
  };
}

/* Rótulo de fila a la izquierda del carril (sustituye al eje Y para poder
   controlar alineación y jerarquía: título arriba, contexto debajo). */
function _avRowLabels(opt){
  opt = opt || {};
  var FAM = "'Inter','Segoe UI',sans-serif";
  return {
    id:'avRowLabels'+(opt.id||''),
    afterDatasetsDraw:function(chart){
      var meta = chart.getDatasetMeta(0);
      if (!meta || !meta.data || !chart.chartArea) return;
      var ctx = chart.ctx;
      ctx.save();
      ctx.textAlign = 'left';
      meta.data.forEach(function(bar, i){
        var p = bar.getProps(['y'], true);
        var top = opt.top ? opt.top(i) : null;
        var sub = opt.sub ? opt.sub(i) : null;
        if (top) {
          ctx.font = '800 ' + (opt.topSize || 12) + 'px ' + FAM;
          ctx.fillStyle = (opt.topColor ? opt.topColor(i) : '#0a0a1e');
          ctx.textBaseline = 'alphabetic';
          ctx.fillText(top, 0, p.y + (opt.topDy !== undefined ? opt.topDy : -14));
        }
        if (sub) {
          ctx.font = '600 ' + (opt.subSize || 9.5) + 'px ' + FAM;
          ctx.fillStyle = opt.subColor || '#94a3b8';
          ctx.textBaseline = 'top';
          ctx.fillText(sub, 0, p.y + (opt.subDy !== undefined ? opt.subDy : 12));
        }
      });
      ctx.restore();
    }
  };
}

/* Porcentaje centrado dentro de cada segmento de una barra 100% apilada
   (horizontal). Sólo pinta si el segmento tiene ancho suficiente para no
   saturar la lectura; la tinta se elige automáticamente para contrastar con
   el color de relleno de cada serie. Puramente visual: no toca datos/escalas. */
function _avSegPct(opt){
  opt = opt || {};
  var FAM = "'Inter','Segoe UI',sans-serif";
  return {
    id:'avSegPct'+(opt.id||''),
    afterDatasetsDraw:function(chart){
      var ctx = chart.ctx;
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '800 ' + (opt.size || 9) + 'px ' + FAM;
      chart.data.datasets.forEach(function(ds, di){
        var meta = chart.getDatasetMeta(di);
        if (!meta || meta.hidden || !meta.data) return;
        meta.data.forEach(function(bar, i){
          var v = ds.data[i];
          if (v === null || v === undefined) return;
          var p = bar.getProps(['x','base','y'], true);
          var segW = Math.abs(p.x - p.base);
          var txt = v.toFixed(1) + '%';
          /* Se omite si el texto no cabe en el propio segmento — evita que
             se salga hacia el segmento vecino o sature una barra angosta. */
          if (ctx.measureText(txt).width + 6 > segW) return;
          var fill = typeof ds.backgroundColor === 'function'
            ? ds.backgroundColor({chart:chart, dataIndex:i, datasetIndex:di})
            : ds.backgroundColor;
          ctx.fillStyle = _vtInkOn(fill);
          ctx.fillText(txt, (p.x + p.base) / 2, p.y);
        });
      });
      ctx.restore();
    }
  };
}

/* === Estacionalidad promedio: barras horizontales === */
(function(){
  var el = document.getElementById('chSeasAvg');
  if (!el) return;
  /* Temporada alta (Mar–Jun) en celeste protagonista; el resto del año en azul
     grisáceo de menor intensidad, para que el patrón se lea de un vistazo. */
  var cols = SEAS_PCT.map(function(_, i){
    return (i >= 2 && i <= 5) ? AV_COLOR.azul : AV_COLOR.slate2;
  });
  _chSeasAvg = new Chart(el, {
    type:'bar',
    data:{
      labels:meses,
      datasets:[{
        data:SEAS_PCT,
        backgroundColor:cols,
        hoverBackgroundColor:cols.map(function(c){ return _vtLighten(c,.12); }),
        _baseColors:cols,
        borderRadius:5,
        borderSkipped:false,
        barThickness:AV_BAR_H,
        maxBarThickness:AV_BAR_H
      }]
    },
    /* La barra mide el % del año; ese mismo % se ancla a la derecha del carril.
       El importe promedio del mes sigue disponible en el tooltip. */
    plugins:[
      _vtBarTrack({id:'SA', r:5, color:AV_TRACK}),
      window._sheenPlugin,
      _avValueRight({id:'SA', fmt:function(v){ return v.toFixed(1)+'%'; }})
    ],
    options:{
      indexAxis:'y',
      responsive:true, maintainAspectRatio:false,
      layout:{padding:{right:AV_LBL_PAD, left:0, top:2, bottom:2}},
      animation:{duration:820, easing:'easeOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(9,12,30,.96)',padding:{top:10,bottom:10,left:13,right:13},
          cornerRadius:10,borderColor:'rgba(79,168,224,.30)',borderWidth:1,
          titleColor:'rgba(255,255,255,.45)',titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.88)',displayColors:false,
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
        /* Sin rejilla ni eje: el carril lo define el track de cada barra */
        x:{display:false, grid:{display:false}, border:{display:false}, min:0, max:21},
        y:{grid:{display:false}, border:{display:false},
           afterFit:function(s){ s.width = 42; },
           ticks:{font:{size:11,weight:'600'},color:'#3d4a6a',
                  crossAlign:'far',padding:0,autoSkip:false}}
      }
    }
  });
})();

/* === Concentración trimestral: cuatro filas ejecutivas (Q · % · meses) === */
(function(){
  var el = document.getElementById('chSeasQ');
  if (!el) return;
  /* Una familia cromática por trimestre: teal, celeste, violeta y ámbar */
  var qVals = [24.7,43.1,17.8,14.3];
  var qCols = [AV_COLOR.turquesa, AV_COLOR.azul, AV_COLOR.violeta, AV_COLOR.amber];
  var qMes  = ['Ene–Mar','Abr–Jun','Jul–Sep','Oct–Dic'];
  _chSeasQ = new Chart(el, {
    type:'bar',
    data:{
      labels:['Q1','Q2','Q3','Q4'],
      datasets:[{
        data:qVals,
        backgroundColor:qCols,
        hoverBackgroundColor:qCols.map(function(c){ return _vtLighten(c,.12); }),
        _baseColors:qCols,
        borderRadius:5,
        borderSkipped:false,
        barThickness:AV_BAR_H,
        maxBarThickness:AV_BAR_H
      }]
    },
    /* El eje se reemplaza por rótulos propios: "Qn" en el color del trimestre,
       el % anclado a la derecha y el rango de meses como línea secundaria. */
    plugins:[
      _vtBarTrack({id:'SQ', r:5, color:AV_TRACK}),
      window._sheenPlugin,
      _avRowLabels({id:'SQ',
        top:function(i){ return 'Q'+(i+1); },
        topColor:function(i){ return qCols[i]; },
        topSize:13, topDy:-16,
        sub:function(i){ return qMes[i]; },
        subSize:10, subDy:13
      }),
      _avValueRight({id:'SQ', size:13, dy:-16, baseline:'alphabetic',
        fmt:function(v){ return v.toFixed(1)+'%'; }})
    ],
    options:{
      indexAxis:'y',
      responsive:true, maintainAspectRatio:false,
      layout:{padding:{top:20, bottom:16, right:0, left:0}},
      animation:{duration:820, easing:'easeOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(9,12,30,.96)',padding:{top:10,bottom:10,left:13,right:13},
          cornerRadius:10,borderColor:'rgba(79,168,224,.30)',borderWidth:1,
          titleColor:'rgba(255,255,255,.45)',titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.88)',displayColors:false,
          callbacks:{
            title:function(items){
              return 'Q'+(items[0].dataIndex+1)+' · '+qMes[items[0].dataIndex];
            },
            label:function(ctx){
              var tags=['Normal','▲ Pico','Normal','▼ Valle'];
              return ctx.parsed.x.toFixed(1)+'% del año  ·  '+tags[ctx.dataIndex];
            }
          }
        }
      },
      scales:{
        x:{display:false, grid:{display:false}, border:{display:false}, min:0, max:46},
        y:{display:false, grid:{display:false}, border:{display:false},
           afterFit:function(s){ s.width = 0; }}
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
  var REF_YRS     = ['2021','2022','2023','2024','2025','2026'];

  /* Mismo lenguaje horizontal que Estacionalidad: una fila por año, barras
     finas, sin rejilla ni eje de porcentaje. Se conservan las dos series y su
     agrupación (100% apilado por año); solo cambia la orientación y el estilo. */
  _chRef = new Chart(el, {
    type:'bar',
    data:{
      labels:REF_YRS,
      datasets:[
        {label:'Freón', data:V_FREON_PCT, backgroundColor:AV_COLOR.azul,
          hoverBackgroundColor:_vtLighten(AV_COLOR.azul,.12),
          borderRadius:{topLeft:5,bottomLeft:5,topRight:0,bottomRight:0}, stack:'r',
          borderSkipped:false, barThickness:11, maxBarThickness:11},
        {label:'Otros', data:V_OTROS_PCT, backgroundColor:AV_COLOR.turquesa,
          hoverBackgroundColor:_vtLighten(AV_COLOR.turquesa,.12),
          borderRadius:{topRight:5,bottomRight:5,topLeft:0,bottomLeft:0}, stack:'r',
          borderSkipped:false, barThickness:11, maxBarThickness:11}
      ]
    },
    /* Mismo esquema de fila que "Concentración por trimestre": el año a la
       izquierda y el total facturado del año a la derecha, ambos sobre la
       barra. El desglose % de cada serie queda en la leyenda y el tooltip. */
    plugins:[
      window._sheenPlugin,
      _avRowLabels({id:'RF',
        top:function(i){ return REF_YRS[i]; },
        topColor:function(){ return '#3d4a6a'; },
        topSize:11.5, topDy:-13
      }),
      _avValueRight({id:'RF', size:12.5, dy:-13, baseline:'alphabetic', right:3,
        fmt:function(_, i){ return fmtEjecutivo(V_TOTAL[i] * 1e6); }}),
      /* Sólo en esta primera vista (front card): % de Freón vs Otros visible
         directamente sobre cada segmento, sin depender del hover/tooltip. */
      _avSegPct({id:'RF', size:9})
    ],
    options:{
      indexAxis:'y',
      responsive:true, maintainAspectRatio:false,
      layout:{padding:{right:3, left:0, top:18, bottom:4}},
      animation:{duration:820, easing:'easeOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        legend:{display:true,position:'bottom',
          labels:{boxWidth:9,boxHeight:9,font:{size:10},padding:14,color:'#94a3b8',
                  usePointStyle:true,pointStyle:'rectRounded'}},
        tooltip:{
          mode:'index',intersect:false,
          backgroundColor:'rgba(9,12,30,.96)',
          padding:{top:11,bottom:11,left:13,right:13},
          cornerRadius:10,
          borderColor:'rgba(79,168,224,.30)',borderWidth:1,
          titleColor:'rgba(255,255,255,.45)',titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.88)',
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
        x:{stacked:true, display:false, max:100, grid:{display:false}, border:{display:false}},
        /* El eje se sustituye por los rótulos propios sobre cada barra */
        y:{stacked:true, display:false, grid:{display:false}, border:{display:false},
           afterFit:function(s){ s.width = 0; }}
      }
    }
  });
})();

/* === Análisis por tipo de venta: barras apiladas (%) === */
(function(){
  var el = document.getElementById('chTcv');
  if (!el) return;
  /* PR protagonista en celeste; VSI turquesa, VSA violeta y AD ámbar cierran
     la familia categórica de la pestaña. Series, orden y datos sin cambios. */
  var TCV_COLOR = {PR:AV_COLOR.azul, AD:AV_COLOR.amber, VSA:AV_COLOR.violeta, VSI:AV_COLOR.turquesa};
  var TCV_NAME  = {PR:'Proyecto', AD:'Adicional', VSA:'V. servicio arquitectura', VSI:'V. servicio de ingeniería'};
  var TCV_YRS   = ['2021','2022','2023','2024','2025','2026'];
  /* Total facturado del año = suma de los cuatro tramos ya representados */
  var TCV_TOT   = TCV_YRS.map(function(_, i){
    return TCV_MONTO.PR[i] + TCV_MONTO.AD[i] + TCV_MONTO.VSA[i] + TCV_MONTO.VSI[i];
  });
  _chTcv = new Chart(el, {
    type:'bar',
    data:{
      labels:TCV_YRS,
      datasets:[
        {label:'PR',  data:TCV_PCT.PR,  backgroundColor:TCV_COLOR.PR,  hoverBackgroundColor:_vtLighten(TCV_COLOR.PR,.12),
          borderRadius:{topLeft:5,bottomLeft:5,topRight:0,bottomRight:0}, stack:'t', borderSkipped:false, barThickness:11, maxBarThickness:11},
        /* El cierre redondeado va en los tres tramos de cola: el último con
           valor > 0 cambia según el año y así el extremo derecho nunca queda
           cortado en recto. */
        {label:'AD',  data:TCV_PCT.AD,  backgroundColor:TCV_COLOR.AD,  hoverBackgroundColor:_vtLighten(TCV_COLOR.AD,.12),
          borderRadius:{topRight:5,bottomRight:5,topLeft:0,bottomLeft:0}, stack:'t', borderSkipped:false, barThickness:11, maxBarThickness:11},
        {label:'VSA', data:TCV_PCT.VSA, backgroundColor:TCV_COLOR.VSA, hoverBackgroundColor:_vtLighten(TCV_COLOR.VSA,.12),
          borderRadius:{topRight:5,bottomRight:5,topLeft:0,bottomLeft:0}, stack:'t', borderSkipped:false, barThickness:11, maxBarThickness:11},
        {label:'VSI', data:TCV_PCT.VSI, backgroundColor:TCV_COLOR.VSI, hoverBackgroundColor:_vtLighten(TCV_COLOR.VSI,.12),
          borderRadius:{topRight:5,bottomRight:5,topLeft:0,bottomLeft:0}, stack:'t', borderSkipped:false, barThickness:11, maxBarThickness:11}
      ]
    },
    /* Mismo esquema de fila que "Concentración por trimestre" y Refrigerante:
       año a la izquierda y total facturado del año a la derecha, sobre la barra. */
    plugins:[
      window._sheenPlugin,
      _avRowLabels({id:'TC',
        top:function(i){ return TCV_YRS[i]; },
        topColor:function(){ return '#3d4a6a'; },
        topSize:11.5, topDy:-13
      }),
      _avValueRight({id:'TC', size:12.5, dy:-13, baseline:'alphabetic', right:3,
        fmt:function(_, i){ return fmtEjecutivo(TCV_TOT[i]); }})
    ],
    options:{
      indexAxis:'y',
      responsive:true, maintainAspectRatio:false,
      layout:{padding:{right:3, left:0, top:18, bottom:4}},
      animation:{duration:820, easing:'easeOutQuart', onComplete:function(a){window._triggerSheen(a.chart);}},
      plugins:{
        /* Leyenda visible sin abrir modal — nombres completos, compacta y alineada */
        legend:{display:true,position:'bottom',
          labels:{boxWidth:9,boxHeight:9,font:{size:10},padding:14,color:'#94a3b8',usePointStyle:true,pointStyle:'rectRounded',
            generateLabels:function(chart){
              var items=Chart.defaults.plugins.legend.labels.generateLabels(chart);
              items.forEach(function(item){item.text=TCV_NAME[item.text]||item.text;});
              return items;
            }}},
        tooltip:{
          mode:'index',intersect:false,
          backgroundColor:'rgba(9,12,30,.96)',padding:{top:11,bottom:11,left:13,right:13},
          cornerRadius:10,borderColor:'rgba(79,168,224,.30)',borderWidth:1,
          titleColor:'rgba(255,255,255,.45)',titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.88)',
          callbacks:{
            label:function(ctx){
              var key = ctx.dataset.label;
              var idx = ctx.dataIndex;
              var arr = TCV_MONTO[key];
              var m = arr?arr[idx]:0;
              return TCV_NAME[key]+': '+ctx.parsed.x.toFixed(2)+'%  ('+fmtEjecutivo(m)+')';
            }
          }
        }
      },
      scales:{
        x:{stacked:true, display:false, max:101, grid:{display:false}, border:{display:false}},
        /* El eje se sustituye por los rótulos propios sobre cada barra */
        y:{stacked:true, display:false, grid:{display:false}, border:{display:false},
           afterFit:function(s){ s.width = 0; }}
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
    fmtMM(data[24][11]),fmtMM(data[25][11]),'$30.01MM *'];
  return tbl(head,rows,foot)+'<div class="mnote">* 2026 enero&ndash;agosto. Valores mensuales de venta. Total = suma del a&ntilde;o.</div>';
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
  return tbl(head,rows,foot)+'<div class="mnote">* 2026 hasta agosto. Margen ponderado acumulado. Meta: 18.00%.</div>';
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
        plugins:[window._vtLineGlow, window._vtLineLabels],
        options:{..._vtSharedOpts,
          animation:{duration:650, easing:'easeOutQuart'},
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
        plugins:[window._vtLineGlow, window._vtLineLabels],
        options:{..._vtSharedOpts,
          animation:{duration:650, easing:'easeOutQuart'},
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
          {label:'Fre\xf3n',data:V_FREON_PCT,backgroundColor:AV_COLOR.azul,borderRadius:{topLeft:5,topRight:5,bottomLeft:0,bottomRight:0},stack:'r'},
          {label:'Otros',   data:V_OTROS_PCT,backgroundColor:AV_COLOR.turquesa,borderRadius:{topLeft:5,topRight:5,bottomLeft:0,bottomRight:0},stack:'r'}
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
  /* Mismo formato que "Análisis por Refrigerante" (_fi): siempre en MM con 2
     decimales, sin alternar a K para montos menores — evita que 2024/2025
     se vean con un formato distinto al resto de la tabla. */
  function _f(v){return '$'+(v/1000000).toFixed(2)+'MM';}
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
      var TCV_COLOR = {PR:AV_COLOR.azul, AD:AV_COLOR.amber, VSA:AV_COLOR.violeta, VSI:AV_COLOR.turquesa};
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
  /* Entrada progresiva del header: métrica principal → barra de meta → KPIs */
  var hero = document.querySelector('#ventas .vt-hero');
  if(hero){
    hero.classList.remove('vt-anim');
    void hero.offsetWidth;                 /* reflow: permite re-disparar la secuencia */
    hero.classList.add('vt-anim');
  }
  /* Re-encajar el Top 20 a la altura disponible al mostrarse la vista */
  if(window._refitTop20) window._refitTop20();
  var fill = document.getElementById('vtHeroFill');
  if(!fill) return;
  /* Resetear instantáneamente a 0 */
  fill.style.transition = 'none';
  fill.style.width = '0%';
  /* Doble rAF: fuerza reflow entre el reset y la animación */
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      fill.style.transition = 'width 1.1s cubic-bezier(.4,0,.2,1)';
      fill.style.width = '100%'; /* avance 100.04% — la barra se muestra completa */
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
    ctx2.font='900 '+Math.min(r*0.205,32)+'px Inter,sans-serif';
    ctx2.fillText(d.pctImp.toFixed(2)+'%',cx,cy-gap*1.05);
    /* Nombre completo del tipo — envuelto en hasta 2 líneas si es largo */
    ctx2.fillStyle='#7b8db0';
    ctx2.font='700 '+Math.min(r*0.075,11.5)+'px Inter,sans-serif';
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
  var MES_ORD={Ene:1,Feb:2,Mar:3,Abr:4,May:5,Jun:6,Jul:7,Ago:8};

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
    var filtered=rows.filter(function(r){
      return r.cli.toLowerCase().includes(fq)||r.mes.toLowerCase().includes(fq)||r.zona.toLowerCase().includes(fq)||(r.desc||'').toLowerCase().includes(fq);
    });
    if(sc>=0){
      filtered=[].concat(filtered).sort(function(a,b){
        var keys=['mes','cli','desc','zona','imp','mg'];
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
        +'<td title="'+r.desc+'" style="color:var(--tm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px">'+r.desc+'</td>'
        +'<td><span style="font-size:13px;padding:2px 8px;border-radius:4px;background:#f0f4f9;color:var(--ts);font-weight:600">'+r.zona+'</span></td>'
        +'<td class="r" style="font-weight:700">'+fmt(r.imp)+'</td>'
        +'<td class="r"><span class="'+mgCls(r.mg)+'">'+r.mg.toFixed(2)+'%</span></td>'
        +'</tr>';
    });
    if(!pr.length)html='<tr><td colspan="6" style="text-align:center;color:var(--ts);padding:20px">Sin resultados</td></tr>';
    /* Fila de total — siempre sobre el período completo (83 registros), no sobre el filtro/página actual */
    html += '<tr class="tbl-total-row">'
      +'<td colspan="4" style="font-weight:800">TOTAL ('+rows.length+' operaciones)</td>'
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
      if(sc===col)sa=!sa; else{sc=col;sa=col===4||col===5?false:true;}
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



/* ============================================================
   RITMO 2026 — barras mensuales + acumulado + trayectoria de meta
   Fuente: ZMON.total[26] (facturacion mensual) y VC[26] (acumulado MM).
   No recalcula KPIs: solo visualiza los datos ya existentes.
   ============================================================ */
window._vtRitmoChart = null;

window._initVtRitmo = function(){
  if(window._vtRitmoChart) return true;
  var el = document.getElementById('chRitmo26');
  if(!el || typeof Chart === 'undefined') return false;

  var box = el.parentNode;
  if(!box || !box.clientHeight || !box.clientWidth) return false;   /* aún sin layout: se reintenta */

  var old = Chart.getChart(el);
  if(old) old.destroy();

  try {
    var META_ANUAL = 30;                       /* US$ MM — meta anual 2026 */
    var mensual = ZMON.total[26].map(function(v,i){ return i < 8 ? +(v/1e6).toFixed(4) : null; });
    var acum    = VC[26].slice();
    var metaLin = meses.map(function(_,i){ return +(META_ANUAL*(i+1)/12).toFixed(2); });

    /* Último mes con dato y mes pico — derivados de las series ya existentes */
    var lastIdx = 0;
    acum.forEach(function(v,i){ if(v !== null && v !== undefined) lastIdx = i; });
    var peakIdx = 0, peakVal = -1;
    mensual.forEach(function(v,i){ if(v !== null && v > peakVal){ peakVal = v; peakIdx = i; } });

    var BAR_A = '#6FB3EC', BAR_B = '#2C6FBF';
    var PEAK_A = '#F6C27A', PEAK_B = '#D98A16';
    var ACUM_C = '#3EC6AC', META_C = '#EF9F27';

    function vGrad(chart, c1, c2){
      var a = chart.chartArea;
      if(!a) return c1;
      var g = chart.ctx.createLinearGradient(0, a.top, 0, a.bottom);
      g.addColorStop(0, c1); g.addColorStop(1, c2);
      return g;
    }
    function fMM(v){ return '$' + Number(v).toFixed(2) + 'MM'; }
    function fCompact(vMM){
      var n = vMM * 1e6;
      if(n >= 1e6) return '$' + (n/1e6).toFixed(2) + 'M';
      if(n >= 1e3) return '$' + Math.round(n/1e3) + 'K';
      return '$' + Math.round(n);
    }

    /* Montos sobre cada barra — entran DESPUÉS de barras y líneas */
    var LBL_STAGGER = 45, LBL_DUR = 280;
    var barLabels = {
      id: 'vtRitmoBarLabels',
      afterDatasetsDraw: function(chart){
        if(chart.$lblT0 === undefined) return;
        var meta = chart.getDatasetMeta(0);
        if(!meta || !meta.data || !meta.data.length) return;
        var now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
        var c = chart.ctx, a = chart.chartArea, pending = false;
        c.save();
        c.textAlign = 'center'; c.textBaseline = 'bottom';
        meta.data.forEach(function(bar, i){
          var v = mensual[i];
          if(v === null || v === undefined) return;
          var t = (now - chart.$lblT0 - i * LBL_STAGGER) / LBL_DUR;
          if(t < 0){ pending = true; return; }
          if(t < 1) pending = true;
          var e = 1 - Math.pow(1 - Math.min(1, t), 3);
          var w = bar.width || 30;
          var fsz = w < 30 ? 8.5 : (w < 40 ? 9.5 : 10.5);
          var y = Math.max(bar.y - 7 - (1 - e) * 6, a.top + fsz + 2);
          c.globalAlpha = e;
          c.font = '800 ' + fsz + 'px Inter, sans-serif';
          c.lineWidth = 3; c.lineJoin = 'round';
          c.strokeStyle = 'rgba(255,255,255,.92)';
          c.strokeText(fCompact(v), bar.x, y);
          c.fillStyle = (i === peakIdx) ? '#B26A06' : '#1F4E86';
          c.fillText(fCompact(v), bar.x, y);
        });
        c.restore();
        if(pending) requestAnimationFrame(function(){ if(chart.ctx) chart.draw(); });
      }
    };

    /* Callout flotante sobre el último punto acumulado */
    var calloutPlugin = {
      id: 'vtRitmoCallout',
      afterDatasetsDraw: function(chart){
        var meta = chart.getDatasetMeta(1);
        if(!meta || !meta.data || !meta.data[lastIdx]) return;
        var pt = meta.data[lastIdx];
        var a = chart.chartArea, c = chart.ctx;
        var txt = meses[lastIdx] + '  ·  ' + fMM(acum[lastIdx]);
        c.save();
        c.font = '800 12px Inter, sans-serif';
        var w = c.measureText(txt).width + 22, h = 26;
        var x = Math.min(Math.max(pt.x - w/2, a.left), a.right - w);
        var y = Math.max(pt.y - h - 16, 2);
        c.beginPath();
        if(c.roundRect) c.roundRect(x, y, w, h, 8); else c.rect(x, y, w, h);
        c.fillStyle = 'rgba(10,10,30,.94)';
        c.shadowColor = 'rgba(10,10,30,.28)'; c.shadowBlur = 12; c.shadowOffsetY = 3;
        c.fill();
        c.shadowColor = 'transparent'; c.shadowBlur = 0; c.shadowOffsetY = 0;
        c.strokeStyle = 'rgba(62,198,172,.45)'; c.lineWidth = 1; c.stroke();
        c.beginPath(); c.moveTo(pt.x, y + h); c.lineTo(pt.x, pt.y - 7);
        c.strokeStyle = 'rgba(62,198,172,.4)'; c.setLineDash([3,3]); c.stroke(); c.setLineDash([]);
        c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText(txt, x + w/2, y + h/2 + 0.5);
        c.restore();
      }
    };

    /* Profundidad: sombra proyectada en barras y halo en el acumulado */
    var glowFx = {
      id: 'vtRitmoGlow',
      beforeDatasetDraw: function(chart, args){
        var c = chart.ctx;
        if(args.index === 0){ c.save(); c.shadowColor = 'rgba(31,78,134,.26)'; c.shadowBlur = 11; c.shadowOffsetY = 5; }
        else if(args.index === 1){ c.save(); c.shadowColor = 'rgba(62,198,172,.5)'; c.shadowBlur = 15; c.shadowOffsetY = 1; }
      },
      afterDatasetDraw: function(chart, args){
        if(args.index === 0 || args.index === 1) chart.ctx.restore();
      }
    };

    /* Etiqueta de la trayectoria de meta, al final de la linea discontinua */
    var metaTag = {
      id: 'vtRitmoMetaTag',
      afterDatasetsDraw: function(chart){
        var m = chart.getDatasetMeta(2);
        if(!m || !m.data || !m.data.length) return;
        var pt = m.data[m.data.length - 1];
        var c = chart.ctx;
        c.save();
        c.font = '800 9.5px Inter, sans-serif';
        c.textAlign = 'right'; c.textBaseline = 'bottom';
        c.lineWidth = 3; c.lineJoin = 'round';
        c.strokeStyle = 'rgba(255,255,255,.92)';
        c.strokeText('META $30MM', pt.x - 1, pt.y - 9);
        c.fillStyle = META_C;
        c.fillText('META $30MM', pt.x - 1, pt.y - 9);
        c.restore();
      }
    };

    /* Realce suave de la columna bajo el cursor */
    var hoverBand = {
      id: 'vtRitmoBand',
      beforeDatasetsDraw: function(chart){
        var act = (chart.tooltip && chart.tooltip.getActiveElements) ? chart.tooltip.getActiveElements() : [];
        if(!act.length || !act[0].element) return;
        var x = act[0].element.x, a = chart.chartArea, c = chart.ctx;
        var bw = (a.right - a.left) / 12 * 0.72;
        c.save();
        c.fillStyle = 'rgba(62,198,172,.06)';
        c.fillRect(x - bw/2, a.top, bw, a.bottom - a.top);
        c.restore();
      }
    };

    var reduce = !!_vtReduceMotion;

    window._vtRitmoChart = new Chart(el.getContext('2d'), {
      type: 'bar',
      data: {
        labels: meses,
        datasets: [
          {
            type: 'bar',
            label: 'Facturado mensual',
            data: mensual,
            yAxisID: 'y',
            order: 3,
            backgroundColor: function(ctx){
              return ctx.dataIndex === peakIdx
                ? vGrad(ctx.chart, PEAK_A, PEAK_B)
                : vGrad(ctx.chart, BAR_A, BAR_B);
            },
            hoverBackgroundColor: function(ctx){
              return ctx.dataIndex === peakIdx
                ? vGrad(ctx.chart, '#FBD9A4', PEAK_B)
                : vGrad(ctx.chart, '#8CC6F3', BAR_B);
            },
            borderRadius: 7,
            borderSkipped: false,
            maxBarThickness: 38,
            categoryPercentage: 0.62,
            barPercentage: 0.74
          },
          {
            type: 'line',
            label: 'Acumulado',
            data: acum,
            yAxisID: 'y1',
            order: 1,
            borderColor: ACUM_C,
            backgroundColor: 'rgba(62,198,172,.10)',
            borderWidth: 3.4,
            tension: 0.34,
            spanGaps: false,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6.5,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: ACUM_C,
            pointBorderWidth: 2.2
          },
          {
            type: 'line',
            label: 'Meta lineal $30MM',
            data: metaLin,
            yAxisID: 'y1',
            order: 2,
            borderColor: META_C,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 2,
            borderDash: [7,6],
            tension: 0,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: reduce ? 0 : 800,
          easing: 'easeOutQuart',
          onComplete: function(a){
            var ch = (a && a.chart) || window._vtRitmoChart;
            if(!ch || ch.$lblT0 !== undefined) return;
            ch.$lblT0 = (typeof performance !== 'undefined' ? performance.now() : Date.now()) + (reduce ? 0 : 140);
            ch.draw();
          }
        },
        interaction: { mode: 'index', intersect: false },
        layout: { padding: { top: 42, right: 8, left: 2, bottom: 2 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(9,12,30,.95)',
            padding: { top: 10, bottom: 10, left: 13, right: 13 },
            cornerRadius: 10,
            borderColor: 'rgba(62,198,172,.25)', borderWidth: 1,
            titleColor: 'rgba(255,255,255,.45)', titleFont: { size: 9.5, weight: '700' },
            bodyColor: 'rgba(255,255,255,.88)', bodyFont: { size: 11.5, weight: '600' },
            displayColors: true, boxWidth: 8, boxHeight: 8, boxPadding: 4, usePointStyle: true,
            callbacks: {
              title: function(items){ return (items && items[0] ? items[0].label : '') + ' 2026'; },
              label: function(ctx){
                if(ctx.parsed.y === null || ctx.parsed.y === undefined) return null;
                return ' ' + ctx.dataset.label + ': ' + fMM(ctx.parsed.y);
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#7b8db0', font: { size: 11, weight: '600' }, padding: 6 }
          },
          y: {
            position: 'left',
            beginAtZero: true,
            grid: { color: 'rgba(226,232,244,.6)', drawTicks: false, lineWidth: 1 },
            title: { display: true, text: 'MENSUAL · MM', color: '#b3c0d6', font: { size: 9, weight: '700' } },
            ticks: { color: '#b3c0d6', font: { size: 10, weight: '600' }, padding: 8, maxTicksLimit: 6,
              callback: function(v){ return '$' + v; } }
          },
          y1: {
            position: 'right',
            beginAtZero: true,
            suggestedMax: 32,
            grid: { display: false },
            title: { display: true, text: 'ACUMULADO · MM', color: '#b3c0d6', font: { size: 9, weight: '700' } },
            ticks: { color: '#b3c0d6', font: { size: 10, weight: '600' }, padding: 8, maxTicksLimit: 5,
              callback: function(v){ return '$' + v; } }
          }
        }
      },
      plugins: [hoverBand, glowFx, barLabels, metaTag, calloutPlugin]
    });
    return true;
  } catch(err){
    if(window.console && console.error) console.error('[Ritmo 2026]', err);
    window._vtRitmoChart = null;
    return false;
  }
};

/* Arranque robusto: reintenta hasta que el canvas tenga layout real */
(function(){
  var tries = 0, timer = null;
  function pump(){
    if(window._initVtRitmo()){ clearInterval(timer); timer = null; return; }
    if(++tries > 60){ clearInterval(timer); timer = null; }
  }
  window._pumpVtRitmo = function(){
    if(window._vtRitmoChart || timer) return;
    tries = 0;
    pump();
    if(!window._vtRitmoChart) timer = setInterval(pump, 200);
  };

  var prev = window._animVtHero;
  window._animVtHero = function(){
    if(typeof prev === 'function') prev();
    window._pumpVtRitmo();
  };

  function boot(){
    window._pumpVtRitmo();
    var sec = document.getElementById('ventas');
    if(sec && sec.classList.contains('active') && window._animVtHero) window._animVtHero();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else setTimeout(boot, 60);

  /* También al pulsar la pestaña Ventas o sus tabs internos */
  document.addEventListener('click', function(e){
    var t = e.target;
    if(!t || !t.closest) return;
    if(t.closest('.tab[data-s="ventas"]') || t.closest('#vtTabs .vt-tab-btn')){
      setTimeout(function(){ window._pumpVtRitmo(); if(window._refitTop20) window._refitTop20(); }, 120);
    }
  }, true);
})();


/* ============================================================
   EVOLUCIÓN DE VENTAS — mini hero interno
   Bloque izquierdo (contexto): estático, no se toca desde aquí.
   Bloque derecho (3 KPIs): se recalcula con el segmentador a partir
   de _vtEffData()/_vtEffMargin() — la misma base filtrada que alimenta
   los 4 gráficos del grid. No introduce cifras nuevas.
   ============================================================ */
function _vtTxt(id, html){
  var el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function _vtEvolKpis(){
  if (!document.getElementById('vtEvKpis')) return;

  var data  = _vtEffData();
  var mdata = _vtEffMargin();
  var a26 = data[26] || [];

  /* Último mes con dato en 2026 = corte del periodo */
  var idx = -1;
  for (var i = a26.length - 1; i >= 0; i--) {
    if (a26[i] !== null && a26[i] !== undefined) { idx = i; break; }
  }
  if (idx < 0) return;

  var per = 'Ene–' + meses[idx];
  var v26 = a26[idx];
  var v25 = (data[25] && data[25][idx] !== null && data[25][idx] !== undefined) ? data[25][idx] : null;
  var mg  = _vtYearClose(mdata[26]);

  /* KPI 1 — venta acumulada del periodo */
  _vtTxt('vtEvKv1', '$' + v26.toFixed(2) + '<span class="vt-ev-ku">MM</span>');
  _vtTxt('vtEvKl1', per + ' 2026');

  /* KPI 2 — comparativo vs mismo periodo del año anterior */
  var k2   = document.getElementById('vtEvKv2');
  var card = k2 ? k2.parentNode : null;
  if (v25 !== null && v25 !== 0) {
    var d = (v26 / v25 - 1) * 100;
    if (card) card.classList.toggle('is-dn', d < 0);
    _vtTxt('vtEvKv2', (d >= 0 ? '+' : '−') + Math.abs(d).toFixed(1) + '%');
    _vtTxt('vtEvKl2', 'vs ' + per + ' 2025');
    _vtTxt('vtEvKs2', fmtMM(v25) + ' → ' + fmtMM(v26));
  } else {
    if (card) card.classList.remove('is-dn');
    _vtTxt('vtEvKv2', '—');
    _vtTxt('vtEvKl2', 'vs ' + per + ' 2025');
    _vtTxt('vtEvKs2', 'Sin base comparable');
  }

  /* KPI 3 — margen ponderado acumulado */
  if (mg !== null && mg !== undefined) {
    var diff = mg - 18;
    _vtTxt('vtEvKv3', mg.toFixed(2) + '%');
    _vtTxt('vtEvKs3', 'Meta 18% · ' + (diff >= 0 ? '+' : '−') + Math.abs(diff).toFixed(2) + ' pp');
    var s3 = document.getElementById('vtEvKs3');
    if (s3) s3.style.color = diff >= 0 ? '#0F6E56' : '#C2410C';
  }
}

/* Entrada escalonada del mini hero + grid (se re-dispara al volver al tab) */
window._animVtEvolHero = function(){
  var v = document.querySelector('#ventas .vt-view[data-vtview="evol"]');
  if (!v) return;
  v.classList.remove('vt-ev-anim');
  void v.offsetWidth;                /* reflow: permite repetir la secuencia */
  v.classList.add('vt-ev-anim');
};

(function(){
  var tabs = document.getElementById('vtTabs');
  if (tabs) {
    tabs.addEventListener('click', function(e){
      var t = e.target.closest ? e.target.closest('.vt-tab-btn') : null;
      if (!t || t.dataset.vtview !== 'evol') return;
      setTimeout(function(){
        window._animVtEvolHero();
        [_chVA, _chMA, _chVAB, _chMAP].forEach(function(c){
          if (c && window._triggerSheen) window._triggerSheen(c);
        });
      }, 40);
    });
  }
  _vtEvolKpis();
})();


/* ============================================================
   COMPOSICIÓN DE VENTAS 2026 — conmutador de vistas de la card
   (solo presentación: no altera datos ni la lógica de las donas)
   ============================================================ */
(function(){
  var bar = document.getElementById('vtCompTabs');
  if(!bar) return;
  var card = bar.closest('.vt-comp-card');
  if(!card) return;

  function resizeCanvas(id){
    var el = document.getElementById(id);
    if(!el || typeof Chart === 'undefined') return;
    var ch = Chart.getChart(el);
    if(ch) ch.resize();
  }

  function show(key){
    [].slice.call(bar.querySelectorAll('.vt-comp-tab')).forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-comp') === key);
    });
    [].slice.call(card.querySelectorAll('.vt-comp-pane')).forEach(function(pane){
      pane.classList.toggle('active', pane.getAttribute('data-comp') === key);
    });
    /* el canvas oculto no tiene medidas: se reajusta al mostrarse */
    setTimeout(function(){
      resizeCanvas(key === 'cli' ? 'chTop10Dona' : 'chTipoVenta');
    }, 40);
  }

  bar.addEventListener('click', function(e){
    var b = e.target.closest('.vt-comp-tab');
    if(!b || !b.getAttribute('data-comp')) return;
    show(b.getAttribute('data-comp'));
  });

  /* Al entrar a Ventas, reajustar la dona visible */
  var prevAnim = window._animVtHero;
  window._animVtHero = function(){
    if(typeof prevAnim === 'function') prevAnim();
    setTimeout(function(){
      var act = card.querySelector('.vt-comp-pane.active');
      var key = act ? act.getAttribute('data-comp') : 'cli';
      resizeCanvas(key === 'cli' ? 'chTop10Dona' : 'chTipoVenta');
    }, 120);
  };
})();


/* ============================================================
   ANÁLISIS DE VENTAS — secuencia de entrada (card → gráfico → valores)
   Se relanza cada vez que el usuario entra a la subvista, no solo en la carga
   inicial: se observa la clase `active` del panel de Ventas y de la propia
   vista, de modo que cubre tanto el cambio de tab interno como el regreso a
   la sección desde otro módulo. Capa puramente visual: no toca datos ni lógica.
   ============================================================ */
(function(){
  var view = document.querySelector('#ventas .vt-view[data-vtview="analisis"]');
  var sec  = document.getElementById('ventas');
  if (!view || !sec) return;

  var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var CICLO = 1500;               /* duración total de la secuencia (ms) */
  var clearT = 0, lastRun = 0;

  function isVisible(){
    return sec.classList.contains('active') && view.classList.contains('active');
  }

  function replay(){
    if (!isVisible()) return;
    var now = Date.now();
    if (now - lastRun < CICLO) return;   /* ya hay una secuencia en curso */
    lastRun = now;

    /* Reinicio del ciclo CSS: quitar la clase, forzar reflow y volver a ponerla */
    view.classList.remove('av-in');
    if (!reduce) {
      void view.offsetWidth;
      view.classList.add('av-in');
    }

    /* Los gráficos vuelven a crecer desde cero, en fase con las cards */
    [_chSeasAvg, _chSeasQ, _chRef, _chTcv].forEach(function(ch){
      if (!ch || !ch.ctx) return;
      try { ch.reset(); ch.update(); } catch(e) { /* gráfico aún no creado */ }
    });

    /* Al terminar se retira la clase: el fill-mode de la animación no debe
       quedar fijando transform y bloquear el hover de cards y celdas. */
    clearTimeout(clearT);
    clearT = setTimeout(function(){
      view.classList.remove('av-in');
    }, reduce ? 0 : CICLO - 100);
  }

  /* El canvas oculto no tiene medidas: se relanza tras el resize que dispara
     el propio cambio de tab, para que las barras midan bien desde el arranque. */
  function schedule(){ setTimeout(replay, 90); }

  /* Solo interesa la transición oculto → visible. Añadir y quitar `av-in`
     también muta la clase de la vista, pero no cambia su visibilidad, de modo
     que la secuencia nunca se realimenta a sí misma. */
  var wasVisible = false;
  function onMutate(){
    var vis = isVisible();
    if (vis && !wasVisible) { wasVisible = true; schedule(); }
    else if (!vis) { wasVisible = false; }
  }

  new MutationObserver(onMutate).observe(view, {attributes:true, attributeFilter:['class']});
  new MutationObserver(onMutate).observe(sec,  {attributes:true, attributeFilter:['class']});

  onMutate();
})();
