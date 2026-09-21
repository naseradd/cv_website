# Portfolio — validation du 21 septembre 2026

## Changements

- Identité sombre/violette conservée : accueil asymétrique avec portrait, nom détouré,
  lumière au pointeur et mouvements limités aux appareils adaptés.
- Contenus FR/EN orientés missions freelance et rôle actuel Engineering Team Lead.
- Section IA agentique avec cinq étapes interactives et trois domaines de pratique.
- Quatre réalisations, dont deux produits personnels identifiés comme tels.
- Consultation et téléchargement des CV V3 sous le domaine, sans dépendance iCloud.
- Métadonnées cohérentes, carte sociale, robots et sitemap statiques.
- Déploiement unifié sur le workflow GitHub Pages existant.

## Contrôles locaux

- Build Next.js statique : PASS.
- TypeScript : PASS.
- Six tests Playwright : PASS après correction d’un débordement décoratif sur mobile
  et du cycle de tabulation du panneau CV.
- FR/EN : 375, 768 et 1440 px ; pas de débordement horizontal, pas d’erreur JS ou
  de réponse HTTP en erreur pendant les scénarios.
- Axe : aucun problème détecté dans le périmètre WCAG A/AA testé, desktop/mobile
  et panneau CV. Ce résultat ne remplace pas un audit exhaustif d’accessibilité.
- Vérification visuelle des captures : accueil mobile/desktop, section IA,
  réalisations et panneau CV.
- Langue persistée, stockage indisponible, réduction du mouvement et lecture
  du contenu essentiel sans JavaScript : PASS.
- Ouverture du panneau au clavier, boucle Tab, fermeture Escape et retour du focus : PASS.
- PDF FR/EN : SHA-256 identiques aux originaux iCloud, fichiers inchangés.

SHA-256 :

```text
FR f4a97f47146dee0471c0784da5dc30ac0041c3d7d5cbd532941f6f864ec2b19f
EN aa4708ac9e58c8773f8d84555225dea00072b82887b715e9a10e131842023fc5
```

Navigateur de validation : Google Chrome via Playwright. Safari et appareils physiques
non testés. Captures et traces locales dans `test-results/` (non versionnées).

## Publication

Vérifier le succès du workflow sur le commit livré, puis les réponses HTTP du domaine,
les signatures des deux PDF et l’image sociale. Le test distant réutilise les mêmes
scénarios avec `SITE_URL=https://www.dany-naser.com`.
