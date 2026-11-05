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

/* ── TAB 1: Evolución competitiva — mercado al 100% + composición ──
   Todo se calcula del periodo seleccionado en el selector de periodos:
   · Barra única al 100%: Friopacking + 4 principales competidores + "Otros (n)".
   · Por refrigerante: tamaño de cada mercado y participación de Friopacking en él.
   · Por sector: composición del mercado (bloque consolidado del Excel).
   · Friopacking por periodo: histórico de participación; clic en una barra
     cambia el periodo de toda la vista.
   Las barras transicionan de un periodo a otro (no se re-crean de cero). */
var PEV_COLORS = ['#3EC6AC','#2F6FD6','#3A55A8','#7B8DB0','#A9B6CC'];
var PEV_OTHERS = '#D5DCE8';
var PEV_MONTHS = {enero:'Ene',febrero:'Feb',marzo:'Mar',abril:'Abr',mayo:'May',junio:'Jun',julio:'Jul',
                  agosto:'Ago',septiembre:'Set',setiembre:'Set',octubre:'Oct',noviembre:'Nov',diciembre:'Dic'};

function pevPct(v){ return (v*100).toFixed(1)+'%'; }
function pevShortPeriod(txt){
  return (txt||'').replace(/[A-Za-zÁÉÍÓÚáéíóú]+/g, function(w){ return PEV_MONTHS[w.toLowerCase()] || w; });
}
function pevSegments(period){
  var ranked = period.companies.filter(function(c){ return c.billing>0; })
    .slice().sort(function(a,b){ return b.share-a.share; });
  var fp = ranked.find(function(c){ return c.name==='Friopacking'; });
  var rest = ranked.filter(function(c){ return c.name!=='Friopacking'; });
  var top = rest.slice(0,4), others = rest.slice(4);
  var segs = [{name:'Friopacking', share:fp?fp.share:0, billing:fp?fp.billing:0, color:PEV_COLORS[0], fp:true}];
  top.forEach(function(c,i){ segs.push({name:c.name, share:c.share, billing:c.billing, color:PEV_COLORS[i+1]}); });
  if(others.length){
    segs.push({
      name:'Otros ('+others.length+')', share:others.reduce(function(s,c){ return s+c.share; },0),
      billing:others.reduce(function(s,c){ return s+c.billing; },0), color:PEV_OTHERS, others:true,
      list:others.map(function(c){ return c.name; })
    });
  }
  return segs;
}

