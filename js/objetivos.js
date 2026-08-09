/* ============================================================
   OBJETIVOS 5 — Render + Navegación
   ============================================================ */
(function() {
  var statusStyles = {
    ok:   {bg:'#dcfce7', color:'#16a34a', dot:'#16a34a'},
    warn: {bg:'#fef9c3', color:'#ca8a04', dot:'#ca8a04'},
    crit: {bg:'#fee2e2', color:'#dc2626', dot:'#dc2626'}
  };

  function buildCard(o) {
    var ss = statusStyles[o.status] || statusStyles.warn;
    var fillPct = Math.min(o.pct, 100);
    var gradient = 'linear-gradient(90deg,' + o.colorDark + ',' + o.color + ')';
    var statsHtml = o.stats.slice(1, 4).map(function(s) {
      return '<div class="o5-stat">'
        + '<span class="o5-stat-val ' + (s.cls || '') + '">' + s.val + '</span>'
        + '<span class="o5-stat-lbl">' + s.lbl + '</span>'
        + '</div>';
    }).join('');
    return '<div class="obj5' + (o.status === 'ok' ? ' obj5-ok-glow' : '') + '" onclick="odOpen(' + o.id + ')">'
      + '<div class="o5h" style="background:' + o.colorBg + '">'
      + '<div class="o5h-top">'
      + '<span class="o5h-eye" style="color:' + o.colorDark + '">Objetivo ' + o.num + ' &middot; ' + o.cat + '</span>'
      + '<span class="o5f-chip" style="background:' + ss.bg + ';color:' + ss.color + '">'
      + '<span class="o5f-dot" style="background:' + ss.dot + '"></span>' + o.stxt + '</span>'
      + '</div>'
      + '<div class="o5h-row">'
      + '<div class="o5h-icon" style="background:' + o.color + '">' + o.icon + '</div>'
      + '<span class="o5h-name" style="color:' + o.colorDark + '">' + o.name + '</span>'
      + '</div></div>'
      + '<div class="o5-body">'
      + '<div class="o5-achv-row">'
      + '<div class="o5-achv-main">'
      + '<span class="o5-achv-val ' + (o.stats[0].cls || '') + '" style="color:' + o.color + '">' + o.stats[0].val + '</span>'
      + '<span class="o5-achv-lbl">' + o.stats[0].lbl + '</span>'
      + '</div>'
      + '<div class="o5-achv-meta">'
      + '<span class="o5-meta-val">' + o.metaLabel + '</span>'
      + '<span class="o5-meta-lbl">Meta</span>'
      + '</div></div>'
      + '<div class="o5-prog">'
      + '<div class="o5-prog-track">'
      + '<div class="o5-prog-fill" style="background:' + gradient + ';width:0" data-w="' + fillPct.toFixed(1) + '%"></div>'
      + '</div>'
      + '<div class="o5-prog-foot">'
      + '<span class="o5-prog-lbl">Progreso</span>'
      + '<span class="o5-prog-pct" style="color:' + o.color + '">' + o.pctLabel + '%</span>'
      + '</div></div>'
      + '<div class="o5-stats">' + statsHtml + '</div>'
      + '</div></div>';
  }

  document.getElementById('obj5Grid').innerHTML = OBJ5.map(function(o){ return buildCard(o); }).join('');

  setTimeout(function() {
    document.querySelectorAll('.o5-prog-fill').forEach(function(bar) {
      bar.style.width = bar.getAttribute('data-w');
    });
  }, 120);
})();

function paSmartToggle(card) {
  if (!card) return;
  card.classList.toggle('open');
}

function objTab(name, btn) {
  document.querySelectorAll('#objetivos .obj-tab').forEach(function(t) { t.classList.remove('active'); });
  document.querySelectorAll('#objetivos .obj-pane').forEach(function(p) { p.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  var pane = document.getElementById('objPane-' + name);
  if (pane) pane.classList.add('active');
  if (name === 'o2026') {
    setTimeout(function() {
      document.querySelectorAll('.o5-prog-fill').forEach(function(bar) {
        bar.style.transition = 'none';
        bar.style.width = '0';
        setTimeout(function() {
          bar.style.transition = 'width 1.1s cubic-bezier(.4,0,.2,1)';
          bar.style.width = bar.getAttribute('data-w');
        }, 60);
      });
    }, 80);
  }
}

function goObjTab(name) {
  var btn = document.querySelector('#objetivos .obj-tab[data-otab="' + name + '"]');
  objTab(name, btn);
}

function odOpen(id) {
  var el = document.getElementById('od-' + id);
  if (!el) return;
  document.querySelectorAll('.od').forEach(function(d) { d.classList.remove('open'); });
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(function() {
    el.querySelectorAll('.od-hero-prog-fill').forEach(function(bar) {
      bar.style.width = bar.getAttribute('data-w') || '0%';
    });
  }, 320);
}

function odClose() {
  document.querySelectorAll('.od').forEach(function(d) { d.classList.remove('open'); });
  document.body.style.overflow = '';
  document.querySelectorAll('.od-hero-prog-fill').forEach(function(bar) {
    bar.style.transition = 'none';
    bar.style.width = '0';
    setTimeout(function() { bar.style.transition = ''; }, 50);
  });
}

/* ── Objetivo 05 — ordenamiento interactivo de "Detalle completo" ── */
(function() {
  var MES_ORDER = {'Enero':1,'Febrero':2,'Marzo':3,'Abril':4,'Mayo':5,'Junio':6,'Julio':7,'Agosto':8,'Septiembre':9,'Octubre':10,'Noviembre':11,'Diciembre':12};
  var sortState = {};
  window.od5SortTable = function(key, colIndex, th) {
    var table = document.getElementById('od5DetailTbl');
    if (!table) return;
    var tbody = table.querySelector('tbody');
    var totalRow = tbody.querySelector('tr.od-total-row');
    var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr')).filter(function(r) { return r !== totalRow; });
    var dir = sortState[key] === 'asc' ? 'desc' : 'asc';
    sortState = {};
    sortState[key] = dir;
    rows.sort(function(a, b) {
      var av = a.children[colIndex].textContent.trim();
      var bv = b.children[colIndex].textContent.trim();
      var cmp = (key === 'importe')
        ? parseFloat(av.replace(/[^0-9.-]/g, '')) - parseFloat(bv.replace(/[^0-9.-]/g, ''))
        : (MES_ORDER[av] || 0) - (MES_ORDER[bv] || 0);
      return dir === 'asc' ? cmp : -cmp;
    });
    rows.forEach(function(r) { tbody.appendChild(r); });
    if (totalRow) tbody.appendChild(totalRow);
    table.querySelectorAll('th.sortable .sort-ic').forEach(function(ic) {
      ic.textContent = '⇅';
      ic.classList.remove('active');
    });
    var ic = th.querySelector('.sort-ic');
    if (ic) {
      ic.textContent = dir === 'asc' ? '▲' : '▼';
      ic.classList.add('active');
    }
  };
})();

function odTab(detailId, paneId) {
  var det = document.getElementById(detailId);
  if (!det) return;
  det.querySelectorAll('.od-tab').forEach(function(t) { t.classList.remove('active'); });
  det.querySelectorAll('.od-pane').forEach(function(p) { p.classList.remove('active'); });
  var pane = document.getElementById(paneId);
  if (pane) pane.classList.add('active');
  var btn = det.querySelector('[onclick*="' + paneId + '"]');
  if (btn) btn.classList.add('active');
}

