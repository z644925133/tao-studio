# 2026-05-24 16:43:59 Navigation, Works Columns, Detail Flow

## Goal
- Keep the full main sidebar menu visible on the home page.
- Change the works index from three columns to two columns with a quieter Neri&Hu-like spacing rhythm.
- Change project detail pages from tabbed panels to one continuous page: images first, then text, information, and related projects.

## Files
- `src/components/Nav.astro`
- `src/components/WorksList.astro`
- `src/components/ProjectDetail.astro`
- `src/styles/global.css`

## Notes
- Project detail navigation now uses same-page anchors.
- No extra dependency was added.

## Verification
- `npm run build` passed. Astro generated 26 static pages.
- Browser checked `http://localhost:4321/zh/`: home sidebar main menu links are all visible.
- Browser checked `http://localhost:4321/zh/works/` at `2560x1277`: works index renders exactly 2 columns with 6 visible items and no failed image resources.
- Browser checked `http://localhost:4321/zh/works/chengtuo-hotel/`: detail page has no tab buttons or hidden project panels; 15 images render first, then text, information, and related sections.
- Browser checked same-page anchor jump to `#project-text` and `#project-information`.
- Browser checked detail page at `390x844`: mobile top nav and sticky project anchor nav do not overlap the first image.

## Rollback
```powershell
git checkout -- src/components/Nav.astro src/components/WorksList.astro src/components/ProjectDetail.astro src/styles/global.css
Remove-Item -LiteralPath Change/20260524-164359-navigation-columns-detail-flow.md
```
