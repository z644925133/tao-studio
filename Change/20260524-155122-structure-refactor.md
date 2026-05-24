# Structure Refactor Log

Timestamp: 2026-05-24 15:51:22

## Purpose

Prepare the portfolio site for safer visual and content updates by fixing structural weak points found during review.

## Planned Changes

- Extract duplicated Chinese and English project detail markup into `src/components/ProjectDetail.astro`.
- Make `WorksList.astro` derive its two columns from `projects` instead of hard-coded indexes.
- Make scroll reveal progressive-enhancement friendly so content remains visible if JavaScript fails.
- Move contact page row layout into reusable CSS with a mobile fallback.
- Allow pages to pass more accurate SEO descriptions into `Layout.astro`.

## Rollback

Use Git to inspect or revert this change set:

```powershell
git diff
git restore src Change
```

If only one file needs rollback, restore that file directly with:

```powershell
git restore <path>
```

## Verification

Completed:

```powershell
npm run build
```

Result: success. Astro generated 20 static pages.

Browser smoke test:

- `http://localhost:4321/zh/`
- `http://localhost:4321/zh/works/`
- `http://localhost:4321/zh/works/chengtuo-hotel/`
- `http://localhost:4321/en/contact/`

Checked desktop and mobile viewports with Playwright. The dev server was stopped after verification.

## Files Changed

- `src/components/ProjectDetail.astro`
- `src/components/WorksList.astro`
- `src/layouts/Layout.astro`
- `src/pages/en/contact.astro`
- `src/pages/en/works/[slug].astro`
- `src/pages/zh/contact.astro`
- `src/pages/zh/works/[slug].astro`
- `src/styles/global.css`

## Notes

- `ProjectDetail.astro` now owns the shared project-detail rendering for both languages.
- Works listing columns are now derived from `projects`, so future project additions will render automatically.
- Reveal animations are progressive enhancement: content stays visible without JavaScript.
- Contact rows now collapse cleanly on mobile.
