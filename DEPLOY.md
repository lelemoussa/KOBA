# Guide de déploiement KOBA Ferronnerie sur Vercel

## Étapes de déploiement :

### 1. Préparer le projet
```bash
npm run build:prod
```

### 2. Installer Vercel CLI
```bash
npm i -g vercel
```

### 3. Se connecter à Vercel
```bash
vercel login
```

### 4. Déployer le projet
```bash
vercel --prod
```

### 5. Configuration automatique
- Vercel détectera automatiquement Angular
- Le fichier `vercel.json` configurera le routing
- Le site sera disponible sur une URL Vercel

### 6. Domaine personnalisé (optionnel)
- Aller sur vercel.com/dashboard
- Sélectionner le projet
- Onglet "Domains"
- Ajouter votre domaine personnalisé

## Commandes utiles :
- `vercel` : Déploiement preview
- `vercel --prod` : Déploiement production
- `vercel ls` : Lister les projets
- `vercel rm [project-name]` : Supprimer un projet

## Variables d'environnement (si nécessaire) :
- Aller sur vercel.com/dashboard
- Projet > Settings > Environment Variables
- Ajouter les variables nécessaires

Le site sera accessible via une URL comme : https://koba-ferronnerie.vercel.app