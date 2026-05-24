# Neri&Hu-Inspired Redesign Log

Timestamp: 2026-05-24 16:21:11

## Purpose

Move the Tao Studio portfolio closer to the spatial logic of `https://neriandhu.com/en` while retaining Tao Studio content, imagery, and branding.

## Planned Changes

- Tune the fixed navigation and works sub-navigation.
- Rework the home image frame to sit closer to the Neri&Hu right-weighted composition.
- Rebuild the works index as a loose, multi-column staggered field with category routes.
- Rebuild project detail pages with a left-lower section menu and right-side content switching.

## Rollback

```powershell
git diff
git restore src Change
```

For a narrower rollback, restore individual files listed in this log.

## Verification

Completed:

```powershell
npm run build
```

Result: success. Astro generated 26 static pages, including category routes.

Local route checks returned HTTP 200:

- `/zh/`
- `/en/`
- `/zh/works/`
- `/en/works/`
- `/zh/works/category/hospitality/`
- `/en/works/category/office-retail/`
- `/zh/works/chengtuo-hotel/`
- `/en/works/chengtuo-hotel/`
- `/zh/contact/`

Browser smoke checks:

- Wide homepage at `2560x1277`: right-weighted image field aligns closely with the reference proportions.
- Works index: three staggered columns render with fixed sidebar and category subnav.
- Project detail: section buttons switch between Images/Text/Information/Related.
- Mobile detail at `390x844`: top navigation, sticky project switcher, and image stack remain readable.

Image path check: `IMAGE_PATHS_OK`.

## Files Changed

- `src/components/HomeSlideshow.astro`
- `src/components/Nav.astro`
- `src/components/WorksList.astro`
- `src/components/ProjectDetail.astro`
- `src/data/projects.ts`
- `src/layouts/Layout.astro`
- `src/pages/*/works/index.astro`
- `src/pages/*/works/category/[category].astro`
- `src/styles/global.css`
