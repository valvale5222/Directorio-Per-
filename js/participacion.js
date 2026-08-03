/* ============================================================
   PARTICIPACIÓN DE MERCADO — MS FINAL.xlsx (Market Share estimado)
   Metodología (respetada del Excel, sin alterar):
   1) Factor = Ventas alineadas Friopacking / Importaciones Friopacking del periodo.
   2) Facturación estimada = Importaciones de cada empresa × Factor del periodo.
   3) Participación = Facturación estimada / Mercado estimado seleccionado.
   Cada periodo trae su propio factor (no se usa un factor global).
   Sector de Energy Project Group corregido a Multisector (antes Cárnicos) en la fuente.
   ============================================================ */
var PART_DATA = [
{key:'2021-2022',label:'2021–2022',
 meta:{importPeriodo:'Junio 2021 – Mayo 2022',impFP:1613304,ventasAlineadas:21512508.73,factor:13.334442,mercadoTotal:83790727.06,fpShare:0.256741},
 refrTotal:{freon:43083367.91,amoniaco:40707359.15},
 sectorBlock:{agroexportacion:0.256741,multisector:0.679780,pesca:0.024224,retail:0.039255},
 companies:[
  {rank:1,name:'Friopacking',refr:'Amoníaco / Freón',sector:'Agroexportación',imports:1613304,billing:21512508.73,share:0.256741,billFreon:10326004.19,billAmon:11186504.54},
  {rank:2,name:'Energy Project Group',refr:'Freón',sector:'Multisector',imports:1302351,billing:17366123.96,share:0.207256,billFreon:17366123.96,billAmon:0},
  {rank:3,name:'Mayekawa Perú',refr:'Amoníaco',sector:'Multisector',imports:1023455,billing:13647201.41,share:0.162872,billFreon:0,billAmon:13647201.41},
  {rank:4,name:'Fricold',refr:'Freón',sector:'Multisector',imports:848156,billing:11309687.05,share:0.134975,billFreon:5654843.52,billAmon:5654843.52},
  {rank:5,name:'Inema Perú',refr:'Amoníaco',sector:'Multisector',imports:526892,billing:7025810.85,share:0.08385,billFreon:3512905.43,billAmon:3512905.43},
  {rank:6,name:'Booster Group Perú',refr:'Amoníaco',sector:'Retail',imports:246668,billing:3289180.16,share:0.039255,billFreon:3289180.16,billAmon:0},
  {rank:7,name:'ASAP Consulting',refr:'Amoníaco',sector:'Pesca',imports:236366,billing:3151808.73,share:0.037615,billFreon:1575904.37,billAmon:1575904.37},
  {rank:8,name:'Control Automation',refr:'Freón',sector:'Multisector',imports:185456,billing:2472952.29,share:0.029513,billFreon:1236476.14,billAmon:1236476.14},
  {rank:9,name:'Catri Perú',refr:'Amoníaco',sector:'Multisector',imports:148915,billing:1985698.44,share:0.023698,billFreon:0,billAmon:1985698.44},
  {rank:10,name:'HB Refrigeración',refr:'Freón',sector:'Multisector',imports:143075,billing:1907825.3,share:0.022769,billFreon:0,billAmon:1907825.3},
  {rank:11,name:'Mitor Ingenieros',refr:'Amoníaco',sector:'Pesca',imports:9144,billing:121930.14,share:0.001455,billFreon:121930.14,billAmon:0},
  {rank:null,name:'Asym Industrial',refr:'Amoníaco',sector:'Multisector',imports:0,billing:0,share:0,billFreon:0,billAmon:0},
  {rank:null,name:'Autorel',refr:'Freón',sector:'Multisector',imports:0,billing:0,share:0,billFreon:0,billAmon:0}
 ]},
{key:'2022-2023',label:'2022–2023',
 meta:{importPeriodo:'Junio 2022 – Mayo 2023',impFP:4434118,ventasAlineadas:30287783.73,factor:6.830622,mercadoTotal:74871772.31,fpShare:0.404529},
 refrTotal:{freon:33997217.73,amoniaco:40874554.58},
 sectorBlock:{agroexportacion:0.404529,multisector:0.510328,pesca:0.028971,retail:0.056173},
 companies:[
  {rank:1,name:'Friopacking',refr:'Amoníaco / Freón',sector:'Agroexportación',imports:4434118,billing:30287783.73,share:0.404529,billFreon:10903602.14,billAmon:19384181.59},
  {rank:2,name:'Mayekawa Perú',refr:'Amoníaco',sector:'Multisector',imports:1326755,billing:9062561.82,share:0.121041,billFreon:9062561.82,billAmon:0},
  {rank:3,name:'Energy Project Group',refr:'Freón',sector:'Multisector',imports:1208579,billing:8255346.24,share:0.11026,billFreon:0,billAmon:8255346.24},
  {rank:4,name:'Asym Industrial',refr:'Amoníaco',sector:'Multisector',imports:753739,billing:5148506.16,share:0.068764,billFreon:2574253.08,billAmon:2574253.08},
  {rank:5,name:'Control Automation',refr:'Freón',sector:'Multisector',imports:711034,billing:4856804.45,share:0.064868,billFreon:2428402.22,billAmon:2428402.22},
  {rank:6,name:'Booster Group Perú',refr:'Amoníaco',sector:'Retail',imports:615718,billing:4205736.88,share:0.056173,billFreon:4205736.88,billAmon:0},
  {rank:7,name:'Fricold',refr:'Freón',sector:'Multisector',imports:563801,billing:3851111.48,share:0.051436,billFreon:1925555.74,billAmon:1925555.74},
  {rank:8,name:'Inema Perú',refr:'Amoníaco',sector:'Multisector',imports:461537,billing:3152584.76,share:0.042106,billFreon:1576292.38,billAmon:1576292.38},
  {rank:9,name:'HB Refrigeración',refr:'Freón',sector:'Multisector',imports:453166,billing:3095405.63,share:0.041343,billFreon:0,billAmon:3095405.63},
  {rank:10,name:'Mitor Ingenieros',refr:'Amoníaco',sector:'Pesca',imports:182788,billing:1248555.72,share:0.016676,billFreon:0,billAmon:1248555.72},
  {rank:11,name:'ASAP Consulting',refr:'Amoníaco',sector:'Pesca',imports:134769,billing:920556.09,share:0.012295,billFreon:920556.09,billAmon:0},
  {rank:12,name:'Catri Perú',refr:'Amoníaco',sector:'Multisector',imports:113185,billing:773123.95,share:0.010326,billFreon:386561.97,billAmon:386561.97},
  {rank:13,name:'Autorel',refr:'Freón',sector:'Multisector',imports:2005,billing:13695.4,share:0.000183,billFreon:13695.4,billAmon:0}
 ]},
{key:'2023-2024',label:'2023–2024',
 meta:{importPeriodo:'Junio 2023 – Mayo 2024',impFP:1562952,ventasAlineadas:15345395.38,factor:9.818213,mercadoTotal:62700835.14,fpShare:0.24474},
 refrTotal:{freon:35555948.89,amoniaco:27144886.25},
 sectorBlock:{agroexportacion:0.244740,multisector:0.610801,pesca:0.072537,retail:0.071921},
 companies:[
  {rank:1,name:'Friopacking',refr:'Amoníaco / Freón',sector:'Agroexportación',imports:1562952,billing:15345395.38,share:0.24474,billFreon:9974507,billAmon:5370888.38},
  {rank:2,name:'Mayekawa Perú',refr:'Amoníaco',sector:'Multisector',imports:1538877,billing:15109021.91,share:0.24097,billFreon:15109021.91,billAmon:0},
  {rank:3,name:'Energy Project Group',refr:'Freón',sector:'Multisector',imports:1171348,billing:11500543.96,share:0.183419,billFreon:0,billAmon:11500543.96},
  {rank:4,name:'Asym Industrial',refr:'Amoníaco',sector:'Multisector',imports:504957,billing:4957775.3,share:0.07907,billFreon:2478887.65,billAmon:2478887.65},
  {rank:5,name:'Booster Group Perú',refr:'Amoníaco',sector:'Retail',imports:459303,billing:4509534.61,share:0.071921,billFreon:2254767.3,billAmon:2254767.3},
  {rank:6,name:'Mitor Ingenieros',refr:'Amoníaco',sector:'Pesca',imports:250755,billing:2461965.96,share:0.039265,billFreon:2461965.96,billAmon:0},
  {rank:7,name:'ASAP Consulting',refr:'Amoníaco',sector:'Pesca',imports:212480,billing:2086173.86,share:0.033272,billFreon:1043086.93,billAmon:1043086.93},
  {rank:8,name:'Control Automation',refr:'Freón',sector:'Multisector',imports:202118,billing:1984437.54,share:0.031649,billFreon:992218.77,billAmon:992218.77},
  {rank:9,name:'HB Refrigeración',refr:'Freón',sector:'Multisector',imports:182948,billing:1796222.4,share:0.028648,billFreon:0,billAmon:1796222.4},
  {rank:10,name:'Fricold',refr:'Freón',sector:'Multisector',imports:173807,billing:1706474.12,share:0.027216,billFreon:0,billAmon:1706474.12},
  {rank:11,name:'Catri Perú',refr:'Amoníaco',sector:'Multisector',imports:126265,billing:1239696.64,share:0.019772,billFreon:1239696.64,billAmon:0},
  {rank:12,name:'Autorel',refr:'Freón',sector:'Multisector',imports:366,billing:3593.47,share:0.000057,billFreon:1796.73,billAmon:1796.73},
  {rank:null,name:'Inema Perú',refr:'Amoníaco',sector:'Multisector',imports:0,billing:0,share:0,billFreon:0,billAmon:0}
 ]},
{key:'2024-2025',label:'2024–2025',
 meta:{importPeriodo:'Junio 2024 – Mayo 2025',impFP:2475660,ventasAlineadas:15498989.55,factor:6.260549,mercadoTotal:45406481.27,fpShare:0.341339},
 refrTotal:{freon:23946896.72,amoniaco:21459584.55},
 sectorBlock:{agroexportacion:0.341339,multisector:0.422943,pesca:0.116456,retail:0.119262},
 companies:[
  {rank:1,name:'Friopacking',refr:'Amoníaco / Freón',sector:'Agroexportación',imports:2475660,billing:15498989.55,share:0.341339,billFreon:6509575.61,billAmon:8989413.94},
  {rank:2,name:'Energy Project Group',refr:'Freón',sector:'Multisector',imports:1406674,billing:8806550.83,share:0.193949,billFreon:8806550.83,billAmon:0},
  {rank:3,name:'Booster Group Perú',refr:'Amoníaco',sector:'Retail',imports:864981,billing:5415255.52,share:0.119262,billFreon:0,billAmon:5415255.52},
  {rank:4,name:'HB Refrigeración',refr:'Freón',sector:'Multisector',imports:663356,billing:4152972.42,share:0.091462,billFreon:2076486.21,billAmon:2076486.21},
  {rank:5,name:'Mayekawa Perú',refr:'Amoníaco',sector:'Multisector',imports:549268,billing:3438718.96,share:0.075732,billFreon:1719359.48,billAmon:1719359.48},
  {rank:6,name:'Mitor Ingenieros',refr:'Amoníaco',sector:'Pesca',imports:447393,billing:2800925.58,share:0.061686,billFreon:2800925.58,billAmon:0},
  {rank:7,name:'ASAP Consulting',refr:'Amoníaco',sector:'Pesca',imports:397237,billing:2486921.51,share:0.05477,billFreon:1243460.76,billAmon:1243460.76},
  {rank:8,name:'Inema Perú',refr:'Amoníaco',sector:'Multisector',imports:247984,billing:1552515.86,share:0.034192,billFreon:776257.93,billAmon:776257.93},
  {rank:9,name:'Fricold',refr:'Freón',sector:'Multisector',imports:131299,billing:822003.76,share:0.018103,billFreon:0,billAmon:822003.76},
  {rank:10,name:'Control Automation',refr:'Freón',sector:'Multisector',imports:66663,billing:417346.95,share:0.009191,billFreon:0,billAmon:417346.95},
  {rank:11,name:'Autorel',refr:'Freón',sector:'Multisector',imports:2281,billing:14280.31,share:0.000314,billFreon:14280.31,billAmon:0},
  {rank:null,name:'Asym Industrial',refr:'Amoníaco',sector:'Multisector',imports:0,billing:0,share:0,billFreon:0,billAmon:0},
  {rank:null,name:'Catri Perú',refr:'Amoníaco',sector:'Multisector',imports:0,billing:0,share:0,billFreon:0,billAmon:0}
 ]},
{key:'2025-2026',label:'2025–2026',
 meta:{importPeriodo:'Junio 2025 – Mayo 2026',impFP:5151627,ventasAlineadas:41603437.85,factor:8.075786,mercadoTotal:92490476.4,fpShare:0.449813},
 refrTotal:{freon:35216019.18,amoniaco:57274457.22},
 sectorBlock:{agroexportacion:0.449813,multisector:0.503626,pesca:0.039851,retail:0.006709},
 companies:[
  {rank:1,name:'Friopacking',refr:'Amoníaco / Freón',sector:'Agroexportación',imports:5151627,billing:41603437.85,share:0.449813,billFreon:8320687.57,billAmon:33282750.28},
  {rank:2,name:'Energy Project Group',refr:'Freón',sector:'Multisector',imports:2297894,billing:18557300.48,share:0.20064,billFreon:18557300.48,billAmon:0},
  {rank:3,name:'Mayekawa Perú',refr:'Amoníaco',sector:'Multisector',imports:1916208,billing:15474885.98,share:0.167313,billFreon:0,billAmon:15474885.98},
  {rank:4,name:'Control Automation',refr:'Freón',sector:'Multisector',imports:690462,billing:5576023.44,share:0.060288,billFreon:2788011.72,billAmon:2788011.72},
  {rank:5,name:'Asym Industrial',refr:'Amoníaco',sector:'Multisector',imports:357728,billing:2888934.82,share:0.031235,billFreon:1444467.41,billAmon:1444467.41},
  {rank:6,name:'Fricold',refr:'Freón',sector:'Multisector',imports:261219,billing:2109548.78,share:0.022808,billFreon:2109548.78,billAmon:0},
  {rank:7,name:'Mitor Ingenieros',refr:'Amoníaco',sector:'Pesca',imports:249889,billing:2018050.12,share:0.021819,billFreon:1009025.06,billAmon:1009025.06},
  {rank:8,name:'Inema Perú',refr:'Amoníaco',sector:'Multisector',imports:244429,billing:1973956.33,share:0.021342,billFreon:986978.16,billAmon:986978.16},
  {rank:9,name:'ASAP Consulting',refr:'Amoníaco',sector:'Pesca',imports:206522,billing:1667827.5,share:0.018032,billFreon:0,billAmon:1667827.5},
  {rank:10,name:'Booster Group Perú',refr:'Amoníaco',sector:'Retail',imports:76836,billing:620511.1,share:0.006709,billFreon:0,billAmon:620511.1},
  {rank:null,name:'Autorel',refr:'Freón',sector:'Multisector',imports:0,billing:0,share:0,billFreon:0,billAmon:0},
  {rank:null,name:'Catri Perú',refr:'Amoníaco',sector:'Multisector',imports:0,billing:0,share:0,billFreon:0,billAmon:0},
  {rank:null,name:'HB Refrigeración',refr:'Freón',sector:'Multisector',imports:0,billing:0,share:0,billFreon:0,billAmon:0}
 ]}
];

