Ever After Events — Demo

Démarrage rapide

1. Installer les dépendances
   npm install

2. Lancer le serveur de développement
   npm run dev

Stack technique
- React + Vite
- TailwindCSS
- Framer Motion
- React Router
- React Hook Form
- Lucide Icons

Fonctionnalités clés incluses
- Wedding Planner Intelligent (estimation, recommandations, planning simplifié)
- Pages: Accueil, Planner
- Design system minimal (tailwind tokens)
- Accessibilité de base et bonnes pratiques

Déploiement
- GitHub: Push du repo -> créer un repository -> push
- Vercel: Connecter le repo, build command: npm run build, output: dist
- Netlify: Connecter le repo, build command: npm run build, publish: dist

Ce projet est une base — pour compléter: galerie filtrable, pages supplémentaires, map interactive, slider avancé, backend pour sauvegarde des demandes.

Thème et personnalisation rapide
- Les couleurs principales sont centralisées dans `src/data/theme.js`.
- Le site applique ces couleurs automatiquement au chargement via `src/applyTheme.js`.
- Pour changer la palette : modifier `src/data/theme.js` (valeurs hex) puis recharger la page. Aucune modification CSS directe n'est nécessaire pour la plupart des changements de couleurs.
- Le logo calligraphique se trouve dans `public/assets/logo.svg` — remplacez-le si vous souhaitez une autre version.

Serverless shared theme (Vercel / Netlify)

A serverless function is provided to persist a shared theme so all visitors see the same palette. A ready-to-copy implementation is included in the repository as `serverless-save-theme.js`. To enable it in your deployment:

1) Vercel
  - Copy `serverless-save-theme.js` to `/api/save-theme.js` in the project root.
  - In your Vercel project settings, add these environment variables: `GITHUB_TOKEN` (personal access token with repo contents scope), `REPO_OWNER` (your GitHub user/org), `REPO_NAME` (repo name). Optionally set `ADMIN_SECRET` to a secret string; when set the endpoint will require the header `X-Admin-Token: <ADMIN_SECRET>` or `Authorization: Bearer <ADMIN_SECRET>`.
  - Deploy. The endpoint will be available at `/api/save-theme` (or `/.vercel/functions/save-theme` depending on Vercel configuration).

2) Netlify
  - Adapt the file into `netlify/functions/save-theme.js` and set the same environment variables.

3) Usage
  - POST the full theme JSON to the endpoint, e.g.:
    POST /api/save-theme
    { "theme": { /* theme object - same shape as src/data/theme.js entries */ }, "message": "Update shared theme" }

Security
- Keep `GITHUB_TOKEN` secret. This function will commit a file (`shared/theme-shared.json`) to the repository. Lock down the endpoint with `ADMIN_SECRET` or integrate proper authentication before using in production.

Notes
- Because the function commits to the repository, updates will appear in Git history and trigger any CI/CD you have configured.
