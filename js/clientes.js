/* ============================================================
   DATA CLIENTES — Fuente: DATA_PRODUC.xlsx (2014–jun 2026)
   Alcance clientes: histórico completo 2014–2026
   ============================================================ */

/* Treemap top 20 — histórico 2014-2026 */
const cliTmHist = [
  {n:'Corp. Agrolatina',   v:14074374, p:5.52, s:'retenido'},
  {n:'Agrovision Peru',    v:12027997, p:4.72, s:'retenido'},
  {n:'Danper Trujillo',    v:11318013, p:4.44, s:'retenido'},
  {n:'Viru S.A.',          v:10204953, p:4.01, s:'retenido'},
  {n:'Agroberries Peru',   v:10141560, p:3.98, s:'nuevo'},
  {n:'Soc. Agrícola Drokasa', v:10047517, p:3.94, s:'retenido'},
  {n:'TAL S.A.',           v:7592460,  p:2.98, s:'reactivado'},
  {n:'AQU ANQA S.A.C.',    v:7494666,  p:2.94, s:'retenido'},
  {n:'Los Olivos de Villacuri', v:6191501, p:2.43, s:'retenido'},
  {n:'Agrícola Alaya',     v:5993441,  p:2.35, s:'retenido'},
  {n:'Bomarea S.R.L.',     v:5621736,  p:2.21, s:'reactivado'},
  {n:'Agrocasagrande',     v:5187382,  p:2.04, s:'retenido'},
  {n:'Hortifrut-TAL',      v:5033323,  p:1.98, s:'sinactividad'},
  {n:'Agroindustrias AIB', v:4637686,  p:1.82, s:'retenido'},
  {n:'Medlog Piura SAC',   v:4364402,  p:1.71, s:'sinactividad'},
  {n:'El Pedregal S.A.',   v:4160487,  p:1.63, s:'retenido'},
  {n:'Agrícola Huarmey',   v:4147334,  p:1.63, s:'reactivado'},
  {n:'Camposol S.A.',      v:4010895,  p:1.57, s:'retenido'},
  {n:'Sun Fruits Exports', v:3930940,  p:1.54, s:'retenido'},
  {n:'Prosembra S.A.C.',   v:3632242,  p:1.43, s:'nuevo'}
];

/* Treemap top 20 — período 2025–2026 */
const cliTmCurr = [
  {n:'Agroberries Peru',   v:10141560, p:16.05, s:'nuevo'},
  {n:'Danper Trujillo',    v:4485901,  p:7.10,  s:'retenido'},
  {n:'Corp. Agrolatina',   v:4450000,  p:7.04,  s:'retenido'},
  {n:'Agrícola Huarmey',   v:4008997,  p:6.34,  s:'reactivado'},
  {n:'Prosembra S.A.C.',   v:3632242,  p:5.75,  s:'nuevo'},
  {n:'AQU ANQA S.A.C.',    v:3356001,  p:5.31,  s:'retenido'},
  {n:'Bomarea S.R.L.',     v:3162369,  p:5.00,  s:'reactivado'},
  {n:'Q Pack S.A.C.',      v:2949136,  p:4.67,  s:'nuevo'},
  {n:'TAL S.A.',           v:2072733,  p:3.28,  s:'reactivado'},
  {n:'Proc. Agroindustr.', v:2034101,  p:3.22,  s:'nuevo'},
  {n:'Soc. Drokasa',       v:1629602,  p:2.58,  s:'retenido'},
  {n:'Agrícola Alaya',     v:1490361,  p:2.36,  s:'retenido'},
  {n:'TA Export S.A.C.',   v:1460000,  p:2.31,  s:'nuevo'},
  {n:'Agrícola Pampa Baja',v:1224886,  p:1.94,  s:'reactivado'},
  {n:'Agroindustrias AIB', v:1088057,  p:1.72,  s:'retenido'},
  {n:'El Pedregal S.A.',   v:954731,   p:1.51,  s:'retenido'},
  {n:'Procesadora Larán',  v:910903,   p:1.44,  s:'retenido'},
  {n:'Ara Foods Industry', v:905597,   p:1.43,  s:'nuevo'},
  {n:'Imbarex S.A.',       v:853450,   p:1.35,  s:'nuevo'},
  {n:'Agrovision Peru',    v:817031,   p:1.29,  s:'retenido'}
];

/* Modal: activos top 20 — [nombre, val25-26, pct, segmento, primerAño, ultimoAño] */
const cliActTop20 = [
  ['Agroberries Peru S.A.C.',       10141560,16.05,'nuevo',     2026,2026],
  ['Danper Trujillo S.A.C.',         4485901, 7.10,'retenido',  2014,2026],
  ['Corp. Agrolatina S.A.C.',        4450000, 7.04,'retenido',  2014,2026],
  ['Agrícola Huarmey S.A.',          4008997, 6.34,'reactivado',2014,2026],
  ['Prosembra S.A.C.',               3632242, 5.75,'nuevo',     2025,2026],
  ['AQU ANQA S.A.C.',                3356001, 5.31,'retenido',  2022,2026],
  ['Bomarea S.R.L.',                 3162369, 5.00,'reactivado',2022,2026],
  ['Q Pack S.A.C.',                  2949136, 4.67,'nuevo',     2025,2026],
  ['TAL S.A.',                       2072733, 3.28,'reactivado',2014,2026],
  ['Proc. Agroindustriales S.A.',    2034101, 3.22,'nuevo',     2026,2026],
  ['Soc. Agrícola Drokasa S.A.',     1629602, 2.58,'retenido',  2014,2026],
  ['Agrícola Alaya S.A.C.',          1490361, 2.36,'retenido',  2022,2025],
  ['TA Export S.A.C.',               1460000, 2.31,'nuevo',     2026,2026],
  ['Agrícola Pampa Baja S.A.C.',     1224886, 1.94,'reactivado',2014,2026],
  ['Agroindustrias AIB S.A.',        1088057, 1.72,'retenido',  2014,2026],
  ['El Pedregal S.A.',                954731, 1.51,'retenido',  2020,2025],
  ['Procesadora Larán SAC',           910903, 1.44,'retenido',  2015,2026],
  ['Ara Foods Industry S.A.C.',       905597, 1.43,'nuevo',     2025,2026],
  ['Imbarex S.A.',                    853450, 1.35,'nuevo',     2025,2026],
  ['Agrovision Peru S.A.C.',          817031, 1.29,'retenido',  2017,2025]
];

/* Modal: nuevos top 20 — [nombre, val, pct, primerAño] */
const cliNewTop20 = [
  ['Agroberries Peru S.A.C.',    10141560,16.05,2026],
  ['Prosembra S.A.C.',            3632242, 5.75,2025],
  ['Q Pack S.A.C.',               2949136, 4.67,2025],
  ['Proc. Agroindustriales S.A.', 2034101, 3.22,2026],
  ['TA Export S.A.C.',            1460000, 2.31,2026],
  ['Ara Foods Industry S.A.C.',    905597, 1.43,2025],
  ['Imbarex S.A.',                 853450, 1.35,2025],
  ['Agroindustria Frutos de Oro',  508072, 0.80,2025],
  ['Estanterías Metálicas JRM',    455000, 0.72,2026],
  ['Delice S.A.C',                 427469, 0.68,2025],
  ['Berry Harvest S.A.',           402751, 0.64,2025],
  ['Diamond Bridge SAC',           321860, 0.51,2025],
  ['Limones Piuranos S.A.C.',      317797, 0.50,2025],
  ['Agríc. Ganadera Las Canelas',  256513, 0.41,2025],
  ['San Efisio S.A.C.',            226880, 0.36,2025],
  ['Cerv. Backus y Johnston SAC',  222254, 0.35,2025],
  ['Univ. Federico Henríquez',     206090, 0.33,2026],
  ['Arca Continental Lindley',     203678, 0.32,2026],
  ['Distrib. Exclusiva Calidad',   189852, 0.30,2025],
  ['Fusion Foods S.A.C.',          175588, 0.28,2025]
];

/* Categorías */
const cliCat = {
  hist:{
    classic:{n:89,val:236848227,pct:93.0,top:[
      ['Corp. Agrolatina S.A.C.',14074374,5.52],['Agrovision Peru S.A.C.',12027997,4.72],
      ['Danper Trujillo S.A.C.',11318013,4.44],['Viru S.A.',10204953,4.01],
      ['Agroberries Peru S.A.C.',10141560,3.98],['Soc. Agrícola Drokasa',10047517,3.94],
      ['TAL S.A.',7592460,2.98],['AQU ANQA S.A.C.',7494666,2.94],
      ['Los Olivos de Villacuri',6191501,2.43],['Agrícola Alaya',5993441,2.35],
      ['Bomarea S.R.L.',5621736,2.21],['Agrocasagrande S.A.C.',5187382,2.04],
      ['Hortifrut-TAL S.A.C.',5033323,1.98],['Agroindustrias AIB S.A.',4637686,1.82],
      ['Medlog Piura SAC',4364402,1.71],['El Pedregal S.A.',4160487,1.63],
      ['Agrícola Huarmey S.A.',4147334,1.63],['Camposol S.A.',4010895,1.57],
      ['Sun Fruits Exports',3930940,1.54],['Prosembra S.A.C.',3632242,1.43]
    ]},
    platinum:{n:64,val:15360621,pct:6.0,top:[
      ['HFE Berries Peru S.A.C.',484148,0.19],['Estanterías Metálicas JRM',455000,0.18],
      ['Trapani Cultivares Perú',444506,0.17],['Asoc. Productores Palta Hass',442274,0.17],
      ['T & T Fruits S.A.',441999,0.17],['Delice S.A.C',427469,0.17],
      ['Agro Santa Verónica',422186,0.17],['Berry Harvest S.A.',402751,0.16],
      ['Caynarachi S.A.',396723,0.16],['Delcor Fabricaciones SAC',392414,0.15],
      ['Asica Farms S.A.C.',380208,0.15],['Viveros El Tambo',363647,0.14],
      ["Exotic's Producers S.A.C.",355018,0.14],['Inka Crops S.A.',326511,0.13],
      ['Sobifruits S.A.C.',324818,0.13],['Diamond Bridge SAC',321860,0.13],
      ['Aliovo SAC',319060,0.13],['Limones Piuranos S.A.C.',317797,0.12],
      ['Fundo Los Paltos',313498,0.12],['Blueberries Peru S.A.C.',305255,0.12]
    ]},
    gold:{n:102,val:2593264,pct:1.0,top:[
      ['In Vitro Lab Perú S.A.C.',99000,3.8],
      ['Qberries SAC',96847,3.7],
      ['Negocios de Distrib. y Export. S.A.',92656,3.6],
      ['Corporación Apeisa SAC',91725,3.5],
      ['Agromar Industrial S.A.',89868,3.5],
      ['QS Refrigeración y Proyectos S.A.C.',89243,3.4],
      ['Ransa Comercial S.A.',85610,3.3],
      ['Frutos Ecológicos del Perú S.A.C.',84821,3.3],
      ['Larama Berries S.A.C.',84469,3.3],
      ['Ingeniería en Cartones y Papeles S.A.C.',80000,3.1],
      ['Agroinversiones Valle y Pampa Perú S.A.',73684,2.8],
      ['Andean Natural Products Export Import S.A.C.',70669,2.7],
      ['Eurofresh Perú S.A.C.',66111,2.5],
      ['Fresh Business Perú S.A.C.',64800,2.5],
      ['Pomica Perú S.A.C.',62684,2.4],
      ['Puquial S.A.',61856,2.4],
      ['Florisert S.A.C.',61715,2.4],
      ['Eco-Acuícola S.A.C.',58908,2.3],
      ['Arcentales Olave José Miguel',53983,2.1],
      ['Yura S.A.',46923,1.8]
    ]}
  },
  curr:{
    classic:{n:26,val:55333625,pct:87.6,top:[
      ['Agroberries Peru S.A.C.',10141560,16.05],['Danper Trujillo S.A.C.',4485901,7.10],
      ['Corp. Agrolatina S.A.C.',4450000,7.04],['Agrícola Huarmey S.A.',4008997,6.34],
      ['Prosembra S.A.C.',3632242,5.75],['AQU ANQA S.A.C.',3356001,5.31],
      ['Bomarea S.R.L.',3162369,5.00],['Q Pack S.A.C.',2949136,4.67],
      ['TAL S.A.',2072733,3.28],['Proc. Agroindustriales',2034101,3.22],
      ['Soc. Agrícola Drokasa',1629602,2.58],['Agrícola Alaya',1490361,2.36],
      ['TA Export S.A.C.',1460000,2.31],['Agrícola Pampa Baja',1224886,1.94],
      ['Agroindustrias AIB S.A.',1088057,1.72],['El Pedregal S.A.',954731,1.51],
      ['Procesadora Larán SAC',910903,1.44],['Ara Foods Industry',905597,1.43],
      ['Imbarex S.A.',853450,1.35],['Agrovision Peru S.A.C.',817031,1.29]
    ]},
    platinum:{n:26,val:7130627,pct:11.3,top:[
      ['Camposol S.A.',497385,0.79],['Sun Fruits Exports',460117,0.73],
      ['Estanterías Metálicas JRM',455000,0.72],['Delice S.A.C',427469,0.68],
      ['Viru S.A.',407040,0.64],['Berry Harvest S.A.',402751,0.64],
      ['Agrícola 2M S.A.C.',390951,0.62],['Qali Fruits S.A.C.',379902,0.60],
      ['Diamond Bridge SAC',321860,0.51],['Limones Piuranos S.A.C.',317797,0.50],
      ['Sociedad Agrícola 3P',282001,0.45],['Agríc. Ganadera Las Canelas',256513,0.41],
      ['Consorcio Agrícola Moquegua',232668,0.37],['T & T Fruits S.A.',227719,0.36],
      ['San Efisio S.A.C.',226880,0.36],['Cerv. Backus y Johnston SAC',222254,0.35],
      ['Viveros El Tambo S.A.C.',216755,0.34],['Univ. Federico Henríquez',206090,0.33],
      ['Arca Continental Lindley',203678,0.32],['Empresa Agrícola San Juan',194359,0.31]
    ]},
    gold:{n:21,val:727229,pct:1.2,top:[
      ['In Vitro Lab Perú S.A.C.',99000,13.6],
      ['Qberries SAC',96847,13.3],
      ['Smart Packing S.A.C.',77697,10.7],
      ['Florisert S.A.C.',61715,8.5],
      ['Los Olivos de Villacuri S.A.C.',50828,7.0],
      ['Family Farms Perú S.R.L.',48530,6.7],
      ['Alza Perú Packing S.A.C.',43600,6.0],
      ['Vitafoods Perú S.A.C.',43470,6.0],
      ['El Rocío S.A.',37571,5.2],
      ['Packing del Carmen S.A.C.',36348,5.0],
      ['Ara Export S.A.C.',34403,4.7],
      ['Uvica S.A.C.',33598,4.6],
      ['Quelen Fruit Perú S.A.C.',25500,3.5],
      ['TAL S.A. (pequeño)',17672,2.4],
      ['El Parque Alaya Packing S.A.C.',15941,2.2],
      ['Westfalia Fruit Perú S.A.C.',10000,1.4],
      ['Cía. de Exp. y Neg. Gnrles. S.A.',6841,0.9],
      ['Avocado Packing Company S.A.C.',4392,0.6],
      ['Agrícola Blue Gold S.A.C.',4265,0.6],
      ['Austral Group S.A.A.',2310,0.3],
      ['Steelser S.A.C.',2200,0.3]
    ]}
  }
};

