import { type Lang, localePath } from '../i18n/ui';
import { profile, site, skillGroups } from './profile';
import { certifications } from './extras';
import { education, jobs } from './experience';

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

function person(lang: Lang, image?: string) {
  const current = jobs.find((j) => j.end === null && j.engagement === 'employee');
  return {
    '@type': 'Person',
    '@id': personId,
    name: site.name,
    givenName: site.firstName,
    familyName: site.lastName,
    url: `${site.url}/`,
    image: image ?? `${site.url}/og-${lang}.png`,
    jobTitle: profile.jobTitle[lang],
    description: profile.tagline[lang],
    address: { '@type': 'PostalAddress', addressCountry: 'ES' },
    knowsLanguage: ['es', 'en', 'ro'],
    knowsAbout: [...new Set(skillGroups.flatMap((g) => g.items))],
    ...(current && { worksFor: { '@type': 'Organization', name: current.company } }),
    alumniOf: education.map((e) => ({ '@type': 'EducationalOrganization', name: e.school })),
    hasCredential: certifications.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: 'SAP' },
      ...(c.credly && { url: c.credly }),
    })),
    sameAs: [site.linkedin, site.sapCommunity, site.github].filter(Boolean),
  };
}

/** ProfilePage + Person + WebSite graph, valid for both the home and the story page. */
export function profileSchema(lang: Lang, page: string, name: string, description: string, image?: string) {
  const url = new URL(localePath(lang, page), site.url).href;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${site.url}/`,
        name: site.name,
        inLanguage: ['en', 'es'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#page`,
        url,
        name,
        description,
        inLanguage: lang,
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
        dateModified: new Date().toISOString().slice(0, 10),
      },
      person(lang, image),
    ],
  };
}
