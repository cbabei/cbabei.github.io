import type { L10n } from '../i18n/ui';
import { jobs } from './experience';
import { certifications } from './extras';

/** Whole years since the first SAP job (the earlier web job doesn't count), so the hero stat stays current on every build. */
const firstStart = jobs
  .filter((j) => j.id !== 'tst-2015')
  .map((j) => j.start)
  .sort()[0];
const [fy, fm] = firstStart.split('-').map(Number);
const now = new Date();
const yearsInSap = Math.floor((now.getFullYear() * 12 + now.getMonth() + 1 - (fy * 12 + fm)) / 12);

export const site = {
  url: 'https://cristianbabei.com',
  name: 'Cristian Babei',
  firstName: 'Cristian',
  lastName: 'Babei',
  linkedin: 'https://www.linkedin.com/in/cristian-babei',
  sapCommunity: 'https://community.sap.com/t5/user/viewprofilepage/user-id/39513',
  credly: 'https://www.credly.com/users/cristian-babei',
  // Extra profile for the Person schema (sameAs); left empty so it is not listed.
  github: '',
};

export const profile = {
  role: {
    en: 'Fiori · ABAP · UX/UI · AI',
    es: 'Fiori · ABAP · UX/UI · IA',
  } satisfies L10n,
  jobTitle: {
    en: 'Senior SAP Full-Stack Developer (Fiori & ABAP)',
    es: 'Desarrollador SAP Full Stack Senior (Fiori y ABAP)',
  } satisfies L10n,
  location: { en: 'Remote · Spain', es: 'Remoto · España' } satisfies L10n,
  tagline: {
    en: 'SAP full-stack developer, with AI more and more present in my day-to-day work. I like to understand every piece before I build, and I always think first about the people who will use it.',
    es: 'Desarrollador SAP full stack, con la IA cada vez más presente en mi día a día. Me gusta entender bien cada pieza antes de construir, y pienso siempre primero en quien la va a usar.',
  } satisfies L10n,
  stats: [
    { value: `${yearsInSap}+`, label: { en: 'years in SAP', es: 'años en SAP' } },
    { value: String(certifications.length), label: { en: 'certifications', es: 'certificaciones' } },
    // Non-breaking hyphen (U+2011), so "go-live" never splits across two lines.
    { value: 'E2E', label: { en: 'from design to go‑live', es: 'del diseño al go‑live' } },
  ],
  about: {
    en: [
      'The way I work changed the day a delivery driver told me he had to use my app while double-parked, with cars honking behind him. The app worked well, but I had never stopped to think about the situation he would be using it in. Since then, that’s the first thing I ask.',
      'In the SAP world, my biggest strength is seeing the whole picture: a careful interface and user experience on the frontend, a clean, high-performing backend, and secure, well-designed APIs and services. Understanding how every layer fits together is what lets me make the right call on each problem.',
    ],
    es: [
      'Mi forma de trabajar cambió el día que un repartidor me contó que tenía que usar mi app aparcado en doble fila, con los coches pitándole detrás. La app funcionaba bien, pero nunca me había parado a pensar en qué situación la iba a usar él. Desde entonces, es lo primero que me pregunto.',
      'En el mundo SAP, mi mayor fortaleza es ver el conjunto: una interfaz y una experiencia de usuario cuidadas en el front, un back ordenado y con buen rendimiento, y APIs y servicios seguros y bien pensados. Entender cómo encaja cada capa es lo que me permite acertar con cada problema.',
    ],
  } satisfies L10n<string[]>,
  pillars: [
    {
      icon: 'user',
      title: { en: 'User-centred', es: 'El usuario, en el centro' },
      text: {
        en: 'Designed around the people who will use it, not just the spec.',
        es: 'Pienso en quien lo va a usar, no solo en lo que se pide.',
      },
    },
    {
      icon: 'compass',
      title: { en: 'Big picture', es: 'Visión global' },
      text: { en: 'Frontend, backend and integrations as one solution.', es: 'Front, back e integraciones como una sola solución.' },
    },
    {
      icon: 'book',
      title: { en: 'Always learning', es: 'Aprendizaje continuo' },
      text: {
        en: 'SAP BAIP, Joule, integrations, low-code and pro-code… and whatever comes next.',
        es: 'SAP BAIP, Joule, integraciones, low-code y pro-code… y lo que venga.',
      },
    },
  ],
} as const;

export const skillGroups: { title: L10n; items: string[] }[] = [
  { title: { en: 'Frontend', es: 'Frontend' }, items: ['SAPUI5', 'Fiori Elements', 'Fiori Launchpad', 'SAP Work Zone', 'JavaScript'] },
  { title: { en: 'Backend', es: 'Backend' }, items: ['ABAP OO', 'RAP', 'CDS', 'OData', 'SAP HANA'] },
  { title: { en: 'Cloud', es: 'Cloud' }, items: ['SAP BAIP', 'S/4HANA', 'SAP Build', 'Integration Suite'] },
  { title: { en: 'AI', es: 'IA' }, items: ['SAP Business AI', 'Joule Studio', 'AI Agents', 'MCP', 'AI-assisted development'] },
  { title: { en: 'Approach', es: 'Enfoque' }, items: ['Design Thinking', 'UX Design', 'Tech Lead', 'Agile & Waterfall', 'Solution Architecture'] },
];
