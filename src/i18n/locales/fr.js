// src/i18n/locales/fr.js

export default {
  common: {
    cancel: "Annuler",
    save: "Enregistrer",
    edit: "Modifier",
    yes: "Oui",
    no: "Non",
    close: "Fermer",
    reset: "Réinitialiser",
    completed: "Terminé",
    confirm: "Confirmer",

    select: "Sélectionner...",
    searchField: "Rechercher {{field}}...",
    noResults: "Aucun résultat trouvé",
  },

  date: {
    justNow: "À l'instant",
    minutesAgo: "Il y a {{count}} min",
    hoursAgo: "Il y a {{count}} h",
    yesterday: "Hier",
  },

  navigation: {
    search: "Recherche",
    sticker: "Vignette",
    editSticker: "Modifier la vignette",
    backups: "Sauvegardes",
    databaseInspector: "Inspecteur de base de données",

    home: "Accueil",
    album: "Album",
    tradeCenter: "Centre d'échanges",
    statistics: "Statistiques",
    settings: "Paramètres",
  },

  home: {
    title: "🏆 Panini Tracker",
    subtitle: "Coupe du Monde FIFA 2026",
    albumProgress: "Progression de l'album",

    owned: "Possédées",
    missing: "Manquantes",
    duplicates: "Doublons",
    completed: "Terminé",

    album: "Album",
    search: "Recherche",
    statistics: "Statistiques",
    settings: "Paramètres",

    recentActivity: "Activité récente",
    noStickersCollected: "Aucune vignette collectée pour le moment.",
  },

  album: {
    title: "Album",
    searchPlaceholder: "Numéro, joueur ou équipe...",

    filters: {
      all: "Toutes",
      missing: "Manquantes",
      owned: "Possédées",
      duplicates: "Doublons",
    },

    stats: {
      missing: "{{count}} manquantes",
      duplicates: "{{count}} doublons",
    },

    extraStickers: "Vignettes extra",

    stickerList: {
      empty: "Aucune vignette trouvée.",
    },

    types: {
      regular: "Standard",
      bronze: "Bronze",
      silver: "Argent",
      gold: "Or",
    },
  },

  search: {
    title: "Recherche",
    subtitle: "Trouver une vignette par numéro, joueur ou équipe",
    placeholder: "Numéro, joueur ou équipe...",

    sections: {
      regular: "Vignettes standard",
      extra: "Vignettes extra",
    },

    empty: {
      title: "Rechercher des vignettes",
      text: "Entrez un numéro, joueur, équipe ou code.",
    },

    noResults: {
      title: "Aucune vignette trouvée",
      text: 'Aucun résultat pour "{{query}}".',
    },

    resultCount_one: "{{count}} vignette",
    resultCount_other: "{{count}} vignettes",

    status: {
      collected: "Possédée",
      missing: "Manquante",
    },

    types: {
      regular: "Standard",
      bronze: "Bronze",
      silver: "Argent",
      gold: "Or",
    },
  },

  sticker: {
    collected: "Possédée",
    collection: "Collection",
    owned: "Possédées",
    duplicates: "Doublons",

    information: "Informations sur la vignette",
    code: "Code",
    section: "Section",
    team: "Équipe",
    teamCode: "Code de l'équipe",

    notes: "Notes",
    noNotes: "Aucune note",

    number: "Numéro de vignette",
    name: "Nom de la vignette",
    performedDate: "Date de mise à jour",
  },

  trade: {
    title: "Centre d'échanges",

    duplicates: "Doublons",
    missing: "Manquantes",
    both: "Les deux",

    copy: "Copier",
    share: "Partager",

    shareJson: "Partager le fichier d'échange",
    importJson: "Importer un fichier d'échange",

    summary: "{{duplicates}} doublons • {{missing}} manquantes",

    duplicatesCount: "Doublons ({{count}})",
    missingCount: "Manquantes ({{count}})",

    duplicatesAvailable_one: "{{count}} doublon disponible",
    duplicatesAvailable_other: "{{count}} doublons disponibles",

    stickersMissing_one: "{{count}} vignette manquante",
    stickersMissing_other: "{{count}} vignettes manquantes",

    duplicatesAndMissing: "{{duplicates}} doublons • {{missing}} manquantes",

    copySuccess: "Liste d'échange copiée.",
    copyError: "Impossible de copier la liste.",

    shareSuccess: "Liste d'échange partagée.",
    shareError: "Impossible de partager la liste.",

    shareJsonSuccess: "Fichier d'échange partagé.",
    shareJsonError: "Impossible de partager le fichier d'échange.",

    importSuccess: "Fichier d'échange importé.",
    importError: "Impossible d'importer le fichier d'échange.",

    importedTrade: "Échange importé",
    tradeWith: "Échange avec {{name}}",
    unknownUser: "Utilisateur inconnu",

    theyCanGiveYou: "Ils peuvent vous donner",
    youCanGiveThem: "Vous pouvez leur donner",

    theyCanGiveMe: "Ils peuvent me donner",
    iCanGiveThem: "Je peux leur donner",

    searchStickers: "Rechercher des vignettes...",
    noMatchingStickers: "Aucune vignette correspondante.",
    noStickers: "Aucune vignette disponible.",

    availableStickers: "{{count}} vignettes disponibles",

    noStickersTheyCanGive: "Ils n'ont aucune vignette dont vous avez besoin.",
    noStickersYouCanGive: "Vous n'avez aucune vignette dont ils ont besoin.",
  },

  statistics: {
    title: "Statistiques",
    collectionOverview: "Aperçu de la collection",

    albumCompletion: "Progression de l'album",
    completedPercentage: "{{percentage}}% terminé",

    topTeams: "Meilleures équipes",
    bestCompletedTeams: "Équipes les plus complètes",

    sections: "Sections",
    completionBySection: "Progression par section",

    nationalTeams: "{{count}} équipes nationales",
    sectionsCount: "{{count}} sections",

    achievements: "Succès",
    completed: "{{count}} terminés",

    visualStatistics: "Statistiques visuelles",

    recentActivity: "Activité récente",
    visualActivity: "Activité visuelle",

    duplicates: "Doublons",
    duplicatesByCategory: "Doublons par catégorie",
    none: "Aucun",

    owned: "Possédées",
    missing: "Manquantes",
    completion: "Progression",

    ofTotal: "sur {{total}}",
    completePercentage: "{{percentage}}% terminé",

    availableForTrade: "Disponibles pour échange",
  },

  settings: {
    title: "Paramètres",
    subtitle: "Préférences de l'application",

    general: "Général",
    collection: "Collection",
    developer: "Développeur",
    appearance: "Apparence",
    language: "Langue",
    backup: "Sauvegarde",
    about: "À propos",

    appVersion: "Version de l'application",
    databaseVersion: "Version de la base de données",

    sections: "Sections",
    teams: "Équipes",
    stickers: "Vignettes",
    owned: "Possédées",
    missing: "Manquantes",
    duplicates: "Doublons",

    developerMode: "Mode développeur",
    developerModeDescription: "Activer les outils de développement",

    databaseInspector: "Inspecteur de base de données",
    databaseInspectorDescription: "Inspecter la base de données SQLite",

    resetCollection: "Réinitialiser la collection",
    resetCollectionDescription:
      "Supprimer les vignettes possédées et les doublons",

    rebuildDatabase: "Reconstruire la base de données",
    rebuildDatabaseDescription: "Recréer la base de données SQLite",

    backupManager: "Gestionnaire de sauvegardes",
    backupManagerDescription: "Gérer les sauvegardes locales",

    version: "Version",

    album: "Album",
    albumName: "Panini FIFA World Cup 2026",

    languageDescription: "Choisir la langue de l'application",

    resetCollectionDialogTitle: "Réinitialiser la collection",
    resetCollectionConfirm: "Réinitialiser",
    resetCollectionMessage:
      "Cela supprimera toutes les vignettes possédées, doublons et notes.",
    resetCollectionWarning:
      "Cette action ne peut pas être annulée sans sauvegarde.",

    rebuildDatabaseDialogTitle: "Reconstruire la base de données",
    rebuildDatabaseConfirm: "Reconstruire",
    rebuildDatabaseMessage:
      "La base de données sera recréée à partir des données originales de l'album.",
    rebuildDatabaseWarning:
      "Toute progression, les doublons et les notes seront définitivement supprimés.",

    trade: "Échanges",
    tradeUserName: "Nom pour les échanges",
    tradeUserNameDescription:
      "Ce nom sera inclus dans les fichiers JSON d'échange.",
    tradeUserNamePlaceholder: "Entrez votre nom",
  },

  appearance: {
    title: "Apparence",
    system: "Système",
    light: "Clair",
    dark: "Sombre",
  },

  achievements: {
    title: "Succès",
    subtitle: "Suivez les étapes de votre collection",

    first: {
      title: "Première vignette",
      description: "Collectez votre première vignette.",
    },

    collector10: {
      title: "Collectionneur I",
      description: "Collectez 10 vignettes.",
    },

    collector25: {
      title: "Collectionneur II",
      description: "Collectez 25 vignettes.",
    },

    collector50: {
      title: "Collectionneur III",
      description: "Collectez 50 vignettes.",
    },

    half: {
      title: "Demi-album",
      description: "Atteignez 50% de progression.",
    },

    collector75: {
      title: "Presque terminé",
      description: "Atteignez 75% de progression.",
    },

    collector100: {
      title: "Maître de l'album",
      description: "Terminez l'album.",
    },

    team: {
      title: "Équipe complète",
      description: "Complétez une équipe.",
    },

    section: {
      title: "Section complète",
      description: "Complétez une section.",
    },

    gettingStarted: {
      title: "Bien démarré",
      description: "Collectez 25% de l'album.",
    },

    halfwayThere: {
      title: "À mi-chemin",
      description: "Collectez 50% de l'album.",
    },

    almostComplete: {
      title: "Presque complet",
      description: "Collectez 75% de l'album.",
    },

    albumComplete: {
      title: "Album complet",
      description: "Collectez toutes les vignettes.",
    },
  },

  backup: {
    title: "Sauvegarde",
    backups: "Sauvegardes",
    totalSize: "Taille totale",

    create: "Créer",
    import: "Importer",

    owned: "Possédées",
    missing: "Manquantes",
    duplicates: "Doublons",

    restore: "Restaurer",
    delete: "Supprimer",
    share: "Partager",

    restoreBackup: "Restaurer la sauvegarde",
    currentCollectionReplaced:
      "Votre collection actuelle sera remplacée par cette sauvegarde.",

    duplicatesCount: "{{count}} doublons",

    noBackups: "Aucune sauvegarde",
    createFirstBackup:
      "Créez votre première sauvegarde pour protéger votre collection.",

    deleteTitle: "Supprimer la sauvegarde",
    deleteConfirm: "Supprimer",
    deleteWarning: "Ce fichier sera définitivement supprimé.",

    created: "Sauvegarde créée.",
    imported: "Collection importée.",
    restored: "Sauvegarde restaurée.",
    deleted: "Sauvegarde supprimée.",
  },

  databaseInspector: {
    title: "Inspecteur de base de données",
    subtitle: "SQLite · panini2026.db",

    tables: {
      sections: "Sections",
      teams: "Équipes",
      stickers: "Vignettes",
    },

    summary: {
      title: "Résumé des vignettes",
      regular: "Standard",
      bronze: "Bronze",
      silver: "Argent",
      gold: "Or",
      extra: "Extra",
      owned: "Possédées",
      duplicates: "Doublons",
    },

    searchPlaceholder: "Rechercher {{table}}...",
    loading: "Chargement de {{table}}...",

    error: {
      title: "Erreur de base de données",
    },

    empty: {
      title: "Aucun enregistrement",
      message: "Aucun enregistrement ne correspond à votre recherche.",
    },

    footer: "{{table}} : {{count}} lignes",
    footerFiltered: "{{table}} : {{filtered}} / {{total}} lignes",

    refresh: "Actualiser",
    nullValue: "NULL",
  },
};
