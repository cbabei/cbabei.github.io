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
    original: 'es',
    quote: {
      es: 'Cristian es un profesional con empuje y altísima capacidad técnica. Su velocidad y agilidad de aprendizaje de nuevas tecnologías es impresionante. Con rapidez, se convierte en una pieza clave en cualquier equipo técnico llegando a ser un full-stack omnipresente e indispensable.',
      en: 'Cristian is a driven professional with outstanding technical ability. The speed and agility with which he learns new technologies is impressive. He quickly becomes a key piece of any technical team, an omnipresent and indispensable full-stack developer.',
    },
    role: { es: 'Partner en KPS', en: 'Partner at KPS' },
    relation: { es: 'Su responsable directo', en: 'Managed Cristian directly' },
    year: 2022,
  },
  {
    original: 'en',
    quote: {
      en: '[…] He is a great coworker with solid problem solving and good quality in UI5 and ABAP development. He covers complex business requirements in a simple and understandable way.',
      es: '[…] Es un gran compañero, con una sólida capacidad de resolución de problemas y gran calidad en desarrollo UI5 y ABAP. Resuelve requisitos de negocio complejos de forma simple y comprensible.',
    },
    role: { en: 'SAP Project Manager (SAP Champion)', es: 'SAP Project Manager (SAP Champion)' },
    relation: { en: 'Managed Cristian directly', es: 'Su responsable directo' },
    year: 2019,
  },
  {
    original: 'es',
    quote: {
      es: 'El mejor maestro que se puede tener. Gran profesional y gran compañero. Gracias a Cristian he crecido mucho a nivel profesional, ya que me ha brindado muchos conocimientos sobre SAPUI5 y SAP Fiori.',
      en: 'The best teacher you could have. A great professional and a great colleague. Thanks to Cristian I have grown a lot professionally; he shared a great deal of knowledge about SAPUI5 and SAP Fiori with me.',
    },
    role: { es: 'Tech Lead Fiori', en: 'Fiori Tech Lead' },
    relation: { es: 'Formado por Cristian', en: 'Mentored by Cristian' },
    year: 2021,
  },
  {
    original: 'en',
    quote: {
      en: '[…] His passion to work extensively and ability to connect and collaborate to deliver the best results distinguishes him from the rest. A great asset for any organisation.',
      es: '[…] Su pasión por el trabajo y su capacidad para conectar y colaborar para lograr los mejores resultados le distinguen del resto. Un gran activo para cualquier organización.',
    },
    role: { en: 'Senior SAP BTP & Basis Consultant', es: 'Consultor sénior SAP BTP y Basis' },
    relation: { en: 'Senior colleague', es: 'Compañero sénior' },
    year: 2022,
  },
  {
    original: 'es',
    quote: {
      es: 'Coincidí con él al comienzo de su carrera, que podría definir como meteórica, ya que desde un inicio demostró ser una persona implicada y despuntó rápidamente por su excelente capacidad para adaptarse a cualquier nuevo reto y llevarlo a buen puerto. […] Cualquiera con la posibilidad de tenerlo en su equipo tendría suerte, pues Cristian nunca defrauda.',
      en: 'I worked with him at the start of a career I would call meteoric: from the very beginning he showed real commitment and quickly stood out for his excellent ability to adapt to any new challenge and see it through. […] Anyone who gets the chance to have him on their team would be lucky, because Cristian never disappoints.',
    },
    role: { es: 'SAP Project Manager', en: 'SAP Project Manager' },
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
      en: 'Married to Anamar, with a dog called Bambi (meet him below). We love to travel and enjoy a good meal together.',
      es: 'Casado con Anamar y con un perro que se llama Bambi (te lo presento más abajo). Nos encanta viajar y disfrutar juntos de una buena comida.',
    },
  },
  {
    icon: 'padel',
    title: { en: 'Padel', es: 'Pádel' },
    text: {
      en: 'At least one match a week, with friends or meeting new people.',
      es: 'Mínimo un partido por semana, con amigos o conociendo gente nueva.',
    },
  },
  {
    icon: 'gamepad',
    title: { en: 'Gaming', es: 'Videojuegos' },
    text: {
      en: 'One of my oldest passions. I’ve always loved RPGs, strategy games, roguelikes and soulslikes such as Dark Souls.',
      es: 'Una de mis pasiones más antiguas. Siempre me han encantado los juegos de rol, de estrategia, los roguelikes y los soulslike como Dark Souls.',
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
