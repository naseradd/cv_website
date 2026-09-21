# Audit éditorial FR/EN — 21 septembre 2026

Statut : passe éditoriale FR/EN complète et anonymisation validées localement. Fusion dans main et publication autorisées par Dany le 21 septembre 2026. Les exemples et constats ci-dessous documentent l’audit initial.
Base inspectée : `a51d5a7`, composants réellement montés sur la page et données qu’ils affichent.

## Diagnostic

La refonte a ajouté trop de slogans à un profil qui dispose déjà de faits intéressants.
Le défaut vient surtout de leur accumulation : presque chaque section commence par
deux fragments de phrase, puis une promesse générale. Les descriptions les plus précises
sont reléguées sous ces titres.

Le terme « IA » n’est pas en lui-même un problème. Les usages que Dany a décrits sont
pertinents. En revanche, répéter « concret », « humain », « intention », « impact »,
« avancé » ou « hands-on » ne démontre pas ces qualités.

Ce diagnostic est éditorial : il décrit l’impression produite, pas une méthode de détection
de textes générés. Il ne remet pas en cause les faits professionnels fournis par Dany.

## Priorité 1 — Retirer les slogans sans information

| Emplacement | Texte actuel | Pourquoi le retirer | Proposition |
| --- | --- | --- | --- |
| Badge du portrait | HUMAN FIRST. AI EMPOWERED. | Slogan d’outil IA, anglais imposé en FR, aucune information personnelle. | Supprimer le badge et son conteneur. |
| Sous le portrait | Ingénieur. Créateur. À l’écoute. / An engineer. A builder. A people person. | Trois qualités autoattribuées ; rythme publicitaire. | Supprimer cette phrase. Garder le nom et Montréal. |
| Pied de page | Concevoir avec intention. / Engineering with intention. | Formule interchangeable avec celle d’une agence ou d’un produit. | Garder uniquement le copyright et le nom. |
| Bloc CV | Deux langues. La même approche du métier. / Two languages. The same engineering mindset. | Transforme une information pratique en slogan sans intérêt. | « Disponible en français et en anglais. » / “Available in French and English.” |
| Sous le workflow IA | Le jugement humain à chaque étape. Contexte clair, agents ciblés, résultats vérifiés. | Accumulation de garanties générales ; ne décrit pas une action observable. | Supprimer : la vérification est déjà expliquée dans le workflow. |
| Sous le titre Parcours | Ingénierie, responsabilités et collaboration. | Liste de notions attendues de tout profil comparable. | Supprimer cette introduction. |

## Priorité 2 — Remplacer les titres publicitaires par des titres descriptifs

| Clé / zone | Actuel FR / EN | Proposition FR / EN |
| --- | --- | --- |
| `heroSubtitle` | Développement logiciel. IA agentique. Impact concret. / Software engineering. Agentic AI. Real-world impact. | Applications web, outils métier et systèmes distribués / Web applications, business tools and distributed systems |
| `expertiseTitle` | Votre prochain défi. Mon terrain de jeu. / Your next challenge. My kind of work. | Développement et conseil / Software development & consulting |
| `aiTitle` | Au-delà du prompt. Au cœur du travail. / Beyond the prompt. Into the workflow. | Comment j’utilise l’IA / How I use AI |
| `projectsTitle` | Du concret, avant tout. / Built for a reason. | Quelques projets / Selected projects |
| `experienceTitle` | Ancré dans la production. / Grounded in production. | Expérience professionnelle / Professional experience |
| `aboutTitle` | L’exigence technique. Le contact humain. / Technical depth. A human approach. | À propos / About me |
| `cvTitle` | Mon parcours, à emporter. / Take my résumé with you. | Mon CV / My résumé |

Le titre « Une idée en tête ? / Have something in mind? » est courant, mais compréhensible
et adapté au contact. Ce n’est pas une suppression prioritaire. « Parlons de votre projet »
fonctionne également : il propose une action claire.

Les petits labels de section devront éviter de répéter le nouveau grand titre.
On peut conserver les numéros comme repères visuels, sans inventer une nouvelle accroche
pour remplir l’espace laissé libre.

## Décision de Dany — anonymiser les projets

La proposition initiale d’utiliser les vrais noms est abandonnée.
Conserver Rainbow Six Siege et « Monetization tooling ». Les autres fiches utilisent
uniquement des intitulés descriptifs et les principes techniques :

