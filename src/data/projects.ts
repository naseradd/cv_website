export interface Project {
  id: string
  title: { en: string; fr: string }
  description: { en: string; fr: string }
  stack: string[]
  image: string
  type: 'research' | 'professional' | 'personal'
  link?: string
}

export const projects: Project[] = [
  {
    id: 'ar-uav',
    title: {
      en: 'AR UAV Swarm Control — Research',
      fr: 'Contrôle Essaim UAV en RA — Recherche',
    },
    description: {
      en: 'Hands-free AR application on Microsoft HoloLens 1.0 and Magic Leap 1 (Unreal Engine 4) enabling a single operator to pilot a drone swarm during fire emergencies. Real-time 3D spatial overlays, live sensor data integration.',
      fr: 'Application RA mains-libres sur Microsoft HoloLens 1.0 et Magic Leap 1 (Unreal Engine 4) permettant à un seul opérateur de piloter un essaim de drones lors d\'urgences incendie. Overlays 3D spatiaux temps réel, intégration données capteurs live.',
    },
    stack: ['Unreal Engine 4', 'C++', 'HoloLens', 'Magic Leap', 'AR/XR'],
    image: '/images/projects/xr.jpg',
    type: 'research',
    link: 'https://arxiv.org/abs/2103.14160',
  },
  {
    id: 'hololens-infra',
    title: {
      en: 'HoloLens Communication Infrastructure',
      fr: 'Infrastructure Communication HoloLens',
    },
    description: {
      en: 'Real-time multi-device synchronization system for HoloLens 1.0. REST API server (Django/Python) with SQL database, C++ communication modules, 3D warehouse WebGL visualization.',
      fr: 'Système de synchronisation multi-device temps réel pour HoloLens 1.0. Serveur REST (Django/Python) avec base SQL, modules de communication C++, visualisation 3D WebGL d\'entrepôt.',
    },
    stack: ['C++', 'Python', 'Django', 'SQL', 'WebGL', 'JavaScript'],
    image: '/images/projects/hololens.jpg',
    type: 'research',
  },
  {
    id: 'warehouse-3d',
    title: {
      en: '3D Warehouse Modelling',
      fr: 'Modélisation 3D d\'Entrepôt',
    },
    description: {
      en: 'Dynamic 3D model generated from a database. Interactive warehouse visualization with WebGL — real-time updates from structured data.',
      fr: 'Modèle 3D dynamique généré depuis une base de données. Visualisation interactive d\'entrepôt en WebGL — mises à jour temps réel depuis des données structurées.',
    },
    stack: ['JavaScript', 'WebGL', 'SQL', 'Python'],
    image: '/images/projects/warehouse.png',
    type: 'personal',
  },
]