var PART_STATE = { tab:'evol', period:'2025-2026', evolMode:'lider', evolHighlight:null };
var PART_NEUTRAL_COLORS = ['#94a3b8','#B8C4D0','#7B98B2','#c9b28a','#a78bfa','#f0997b','#64748b','#4b5563'];
var PART_SECTOR_COLOR_MAP = {'agroexportacion':'#3EC6AC','multisector':'#64748B','pesca':'#185FA5','retail':'#d97706'};
var PART_SECTOR_LABEL_COLOR = {'agroexportacion':'#fff','multisector':'#fff','pesca':'#fff','retail':'#fff'};
var PART_REFR_COLOR_MAP = {amoniaco:'#3EC6AC', freon:'#185FA5'};
var PART_SECTOR_ORDER = ['Agroexportación','Multisector','Pesca','Retail'];

function partDisplayName(nm){ return nm; }
function partPeriod(key){ return PART_DATA.find(function(p){ return p.key===key; }); }
function partPeriodIdx(key){ return PART_DATA.findIndex(function(p){ return p.key===key; }); }
function partPct(n){ return (n*100).toFixed(2)+'%'; }
function partPPTxt(n){ var v=n*100; return (v>=0?'+':'')+v.toFixed(2)+' pp'; }
function partPctTxt(n){ return (n>=0?'+':'')+n.toFixed(2)+'%'; }
function partPlural(n, word){
  if(n===1) return n+' '+word;
  var plural = /[aeiouáéíóú]$/i.test(word) ? word+'s' : word+'es';
  return n+' '+plural;
}
function partNeutralColor(i){ return PART_NEUTRAL_COLORS[i % PART_NEUTRAL_COLORS.length]; }
function partWithAlpha(hex, alpha){
  var h = hex.replace('#','');
  if(h.length===3) h = h.split('').map(function(c){ return c+c; }).join('');
  var r=parseInt(h.substr(0,2),16), g=parseInt(h.substr(2,2),16), b=parseInt(h.substr(4,2),16);
  return 'rgba('+r+','+g+','+b+','+alpha+')';
}

