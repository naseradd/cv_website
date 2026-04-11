export interface SkillCategory {
  id: string
  label: { en: string; fr: string }
  items: string[]
  featured?: boolean
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: { en: 'Languages', fr: 'Langages' },
    featured: true,
    items: ['Go', 'C#', '.NET', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'C++', 'Bash', 'SQL'],
  },
  {
    id: 'frontend',
    label: { en: 'Frontend', fr: 'Frontend' },
    items: ['Vue.js', 'React', 'Next.js', 'Microfrontends', 'HTML/CSS', 'Cypress', 'Tailwind CSS'],
  },
  {
    id: 'devops',
    label: { en: 'Platform & DevOps', fr: 'Plateforme & DevOps' },
    featured: true,
    items: ['Docker', 'Kubernetes', 'ArgoCD', 'GitLab CI', 'Prometheus', 'Elasticsearch', 'Kibana'],
  },
  {
    id: 'architecture',
    label: { en: 'Architecture', fr: 'Architecture' },
    items: ['Microservices', 'RESTful APIs', 'Distributed Systems', 'Data Pipelines', 'Event-driven'],
  },
  {
    id: 'xr',
    label: { en: 'Game & XR', fr: 'Jeux & XR' },
    items: ['Unreal Engine 4', 'AR/VR (XR)', 'HoloLens', 'Magic Leap', 'Real-time Systems'],
  },
  {
    id: 'ai',
    label: { en: 'AI & Dev Tools', fr: 'IA & Outils Dev' },
    items: ['Claude Code', 'GitHub Copilot', 'Cursor', 'LLM-assisted Dev', 'OpenAI API', 'Prompt Engineering'],
  },
  {
    id: 'methods',
    label: { en: 'Methods', fr: 'Méthodes' },
    items: ['Agile/Scrum', 'System Design', 'Code Review', 'Mentoring', 'Tech Talks', 'Documentation'],
  },
]

export const hotSkills = ['Go', 'C#', 'TypeScript', 'Kubernetes', 'Docker', 'Unreal Engine 4', '.NET']

export const marqueeItems = [
  'Go', 'C# / .NET', 'TypeScript', 'Kubernetes', 'Docker',
  'Rainbow Six Siege', 'Ubisoft', 'Unreal Engine 4',
  'AR / XR Research', '100M+ Players', 'GitLab CI', 'Vue.js',
  'Microservices', 'Distributed Systems', 'Live Service',
]