| FR | EN |
| --- | --- |
| Gestion financière | Personal finance |
| Jeu multijoueur | Multiplayer game |
| Interfaces en réalité augmentée | Augmented reality interfaces |

Retirer aussi les noms des illustrations et les liens identifiant la recherche.
Ne pas réintroduire les marques personnelles dans les prochaines réécritures.
Les établissements et employeurs restent dans le parcours. Les PDF V3 restent inchangés.

## Exemples de réécriture des paragraphes

Direction proposée : première personne, vocabulaire professionnel courant, phrases complètes.
Le ton personnel et professionnel a été retenu pour l’application de cette passe.

### Accueil

FR :

> Je suis Engineering Team Lead chez Ubisoft, sur Rainbow Six Siege. Je développe des outils de monétisation et travaille aussi en freelance sur des applications web et des outils métier.

EN :

> I’m an Engineering Team Lead at Ubisoft, working on Rainbow Six Siege. I develop monetization tools and also take on freelance projects involving web applications and business software.

Le rôle, l’employeur, le domaine et l’activité freelance remplacent « pratique avancée »,
« systèmes fiables » et « du cadrage à la production ». La section IA reste présente
plus bas ; son sujet n’a pas besoin d’être répété dans chaque ligne de l’accueil.

### Section IA

FR :

> J’utilise ChatGPT, Codex et Claude Code pour développer des applications, rédiger de la documentation et organiser le travail. Je crée des skills, des intégrations MCP et des processus faisant intervenir plusieurs agents. Je teste régulièrement de nouveaux modèles et partage mes retours d’expérience en entreprise.

EN :

> I use ChatGPT, Codex and Claude Code to develop applications, write documentation and organize work. I build skills, MCP integrations and workflows involving multiple agents. I regularly try new models and share what I learn at work.

Cette formulation décrit les usages autorisés par le contexte, sans annoncer de gains de
productivité mesurés ni prétendre que les produits personnels sont déployés chez Ubisoft.
« Skills », « MCP » et « agents » restent utiles ici ; ils n’ont pas à apparaître à nouveau
dans le résultat de chaque projet.

### Applications et outils métier

FR :

> Je développe des applications web et des outils internes pour gérer des données et les tâches des équipes. Je travaille principalement en TypeScript, Go et C#.

EN :

> I develop web applications and internal tools for managing data and team tasks. I work mainly with TypeScript, Go and C#.

Cela dit ce qui est réalisé. « Transformer un processus complexe en produit agréable »
présente un résultat souhaitable sans expliquer le service.

### À propos

FR :

> Je vis à Montréal et travaille en français et en anglais. Avant Ubisoft, j’ai développé des logiciels chez Aspen Technology et mené des recherches en réalité augmentée à Polytechnique Montréal. Je développe aussi mes propres applications, notamment dans la gestion financière et le jeu multijoueur.

EN :

> I live in Montréal and work in French and English. Before Ubisoft, I developed software at Aspen Technology and researched augmented reality at Polytechnique Montréal. I also work on my own applications, including personal finance tools and multiplayer games.

Une bio courte suffit. Ne pas inventer de traits de personnalité ou d’anecdotes pour
compenser la suppression des phrases génériques. Cette version peut encore être raccourcie
si elle répète trop le parcours et les projets déjà visibles.

## Autres points qui renforcent l’impression artificielle

- Les constructions en trois éléments reviennent dans l’accueil, le portrait, les services,
  le workflow, le parcours et le contact. Garder les listes là où elles aident à comparer,
  pas comme signature rythmique de chaque paragraphe.
- « Thoughtful architecture », « real-world impact », « hands-on », « actually works » et
  « engineering mindset » sont plus visibles en anglais. L’EN demande sa propre réécriture,
  pas une traduction mot à mot des nouvelles phrases françaises.
- Les qualités professionnelles doivent être appuyées par les tâches : remplacer
  « Multiplicateur technique / Technical multiplier » par le mentorat, les présentations
  techniques et la documentation déjà mentionnés.
- Dans le parcours FR, « Scalé », « cross-équipe », « plateformes enterprise » et
  « overlays RA » sont des calques. Préférer « adapté à la charge », « entre équipes »,
  « logiciels d’entreprise » et « éléments affichés en réalité augmentée », selon la phrase.
