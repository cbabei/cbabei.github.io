# cristianbabei.com

Personal website of Cristian Babei. Static site built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages with GitHub Actions.

## Local development

Requires Node.js 22.23+ (24 or 26 LTS recommended).

```bash
npm install
npm run dev       # http://localhost:4321 with hot reload
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run images    # regenerate og-*.png and apple-touch-icon.png
```

## Where the content lives

| What | File |
| --- | --- |
| UI texts (EN/ES) | `src/i18n/ui.ts` |
| Name, links, tagline, about, skills | `src/data/profile.ts` |
| Experience (type, focus areas) and education | `src/data/experience.ts` |
| Certifications, recommendations, hobbies, Bambi photos | `src/data/extras.ts` |
| Images (portrait, Bambi) | `src/assets/` (Astro optimises them to WebP at build time) |
| "My story" long version | `src/data/story/en.md`, `src/data/story/es.md` |

## URLs

- English: `/` and `/about/`
- Spanish: `/es/` and `/es/about/`

## Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repository settings, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**. The custom domain (`cristianbabei.com`) and "Enforce HTTPS" are kept in that same settings page; `public/CNAME` is included only as a fallback.
