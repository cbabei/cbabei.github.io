import type { L10n } from '../i18n/ui';
import { jobs } from './experience';
import { certifications } from './extras';

/** Whole years since the first SAP job, so the hero stat stays current on every build. */
const firstStart = jobs.map((j) => j.start).sort()[0];
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
    en: 'Full-stack SAP developer, from frontend to backend, with AI more and more present in my day-to-day work. I like to understand every piece before I build, to find the best solution while always thinking first about the people who will use it.',
    es: 'Desarrollador SAP full stack, del frontend al backend, con la IA cada vez más presente en mi día a día. Me gusta entender bien cada pieza antes de construir para dar con la mejor solución, pensando siempre primero en quien la va a usar.',
  } satisfies L10n,
  stats: [
    { value: `${yearsInSap}+`, label: { en: 'years in SAP', es: 'años en SAP' } },
    { value: String(certifications.length), label: { en: 'SAP certifications', es: 'certificaciones SAP' } },
    { value: 'E2E', label: { en: 'from design to go-live', es: 'del diseño al go-live' } },
  ],
  about: {
    en: [
      'For me, development is not just about writing code that works. I truly care about the final product: every application should be clean, reliable and easy to use.',
      'My strength is seeing the whole picture. On the frontend, caring for the interface and the user experience; on the backend, building a clean, object-oriented architecture that is secure and performs well; and in between, connecting it all through well-designed APIs and services. Understanding how each layer fits together is what lets me make good decisions and find the best solution for every problem.',
    ],
    es: [
      'Para mí, desarrollar no es solo escribir código que funcione. Me importa de verdad el producto final: cada aplicación debe ser limpia, fiable y fácil de usar.',
      'Mi fuerte es ver el conjunto. En el front, cuidar la interfaz y la experiencia de usuario; en el back, montar una arquitectura ordenada, orientada a objetos, segura y con buen rendimiento; y entre medias, conectarlo todo con APIs y servicios bien pensados. Entender cómo encaja cada capa es lo que me permite tomar buenas decisiones y encontrar la mejor solución para cada problema.',
    ],
  } satisfies L10n<string[]>,
  pillars: [
    {
      icon: 'sparkles',
      title: { en: 'Product first', es: 'Producto primero' },
      text: { en: 'Clean, reliable apps people enjoy using.', es: 'Apps limpias y fiables que da gusto usar.' },
    },
    {
      icon: 'compass',
      title: { en: 'Big picture', es: 'Visión global' },
      text: { en: 'Architecture, UX and delivery, hand in hand.', es: 'Arquitectura, UX y entrega, de la mano.' },
    },
    {
      icon: 'book',
      title: { en: 'Always learning', es: 'Aprendizaje continuo' },
      text: {
        en: 'SAP BAIP, Joule, integrations, low-code and pro-code… and whatever comes next.',
        es: 'SAP BAIP, Joule, integraciones, low-code y pro-code… y lo que venga.',
      },
    },
    {
      icon: 'target',
      title: { en: 'CliftonStrengths', es: 'CliftonStrengths' },
      text: {
        en: 'Achiever · Ideation · Strategic · Learner · Analytical',
        es: 'Emprendedor · Idear · Estratégico · Estudioso · Analítico',
      },
      // Top 5 from Gallup's assessment; the story explains the top 10.
      more: 'strengths',
    },
  ],
} as const;

export const skillGroups: { title: L10n; items: string[] }[] = [
  { title: { en: 'Frontend', es: 'Frontend' }, items: ['SAPUI5', 'Fiori Elements', 'Fiori Launchpad', 'SAP Work Zone', 'JavaScript'] },
  { title: { en: 'Backend', es: 'Backend' }, items: ['ABAP OO', 'RAP', 'CDS', 'OData', 'SAP HANA'] },
  { title: { en: 'Cloud', es: 'Cloud' }, items: ['SAP BTP', 'S/4HANA', 'SAP Build'] },
  { title: { en: 'AI', es: 'IA' }, items: ['SAP Business AI', 'Joule Studio', 'AI Agents', 'MCP', 'AI-assisted development'] },
  { title: { en: 'Approach', es: 'Enfoque' }, items: ['Design Thinking', 'UX Design', 'Agile & Waterfall', 'Tech Lead', 'Solution Architecture'] },
];
