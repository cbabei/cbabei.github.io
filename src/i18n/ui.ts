export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Text in both languages. Content files use this shape for every translatable field. */
export type L10n<T = string> = Record<Lang, T>;

export const ui = {
  en: {
    'meta.title': 'Cristian Babei – SAP Full-Stack Developer (Fiori, ABAP & AI)',
    'meta.description':
      'Cristian Babei, SAP full-stack developer based in Spain: Fiori, UI5, ABAP and AI. SAP certified, with experience in RAP, OData, SAP BAIP and UX.',
    'meta.story.title': 'My story – Cristian Babei, SAP Full-Stack Developer',
    'meta.story.description':
      'The long version: how I went from web development to leading SAP Fiori, ABAP and AI projects, learning all the way.',
    'skip': 'Skip to content',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.certifications': 'Certifications',
    'nav.recommendations': 'Recommendations',
    'nav.strengths': 'Strengths',
    'nav.beyond': 'Beyond code',
    'nav.story': 'My story',
    'nav.home': 'Home',
    'nav.primary': 'Main navigation',
    'nav.menu': 'Menu',
    'theme.toLight': 'Switch to light mode',
    'theme.toDark': 'Switch to dark mode',
    'theme.sun': 'Sun: click me to make it night',
    'theme.moon': 'Moon: click me to make it day',
    'theme.hint': 'click me',
    'lang.label': 'Language',
    'hero.greeting': 'Hi, I’m',
    'hero.cta.linkedin': 'Connect on LinkedIn',
    'hero.cta.story': 'Read my story',
    'about.title': 'About',
    'about.more': 'The long version',
    'skills.title': 'Technologies & methodologies',
    'skills.hint': 'What I work with day to day.',
    'exp.title': 'Experience',
    'exp.map': 'Career map',
    'exp.map.hint': 'Drag or scroll sideways',
    'exp.present': 'Present',
    'exp.expandAll': 'Expand all',
    'exp.collapseAll': 'Collapse all',
    'exp.employee': 'Full-time',
    'exp.freelance': 'Freelance',
    'cert.title': 'Certifications',
    'cert.lead':
      'I enjoy learning and really understanding how things work: that’s what lets me make better decisions. Certifications aren’t the goal: they give me more confidence that the solution I propose is the right one.',
    'cert.verify': 'Verify on Credly',
    'cert.issued': 'Issued',
    'reco.title': 'Recommendations',
    'reco.lead': 'What some of the people I’ve met throughout my career say about working with me, taken from LinkedIn.',
    'reco.featured':
      'Above all, there’s one line I feel defines me. It’s from 2018, when I was just starting out, and I think it has stayed with me to this day:',
    'reco.more': 'Read them all on LinkedIn',
    'reco.translated': 'Translated from Spanish',
    'strengths.title': 'Strengths',
    'strengths.lead':
      'My top 10 strengths according to Gallup’s CliftonStrengths assessment, which I took when I stepped into my new “Lead” role. I don’t take it literally, but it fits the way I work remarkably well.',
    'strengths.executing': 'Executing',
    'strengths.strategic': 'Strategic thinking',
    'strengths.relationship': 'Relationship building',
    'beyond.title': 'Beyond code',
    'beyond.lead':
      'I try to put energy and passion into everything I do, outside work too: free time is there to be enjoyed to the fullest.',
    'bambi.title': 'Meet Bambi',
    'bambi.text':
      'He joined the family in 2020. Andalusian podenco, slightly on the chubby side, and head of security at home. Scroll to the very bottom to play with him: chase rabbits and, now and then, give him a treat.',
    'bambi.gallery': 'Photos of Bambi',
    'bambi.enlarge': 'View larger',
    'lightbox.close': 'Close',
    'lightbox.prev': 'Previous photo',
    'lightbox.next': 'Next photo',
    'contact.title': 'Let’s talk',
    'contact.lead':
      'I live in Spain and have been working remotely for several years. The quickest way to reach me is LinkedIn: send me a message and let’s talk.',
    'contact.cta': 'Message me on LinkedIn',
    'game.label': 'Mini-game: help Bambi catch the rabbit',
    'game.prompt': 'Catch the rabbit! Drag it to Bambi',
    'game.caught': 'Bambi got it! (and let it go, of course)',
    'game.score': 'Caught',
    'game.rabbit': 'Rabbit. Drag it, or focus it and use the arrow keys.',
    'game.treat': 'Treat. Drag it to Bambi, or click it to give it to him.',
    'game.treatPrompt': 'A treat! Drag it to Bambi',
    'game.yum': 'Yum! Thank you!',
    'game.treats': 'Treats',
    'footer.rights': 'No cookies, no trackers.',
    'story.back': 'Back home',
    'story.toc': 'On this page',
    'notfound.title': 'Lost in the clouds',
    'notfound.text': 'This page doesn’t exist. Let’s get you back on solid ground.',
  },
  es: {
    'meta.title': 'Cristian Babei – Desarrollador SAP Full Stack (Fiori, ABAP e IA)',
    'meta.description':
      'Cristian Babei, desarrollador SAP full stack en España: Fiori, UI5, ABAP e IA. Certificado por SAP, con experiencia en RAP, OData, SAP BAIP y UX.',
    'meta.story.title': 'Mi historia – Cristian Babei, desarrollador SAP full stack',
    'meta.story.description':
      'La versión larga: cómo pasé del desarrollo web a liderar proyectos SAP de Fiori, ABAP e IA, sin dejar de aprender por el camino.',
    'skip': 'Saltar al contenido',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.certifications': 'Certificaciones',
    'nav.recommendations': 'Recomendaciones',
    'nav.strengths': 'Fortalezas',
    'nav.beyond': 'Más allá del código',
    'nav.story': 'Mi historia',
    'nav.home': 'Inicio',
    'nav.primary': 'Navegación principal',
    'nav.menu': 'Menú',
    'theme.toLight': 'Cambiar a modo claro',
    'theme.toDark': 'Cambiar a modo oscuro',
    'theme.sun': 'Sol: haz clic para que se haga de noche',
    'theme.moon': 'Luna: haz clic para que se haga de día',
    'theme.hint': 'haz clic',
    'lang.label': 'Idioma',
    'hero.greeting': 'Hola, soy',
    'hero.cta.linkedin': 'Conecta en LinkedIn',
    'hero.cta.story': 'Lee mi historia',
    'about.title': 'Sobre mí',
    'about.more': 'La versión larga',
    'skills.title': 'Tecnologías y metodologías',
    'skills.hint': 'Con lo que trabajo en el día a día.',
    'exp.title': 'Experiencia',
    'exp.map': 'Mapa de trayectoria',
    'exp.map.hint': 'Arrastra o desplázate en horizontal',
    'exp.present': 'Actualidad',
    'exp.expandAll': 'Expandir todo',
    'exp.collapseAll': 'Contraer todo',
    'exp.employee': 'Plantilla',
    'exp.freelance': 'Freelance',
    'cert.title': 'Certificaciones',
    'cert.lead':
      'Me gusta aprender y entender bien cómo funcionan las cosas: es lo que me permite tomar mejores decisiones. Las certificaciones no son el objetivo, sino tener más confianza en que la solución que propongo es la más acertada.',
    'cert.verify': 'Verificar en Credly',
    'cert.issued': 'Emitida',
    'reco.title': 'Recomendaciones',
    'reco.lead': 'Esto es lo que cuentan sobre cómo es trabajar conmigo algunas de las personas que he ido conociendo a lo largo de mi trayectoria, recogido de LinkedIn.',
    'reco.featured':
      'Sobre todo, hay una frase que considero que me define. Es de 2018, cuando justo empezaba, y creo que me ha acompañado hasta el día de hoy:',
    'reco.more': 'Léelas todas en LinkedIn',
    'reco.translated': 'Traducido del inglés',
    'strengths.title': 'Fortalezas',
    'strengths.lead':
      'Mis 10 principales fortalezas según el test CliftonStrengths de Gallup, que hice al asumir el nuevo cargo de «Lead». No me lo tomo al pie de la letra, pero encaja mucho con mi forma de trabajar.',
    'strengths.executing': 'Ejecución',
    'strengths.strategic': 'Pensamiento estratégico',
    'strengths.relationship': 'Construcción de relaciones',
    'beyond.title': 'Más allá del código',
    'beyond.lead':
      'Intento poner ganas y pasión en todo lo que hago, también fuera del trabajo: el tiempo libre se disfruta al máximo.',
    'bambi.title': 'Te presento a Bambi',
    'bambi.text':
      'Llegó a nuestra vida en 2020. Podenco andaluz, algo rellenito y jefe de seguridad de la casa. Si bajas hasta el final puedes jugar con él: perseguir conejos y, de vez en cuando, darle alguna chuche.',
    'bambi.gallery': 'Fotos de Bambi',
    'bambi.enlarge': 'Ver en grande',
    'lightbox.close': 'Cerrar',
    'lightbox.prev': 'Foto anterior',
    'lightbox.next': 'Foto siguiente',
    'contact.title': 'Hablemos',
    'contact.lead':
      'Vivo en España y llevo varios años trabajando en remoto. La forma más rápida de contactarme es LinkedIn: escríbeme y hablamos.',
    'contact.cta': 'Escríbeme en LinkedIn',
    'game.label': 'Minijuego: ayuda a Bambi a atrapar al conejo',
    'game.prompt': '¡Atrapa al conejo! Arrástralo hasta Bambi',
    'game.caught': '¡Bambi lo pilló! (y lo soltó, claro)',
    'game.score': 'Atrapados',
    'game.rabbit': 'Conejo. Arrástralo o selecciónalo y usa las flechas.',
    'game.treat': 'Chuche. Arrástrala hasta Bambi o haz clic para dársela.',
    'game.treatPrompt': '¡Una chuche! Arrástrala hasta Bambi',
    'game.yum': '¡Ñam! ¡Gracias!',
    'game.treats': 'Chuches',
    'footer.rights': 'Sin cookies ni rastreadores.',
    'story.back': 'Volver al inicio',
    'story.toc': 'En esta página',
    'notfound.title': 'Perdido entre las nubes',
    'notfound.text': 'Esta página no existe. Volvamos a tierra firme.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Path of a page in a given language. `page` is the language-neutral slug ('' = home). */
export function localePath(lang: Lang, page = ''): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${prefix}/${page ? `${page}/` : ''}`;
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'es' : 'en');

const monthFmt: Record<Lang, Intl.DateTimeFormat> = {
  en: new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' }),
  es: new Intl.DateTimeFormat('es', { month: 'short', year: 'numeric', timeZone: 'UTC' }),
};

/** '2025-12' → 'Dec 2025' / 'dic 2025' */
export function formatMonth(ym: string, lang: Lang): string {
  const [y, m] = ym.split('-').map(Number);
  return monthFmt[lang].format(new Date(Date.UTC(y, m - 1, 1)));
}
