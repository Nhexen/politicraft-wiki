# Politicraft Wiki

Site web officiel et wiki pour le modpack Minecraft **Politicraft** - un serveur communautaire axé sur la coopération, la construction et la gouvernance.

## 🌍 À propos de Politicraft

Politicraft est un serveur Minecraft communautaire basé sur PaperMC qui propose un gameplay semi-RP centré sur la création et la gestion de "pays". Les joueurs coopèrent au sein de leurs nations pour assurer développement, survie et prospérité.

### Caractéristiques principales :
- 👥 **Coopération** : Organisation entre membres pour gérer ressources et territoire
- ⚙️ **Mods Create** : Automatisation et ingénierie au cœur du gameplay
- 🏙️ **Minecolonies** : Développement de cités peuplées de PNJ
- 💱 **Commerce & Diplomatie** : Échanges entre nations et relations internationales

## 🚀 Technologies

Ce site est développé avec :
- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS utilitaire
- **MDX** - Markdown avec composants React pour les guides
- **Lucide React** - Icônes modernes
- **ESLint** - Linting du code

## 📁 Structure du projet

```
politicraft-wiki/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── guides/            # Guides et tutoriels
│   │   ├── mods/              # Documentation des mods
│   │   ├── nations/           # Showcase des nations
│   │   ├── serveur/           # Informations serveur
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Page d'accueil
│   └── components/            # Composants React réutilisables
│       └── Navigation.tsx     # Navigation principale
├── public/                    # Assets statiques
├── mdx-components.tsx         # Configuration MDX
└── next.config.ts            # Configuration Next.js
```

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd politicraft-wiki

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts disponibles
- `npm run dev` - Démarrage en mode développement (avec Turbopack)
- `npm run build` - Construction pour la production
- `npm run start` - Démarrage du serveur de production
- `npm run lint` - Vérification ESLint

## 🎨 Design et thème

Le site utilise un thème sombre avec des accents dorés/ambrés qui évoquent l'univers médiéval de Minecraft :
- **Couleurs principales** : Slate (arrière-plans), Amber (accents)
- **Typographie** : Geist (Google Fonts)
- **Design** : Responsive, moderne avec des effets de survol subtils

## 📝 Gestion du contenu

### Pages MDX
Les guides peuvent être créés avec MDX dans le dossier `src/app/guides/`. MDX permet d'inclure des composants React directement dans le markdown.

### Ajout de nouvelles nations
Pour ajouter une nation dans la page Nations, modifiez le tableau `nations` dans `src/app/nations/page.tsx`.

## 🚀 Déploiement

Le site peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **GitHub Pages** (avec export statique)

### Build de production

```bash
npm run build
```

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commitez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📞 Support

Pour toute question concernant :
- **Le site web** : Ouvrir une issue sur GitHub
- **Le serveur Politicraft** : Rejoindre le Discord du serveur
- **Le modpack** : Consulter la page CurseForge

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Politicraft** - Cooperate, Build, Govern 🏰
