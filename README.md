# Codry Medical Center

- `js/layout.js` – navbar and footer for ALL pages (edit links here once).
- `css/style.css` – global styles. `css/service-pages.css` – shared styles for pharmacy, lab, radiology, emergency.
- `js/catalog.js` – search / filter / sort engine. Data lives in `js/data/{pharmacy,lab,radiology}.js` (add an item = add one object).
- `js/forms.js` – demo forms (`data-demo`). Replace with a real backend call when ready.
- Pages: `pharmacy.html`, `lab.html`, `radiology.html`, `emergency.html` (renamed from medicai-test / radiolagy / emergency-ambulance).
- To use the shared layout on a page: `<script src="js/layout.js" data-part="nav"></script>` and `data-part="footer"`.
