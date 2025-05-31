# 📁 Organisation des Images - Politicraft Wiki

## Structure des dossiers

Voici comment organiser vos images et logos dans le dossier `public/` :

```
public/
├── logos/              # Logos Politicraft
│   ├── logo-main.png   # Logo principal
│   ├── logo-icon.png   # Icône seule
│   └── favicon.ico     # Favicon du site
├── images/             # Images générales
│   ├── screenshots/    # Captures d'écran du jeu
│   ├── banners/        # Bannières et headers
│   └── ui/            # Images d'interface
├── icons/              # Icônes et petites images
│   ├── mods/          # Icônes des mods
│   └── features/      # Icônes des fonctionnalités
└── minecraft/          # Assets Minecraft
    ├── blocks/        # Images de blocs
    ├── items/         # Images d'objets
    └── structures/    # Images de structures
```

## Comment utiliser les images

### Dans vos composants React/Next.js :

```jsx
import Image from 'next/image';

// Pour une image normale
<Image 
  src="/images/screenshots/gameplay.png" 
  alt="Gameplay Politicraft"
  width={800} 
  height={600} 
/>

// Pour un logo
<Image 
  src="/logos/logo-main.png" 
  alt="Logo Politicraft"
  width={200} 
  height={100} 
/>
```

### Dans les fichiers MDX :

```mdx
![Description de l'image](/images/screenshots/exemple.png)
```

## Formats recommandés

- **Logos** : PNG avec transparence, SVG si vectoriel
- **Screenshots** : PNG ou JPG, résolution 1920x1080 ou plus
- **Icônes** : PNG 64x64 ou SVG
- **Bannières** : PNG/JPG, format 16:9 recommandé

## Optimisation

- Compressez vos images avant de les ajouter
- Utilisez des formats modernes (WebP) quand possible
- Next.js optimise automatiquement les images avec le composant `Image`

## Exemples de noms de fichiers

- `logo-politicraft-main.png`
- `screenshot-nation-creation.png`
- `icon-create-mod.png`
- `banner-hero-section.jpg`
