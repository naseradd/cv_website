export interface Experience {
  id: string
  company: string
  role: { en: string; fr: string }
  period: string
  periodShort: string
  current?: boolean
  logo: string
  highlights: { en: string[]; fr: string[] }
  stack: string[]
  description: { en: string; fr: string }
}

export const experiences: Experience[] = [
  {
    id: 'ubisoft',
    company: 'Ubisoft',
    role: {
      en: 'Engineering Team Lead — Rainbow Six Siege',
      fr: 'Engineering Team Lead — Rainbow Six Siege',
    },
    period: 'Jun 2022 – Present',
    periodShort: '2022 → Now',
    current: true,
    logo: '/images/logos/ubisoft.png',
    description: {
      fr: 'Développement et maintenance des outils de monétisation de Rainbow Six Siege.',
      en: 'Development and maintenance of monetization tooling for Rainbow Six Siege.',
    },
    highlights: {
      fr: [
        'Je coordonne les choix techniques, la planification des sprints et le travail avec les autres équipes.',
        'J’ai développé les outils de configuration des données et de déploiement vers les services cloud.',
        'J’ai travaillé sur la synchronisation des inventaires, les corrections de données et les migrations d’accès.',
        'J’interviens sur les incidents de production, les migrations de bases de données et les tests de bout en bout.',
        'J’accompagne les développeurs juniors et les stagiaires, anime des présentations techniques et rédige la documentation.',
      ],
      en: [
        'I coordinate technical decisions, sprint planning and work with other teams.',
        'I developed tools for configuring data and deploying it to cloud services.',
        'I worked on inventory synchronization, data corrections and access migrations.',
        'I handle production incidents, database migrations and end-to-end tests.',
        'I mentor junior developers and interns, give technical presentations and write documentation.',
      ],
    },
    stack: [
      'Go',
      'C#/.NET',
      'TypeScript',
      'Node.js',
      'Python',
      'Vue.js',
      'Cypress',
      'Docker',
      'Kubernetes',
      'ArgoCD',
      'GitLab CI',
      'Prometheus',
      'Elasticsearch',
    ],
  },
  {
    id: 'aspentech',
    company: 'Aspen Technology',
    role: {
      en: 'Fullstack Software Developer',
      fr: 'Développeur Logiciel Fullstack',
    },
    period: 'Feb 2021 – Jun 2022',
    periodShort: '2021 → 2022',
    logo: '/images/logos/aspentech.jpg',
    description: {
      fr: 'Développement de services .NET et d’applications web Vue.js pour des logiciels d’entreprise.',
      en: 'Development of .NET services and Vue.js web applications for enterprise software.',
    },
    highlights: {
      fr: [
        'J’ai contribué à la conteneurisation avec Docker et à la mise en place des pipelines CI/CD.',
        'J’ai reçu plusieurs prix d’équipe dès la première année pour la qualité du code et la collaboration entre équipes.',
      ],
      en: [
        'I contributed to Docker containerization and CI/CD pipelines.',
        'I received several team awards in my first year for code quality and collaboration across teams.',
      ],
    },
    stack: ['.NET', 'Vue.js', 'Docker', 'CI/CD', 'Node.js'],
  },
  {
    id: 'polytechnique',
    company: 'Polytechnique Montréal',
    role: {
      en: 'Research Engineer — XR & Autonomous Systems',
      fr: 'Ingénieur de Recherche — XR & Systèmes Autonomes',
    },
    period: 'Sep 2018 – Dec 2020',
    periodShort: '2018 → 2020',
    logo: '/images/logos/polytechnique.png',
    description: {
      fr: 'Recherche sur les interfaces en réalité augmentée pour la supervision de systèmes autonomes.',
      en: 'Research into augmented reality interfaces for supervising autonomous systems.',
    },
    highlights: {
      fr: [
        'J’ai développé une application mains libres permettant d’interagir avec des informations affichées dans l’espace.',
        'J’ai intégré des données de capteurs en temps réel aux vues de l’application.',
        'J’ai évalué l’interface par des expériences comparatives avec une interface de bureau.',
      ],
      en: [
        'I developed a hands-free application for interacting with information displayed in a spatial interface.',
        'I integrated real-time sensor data into the application’s views.',
        'I evaluated the interface through comparative experiments against desktop controls.',
      ],
    },
    stack: ['Unreal Engine', 'C++', 'AR / XR', 'Python'],
  },
]
