(function () {
  const searchInput = document.getElementById('catalog-search');
  const categorySelect = document.getElementById('catalog-category');
  const technologySelect = document.getElementById('catalog-technology');
  const availabilitySelect = document.getElementById('catalog-availability');
  const statusEl = document.getElementById('catalog-status');
  const resultsEl = document.getElementById('catalog-results');

  if (!searchInput || !categorySelect || !technologySelect || !availabilitySelect || !statusEl || !resultsEl) {
    return;
  }

  /** @type {Array<Record<string, unknown>>} */
  let records = [];

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function categorySlug(label) {
    return String(label ?? '')
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function technologySlug(label) {
    return String(label ?? '')
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function formatSlugLabel(slug) {
    return String(slug ?? '')
      .split('-')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  function fillSelect(select, values) {
    for (const value of values) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = formatSlugLabel(value);
      select.appendChild(option);
    }
  }

  function applyQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const technology = params.get('technology');
    if (category) categorySelect.value = category;
    if (technology) technologySelect.value = technology;
    if (params.get('availability') === 'data_only') availabilitySelect.value = 'data_only';
    if (params.get('q')) searchInput.value = params.get('q') ?? '';
  }

  function matchesFilters(record) {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const technology = technologySelect.value;
    const availability = availabilitySelect.value;

    if (category && categorySlug(record.category) !== category) return false;
    if (technology && technologySlug(record.technology) !== technology) return false;
    if (availability === 'html' && !record.has_static_page) return false;
    if (availability === 'data_only' && record.has_static_page) return false;

    if (!query) return true;
    const haystack = String(
      record.search_text ||
        `${record.title} ${record.description} ${record.error_signature || ''} ${record.category} ${record.technology}`
    ).toLowerCase();
    return haystack.includes(query);
  }

  function renderResults() {
    const filtered = records.filter(matchesFilters).slice(0, 100);
    statusEl.textContent = `${filtered.length} record${filtered.length === 1 ? '' : 's'} shown${
      records.length ? ` of ${records.length} loaded` : ''
    }.`;

    if (filtered.length === 0) {
      resultsEl.innerHTML = '<p>No records match the current filters.</p>';
      return;
    }

    resultsEl.innerHTML = filtered
      .map((record) => {
        const badge = record.has_static_page
          ? '<span class="badge badge-html">Full guide available</span>'
          : '<span class="badge badge-data">Data index record</span>';
        const detailPath =
          record.has_static_page && record.url
            ? String(record.url).replace('https://dev-error-db.com', '')
            : null;
        const title = detailPath
          ? `<h2><a href="${escapeHtml(detailPath)}">${escapeHtml(record.title)}</a></h2>`
          : `<h2>${escapeHtml(record.title)}</h2>`;
        const signature = record.error_signature ? `<code>${escapeHtml(record.error_signature)}</code>` : '';
        const hubLink = record.category
          ? `<p><a href="/categories/${escapeHtml(categorySlug(record.category))}/">View ${escapeHtml(record.category)} hub</a></p>`
          : '';
        const updated = record.updated_at ? `<span>Updated ${escapeHtml(record.updated_at)}</span>` : '';
        const evidence = `<span>${escapeHtml(record.evidence_status)} · ${Number(record.source_count || 0)} source${
          Number(record.source_count || 0) === 1 ? '' : 's'
        }</span>`;
        const dataOnlyNote = record.has_static_page
          ? ''
          : '<p class="muted-note">Data index record — full guide not generated yet. Use the category hub for related troubleshooting context.</p>';

        return `<article class="card">${badge}<div class="meta-row"><span>${escapeHtml(record.category)}</span><span>${escapeHtml(record.technology)}</span>${updated}${evidence}</div>${title}<p>${escapeHtml(record.description)}</p>${signature}${hubLink}${dataOnlyNote}</article>`;
      })
      .join('');
  }

  async function loadShard(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}`);
    const payload = await response.json();
    return Array.isArray(payload.records) ? payload.records : [];
  }

  async function init() {
    try {
      const manifestResponse = await fetch('/data/errors/manifest.json');
      if (!manifestResponse.ok) throw new Error('manifest.json unavailable');
      const manifest = await manifestResponse.json();

      fillSelect(categorySelect, manifest.categories || []);
      fillSelect(technologySelect, manifest.technologies || []);
      applyQueryParams();

      const shardPaths = (manifest.shards || []).map((shard) => shard.path);
      const chunks = await Promise.all(shardPaths.map((path) => loadShard(path)));
      records = chunks.flat();

      statusEl.textContent = `Loaded ${records.length} public catalog record${records.length === 1 ? '' : 's'}.`;
      renderResults();
    } catch (error) {
      statusEl.textContent = `Catalog load failed: ${error instanceof Error ? error.message : 'unknown error'}`;
      resultsEl.innerHTML = '<p>Unable to load the JSON catalog. Try again after the site build completes.</p>';
    }
  }

  for (const element of [searchInput, categorySelect, technologySelect, availabilitySelect]) {
    element.addEventListener('input', renderResults);
    element.addEventListener('change', renderResults);
  }

  init();
})();
