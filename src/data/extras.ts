import type { ImageMetadata } from 'astro';
import type { L10n } from '../i18n/ui';
import bambiWall from '../assets/bambi/wall.jpg';
import bambiRiver from '../assets/bambi/river.jpg';
import bambiBoardwalk from '../assets/bambi/boardwalk.jpg';
import bambiTreat from '../assets/bambi/treat.jpg';

export interface Certification {
  name: string;
  short: string;
  area: L10n;
  year: number;
  credly: string;
  /** Picks the icon and colour of the card. */
  category: 'dev' | 'integration' | 'admin' | 'ai' | 'ux';
}

const credly = (id: string) => `https://www.credly.com/badges/${id}`;

// Source: public Credly profile (credly.com/users/cristian-babei). Newest first, duplicates removed.
export const certifications: Certification[] = [
  {
    name: 'SAP Certified – Joule Studio Developer',
    short: 'Joule Studio Developer',
    area: { en: 'AI', es: 'IA' },
    year: 2026,
    credly: credly('9538bec3-ef70-4c3d-a5c5-26cfa9fcea61'),
    category: 'ai',
  },
  {
    name: 'SAP Certified – SAP Fiori Application Developer',
    short: 'Fiori Application Developer',
    area: { en: 'Development', es: 'Desarrollo' },
    year: 2026,
    credly: credly('6023e42e-8f18-462b-8ce9-d5d518f3745d'),
    category: 'dev',
  },
  {
    name: 'SAP Certified – Integration Developer',
    short: 'Integration Developer',
    area: { en: 'Integration', es: 'Integración' },
    year: 2026,
    credly: credly('b59f063e-2189-44e6-afc8-283ed727294f'),
    category: 'integration',
  },
  {
    name: 'SAP Certified – SAP Fiori System Administration',
    short: 'Fiori System Administration',
    area: { en: 'Administration', es: 'Administración' },
    year: 2026,
    credly: credly('1bd5a98f-5bf2-4468-b9a1-9b099a025752'),
    category: 'admin',
  },
  {
    name: 'SAP Certified – SAP Business AI Platform Administrator',
    short: 'Business AI Platform Administrator',
    area: { en: 'Administration', es: 'Administración' },
    year: 2026,
    credly: credly('f9087a62-3e85-4dcf-abe7-3c77d07f08b3'),
    category: 'admin',
  },
  {
    name: 'SAP Certified – SAP Build Developer',
    short: 'SAP Build Developer',
    area: { en: 'Development', es: 'Desarrollo' },
    year: 2026,
    credly: credly('30d9d8d6-b42f-4bfb-90b3-04ce36ea79a5'),
    category: 'dev',
  },
  {
    name: 'SAP Certified – SAP Generative AI Developer',
    short: 'Generative AI Developer',
    area: { en: 'AI', es: 'IA' },
    year: 2026,
    credly: credly('43aaece0-7300-4fc3-a0c1-43296fbfdcd8'),
    category: 'ai',
  },
  {
    name: 'SAP Certified Associate – Design Thinking',
    short: 'Design Thinking',
    area: { en: 'UX & Methods', es: 'UX y métodos' },
    year: 2022,
    credly: credly('aa72b9b8-aef3-47d2-953b-369ce23e0963'),
    category: 'ux',
  },
];

export interface Recommendation {
  /** Language the author wrote it in; the other language is our translation. */
  original: 'en' | 'es';
  quote: L10n;
  role: L10n;
  relation: L10n;
  year: number;
}

// From LinkedIn, shown without names: role + relationship, with a link to the originals.
export const featuredQuote: Recommendation = {
  original: 'es',
  quote: {
    es: 'Es un programador con muchos recursos. Hace sencillas las cosas difíciles.',
    en: 'A very resourceful developer. He makes difficult things simple.',
  },
  role: { es: 'Gerente', en: 'Manager' },
  relation: { es: 'Compañero sénior', en: 'Senior colleague' },
  year: 2018,
};