/* Segmentos */
const cliSegs = [
  {id:'retenido',   lbl:'Retenidos',
   note:'Activos 25–26 · presentes en 2023 o 2024 · clientes leales',
   n:29, pc:11.4, vh:120392541, pvh:47.2, vc:24540104, pvc:38.8,
   det:[
    ['Danper Trujillo S.A.C.',4485901,11318013,2026,12],
    ['Corp. Agrolatina S.A.C.',4450000,14074374,2026,10],
    ['AQU ANQA S.A.C.',3356001,7494666,2026,5],
    ['Soc. Agrícola Drokasa',1629602,10047517,2026,12],
    ['Agrícola Alaya',1490361,5993441,2025,4],
    ['Agroindustrias AIB S.A.',1088057,4637686,2026,10],
    ['El Pedregal S.A.',954731,4160487,2025,6],
    ['Procesadora Larán SAC',910903,1766114,2026,7],
    ['Agrovision Peru S.A.C.',817031,12027997,2025,9],
    ['Agrocasagrande S.A.C.',785288,5187382,2025,6],
    ['Procesadora Torre Blanca',721157,1973732,2026,5],
    ['Agrobusiness Intl. Perú',602333,1719775,2025,3],
    ['Agro Floral Perú S.A.C.',538929,1826899,2026,9],
    ['Camposol S.A.',497385,4010895,2026,8],
    ['Sun Fruits Exports',460117,3930940,2026,10],
    ['Viru S.A.',407040,10204953,2025,10],
    ['Agrícola 2M S.A.C.',390951,1555566,2025,5],
    ['Qali Fruits S.A.C.',379902,2884828,2026,5],
    ['Sociedad Agrícola 3P',282001,1755524,2026,3],
    ['Smart Packing S.A.C.',77697,753930,2026,4]
   ]},
  {id:'reactivado', lbl:'Reactivados',
   note:'Regresaron en 2025–26 tras 2+ años de ausencia · cuentas recuperadas',
   n:10, pc:3.9, vh:26029683, pvh:10.2, vc:11925076, pvc:18.9,
   det:[
    ['Agrícola Huarmey S.A.',4008997,4147334,2026,8],
    ['Bomarea S.R.L.',3162369,5621736,2026,2],
    ['TAL S.A.',2072733,7592460,2026,10],
    ['Agrícola Pampa Baja',1224886,2741927,2026,9],
    ['Santa Sofía del Sur',550188,687965,2026,5],
    ['Consorcio Agrícola Moquegua',232668,922191,2026,4],
    ['T & T Fruits S.A.',227719,441999,2026,4],
    ['Viveros El Tambo S.A.C.',216755,363647,2026,3],
    ['Empresa Agrícola San Juan',194359,791662,2025,2],
    ['Ara Export S.A.C.',34403,2718761,2025,5]
   ]},
  {id:'nuevo',      lbl:'Nuevos',
   note:'Primera compra en 2025 o 2026 · captación reciente',
   n:34, pc:13.3, vh:26726301, pvh:10.5, vc:26726301, pvc:42.3,
   det:[
    ['Agroberries Peru S.A.C.',10141560,10141560,2026,1],
    ['Prosembra S.A.C.',3632242,3632242,2025,2],
    ['Q Pack S.A.C.',2949136,2949136,2025,2],
    ['Proc. Agroindustriales',2034101,2034101,2026,1],
    ['TA Export S.A.C.',1460000,1460000,2026,1],
    ['Ara Foods Industry',905597,905597,2025,2],
    ['Imbarex S.A.',853450,853450,2025,2],
    ['Agroindustria Frutos de Oro',508072,508072,2025,2],
    ['Estanterías Metálicas JRM',455000,455000,2026,1],
    ['Delice S.A.C',427469,427469,2025,2],
    ['Berry Harvest S.A.',402751,402751,2025,2],
    ['Diamond Bridge SAC',321860,321860,2025,2],
    ['Limones Piuranos S.A.C.',317797,317797,2025,2],
    ['Agríc. Ganadera Las Canelas',256513,256513,2025,2],
    ['San Efisio S.A.C.',226880,226880,2025,2],
    ['Cerv. Backus y Johnston SAC',222254,222254,2025,2],
    ['Univ. Federico Henríquez',206090,206090,2026,1],
    ['Arca Continental Lindley',203678,203678,2026,1],
    ['Distrib. Exclusiva Calidad',189852,189852,2025,2],
    ['Fusion Foods S.A.C.',175588,175588,2025,2]
   ]},
  {id:'sinactividad',lbl:'Sin actividad',
   note:'Última compra en 2023 o antes · riesgo comercial',
   n:182, pc:71.4, vh:81653588, pvh:32.0, vc:0, pvc:0,
   det:[
    ['Hortifrut-TAL S.A.C.',0,5033323,2021,7],
    ['Medlog Piura SAC',0,4364402,2024,4],
    ['Broom Frio Holding',0,2885382,2023,4],
    ['LT Multi Services S.A.C.',0,2873188,2022,4],
    ['Agrícola Andrea S.A.C.',0,2871270,2022,6],
    ['Agrícola Don Ricardo S.A.C.',0,2735881,2024,7],
    ['Compl. Agroindustrial Beta',0,2711345,2020,6],
    ['Ecosac Agrícola S.A.C.',0,2704088,2021,3],
    ['Ozblu Perú S.A.C.',0,2569817,2021,2],
    ['Sunshine Export S.A.C.',0,2301931,2024,2],
    ['Consorcio Carsol - JRM',0,2265510,2021,3],
    ['Gandules Inc SAC',0,2018003,2016,2],
    ['Proc. Agroindustriales SA',0,1993291,2023,8],
    ['Tropical Farm S.A.C.',0,1961355,2017,4],
    ['Agrícola San José S.A.',0,1678268,2018,3],
    ['RVR Agro E.I.R.L.',0,1592990,2020,5],
    ['Agrícola Chapi SA',0,1359656,2024,4],
    ['Agrofutura Company S.A.C.',0,1307823,2024,2],
    ['Hortifrut - Perú S.A.C.',0,1254976,2022,5],
    ['Manuelita FYH S.A.C.',0,1247702,2024,7]
   ]}
];


/* ============================================================
   TOP 20 CLIENTES 2026 — Calculado en tiempo real desde ventas2026
   (agregado por cliente: suma de importe, margen ponderado por
   importe — NO promedio simple — y zona principal por mayor importe).
   Si un cliente factura en más de una zona se marca "Mixta (zona
   principal)"; ningún cliente del Top 20 cae en ese caso hoy, pero
   la lógica queda lista para cuando ocurra.
   ============================================================ */
const top20_2026 = (function(){
  var map = {};
  ventas2026.forEach(function(r){
    if(!map[r.cli]) map[r.cli] = {nm:r.cli, v:0, mgNum:0, zonas:{}};
    var c = map[r.cli];
    c.v += r.imp;
    c.mgNum += r.imp * r.mg;
    c.zonas[r.zona] = (c.zonas[r.zona]||0) + r.imp;
  });
  var arr = Object.keys(map).map(function(k){
    var c = map[k];
    var zonaKeys = Object.keys(c.zonas).sort(function(a,b){return c.zonas[b]-c.zonas[a];});
    return {
      nm: c.nm,
      v: c.v,
      mg: c.mgNum / c.v,
      zona: zonaKeys.length>1 ? 'Mixta ('+zonaKeys[0]+')' : zonaKeys[0]
    };
  });
  arr.sort(function(a,b){return b.v-a.v;});
  return arr.slice(0,20);
})();


/* ============================================================
   DATA CLIENTES ACTIVOS VS NUEVOS por año 2021–2026
   Fuente: estimado desde segmentación histórica cliSegs y cliActTop20
   Nota: valores aproximados derivados de la base de clientes disponible
   ============================================================ */
const cliEvolData = {
  years: [2021, 2022, 2023, 2024, 2025, 2026],
  activos: [55, 51, 41, 46, 48, 46],
  nuevos:  [17,  13,  11,  10,  20, 13]
};

/* DATA PARETO — top 20 clientes 2025-2026 ordenados de mayor a menor */
const paretoData = (function(){
  const items = cliActTop20.map(r=>({nm:r[0],v:r[1]}));
  items.sort((a,b)=>b.v-a.v);
  const total = items.reduce((s,r)=>s+r.v,0);
  let acc=0;
  return items.map(r=>{acc+=r.v;return{nm:r.nm,v:r.v,pct:r.v/total*100,acum:acc/total*100};});
})();


/* ============================================================
   DATA TICKET PROMEDIO POR AÑO — Fuente: DATA_PRODUC_25.06.xlsx (hoja "Data Cruda")
   Fórmula: ventas del año / clientes únicos con facturación en ese año.
   2026 = YTD Ene–Jun (único dato disponible en el archivo fuente).
   ============================================================ */
const cliTicketEvol = {
  years:    [2021, 2022, 2023, 2024, 2025, 2026],
  ventas:   [20310541, 33199765, 15289375, 15451149, 34956324, 28260657],
  clientes: [55, 51, 41, 46, 49, 46],
  avgTicket:[369283, 650976, 372912, 335895, 713394, 614362]
};


/* ============================================================
   DATA AGRO / NO AGRO — Fuente: AGRO.NOAGRO.xlsx (hoja "Clientes Clasificados")
   cruzada con transacciones reales de DATA_PRODUC_25.06.xlsx (hoja "Data Cruda")
   por nombre de cliente (1,798/1,801 filas emparejadas · 99.8%).
   Conteos de clientes por año validados contra el resumen propio de AGRO.NOAGRO.xlsx.
   2026 = YTD Ene–Jun.
   ============================================================ */
const agroNoAgroYear = {
  years:  [2021, 2022, 2023, 2024, 2025, 2026],
  agroN:    [44, 43, 35, 35, 42, 39],
  agroV:    [19069613, 32200684, 14125312, 14055896, 33904143, 27248173],
  noagroN:  [11, 8, 6, 10, 7, 7],
  noagroV:  [1240928, 999081, 1164063, 1394813, 1052181, 1012484]
};

/* Detalle por cliente/año: [año, cliente, 'Agro'|'No agro', importe, descripción|null]
   Agregado por cliente dentro de cada año · ordenado por año asc, importe desc.
   Descripción tomada de "Data Cruda"; null → sin dato registrado (no se inventa contenido). */
