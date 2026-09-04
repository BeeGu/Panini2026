// src/i18n/locales/ro.js

export default {
  common: {
    cancel: "Anulează",
    save: "Salvează",
    edit: "Editează",
    yes: "Da",
    no: "Nu",
    close: "Închide",
    reset: "Resetează",
    completed: "Completat",
    confirm: "Confirmă",

    select: "Selectează...",
    searchField: "Caută {{field}}...",
    noResults: "Nu au fost găsite rezultate",
  },

  date: {
    justNow: "Chiar acum",
    minutesAgo: "acum {{count}} min",
    hoursAgo: "acum {{count}} ore",
    yesterday: "Ieri",
  },

  navigation: {
    search: "Căutare",
    sticker: "Sticker",
    editSticker: "Editează stickerul",
    backups: "Backup-uri",
    databaseInspector: "Inspector bază de date",

    home: "Acasă",
    album: "Album",
    tradeCenter: "Schimburi",
    statistics: "Statistici",
    settings: "Setări",
  },

  home: {
    title: "🏆 Panini Tracker",
    subtitle: "Cupa Mondială FIFA 2026",

    albumProgress: "Progresul albumului",

    owned: "Deținute",
    missing: "Lipsă",
    duplicates: "Duplicate",
    completed: "Completat",

    album: "Album",
    search: "Căutare",
    statistics: "Statistici",
    settings: "Setări",

    recentActivity: "Activitate recentă",
    noStickersCollected: "Nu ai colectat încă niciun sticker.",
  },

  album: {
    title: "Album",
    searchPlaceholder: "Număr, jucător sau echipă...",

    filters: {
      all: "Toate",
      missing: "Lipsă",
      owned: "Deținute",
      duplicates: "Duplicate",
    },

    stats: {
      missing: "{{count}} lipsă",
      duplicates: "{{count}} duplicate",
    },

    extraStickers: "Stickere extra",

    stickerList: {
      empty: "Nu s-au găsit stickere.",
    },

    types: {
      regular: "Normal",
      bronze: "Bronz",
      silver: "Argint",
      gold: "Aur",
    },
  },

  search: {
    title: "Căutare",
    subtitle: "Găsește un sticker după număr, jucător sau echipă",
    placeholder: "Număr, jucător sau echipă...",

    sections: {
      regular: "Stickere standard",
      extra: "Stickere extra",
    },

    empty: {
      title: "Caută stickere",
      text: "Introdu un număr, numele unui jucător, o echipă sau un cod.",
    },

    noResults: {
      title: "Nu s-au găsit stickere",
      text: 'Niciun rezultat pentru "{{query}}".',
    },

    resultCount_one: "{{count}} sticker",
    resultCount_other: "{{count}} stickere",

    status: {
      collected: "Colectat",
      missing: "Lipsește",
    },

    types: {
      regular: "Standard",
      bronze: "Bronz",
      silver: "Argint",
      gold: "Aur",
    },
  },

  sticker: {
    collected: "Colectat",

    collection: "Colecție",
    owned: "Deținut",
    duplicates: "Dubluri",

    information: "Informații sticker",
    code: "Cod",
    section: "Secțiune",
    team: "Echipă",
    teamCode: "Cod echipă",

    notes: "Notițe",
    noNotes: "Fără notițe",

    number: "Număr sticker",
    name: "Nume sticker",
    performedDate: "Data efectuării",
  },

  trade: {
    title: "Centrul de schimburi",

    duplicates: "Dubluri",
    missing: "Lipsesc",
    both: "Ambele",

    copy: "Copiază",
    share: "Distribuie",

    shareJson: "Distribuie fișierul",
    importJson: "Importă fișierul",

    summary: "{{duplicates}} dubluri • {{missing}} lipsesc",

    duplicatesCount: "Dubluri ({{count}})",
    missingCount: "Lipsesc ({{count}})",

    duplicatesAvailable_one: "{{count}} dublură disponibilă",
    duplicatesAvailable_other: "{{count}} dubluri disponibile",

    stickersMissing_one: "Lipsește {{count}} sticker",
    stickersMissing_other: "Lipsesc {{count}} stickere",

    duplicatesAndMissing: "{{duplicates}} dubluri • {{missing}} lipsesc",

    copySuccess: "Lista de schimburi a fost copiată.",
    copyError: "Lista de schimburi nu a putut fi copiată.",

    shareSuccess: "Lista de schimburi a fost distribuită.",
    shareError: "Lista de schimburi nu a putut fi distribuită.",

    shareJsonSuccess: "Fișierul de schimburi a fost distribuit.",
    shareJsonError: "Fișierul de schimburi nu a putut fi distribuit.",

    importSuccess: "Fișierul de schimburi a fost importat.",
    importError: "Fișierul de schimburi nu a putut fi importat.",

    importedTrade: "Schimb importat",
    tradeWith: "Schimb cu {{name}}",
    unknownUser: "Utilizator necunoscut",

    theyCanGiveYou: "Îți poate oferi",
    youCanGiveThem: "Îi poți oferi",

    theyCanGiveMe: "Îmi pot oferi",
    iCanGiveThem: "Le pot oferi",

    searchStickers: "Caută stickere...",
    noMatchingStickers: "Nu au fost găsite stickere corespunzătoare.",
    noStickers: "Nu există stickere disponibile.",

    availableStickers: "{{count}} stickere disponibile",

    noStickersTheyCanGive: "Nu are stickere dintre cele care îți lipsesc.",

    noStickersYouCanGive: "Nu ai stickere dintre cele care îi lipsesc.",
  },

  statistics: {
    title: "Statistici",
    collectionOverview: "Prezentarea colecției",

    albumCompletion: "Completarea albumului",
    completedPercentage: "{{percentage}}% completat",

    topTeams: "Top echipe",
    bestCompletedTeams: "Echipe cu cel mai mare progres",

    teams: "Echipe",
    nationalTeams: "{{count}} echipe naționale",

    sections: "Secțiuni",
    completionBySection: "Completarea pe secțiuni",
    sectionsCount: "{{count}} secțiuni",

    achievements: "Realizări",
    completed: "{{count}} finalizate",

    visualStatistics: "Statistici vizuale",

    recentActivity: "Activitate recentă",
    visualActivity: "Activitate vizuală",

    duplicates: "Dubluri",
    duplicatesByCategory: "Stickere dublate pe categorie",
    none: "Fără dubluri",

    owned: "Deținute",
    missing: "Lipsă",
    completion: "Progres",

    ofTotal: "din {{total}}",
    completePercentage: "{{percentage}}% completat",

    availableForTrade: "Disponibile pentru schimb",
  },

  settings: {
    title: "Setări",
    subtitle: "Preferințele aplicației",

    general: "General",
    collection: "Colecție",
    developer: "Dezvoltator",
    appearance: "Aspect",
    language: "Limbă",
    backup: "Backup",
    about: "Despre",

    appVersion: "Versiunea aplicației",
    databaseVersion: "Versiunea bazei de date",

    sections: "Secțiuni",
    teams: "Echipe",
    stickers: "Stickere",
    owned: "Deținute",
    missing: "Lipsă",
    duplicates: "Duplicate",

    developerMode: "Mod dezvoltator",
    developerModeDescription: "Activează instrumentele pentru dezvoltatori",

    databaseInspector: "Inspector bază de date",
    databaseInspectorDescription: "Inspectează baza de date SQLite",

    resetCollection: "Resetează colecția",
    resetCollectionDescription: "Elimină stickerele deținute și duplicatele",

    rebuildDatabase: "Reconstruiește baza de date",
    rebuildDatabaseDescription: "Recreează baza de date SQLite",

    backupManager: "Manager backup",
    backupManagerDescription: "Gestionează backup-urile locale",

    version: "Versiunea",

    album: "Album",
    albumName: "Panini FIFA World Cup 2026",

    languageDescription: "Alege limba aplicației",

    resetCollection: "Resetează colecția",
    resetCollectionDescription: "Elimină stickerele colectate și duplicatele",

    resetCollectionDialogTitle: "Resetare colecție",
    resetCollectionConfirm: "Resetează",
    resetCollectionMessage:
      "Această acțiune va elimina toate stickerele colectate, duplicatele și notițele.",
    resetCollectionWarning:
      "Această acțiune nu poate fi anulată decât dacă ai o copie de rezervă.",

    rebuildDatabase: "Recreează baza de date",
    rebuildDatabaseDescription: "Recreează baza de date SQLite",

    rebuildDatabaseDialogTitle: "Recreare bază de date",
    rebuildDatabaseConfirm: "Recreează",
    rebuildDatabaseMessage:
      "Baza de date va fi recreată folosind datele originale ale albumului.",
    rebuildDatabaseWarning:
      "Tot progresul colecției, duplicatele și notițele vor fi șterse definitiv.",

    trade: "Schimb",
    tradeUserName: "Nume pentru schimburi",
    tradeUserNameDescription:
      "Acest nume va fi inclus în fișierele JSON de schimb.",
    tradeUserNamePlaceholder: "Introdu numele tău",
  },

  appearance: {
    title: "Aspect",
    system: "Sistem",
    light: "Luminos",
    dark: "Întunecat",
  },

  achievements: {
    title: "Realizări",
    subtitle: "Urmărește etapele colecției tale",

    first: {
      title: "Primul sticker",
      description: "Colectează primul tău sticker.",
    },

    collector10: {
      title: "Colecționar I",
      description: "Colectează 10 stickere.",
    },

    collector25: {
      title: "Colecționar II",
      description: "Colectează 25 de stickere.",
    },

    collector50: {
      title: "Colecționar III",
      description: "Colectează 50 de stickere.",
    },

    half: {
      title: "Jumătate de album",
      description: "Atinge 50% din album.",
    },

    collector75: {
      title: "Aproape gata",
      description: "Atinge 75% din album.",
    },

    collector100: {
      title: "Maestrul albumului",
      description: "Completează albumul.",
    },

    team: {
      title: "Echipă completă",
      description: "Completează o echipă.",
    },

    section: {
      title: "Secțiune completă",
      description: "Completează o secțiune.",
    },

    gettingStarted: {
      title: "La început de drum",
      description: "Colectează 25% din album.",
    },

    halfwayThere: {
      title: "La jumătatea drumului",
      description: "Colectează 50% din album.",
    },

    almostComplete: {
      title: "Aproape complet",
      description: "Colectează 75% din album.",
    },

    albumComplete: {
      title: "Album complet",
      description: "Colectează toate stickerele.",
    },
  },

  backup: {
    title: "Backup",
    backups: "Backup-uri",
    totalSize: "Dimensiune totală",

    create: "Creează",
    import: "Importă",

    owned: "Deținute",
    missing: "Lipsă",
    duplicates: "Duplicate",

    restore: "Restaurează",
    delete: "Șterge",
    share: "Partajează",

    restoreBackup: "Restaurează backup-ul",
    currentCollectionReplaced:
      "Colecția curentă va fi înlocuită cu acest backup.",

    duplicatesCount: "{{count}} dubluri",

    noBackups: "Nu există încă backup-uri",
    createFirstBackup:
      "Creează primul backup pentru a-ți păstra colecția în siguranță.",

    deleteTitle: "Ștergere backup",
    deleteConfirm: "Șterge",
    deleteWarning: "Acest fișier de backup va fi șters definitiv.",

    created: "Backup creat.",
    imported: "Colecție importată.",
    restored: "Backup restaurat.",
    deleted: "Backup șters.",
  },

  databaseInspector: {
    title: "Inspector bază de date",
    subtitle: "SQLite · panini2026.db",

    tables: {
      sections: "Secțiuni",
      teams: "Echipe",
      stickers: "Stickere",
    },

    summary: {
      title: "Sumar stickere",
      regular: "Standard",
      bronze: "Bronz",
      silver: "Argint",
      gold: "Aur",
      extra: "Extra",
      owned: "Deținute",
      duplicates: "Duplicate",
    },

    searchPlaceholder: "Caută în {{table}}...",

    loading: "Se încarcă {{table}}...",

    error: {
      title: "Eroare bază de date",
    },

    empty: {
      title: "Nicio înregistrare",
      message: "Nu există înregistrări care corespund căutării.",
    },

    footer: "{{table}}: {{count}} rânduri",
    footerFiltered: "{{table}}: {{filtered}} / {{total}} rânduri",

    refresh: "Reîmprospătează",
    nullValue: "NULL",
  },
};