function partRenderEvolPane(){
  var period = partPeriod(PART_STATE.period);
  var idx = partPeriodIdx(PART_STATE.period);
  var prev = idx>0 ? PART_DATA[idx-1] : null;
  var segs = pevSegments(period);
  var fpShare = period.meta.fpShare;

  /* Chip de periodo + cabecera */
  var chip = document.getElementById('partPeriodChip');
  if(chip) chip.textContent = pevShortPeriod(period.meta.importPeriodo);
  var total = document.getElementById('pevMkTotal');
  if(total) total.innerHTML = '$'+(period.meta.mercadoTotal/1e6).toFixed(2)+'<small>MM</small>';
  var sub = document.getElementById('pevMkSub');
  if(sub){
    var ranked = period.companies.filter(function(c){ return c.billing>0; }).sort(function(a,b){ return b.share-a.share; });
    var pos = ranked.findIndex(function(c){ return c.name==='Friopacking'; })+1;
    var txt = 'Friopacking <b>#'+pos+'</b> de '+ranked.length+' empresas';
    if(prev){
      var d = (fpShare - prev.meta.fpShare)*100;
      txt += ' <span class="pev-delta '+(d>=0?'up':'dn')+'">'+(d>=0?'&#8593; +':'&#8595; &minus;')+Math.abs(d).toFixed(1)+' pp vs '+prev.label+'</span>';
    }
    sub.innerHTML = txt;
  }

  /* Barra al 100% — se reutilizan los segmentos para que el ancho transicione */
  var bar = document.getElementById('pevBar');
  var legend = document.getElementById('pevLegend');
  if(bar){
    var nodes = bar.children;
    segs.forEach(function(s,i){
      var el = nodes[i];
      if(!el){
        el = document.createElement('div');
        el.className = 'pev-seg';
        el.style.flexGrow = '0';
        el.innerHTML = '<span></span>';
        el.addEventListener('mouseenter', function(){ pevHover(+el.dataset.i, true); });
        el.addEventListener('mouseleave', function(){ pevHover(+el.dataset.i, false); });
        bar.appendChild(el);
      }
      el.dataset.i = i;
      el.classList.toggle('is-fp', !!s.fp);
      el.classList.toggle('is-others', !!s.others);
      el.style.setProperty('--c', s.color);
      el.title = s.name+' · '+pevPct(s.share)+' · '+fmtEjecutivo(s.billing)+(s.list?'\n'+s.list.join(', '):'');
      var lbl = s.fp ? 'Friopacking '+pevPct(s.share) : pevPct(s.share);
      el.firstChild.textContent = s.share>=0.05 ? lbl : '';
    });
    while(bar.children.length>segs.length) bar.removeChild(bar.lastChild);
    /* doble rAF: el ancho anima desde el valor anterior (o desde 0 al entrar) */
    requestAnimationFrame(function(){ requestAnimationFrame(function(){
      segs.forEach(function(s,i){ if(bar.children[i]) bar.children[i].style.flexGrow = String(Math.max(s.share,0.004)); });
    }); });
  }
  if(legend){
    legend.innerHTML = segs.map(function(s,i){
      return '<div class="pev-lg'+(s.fp?' is-fp':'')+'" data-i="'+i+'" style="--c:'+s.color+';--d:'+(0.1+i*0.05).toFixed(2)+'s">'
        +'<div class="pev-lg-nm"><i></i>'+s.name+'</div>'
        +'<div class="pev-lg-v">'+pevPct(s.share)+'</div>'
        +'<div class="pev-lg-s">'+fmtEjecutivo(s.billing)+'</div></div>';
    }).join('');
    [].slice.call(legend.children).forEach(function(el){
      el.addEventListener('mouseenter', function(){ pevHover(+el.dataset.i, true); });
      el.addEventListener('mouseleave', function(){ pevHover(+el.dataset.i, false); });
    });
  }

  /* Por refrigerante */
  var refr = document.getElementById('pevRefr');
  if(refr){
    var fpCo = period.companies.find(function(c){ return c.name==='Friopacking'; }) || {};
    var mkt = (period.refrTotal.amoniaco||0)+(period.refrTotal.freon||0);
    refr.innerHTML = ['amoniaco','freon'].map(function(k){
      var t = period.refrTotal[k]||0;
      var fpv = k==='amoniaco' ? (fpCo.billAmon||0) : (fpCo.billFreon||0);
      var sh = t>0 ? fpv/t : 0;
      return '<div class="pev-rf">'
        +'<div class="pev-rf-top"><b>'+partRefrLabel(k)+'</b><span>'+fmtEjecutivo(t)+' &middot; '+pevPct(mkt?t/mkt:0)+'</span></div>'
        +'<div class="pev-track"><i style="--w:'+(sh*100).toFixed(1)+'%"></i></div>'
        +'<div class="pev-rf-fp">Friopacking <b>'+pevPct(sh)+'</b></div></div>';
    }).join('');
  }

  /* Por sector */
  var sec = document.getElementById('pevSector');
  if(sec){
    var SC = {multisector:'#3A55A8', agroexportacion:'#3EC6AC', pesca:'#7B8DB0', retail:'#EFA93B'};
    var rows = PART_SECTOR_KEYS.map(function(k){ return {k:k, v:period.sectorBlock[k]||0}; })
      .sort(function(a,b){ return b.v-a.v; });
    var max = rows[0].v || 1;
    sec.innerHTML = rows.map(function(r){
      return '<div class="pev-sc">'
        +'<span class="pev-sc-nm">'+partSectorLabel(r.k)+'</span>'
        +'<div class="pev-track sm"><i style="--w:'+(r.v/max*100).toFixed(1)+'%;--c:'+SC[r.k]+'"></i></div>'
        +'<b>'+pevPct(r.v)+'</b></div>';
    }).join('');
  }

  /* Friopacking por periodo */
  var hist = document.getElementById('pevHist');
  if(hist){
    var mx = Math.max.apply(null, PART_DATA.map(function(p){ return p.meta.fpShare; }));
    hist.innerHTML = PART_DATA.map(function(p,i){
      var on = p.key===PART_STATE.period;
      return '<button type="button" class="pev-hb'+(on?' is-on':'')+'" data-pkey="'+p.key+'" style="--d:'+(0.1+i*0.05).toFixed(2)+'s">'
        +'<b>'+(p.meta.fpShare*100).toFixed(1)+'</b>'
        +'<div class="pev-hb-col"><i style="--h:'+(p.meta.fpShare/mx*100).toFixed(1)+'%"></i></div>'
        +'<span>'+p.label.replace(/20(\d\d)/g,'$1')+'</span></button>';
    }).join('');
    [].slice.call(hist.querySelectorAll('.pev-hb')).forEach(function(b){
      b.addEventListener('click', function(){ partSetPeriod(b.dataset.pkey); });
    });
  }

  /* Reproduce el llenado de barras pequeñas (entrada / cambio de periodo) */
  var pane = document.getElementById('partPane-evol');
  if(pane){ pane.classList.remove('pev-in'); void pane.offsetWidth; pane.classList.add('pev-in'); }
}

