# Copilot Instructions pour Politicraft Wiki

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Contexte du projet
Ce projet est un wiki/site vitrine pour le modpack Minecraft **Politicraft**. Le modpack se concentre sur :
- 🏰 Gameplay semi-RP centré sur la création et gestion de "pays"
- 👥 Coopération entre membres d'un même pays  
- 💱 Commerce et diplomatie entre nations
- ⚙️ Automatisation avec les mods Create
- 🏙️ Gestion de villes avec Minecolonies

## Stack technique
- **Framework** : Next.js 15 avec App Router
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Documentation** : MDX pour les articles et guides
- **Thème** : Inspiré de l'univers Minecraft et médiéval-politique

## Guidelines de développement
1. **Design** : Utiliser un thème sombre avec des accents dorés/cuivrés rappelant l'artisanat
2. **Structure** : Organiser le contenu en sections (Mods, Guides, Serveur, Nations)
3. **Performance** : Optimiser les images et utiliser les fonctionnalités Next.js (Image, Link)
4. **Accessibilité** : Respecter les standards d'accessibilité web
5. **Responsive** : Design mobile-first avec Tailwind CSS
6. **SEO** : Optimiser les métadonnées pour chaque page

## Structure du contenu
- Page d'accueil avec présentation du modpack
- Section "Mods" : Détails sur Create, Minecolonies, etc.
- Section "Guides" : Tutoriels pour débuter, créer une nation, etc.
- Section "Serveur" : Informations de connexion, règles
- Section "Nations" : Galerie des pays créés par les joueurs
- Section "Téléchargements" : Liens vers CurseForge et ressources

## Conventions de code
- Utiliser des composants React fonctionnels avec TypeScript
- Nommer les fichiers en kebab-case pour les pages et PascalCase pour les composants
- Organiser les composants par fonctionnalité dans src/components/
- Utiliser les hooks Next.js appropriés (useSearchParams, useRouter, etc.)
- Documenter les props TypeScript avec JSDoc quand nécessaire
