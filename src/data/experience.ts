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
      en: 'Tool Programmer — Rainbow Six Siege',
      fr: 'Programmeur Outils — Rainbow Six Siege',
    },
    period: 'Jun 2022 – Present',
    periodShort: '2022 → Now',
    current: true,
    logo: 'https://logo.clearbit.com/ubisoft.com',
    description: {
      en: 'Backend & frontend of monetization tooling and live content operations for Rainbow Six Siege — an online AAA game with 100M+ registered players.',
      fr: 'Backend & frontend des outils de monétisation et opérations de contenu live sur Rainbow Six Siege — jeu AAA en ligne de 100M+ joueurs.',
    },
    highlights: {
      en: [
        'Delivered a production internal tooling suite for cross-team configuration of monetization data and cloud services — test-to-production cycles <20 min, sprint-cadenced releases across 5–10 microservices.',
        'Scaled data pipelines for 100M+ player accounts: inventory sync, correction workflows, access migrations supporting the free-to-play transition.',
        'Led incident response to a cyberattack affecting 750K+ accounts — piloted a precision rollback on ~150M transactions, full data restoration without revenue disruption.',
        'Strengthened production reliability: DB migrations, microservice diagnostics, E2E test refactoring, automated correction scripts.',
        'Technical multiplier: architecture reference for monetization, mentored 3+ junior engineers/interns, tech talks, documentation.',
      ],
      fr: [
        'Livré une suite d\'outils internes en production pour la configuration cross-équipe des données de monétisation et services cloud — cycles test-vers-production < 20 min, releases au rythme des sprints sur 5 à 10 microservices.',
        'Scalé des pipelines de données pour 100M+ comptes joueurs : synchronisation d\'inventaires, workflows de correction, migrations d\'accès soutenant la transition free-to-play.',
        'Conduit la réponse à incident d\'une cyberattaque affectant 750K+ comptes — piloté un rollback de précision sur ~150M transactions, restauration complète sans interruption des revenus.',
        'Renforcé la fiabilité production : migrations BDD, diagnostics microservices, refonte tests E2E, scripts de correction automatisés.',
        'Multiplicateur technique : référence architecture monétisation, mentorat de 3+ ingénieurs juniors/stagiaires, tech talks, documentation.',
      ],
    },
    stack: ['Rainbow Six Siege', 'Go', 'C#/.NET', 'TypeScript', 'Node.js', 'Python', 'Vue.js', 'Cypress', 'Docker', 'Kubernetes', 'ArgoCD', 'GitLab CI', 'Prometheus', 'Elasticsearch'],
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
    logo: 'https://logo.clearbit.com/aspentech.com',
    description: {
      en: 'Feature delivery and bug fixes on .NET backend services and Vue.js web applications across multiple enterprise platforms.',
      fr: 'Livraison de fonctionnalités et corrections de bugs sur des services backend .NET et applications web Vue.js sur plusieurs plateformes enterprise.',
    },
    highlights: {
      en: [
        'Delivered feature improvements and bug fixes on .NET backend services and Vue.js web applications across multiple enterprise platforms.',
        'Contributed to Docker containerization and CI/CD pipeline setup.',
        'Awarded multiple Team Awards in the first year for code quality and cross-team collaboration.',
      ],
      fr: [
        'Livré des améliorations de fonctionnalités et corrections de bugs sur des services backend .NET et applications web Vue.js sur plusieurs plateformes enterprise.',
        'Contribué à la conteneurisation Docker et mise en place de pipelines CI/CD.',
        'Récompensé par plusieurs prix d\'équipe dès la première année pour qualité du code et collaboration inter-équipes.',
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
    logo: 'https://logo.clearbit.com/polymtl.ca',
    description: {
      en: 'AR interfaces for drone-based emergency response systems — collaboration with Humanitas Solutions Inc. and the Service des incendies de Montréal (SIM).',
      fr: 'Interfaces RA pour systèmes de réponse aux urgences par drones — collaboration avec Humanitas Solutions Inc. et le Service des incendies de Montréal (SIM).',
    },
    highlights: {
      en: [
        'Developed and shipped a hands-free AR application for Microsoft HoloLens 1.0 and Magic Leap 1 under Unreal Engine 4 — enabling a single operator to pilot a drone swarm during fire emergencies via spatial AR overlays.',
        'Designed a real-time control system integrating live sensor data streams + 3D contextual AR overlays — validated via comparative experiments against desktop controls.',
        'Performance grant awarded by Humanitas Solutions Inc. for exceptional contributions.',
        'Published first-author research paper on arXiv — covered by TechXplore (Apr 2021).',
      ],
      fr: [
        'Développé et livré une application RA mains-libres pour Microsoft HoloLens 1.0 et Magic Leap 1 sous Unreal Engine 4 — permettant à un seul opérateur de piloter un essaim de drones lors d\'urgences incendie via des overlays AR spatiaux.',
        'Conçu un système de contrôle temps réel intégrant flux de données capteurs live + overlays RA 3D contextuels — validé par expériences comparatives contre contrôles bureau.',
        'Bourse de performance accordée par Humanitas Solutions Inc. pour contributions exceptionnelles.',
        'Publication premier auteur sur arXiv — couverte par TechXplore (Avr. 2021).',
      ],
    },
    stack: ['Unreal Engine 4', 'C++', 'HoloLens', 'Magic Leap', 'AR/XR', 'Python', 'Django'],
  },
]
