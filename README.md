# Portfolio — Atelier numérique

Site portfolio statique, pensé pour présenter mes projets à des clients potentiels.
Aucune dépendance, aucun build : juste du HTML/CSS/JS, prêt à héberger sur GitHub Pages.

## Structure

```
index.html          → page d'accueil (hero + sélection de projets)
projets.html         → catalogue complet des projets
contact.html         → page de contact (Discord)
styles.css           → tous les styles (tokens en haut du fichier)
projects-data.js     → LA seule chose à modifier pour ajouter un projet
app.js               → génère les fiches projet à partir de projects-data.js
```

## Ajouter un nouveau projet

Ouvre `projects-data.js` et ajoute un objet à la fin du tableau `PROJECTS` :

```js
{
  ref: "06",                    // numéro de référence (incrémental)
  title: "Nom du projet",
  category: "Site web",         // Site web / Bot Discord / Jeu Roblox / Outil IA...
  status: "En cours",           // "En cours" ou "Terminé"
  summary: "Une ou deux phrases qui expliquent le projet.",
  stack: ["Techno 1", "Techno 2"],
  icon: "telescope",            // telescope | bot | book | controller
  featured: false,              // true = apparaît aussi sur la page d'accueil
  link: "",                     // lien externe si besoin
}
```

Rien d'autre à toucher : la fiche apparaît automatiquement sur `projets.html`,
et sur `index.html` si `featured: true`.

### Ajouter une nouvelle icône

Les icônes sont des SVG en ligne, définies dans `app.js` (objet `ICONS`).
Ajoute une entrée avec un nouvel identifiant, puis utilise ce même identifiant
dans le champ `icon` du projet.

## Déploiement (GitHub Pages)

1. Pousser le dossier sur un dépôt GitHub.
2. Dans les paramètres du dépôt → Pages → choisir la branche et le dossier racine.
3. Le site est en ligne à l'adresse fournie par GitHub.

## Design

- Papier froid + encre + accent indigo, typographie serif (titres) / sans-serif (texte) / mono (métadonnées).
- Chaque projet est présenté comme une fiche technique numérotée ("carnet de laboratoire").
- Zéro dépendance JS externe, zéro framework.
