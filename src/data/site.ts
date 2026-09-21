export const resumes = [
  {
    lang: 'fr',
    label: 'Français',
    href: '/cv/dany-naser-addin-fr.pdf',
  },
  {
    lang: 'en',
    label: 'English',
    href: '/cv/dany-naser-addin-en.pdf',
  },
] as const

export const site = {
  en: {
    nav: ['Expertise', 'Selected work', 'Experience', 'Contact'],
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    availability: 'Open to freelance projects',
    location: 'Montréal · Working remotely',
    heroRole: 'Engineering Team Lead',
    heroSubtitle: 'Web applications, business tools and distributed systems',
    heroBio:
      'I’m an Engineering Team Lead at Ubisoft, working on Rainbow Six Siege. I develop monetization tools and also take on freelance projects involving web applications and business software.',
    cta: 'Let’s talk about your project',
    workCta: 'View my projects',
    proof: [
      ['Current role', 'Ubisoft · Rainbow Six Siege'],
      ['Main languages', 'TypeScript · Go · C#'],
      ['Working languages', 'French · English'],
    ],
    expertiseLabel: '01',
    expertiseTitle: 'Software development & consulting',
    services: [
      {
        title: 'Applications & business tools',
        text: 'I develop web applications and internal tools for managing data and team tasks. I work mainly with TypeScript, Go and C#.',
        tags: ['Web applications', 'Internal tools'],
      },
      {
        title: 'Architecture & operations',
        text: 'I design services and the way they exchange data. My work also covers migrations, testing and diagnosing problems in production.',
        tags: ['Microservices', 'Data', 'Deployment'],
      },
      {
        title: 'AI integration',
        text: 'I build skills and MCP integrations to connect agents to a project’s tools. I define the tasks they handle and how their work will be checked.',
        tags: ['Skills', 'MCP', 'Agents'],
      },
    ],
    aiLabel: '02',
    aiTitle: 'How I use AI',
    aiIntro:
      'I use ChatGPT, Codex and Claude Code to develop applications, write documentation and organize work. I regularly try new models and share what I learn at work.',
    aiPillars: [
      {
        title: 'Skills and MCP integrations',
        text: 'I write reusable instructions for recurring tasks. MCP integrations give agents access to the tools and data they need for a project.',
      },
      {
        title: 'Development with agents',
        text: 'I break work into bounded tasks and provide the relevant context and files. I review changes and test their behavior before integrating them.',
      },
      {
        title: 'Documentation and team planning',
        text: 'I also use AI to write documentation after presentations and prepare sprint follow-ups. I share these methods with my colleagues.',
      },
    ],
    workflowLabel: 'FOR A DEVELOPMENT TASK',
    workflowSteps: ['Frame', 'Plan', 'Build', 'Verify', 'Document'],
    workflowDescriptions: [
      'I provide the requirements, constraints and relevant files so the agent can understand the project.',
      'I define the tasks, files to change and acceptance criteria before starting development.',
      'I assign bounded tasks to agents and follow their changes.',
      'I review the proposed code and run the necessary tests before integrating it.',
      'I record technical decisions and instructions for future work on the project.',
    ],
    projectsLabel: '03',
    projectsTitle: 'Selected projects',
    challenge: 'Purpose',
    contribution: 'My work',
    result: 'Status',
    projects: [
      {
        id: 'live-tooling',
        category: 'PROFESSIONAL · UBISOFT',
        name: 'Rainbow Six Siege',
        subtitle: 'Monetization tooling',
        challenge:
          'Configure and deploy monetization data across the game’s cloud services.',
        contribution:
          'Development of internal interfaces and services, data synchronization and technical coordination.',
        result: 'Used in production.',
        tags: ['Go', 'C#', 'TypeScript', 'Vue.js'],
        visual: 'pipeline',
      },
      {
        id: 'finance',
        category: 'PERSONAL PRODUCT',
        name: 'Personal finance',
        subtitle: 'Desktop application',
        challenge: 'Track transactions and budgets in a desktop application.',
        contribution:
          'Design and development of imports, categorization and analysis views. Data is stored locally in SQLite.',
        result: 'In personal use.',
        tags: ['macOS', 'SQLite', 'Local storage'],
        visual: 'finance',
      },
      {
        id: 'multiplayer',
        category: 'PERSONAL PRODUCT · IN DEVELOPMENT',
        name: 'Multiplayer game',
        subtitle: 'Photos, videos and local networking',
        challenge:
          'Play a photo and video game together on iPhone, with a Mac as the display.',
        contribution:
          'Development of local networking, session synchronization and media playback on the devices.',
        result:
          'In development. Testing focuses on synchronization and media playback.',
        tags: ['iOS', 'macOS', 'Real-time', 'Native media'],
        visual: 'photos',
      },
      {
        id: 'xr',
        category: 'APPLIED RESEARCH',
        name: 'Augmented reality interfaces',
        subtitle: 'Human–computer interaction research',
        challenge:
          'Supervise multiple systems through an augmented reality interface.',
        contribution:
          'Development of hands-free interactions and spatial views connected to real-time data.',
        result: 'Prototype evaluated against desktop controls.',
        tags: ['Unreal Engine', 'C++', 'AR / XR', 'Human–computer interaction'],
        visual: 'xr',
      },
    ],
    experienceLabel: '04',
    experienceTitle: 'Professional experience',
    current: 'Today',
    aboutLabel: '05',
    aboutTitle: 'About me',
    aboutText:
      'I live in Montréal and work in French and English. Before Ubisoft, I developed software at Aspen Technology and researched augmented reality at Polytechnique Montréal. I also develop personal finance applications and multiplayer games.',
    education: [
      {
        school: 'Polytechnique Montréal',
        degree: 'M.Sc.A. · Computer & Software Engineering',
        detail: 'Augmented reality & autonomous systems',
        period: '2018 — 2020',
      },
      {
        school: 'Polytechnique Grenoble',
        degree: 'Engineering degree · Computer & Software Engineering',
        detail: 'Computing, networks & cybersecurity',
        period: '2013 — 2018',
      },
    ],
    contactLabel: 'CONTACT',
    contactTitle: 'Have something\nin mind?',
    contactText:
      'Looking for a developer for an application or an internal tool? Send me a description of your project.',
    emailCta: 'Send me an email',
    cvTitle: 'My résumé',
    cvText: 'Available in French and English.',
    cvOpen: 'View résumé',
    cvDownload: 'Download',
    cvDialog: 'Résumé / CV',
    cvDescription: 'Choose a language to view or download the PDF.',
    cvVersion: 'PDF · V3 · April 2026',
    backTop: 'Back to top',
  },
  fr: {
    nav: ['Expertises', 'Réalisations', 'Parcours', 'Contact'],
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    availability: 'Disponible pour vos projets freelance',
    location: 'Montréal · À distance',
    heroRole: 'Engineering Team Lead',
    heroSubtitle: 'Applications web, outils métier et systèmes distribués',
    heroBio:
      'Je suis Engineering Team Lead chez Ubisoft, sur Rainbow Six Siege. Je développe des outils de monétisation et travaille aussi en freelance sur des applications web et des outils métier.',
    cta: 'Parlons de votre projet',
    workCta: 'Voir mes réalisations',
    proof: [
      ['Poste actuel', 'Ubisoft · Rainbow Six Siege'],
      ['Langages principaux', 'TypeScript · Go · C#'],
      ['Langues de travail', 'Français · Anglais'],
    ],
    expertiseLabel: '01',
    expertiseTitle: 'Développement et conseil',
    services: [
      {
        title: 'Applications et outils métier',
        text: 'Je développe des applications web et des outils internes pour gérer des données et les tâches des équipes. Je travaille principalement en TypeScript, Go et C#.',
        tags: ['Applications web', 'Outils internes'],
      },
      {
        title: 'Architecture et exploitation',
        text: 'Je conçois des services et leurs échanges de données. Mon travail couvre aussi les migrations, les tests et le diagnostic des problèmes en production.',
        tags: ['Microservices', 'Données', 'Déploiement'],
      },
      {
        title: 'Intégration de l’IA',
        text: 'Je crée des skills et des intégrations MCP pour relier les agents aux outils d’un projet. Je définis les tâches à leur confier et la façon de vérifier leur travail.',
        tags: ['Skills', 'MCP', 'Agents'],
      },
    ],
    aiLabel: '02',
    aiTitle: 'Comment j’utilise l’IA',
    aiIntro:
      'J’utilise ChatGPT, Codex et Claude Code pour développer des applications, rédiger de la documentation et organiser le travail. Je teste régulièrement de nouveaux modèles et partage mes retours d’expérience en entreprise.',
    aiPillars: [
      {
        title: 'Skills et intégrations MCP',
        text: 'Je prépare des instructions réutilisables pour les tâches récurrentes. Les intégrations MCP donnent aux agents accès aux outils et aux données nécessaires au projet.',
      },
      {
        title: 'Développement avec des agents',
        text: 'Je répartis le travail en tâches délimitées, avec le contexte et les fichiers utiles. Je relis les modifications et teste leur comportement avant de les intégrer.',
      },
      {
        title: 'Documentation et suivi d’équipe',
        text: 'J’utilise aussi l’IA pour rédiger la documentation après une présentation et préparer le suivi des sprints. Je partage ces méthodes avec mes collègues.',
      },
    ],
    workflowLabel: 'SUR UNE TÂCHE DE DÉVELOPPEMENT',
    workflowSteps: [
      'Cadrer',
      'Planifier',
      'Développer',
      'Vérifier',
      'Documenter',
    ],
    workflowDescriptions: [
      'Je fournis le besoin, les contraintes et les fichiers utiles pour que l’agent comprenne le projet.',
      'Je définis les tâches, les fichiers à modifier et les critères de validation avant de lancer le développement.',
      'Je confie des tâches délimitées aux agents et suis leurs modifications.',
      'Je relis le code proposé et lance les tests nécessaires avant de l’intégrer.',
      'Je conserve les décisions techniques et les instructions utiles pour la suite du projet.',
    ],
    projectsLabel: '03',
    projectsTitle: 'Quelques projets',
    challenge: 'Besoin',
    contribution: 'Travail réalisé',
    result: 'État',
    projects: [
      {
        id: 'live-tooling',
        category: 'PROFESSIONNEL · UBISOFT',
        name: 'Rainbow Six Siege',
        subtitle: 'Monetization tooling',
        challenge:
          'Configurer et déployer les données de monétisation dans les services cloud du jeu.',
        contribution:
          'Développement des interfaces et services internes, synchronisation des données et coordination technique.',
        result: 'Utilisé en production.',
        tags: ['Go', 'C#', 'TypeScript', 'Vue.js'],
        visual: 'pipeline',
      },
      {
        id: 'finance',
        category: 'PRODUIT PERSONNEL',
        name: 'Gestion financière',
        subtitle: 'Application de bureau',
        challenge:
          'Suivre ses transactions et ses budgets dans une application de bureau.',
        contribution:
          'Conception et développement des imports, de la catégorisation et des vues d’analyse. Les données sont stockées localement dans SQLite.',
        result: 'Utilisé à titre personnel.',
        tags: ['macOS', 'SQLite', 'Stockage local'],
        visual: 'finance',
      },
      {
        id: 'multiplayer',
        category: 'PRODUIT PERSONNEL · EN DÉVELOPPEMENT',
        name: 'Jeu multijoueur',
        subtitle: 'Photos, vidéos et réseau local',
        challenge:
          'Jouer à plusieurs autour de photos et de vidéos, sur iPhone avec un écran Mac.',
        contribution:
          'Développement du réseau local, de la synchronisation des sessions et de la lecture des médias sur les appareils.',
        result:
          'En développement. Les tests portent sur la synchronisation et la lecture des médias.',
        tags: ['iOS', 'macOS', 'Temps réel', 'Médias natifs'],
        visual: 'photos',
      },
      {
        id: 'xr',
        category: 'RECHERCHE APPLIQUÉE',
        name: 'Interfaces en réalité augmentée',
        subtitle: 'Recherche en interaction humain-machine',
        challenge:
          'Superviser plusieurs systèmes depuis une interface en réalité augmentée.',
        contribution:
          'Développement d’interactions mains libres et de vues spatiales alimentées par des données temps réel.',
        result:
          'Prototype évalué par comparaison avec une interface de bureau.',
        tags: ['Unreal Engine', 'C++', 'RA / XR', 'Interaction humain-machine'],
        visual: 'xr',
      },
    ],
    experienceLabel: '04',
    experienceTitle: 'Expérience professionnelle',
    current: 'Aujourd’hui',
    aboutLabel: '05',
    aboutTitle: 'À propos',
    aboutText:
      'Je vis à Montréal et travaille en français et en anglais. Avant Ubisoft, j’ai développé des logiciels chez Aspen Technology et mené des recherches en réalité augmentée à Polytechnique Montréal. Je développe aussi des applications personnelles de gestion financière et de jeu multijoueur.',
    education: [
      {
        school: 'Polytechnique Montréal',
        degree: 'M.Sc.A. · Génie informatique et logiciel',
        detail: 'Réalité augmentée et systèmes autonomes',
        period: '2018 — 2020',
      },
      {
        school: 'Institut polytechnique de Grenoble — Esisar',
        degree: 'Diplôme d’ingénieur · Informatique et logiciel',
        detail: 'Informatique, réseaux et cybersécurité',
        period: '2013 — 2018',
      },
    ],
    contactLabel: 'CONTACT',
    contactTitle: 'Une idée\nen tête ?',
    contactText:
      'Vous cherchez un développeur pour une application ou un outil interne ? Écrivez-moi avec une description de votre projet.',
    emailCta: 'Me contacter',
    cvTitle: 'Mon CV',
    cvText: 'Disponible en français et en anglais.',
    cvOpen: 'Consulter le CV',
    cvDownload: 'Télécharger',
    cvDialog: 'CV / Résumé',
    cvDescription:
      'Choisissez une langue pour consulter ou télécharger le PDF.',
    cvVersion: 'PDF · V3 · Avril 2026',
    backTop: 'Retour en haut',
  },
} as const
