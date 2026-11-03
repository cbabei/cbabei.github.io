// Regenerates public/og-en.png, public/og-es.png and public/apple-touch-icon.png.
// Run with: npm run images
import sharp from 'sharp';

const copy = {
  en: { role: 'SAP Fiori · ABAP · UX/UI · AI', line: 'Senior SAP Full-Stack Developer · Remote, Spain' },
  es: { role: 'SAP Fiori · ABAP · UX/UI · IA', line: 'Desarrollador SAP Full Stack Senior · Remoto, España' },
};

const stars = Array.from({ length: 70 }, (_, i) => {
  const x = (i * 197) % 1200;
  const y = (i * 89) % 630;
  const r = i % 5 === 0 ? 2 : 1.2;
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${0.35 + (i % 4) * 0.15}"/>`;
}).join('');

const og = ({ role, line }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#040a17"/><stop offset="1" stop-color="#0d1a31"/>
    </linearGradient>
    <radialGradient id="moon" cx="38%" cy="32%" r="70%">
      <stop offset="0" stop-color="#fbfcf5"/><stop offset=".55" stop-color="#dfe5ee"/><stop offset="1" stop-color="#b5c0d2"/>
    </radialGradient>
    <radialGradient id="glow"><stop offset="0" stop-color="#8cb4ff" stop-opacity=".35"/><stop offset="1" stop-color="#8cb4ff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  ${stars}
  <circle cx="1010" cy="150" r="170" fill="url(#glow)"/>
  <circle cx="1010" cy="150" r="70" fill="url(#moon)"/>
  <circle cx="985" cy="170" r="11" fill="#97a5bd" opacity=".55"/>
  <circle cx="1035" cy="128" r="14" fill="#97a5bd" opacity=".45"/>
  <path d="M0 630V540c80-50 170-55 230-20 50-60 170-70 220-10 60-50 160-46 210 8 70-66 200-70 260-4 60-40 140-42 190 4 40-30 70-34 90-28v130z" fill="#16243f"/>
  <text x="90" y="250" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="30" fill="#64e1c9" letter-spacing="6">CRISTIANBABEI.COM</text>
  <text x="86" y="350" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="104" font-weight="800" fill="#e8eef8" letter-spacing="-3">Cristian Babei</text>
  <text x="90" y="420" font-family="Consolas, monospace" font-size="36" font-weight="700" fill="#64e1c9">${role}</text>
  <text x="90" y="476" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="30" fill="#9fb2cc">${line}</text>
</svg>`;

for (const [lang, c] of Object.entries(copy)) {
  await sharp(Buffer.from(og(c))).png({ compressionLevel: 9 }).toFile(`public/og-${lang}.png`);
}

// iOS rounds the corners itself, so the touch icon is the favicon on a full square.
const touchIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0a1426"/>
  <g fill="none" stroke="#64e1c9" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M30 23.2A11.5 11.5 0 1 0 30 40.8"/>
    <path d="M38 20.5v23h7.5a5.75 5.75 0 0 0 0-11.5H38h6.5a5.75 5.75 0 0 0 0-11.5z"/>
  </g>
</svg>`;
await sharp(Buffer.from(touchIcon)).png().toFile('public/apple-touch-icon.png');

console.log('Images written to public/');
