/* ============================================================
   ORGANIGRAMA — DATA, TABS, EXPAND, MODAL
   ============================================================ */
var DATA_ORG = {
  misael:{name:'José Misael Estrada Jiménez', incomingDate : '01/11/2012', role:'Gerente Comercial',area:'GERENCIA',color:'#0a0a1e',av:'ME',sede:'Miraflores',photo:'img/team/misael.jpg',roles:['Liderar la estrategia comercial de la empresa.','Articular la dirección y objetivos del área comercial.','Definir metas de ventas y rentabilidad.','Supervisar el desempeño de los equipos comerciales.','Aprobar estrategias de captación y fidelización de clientes.','Analizar indicadores de gestión y resultados comerciales.']},
  valeria:{name:'Valeria del Carmen Rodríguez Allca', incomingDate: '13/04/2026', role:'Planner Comercial',area:'PLANEAMIENTO COMERCIAL',color:'#0F6E56',av:'VR',sede:'Miraflores',photo:'img/team/valeria.jpg',roles:['Asistir al Gerente Comercial en la gestión del área.','Monitorear el flujo de oportunidades comerciales.','Elaborar reportes de seguimiento y desempeño.','Coordinar actividades entre áreas involucradas en los proyectos.','Dar seguimiento a los objetivos y planes comerciales.']},
  chavez:{name:'Jesús Marcio Chávez Girao', incomingDate: '24/06/2021', role:'Jefe de Arquitectura',area:'ARQUITECTURA',color:'#1a86cc',av:'JC',sede:'Miraflores',photo:'img/team/chavez.jpg',roles:['Conducir el diseño técnico-arquitectónico de las propuestas.','Supervisar el desarrollo de proyectos arquitectónicos.','Validar la calidad técnica de los entregables.','Coordinar con clientes y áreas internas los requerimientos.','Promover mejoras metodológicas en el diseño de proyectos.','Supervisar la elaboración de presupuestos.']},
  victor:{name:'Víctor Ramírez Dilas', incomingDate: '03/08/2026', role:'Ejecutivo Comercial',area:'COMERCIAL',color:'#3EC6AC',av:'VR',sede:'Piura',zona:'Norte',photo:'img/team/victor.jpg',roles:['Gestionar la cobertura comercial de la zona asignada.','Brindar atención y seguimiento a clientes.','Identificar nuevas oportunidades de negocio.','Cumplir metas de ventas establecidas.','Mantener actualizada la información de clientes.','Coordinar el cierre y seguimiento de contratos.']},
  hugo:{name:'Hugo Alexander Escobar Pacheco', incomingDate: '01/10/2024', role:'Ejecutivo Comercial',area:'COMERCIAL',color:'#3EC6AC',av:'HE',sede:'Miraflores',zona:'Centro',photo:'img/team/hugo.jpg',roles:['Gestionar la cobertura comercial de la zona asignada.','Brindar atención y seguimiento a clientes.','Identificar nuevas oportunidades de negocio.','Cumplir metas de ventas establecidas.','Mantener actualizada la información de clientes.','Coordinar el cierre y seguimiento de contratos.']},
  jhon:{name:'Jhon Jacinto Rojas Quispe', incomingDate: '01/03/2017',role:'Ejecutivo Comercial',area:'COMERCIAL',color:'#3EC6AC',av:'JR',sede:'Ica',zona:'Sur',photo:'img/team/jhon.jpg',roles:['Gestionar la cobertura comercial de la zona asignada.','Brindar atención y seguimiento a clientes.','Identificar nuevas oportunidades de negocio.','Cumplir metas de ventas establecidas.','Mantener actualizada la información de clientes.','Coordinar el cierre y seguimiento de contratos.']},
  piero:{name:'Piero Giuseppe Añanca Portillo', incomingDate: '18/07/2023',role:'Arquitecto de Proyectos',area:'ARQUITECTURA',color:'#1a86cc',av:'PA',sede:'Miraflores',photo:'img/team/piero.jpg',roles:['Desarrollar planos y propuestas técnicas.','Elaborar documentación arquitectónica.','Realizar levantamientos y análisis de información.','Verificar el cumplimiento de estándares de diseño.','Participar en reuniones técnicas con clientes.','Estructurar y consolidar presupuestos (ratios).']},
  diego:{name:'Diego Sebastián Morales Alarcón', incomingDate: '09/03/2026',role:'Arquitecto de Proyectos',area:'ARQUITECTURA',color:'#1a86cc',av:'DM',sede:'Miraflores',photo:'img/team/diego.jpg',roles:['Desarrollar planos y propuestas técnicas.','Elaborar documentación arquitectónica.','Realizar levantamientos y análisis de información.','Verificar el cumplimiento de estándares de diseño.','Participar en reuniones técnicas con clientes.','Estructurar y consolidar presupuestos (ratios).']},
  tiffany:{name:'Tiffany Nicole Ollero de la Cruz',incomingDate: '01/09/2025',role:'Arquitecta de Proyectos',area:'ARQUITECTURA',color:'#1a86cc',av:'TO',sede:'Miraflores',photo:'img/team/tiffany.jpg',roles:['Desarrollar planos y propuestas técnicas.','Elaborar documentación arquitectónica.','Realizar levantamientos y análisis de información.','Verificar el cumplimiento de estándares de diseño.','Participar en reuniones técnicas con clientes.','Estructurar y consolidar presupuestos (ratios).']},
  sebastian:{name:'Sebastián Alexander Flores Orosco', incomingDate: '21/08/2025',role:'Analista de Presupuestos',area:'ARQUITECTURA',color:'#1a86cc',av:'SF',sede:'Miraflores',photo:'img/team/sebastian.jpg',roles:['Estructurar y consolidar presupuestos detallados.','Analizar costos directos e indirectos.','Solicitar y evaluar cotizaciones de proveedores.','Elaborar reportes de costos.','Coordinar con áreas técnicas para validar información.','Apoyar en el análisis de rentabilidad de proyectos.']},
  practicante:{name:'Nuevo Colaborador', incomingDate: '03/09/2026', role:'Auxiliar de Arquitectura',area:'ARQUITECTURA',color:'#1a86cc',av:'NC',sede:'Miraflores',photo:'',roles:['Apoyar en el desarrollo de planos y propuestas técnicas.','Colaborar en la elaboración de documentación arquitectónica.','Realizar levantamientos y recopilación de información en campo.','Brindar soporte en la verificación de estándares de diseño.','Participar en reuniones técnicas de seguimiento de proyectos.']}
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
    + '<img src="'+p.photo+'" style="width:100%;height:100%;object-fit:cover;object-position:top" onerror="this.outerHTML=\'<div style=&quot;width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#fff;background:'+p.color+'&quot;>'+p.av+'</div>\'">'
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
    + '</div>';
  document.getElementById('orgModalContent').innerHTML = html;
  document.getElementById('orgModalOverlay').classList.add('open');
}

function closeOrgModal() {
  document.getElementById('orgModalOverlay').classList.remove('open');
}