const agroNoAgroDetail = [[2021,"Corporacion Agrolatina S.A.C.","Agro",2479279.67,null],[2021,"Ecosac Agricola S.A.C.","Agro",1594499.4,null],[2021,"Broom Frio Holding Morrope S.A.","Agro",1162751.06,null],[2021,"Consorcio Carsol - Jrm S.A.C.","Agro",984777.26,null],[2021,"Qali Fruits S.A.C.","Agro",957633.03,null],[2021,"Viru S.A.","Agro",937869.95,null],[2021,"Westfalia Fruit Peru S.A.C.","Agro",937357,null],[2021,"Zedina Alimentos S.A.C.","No agro",923017.35,null],[2021,"Los Olivos de Villacuri S.A.C.","Agro",862458.79,null],[2021,"Pachamama Farms S.A.C.","Agro",834146.96,"Venta e instalación de puerta y nivelador"],[2021,"Procesadora Torre Blanca S.A.C.","Agro",834032.28,null],[2021,"Procesos Agroindustriales S.A.","Agro",703433.5,null],[2021,"El Pedregal S.A.","Agro",682417.77,null],[2021,"Sociedad Agricola Drokasa S.A.","Agro",651393.74,null],[2021,"Green Peru S.A.","Agro",540000,null],[2021,"Lt Multi Services S.A.C.","Agro",452677.97,null],[2021,"Agrovision Peru S.A.C.","Agro",447601.8,null],[2021,"Danper Trujillo S.A.C.","Agro",417928.08,null],[2021,"Ara Export S.A.C.","Agro",399497.37,null],[2021,"Caynarachi S.A.","Agro",396722.58,null],[2021,"Agricola 2M S.A.C.","Agro",377617.74,null],[2021,"Smart Packing S.A.C.","Agro",333098.02,null],[2021,"Corporacion Agricola Viñasol S.A.C.","Agro",332173,null],[2021,"Corporacion Fruticola de Chincha S.A.C.","Agro",197982.79,null],[2021,"Agricola Cerro Prieto S.A.","Agro",189247.65,null],[2021,"Inka Crops S.A.","Agro",180575.62,null],[2021,"Tal S.A.","Agro",152639.95,null],[2021,"Ega Agroindustrial S.A.C.","Agro",144930.01,null],[2021,"Empresa Agro Export Ica S.A.C.","Agro",135861.38,"Hidrocooler de 40 HP (traslado e instalación)"],[2021,"Agro Ism S.A.C.","Agro",126851.08,null],[2021,"Cia.de Exp.y Negocios Gnrles.s.a.(coexa)","Agro",119057.01,null],[2021,"Qs Refrigeracion y Proyectos S.A.C.","No agro",87898.61,null],[2021,"Sc Packing S.A.C.","Agro",87585.08,null],[2021,"Larama Berries S.A.C.","Agro",84469.7,null],[2021,"Ingenieria en Cartones y Papeles S.A.C.","No agro",80000,null],[2021,"Agropiura S.A.C.","Agro",79278.64,null],[2021,"Puquial Sociedad Anonima","No agro",61856.91,null],[2021,"Hfe Berries Peru S.A.C.","Agro",50803.5,null],[2021,"Megabusiness Perú S.A.C.","No agro",38777.59,null],[2021,"Hortifrut - Perú S.A.C.","Agro",38444.32,null],[2021,"Agricola Andrea S.A.C.","Agro",31333.83,null],[2021,"Camposol S.A.","Agro",28720,null],[2021,"Hortifrut-tal S.A.C.","Agro",26970,null],[2021,"Procesadora Laran S.A.C.","Agro",25981.5,null],[2021,"Medlog Piura S.A.C.","No agro",23404.58,null],[2021,"Inka Gold Farms S.A.C.","Agro",17000,null],[2021,"Blueberries Peru S.A.C.","Agro",15913.14,null],[2021,"Apm Terminals Inland Services S.A.","No agro",15000,null],[2021,"Agricola Pampa Baja S.A.C.","Agro",7900,null],[2021,"Varayoc Inversiones S.A.C.","No agro",5593.42,null],[2021,"Agro Aei S.A.C.","Agro",4777.66,null],[2021,"Ozblu Peru S.A.C.","Agro",3923.4,null],[2021,"Oregon Foods S.A.C.","No agro",2640.5,null],[2021,"Innovar 3A S.A.C.","No agro",2439.02,null],[2021,"Eco - Acuicola Sociedad Anonima Cerrada","No agro",300,null],[2022,"Sociedad Agricola Drokasa S.A.","Agro",6063019.22,null],[2022,"Agricola Alaya Sociedad Anonima Cerrada","Agro",4202839.57,null],[2022,"Corporacion Agrolatina S.A.C.","Agro",3182861.8,null],[2022,"Bomarea S.R.L.","Agro",2459367.64,null],[2022,"Viru S.A.","Agro",1857452.58,null],[2022,"Ara Export S.A.C.","Agro",1636826.66,null],[2022,"Aqu Anqa S.A.C.","Agro",1346642.42,null],[2022,"Agrocasagrande S.A.C.","Agro",1234956.99,null],[2022,"Broom Frio Holding Morrope S.A.","Agro",1123854.28,null],[2022,"El Pedregal S.A.","Agro",1081789.32,null],[2022,"Qali Fruits S.A.C.","Agro",1019504.26,null],[2022,"Agricola Cerro Prieto S.A.","Agro",946953.05,null],[2022,"Lt Multi Services S.A.C.","Agro",889830.86,null],[2022,"Agricola Chapi S.A.","Agro",820017.71,null],[2022,"Sun Fruits Exports S.A.","Agro",530086.22,null],[2022,"Sunshine Export S.A.C.","Agro",515927.26,null],[2022,"Medlog Piura S.A.C.","No agro",446482.58,null],[2022,"Trapani Cultivares Peru S.A.C.","Agro",444506.02,null],[2022,"Agrovision Peru S.A.C.","Agro",420199.99,null],[2022,"Consorcio Agricola Moquegua S.A.C.","Agro",324989,null],[2022,"Agro Floral Peru S.A.C.","Agro",292200,null],[2022,"Family Farms Perú S.R.L.","Agro",280493.85,null],[2022,"Panificadora Bimbo del Peru S.A.","No agro",270069.9,null],[2022,"Procesadora Torre Blanca S.A.C.","Agro",235342.88,null],[2022,"Agropiura S.A.C.","Agro",189793.09,null],[2022,"Medifarma S.A.","No agro",183306.42,null],[2022,"Agricola Santa Azul S.A.C.","Agro",174294.91,null],[2022,"Procesos Agroindustriales S.A.","Agro",155429.87,null],[2022,"Desarrollo Agricola S.A.C.","Agro",100668,null],[2022,"Cia.de Exp.y Negocios Gnrles.s.a.(coexa)","Agro",97960.41,null],[2022,"Hortifrut - Perú S.A.C.","Agro",83832.34,null],[2022,"Ega Agroindustrial S.A.C.","Agro",79990.98,null],[2022,"Agro Paracas S.A.","Agro",74323,null],[2022,"Andean Natural Products Export Import S.A.C.","Agro",70669.58,null],[2022,"Agro-empaques Safco S.A.C.","Agro",67205.13,null],[2022,"Inka Crops S.A.","Agro",57293.57,null],[2022,"Delcor Fabricaciones S.A.C.","No agro",43555.1,null],[2022,"R Coorp E.I.R.L.","No agro",35313.87,null],[2022,"Danper Trujillo S.A.C.","Agro",33909.01,null],[2022,"Agricola Huarmey S.A.","Agro",26969,null],[2022,"Procesadora Laran S.A.C.","Agro",23777.3,null],[2022,"Agricola los Buenos Muchachos de Pisco S.A.C.","Agro",19140,null],[2022,"Los Olivos de Villacuri S.A.C.","Agro",17464.03,null],[2022,"Zedina Alimentos S.A.C.","No agro",17249.59,null],[2022,"Agricola Andrea S.A.C.","Agro",14000,null],[2022,"Oregon Foods S.A.C.","No agro",1712.75,null],[2022,"Pachamama Farms S.A.C.","Agro",1616,null],[2022,"Smartcold S.A.C.","No agro",1390.89,null],[2022,"Tal S.A.","Agro",1150,null],[2022,"Westfalia Fruit Peru S.A.C.","Agro",1137.1,null],[2022,"Compañía Agricola Pisco S.A.C.","Agro",398.6,null],[2023,"Aqu Anqa S.A.C.","Agro",2114972.6,"Memoria descriptiva"],[2023,"Sun Fruits Exports S.A.","Agro",1951327.48,"Ampliacion planta de procesos"],[2023,"El Pedregal S.A.","Agro",1410017.35,"Ampliacion planta"],[2023,"Agrofutura Company S.A.C.","Agro",1306880.1,"Acopio arandano 01 y 02"],[2023,"Agricola Don Ricardo S.A.C.","Agro",1277343.53,"Ampliacion centro planta arandanos"],[2023,"Agrobusiness International Peru S.A.C.","Agro",788484.02,"Planta de proceso de arandano"],[2023,"Agroindustrial Estanislao del Chimu S.A.C.","Agro",770978.42,"Construccion planta para paltas freon"],[2023,"Los Olivos de Villacuri S.A.C.","Agro",631780.93,"Desarrollo sistema termometria"],[2023,"Avocado Packing Company S.A.C.","Agro",616341.69,"Implementacion de acopio - freon"],[2023,"Megacentro Lurin S.A.C.","No agro",571698.25,"Suministro e instalaciones paneles antecamara y camara de frio"],[2023,"Axionlog Peru S.A.C.","No agro",517370,"Almacen de congelado"],[2023,"Family Farms Perú S.R.L.","Agro",478498.76,"Ampliacion packing arandano"],[2023,"Agricola Chapi S.A.","Agro",451574.47,"Ampliacion de packing 2023"],[2023,"Viru S.A.","Agro",443441.54,"Suministro e instalacion condensadores Gunter"],[2023,"Agrocasagrande S.A.C.","Agro",406673.85,"Ampliacion de planta de proceso arandano"],[2023,"Sociedad Agricola Drokasa S.A.","Agro",291680.79,"Sala procesos palta"],[2023,"Agricola Alaya Sociedad Anonima Cerrada","Agro",281760.57,"Planta de procesos arandano 1era etapa fase 1 - f.s 100%"],[2023,"Smart Packing S.A.C.","Agro",227316.1,"Ampliacion packing"],[2023,"Procesadora Torre Blanca S.A.C.","Agro",175230.29,"Reemplazo racks acumulativos camara 5"],[2023,"Agrovision Peru S.A.C.","Agro",150415.1,"Amoniaco sala de proceso para uva glicol"],[2023,"Cia.de Exp.y Negocios Gnrles.s.a.(coexa)","Agro",87331.49,"Ampliacion de camaras"],[2023,"Danper Trujillo S.A.C.","Agro",86675.43,"Reemplazo parte superior condensador"],[2023,"Agro Floral Peru S.A.C.","Agro",66913.27,"Climatizacion CPT"],[2023,"Novagri S.A.C.","No agro",40120.24,"Laboratorio-salas de inspeccion"],[2023,"Panificadora Bimbo del Peru S.A.","No agro",27776.82,"Sistema chiller CO2"],[2023,"Pachamama Farms S.A.C.","Agro",25117.56,"Ampliacion sistema de refrigeracion despacho"],[2023,"Qali Fruits S.A.C.","Agro",22000,"Reparacion 2 variadores"],[2023,"Agricola Cerro Prieto S.A.","Agro",17534.3,"Suministro e instalacion paneles"],[2023,"Agricola Miranda S.A.C.","Agro",17106.07,"Oficinas"],[2023,"Broom Frio Holding Morrope S.A.","Agro",10750,"Packing BFHM"],[2023,"Alicorp S.A.A.","No agro",6782.81,"Suministro e instalacion nivelador"],[2023,"Corporacion Agrolatina S.A.C.","Agro",5748,"Termometria"],[2023,"Packing del Carmen S.A.C.","Agro",2374.76,"Suministro de paneles"],[2023,"Agricola los Buenos Muchachos de Pisco S.A.C.","Agro",2170,"Suministro e instalacion enfriadores"],[2023,"Agricola 2M S.A.C.","Agro",1728.25,"Suministro e instalacion paneles"],[2023,"Agroindustrias Aib S.A.","Agro",1485,"Reparacion de fuga"],[2023,"Agricola la Guerrero S.A.C.","Agro",1250,"Estudio de suelo"],[2023,"Agro-empaques Safco S.A.C.","Agro",970,"Integracion termometria ERP"],[2023,"Exotic's Producers & Packers S.A.C.","Agro",900,"Reinstalacion sistema termometria"],[2023,"Procesos Agroindustriales S.A.","Agro",540,"Suministro e instalacion puerta"],[2023,"Proyectos y Soluciones Electricas E.I.R.L.","No agro",315,"Reinstalacion termometria"],[2024,"Sunshine Export S.A.C.","Agro",1786003.51,"Sistema de frio packing de frescos"],[2024,"Corporacion Agrolatina S.A.C.","Agro",1782686.53,"Actualizacion sistema termometria"],[2024,"Sociedad Agricola 3P S.A.C.","Agro",1473522.8,"Packing de uva"],[2024,"Family Farms Perú S.R.L.","Agro",1185464.34,"Suministro e instalacion de sistema de frio con chiller"],[2024,"El Rocio S.A.","No agro",1164769.68,"Ingenieria de frio packing aves"],[2024,"Los Olivos de Villacuri S.A.C.","Agro",985084.35,"Instalacion termometria"],[2024,"Procesadora Laran S.A.C.","Agro",783475.6,"Planta arandano 1era etapa"],[2024,"Agricola Don Ricardo S.A.C.","Agro",741510.62,"Suministro e instalacion niveladores"],[2024,"Aqu Anqa S.A.C.","Agro",677049.99,"Ampliacion de planta procesarora de arandano / CPT-SP / modulos de enfriamiento."],[2024,"Agrocasagrande S.A.C.","Agro",669107.15,"Ampliacion planta procesos arandano"],[2024,"Agrovision Peru S.A.C.","Agro",658743.34,"Suministro instalacion enfriadores"],[2024,"Qali Fruits S.A.C.","Agro",505788.57,"Ampliacion planta arandanos"],[2024,"Agroindustrias Huaral Sociedad Anonima Cerrada","Agro",399766.95,"Tuneles"],[2024,"Agroindustrial Estanislao del Chimu S.A.C.","Agro",365844.3,"Construccion planta para paltas freon"],[2024,"Agrobusiness International Peru S.A.C.","Agro",328957.92,"Planta de proceso de arandano"],[2024,"Pacific Ocean Berries S.A.C.","Agro",294669.9,"Acopio para arandanos"],[2024,"Manuelita Fyh S.A.C.","Agro",219792,"Suministro e instalacion luminaria"],[2024,"Sociedad Agricola Drokasa S.A.","Agro",215829.34,"Termometria"],[2024,"Medlog Piura S.A.C.","No agro",209899.57,"Reubicacion tuneles PT"],[2024,"Seed Food Sociedad Anonima Cerrada","Agro",205000,"Camara conservacion papas"],[2024,"Agricola Blue Gold S.A.C.","Agro",153090.84,"Acopio arandano"],[2024,"Branchout Food - Sucursal Peru","Agro",141328.98,"Sistema chiller"],[2024,"Smart Packing S.A.C.","Agro",115818.75,"Ampliacion packing 2024"],[2024,"Agricola Chapi S.A.","Agro",86789.14,"Ampliacion de packing 2023"],[2024,"Camposol S.A.","Agro",79248.74,"Suministro e instalacion condensador"],[2024,"Cia.de Exp.y Negocios Gnrles.s.a.(coexa)","Agro",52591.76,"Camara de conservacion"],[2024,"Passion Fresh S.A.C.","Agro",49535.28,"Cámara de conservación"],[2024,"El Pedregal S.A.","Agro",29091,"Termometria tuneles materia prima"],[2024,"Agricola Alaya Sociedad Anonima Cerrada","Agro",18480,"Planta de procesos arandano 1era etapa fase 1 - f.s 100%"],[2024,"El Parque Alaya Packing S.A.C.","Agro",13482.5,"Suministro e instalacion equipos"],[2024,"Agro Floral Peru S.A.C.","Agro",8369.6,"Climatizacion CPT"],[2024,"Procesadora Torre Blanca S.A.C.","Agro",7970,"Migracion termometria para uso Gateway"],[2024,"Viru S.A.","Agro",7638,"Revision calibracion sensores"],[2024,"Packing del Carmen S.A.C.","Agro",5457.13,"Suministro e instalacion detectores"],[2024,"Megacentro Lurin S.A.C.","No agro",5052,"Instalacion suples PIR"],[2024,"Avocado Packing Company S.A.C.","Agro",4717,"Implementacion de acopio - freon"],[2024,"Gate Catering And Retail Solutions S.R.L.","No agro",4163,"Termometria 3 camaras"],[2024,"Compañia Minera Antapaccay S.A.","No agro",3101,"Evaluacion diagnostico camaras refrig"],[2024,"Westfalia Fruit Peru S.A.C.","Agro",3046.68,"Repracion compresor Dorin 50hp"],[2024,"Zedina Alimentos S.A.C.","No agro",2513.81,"Termometria"],[2024,"Apoyo Consultoria S.A.C.","No agro",2500,"Inspeccion planta"],[2024,"Panificadora Bimbo del Peru S.A.","No agro",1276.84,"CO2 inspeccion rack"],[2024,"Smartcold S.A.C.","No agro",1200,"Configuracion compresores"],[2024,"Agrofutura Company S.A.C.","Agro",943.33,"Topes de gome y reparacion paneles"],[2024,"Proyectos y Soluciones Electricas E.I.R.L.","No agro",337.5,"Reinstalacion termometria"],[2025,"Danper Trujillo S.A.C.","Agro",4480901.01,"Incremento de capacidad nave 12 - arándanos"],[2025,"Agricola Huarmey S.A.","Agro",3839343.44,"1° etapa planta proceso arandano"],[2025,"Prosembra Sociedad Anonima Cerrada","Agro",3374482.49,"Packing de arandanos"],[2025,"Aqu Anqa S.A.C.","Agro",3325088.73,"Camara PT OOCC EEMM"],[2025,"Q Pack S.A.C.","Agro",2825478.47,"Ingenieria planta empacadora arandano"],[2025,"Corporacion Agrolatina S.A.C.","Agro",2130000,"Servicio ampliacion SP3 TF 17 y 18 y sala de embarque (10 rampas) y conversion a 2 niveles en 3 TF"],[2025,"Agricola Alaya Sociedad Anonima Cerrada","Agro",1490360.72,"Ampliación de planta de proceso"],[2025,"Sociedad Agricola Drokasa S.A.","Agro",1421017.12,"Packing uva"],[2025,"El Pedregal S.A.","Agro",954731.07,"Proyecto de frio packing 3"],[2025,"Agrovision Peru S.A.C.","Agro",817031.34,"Ampliacion acopio arandanos"],[2025,"Ara Foods Industry S.A.C.","Agro",805597.47,"Ampliación de planta de congelado"],[2025,"Agrocasagrande S.A.C.","Agro",785287.51,"Modif camara e inst valvulas equipos"],[2025,"Agroindustrias Aib S.A.","Agro",693362.39,"Ampliacion packing mango-palta"],[2025,"Agrobusiness International Peru S.A.C.","Agro",602333.49,"Ampliacion packing"],[2025,"Agricola Pampa Baja S.A.C.","Agro",596173.6,"Ampliacion de planta de procesos - 03 túneles californianos"],[2025,"Imbarex S.A.","Agro",584350,"Planta procesos citricos y arandanos"],[2025,"Santa Sofia del Sur S.A.C.","Agro",545000,"Camara refrigeracion citricos y palta"],[2025,"Agroindustria Frutos de Oro S.A.C.","Agro",507312.36,"Camara de congelados"],[2025,"Agro Floral Peru S.A.C.","Agro",506966.62,"Suministro e inst rack para almacen"],[2025,"Viru S.A.","Agro",407039.67,"Ampliacion packing"],[2025,"Agricola 2M S.A.C.","Agro",390950.55,"Ampliacion y repotenciacion packing"],[2025,"Delice S.A.C.","No agro",384886.11,"Ingenieria detalle planta nueva y nuevos almacenes de delice"],[2025,"Diamond Bridge S.A.C.","Agro",321860.28,"Servicio de construccion de almacen de frio"],[2025,"Limones Piuranos Sociedad Anonima Cerrada","Agro",317796.61,"Camara de congelado"],[2025,"Sociedad Agricola 3P S.A.C.","Agro",281500.85,"Kit de embarque #3"],[2025,"Agricola Ganadera las Canelas S.A.C.","Agro",256513.28,"Venta paneles y puertas"],[2025,"Berry Harvest S.A.","Agro",256080.11,"Construccion campamento operarios"],[2025,"San Efisio S.A.C.","Agro",226880.03,"Acopio etapa i"],[2025,"Consorcio Agricola Moquegua S.A.C.","Agro",224427.9,"Ampliacion de packing de arandanos"],[2025,"Unión de Cervecerías Peruanas Backus y Johnston S.A.C.","No agro",222254,"Venta compresor Frick"],[2025,"Procesadora Laran S.A.C.","Agro",195018.42,"Ampliacion sistema de frio - tunel y camaras"],[2025,"Empresa Agricola San Juan S.A.","Agro",194358.88,"Ampliacion sala procesos palta"],[2025,"Distribuidora Exclusiva de Productos de Calidad S.A.C.","No agro",189851.72,"Ser. construcción. almacen refri-piura yogurt"],[2025,"Fusion Foods S.A.C.","Agro",175587.99,"Mejoras tunel congelado"],[2025,"Austral Group S.A.A.","No agro",117308,"Compresor de amoniaco, tipo:tornillo, marca: Frick, modelo:rxf-85h"],[2025,"In Vitro Lab Peru S.A.C.","No agro",99000,"Elaboracion expediente tecnico"],[2025,"Qberries S.A.C.","Agro",96847.02,"Expediente tecnico proyecto quelen"],[2025,"Los Olivos de Villacuri S.A.C.","Agro",50827.6,"Elaboracion expediente frio"],[2025,"Family Farms Perú S.R.L.","Agro",48530.23,"Camara conservacion y congelados"],[2025,"Alza Peru Packing S.A.C.","Agro",43600.44,"Ampliacion packing"],[2025,"El Rocio S.A.","No agro",36681.15,"Suministro e instalacion sist frio"],[2025,"Ara Export S.A.C.","Agro",34403.05,"Cerramiento con panel en recepcion"],[2025,"Uvica S.A.C.","Agro",32800.01,"Oficinas uvica"],[2025,"Quelen Fruit Peru S.A.C.","Agro",25500,"Anteproyecto planta empac arandanos"],[2025,"Tal S.A.","Agro",20145,"Ingenieria de refrigeracion"],[2025,"Westfalia Fruit Peru S.A.C.","Agro",10000,"Anteproyecto arquitectura"],[2025,"Avocado Packing Company S.A.C.","Agro",4392.39,"Suministro e instalacion drenajes"],[2025,"Agricola Blue Gold S.A.C.","Agro",4265.26,"Cambio puerta"],[2025,"Steelser S.A.C.","No agro",2200,"Desmontaje y montaje equipos"],[2026,"Agroberries Peru S.A.C.","Agro",10141560.13,"Planta arandano"],[2026,"Bomarea S.R.L.","Agro",3162368.75,"Planta arandano - 2 etapa amoniaco"],[2026,"Corporacion Agrolatina S.A.C.","Agro",2320000,"Planta uva"],[2026,"Tal S.A.","Agro",2052587.8,"Planta de procesos palta"],[2026,"Procesos Agroindustriales Sociedad Anonima","Agro",2034100.57,"Planta de proceso de uva"],[2026,"Ta Export S.A.C.","Agro",1460000,"Packing para arandanos"],[2026,"Procesadora Torre Blanca S.A.C.","Agro",721156.89,"Ampliacion de planta"],[2026,"Procesadora Laran S.A.C.","Agro",715885.05,"Ampliación de túneles, cámara y"],[2026,"Agricola Pampa Baja S.A.C.","Agro",628712.2,"Ampliación packing de uva"],[2026,"Camposol S.A.","Agro",497385.27,"Nave producto terminado"],[2026,"Sun Fruits Exports S.A.","Agro",460117.04,"Repotenciacion compresor"],[2026,"Estanterias Metalicas J.r.m. S.A.C.","No agro",455000,"Cámara de congelado y ambientes"],[2026,"Agroindustrias Aib S.A.","Agro",394694.81,"Cámara de congelados"],[2026,"Qali Fruits S.A.C.","Agro",379901.83,"Ampliacion CPT"],[2026,"Imbarex S.A.","Agro",269100,"Planta procesos citricos y arandanos"],[2026,"Prosembra Sociedad Anonima Cerrada","Agro",257759.74,"Oficinas termoacústicas packing"],[2026,"T & T Fruits S.A.","Agro",227719.49,"Suministro e instalacion de servicio de sistema de enfriamiento para camara de frio"],[2026,"Viveros El Tambo S.A.C.","Agro",216754.9,"Proyecto viveros tambo"],[2026,"Sociedad Agricola Drokasa S.A.","Agro",208585.21,"Repotenciación de túneles de PT"],[2026,"Universidad Federico Henriquez y Carvajal","No agro",206089.67,"Packing de uva"],[2026,"Arca Continental Lindley S.A.","No agro",203678.39,"Suministro e instalación de serpentin"],[2026,"Agricola Huarmey S.A.","Agro",169653.6,"1° etapa planta proceso arandano - adicional"],[2026,"Berry Harvest S.A.","Agro",146670.61,"Reforzamiento estructural soldadura y ensamble puertas"],[2026,"Q Pack S.A.C.","Agro",123657.16,"Ampliación sala de procesos"],[2026,"Reiter Peruvian Berry S.A.","Agro",110710,"Ampliacion planta"],[2026,"Agricola Huarmey S.A.C.","Agro",106047.18,"1° etapa planta proceso arandano - adicional"],[2026,"Ingenieria en Cartones y Papeles S.A.C.","No agro",101933.16,"ICYP - suministro e instalación"],[2026,"Ara Foods Industry S.A.C.","Agro",100000,"Túnel congelado"],[2026,"Smart Packing S.A.C.","Agro",77696.99,"Climatización pre-túneles"],[2026,"Florisert S.A.C.","Agro",61715.57,"Ampliacion procesadora flores"],[2026,"Vitafoods Peru S.A.C.","Agro",43470,"Servicio arquitectura"],[2026,"Delice S.A.C.","No agro",42583.21,"Suministro e instalacion racks"],[2026,"Packing del Carmen S.A.C.","Agro",36347.87,"Suministro de materiales para túnele"],[2026,"Agro Floral Peru S.A.C.","Agro",31962.8,"Suministro e instalacion de cortinas de aire"],[2026,"Aqu Anqa S.A.C.","Agro",30911.99,"Mantenimiento paneles packing AQU ANQ"],[2026,"Tal S A","Agro",17671.66,"Adicional tuberias y asilamiento conexion evaporadores"],[2026,"El Parque Alaya Packing S.A.C.","Agro",15941.32,"Ampliación de planta de proceso - escenario 2"],[2026,"Consorcio Agricola Moquegua S.A.C.","Agro",8240,"Baterias repontenciacion tuneles"],[2026,"Cia.de Exp.y Negocios Gnrles.s.a.(coexa)","Agro",6840.69,"Implementacion de packing"],[2026,"Santa Sofia del Sur S.A.C.","Agro",5187.52,"Nivelador hidraulico"],[2026,"Danper Trujillo S.A.C.","Agro",5000,"Anteproyecto planta congelado mango"],[2026,"Austral Group S.A.A.","No agro",2310,"Puesta en marcha de compresor Frick r"],[2026,"El Rocio S.A.","No agro",890,"Desmontaje y montaje paneles"],[2026,"Uvica S.A.C.","Agro",798,"Oficinas uvica"],[2026,"Agroindustria Frutos de Oro S.A.C.","Agro",760,"Instalación de motores y modificacion p.corredera"],[2026,"Sociedad Agricola 3P S.A.C.","Agro",500,"Mantenimiento de compresor packing"]];