export const recommendations: Recommendation[] = [
  {
    original: 'en',
    quote: {
      en: '[…] Cristian is really good at elaborating ideas of user interfaces to optimize both usability and business model behind. He has a good sense of understanding business logic and is rapid in development tasks. I recommend Cristian for similar work where Fiori development is in focus.',
      es: '[…] Cristian es muy bueno elaborando ideas de interfaz de usuario que optimizan tanto la usabilidad como el modelo de negocio que hay detrás. Entiende muy bien la lógica de negocio y es rápido en las tareas de desarrollo. Recomiendo a Cristian para trabajos similares centrados en el desarrollo Fiori.',
    },
    role: { en: 'IT Manager & Senior Business Analyst', es: 'IT Manager y Senior Business Analyst' },
    relation: { en: 'Client side, different company', es: 'Lado cliente, otra empresa' },
    year: 2022,
  },
  {
    original: 'en',
    quote: {
      en: 'I highly recommend Cristian. He is a great coworker with solid problem solving and good quality in UI5 and ABAP development. He covers complex business requirements in a simple and understandable way.',
      es: 'Recomiendo totalmente a Cristian. Es un gran compañero, con una sólida capacidad de resolución de problemas y gran calidad en desarrollo UI5 y ABAP. Resuelve requisitos de negocio complejos de forma simple y comprensible.',
    },
    role: { en: 'SAP Project Manager (SAP Champion)', es: 'SAP Project Manager (SAP Champion)' },
    relation: { en: 'Managed Cristian directly', es: 'Su responsable directo' },
    year: 2019,
  },
  {
    original: 'es',
    quote: {
      es: 'Cristian es un profesional con empuje y altísima capacidad técnica. Su velocidad y agilidad de aprendizaje de nuevas tecnologías es impresionante. Con rapidez, se convierte en una pieza clave en cualquier equipo técnico llegando a ser un full-stack omnipresente e indispensable.',
      en: 'Cristian is a driven professional with outstanding technical ability. The speed and agility with which he learns new technologies is impressive. He quickly becomes a key piece of any technical team, an omnipresent and indispensable full-stack developer.',
    },
    role: { es: 'Partner en KPS', en: 'Partner at KPS' },
    relation: { es: 'Su responsable directo', en: 'Managed Cristian directly' },
    year: 2022,
  },
];

export const bambiPhotos: { src: ImageMetadata; alt: L10n; caption: L10n }[] = [
  {
    src: bambiWall,
    alt: { en: 'Bambi posing in the sun in front of a stone wall', es: 'Bambi posando al sol delante de un muro de piedra' },
    caption: { en: 'Striking a pose', es: 'Posando' },
  },
  {
    src: bambiRiver,
    alt: { en: 'Bambi lying in a shallow river', es: 'Bambi tumbado en un río poco profundo' },
    caption: { en: 'Spa day', es: 'Día de spa' },
  },
  {
    src: bambiBoardwalk,
    alt: { en: 'Bambi standing on a wooden boardwalk', es: 'Bambi de pie en una pasarela de madera' },
    caption: { en: 'On patrol', es: 'De patrulla' },
  },
  {
    src: bambiTreat,
    alt: { en: 'Bambi pressing his nose against the camera at sunset', es: 'Bambi pegando el hocico a la cámara al atardecer' },
    caption: { en: 'Treat, please', es: '¿Premio?' },
  },
];

export interface Hobby {
  icon: 'heart' | 'padel' | 'gamepad' | 'book';
  title: L10n;
  text: L10n;
}

export const hobbies: Hobby[] = [
  {
    icon: 'heart',
    title: { en: 'Family', es: 'Familia' },
    text: {
      en: 'Married, with a dog called Bambi (meet him below). We love to travel and enjoy a good meal together.',
      es: 'Casado y con un perro que se llama Bambi (te lo presento más abajo). Nos encanta viajar y disfrutar juntos de una buena comida.',
    },
  },
  {
    icon: 'padel',
    title: { en: 'Padel', es: 'Pádel' },
    text: {
      en: 'I try to play at least one match a week, with friends or meeting new people.',
      es: 'Intento jugar mínimo un partido por semana, con amigos o conociendo gente nueva.',
    },
  },
  {
    icon: 'gamepad',
    title: { en: 'Gaming', es: 'Videojuegos' },
    text: {
      en: 'One of my oldest passions. I’ve always loved RPGs, strategy games, roguelikes and soulslikes such as Dark Souls.',
      es: 'Una de mis pasiones más antiguas. Siempre me han encantado los juegos de rol, de estrategia, los roguelikes y los soulslikes como Dark Souls.',
    },
  },
  {
    icon: 'book',
    title: { en: 'Reading', es: 'Lectura' },
    text: {
      en: 'Classic books of adventure, fantasy and mystery. And Asian comics too, like manga and manhua.',
      es: 'Libros de los de toda la vida, de aventuras, fantasía y misterio. Y también cómic asiático, como el manga o el manhua.',
    },
  },
];

