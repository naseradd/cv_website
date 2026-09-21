export const resumes = [
  { lang: 'fr', label: 'Français', href: '/cv/dany-naser-addin-fr.pdf' },
  { lang: 'en', label: 'English', href: '/cv/dany-naser-addin-en.pdf' },
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
    heroSubtitle: 'Software engineering. Agentic AI. Real-world impact.',
    heroBio:
      'I build applications, business tools and reliable systems, from the first brief to production. Engineering experience at Ubisoft, with an advanced, hands-on approach to agentic AI.',
    cta: 'Let’s talk about your project',
    workCta: 'Explore my work',
    portraitCaption: 'An engineer. A builder. A people person.',
    proof: [
      ['Production experience', 'Ubisoft · Rainbow Six Siege'],
      ['From idea to delivery', 'Fullstack · Systems · Tools'],
      ['A hands-on AI practice', 'Codex · Claude Code · MCP'],
    ],
    expertiseLabel: '01 / WHAT I BRING',
    expertiseTitle: 'Your next challenge.\nMy kind of work.',
    expertiseIntro:
      'A clear understanding of the problem. Thoughtful architecture. Software that earns its place in your day-to-day work.',
    services: [
      {
        title: 'Applications & business tools',
        text: 'Turn a complex workflow into a product people enjoy using. Web applications, internal platforms and tools built around your team.',
        tags: ['Fullstack development', 'Internal tooling', 'Product thinking'],
      },
      {
        title: 'Architecture & reliability',
        text: 'Build systems that hold up in production. Evolve services, connect data and make releases easier to operate with confidence.',
        tags: ['Distributed systems', 'Data pipelines', 'Live operations'],
      },
      {
        title: 'Agentic AI & workflows',
        text: 'Make AI useful in real engineering work. Connect tools, shape repeatable workflows and keep review and validation part of the process.',
        tags: ['AI-assisted development', 'Agents & MCP', 'Team workflows'],
      },
    ],
    aiLabel: '02 / AGENTIC AI',
    aiTitle: 'Beyond the prompt.\nInto the workflow.',
    aiIntro:
      'AI is part of how I build, learn and organize work. I use ChatGPT, Codex and Claude Code extensively, and keep testing new models and tools against real tasks.',
    aiPillars: [
      {
        title: 'Design the working process',
        text: 'Skills, reusable instructions, MCP integrations and specialized agents. Give each task the right context, tools and scope.',
      },
      {
        title: 'Build, review, iterate',
        text: 'Applications, websites and financial management tools. Break down the work, coordinate agents, review changes and validate the result.',
      },
      {
        title: 'Bring the team along',
        text: 'Technical documentation following presentations, sprint preparation and follow-up, and shared practices that help teams adopt AI in their daily work.',
      },
    ],
    workflowLabel: 'MY WORKING METHOD',
    workflowSteps: ['Frame', 'Plan', 'Build', 'Verify', 'Document'],
    workflowDescriptions: [
      'Understand the need and constraints.',
      'Define tasks, context and responsibilities.',
      'Develop with focused agents and tools.',
      'Review the code and test the behavior.',
      'Capture decisions and make the work reusable.',
    ],
    workflowNote:
      'Human judgment at every step. Clear context, scoped agents, verified outcomes.',
    projectsLabel: '03 / SELECTED WORK',
    projectsTitle: 'Built for a reason.',
    projectsIntro:
      'Production platforms, personal products and applied research. Different contexts, the same care for what actually works.',
    challenge: 'The challenge',
    contribution: 'My contribution',
    result: 'Outcome / status',
    projects: [
      {
        id: 'mtx',
        category: 'PROFESSIONAL · UBISOFT',
        name: 'Behind the live experience.',
        subtitle: 'Rainbow Six Siege · Monetization tooling',
        challenge:
          'Help production teams configure and deploy monetization content across cloud services.',
        contribution:
          'Fullstack tooling, data workflows, production reliability and technical leadership.',
        result:
          'Internal tools used in production. Current role: Engineering Team Lead.',
        tags: ['Go', 'C#', 'TypeScript', 'Vue.js'],
        visual: 'pipeline',
      },
      {
        id: 'compta',
        category: 'PERSONAL PRODUCT',
        name: 'A clearer view of finances.',
        subtitle: 'ComptaPerso · Desktop application',
        challenge:
          'Make transactions, budgets and financial trends easier to understand in one place.',
        contribution:
          'Product design and development of a local-first macOS application: imports, categorization, dashboards and analytics.',
        result:
          'Application in personal use, developed iteratively with agent-assisted workflows.',
        tags: ['macOS', 'Local-first', 'SQLite', 'Agentic workflows'],
        visual: 'finance',
      },
      {
        id: 'photodash',
        category: 'PERSONAL PRODUCT · IN DEVELOPMENT',
        name: 'Shared moments. Live play.',
        subtitle: 'Photo Dash · Multiplayer application',
        challenge:
          'Create a shared photo-and-video game across iPhone and a Mac display.',
        contribution:
          'Product development, local networking, native media integration and coordinated implementation with agents.',
        result:
          'In active development. Focus on synchronization, media playback and device validation.',
        tags: ['iOS', 'macOS', 'Real-time', 'Native media'],
        visual: 'photos',
      },
      {
        id: 'xr',
        category: 'APPLIED RESEARCH · FIRST AUTHOR',
        name: 'A different perspective.',
        subtitle: 'Augmented reality · Drone swarm control',
        challenge:
          'Explore how one operator can control a drone swarm in emergency scenarios.',
        contribution:
          'Hands-free AR interfaces on HoloLens and Magic Leap, with real-time data and comparative experiments.',
        result:
          'Research shared on arXiv and covered by TechXplore. M.Sc.A., Polytechnique Montréal.',
        tags: ['Unreal Engine', 'C++', 'AR / XR', 'Human–computer interaction'],
        visual: 'xr',
      },
    ],
    paper: 'Read the research',
    press: 'Press coverage',
    experienceLabel: '04 / EXPERIENCE',
    experienceTitle: 'Grounded in production.',
    experienceNote: 'Engineering, ownership and collaboration.',
    current: 'Today',
    details: 'Role & contributions',
    aboutLabel: '05 / THE PERSON BEHIND THE WORK',
    aboutTitle: 'Technical depth.\nA human approach.',
    aboutText:
      'Based in Montréal, I work in French and English. I enjoy connecting the details of engineering with the bigger picture: what a team needs, what a product should do and how to get it shipped.',
    aboutText2:
      'My path spans enterprise software, live-service gaming and augmented-reality research. I bring that range to the projects I take on, with clear communication, curiosity and a collaborative way of working.',
    education: [
      {
        school: 'Polytechnique Montréal',
        degree: 'M.Sc.A. · Computer & Software Engineering',
        detail: 'Augmented reality & autonomous systems',
        period: '2018 — 2020',
      },
      {
        school: 'Grenoble INP — Esisar',
        degree: 'Engineering degree · Computer & Software Engineering',
        detail: 'Computing, networks & cybersecurity',
        period: '2013 — 2018',
      },
    ],
    contactLabel: 'LET’S BUILD WHAT’S NEXT',
    contactTitle: 'Have something\nin mind?',
    contactText:
      'A product to build, a system to evolve, a workflow to rethink. Tell me where you want to go.',
    emailCta: 'Start a conversation',
    cvTitle: 'Take my résumé with you.',
    cvText: 'Two languages. The same engineering mindset.',
    cvOpen: 'View résumé',
    cvDownload: 'Download',
    cvDialog: 'Résumé / CV',
    cvDescription: 'Choose a language to view or download the PDF.',
    cvVersion: 'PDF · V3 · April 2026',
    footerNote: 'Engineering with intention.',
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
    heroSubtitle: 'Développement logiciel. IA agentique. Impact concret.',
    heroBio:
      'Je conçois des applications, des outils métier et des systèmes fiables, du cadrage à la production. Mon expérience chez Ubisoft, associée à une pratique avancée de l’IA agentique.',
    cta: 'Parlons de votre projet',
    workCta: 'Voir mes réalisations',
    portraitCaption: 'Ingénieur. Créateur. À l’écoute.',
    proof: [
      ['L’expérience de la production', 'Ubisoft · Rainbow Six Siege'],
      ['De l’idée à la livraison', 'Fullstack · Systèmes · Outils'],
      ['Une pratique concrète de l’IA', 'Codex · Claude Code · MCP'],
    ],
    expertiseLabel: '01 / MON EXPERTISE',
    expertiseTitle: 'Votre prochain défi.\nMon terrain de jeu.',
    expertiseIntro:
      'Comprendre le besoin. Concevoir une architecture juste. Livrer un logiciel qui trouve sa place dans votre quotidien.',
    services: [
      {
        title: 'Applications & outils métier',
        text: 'Transformer un processus complexe en produit agréable à utiliser. Applications web, plateformes internes et outils pensés pour votre équipe.',
        tags: [
          'Développement fullstack',
          'Outils internes',
          'Approche produit',
        ],
      },
      {
        title: 'Architecture & fiabilité',
        text: 'Construire des systèmes qui tiennent en production. Faire évoluer les services, connecter les données et fiabiliser les mises en production.',
        tags: [
          'Systèmes distribués',
          'Pipelines de données',
          'Opérations live',
        ],
      },
      {
        title: 'IA agentique & workflows',
        text: 'Rendre l’IA utile dans le travail d’ingénierie. Connecter les outils, structurer des processus réutilisables et intégrer revue et validation.',
        tags: [
          'Développement assisté par IA',
          'Agents & MCP',
          'Méthodes d’équipe',
        ],
      },
    ],
    aiLabel: '02 / IA AGENTIQUE',
    aiTitle: 'Au-delà du prompt.\nAu cœur du travail.',
    aiIntro:
      'L’IA fait partie de ma façon de développer, d’apprendre et d’organiser le travail. J’utilise intensivement ChatGPT, Codex et Claude Code, et j’évalue les nouveaux modèles et outils sur des tâches concrètes.',
    aiPillars: [
      {
        title: 'Concevoir la méthode',
        text: 'Skills, instructions réutilisables, intégrations MCP et agents spécialisés. Donner à chaque tâche le bon contexte, les bons outils et un périmètre clair.',
      },
      {
        title: 'Développer, vérifier, itérer',
        text: 'Applications, sites web et outils de gestion financière. Découper le travail, coordonner les agents, relire les changements et valider le résultat.',
      },
      {
        title: 'Accompagner l’équipe',
        text: 'Documentation technique après présentation, préparation et suivi des sprints, partage des pratiques pour intégrer l’IA au travail quotidien en entreprise.',
      },
    ],
    workflowLabel: 'MA MÉTHODE DE TRAVAIL',
    workflowSteps: [
      'Cadrer',
      'Planifier',
      'Développer',
      'Vérifier',
      'Documenter',
    ],
    workflowDescriptions: [
      'Comprendre le besoin et les contraintes.',
      'Définir les tâches, le contexte et les responsabilités.',
      'Développer avec des agents et des outils ciblés.',
      'Relire le code et tester le comportement.',
      'Conserver les décisions et rendre le travail réutilisable.',
    ],
    workflowNote:
      'Le jugement humain à chaque étape. Contexte clair, agents ciblés, résultats vérifiés.',
    projectsLabel: '03 / RÉALISATIONS',
    projectsTitle: 'Du concret, avant tout.',
    projectsIntro:
      'Plateformes de production, produits personnels et recherche appliquée. Des contextes différents, la même exigence de fonctionnement.',
    challenge: 'Le besoin',
    contribution: 'Ma contribution',
    result: 'Résultat / état',
    projects: [
      {
        id: 'mtx',
        category: 'PROFESSIONNEL · UBISOFT',
        name: 'Les coulisses du live.',
        subtitle: 'Rainbow Six Siege · Outils de monétisation',
        challenge:
          'Permettre aux équipes de production de configurer et déployer le contenu de monétisation dans les services cloud.',
        contribution:
          'Outillage fullstack, workflows de données, fiabilité en production et leadership technique.',
        result:
          'Outils internes utilisés en production. Rôle actuel : Engineering Team Lead.',
        tags: ['Go', 'C#', 'TypeScript', 'Vue.js'],
        visual: 'pipeline',
      },
      {
        id: 'compta',
        category: 'PRODUIT PERSONNEL',
        name: 'Des finances plus lisibles.',
        subtitle: 'ComptaPerso · Application de bureau',
        challenge:
          'Comprendre ses transactions, ses budgets et ses tendances financières dans un même outil.',
        contribution:
          'Conception et développement d’une application macOS privilégiant le stockage local : imports, catégorisation, tableaux de bord et analyses.',
        result:
          'Application utilisée personnellement, développée par itérations avec des workflows assistés par agents.',
        tags: ['macOS', 'Stockage local', 'SQLite', 'Workflows agentiques'],
        visual: 'finance',
      },
      {
        id: 'photodash',
        category: 'PRODUIT PERSONNEL · EN DÉVELOPPEMENT',
        name: 'Des souvenirs en jeu.',
        subtitle: 'Photo Dash · Application multijoueur',
        challenge:
          'Créer une expérience de jeu partagée autour des photos et vidéos, sur iPhone avec un écran Mac.',
        contribution:
          'Développement produit, réseau local, intégration des médias natifs et coordination du travail avec des agents.',
        result:
          'Développement en cours. Travail sur la synchronisation, la lecture des médias et la validation sur appareils.',
        tags: ['iOS', 'macOS', 'Temps réel', 'Médias natifs'],
        visual: 'photos',
      },
      {
        id: 'xr',
        category: 'RECHERCHE APPLIQUÉE · PREMIER AUTEUR',
        name: 'Une autre perspective.',
        subtitle: 'Réalité augmentée · Contrôle d’essaims de drones',
        challenge:
          'Étudier comment un opérateur peut contrôler un essaim de drones en situation d’urgence.',
        contribution:
          'Interfaces RA mains libres sur HoloLens et Magic Leap, données temps réel et expériences comparatives.',
        result:
          'Travaux diffusés sur arXiv et relayés par TechXplore. M.Sc.A., Polytechnique Montréal.',
        tags: ['Unreal Engine', 'C++', 'RA / XR', 'Interaction humain-machine'],
        visual: 'xr',
      },
    ],
    paper: 'Lire la recherche',
    press: 'Couverture presse',
    experienceLabel: '04 / PARCOURS',
    experienceTitle: 'Ancré dans la production.',
    experienceNote: 'Ingénierie, responsabilités et collaboration.',
    current: 'Aujourd’hui',
    details: 'Rôle et contributions',
    aboutLabel: '05 / DERRIÈRE LE CODE',
    aboutTitle: 'L’exigence technique.\nLe contact humain.',
    aboutText:
      'Basé à Montréal, je travaille en français et en anglais. J’aime relier les détails techniques à la vue d’ensemble : le besoin de l’équipe, la raison d’être du produit et le chemin pour le livrer.',
    aboutText2:
      'Mon parcours traverse le logiciel d’entreprise, les jeux live-service et la recherche en réalité augmentée. J’apporte cette diversité aux projets, avec une communication claire, de la curiosité et le goût du travail en équipe.',
    education: [
      {
        school: 'Polytechnique Montréal',
        degree: 'M.Sc.A. · Génie informatique et logiciel',
        detail: 'Réalité augmentée et systèmes autonomes',
        period: '2018 — 2020',
      },
      {
        school: 'Grenoble INP — Esisar',
        degree: 'Diplôme d’ingénieur · Informatique et logiciel',
        detail: 'Informatique, réseaux et cybersécurité',
        period: '2013 — 2018',
      },
    ],
    contactLabel: 'ET SI ON CONSTRUISAIT LA SUITE ?',
    contactTitle: 'Une idée\nen tête ?',
    contactText:
      'Un produit à créer, un système à faire évoluer, une méthode à repenser. Parlons de ce que vous voulez accomplir.',
    emailCta: 'Échangeons',
    cvTitle: 'Mon parcours, à emporter.',
    cvText: 'Deux langues. La même approche du métier.',
    cvOpen: 'Consulter le CV',
    cvDownload: 'Télécharger',
    cvDialog: 'CV / Résumé',
    cvDescription:
      'Choisissez une langue pour consulter ou télécharger le PDF.',
    cvVersion: 'PDF · V3 · Avril 2026',
    footerNote: 'Concevoir avec intention.',
    backTop: 'Retour en haut',
  },
} as const
