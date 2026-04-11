'use client'

import { createContext, useContext, useState } from 'react'
import { ReactNode } from 'react'

export type Lang = 'en' | 'fr'

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.research': 'Research',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Hire me →',

    // Hero
    'hero.badge': 'Open to Freelance Contracts · Montréal & Remote',
    'hero.role': 'Senior Software Engineer',
    'hero.subtitle': 'Fullstack · Distributed Systems · Live Service Platforms',
    'hero.bio': '5+ years shipping production software at scale — distributed architectures, live service platforms, critical data pipelines. First-author XR researcher (Polytechnique Montréal). Available for freelance contracts.',
    'hero.cta.work': 'View Experience',
    'hero.cta.contact': 'Get in touch',
    'hero.stat.years': 'Years fullstack in production',
    'hero.stat.microservices': 'Microservices built & scaled',
    'hero.stat.techs': 'Languages & frameworks',
    'hero.stat.author': 'Published M.Sc.A. Research',

    // About
    'about.label': 'About',
    'about.title': 'Engineer.\nResearcher.',
    'about.bio1': 'I\'ve spent the last 5 years building systems that actually hold up under pressure — the kind that serve millions of users and can\'t go down on a Friday night. I like hard problems and I like shipping things.',
    'about.bio2': 'On the side, I did a research master\'s at Polytechnique — studying how humans can control drone swarms through augmented reality. That paper got picked up by TechXplore, which was a nice surprise. I still think about the intersection of physical world and software a lot.',
    'about.bio3': 'I write mostly Go, TypeScript and C#. I pick up new stacks fast — I\'ve jumped into codebases and domains I didn\'t know and was productive within days. I care about clean code, but more about clear thinking. I work well autonomously, communicate early when something\'s off, and I genuinely enjoy collaborating with people who give a damn about what they build.',
    'about.location': 'Montréal, QC, Canada',
    'about.languages': 'French (native) · English (professional)',
    'about.open': 'Available for freelance contracts — Montréal & remote',

    // Experience
    'exp.label': 'Experience',
    'exp.title': 'Where I\'ve built things',
    'exp.positions': '3 positions · 5+ years',
    'exp.present': 'Present',
    'exp.viewMore': 'View details',

    // Skills
    'skills.label': 'Skills',
    'skills.title': 'Tech Stack',
    'skills.languages': 'Languages',
    'skills.frontend': 'Frontend',
    'skills.devops': 'Platform & DevOps',
    'skills.architecture': 'Architecture',
    'skills.xr': 'Game & XR',
    'skills.ai': 'AI & Dev Tools',
    'skills.methods': 'Methods',

    // Publication
    'pub.label': 'Research',
    'pub.title': 'Published Research',
    'pub.badge': 'First Author · Press Coverage',
    'pub.summary': 'Designed and validated a hands-free AR interface on Microsoft HoloLens 1.0 and Magic Leap 1 enabling a single operator to control a UAV swarm in fire emergency scenarios. Comparative experiments against desktop controls. Published on arXiv, covered by TechXplore.',
    'pub.read': 'Read on arXiv',
    'pub.press': 'TechXplore coverage',
    'pub.authors': 'Naser Addin, D. & Ozell, B.',

    // Education
    'edu.label': 'Education',
    'edu.title': 'Formation',
    'edu.poly.degree': 'M.Sc.A. in Software & Computer Engineering',
    'edu.poly.spec': 'Specialization: XR / Augmented Reality',
    'edu.poly.lab': 'Lab: LIRV — Computer Graphics & VR',
    'edu.esisar.degree': 'B.Eng. in Software & Computer Engineering',
    'edu.esisar.spec': 'Track: Computing, Networks & Cybersecurity',
    'edu.gpa': 'GPA',

    // Projects
    'projects.label': 'Projects',
    'projects.title': 'Selected Work',

    // Leadership
    'leadership.label': 'Community',
    'leadership.title': 'Leadership & Involvement',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Let\'s build\nsomething\ntogether.',
    'contact.subtitle': 'Senior fullstack engineer available for freelance contracts. Distributed systems, live service platforms, XR. Let\'s talk.',
    'contact.email': 'Send an email',
    'contact.linkedin': 'Connect on LinkedIn',
    'contact.location': 'Montréal, QC, Canada',
  },
  fr: {
    // Nav
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.research': 'Recherche',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.cta': 'Me contacter →',

    // Hero
    'hero.badge': 'Disponible pour contrats freelance · Montréal & Remote',
    'hero.role': 'Ingénieur Logiciel Senior',
    'hero.subtitle': 'Fullstack · Systèmes Distribués · Plateformes Live Service',
    'hero.bio': '5+ ans à livrer du logiciel de production à grande échelle — architectures distribuées, plateformes live service, pipelines de données critiques. Chercheur XR premier auteur (Polytechnique Montréal). Disponible pour contrats freelance.',
    'hero.cta.work': 'Voir mon expérience',
    'hero.cta.contact': 'Me contacter',
    'hero.stat.years': 'Ans fullstack en production',
    'hero.stat.microservices': 'Microservices livrés',
    'hero.stat.techs': 'Langages & frameworks',
    'hero.stat.author': 'Publication M.Sc.A. · arXiv',

    // About
    'about.label': 'À propos',
    'about.title': 'Ingénieur.\nChercheur.',
    'about.bio1': 'Ça fait 5 ans que je construis des systèmes qui tiennent vraiment la route — ceux qui servent des millions d\'utilisateurs et qui n\'ont pas le droit de tomber un vendredi soir. J\'aime les problèmes complexes, et j\'aime livrer.',
    'about.bio2': 'En parallèle, j\'ai fait un master recherche à Polytechnique — sur comment des humains peuvent contrôler des essaims de drones via la réalité augmentée. L\'article a été repris par TechXplore, ce qui était une belle surprise. Je pense encore souvent à l\'intersection monde physique et logiciel.',
    'about.bio3': 'J\'écris surtout du Go, TypeScript et C#. Je prends de nouvelles stacks en main rapidement — je suis rentré dans des codebases et des domaines que je ne connaissais pas et j\'étais opérationnel en quelques jours. Je fais attention au code propre, mais plus encore à la clarté de pensée. Je travaille bien en autonomie, je communique tôt quand quelque chose cloche, et j\'aime vraiment bosser avec des gens qui se soucient de ce qu\'ils construisent.',
    'about.location': 'Montréal, QC, Canada',
    'about.languages': 'Français (langue maternelle) · Anglais (professionnel)',
    'about.open': 'Disponible pour contrats freelance — Montréal & remote',

    // Experience
    'exp.label': 'Expérience',
    'exp.title': 'Où j\'ai construit des choses',
    'exp.positions': '3 postes · 5+ ans',
    'exp.present': 'Présent',
    'exp.viewMore': 'Voir les détails',

    // Skills
    'skills.label': 'Compétences',
    'skills.title': 'Stack Technique',
    'skills.languages': 'Langages',
    'skills.frontend': 'Frontend',
    'skills.devops': 'Plateforme & DevOps',
    'skills.architecture': 'Architecture',
    'skills.xr': 'Jeux & XR',
    'skills.ai': 'IA & Outils Dev',
    'skills.methods': 'Méthodes',

    // Publication
    'pub.label': 'Recherche',
    'pub.title': 'Publication Scientifique',
    'pub.badge': 'Premier auteur · Couverture presse',
    'pub.summary': 'Conception et validation d\'une interface RA mains-libres sur Microsoft HoloLens 1.0 et Magic Leap 1 permettant à un seul opérateur de piloter un essaim de drones lors d\'urgences incendie. Expériences comparatives contre contrôles bureau. Publié sur arXiv, couvert par TechXplore.',
    'pub.read': 'Lire sur arXiv',
    'pub.press': 'Couverture TechXplore',
    'pub.authors': 'Naser Addin, D. & Ozell, B.',

    // Education
    'edu.label': 'Formation',
    'edu.title': 'Formation',
    'edu.poly.degree': 'M.Sc.A. en Génie Informatique & Logiciel',
    'edu.poly.spec': 'Spécialisation : XR / Réalité Augmentée',
    'edu.poly.lab': 'Laboratoire : LIRV — Infographie & RV',
    'edu.esisar.degree': 'B.Ing. en Génie Informatique & Logiciel',
    'edu.esisar.spec': 'Orientation : Informatique, Réseaux & Cybersécurité',
    'edu.gpa': 'MPC',

    // Projects
    'projects.label': 'Projets',
    'projects.title': 'Travaux Sélectionnés',

    // Leadership
    'leadership.label': 'Communauté',
    'leadership.title': 'Leadership & Engagement',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Construisons\nquelque chose\nensemble.',
    'contact.subtitle': 'Ingénieur fullstack senior disponible pour contrats freelance. Systèmes distribués, plateformes live service, XR. Parlons-en.',
    'contact.email': 'Envoyer un email',
    'contact.linkedin': 'Se connecter sur LinkedIn',
    'contact.location': 'Montréal, QC, Canada',
  },
} as const

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, string>
    return dict[key] ?? key
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useLang must be used inside I18nProvider')
  return ctx
}