/* ============================================================
   INTELIGENCIA DE CLIENTES — módulo completo
   ============================================================ */

/* ── Helpers ─────────────────────────────────────────────── */
function fmtV(v){
  var neg = v<0, a = Math.abs(v), s;
  if(a>=1000000) s='$'+(a/1000000).toFixed(2)+'MM';
  else if(a>=1000) s='$'+Math.round(a/1000)+'K';
  else s='$'+Math.round(a);
  return neg?('-'+s):s;
}
const SEG_COL  = {retenido:'#0a0a1e',reactivado:'#3aabef',nuevo:'#16a34a',sinactividad:'#94a3b8'};
const SEG_COL2 = {retenido:'#1a2a5e',reactivado:'#1a8fd1',nuevo:'#15803d',sinactividad:'#64748b'};
const SEG_CSS  = {retenido:'sb-ret',reactivado:'sb-rea',nuevo:'sb-new',sinactividad:'sb-off'};
const SEG_LBL  = {retenido:'Retenido',reactivado:'Reactivado',nuevo:'Nuevo',sinactividad:'Sin actividad'};

/* ── Treemap ─────────────────────────────────────────────── */
(function(){
  let currentData = cliTmHist;

  function squarify(items, W, H){
    const sorted=[...items].sort((a,b)=>b.v-a.v);
    const total=sorted.reduce((s,i)=>s+i.v,0);
    const rects=[];
    function layout(items,x,y,w,h,sub){
      if(!items.length)return;
      if(items.length===1){rects.push({...items[0],x,y,w,h});return;}
      const isW=w>=h, sh=isW?h:w;
      function worst(row,rs){
        if(!row.length)return Infinity;
        const ra=rs/sub*w*h, rl=ra/sh;
        if(rl<=0)return Infinity;
        let mx=0;
        for(const it of row){
          const is=sh*it.v/rs;
          if(is<=0)continue;
          const a=Math.max(rl/is,is/rl);
          if(a>mx)mx=a;
        }
        return mx;
      }
      let row=[],rs=0,idx=0;
      while(idx<items.length){
        const nr=[...row,items[idx]],ns=rs+items[idx].v;
        if(!row.length||worst(nr,ns)<=worst(row,rs)){row=nr;rs=ns;idx++;}
        else break;
      }
      const frac=rs/sub,rl=(isW?w:h)*frac;
      let pos=isW?y:x;
      for(const it of row){
        const is=sh*it.v/rs;
        if(isW)rects.push({...it,x,y:pos,w:rl,h:is});
        else rects.push({...it,x:pos,y,w:is,h:rl});
        pos+=is;
      }
      const rem=items.slice(idx);
      if(rem.length){
        const ns2=sub-rs;
        if(isW)layout(rem,x+rl,y,w-rl,h,ns2);
        else layout(rem,x,y+rl,w,h-rl,ns2);
      }
    }
    layout(sorted,0,0,W,H,total);
    return rects;
  }

  function render(data){
    const wrap=document.getElementById('treemapWrap');
    if(!wrap)return;
    const W=wrap.clientWidth;
    if(W<20)return;
    const H=360, G=2;
    const rects=squarify(data,W,H);
    wrap.innerHTML=rects.map(r=>{
      const area=r.w*r.h;
      const big=area>18000,med=area>7000;
      const c1=SEG_COL[r.s]||'#0a0a1e',c2=SEG_COL2[r.s]||'#1a2a5e';
      const cls=big?'tm-big':med?'tm-med':'';
      const nm=med?r.n:(r.n.split(' ')[0]+'…');
      const vl=med?(fmtV(r.v)+' · '+r.p+'%'):'';
      return `<div class="tm-cell ${cls}" style="left:${r.x+G}px;top:${r.y+G}px;width:${r.w-G*2}px;height:${r.h-G*2}px;background:linear-gradient(135deg,${c1},${c2})" title="${r.n} — ${fmtV(r.v)} (${r.p}%)"><div><div class="tm-nm">${nm}</div>${vl?`<div class="tm-vl">${vl}</div>`:''}</div></div>`;
    }).join('');
  }

  document.querySelectorAll('#tmToggle .tm-btn').forEach(btn=>{
    btn.onclick=()=>{
      document.querySelectorAll('#tmToggle .tm-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentData=btn.dataset.tm==='hist'?cliTmHist:cliTmCurr;
      render(currentData);
    };
  });

  window.addEventListener('resize',()=>{
    const wrap=document.getElementById('treemapWrap');
    if(wrap&&wrap.offsetParent)render(currentData);
  });

  // lazy: se renderiza al visitar la sección (resize event en go())
  window._renderTm=()=>render(currentData);
})();

/* ── Category cards ──────────────────────────────────────── */
(function(){
  function renderCat(period){
    const d=cliCat[period];
    const total=d.classic.val+d.platinum.val+d.gold.val;
    const totalN=d.classic.n+d.platinum.n+d.gold.n;
    const cats=[
      {id:'classic',lbl:'Platinum',thresh:'&gt; $500K',cls:'ct-classic',rk:'01'},
      {id:'platinum',lbl:'Gold',thresh:'$100K–$500K',cls:'ct-platinum',rk:'02'},
      {id:'gold',lbl:'Classic',thresh:'&lt; $100K',cls:'ct-gold',rk:'03'}
    ];
    let h='';
    cats.forEach(c=>{
      const cd=d[c.id];
      h+=`<div class="cat-tier-row ${c.cls}" onclick="openCliCat('${c.id}','${period}')">
        <div class="cat-tier-rank">${c.rk}</div>
        <div class="cat-tier-main">
          <div class="cat-tier-name">${c.lbl} <span class="cat-tier-thresh">${c.thresh}</span></div>
          <div class="cat-tier-progress"><div class="cat-tier-progress-fill" style="width:${cd.pct}%"></div></div>
        </div>
        <div class="cat-tier-n">${cd.n}<span>clientes</span></div>
        <div class="cat-tier-value">
          <div class="cat-tier-val">${fmtV(cd.val)}</div>
          <div class="cat-tier-badge">${cd.pct.toFixed(2)}%</div>
        </div>
      </div>`;
    });
    document.getElementById('catGrid').innerHTML=h;
    const summaryLbl=period==='hist'?'Valor total · Histórico 2014–2026':'Valor total · Período 2025–2026';
    document.getElementById('catSummary').innerHTML=
      `<div class="cat-summary-lbl">${summaryLbl}</div>
       <div class="cat-summary-val">${fmtV(total)}</div>
       <div class="cat-summary-sub">${totalN} clientes facturando</div>`;
    const ins=period==='hist'
      ?`Segmentación histórica 2014–2026. <strong>${d.classic.n} clientes Platinum concentran el ${d.classic.pct.toFixed(2)}% del valor total.</strong>`
      :`Segmentación 2025–2026. <strong>${d.classic.n} clientes Platinum representan el ${d.classic.pct.toFixed(2)}% de los ingresos del período.</strong>`;
    document.getElementById('catInsight').innerHTML=ins;
  }
  renderCat('hist');
  document.querySelectorAll('#catToggle .tm-btn').forEach(btn=>{
    btn.onclick=()=>{
      document.querySelectorAll('#catToggle .tm-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderCat(btn.dataset.ct);
    };
  });
})();

/* ── Segmentation table — ordenable por encabezado, total siempre al final ── */
(function(){
  const segHeadEl=document.getElementById('segHead');
  const SEG_KEY=[s=>s.lbl, s=>s.n, s=>s.pc, s=>s.vh, s=>s.vc, s=>s.pvc];
  let sc=-1, sa=true;
  function render(){
    const rows=[...cliSegs];
    if(sc>=0){
      rows.sort((a,b)=>{
        const c=_cmp(SEG_KEY[sc](a),SEG_KEY[sc](b));
        return sa?c:-c;
      });
    }
    let h='', tn=0,tvh=0,tvc=0;
    cliSegs.forEach(s=>{ tn+=s.n; tvh+=s.vh; tvc+=s.vc; });
    rows.forEach(s=>{
      h+=`<tr onclick="openCliSeg('${s.id}')" title="Ver detalle — ${s.lbl}">
        <td>
          <div><span class="sbadge ${SEG_CSS[s.id]}">${s.lbl}</span></div>
          <div style="font-size:10px;color:var(--ts);margin-top:3px;line-height:1.3">${s.note}</div>
        </td>
        <td class="r" style="font-weight:600">${s.n}</td>
        <td class="r">${s.pc.toFixed(2)}%</td>
        <td class="r">${fmtV(s.vh)}</td>
        <td class="r" style="font-weight:600;color:${s.vc>0?'var(--brand-d)':'var(--ts)'}">${s.vc>0?fmtV(s.vc):'—'}</td>
        <td class="r">${s.pvc>0?s.pvc.toFixed(2)+'%':'—'}</td>
      </tr>`;
    });
    h+=`<tr class="tot">
      <td style="font-weight:700">Total cartera</td>
      <td class="r">${tn}</td><td class="r">100.00%</td>
      <td class="r">${fmtV(tvh)}</td>
      <td class="r">${fmtV(tvc)}</td>
      <td class="r">100.00%</td>
    </tr>`;
    document.getElementById('segBody').innerHTML=h;
    if(segHeadEl){
      [].slice.call(segHeadEl.querySelectorAll('th')).forEach((th,i)=>{
        const sorted=sc===i;
        th.classList.toggle('sorted',sorted);
        const sic=th.querySelector('.sic');
        if(sic) sic.textContent=sorted?(sa?'▲':'▼'):'↕';
      });
    }
  }
  if(segHeadEl){
    [].slice.call(segHeadEl.querySelectorAll('th')).forEach(th=>{
      th.onclick=()=>{
        const col=+th.dataset.col;
        if(sc===col) sa=!sa; else { sc=col; sa=true; }
        render();
      };
    });
  }
  render();
})();

/* ── Ordenamiento compartido — números, texto (sin tildes/case) y
   nombres con numeración de ranking ("1. Cliente") ─────────── */
function _sortKey(v){
  if(typeof v==='number') return v;
  var s=String(v==null?'':v).replace(/^\d+\.\s*/,'');
  var DIACRITICS=new RegExp('[̀-ͯ]','g');
  return s.normalize('NFD').replace(DIACRITICS,'').toLowerCase();
}
function _cmp(va,vb){
  var ka=_sortKey(va), kb=_sortKey(vb);
  if(typeof ka==='number'&&typeof kb==='number') return ka-kb;
  ka=String(ka); kb=String(kb);
  return ka<kb?-1:ka>kb?1:0;
}

/* ── Modal engine ────────────────────────────────────────── */
function _mkModal(cid){
  return `<div id="${cid}">
    <input class="msearch" placeholder="Buscar cliente…">
    <div style="overflow-x:auto"><table class="mtbl"><thead></thead><tbody></tbody></table></div>
    <div class="mpager"><button class="pp">← Anterior</button><span class="pgi"></span><button class="pn">Siguiente →</button></div>
  </div>`;
}

function _wireTable(cid,headers,rows,totRow){
  let sc=-1,sa=true,pg=0,q='';
  const PG=15;
  function renderT(){
    const el=document.getElementById(cid);
    if(!el)return;
    const fq=q.toLowerCase();
    let filtered=rows.filter(r=>String(r[0]).toLowerCase().includes(fq));
    if(sc>=0){
      filtered=[...filtered].sort((a,b)=>{
        const c=_cmp(a[sc],b[sc]);
        return sa?c:-c;
      });
    }
    const maxP=Math.max(0,Math.ceil(filtered.length/PG)-1);
    if(pg>maxP)pg=maxP;
    const pr=filtered.slice(pg*PG,(pg+1)*PG);
    let thead='<tr>'+headers.map((hd,i)=>{
      const sorted=sc===i;
      const ic=sorted?(sa?'▲':'▼'):'↕';
      return `<th class="${hd.r?'r':''} ${sorted?'sorted':''}" data-col="${i}">${hd.l} <span class="sic">${ic}</span></th>`;
    }).join('')+'</tr>';
    let tbody=pr.map(r=>'<tr>'+headers.map((hd,i)=>{
      const v=r[i];
      return `<td class="${hd.r?'r':''}">${hd.fn?hd.fn(v,r):v}</td>`;
    }).join('')+'</tr>').join('');
    if(!pr.length)tbody=`<tr><td colspan="${headers.length}" style="text-align:center;color:var(--ts);padding:18px">Sin resultados</td></tr>`;
    let tfoot='';
    if(totRow&&!fq){
      tfoot='<tr class="mtr-tot">'+totRow.map((v,i)=>`<td class="${headers[i]&&headers[i].r?'r':''}">${v}</td>`).join('')+'</tr>';
    }
    el.querySelector('.mtbl thead').innerHTML=thead;
    el.querySelector('.mtbl tbody').innerHTML=tbody+tfoot;
    el.querySelector('.pgi').textContent=`Pág. ${pg+1}/${maxP+1} · ${filtered.length} clientes`;
    el.querySelector('.pp').disabled=pg===0;
    el.querySelector('.pn').disabled=pg>=maxP;
  }
  setTimeout(()=>{
    const el=document.getElementById(cid);
    if(!el)return;
    el.querySelector('.msearch').oninput=e=>{q=e.target.value;pg=0;renderT();};
    /* Event delegation en el <thead>: los <th> se destruyen y recrean en cada
       renderT(), pero el nodo <thead> persiste, así que el listener sigue
       funcionando sin necesidad de volver a enlazarlo tras cada render. */
    el.querySelector('.mtbl thead').addEventListener('click',e=>{
      const th=e.target.closest('th[data-col]');
      if(!th)return;
      const col=+th.dataset.col;
      if(sc===col)sa=!sa; else{sc=col;sa=true;}
      renderT();
    });
    el.querySelector('.pp').onclick=()=>{pg--;renderT();};
    el.querySelector('.pn').onclick=()=>{pg++;renderT();};
    renderT();
  },20);
}

/* ── Modal: activos ──────────────────────────────────────── */
function openCliModal(type){
  const TOT2526=63191481;
  if(type==='activos'){
    const rows=cliActTop20.map((r,i)=>[`${i+1}. ${r[0]}`,r[1],r[2],r[3],r[4],r[5]]);
    const tv=cliActTop20.reduce((s,r)=>s+r[1],0);
    openModal('Clientes activos 2025–2026 · Top 20 por facturación',
      _mkModal('mdAct')+
      `<div class="mnote" style="margin-top:8px"><strong>73 clientes activos</strong> en el período. Valor total 2025–2026: <strong>${fmtV(TOT2526)}</strong>. El top 20 concentra el <strong>${(tv/TOT2526*100).toFixed(2)}%</strong> del valor.</div>`);
    _wireTable('mdAct',
      [{l:'# Cliente'},{l:'Facturación 25–26',r:true,fn:v=>fmtV(v)},{l:'% Total',r:true,fn:v=>v.toFixed(2)+'%'},
       {l:'Segmento',fn:(v)=>`<span class="mseg-tag ${SEG_CSS[v]}">${SEG_LBL[v]}</span>`},
       {l:'Primer año',r:true},{l:'Último año',r:true}],
      rows,
      ['TOTAL TOP 20',fmtV(tv),(tv/TOT2526*100).toFixed(2)+'%','','','']
    );
  } else {
    const rows=cliNewTop20.map((r,i)=>[`${i+1}. ${r[0]}`,r[1],r[2],r[3]]);
    const tv=cliNewTop20.reduce((s,r)=>s+r[1],0);
    openModal('Clientes nuevos 2025–2026 · Top 20 por facturación',
      _mkModal('mdNew')+
      `<div class="mnote" style="margin-top:8px"><strong>34 clientes nuevos</strong> (primera compra en 2025 o 2026). Generaron <strong>${fmtV(tv)}</strong> = ${(tv/TOT2526*100).toFixed(2)}% del total del período.</div>`);
    _wireTable('mdNew',
      [{l:'# Cliente'},{l:'Facturación 25–26',r:true,fn:v=>fmtV(v)},{l:'% Total',r:true,fn:v=>v.toFixed(2)+'%'},{l:'Primer año',r:true}],
      rows,
      ['TOTAL TOP 20',fmtV(tv),(tv/TOT2526*100).toFixed(2)+'%','']
    );
  }
}

/* ── Modal: categorías ───────────────────────────────────── */
function openCliCat(catId,period){
  const d=cliCat[period][catId];
  const NAMES={classic:'Platinum (> $500K)',platinum:'Gold ($100K–$500K)',gold:'Classic (< $100K)'};
  const PLBL=period==='hist'?'Histórico 2014–2026':'Período 2025–2026';
  const VLBL=period==='hist'?'Valor histórico':'Facturación 25–26';
  if(!d.top||!d.top.length){
    /* Resumen ejecutivo cuando no hay listado individual (Gold histórico, categorías sin detalle) */
    const avgVal=d.n>0?Math.round(d.val/d.n):0;
    const avgFmt=fmtV(avgVal);
    openModal(`${NAMES[catId]} · ${PLBL}`,`
      <div class="mnote" style="margin-bottom:14px"><strong>${d.n} clientes</strong> en la categoría ${NAMES[catId]} &middot; ${PLBL}</div>
      <table class="mtbl" style="width:100%;margin-bottom:14px">
        <thead><tr><th>Métrica</th><th style="text-align:right">Valor</th></tr></thead>
        <tbody>
          <tr><td>Total de clientes en categoría</td><td style="text-align:right;font-weight:700">${d.n}</td></tr>
          <tr><td>Valor total facturado</td><td style="text-align:right;font-weight:700">${fmtV(d.val)}</td></tr>
          <tr><td>Participación en el período</td><td style="text-align:right;font-weight:700">${d.pct.toFixed(2)}%</td></tr>
          <tr><td>Ticket promedio por cliente</td><td style="text-align:right;font-weight:700">${avgFmt}</td></tr>
          <tr><td>Facturación individual</td><td style="text-align:right;font-size:11px;color:var(--ts)">&lt; $100K por cliente</td></tr>
        </tbody>
      </table>
      <div class="mnote" style="font-style:italic">Clientes con facturación individual inferior a $100K. Corresponden principalmente a proyectos de servicio específico, mantenimiento o instalaciones de menor escala. El listado completo está disponible en el ERP comercial.</div>
    `);
    return;
  }
  /* Tabla de clientes con detalle disponible */
  const isGold=(catId==='gold');
  const rows=d.top.map((r,i)=>[`${i+1}. ${r[0]}`,r[1],r[2]]);
  const tv=d.top.reduce((s,r)=>s+r[1],0);
  const totLbl=isGold?(d.top.length>=d.n?`TOTAL (${d.n} clientes)`:`Top ${d.top.length} de ${d.n}`):'TOTAL TOP 20';
  const goldNote=(isGold&&d.top.length<d.n)
    ?`<div class="mnote" style="margin-top:10px;border-left:3px solid #d97706;padding-left:10px">
        <strong>${d.n} clientes totales</strong> en Gold para ${PLBL}. Se muestran <strong>Top ${d.top.length}</strong> (${(tv/d.val*100).toFixed(2)}% del valor Gold).
        Los ${d.n-d.top.length} clientes restantes suman <strong>${fmtV(d.val-tv)}</strong> &mdash; detalle disponible en ERP.
      </div>`
    :'';
  openModal(`${NAMES[catId]} · ${PLBL}`,
    _mkModal(`mdCat_${catId}_${period}`)+
    `<div class="mnote" style="margin-top:8px"><strong>${d.n} clientes</strong> · ${PLBL} · Valor total: <strong>${fmtV(d.val)}</strong> (${d.pct.toFixed(2)}% del período).</div>`+
    goldNote);
  _wireTable(`mdCat_${catId}_${period}`,
    [{l:'# Cliente'},{l:VLBL,r:true,fn:v=>fmtV(v)},{l:'% del total',r:true,fn:v=>v.toFixed(2)+'%'}],
    rows,
    [totLbl,fmtV(tv),(tv/d.val*100).toFixed(2)+'%']
  );
}

/* ── Modal: segmentos ────────────────────────────────────── */
function openCliSeg(segId){
  const seg=cliSegs.find(s=>s.id===segId);
  if(!seg)return;
  const cid='mdSeg_'+segId;
  const isOff=segId==='sinactividad';
  const rows=seg.det.map((r,i)=>{
    if(isOff) return [`${i+1}. ${r[0]}`,r[2],r[3],r[4]];
    return [`${i+1}. ${r[0]}`,r[1],r[2],r[3],r[4]];
  });
  const tv=seg.det.reduce((s,r)=>s+(isOff?r[2]:r[1]),0);
  const topLbl=seg.det.length>=20?'TOP 20':'TOP '+seg.det.length;
  openModal(`${seg.lbl} · ${seg.note}`,
    _mkModal(cid)+
    `<div class="mnote" style="margin-top:8px"><strong>${seg.n} clientes</strong> · Valor histórico: <strong>${fmtV(seg.vh)}</strong>${seg.vc>0?' · Ventas 25–26: <strong>'+fmtV(seg.vc)+'</strong>':''}</div>`);
  if(isOff){
    _wireTable(cid,
      [{l:'# Cliente'},{l:'Valor histórico',r:true,fn:v=>fmtV(v)},{l:'Última compra',r:true},{l:'Años activo',r:true}],
      rows,[topLbl,fmtV(tv),'','']
    );
  } else {
    _wireTable(cid,
      [{l:'# Cliente'},{l:'Ventas 25–26',r:true,fn:v=>fmtV(v)},{l:'Valor histórico',r:true,fn:v=>fmtV(v)},{l:'Última compra',r:true},{l:'Años activo',r:true}],
      rows,[topLbl,fmtV(tv),'','','']
    );
  }
}


/* ============================================================
   TOP 20 CLIENTES 2026 — tabla paginada (10 en 10, fila TOTAL fija) + dona premium
   IDs "top10*"/"chTop10*" conservados por compatibilidad; texto visible dice Top 20.
   ============================================================ */
(function(){
  /* Tabla Top 20 — paginada de 10 en 10 */
  var tbody = document.getElementById('top10Body');
  if(!tbody) return;
  var maxV = top20_2026[0].v;
  var total2026 = ventas2026.reduce(function(s,r){return s+r.imp;},0);
  var totalTop20 = top20_2026.reduce(function(s,r){return s+r.v;},0);
  var mgWeightedTop20 = top20_2026.reduce(function(s,r){return s+r.v*r.mg;},0)/totalTop20;
  var resto = total2026 - totalTop20;
  var pctTop20 = totalTop20/total2026*100;
  var pctResto = 100 - pctTop20;
  var PG10 = 10, page10 = 0;
  var maxPage10 = Math.ceil(top20_2026.length/PG10)-1;

  function renderTop20(){
    var slice = top20_2026.slice(page10*PG10,(page10+1)*PG10);
    var html = '';
    slice.forEach(function(r,i){
      var mgCls = r.mg>=18?'mg-ok':r.mg>=12?'mg-warn':'mg-crit';
      var barW = Math.round(r.v/maxV*100);
      html+='<tr>'
        +'<td style="color:var(--ts);font-size:10px;text-align:center">'+(page10*PG10+i+1)+'</td>'
        +'<td><div class="top10-bar-cell"><span style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:160px">'+r.nm+'</span>'
        +'<div class="top10-bar"><div class="top10-bar-fill" style="width:'+barW+'%"></div></div></div></td>'
        +'<td class="r" style="font-weight:700">'+fmtEjecutivo(r.v)+'</td>'
        +'<td class="r"><span class="'+mgCls+'">'+r.mg.toFixed(2)+'%</span></td>'
        +'<td style="font-size:10.5px;color:var(--ts)">'+r.zona+'</td>'
        +'</tr>';
    });
    /* Fila de total — siempre calculada sobre el Top 20 completo, no solo la página visible */
    html += '<tr class="tbl-total-row">'
      +'<td colspan="2" style="font-weight:800">TOTAL TOP 20</td>'
      +'<td class="r" style="font-weight:900">'+fmtEjecutivo(totalTop20)+'</td>'
      +'<td class="r" style="font-weight:900">'+mgWeightedTop20.toFixed(2)+'%</td>'
      +'<td></td>'
      +'</tr>';
    tbody.innerHTML = html;
    var info = document.getElementById('top10PageInfo');
    if(info) info.textContent = (page10*PG10+1)+'–'+Math.min((page10+1)*PG10,top20_2026.length)+' de '+top20_2026.length;
    var prev = document.getElementById('top10Prev'), next = document.getElementById('top10Next');
    if(prev) prev.disabled = page10===0;
    if(next) next.disabled = page10>=maxPage10;
  }
  var top10PrevBtn = document.getElementById('top10Prev'), top10NextBtn = document.getElementById('top10Next');
  if(top10PrevBtn) top10PrevBtn.addEventListener('click',function(){ if(page10>0){page10--;renderTop20();} });
  if(top10NextBtn) top10NextBtn.addEventListener('click',function(){ if(page10<maxPage10){page10++;renderTop20();} });
  renderTop20();

  /* Dona Top 20 vs Resto — premium, con centro dinámico seleccionable por click */
  var chEl = document.getElementById('chTop10Dona');
  if(!chEl) return;

  var SEG = {
    top20: {lbl:'Top 20 clientes',   short:'TOP 20',  v:totalTop20,        pct:pctTop20,        c1:'#6EE7D3', c2:'#0F6E56', dot:'#3EC6AC'},
    resto: {lbl:'Resto de clientes', short:'RESTO',   v:resto<0?0:resto,   pct:pctResto<0?0:pctResto, c1:'#EEF2F8', c2:'#C7D2E3', dot:'#c7d2e3'}
  };
  var centerState = { key:'top20' };
  var chartRef = null;

  function drawCenter(chart){
    var seg = SEG[centerState.key];
    var ctx2=chart.ctx, area=chart.chartArea;
    if(!area) return;
    var w=area.width, h=area.height;
    var cx=area.left+w/2, cy=area.top+h/2;
    var r=Math.min(w,h);
    ctx2.save();
    ctx2.textAlign='center'; ctx2.textBaseline='middle';
    var fsPct=Math.min(r*0.165,25), fsLbl=Math.min(r*0.075,10.5), fsRef=Math.min(r*0.062,9);
    var gap=Math.min(r*0.10,11);
    /* Porcentaje principal */
    ctx2.fillStyle = centerState.key==='top20' ? '#0F6E56' : '#5b6b8c';
    ctx2.font='900 '+fsPct+'px Inter,sans-serif';
    ctx2.fillText(seg.pct.toFixed(2)+'%',cx,cy-gap*0.9);
    /* Etiqueta segmento seleccionado */
    ctx2.fillStyle='#7b8db0';
    ctx2.font='700 '+fsLbl+'px Inter,sans-serif';
    ctx2.fillText(seg.short,cx,cy+gap*0.95);
    /* Importe del segmento seleccionado */
    ctx2.fillStyle='rgba(123,141,176,.75)';
    ctx2.font='600 '+fsRef+'px Inter,sans-serif';
    ctx2.fillText(fmtEjecutivo(seg.v)+' de '+fmtEjecutivo(total2026),cx,cy+gap*2.35);
    ctx2.restore();
  }

  function setSelection(key){
    centerState.key = key;
    var legEl = document.getElementById('chTop10Leg');
    if(legEl){
      [].slice.call(legEl.querySelectorAll('[data-key]')).forEach(function(el){
        el.classList.toggle('active', el.getAttribute('data-key')===key);
      });
    }
    if(chartRef) chartRef.update('none');
  }

  /* Leyenda premium — clic actualiza el centro */
  (function(){
    var legEl = document.getElementById('chTop10Leg');
    if(!legEl) return;
    legEl.innerHTML = ['top20','resto'].map(function(key){
      var d = SEG[key];
      return '<div class="vt-pie-leg-item vt-pie-leg-click" data-key="'+key+'">'
        +'<span class="vt-pie-leg-dot" style="background:'+d.dot+'"></span>'
        +'<span class="vt-pie-leg-lbl">'+d.lbl+'</span>'
        +'<span class="vt-pie-leg-val">'+fmtEjecutivo(d.v)+'</span>'
        +'<span class="vt-pie-leg-pct">'+d.pct.toFixed(2)+'%</span>'
        +'</div>';
    }).join('')
      /* Fila de total — misma lógica visual que la fila TOTAL de "Por Tipo de Venta" */
      + '<div class="vt-pie-leg-item vt-pie-leg-total">'
        +'<span class="vt-pie-leg-dot" style="background:#0a0a1e"></span>'
        +'<span class="vt-pie-leg-lbl">Total 2026</span>'
        +'<span class="vt-pie-leg-val">'+fmtEjecutivo(total2026)+'</span>'
        +'<span class="vt-pie-leg-pct">100.00%</span>'
        +'</div>';
    [].slice.call(legEl.querySelectorAll('[data-key]')).forEach(function(el){
      el.addEventListener('click',function(){ setSelection(el.getAttribute('data-key')); });
    });
  })();

  var top10TotalEl = document.getElementById('vtTop10Total');
  if (top10TotalEl) top10TotalEl.textContent = 'Total 2026: ' + fmtEjecutivo(total2026);

  chartRef = new Chart(chEl,{
    type:'doughnut',
    data:{
      labels:[SEG.top20.lbl, SEG.resto.lbl],
      datasets:[{
        data:[SEG.top20.v, SEG.resto.v],
        backgroundColor:function(context){
          var chart=context.chart;
          return context.dataIndex===0
            ? radialGrad(chart.ctx, chart.chartArea, SEG.top20.c1, SEG.top20.c2)
            : radialGrad(chart.ctx, chart.chartArea, SEG.resto.c1, SEG.resto.c2);
        },
        borderColor:'#ffffff',
        borderWidth:3,
        spacing:4,
        borderRadius:8,
        hoverOffset:12,
        hoverBorderWidth:3
      }]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      cutout:'70%',
      animation:{animateRotate:true,duration:500,easing:'easeOutQuart'},
      layout:{padding:{top:6,bottom:6,left:6,right:6}},
      onHover:function(evt, elements, chart){ chart.canvas.style.cursor = elements.length ? 'pointer' : 'default'; },
      onClick:function(evt, elements){
        if(!elements.length) return;
        setSelection(elements[0].index===0 ? 'top20' : 'resto');
      },
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(9,12,30,.95)',
          padding:{top:10,bottom:10,left:13,right:13},
          cornerRadius:10,
          borderColor:'rgba(62,198,172,.25)',borderWidth:1,
          titleColor:'rgba(255,255,255,.4)',titleFont:{size:9.5,weight:'700'},
          bodyColor:'rgba(255,255,255,.85)',
          callbacks:{
            label:function(ctx){
              var v=ctx.parsed;
              var pct=(v/total2026*100).toFixed(2);
              return ' '+fmtEjecutivo(v)+' ('+pct+'%)';
            }
          }
        }
      }
    },
    plugins:[{
      id:'centerText',
      afterDraw:function(chart){ drawCenter(chart); }
    }]
  });
  setSelection('top20');
})();


