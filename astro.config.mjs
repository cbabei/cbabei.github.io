// @ts-check
import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Astro's CSP hashes the scripts it bundles but not `is:inline` ones (theme before first paint,
 * scroll restore on language switch). After the build, add their hashes to each page's policy and
 * move the policy to the top of <head> so it also covers the scripts that come before it.
 * @type {import('astro').AstroIntegration}
 */
const cspInlineScripts = {
  name: 'csp-inline-scripts',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      const files = (await readdir(root, { recursive: true })).filter((f) => f.endsWith('.html'));
      for (const file of files) {
        const path = `${root}/${file}`;
        let html = await readFile(path, 'utf8');
        const meta = html.match(/<meta http-equiv="content-security-policy" content="([^"]*)">/);
        if (!meta) throw new Error(`No CSP in ${file}`);
        let policy = meta[1];
        for (const [, attrs, body] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
          if (attrs.includes('src=') || attrs.includes('application/ld+json') || !body) continue;
          const hash = `'sha256-${createHash('sha256').update(body).digest('base64')}'`;
          if (!policy.includes(hash)) policy = policy.replace("script-src 'self'", `script-src 'self' ${hash}`);
        }
        html = html.replace(meta[0], '').replace('<meta charset="utf-8">', (m) => `${m}${meta[0].replace(meta[1], policy)}`);
        await writeFile(path, html);
      }
    },
  },
};

export default defineConfig({
  site: 'https://cristianbabei.com',
  trailingSlash: 'always',
  // Content Security Policy as a <meta> tag (GitHub Pages can't send headers): only this site's own
  // files, plus the hashes of its inline scripts and styles.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        // Vite inlines the smallest font subsets as data: URLs.
        "font-src 'self' data:",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
      // Components set a few style="" attributes (positions, colours), which hashes can't cover.
      styleDirective: { resources: ["'self'", { resource: "'unsafe-inline'", kind: 'attribute' }] },
    },
  },
  // Astro 7 defaults to 'jsx', which drops whitespace between inline tags.
  compressHTML: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
    cspInlineScripts,
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
