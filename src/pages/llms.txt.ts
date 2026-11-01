import type { APIRoute } from 'astro';
import { formatMonth, localePath } from '../i18n/ui';
import { profile, site, skillGroups } from '../data/profile';
import { education, jobs } from '../data/experience';
import { certifications } from '../data/extras';

// /llms.txt (llmstxt.org): a plain summary for AI assistants, built from the same data as the site.
export const GET: APIRoute = () => {
  const url = (page = '', lang: 'en' | 'es' = 'en') => new URL(localePath(lang, page), site.url).href;
  const period = (start: string, end: string | null) => `${formatMonth(start, 'en')} – ${end ? formatMonth(end, 'en') : 'present'}`;

  const text = `# ${site.name}

> ${profile.jobTitle.en}: ${profile.role.en}. Based in Spain, working remotely. Contact through LinkedIn.

In his own words: “${profile.tagline.en}”

## Pages

- [Home](${url()}): about, skills, experience, certifications, recommendations and hobbies (Spanish: ${url('', 'es')})
- [My story](${url('about')}): the long version of his career and how he works (Spanish: ${url('about', 'es')})

## Profiles

- [LinkedIn](${site.linkedin})
- [SAP Community](${site.sapCommunity})
- [Credly (SAP certifications)](${site.credly})

## Skills

${skillGroups.map((g) => `- ${g.title.en}: ${g.items.join(', ')}`).join('\n')}

## Experience

${jobs
  .map(
    (j) =>
      `- ${j.role.en}, ${j.company} (${j.engagement}, ${period(j.start, j.end)})` +
      j.highlights.en.map((h) => `\n  - ${h}`).join(''),
  )
  .join('\n')}

## Certifications

${certifications.map((c) => `- [${c.name}](${c.credly}) (${c.year})`).join('\n')}

## Education

${education.map((e) => `- ${e.title.en}, ${e.school} (${e.years.replace(/\s/g, ' ')})`).join('\n')}

## Languages

Spanish, English, Romanian
`;

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