- La phrase d’Aspen Technology est répétée entre le résumé et la première contribution.
- La chronologie à cinq étapes de la section IA reste assez universelle. Les détails doivent
  expliquer l’usage des agents : contexte fourni, tâche confiée, revue effectuée, document
  conservé. Ne pas faire passer une séquence standard pour une méthode propriétaire.
- Le schéma à orbites et l’icône scintillante peuvent évoquer une landing page IA. C’est un
  facteur visuel secondaire ; pas de refonte proposée maintenant puisque l’aspect général
  convient à Dany. Le premier changement porte sur les textes et badges.

## Surfaces à traiter lors de la réécriture locale

- `src/data/site.ts` : majorité des phrases et titres FR/EN.
- `src/components/sections/Hero.tsx` : slogan anglais codé en dur sur le portrait.
- `src/components/sections/Portfolio.tsx` : slogan Photo Dash dans l’illustration,
  labels et phrase de contact codés en dur.
- `src/data/experience.ts` : jargon et répétitions dans le parcours.
- `src/app/layout.tsx` : retirer « hands-on » de la description ; le rôle principal peut
  rester le titre de page, avec les usages de l’IA décrits dans le contenu.
- `scripts/social-card.svg` puis `public/og.png` : remplacer “Reliable software.
  Thoughtful systems. Hands-on AI.” par des domaines descriptifs.

Les anciens composants non montés et leur dictionnaire dans `src/lib/i18n.tsx` ne sont
pas pris pour du texte visible dans cet audit. Les PDF V3 sont hors du périmètre éditorial.

## Suite proposée

1. Choisir le ton et retenir les suppressions/remplacements.
2. Appliquer la passe FR/EN dans une branche locale, sans push.
3. Contrôler le rendu local : titres plus courts, conteneurs vides supprimés, aucun trou
   visuel, boutons CV et changement de langue conservés.
4. Laisser Dany relire la version locale avant toute nouvelle publication.

L’audit initial ajoutait uniquement ce document. Les validations de l’implémentation sont consignées ci-dessous.

### Validation de l’anonymisation locale

Après la demande d’anonymisation : build et TypeScript réussis ; trois scénarios
navigateur FR/EN réussis à 375, 768 et 1440 px, avec contrôles d’accessibilité.
Les vingt fichiers HTML/JS/TXT/JSON de l’export ont été contrôlés : aucun ancien nom
personnel ni lien direct identifiant la publication parmi les références recherchées.
Les liens de recherche historiques restent dans un module non importé par la page active.
Les PDF V3 et l’historique Git ne sont pas modifiés par cette passe.
Prévisualisation locale : http://127.0.0.1:4173/#projects . Aucun push ni déploiement.

### Passe éditoriale complète appliquée

- Suppression du badge anglais du portrait, de sa légende publicitaire, de la note du
  workflow, de la phrase du pied de page et de l’accroche secondaire du contact.
- Titres descriptifs FR/EN, introductions redondantes supprimées et biographie raccourcie.
- Services, usages de l’IA, étapes de développement et expériences réécrits avec des actions
  précises. Suppression des calques et des qualités autoattribuées.
- Noms des projets anonymisés conservés ; seuls Rainbow Six Siege et Monetization tooling
  restent identifiés. Les descriptions de recherche restent génériques.
- Métadonnées et carte sociale réécrites ; PNG régénéré.
- Styles des éléments retirés supprimés, sans changement de direction visuelle.
- Build et TypeScript : PASS. Six tests navigateur locaux : PASS, FR/EN à 375, 768
  et 1440 px, accessibilité, clavier, CV, réduction des animations et stockage indisponible.
- Contrôle de vingt fichiers exportés : aucun ancien nom personnel, lien direct de recherche
  ou slogan ciblé retrouvé parmi les expressions recherchées.
- Prévisualisation : http://127.0.0.1:4173/ . PDF V3 inchangés. Aucun push ni déploiement.

### Livraison autorisée

- Nouveau portrait fourni par Dany, optimisé en WebP ; cadrage vérifié sur desktop et mobile.
- Formation : « Institut polytechnique de Grenoble — Esisar » en français,
  « Polytechnique Grenoble » en anglais, selon les corrections de Dany.
- Build statique et TypeScript réussis après les dernières corrections.
- Six tests navigateur locaux relancés avant fusion : PASS.
- Dany demande la fusion de tous ces changements et le redéploiement GitHub Pages.