/* ============================================================
   GRÁFICOS CLIENTES — Lazy init (se ejecutan al mostrar la sección)
   ============================================================ */
var _cliChartsInited = false;
/* ── Sincronización de altura: cards "seguidoras" se adaptan a su card
   de referencia (no al revés). Se recalcula en resize/tab-switch y se
   limpia en mobile para que el contenido respire sin alturas fijas. ── */
function _syncCliCardHeights(){
  var MOBILE_BP = 860;
  function sync(sourceId, targetIds){
    var src = document.getElementById(sourceId);
    var targets = targetIds.map(function(id){return document.getElementById(id);}).filter(Boolean);
    if(!src || !targets.length) return;
    if(window.innerWidth <= MOBILE_BP){
      targets.forEach(function(t){ t.style.height=''; });
      return;
    }
    src.style.height='auto';
    var h = src.offsetHeight;
    if(h>0) targets.forEach(function(t){ t.style.height = h+'px'; });
  }
  sync('cliCatCard', ['cliAgroCard']);
}
window._syncCliCardHeights = _syncCliCardHeights;
window.addEventListener('resize', _syncCliCardHeights);

window._initCliCharts = function(){
  if(_cliChartsInited) return;
  _cliChartsInited = true;

  /* ── Clientes activos vs nuevos 2021-2026 (+ tasa de captación) ─ */
  (function(){
    var el=document.getElementById('chCliEvol');
    if(!el)return;
    if(Chart.getChart(el))Chart.getChart(el).destroy();

    var tasaData=cliEvolData.years.map(function(y,i){
      var act=cliEvolData.activos[i],nvo=cliEvolData.nuevos[i];
      return act>0? +(nvo/act*100).toFixed(2) : null;
    });
    var tasaMax=Math.ceil((Math.max.apply(null,tasaData.filter(function(v){return v!=null;}))+15)/10)*10;

    var leg=document.getElementById('cliEvolLegend');
    if(leg){
      leg.innerHTML='<span style="display:flex;align-items:center;gap:5px"><span style="width:12px;height:12px;border-radius:3px;background:#3EC6AC;display:inline-block"></span>Clientes Atendidos</span>'
        +'<span style="display:flex;align-items:center;gap:5px"><span style="width:12px;height:12px;border-radius:3px;background:#185FA5;display:inline-block"></span>Clientes nuevos</span>'
        +'<span style="display:flex;align-items:center;gap:5px"><span style="width:16px;border-top:2.5px solid #d97706;display:inline-block"></span>Tasa de captaci&oacute;n</span>';
    }

    new Chart(el,{
      type:'bar',
      data:{
        labels:cliEvolData.years.map(String),
        datasets:[
          {label:'Clientes atendidos',data:cliEvolData.activos,
           backgroundColor:'rgba(62,198,172,.85)',borderRadius:5,borderSkipped:false,
           barPercentage:.7,categoryPercentage:.75,yAxisID:'y',order:2},
          {label:'Clientes nuevos',data:cliEvolData.nuevos,
           backgroundColor:'rgba(24,95,165,.8)',borderRadius:5,borderSkipped:false,
           barPercentage:.7,categoryPercentage:.75,yAxisID:'y',order:2},
          {label:'Tasa de captación',data:tasaData,type:'line',
           borderColor:'#d97706',backgroundColor:'rgba(217,119,6,.08)',
           borderWidth:2.5,pointRadius:4,pointHoverRadius:6,
           pointBackgroundColor:'#fff',pointBorderColor:'#d97706',pointBorderWidth:2,
           fill:false,tension:.35,yAxisID:'y1',order:1}
        ]
      },
      options:{
        responsive:true,maintainAspectRatio:false,
        animation:{duration:900,easing:'easeInOutQuart'},
        plugins:{
          legend:{display:false},
          tooltip:{
            mode:'index',intersect:false,
            backgroundColor:'rgba(9,12,30,.95)',
            padding:{top:11,bottom:11,left:13,right:13},
            cornerRadius:10,
            borderColor:'rgba(62,198,172,.25)',borderWidth:1,
            titleColor:'rgba(255,255,255,.4)',titleFont:{size:9.5,weight:'700'},
            bodyColor:'rgba(255,255,255,.82)',
            callbacks:{
              title:function(items){return 'Año '+items[0].label;},
              label:function(ctx){
                if(ctx.dataset.label==='Tasa de captación') return ' Tasa de captación: '+ctx.parsed.y.toFixed(2)+'%';
                return ' '+ctx.dataset.label+': '+ctx.parsed.y;
              }
            }
          }
        },
        scales:{
          x:{grid:{display:false},border:{display:false},ticks:{font:{size:11},color:'#94a3b8'}},
          y:{grid:{color:'rgba(10,10,30,.05)'},border:{display:false},
             ticks:{font:{size:10},color:'#94a3b8'},
             title:{display:true,text:'N° de clientes',font:{size:10},color:'#94a3b8'}},
          y1:{position:'right',min:0,max:tasaMax,
              grid:{display:false},border:{display:false},
              ticks:{font:{size:10},color:'#d97706',callback:function(v){return v+'%';}},
              title:{display:true,text:'Tasa de captación',font:{size:10},color:'#d97706'}}
        }
      }
    });

    var ins=document.getElementById('cliEvolInsight');
    if(ins) ins.innerHTML='<strong>2025&ndash;2026</strong> concentra el mayor dinamismo de captacion: <strong>20 clientes nuevos en 2025</strong> y 13 en los primeros seis meses de 2026. La tasa de captacion de 2025 alcanzo <strong>41.67%</strong> equivalente a 1 cliente nuevo por cada 2.4 clientes atendidos.';
  })();

  /* ── Evolución del ticket promedio 2021-2026 ─────────── */
  (function(){
    var el=document.getElementById('chTicketEvol');
    if(!el)return;
    if(Chart.getChart(el))Chart.getChart(el).destroy();

    new Chart(el,{
      type:'bar',
      data:{
        labels:cliTicketEvol.years.map(String),
        datasets:[{label:'Ticket promedio',data:cliTicketEvol.avgTicket,
          backgroundColor:cliTicketEvol.years.map(function(y){return y===2026?'rgba(217,119,6,.85)':'rgba(62,198,172,.85)';}),
          borderRadius:6,borderSkipped:false,barPercentage:.6,categoryPercentage:.7}]
      },
      options:{
        responsive:true,maintainAspectRatio:false,
        animation:{duration:900,easing:'easeInOutQuart'},
        plugins:{
          legend:{display:false},
          tooltip:{
            backgroundColor:'rgba(9,12,30,.95)',padding:{top:11,bottom:11,left:13,right:13},cornerRadius:10,
            borderColor:'rgba(62,198,172,.25)',borderWidth:1,
            titleColor:'rgba(255,255,255,.4)',titleFont:{size:9.5,weight:'700'},
            bodyColor:'rgba(255,255,255,.85)',
            callbacks:{
              title:function(items){
                var i=items[0].dataIndex,y=cliTicketEvol.years[i];
                return 'Año '+y+(y===2026?' (YTD Ene–Jun)':'');
              },
              label:function(ctx){return ' Ticket promedio: '+fmtV(ctx.parsed.y);},
              afterLabel:function(ctx){
                var i=ctx.dataIndex;
                return [' Ventas: '+fmtV(cliTicketEvol.ventas[i]),' Clientes activos: '+cliTicketEvol.clientes[i]];
              }
            }
          }
        },
        scales:{
          x:{grid:{display:false},border:{display:false},ticks:{font:{size:11},color:'#94a3b8'}},
          y:{grid:{color:'rgba(10,10,30,.05)'},border:{display:false},
             ticks:{font:{size:10},color:'#94a3b8',callback:function(v){return fmtV(v);}}}
        }
      }
    });

    var ins=document.getElementById('ticketEvolInsight');
    if(ins) ins.innerHTML='El ticket promedio alcanz&oacute; sus picos en <strong>2022 ($651K)</strong> y <strong>2025 ($713K)</strong>, impulsado por proyectos grandes concentrados en pocos clientes. El <strong>2026 YTD ($614K)</strong> corresponde solo a los primeros 6 meses del a&ntilde;o.';
  })();

  /* ── Evolución Agro / No Agro 2021-2026 ──────────────── */
  (function(){
    var el=document.getElementById('chAgroNoAgro');
    if(!el)return;
    if(Chart.getChart(el))Chart.getChart(el).destroy();

    var leg=document.getElementById('agroLegend');
    if(leg){
      leg.innerHTML='<span style="display:flex;align-items:center;gap:5px"><span style="width:12px;height:12px;border-radius:3px;background:#3EC6AC;display:inline-block"></span>Agro</span>'
        +'<span style="display:flex;align-items:center;gap:5px"><span style="width:12px;height:12px;border-radius:3px;background:#185FA5;display:inline-block"></span>No agro</span>';
    }

    var totals=agroNoAgroYear.years.map(function(y,i){return agroNoAgroYear.agroV[i]+agroNoAgroYear.noagroV[i];});

    new Chart(el,{
      type:'bar',
      data:{
        labels:agroNoAgroYear.years.map(String),
        datasets:[
          {label:'Agro',data:agroNoAgroYear.agroV,backgroundColor:'rgba(62,198,172,.85)',stack:'s',borderSkipped:false},
          {label:'No agro',data:agroNoAgroYear.noagroV,backgroundColor:'rgba(24,95,165,.85)',stack:'s',borderSkipped:false}
        ]
      },
      options:{
        responsive:true,maintainAspectRatio:false,
        animation:{duration:900,easing:'easeInOutQuart'},
        plugins:{
          legend:{display:false},
          tooltip:{
            mode:'index',intersect:false,
            backgroundColor:'rgba(9,12,30,.95)',padding:{top:11,bottom:11,left:13,right:13},cornerRadius:10,
            borderColor:'rgba(62,198,172,.25)',borderWidth:1,
            titleColor:'rgba(255,255,255,.4)',titleFont:{size:9.5,weight:'700'},
            bodyColor:'rgba(255,255,255,.85)',
            callbacks:{
              title:function(items){return 'Año '+items[0].label;},
              label:function(ctx){
                var i=ctx.dataIndex,isAgro=ctx.dataset.label==='Agro';
                var n=isAgro?agroNoAgroYear.agroN[i]:agroNoAgroYear.noagroN[i];
                var v=ctx.parsed.y,pct=totals[i]>0?(v/totals[i]*100).toFixed(2)+'%':'—';
                return [' '+ctx.dataset.label+': '+n+' clientes',' Importe: '+fmtV(v)+' ('+pct+' del año)'];
              }
            }
          }
        },
        scales:{
          x:{stacked:true,grid:{display:false},border:{display:false},ticks:{font:{size:11},color:'#94a3b8'}},
          y:{stacked:true,grid:{color:'rgba(10,10,30,.05)'},border:{display:false},
             ticks:{font:{size:10},color:'#94a3b8',callback:function(v){return fmtV(v);}}}
        }
      }
    });

    var ins=document.getElementById('agroInsight');
    if(ins){
      var i6=5,a26=agroNoAgroYear.agroN[i6],na26=agroNoAgroYear.noagroN[i6];
      ins.innerHTML='La cartera sigue altamente concentrada en Agro: <strong>'+a26+' de '+(a26+na26)+' clientes activos en 2026</strong> pertenecen al sector agroindustrial, aportando <strong>'+fmtV(agroNoAgroYear.agroV[i6])+'</strong> del per&iacute;odo YTD.';
    }
  })();

  /* ── Pareto clientes 2025-2026 YTD + tabla lateral con hover sync ── */
  (function(){
    var el=document.getElementById('chPareto');
    if(!el)return;
    if(Chart.getChart(el))Chart.getChart(el).destroy();

    var labels=paretoData.map(function(r,i){
      var nm=r.nm.split(' ')[0];
      return (i+1)+'. '+nm;
    });
    var barData=paretoData.map(function(r){return +(r.v/1000000).toFixed(3);});
    var lineData=paretoData.map(function(r){return +r.acum.toFixed(2);});

    var leg=document.getElementById('paretoLegend');
    if(leg){
      leg.innerHTML='<span style="display:flex;align-items:center;gap:5px"><span style="width:12px;height:12px;border-radius:3px;background:#3EC6AC;display:inline-block"></span>Ventas (US$ MM)</span>'
        +'<span style="display:flex;align-items:center;gap:5px"><span style="width:16px;border-top:2px solid #d97706;display:inline-block"></span>% Acumulado</span>';
    }

    var paretoChart=new Chart(el,{
      type:'bar',
      data:{
        labels:labels,
        datasets:[
          {label:'Ventas (US$ MM)',data:barData,
           backgroundColor:'rgba(62,198,172,.75)',
           borderRadius:4,borderSkipped:false,
           yAxisID:'y',order:2},
          {label:'% Acumulado',data:lineData,
           type:'line',borderColor:'#d97706',backgroundColor:'rgba(217,119,6,.08)',
           borderWidth:2.5,pointRadius:3,pointHoverRadius:5,
           pointBackgroundColor:'#fff',pointBorderColor:'#d97706',pointBorderWidth:2,
           fill:true,tension:.35,yAxisID:'y1',order:1}
        ]
      },
      options:{
        responsive:true,maintainAspectRatio:false,
        animation:{duration:900,easing:'easeInOutQuart'},
        onHover:function(evt,activeEls,chart){
          var body=document.getElementById('paretoTblBody');
          if(!body)return;
          Array.prototype.forEach.call(body.querySelectorAll('tr'),function(r){r.classList.remove('row-hover');});
          if(activeEls&&activeEls.length){
            var idx=activeEls[0].index;
            var row=body.querySelector('tr[data-idx="'+idx+'"]');
            if(row)row.classList.add('row-hover');
          }
        },
        plugins:{
          legend:{display:false},
          tooltip:{
            mode:'index',intersect:false,
            backgroundColor:'rgba(9,12,30,.95)',
            padding:{top:11,bottom:11,left:13,right:13},
            cornerRadius:10,
            borderColor:'rgba(62,198,172,.25)',borderWidth:1,
            titleColor:'rgba(255,255,255,.4)',titleFont:{size:9.5,weight:'700'},
            bodyColor:'rgba(255,255,255,.82)',
            callbacks:{
              title:function(items){return paretoData[items[0].dataIndex].nm;},
              label:function(ctx){
                var i=ctx.dataIndex;
                var r=paretoData[i];
                if(ctx.dataset.label==='Ventas (US$ MM)') return ' Ventas: $'+(r.v/1000000).toFixed(2)+'MM ('+r.pct.toFixed(2)+'%)';
                return ' Acumulado: '+r.acum.toFixed(2)+'%';
              }
            }
          }
        },
        scales:{
          x:{grid:{display:false},border:{display:false},ticks:{font:{size:9},color:'#94a3b8',maxRotation:45,minRotation:30}},
          y:{grid:{color:'rgba(10,10,30,.05)'},border:{display:false},
             ticks:{font:{size:10},color:'#94a3b8',callback:function(v){return '$'+v+'MM';}},
             title:{display:true,text:'Ventas (MM)',font:{size:10},color:'#94a3b8'}},
          y1:{position:'right',min:0,max:100,
              grid:{display:false},border:{display:false},
              ticks:{font:{size:10},color:'#d97706',callback:function(v){return v+'%';}},
              title:{display:true,text:'% Acumulado',font:{size:10},color:'#d97706'}}
        }
      }
    });

    /* Tabla lateral · refleja exactamente los clientes del Pareto · ordenable,
       manteniendo el data-idx original para el hover-sync con el gr&aacute;fico */
    var tbody=document.getElementById('paretoTblBody');
    var paretoHead=document.getElementById('paretoHead');
    var pSc=-1, pSa=true;
    var PARETO_KEY=[
      function(r){return r.i+1;},
      function(r){return r.nm;},
      function(r){return r.v;},
      function(r){return r.acum;}
    ];
    function renderParetoTbl(){
      if(!tbody)return;
      var rows=paretoData.map(function(r,i){return {i:i,nm:r.nm,v:r.v,acum:r.acum};});
      if(pSc>=0){
        rows.sort(function(a,b){
          var c=_cmp(PARETO_KEY[pSc](a),PARETO_KEY[pSc](b));
          return pSa?c:-c;
        });
      }
      tbody.innerHTML=rows.map(function(r){
        return '<tr data-idx="'+r.i+'"><td>'+(r.i+1)+'</td><td>'+r.nm+'</td><td class="r">'+fmtV(r.v)+'</td><td class="r">'+r.acum.toFixed(2)+'%</td></tr>';
      }).join('');
      Array.prototype.forEach.call(tbody.querySelectorAll('tr'),function(tr){
        tr.addEventListener('mouseenter',function(){
          var idx=+tr.dataset.idx;
          paretoChart.setActiveElements([{datasetIndex:0,index:idx},{datasetIndex:1,index:idx}]);
          paretoChart.tooltip.setActiveElements([{datasetIndex:0,index:idx}],{x:0,y:0});
          paretoChart.update('none');
        });
        tr.addEventListener('mouseleave',function(){
          paretoChart.setActiveElements([]);
          paretoChart.tooltip.setActiveElements([],{x:0,y:0});
          paretoChart.update('none');
        });
      });
      if(paretoHead){
        Array.prototype.forEach.call(paretoHead.querySelectorAll('th'),function(th,i){
          var sorted=pSc===i;
          th.classList.toggle('sorted',sorted);
          var sic=th.querySelector('.sic');
          if(sic) sic.textContent=sorted?(pSa?'▲':'▼'):'↕';
        });
      }
    }
    if(paretoHead){
      Array.prototype.forEach.call(paretoHead.querySelectorAll('th'),function(th){
        th.onclick=function(){
          var col=+th.dataset.col;
          if(pSc===col) pSa=!pSa; else { pSc=col; pSa=true; }
          renderParetoTbl();
        };
      });
    }
    renderParetoTbl();

    var ins=document.getElementById('paretoInsight');
    if(ins){
      var top5=paretoData[4]?paretoData[4].acum.toFixed(2):0;
      var top10=paretoData[9]?paretoData[9].acum.toFixed(2):0;
      ins.innerHTML='El Pareto permite identificar si el valor generado depende de pocos clientes y ayuda a priorizar cuentas estrat&eacute;gicas. Los <strong>5 principales</strong> concentran el <strong>'+top5+'%</strong> del valor 2025&ndash;2026; los <strong>top 10</strong> el <strong>'+top10+'%</strong>.';
    }
  })();

  _syncCliCardHeights();
  setTimeout(_syncCliCardHeights,60);
  setTimeout(_syncCliCardHeights,300);
};

