/* Searchable, filterable catalog used by the pharmacy, lab and radiology pages.
   Data lives in js/data/<key>.js. Each page calls Catalog({...}) once. */
function Catalog(cfg) {
  var data = window.CODRY[cfg.key], items = data.items;
  var $ = function (id) { return document.getElementById(id); };
  var grid = $('catalogGrid'), count = $('catalogCount'), tabs = $('catalogTabs');
  var search = $('catalogSearch'), sort = $('catalogSort'), only = $('catalogOnly');
  var state = { cat: 'all', q: '', sort: 'default', only: false };

  var tone = function (s) { return s === 'in-stock' || s === 'available' ? 'ok' : s === 'out-of-stock' ? 'bad' : 'wait'; };
  var num = function (p) { return parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0; };
  var isOpen = function (i) { return i.status === 'in-stock' || i.status === 'available'; };

  function media(i) {
    if (i.img) return '<img src="' + i.img + '" alt="' + i.name + '" loading="lazy">';
    return '<div class="item-icon"><i class="fas ' + (i.icon || 'fa-notes-medical') + '"></i></div>';
  }
  function card(i, idx) {
    var meta = (i.details || []).map(function (d, n) {
      return '<li>' + d + '</li>';
    }).join('');
    var rx = i.rx ? '<span class="tag tag-rx"><i class="fas fa-file-prescription"></i> Prescription</span>' : '';
    var fast = i.fasting ? '<span class="tag tag-rx"><i class="fas fa-utensils"></i> Fasting</span>' : '';
    return '<article class="item-card" data-idx="' + idx + '">' +
      '<div class="item-media">' + media(i) + '</div><div class="item-body">' +
      '<div class="item-tags"><span class="tag">' + i.catLabel + '</span>' + rx + fast + '</div>' +
      '<h3>' + i.name + '</h3>' + (i.ar ? '<span class="item-ar" lang="ar">' + i.ar + '</span>' : '') +
      '<p>' + i.desc.replace(' Prescription required.', '') + '</p>' +
      (meta ? '<ul class="item-meta">' + meta + '</ul>' : '') +
      '<div class="item-foot"><span class="price">' + i.price + '<small> / ' + i.unit + '</small></span>' +
      '<span class="status status-' + tone(i.status) + '">' + i.statusLabel + '</span></div>' +
      '<button type="button" class="btn-item" data-act="' + idx + '">' + i.action + '</button></div></article>';
  }
  function render() {
    var q = state.q.toLowerCase();
    var list = items.map(function (i, n) { return { i: i, n: n }; }).filter(function (o) {
      var i = o.i;
      return (state.cat === 'all' || i.cat === state.cat) && (!state.only || isOpen(i)) &&
        (!q || (i.name + ' ' + i.ar + ' ' + i.desc + ' ' + i.catLabel).toLowerCase().indexOf(q) > -1);
    });
    if (state.sort === 'low') list.sort(function (a, b) { return num(a.i.price) - num(b.i.price); });
    if (state.sort === 'high') list.sort(function (a, b) { return num(b.i.price) - num(a.i.price); });
    if (state.sort === 'name') list.sort(function (a, b) { return a.i.name.localeCompare(b.i.name); });
    grid.innerHTML = list.length ? list.map(function (o) { return card(o.i, o.n); }).join('') :
      '<div class="empty-state"><i class="fas fa-magnifying-glass"></i><h3>No results</h3><p>Try a different word or clear the filters.</p>' +
      '<button type="button" class="btn-item" id="clearFilters">Clear filters</button></div>';
    count.textContent = list.length + ' of ' + items.length + ' shown';
  }
  function renderTabs() {
    tabs.innerHTML = data.categories.map(function (c) {
      var n = c.id === 'all' ? items.length : items.filter(function (i) { return i.cat === c.id; }).length;
      return '<button type="button" class="tab' + (c.id === state.cat ? ' is-active' : '') + '" data-cat="' + c.id +
        '" aria-pressed="' + (c.id === state.cat) + '"><i class="fas ' + c.icon + '"></i> ' + c.label + ' <b>' + n + '</b></button>';
    }).join('');
  }
  function reset() { state = { cat: 'all', q: '', sort: 'default', only: false }; search.value = ''; sort.value = 'default'; only.checked = false; renderTabs(); render(); }

  tabs.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cat]'); if (!b) return;
    state.cat = b.dataset.cat; renderTabs(); render();
  });
  search.addEventListener('input', function () { state.q = search.value.trim(); render(); });
  sort.addEventListener('change', function () { state.sort = sort.value; render(); });
  only.addEventListener('change', function () { state.only = only.checked; render(); });
  grid.addEventListener('click', function (e) {
    if (e.target.id === 'clearFilters') return reset();
    var b = e.target.closest('[data-act]'); if (!b) return;
    cfg.onAction(items[+b.dataset.act], b);
  });
  if (location.hash.indexOf('#cat-') === 0) state.cat = location.hash.slice(5);
  renderTabs(); render();
  return { setCategory: function (c) { state.cat = c; renderTabs(); render(); } };
}