function pevHover(i, on){
  var bar = document.getElementById('pevBar'), legend = document.getElementById('pevLegend');
  [bar, legend].forEach(function(box){
    if(!box) return;
    box.classList.toggle('has-hover', on);
    [].slice.call(box.children).forEach(function(el){ el.classList.toggle('is-hover', on && +el.dataset.i===i); });
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
  /* El hero y el selector de periodo dependen de la pestaña: Evolución usa
     su propia lectura (barra de mercado + chip de periodo), sin hero. */
  var sec = document.getElementById('participacion');
  if(sec) sec.classList.toggle('part-on-evol', tab==='evol');
  if(tab==='refr') partResetRefrSel();
  if(tab==='sector') partResetSectorSel();
  partRenderActivePane();
  setTimeout(function(){ window.dispatchEvent(new Event('resize')); },60);
}
function partRenderPeriodTabs(){
  var wrap = document.getElementById('partPeriodTabs');
  wrap.innerHTML = '<span class="part-ptabs-lbl">Periodo</span>' + PART_DATA.map(function(p){
    return '<button class="part-ptab'+(p.key===PART_STATE.period?' active':'')+'" data-pkey="'+p.key+'" onclick="partSetPeriod(\''+p.key+'\')">'+p.label+'</button>';
  }).join('');
}
function partSetPeriod(key){
  PART_STATE.period = key;
  document.querySelectorAll('#partPeriodTabs .part-ptab').forEach(function(b){ b.classList.toggle('active', b.dataset.pkey===key); });
  partRenderActivePane();
}
function partRenderActivePane(){
  if(PART_STATE.tab==='evol'){ partRenderEvolPane(); }
  else if(PART_STATE.tab==='refr'){ partRenderRefrPane(); }
  else if(PART_STATE.tab==='sector'){ partRenderSectorPane(); }
}

var _partInited = false;
window._initPartCharts = function(){
  if(_partInited) return;
  _partInited = true;
  partRenderPeriodTabs();
  partRenderHeroKpis();
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