/* ── Modal: Evolución Agro / No Agro — gráfico ampliado + detalle ── */
function openAgroModal(){
  var cid='mdAgro';
  var html='<div class="chart-wrap" style="height:280px;margin-bottom:18px"><canvas id="_agroModalCanvas"></canvas></div>'
    +_mkModal(cid);
  openModal('Evolución Agro / No Agro · Detalle 2021–2026', html);
  setTimeout(function(){
    var el=document.getElementById('_agroModalCanvas');
    if(el&&typeof Chart!=='undefined'){
      if(Chart.getChart(el))Chart.getChart(el).destroy();
      new Chart(el,{
        type:'bar',
        data:{
          labels:agroNoAgroYear.years.map(String),
          datasets:[
            {label:'Agro',data:agroNoAgroYear.agroV,backgroundColor:'rgba(62,198,172,.85)',stack:'s',borderSkipped:false},
            {label:'No agro',data:agroNoAgroYear.noagroV,backgroundColor:'rgba(24,95,165,.85)',stack:'s',borderSkipped:false}
          ]
        },
        options:{
          responsive:true,maintainAspectRatio:false,
          plugins:{
            legend:{display:false},
            tooltip:{callbacks:{label:function(ctx){return ctx.dataset.label+': '+fmtV(ctx.parsed.y);}}}
          },
          scales:{
            x:{stacked:true,grid:{display:false}},
            y:{stacked:true,grid:{color:'rgba(10,10,30,.05)'},ticks:{callback:function(v){return fmtV(v);}}}
          }
        }
      });
    }
  },60);
  var noAgroRows=agroNoAgroDetail.filter(function(r){ return r[2]==='No agro'; });
  var rows=noAgroRows.map(function(r){
    return [r[1],r[0],r[2],r[3],r[4]||'-'];
  });
  var totV=noAgroRows.reduce(function(s,r){return s+r[3];},0);
  _wireTable(cid,
    [{l:'Cliente'},{l:'Año',r:true},
     {l:'Segmento',fn:function(v){return '<span class="mseg-tag" style="background:'+(v==='Agro'?'rgba(62,198,172,.15)':'rgba(24,95,165,.15)')+';color:'+(v==='Agro'?'#0F6E56':'#185FA5')+'">'+v+'</span>';}},
     {l:'Importe',r:true,fn:function(v){return fmtV(v);}},
     {l:'Descripción de proyecto'}],
    rows,
    ['TOTAL CLIENTES NO AGRO 2021–2026','','',fmtV(totV),'']
  );
}

/* Inicializar si la sección Clientes ya está activa al cargar */
if(document.getElementById('clientes')&&document.getElementById('clientes').classList.contains('active')){
  window._initCliCharts();
}