/* ── Normalización de sectores (mayúsculas, tildes, espacios) ─── */
function partNormSectorLabel(s){ return (s||'').toString().trim().replace(/\s+/g,' '); }
function partSectorKey(s){
  return partNormSectorLabel(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
}
function partSegByRefr(period, mode){
  var list = period.companies.filter(function(c){
    if(mode==='freon') return c.refr.indexOf('Freón')>=0;
    if(mode==='amoniaco') return c.refr.indexOf('Amoníaco')>=0;
    return true;
  });
  var total = list.reduce(function(s,c){ return s+c.billing; },0);
  return list.map(function(c){ var o=Object.assign({},c); o.segShare = total>0? c.billing/total : 0; return o; })
             .sort(function(a,b){ return b.segShare-a.segShare; });
}
function partCompanyNames(){
  var set={};
  PART_DATA.forEach(function(p){ p.companies.forEach(function(c){ set[c.name]=true; }); });
  return Object.keys(set);
}
function partAvgShare(name){
  var vals = PART_DATA.map(function(p){
    var c = p.companies.find(function(x){ return x.name===name; });
    return c? c.share : 0;
  });
  return vals.reduce(function(s,v){ return s+v; },0)/vals.length;
}
function partTopCompetitors(n){
  return partCompanyNames().filter(function(nm){ return nm!=='Friopacking'; })
    .map(function(nm){ return { name:nm, avg:partAvgShare(nm) }; })
    .sort(function(a,b){ return b.avg-a.avg; })
    .slice(0,n)
    .map(function(x){ return x.name; });
}
function partAllCompetitorNames(){
  return partTopCompetitors(9999);
}

/* ── Hero KPIs (fijos · lectura ejecutiva del periodo 2025–2026, no varían con tabs/filtros) ── */
function partRenderHeroKpis(){
  var chips = [
    {color:'#3EC6AC', lbl:'Participación', val:'44.98%', sub:'2025–2026'},
    {color:'#fff', lbl:'Posición', val:'#1', sub:'13 empresas'},
    {color:'#7dd3fc', lbl:'Líder', val:'Friopacking', sub:'44.98%'},
    {color:'#4ade80', lbl:'Ventaja', val:'+24.92 pp', sub:'↑ vs Energy Project Group', subColor:'#4ade80'}
  ];
  document.getElementById('partHeroKpis').innerHTML = chips.map(function(c){
    return '<div class="part-kpi">'
      +'<div class="part-kpi-lbl">'+c.lbl+'</div>'
      +'<div class="part-kpi-val" style="color:'+c.color+'">'+c.val+'</div>'
      +'<div class="part-kpi-sub"'+(c.subColor? (' style="color:'+c.subColor+'"') : '')+'>'+c.sub+'</div>'
      +'</div>';
  }).join('');
}

/* ── TAB 1: Evolución competitiva ───────────────────────── */
function partEvolSeriesNames(){
  if(PART_STATE.evolMode==='lider') return partTopCompetitors(1);
  if(PART_STATE.evolMode==='top5') return partTopCompetitors(4);
  return partAllCompetitorNames();
}
function partRenderEvolLegend(datasets){
  var hl = PART_STATE.evolHighlight;
  document.getElementById('partEvolLegend').innerHTML = datasets.map(function(ds){
    var isFp = ds.key==='Friopacking';
    var active = hl===ds.key;
    return '<div class="part-h-legend-item'+(active?' active':'')+(isFp?' is-fp':'')+'" data-name="'+ds.key.replace(/"/g,'&quot;')+'">'
      +'<i class="part-h-dot" style="background:'+ds._trueColor+'"></i>'+ds.label+'</div>';
  }).join('');
}
function partRenderEvolChart(){
  var el = document.getElementById('chPartEvol'); if(!el||typeof Chart==='undefined') return;
  var activeIdx = partPeriodIdx(PART_STATE.period);
  var names = partEvolSeriesNames();
  var labels = PART_DATA.map(function(p){ return p.label; });
  var fpData = PART_DATA.map(function(p){
    var c=p.companies.find(function(x){ return x.name==='Friopacking'; });
    return c? +(c.share*100).toFixed(2):0;
  });
  var fpRadius = labels.map(function(_,i){ return i===activeIdx?7:4; });
  var datasets = [{
    key:'Friopacking', label:'Friopacking', data:fpData, borderColor:'#3EC6AC', backgroundColor:'rgba(62,198,172,.12)',
    borderWidth:3, pointRadius:fpRadius, pointHoverRadius:8, pointHoverBorderWidth:2, pointBackgroundColor:'#3EC6AC',
    pointBorderColor:'#fff', pointBorderWidth:1.5, tension:.35, fill:false, order:0, _trueColor:'#3EC6AC'
  }];
  var hl = PART_STATE.evolHighlight;
  names.forEach(function(nm,i){
    var data = PART_DATA.map(function(p){
      var c=p.companies.find(function(x){ return x.name===nm; });
      return c? +(c.share*100).toFixed(2):0;
    });
    var color = i===0? '#1a8fd1' : partNeutralColor(i-1);
    var isHl = hl===nm, dim = hl && !isHl;
    var radius = labels.map(function(_,j){ return j===activeIdx?(isHl?6:2.5):(isHl?4:2); });
    datasets.push({
      key:nm, label:partDisplayName(nm), data:data,
      borderColor: dim? partWithAlpha(color,.22) : color,
      backgroundColor:'transparent',
      borderWidth: isHl?2.5:(i===0?2:1.5),
      borderDash: isHl?[]:(i===0?[]:[4,3]),
      pointRadius:radius, pointBackgroundColor: dim? partWithAlpha(color,.22):color,
      tension:.35, fill:false, order:i+1, _trueColor:color
    });
  });
  if(Chart.getChart(el)) Chart.getChart(el).destroy();
  new Chart(el,{
    type:'line',
    data:{labels:labels, datasets:datasets},
    options:{
      responsive:true, maintainAspectRatio:false,
      animation:{duration:900, easing:'easeInOutQuart'},
      plugins:{
        legend:{display:false},
        tooltip:{
          mode:'index', intersect:false, backgroundColor:'rgba(9,12,30,.95)', padding:12, cornerRadius:12,
          borderColor:'rgba(62,198,172,.3)', borderWidth:1, titleColor:'rgba(255,255,255,.6)', bodyColor:'rgba(255,255,255,.92)',
          titleFont:{size:11,weight:'700'}, bodyFont:{size:12,weight:'600'}, boxPadding:4,
          callbacks:{ label:function(ctx){ return ctx.dataset.label+': '+ctx.parsed.y.toFixed(2)+'%'; } }
        }
      },
      scales:{
        x:{grid:{display:false}, border:{display:false}, ticks:{font:{size:12,weight:'600'},color:'#0a0a1e'}},
        y:{grid:{color:'rgba(10,10,30,.05)'}, border:{display:false}, min:0, ticks:{font:{size:11},color:'#94a3b8', callback:function(v){ return v+'%'; }}}
      }
    }
  });
  partRenderEvolLegend(datasets);
}
function partRenderEvolPane(){
  var period = partPeriod(PART_STATE.period);
  var ranked = partSegByRefr(period,'global');
  var fp = ranked.find(function(c){ return c.name==='Friopacking'; });
  var fpIdx = ranked.indexOf(fp);

  /* Ranking sincronizado: mismo grupo de empresas que el gráfico según el toggle activo,
     ordenado por su participación real en el periodo seleccionado. */
  var mode = PART_STATE.evolMode;
  var namesInView = partEvolSeriesNames();
  var allowed = {}; namesInView.forEach(function(nm){ allowed[nm]=true; });
  var rankList = ranked.filter(function(c){ return c.name==='Friopacking' || allowed[c.name]; })
                        .filter(function(c){ return c.name==='Friopacking' || c.billing>0; });

  var subTxt = mode==='lider' ? 'Friopacking vs líder' : mode==='top5' ? 'Top 5 empresas' : partPlural(rankList.length,'empresa')+' con información en el periodo';
  document.getElementById('partEvolRankSub').textContent = period.label+' · '+subTxt;

  var listEl = document.getElementById('partEvolRankList');
  listEl.className = mode==='todos' ? 'part-rank-scroll' : '';

  var maxShare = rankList[0].segShare||1;
  var html='';
  rankList.forEach(function(c,i){
    var isFp = c.name==='Friopacking';
    html += '<div class="part-rank-row'+(isFp?' is-fp':'')+'">'
      +'<div class="part-rank-pos">#'+(i+1)+'</div>'
      +'<div class="part-rank-name">'+partDisplayName(c.name)+'</div>'
      +'<div class="part-rank-bar-cell"><div class="part-rank-bar"><div class="part-rank-bar-fill" style="width:'+Math.round(c.segShare/maxShare*100)+'%"></div></div></div>'
      +'<div class="part-rank-val">'+partPct(c.segShare)+'</div>'
      +'</div>';
  });
  listEl.innerHTML = html;

  var second = ranked[1];
  var gap = fp.segShare - second.segShare;
  document.getElementById('partEvolMicro').innerHTML = '<strong>Friopacking</strong> ocupa la posición <strong>#'+(fpIdx+1)+'</strong> en '+period.label+' con una participación estimada de <strong>'+partPct(fp.segShare)+'</strong>, con una ventaja de <strong>'+partPPTxt(gap)+'</strong> sobre '+partDisplayName(second.name)+' (2.º lugar).';

  partRenderHeroKpis(fp, ranked, period, {});
}

/* ── Evolución del mercado de refrigeración (barras apiladas Friopacking vs Resto + tendencia total) ── */
function partRenderMarketChart(){
  var el = document.getElementById('chPartMarket'); if(!el||typeof Chart==='undefined') return;
  var labels = PART_DATA.map(function(p){ return p.label; });
  var values = PART_DATA.map(function(p){ return p.meta.mercadoTotal; });
  var fpValues = PART_DATA.map(function(p){
    var fp = p.companies.find(function(c){ return c.name==='Friopacking'; });
    return fp ? fp.billing : 0;
  });
  var restValues = values.map(function(v,i){ return v-fpValues[i]; });
  var variations = values.map(function(v,i){ return i===0? null : (v-values[i-1])/values[i-1]; });
  var FP_COLOR = '#3EC6AC', REST_COLOR = '#94a3b8';

  var legendEl = document.getElementById('partMarketLegend');
  if(legendEl) legendEl.innerHTML =
      '<div class="part-mkt-legend-item"><i class="part-mkt-legend-dot" style="background:'+FP_COLOR+'"></i>Friopacking</div>'
    +'<div class="part-mkt-legend-item"><i class="part-mkt-legend-dot" style="background:'+REST_COLOR+'"></i>Resto del mercado</div>';

  if(Chart.getChart(el)) Chart.getChart(el).destroy();
  new Chart(el,{
    type:'bar',
    data:{
      labels:labels,
      datasets:[
        {
          type:'bar', label:'Friopacking', data:fpValues, stack:'mkt',
          backgroundColor:FP_COLOR, borderColor:FP_COLOR, borderWidth:1,
          borderRadius:{topLeft:0,topRight:0,bottomLeft:6,bottomRight:6}, maxBarThickness:64, order:3
        },
        {
          type:'bar', label:'Resto del mercado', data:restValues, stack:'mkt',
          backgroundColor:REST_COLOR, borderColor:REST_COLOR, borderWidth:1,
          borderRadius:{topLeft:6,topRight:6,bottomLeft:0,bottomRight:0}, maxBarThickness:64, order:2
        },
        {
          type:'line', label:'Tendencia', data:values,
          borderColor:'#0a0a1e', backgroundColor:'#0a0a1e', borderWidth:3, tension:.35,
          pointRadius:5, pointBackgroundColor:'#0a0a1e', pointBorderColor:'#fff', pointBorderWidth:1.5,
          pointHoverRadius:7, fill:false, order:1
        }
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      animation:{duration:1000, easing:'easeOutQuart'},
      interaction:{mode:'index', intersect:false},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(9,12,30,.95)', padding:12, cornerRadius:12,
          borderColor:'rgba(62,198,172,.3)', borderWidth:1, titleColor:'rgba(255,255,255,.6)', bodyColor:'rgba(255,255,255,.92)',
          titleFont:{size:11,weight:'700'}, bodyFont:{size:12,weight:'600'}, boxPadding:4,
          filter:function(ctx){ return ctx.datasetIndex===0 || ctx.datasetIndex===1; },
          callbacks:{
            label:function(ctx){
              var total = values[ctx.dataIndex];
              var val = ctx.parsed.y;
              var pct = total>0 ? (val/total*100) : 0;
              return ctx.dataset.label+'  ·  Importe: '+fmtEjecutivo(val)+'  ·  Participación: '+pct.toFixed(2)+'%';
            },
            footer:function(items){
              var idx = items[0].dataIndex;
              var v = variations[idx];
              var lines = ['Mercado total: '+fmtEjecutivo(values[idx])];
              lines.push(v==null ? 'Sin periodo anterior comparable' : 'Variación: '+partPctTxt(v*100));
              return lines;
            }
          }
        }
      },
      scales:{
        x:{stacked:true, grid:{display:false}, border:{display:false}, ticks:{font:{size:12,weight:'600'},color:'#0a0a1e'}},
        y:{stacked:true, grid:{color:'rgba(10,10,30,.05)'}, border:{display:false}, ticks:{font:{size:11},color:'#94a3b8', callback:function(v){ return fmtEjecutivo(v); }}}
      }
    }
  });
}

/* ── TAB 2 & 3: Por refrigerante / Por sector económico — módulo de inteligencia de mercado ── */
var PART_REFR_SEL = { period:null, cat:null };
var PART_SECTOR_SEL = { period:null, cat:null };
var PART_SECTOR_KEYS = ['agroexportacion','multisector','pesca','retail'];
var PART_REFR_KEYS = ['amoniaco','freon'];

function partArgmaxKey(obj, keys){
  var bestK=keys[0], bestV=-1;
  keys.forEach(function(k){ if((obj[k]||0)>bestV){ bestV=obj[k]; bestK=k; } });
  return bestK;
}
function partResetRefrSel(){
  var p = partPeriod('2025-2026');
  PART_REFR_SEL.period = '2025-2026';
  PART_REFR_SEL.cat = (p.refrTotal.amoniaco>=p.refrTotal.freon) ? 'amoniaco' : 'freon';
}
function partResetSectorSel(){
  var p = partPeriod('2025-2026');
  PART_SECTOR_SEL.period = '2025-2026';
  PART_SECTOR_SEL.cat = partArgmaxKey(p.sectorBlock, PART_SECTOR_KEYS);
}
function partRefrLabel(k){ return k==='freon' ? 'Freón' : 'Amoníaco'; }
function partSectorLabel(k){ return PART_SECTOR_ORDER[PART_SECTOR_KEYS.indexOf(k)] || k; }
function partRefrBillField(key){ return key==='freon' ? 'billFreon' : 'billAmon'; }
function partCompaniesByRefr(period, key){
  var field = partRefrBillField(key);
  var total = period.refrTotal[key] || 0;
  return period.companies.filter(function(c){ return (c[field]||0)>0; })
    .map(function(c){
      var o = Object.assign({}, c);
      o.refrBilling = c[field]||0;
      o.refrShare = total>0 ? o.refrBilling/total : 0;
      return o;
    })
    .sort(function(a,b){ return b.refrShare-a.refrShare; });
}
function partRefrCompanySet(key){
  var field = partRefrBillField(key);
  var seen = {};
  PART_DATA.forEach(function(p){
    p.companies.forEach(function(c){ if((c[field]||0)>0) seen[c.name]=true; });
  });
  function avgShare(nm){
    var sum=0, n=0;
    PART_DATA.forEach(function(p){
      var c = p.companies.find(function(x){ return x.name===nm; });
      var total = p.refrTotal[key]||0;
      if(total>0){ sum += (c? (c[field]||0) : 0)/total; n++; }
    });
    return n? sum/n : 0;
  }
  var others = Object.keys(seen).filter(function(nm){ return nm!=='Friopacking'; })
    .sort(function(a,b){ return avgShare(b)-avgShare(a); });
  return seen['Friopacking'] ? ['Friopacking'].concat(others) : others;
}
function partCompaniesBySector(period, key){
  return period.companies.filter(function(c){ return partSectorKey(c.sector)===key; })
    .slice().sort(function(a,b){ return b.share-a.share; });
}

/* ── Tooltip premium externo (tecnológico, compartido por ambos gráficos) ── */
function partExternalTooltip(context){
  var chart = context.chart;
  var tooltip = context.tooltip;
  var id = chart.canvas.id+'-ttp';
  var el = document.getElementById(id);
  if(!el){
    el = document.createElement('div');
    el.id = id;
    el.className = 'pms-tooltip';
    document.body.appendChild(el);
  }
  if(tooltip.opacity===0){ el.style.opacity = 0; return; }
  var dp = tooltip.dataPoints && tooltip.dataPoints[0];
  if(!dp){ el.style.opacity = 0; return; }
  var ds = dp.dataset;
  var html = '<div class="pms-ttp-period">'+dp.label+'</div>'
    +'<div class="pms-ttp-row"><span class="pms-ttp-dot" style="background:'+ds._trueColor+'"></span>'+ds.label+'</div>';
  if(ds._refrKey) html += '<div class="pms-ttp-sub">'+partRefrLabel(ds._refrKey)+'</div>';
  if(ds._bill) html += '<div class="pms-ttp-sub">'+fmtEjecutivo(ds._bill[dp.dataIndex])+'</div>';
  html += '<div class="pms-ttp-val">'+dp.formattedValue+'%</div>';
  el.innerHTML = html;
  var rect = chart.canvas.getBoundingClientRect();
  el.style.opacity = 1;
  el.style.left = (window.scrollX+rect.left+tooltip.caretX)+'px';
  el.style.top = (window.scrollY+rect.top+tooltip.caretY)+'px';
}

/* ── Plugin: guía discreta del período seleccionado ──────── */
function partGuidePlugin(getIdx){
  return {
    id:'pmsGuide'+Math.random().toString(36).slice(2),
    beforeDatasetsDraw:function(chart){
      var idx = getIdx();
      if(idx==null || idx<0) return;
      var meta = chart.getDatasetMeta(0);
      var bar = meta && meta.data && meta.data[idx];
      if(!bar) return;
      var yScale = chart.scales.y;
      var half = (bar.width||30)/2 + 6;
      var ctx = chart.ctx;
      ctx.save();
      ctx.fillStyle = 'rgba(62,198,172,.07)';
      ctx.fillRect(bar.x-half, yScale.top, half*2, yScale.bottom-yScale.top);
      ctx.restore();
    }
  };
}
/* ── Plugin: % dentro del segmento, solo si hay espacio suficiente ── */
function partStackLabelsPlugin(){
  return {
    id:'pmsLabels'+Math.random().toString(36).slice(2),
    afterDatasetsDraw:function(chart){
      var ctx = chart.ctx;
      chart.data.datasets.forEach(function(ds,dsIdx){
        var meta = chart.getDatasetMeta(dsIdx);
        if(meta.hidden) return;
        meta.data.forEach(function(bar,i){
          var val = ds.data[i];
          if(val==null || val<=0) return;
          var h = Math.abs((bar.base||0)-(bar.y||0));
          if(h<22) return;
          ctx.save();
          ctx.fillStyle = ds._labelColor||'#fff';
          ctx.font = '700 11px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(val.toFixed(2)+'%', bar.x, (bar.y+bar.base)/2);
          ctx.restore();
        });
      });
    }
  };
}
function partSideRowsHtml(companies){
  if(!companies.length) return '<tr><td colspan="4" class="pms-empty">Sin empresas registradas en este segmento.</td></tr>';
  var maxShare = companies.reduce(function(m,c){ return Math.max(m,c.share); },0)||1;
  return companies.map(function(c,i){
    var isFp = c.name==='Friopacking';
    var w = Math.round((c.share/maxShare)*100);
    return '<tr class="'+(isFp?'pms-row-fp':'')+'">'
      +'<td class="pms-pos">#'+(i+1)+'</td>'
      +'<td><div class="pms-co-name">'+partDisplayName(c.name)+'</div><div class="pms-co-bar"><div class="pms-co-fill" style="width:'+w+'%"></div></div></td>'
      +'<td class="r">'+fmtEjecutivo(c.billing)+'</td>'
      +'<td class="r">'+partPct(c.share)+'</td>'
      +'</tr>';
  }).join('');
}
function partSideHeroKpis(companies, period){
  var heroList = companies.map(function(c){ var o=Object.assign({},c); o.segShare=c.share; return o; })
    .sort(function(a,b){ return b.segShare-a.segShare; });
  if(heroList.length){
    var heroFp = heroList.find(function(c){ return c.name==='Friopacking'; });
    partRenderHeroKpis(heroFp, heroList, period, {kpi4:'mercado', segTotal: heroList.reduce(function(s,c){return s+c.billing;},0)});
  }
}

/* ══════════ Por refrigerante ══════════ */
function partRenderRefrLegend(){
  var el = document.getElementById('pmsRefrLegend');
  el.innerHTML = PART_REFR_KEYS.map(function(k){
    var active = PART_REFR_SEL.cat===k;
    return '<div class="pms-legend-item'+(active?' active':'')+'" data-cat="'+k+'">'
      +'<i class="pms-legend-dot" style="background:'+PART_REFR_COLOR_MAP[k]+'"></i>'+partRefrLabel(k)+'</div>';
  }).join('');
}
function partRefrSideRowsHtml(companies){
  if(!companies.length) return '<tr><td colspan="4" class="pms-empty">Sin empresas registradas en este segmento.</td></tr>';
  var maxShare = companies.reduce(function(m,c){ return Math.max(m,c.refrShare); },0)||1;
  return companies.map(function(c,i){
    var isFp = c.name==='Friopacking';
    var w = Math.round((c.refrShare/maxShare)*100);
    return '<tr class="'+(isFp?'pms-row-fp':'')+'">'
      +'<td class="pms-pos">#'+(i+1)+'</td>'
      +'<td><div class="pms-co-name">'+partDisplayName(c.name)+'</div><div class="pms-co-bar"><div class="pms-co-fill" style="width:'+w+'%"></div></div></td>'
      +'<td class="r">'+fmtEjecutivo(c.refrBilling)+'</td>'
      +'<td class="r">'+partPct(c.refrShare)+'</td>'
      +'</tr>';
  }).join('');
}
function partRefrExternalTooltip(context){
  var chart = context.chart;
  var tooltip = context.tooltip;
  var id = chart.canvas.id+'-ttp';
  var el = document.getElementById(id);
  if(!el){
    el = document.createElement('div');
    el.id = id;
    el.className = 'pms-tooltip';
    document.body.appendChild(el);
  }
  if(tooltip.opacity===0){ el.style.opacity = 0; return; }
  var dp = tooltip.dataPoints && tooltip.dataPoints[0];
  if(!dp){ el.style.opacity = 0; return; }
  var ds = dp.dataset;
  var html = '<div class="pms-ttp-period">'+dp.label+'</div>'
    +'<div class="pms-ttp-row"><span class="pms-ttp-dot" style="background:'+ds._trueColor+'"></span>'+ds.label+'</div>'
    +'<div class="pms-ttp-sub">Participaci&oacute;n: '+dp.formattedValue+'%</div>'
    +'<div class="pms-ttp-val">Importe: '+fmtEjecutivo(ds._bill[dp.dataIndex])+'</div>';
  el.innerHTML = html;
  var rect = chart.canvas.getBoundingClientRect();
  el.style.opacity = 1;
  el.style.left = (window.scrollX+rect.left+tooltip.caretX)+'px';
  el.style.top = (window.scrollY+rect.top+tooltip.caretY)+'px';
}
function partRenderRefrStack(){
  var el = document.getElementById('chPartRefrStack'); if(!el||typeof Chart==='undefined') return;
  var labels = PART_DATA.map(function(p){ return p.label; });
  var selIdx = partPeriodIdx(PART_REFR_SEL.period);
  var bill = {
    amoniaco: PART_DATA.map(function(p){ return p.refrTotal.amoniaco||0; }),
    freon: PART_DATA.map(function(p){ return p.refrTotal.freon||0; })
  };
  var shareAmon = PART_DATA.map(function(p){
    var total = (p.refrTotal.amoniaco||0)+(p.refrTotal.freon||0);
    return total>0 ? +((p.refrTotal.amoniaco/total)*100).toFixed(2) : 0;
  });
  var data = {
    amoniaco: shareAmon,
    freon: shareAmon.map(function(v){ return +(100-v).toFixed(2); })
  };
  var datasets = PART_REFR_KEYS.map(function(k,ki){
    var isSelCat = PART_REFR_SEL.cat===k;
    var base = PART_REFR_COLOR_MAP[k];
    var bg = PART_DATA.map(function(){ return isSelCat ? base : partWithAlpha(base,.32); });
    var borderW = PART_DATA.map(function(p,i){ return (isSelCat && i===selIdx) ? 2 : 0; });
    var isTop = ki===PART_REFR_KEYS.length-1;
    return {
      key:k, label:partRefrLabel(k), data:data[k], _bill:bill[k], _refrKey:k,
      backgroundColor:bg, hoverBackgroundColor:partWithAlpha(base,.85),
      hoverBorderColor:base, hoverBorderWidth:2,
      borderColor:'#fff', borderWidth:borderW, borderSkipped:false,
      borderRadius:{topLeft:isTop?8:0, topRight:isTop?8:0, bottomLeft:0, bottomRight:0},
      stack:'s1', maxBarThickness:96, _labelColor:'#fff', _trueColor:base
    };
  });
  if(Chart.getChart(el)) Chart.getChart(el).destroy();
  new Chart(el,{
    type:'bar',
    data:{labels:labels, datasets:datasets},
    plugins:[ partGuidePlugin(function(){ return partPeriodIdx(PART_REFR_SEL.period); }), partStackLabelsPlugin() ],
    options:{
      responsive:true, maintainAspectRatio:false,
      animation:{duration:1000, easing:'easeOutQuart'},
      interaction:{mode:'nearest', intersect:true},
      onHover:function(evt,elements,chart){ chart.canvas.style.cursor = (elements&&elements.length)?'pointer':'default'; },
      onClick:function(evt,elements,chart){
        if(!elements||!elements.length) return;
        var el0 = elements[0];
        var period = PART_DATA[el0.index].key;
        var cat = chart.data.datasets[el0.datasetIndex].key;
        setTimeout(function(){
          PART_REFR_SEL.period = period;
          PART_REFR_SEL.cat = cat;
          partRenderRefrPane();
        },0);
      },
      plugins:{ legend:{display:false}, tooltip:{ enabled:false, external:partRefrExternalTooltip } },
      scales:{
        x:{stacked:true, grid:{display:false}, border:{display:false}, ticks:{font:{size:12,weight:'700'},color:'#0a0a1e'}},
        y:{stacked:true, min:0, max:100, grid:{color:'rgba(10,10,30,.05)'}, border:{display:false},
           ticks:{font:{size:11},color:'#94a3b8', stepSize:20, callback:function(v){ return v+'%'; }}}
      }
    }
  });
}
function partRenderRefrSide(){
  var period = partPeriod(PART_REFR_SEL.period);
  var cat = PART_REFR_SEL.cat;
  var companies = partCompaniesByRefr(period, cat);
  var fp = companies.find(function(c){ return c.name==='Friopacking'; });

  document.getElementById('pmsRefrSide').innerHTML =
    '<div class="pms-side-head">'
      +'<div class="pms-side-lbl">Refrigerante seleccionado</div>'
      +'<div class="pms-side-seg">'+partRefrLabel(cat)+'</div>'
      +'<div class="pms-side-pct">'+(fp? partPct(fp.refrShare) : '—')+'</div>'
      +'<div class="pms-side-meta"><span class="pms-pill">'+period.label+'</span><span class="pms-count">'+partPlural(companies.length,'empresa')+'</span></div>'
    +'</div>'
    +'<div class="pms-side-title">Participación de Friopacking en '+partRefrLabel(cat).toLowerCase()+'</div>'
    +'<div class="pms-side-body"><table class="pms-tbl">'
      +'<thead><tr><th>#</th><th>Empresa</th><th class="r">Facturación '+partRefrLabel(cat).toLowerCase()+'</th><th class="r">Particip.</th></tr></thead>'
      +'<tbody>'+partRefrSideRowsHtml(companies)+'</tbody>'
    +'</table></div>';

  partRenderRefrLegend();
  partSideHeroKpis(companies, period);
}
function partRenderRefrPane(){
  if(typeof Chart==='undefined') return;
  if(!PART_REFR_SEL.period) partResetRefrSel();
  partRenderRefrStack();
  partRenderRefrSide();
}

/* ══════════ Por sector económico ══════════ */
function partRenderSectorLegend(){
  var el = document.getElementById('pmsSectorLegend');
  el.innerHTML = PART_SECTOR_KEYS.map(function(k,i){
    var active = PART_SECTOR_SEL.cat===k;
    return '<div class="pms-legend-item'+(active?' active':'')+'" data-cat="'+k+'">'
      +'<i class="pms-legend-dot" style="background:'+PART_SECTOR_COLOR_MAP[k]+'"></i>'+PART_SECTOR_ORDER[i]+'</div>';
  }).join('');
}
function partRenderSectorStack(){
  var el = document.getElementById('chPartSectorStack'); if(!el||typeof Chart==='undefined') return;
  var labels = PART_DATA.map(function(p){ return p.label; });
  var selIdx = partPeriodIdx(PART_SECTOR_SEL.period);
  var datasets = PART_SECTOR_KEYS.map(function(k,ki){
    var isSelCat = PART_SECTOR_SEL.cat===k;
    var base = PART_SECTOR_COLOR_MAP[k];
    var bg = PART_DATA.map(function(){ return isSelCat ? base : partWithAlpha(base,.32); });
    var borderW = PART_DATA.map(function(p,i){ return (isSelCat && i===selIdx) ? 2 : 0; });
    var data = PART_DATA.map(function(p){ return +(p.sectorBlock[k]*100).toFixed(2); });
    var isTop = ki===PART_SECTOR_KEYS.length-1;
    return {
      key:k, label:PART_SECTOR_ORDER[ki], data:data, backgroundColor:bg, hoverBackgroundColor:partWithAlpha(base,.85),
      hoverBorderColor:base, hoverBorderWidth:2,
      borderColor:'#fff', borderWidth:borderW, borderSkipped:false,
      borderRadius:{topLeft:isTop?8:0, topRight:isTop?8:0, bottomLeft:0, bottomRight:0},
      stack:'s1', maxBarThickness:96, _labelColor:PART_SECTOR_LABEL_COLOR[k], _trueColor:base
    };
  });
  if(Chart.getChart(el)) Chart.getChart(el).destroy();
  new Chart(el,{
    type:'bar',
    data:{labels:labels, datasets:datasets},
    plugins:[ partGuidePlugin(function(){ return partPeriodIdx(PART_SECTOR_SEL.period); }), partStackLabelsPlugin() ],
    options:{
      responsive:true, maintainAspectRatio:false,
      animation:{duration:1000, easing:'easeOutQuart'},
      interaction:{mode:'nearest', intersect:true},
      onHover:function(evt,elements,chart){ chart.canvas.style.cursor = (elements&&elements.length)?'pointer':'default'; },
      onClick:function(evt,elements,chart){
        if(!elements||!elements.length) return;
        var el0 = elements[0];
        var k = PART_SECTOR_KEYS[el0.datasetIndex];
        var period = PART_DATA[el0.index].key;
        setTimeout(function(){
          PART_SECTOR_SEL.cat = k; PART_SECTOR_SEL.period = period;
          partRenderSectorPane();
        },0);
      },
      plugins:{ legend:{display:false}, tooltip:{ enabled:false, external:partExternalTooltip } },
      scales:{
        x:{stacked:true, grid:{display:false}, border:{display:false}, ticks:{font:{size:12,weight:'700'},color:'#0a0a1e'}},
        y:{stacked:true, min:0, max:100, grid:{color:'rgba(10,10,30,.05)'}, border:{display:false},
           ticks:{font:{size:11},color:'#94a3b8', stepSize:20, callback:function(v){ return v+'%'; }}}
      }
    }
  });
}
function partRenderSectorSide(){
  var period = partPeriod(PART_SECTOR_SEL.period);
  var cat = PART_SECTOR_SEL.cat;
  var companies = partCompaniesBySector(period, cat);
  var pct = period.sectorBlock[cat];

  document.getElementById('pmsSectorSide').innerHTML =
    '<div class="pms-side-head">'
      +'<div class="pms-side-lbl">Sector seleccionado</div>'
      +'<div class="pms-side-seg">'+partSectorLabel(cat)+'</div>'
      +'<div class="pms-side-pct">'+(pct>0? partPct(pct) : '—')+'</div>'
      +'<div class="pms-side-meta"><span class="pms-pill">'+period.label+'</span><span class="pms-count">'+partPlural(companies.length,'empresa')+'</span></div>'
    +'</div>'
    +'<div class="pms-side-title">Empresas que conforman el sector</div>'
    +'<div class="pms-side-body"><table class="pms-tbl">'
      +'<thead><tr><th>#</th><th>Empresa</th><th class="r">Facturación est.</th><th class="r">Particip.</th></tr></thead>'
      +'<tbody>'+partSideRowsHtml(companies)+'</tbody>'
    +'</table></div>';

  partRenderSectorLegend();
  partSideHeroKpis(companies, period);
}
function partRenderSectorPane(){
  if(typeof Chart==='undefined') return;
  if(!PART_SECTOR_SEL.period) partResetSectorSel();
  partRenderSectorStack();
  partRenderSectorSide();
}

/* ── Navegación interna: tabs, periodo, init ─────────────── */
function partSwitchTab(tab, btn){
  PART_STATE.tab = tab;
  document.querySelectorAll('#partTabs .part-tab').forEach(function(t){ t.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('#participacion .part-pane').forEach(function(p){ p.classList.remove('active'); });
  document.getElementById('partPane-'+tab).classList.add('active');
  var ptabs = document.getElementById('partPeriodTabs');
  if(ptabs) ptabs.style.display = (tab==='evol') ? '' : 'none';
  if(tab==='refr') partResetRefrSel();
  if(tab==='sector') partResetSectorSel();
  partRenderActivePane();
  setTimeout(function(){ window.dispatchEvent(new Event('resize')); },60);
}
function partRenderPeriodTabs(){
  var wrap = document.getElementById('partPeriodTabs');
  wrap.innerHTML = PART_DATA.map(function(p){
    return '<button class="part-ptab'+(p.key===PART_STATE.period?' active':'')+'" data-pkey="'+p.key+'" onclick="partSetPeriod(\''+p.key+'\')">'+p.label+'</button>';
  }).join('');
}
function partSetPeriod(key){
  PART_STATE.period = key;
  document.querySelectorAll('#partPeriodTabs .part-ptab').forEach(function(b){ b.classList.toggle('active', b.dataset.pkey===key); });
  partRenderActivePane();
}
function partRenderActivePane(){
  if(PART_STATE.tab==='evol'){ partRenderEvolChart(); partRenderEvolPane(); partRenderMarketChart(); }
  else if(PART_STATE.tab==='refr'){ partRenderRefrPane(); }
  else if(PART_STATE.tab==='sector'){ partRenderSectorPane(); }
}
function partEvolSetMode(mode, btn){
  PART_STATE.evolMode = mode;
  PART_STATE.evolHighlight = null;
  document.querySelectorAll('#partEvolToggle .tm-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  partRenderEvolChart();
  partRenderEvolPane();
}

var _partInited = false;
window._initPartCharts = function(){
  if(_partInited) return;
  _partInited = true;
  partRenderPeriodTabs();
  document.querySelectorAll('#partEvolToggle .tm-btn').forEach(function(btn){
    btn.addEventListener('click', function(){ partEvolSetMode(btn.dataset.ev, btn); });
  });
  document.getElementById('partEvolLegend').addEventListener('click', function(e){
    var item = e.target.closest('.part-h-legend-item'); if(!item) return;
    var nm = item.dataset.name;
    PART_STATE.evolHighlight = (PART_STATE.evolHighlight===nm) ? null : nm;
    partRenderEvolChart();
  });
  document.getElementById('pmsRefrLegend').addEventListener('click', function(e){
    var item = e.target.closest('.pms-legend-item'); if(!item) return;
    PART_REFR_SEL.cat = item.dataset.cat;
    partRenderRefrPane();
  });
  document.getElementById('pmsSectorLegend').addEventListener('click', function(e){
    var item = e.target.closest('.pms-legend-item'); if(!item) return;
    PART_SECTOR_SEL.cat = item.dataset.cat;
    partRenderSectorPane();
  });
  partRenderActivePane();
};
if(document.getElementById('participacion')&&document.getElementById('participacion').classList.contains('active')){
  window._initPartCharts();
}
