# Dany Naser Addin — portfolio

Vitrine freelance bilingue : développement logiciel, architecture et IA agentique.
Next.js / React, export statique, GitHub Pages sur **https://www.dany-naser.com**.

## Développement et validation

```sh
npm ci
npm run dev
npm run build
npm run typecheck
npm run test:e2e
```

Les tests navigateur utilisent Google Chrome installé et Python 3 pour servir `out/`.
Ils couvrent FR/EN à 375, 768 et 1440 px, les contrôles clavier, le panneau CV,
le téléchargement et l’intégrité des PDF, la mémorisation de langue, le mode sans
animations, le contenu sans JavaScript et les contrôles automatisés d’accessibilité axe.
Les captures et traces restent dans `test-results/` (ignoré par Git).
Pour contrôler une version publiée : `SITE_URL=https://www.dany-naser.com npm run test:e2e`.

## Contenu

- `src/data/site.ts` : textes FR/EN, expertises, méthode IA, réalisations et adresses des CV.
- `src/data/experience.ts` : expériences professionnelles.
- `src/data/personal.ts` : identité et liens de contact.
- `src/app/globals.css` : styles responsive et effets, avec réduction du mouvement.

L’anglais est la langue initiale. Le choix FR/EN est mémorisé localement ; le site
reste utilisable si le stockage navigateur est désactivé. Les illustrations des projets
sont schématiques : elles n’exposent aucune donnée financière ou interne réelle.
Photo Dash est présenté comme un produit personnel en développement.

## Mettre à jour les CV

Remplacer ces fichiers en conservant leurs noms pour ne pas casser les liens partagés :

- `public/cv/dany-naser-addin-fr.pdf`
- `public/cv/dany-naser-addin-en.pdf`

Versions initiales : PDF V3 d’avril 2026, copies inchangées des documents fournis.
Si la version change, mettre à jour `cvVersion` dans les deux langues de `src/data/site.ts`.
Le site n’accède jamais à iCloud à l’exécution.

## Publication

Le push sur `main` déclenche `.github/workflows/deploy.yml` : installation reproductible,
build statique, puis publication du dossier `out/` avec `actions/deploy-pages`.
GitHub Pages doit utiliser **GitHub Actions** comme source. Le domaine est conservé
par `public/CNAME` dans l’export ; aucun changement DNS n’est requis.

`npm run deploy` redéclenche ce même workflow sur la version déjà poussée de `main`.
Après publication, vérifier la page, les deux URL `/cv/*.pdf` et `/og.png`.

La carte sociale est générée depuis `scripts/social-card.svg` et publiée sous `public/og.png`.
Régénération avec Sharp fourni par l’installation Next.js :

```sh
node -e "require('sharp')('scripts/social-card.svg').png().toFile('public/og.png')"
```
