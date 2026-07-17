Déploiement — Ever After Events

Pré-requis : un repository Git hébergé (GitHub conseillé)

1) GitHub
- Initialiser un repo local :
  git init
  git add .
  git commit -m "Initial commit"
- Créer un repo GitHub et push :
  git remote add origin git@github.com:username/ever-after-events.git
  git branch -M main
  git push -u origin main

2) Vercel
- Créer un compte puis cliquer sur "New Project" -> Import Git repository
- Sélectionner le repo
- Build Command: npm run build
- Output Directory: dist
- Environment: laisser vide pour la version demo
- Déployer

3) Netlify
- Créer un compte puis "Add new site" -> From Git
- Sélectionner le repo
- Build command: npm run build
- Publish directory: dist
- Déployer

4) Remarques
- Pour les previews locales: npm run dev
- Pour prod build: npm run build (génère dist/)
- Ajouter des secrets ENV via les interfaces Vercel/Netlify si vous utilisez un backend réel.
