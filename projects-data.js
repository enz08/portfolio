/**
 * projects-data.js
 * ------------------------------------------------------------
 * Chaque entrée décrit une fiche projet.
 * Pour ajouter un nouveau projet : copie un objet ci-dessous,
 * modifie ses champs, et il apparaîtra automatiquement
 * sur la page d'accueil (si "featured: true") et sur /projets.html.
 *
 * Champs :
 *  - ref        : numéro de référence affiché (ex: "01")
 *  - title      : nom du projet
 *  - category   : catégorie affichée (Site web, Bot Discord, Jeu Roblox, Outil IA...)
 *  - status     : "En cours" | "Terminé"
 *  - summary    : description courte (1-2 phrases)
 *  - stack      : tableau de technologies utilisées
 *  - icon       : identifiant d'icône ("telescope" | "bot" | "book" | "controller")
 *  - featured   : true pour apparaître dans la sélection de la page d'accueil
 *  - link       : URL externe (optionnelle, sinon vide)
 */

const PROJECTS = [
  {
    ref: "01",
    title: "Orbite",
    category: "Site web",
    status: "En cours",
    summary:
      "Un site d'astronomie avec calendrier des événements célestes, actualités spatiales quotidiennes et newsletter — pensé pour rester simple à faire vivre au fil du temps.",
    stack: ["HTML/CSS/JS", "GitHub Pages", "Newsletter"],
    icon: "telescope",
    featured: true,
    link: "",
  },
  {
    ref: "02",
    title: "Prism",
    category: "Bot Discord",
    status: "En cours",
    summary:
      "Un bot Discord communautaire complet : niveaux, économie, mise en relation entre membres, gestion d'événements et modération, avec un dashboard web dédié.",
    stack: ["Python", "discord.py", "FastAPI", "SQLite"],
    icon: "bot",
    featured: true,
    link: "",
  },
  {
    ref: "03",
    title: "Inkora",
    category: "Outil IA",
    status: "En cours",
    summary:
      "Un assistant d'écriture pensé pour les projets de romans qui s'étalent sur plusieurs semaines : éditeur avec sauvegarde automatique, suivi d'objectifs et actions IA ciblées.",
    stack: ["HTML/JS", "Flask", "Moteur NLP maison"],
    icon: "book",
    featured: true,
    link: "",
  },
  {
    ref: "04",
    title: "Urgence Paris",
    category: "Jeu Roblox",
    status: "En cours",
    summary:
      "Un jeu Roblox d'intervention avec système économique, navigation vers des points d'intérêt et boutique intégrée pour véhicules et équipements.",
    stack: ["Lua", "Roblox Studio"],
    icon: "controller",
    featured: true,
    link: "",
  },
  {
    ref: "05",
    title: "Simulateur — Studio IA",
    category: "Jeu Roblox",
    status: "En cours",
    summary:
      "Un jeu de gestion où le joueur fait grandir sa propre entreprise d'IA : locaux, serveurs, GPU, et revente de son IA en fin de partie.",
    stack: ["Lua", "Roblox Studio"],
    icon: "controller",
    featured: false,
    link: "",
  },
];