export interface Strength {
  icon: 'rocket' | 'lightbulb' | 'route' | 'graduation' | 'search' | 'user' | 'shield' | 'wrench' | 'scale' | 'grid';
  /** CliftonStrengths domain: picks the colour of the card. */
  domain: 'executing' | 'strategic' | 'relationship';
  name: L10n;
  text: L10n;
}

// Top 10 of Gallup's CliftonStrengths assessment, in his own words (names as Gallup gives them in each language).
export const strengths: Strength[] = [
  {
    icon: 'rocket',
    domain: 'executing',
    name: { en: 'Achiever', es: 'Emprendedor' },
    text: {
      en: 'I need to feel I’m making progress. I enjoy getting things done, and finishing a project gives me energy for the next one.',
      es: 'Necesito sentir que avanzo. Disfruto cerrando tareas, y terminar un proyecto me da energía para el siguiente.',
    },
  },
  {
    icon: 'lightbulb',
    domain: 'strategic',
    name: { en: 'Ideation', es: 'Idear' },
    text: {
      en: 'I love ideas and connecting things that seem unrelated at first. A good brainstorming session is one of my favourite parts of the job.',
      es: 'Me encantan las ideas y conectar cosas que a primera vista no tienen relación. Una buena lluvia de ideas es de mis partes favoritas del trabajo.',
    },
  },
  {
    icon: 'route',
    domain: 'strategic',
    name: { en: 'Strategic', es: 'Estratégico' },
    text: {
      en: 'Faced with a problem, I quickly see several paths and pick the one that works best. That’s why I almost always have a plan B (and a C).',
      es: 'Ante un problema veo enseguida varios caminos y me quedo con el que mejor funciona. Por eso casi siempre tengo un plan B (y un C).',
    },
  },
  {
    icon: 'graduation',
    domain: 'strategic',
    name: { en: 'Learner', es: 'Estudioso' },
    text: {
      en: 'Learning motivates me as much as the result. That’s how I learned Fiori in my free time, and how I keep going with AI today.',
      es: 'Aprender me motiva tanto como el resultado. Así aprendí Fiori en mi tiempo libre, y así sigo hoy con la IA.',
    },
  },
  {
    icon: 'search',
    domain: 'strategic',
    name: { en: 'Analytical', es: 'Analítico' },
    text: {
      en: 'I want to understand the why behind things. Before I build, I like to be clear on every piece and how they fit together.',
      es: 'Quiero entender el porqué de las cosas. Antes de construir, me gusta tener claras todas las piezas y cómo encajan.',
    },
  },
  {
    icon: 'user',
    domain: 'relationship',
    name: { en: 'Individualization', es: 'Individualizar' },
    text: {
      en: 'I notice what makes each person unique: what they’re good at, what motivates them and how they work best. It’s exactly what helps me most as a lead.',
      es: 'Me fijo en lo que hace única a cada persona: qué se le da bien, qué le motiva y cómo trabaja mejor. Es justo lo que más me ayuda como lead.',
    },
  },
  {
    icon: 'shield',
    domain: 'executing',
    name: { en: 'Responsibility', es: 'Responsabilidad' },
    text: {
      en: 'If I commit to something, I see it through. Honesty and trust matter a lot to me.',
      es: 'Si me comprometo con algo, lo saco adelante. La honestidad y la confianza son muy importantes para mí.',
    },
  },
  {
    icon: 'wrench',
    domain: 'executing',
    name: { en: 'Restorative', es: 'Restaurador' },
    text: {
      en: 'I like finding what’s wrong and fixing it. A tricky issue hooks me more than it stresses me.',
      es: 'Me gusta encontrar qué falla y arreglarlo. Una incidencia complicada me engancha más de lo que me agobia.',
    },
  },
  {
    icon: 'scale',
    domain: 'executing',
    name: { en: 'Deliberative', es: 'Prudente' },
    text: {
      en: 'I take decisions seriously. Before I jump in, I think about the risks and what could go wrong.',
      es: 'Me tomo las decisiones en serio. Antes de lanzarme, pienso en los riesgos y en lo que puede salir mal.',
    },
  },
  {
    icon: 'grid',
    domain: 'executing',
    name: { en: 'Arranger', es: 'Organizador' },
    text: {
      en: 'I enjoy organising people and resources so everything fits, and I adapt when something changes along the way.',
      es: 'Disfruto organizando personas y recursos para que todo encaje, y me adapto cuando algo cambia por el camino.',
    },
  },
];
