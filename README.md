# 2min2you
College capstone project. Theme-food delivery website.

(yh I know the website naming sense is shit.)

## Built so far (status as of 17‑Nov‑2025)

- **Pages:** `index.html` (home) plus dedicated category pages: `pizza.html`, `burger.html`, `beverage.html`, `tacos.html`, `garlic-bread.html`, `dessert.html`.
- **Styling:** central stylesheet `style.css` contains layout, color variables, responsive rules and components.
- **Craving quick-links:** a "What are you craving?" horizontal row with circular image icons that link to each category page. Icons use images from `assets/images/` and include hover, focus and active states.
- **Home product sections:** multiple horizontal `.scroll-container` carousels for Trending Pizzas, Burgers, Beverages, Tacos & Parcels, Garlic Breads, Desserts. Scrollbars are hidden (preserved scroll behavior).
- **Product cards:** cards use background images with a dark overlay for readability. Cards on category pages are shown in a responsive `.product-grid` (3 columns desktop, 2 columns ≤900px, 1 column ≤600px).
- **Square cards:** product cards use `aspect-ratio: 1/1` with a `min-height` fallback for consistent, squarer appearance.
- **Interactions & accessibility:**
	- Craving items are anchors (`<a>`) and keyboard-focusable.
	- Hover/active/focus effects added (lift, shadow, subtle scaling).
	- The currently viewed category page highlights its matching craving icon (reddish glow) via the `.crave-active` class.
- **Top navigation & search:** a simple `.topnav` with a styled search input and responsive behavior.

## Assets

- All product/section images live under `assets/images/`. Background classes in `style.css` reuse these images (e.g. `.pizza-margherita`, `.burger-classic`, `.dessert-butterscotch`).

## What's pending / suggestions

- **Verify image framing:** check each category page in a browser and tweak `background-position` per image if needed.
- **Accessibility improvements:** consider using `<img>` with `alt` text inside cards (instead of background images) for screen readers and SEO.
- **Product detail pages & cart logic:** product cards currently have an `Add +` button placeholder; no cart or detail pages implemented yet.
- **Testing:** cross-browser checks (especially for `aspect-ratio` and hidden scrollbar behavior) and mobile usability validation.

## How to view

- Open `index.html` (or any category page) in a browser (no server required for static files).

If you'd like, I can update this README further (add screenshots, testing notes, or a short development roadmap).


