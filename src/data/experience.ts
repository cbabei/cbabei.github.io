import type { L10n } from '../i18n/ui';

/** What makes a role stand out. Used by the experience filters (labels live in ui.ts as focus.*). */
export const focusAreas = ['lead', 'cloud', 's4', 'ux', 'innovation', 'intl'] as const;
export type Focus = (typeof focusAreas)[number];

export interface Job {
  id: string;
  company: string;
  role: L10n;
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM', or null while ongoing */
  end: string | null;
  location: L10n;
  engagement: 'employee' | 'freelance';
  focus: Focus[];
  highlights: L10n<string[]>;
  /** Must match names used in skillGroups to make the skill chips filter this list. */
  tech: string[];
}

const barcelona: L10n = { en: 'Barcelona, Spain', es: 'Barcelona, España' };
const seniorUI5: L10n = {
  en: 'UI5 / UX / ABAP OO Senior Consultant',
  es: 'Consultor Senior UI5 / UX / ABAP OO',
};

export const jobs: Job[] = [
  {
    id: 'zoi-2025',
    company: 'Zoi',
    role: { en: 'UI5 & ABAP Senior Consultant', es: 'Consultor Senior UI5 y ABAP' },
    start: '2025-12',
    end: null,
    location: barcelona,
    engagement: 'employee',
    focus: ['lead', 'cloud', 'innovation', 'ux'],
    highlights: {
      en: [
        'Became a “Lead” in November 2026, a role that consists of supporting colleagues’ personal and professional growth through coaching and mentoring.',
        'Developing advanced frontend solutions (SAPUI5, ABAP OO) while championing modern UX/UI best practices across all deliveries.',
        'Driving technical alignment and project organisation, bridging architecture design and execution.',
        'Researching and implementing Generative AI solutions to optimise workflows and boost development efficiency.',
        'Certifying across SAP BTP: BTP/Fiori Administration, SAP Build, Integration Suite, SAP GenAI and Joule Studio.',
      ],
      es: [
        'Nombrado «Lead» en noviembre de 2026, un rol que consiste en acompañar a compañeros en su crecimiento personal y profesional con coaching y tutorías.',
        'Desarrollo de soluciones frontend avanzadas (SAPUI5, ABAP OO) impulsando buenas prácticas de UX/UI en todas las entregas.',
        'Alineación técnica y organización de proyectos, conectando el diseño de arquitectura con la ejecución.',
        'Investigación e implantación de soluciones de IA generativa para optimizar flujos y ganar eficiencia en el desarrollo.',
        'Certificaciones en SAP BTP: administración BTP/Fiori, SAP Build, Integration Suite, SAP GenAI y Joule Studio.',
      ],
    },
    tech: ['SAPUI5', 'ABAP OO', 'SAP BTP', 'SAP Build', 'GenAI', 'Tech Lead'],
  },
  {
    id: 'code10-2024',
    engagement: 'freelance',
    focus: ['lead', 'cloud', 'ux'],
    company: 'CODE10',
    role: { en: 'UI5 & UX Expert', es: 'Experto UI5 y UX' },
    start: '2024-02',
    end: '2025-01',
    location: barcelona,
    highlights: {
      en: [
        'Go-to expert for SAPUI5/Fiori in complex cloud environments, designing scalable application architectures.',
        'Supervised project execution and set development best practices across the full lifecycle.',
      ],
      es: [
        'Referente en SAPUI5/Fiori en entornos cloud complejos, diseñando arquitecturas de aplicación escalables.',
        'Supervisión de la ejecución y definición de buenas prácticas de desarrollo en todo el ciclo de vida.',
      ],
    },
    tech: ['SAPUI5', 'Fiori Elements', 'SAP BTP', 'Tech Lead'],
  },
  {
    id: 'zoi-2023',
    engagement: 'freelance',
    focus: ['lead', 'ux'],
    company: 'Zoi',
    role: { en: 'Fiori Senior Expert', es: 'Experto Senior Fiori' },
    start: '2023-04',
    end: '2024-01',
    location: barcelona,
    highlights: {
      en: [
        'Led full-lifecycle development of high-performance Fiori apps with SAPUI5, OData and ABAP OO.',
        'Managed Fiori Launchpad, role-based access and custom branding, validating readiness for upgrades.',
      ],
      es: [
        'Desarrollo completo de apps Fiori de alto rendimiento con SAPUI5, OData y ABAP OO.',
        'Gestión del Fiori Launchpad, accesos por rol y branding, validando la preparación para upgrades.',
      ],
    },
    tech: ['SAPUI5', 'OData', 'ABAP OO', 'Fiori Launchpad'],
  },
  {
    id: 'kps-2020',
    engagement: 'freelance',
    focus: ['cloud', 's4', 'ux'],
    company: 'KPS Iberia',
    role: seniorUI5,
    start: '2020-07',
    end: '2023-06',
    location: barcelona,
    highlights: {
      en: [
        'Designed and deployed custom Fiori apps on SAP S/4HANA Cloud with RAP, CDS views and OData.',
        'Managed SAP BTP environments and applied Design Thinking for high-impact user experiences.',
      ],
      es: [
        'Diseño y despliegue de apps Fiori a medida en SAP S/4HANA Cloud con RAP, vistas CDS y OData.',
        'Gestión de entornos SAP BTP y aplicación de Design Thinking para experiencias de alto impacto.',
      ],
    },
    tech: ['SAPUI5', 'RAP', 'CDS', 'OData', 'S/4HANA', 'SAP BTP', 'Design Thinking'],
  },
  {
    id: 'ey-2019',
    engagement: 'freelance',
    focus: ['lead', 's4', 'ux'],
    company: 'EY',
    role: seniorUI5,
    start: '2019-10',
    end: null,
    location: barcelona,
    highlights: {
      en: [
        'Fiori Lead across concurrent projects: technical direction, development standards and full lifecycle of SAPUI5, OData and ABAP OO solutions.',
        'Technical central point during major S/4HANA upgrades, managing Fiori Launchpad and applying Design Thinking.',
      ],
      es: [
        'Fiori Lead en varios proyectos a la vez: dirección técnica, estándares de desarrollo y ciclo completo de soluciones SAPUI5, OData y ABAP OO.',
        'Punto técnico central en grandes upgrades de S/4HANA, gestionando el Fiori Launchpad y aplicando Design Thinking.',
      ],
    },
    tech: ['SAPUI5', 'OData', 'ABAP OO', 'S/4HANA', 'Fiori Launchpad', 'Design Thinking', 'Tech Lead'],
  },
  {
    id: 'excelium-2019',
    engagement: 'freelance',
    focus: [],
    company: 'Excelium Consulting',
    role: seniorUI5,
    start: '2019-10',
    end: '2020-03',
    location: barcelona,
    highlights: {
      en: ['Custom Fiori apps (SAPUI5, OData, ABAP OO) for the Warehouse Management (WM) module.'],
      es: ['Apps Fiori a medida (SAPUI5, OData, ABAP OO) para el módulo de Warehouse Management (WM).'],
    },
    tech: ['SAPUI5', 'OData', 'ABAP OO'],
  },
  {
    id: 'averlance-2018',
    engagement: 'freelance',
    focus: ['intl', 'ux'],
    company: 'Averlance',
    role: seniorUI5,
    start: '2018-11',
    end: '2020-12',
    location: barcelona,
    highlights: {
      en: [
        'Full-stack SAP (ABAP + SAPUI5) under Agile for international projects in Finland: Cash Management, Forecast Manager and Project Cost Planning.',
        'Applied Design Thinking to build intuitive, user-centred business apps.',
      ],
      es: [
        'SAP full stack (ABAP + SAPUI5) con metodología Agile en proyectos internacionales en Finlandia: Cash Management, Forecast Manager y Project Cost Planning.',
        'Design Thinking aplicado para crear apps de negocio intuitivas y centradas en el usuario.',
      ],
    },
    tech: ['SAPUI5', 'ABAP OO', 'Agile', 'Design Thinking'],
  },
  {
    id: 'kps-2016',
    engagement: 'employee',
    focus: ['innovation'],
    company: 'KPS Iberia',
    role: seniorUI5,
    start: '2016-11',
    end: '2019-07',
    location: barcelona,
    highlights: {
      en: [
        'Backend business logic with ABAP OO and OData, integrated with custom SAPUI5 frontends under Agile.',
        'Hybrid mobile apps and early work with IoT, HANA XS, chatbots and third-party JS libraries.',
      ],
      es: [
        'Lógica de negocio con ABAP OO y OData integrada con frontends SAPUI5 a medida, con metodología Agile.',
        'Apps móviles híbridas y primeros proyectos con IoT, HANA XS, chatbots y librerías JS de terceros.',
      ],
    },
    tech: ['SAPUI5', 'ABAP OO', 'OData', 'Agile', 'JavaScript'],
  },
  {
    id: 'capgemini-2015',
    engagement: 'employee',
    focus: [],
    company: 'Capgemini',
    role: { en: 'ABAP Consultant', es: 'Consultor ABAP' },
    start: '2015-11',
    end: '2016-10',
    location: { en: 'Langreo, Spain', es: 'Langreo, España' },
    highlights: {
      en: ['SAP maintenance, incident management and evolutionary developments with ABAP and UI5.'],
      es: ['Mantenimiento SAP, gestión de incidencias y evolutivos con ABAP y UI5.'],
    },
    tech: ['ABAP OO', 'SAPUI5'],
  },
  {
    id: 'tst-2015',
    engagement: 'employee',
    focus: [],
    company: 'TST Informática',
    role: { en: 'Web / Java Developer', es: 'Desarrollador Web / Java' },
    start: '2015-04',
    end: '2015-09',
    location: { en: 'Asturias, Spain', es: 'Asturias, España' },
    highlights: {
      en: ['Full-stack web development: WordPress and Joomla sites plus custom apps in Java, PHP and JavaScript.'],
      es: ['Desarrollo web full stack: sitios WordPress y Joomla y apps a medida en Java, PHP y JavaScript.'],
    },
    tech: ['JavaScript'],
  },
];

export const education = [
  {
    school: 'IES Monte Naranco',
    title: { en: 'Higher Diploma in Web Application Development', es: 'CFGS Desarrollo de Aplicaciones Web' } satisfies L10n,
    years: '2013 – 2015',
  },
];
