// src/i18n/locales/it.js

export default {
  common: {
    cancel: "Annulla",
    save: "Salva",
    edit: "Modifica",
    yes: "Sì",
    no: "No",
    close: "Chiudi",
    reset: "Reimposta",
    completed: "Completato",
    confirm: "Conferma",

    select: "Seleziona...",
    searchField: "Cerca {{field}}...",
    noResults: "Nessun risultato trovato",
  },

  date: {
    justNow: "Proprio ora",
    minutesAgo: "{{count}} min fa",
    hoursAgo: "{{count}} h fa",
    yesterday: "Ieri",
  },

  navigation: {
    search: "Cerca",
    sticker: "Figurina",
    editSticker: "Modifica figurina",
    backups: "Backup",
    databaseInspector: "Ispettore database",

    home: "Home",
    album: "Album",
    tradeCenter: "Scambi",
    statistics: "Statistiche",
    settings: "Impostazioni",
  },

  home: {
    title: "🏆 Panini Tracker",
    subtitle: "Coppa del Mondo FIFA 2026",

    albumProgress: "Avanzamento album",

    owned: "Possedute",
    missing: "Mancanti",
    duplicates: "Doppioni",
    completed: "Completato",

    album: "Album",
    search: "Cerca",
    statistics: "Statistiche",
    settings: "Impostazioni",

    recentActivity: "Attività recenti",
    noStickersCollected: "Nessuna figurina raccolta.",
  },

  album: {
    title: "Album",
    searchPlaceholder: "Numero, giocatore o squadra...",

    filters: {
      all: "Tutte",
      missing: "Mancanti",
      owned: "Possedute",
      duplicates: "Doppioni",
    },

    stats: {
      missing: "{{count}} mancanti",
      duplicates: "{{count}} doppioni",
    },

    extraStickers: "Figurine Extra",

    stickerList: {
      empty: "Nessuna figurina trovata.",
    },

    types: {
      regular: "Normale",
      bronze: "Bronzo",
      silver: "Argento",
      gold: "Oro",
    },
  },

  search: {
    title: "Cerca",
    subtitle: "Trova una figurina per numero, giocatore o squadra",
    placeholder: "Numero, giocatore o squadra...",

    sections: {
      regular: "Figurine normali",
      extra: "Figurine Extra",
    },

    empty: {
      title: "Cerca figurine",
      text: "Inserisci un numero, nome giocatore, squadra o codice.",
    },

    noResults: {
      title: "Nessuna figurina trovata",
      text: 'Nessun risultato per "{{query}}".',
    },

    resultCount_one: "{{count}} figurina",
    resultCount_other: "{{count}} figurine",

    status: {
      collected: "Posseduta",
      missing: "Mancante",
    },

    types: {
      regular: "Normale",
      bronze: "Bronzo",
      silver: "Argento",
      gold: "Oro",
    },
  },

  sticker: {
    collected: "Posseduta",

    collection: "Collezione",
    owned: "Possedute",
    duplicates: "Doppioni",

    information: "Informazioni figurina",
    code: "Codice",
    section: "Sezione",
    team: "Squadra",
    teamCode: "Codice squadra",

    notes: "Note",
    noNotes: "Nessuna nota",

    number: "Numero figurina",
    name: "Nome figurina",
    performedDate: "Data registrazione",
  },

  trade: {
    title: "Scambi",

    duplicates: "Doppioni",
    missing: "Mancanti",
    both: "Entrambi",

    copy: "Copia",
    share: "Condividi",

    shareJson: "Condividi file scambio",
    importJson: "Importa file scambio",

    summary: "{{duplicates}} doppioni • {{missing}} mancanti",

    duplicatesCount: "Doppioni ({{count}})",
    missingCount: "Mancanti ({{count}})",

    duplicatesAvailable_one: "{{count}} doppione disponibile",
    duplicatesAvailable_other: "{{count}} doppioni disponibili",

    stickersMissing_one: "{{count}} figurina mancante",
    stickersMissing_other: "{{count}} figurine mancanti",

    duplicatesAndMissing: "{{duplicates}} doppioni • {{missing}} mancanti",

    copySuccess: "Lista scambi copiata negli appunti.",
    copyError: "Impossibile copiare la lista scambi.",

    shareSuccess: "Lista scambi condivisa.",
    shareError: "Impossibile condividere la lista scambi.",

    shareJsonSuccess: "File scambio condiviso.",
    shareJsonError: "Impossibile condividere il file scambio.",

    importSuccess: "File scambio importato.",
    importError: "Impossibile importare il file scambio.",

    importedTrade: "Scambio importato",
    tradeWith: "Scambio con {{name}}",
    unknownUser: "Utente sconosciuto",

    theyCanGiveYou: "Può darti",
    youCanGiveThem: "Puoi dargli",

    theyCanGiveMe: "Può darmi",
    iCanGiveThem: "Posso dargli",

    searchStickers: "Cerca figurine...",
    noMatchingStickers: "Nessuna figurina corrispondente.",
    noStickers: "Nessuna figurina disponibile.",

    availableStickers: "{{count}} figurine disponibili",

    noStickersTheyCanGive: "Non hanno figurine che ti mancano.",

    noStickersYouCanGive: "Non hai figurine che mancano a loro.",
  },

  statistics: {
    title: "Statistiche",
    collectionOverview: "Panoramica della collezione",

    albumCompletion: "Completamento album",
    completedPercentage: "{{percentage}}% completato",

    topTeams: "Squadre migliori",
    bestCompletedTeams: "Squadre con maggior completamento",

    sections: "Sezioni",
    completionBySection: "Completamento per sezione",

    nationalTeams: "{{count}} squadre nazionali",
    sectionsCount: "{{count}} sezioni",

    achievements: "Obiettivi",
    completed: "{{count}} completati",

    visualStatistics: "Statistiche visive",

    recentActivity: "Attività recenti",
    visualActivity: "Attività visiva",

    duplicates: "Doppioni",
    duplicatesByCategory: "Figurine doppie per categoria",
    none: "Nessuno",

    owned: "Possedute",
    missing: "Mancanti",
    completion: "Completamento",

    ofTotal: "di {{total}}",
    completePercentage: "{{percentage}}% completato",

    availableForTrade: "Disponibili per lo scambio",
  },

  settings: {
    title: "Impostazioni",
    subtitle: "Preferenze dell'applicazione",

    general: "Generale",
    collection: "Collezione",
    developer: "Sviluppatore",
    appearance: "Aspetto",
    language: "Lingua",
    backup: "Backup",
    about: "Informazioni",

    appVersion: "Versione app",
    databaseVersion: "Versione database",

    sections: "Sezioni",
    teams: "Squadre",
    stickers: "Figurine",
    owned: "Possedute",
    missing: "Mancanti",
    duplicates: "Doppioni",

    developerMode: "Modalità sviluppatore",
    developerModeDescription: "Abilita gli strumenti per sviluppatori",

    databaseInspector: "Ispettore database",
    databaseInspectorDescription: "Ispeziona il database SQLite",

    resetCollection: "Reimposta collezione",
    resetCollectionDescription: "Rimuovi figurine possedute e doppioni",

    rebuildDatabase: "Ricrea database",
    rebuildDatabaseDescription: "Ricrea il database SQLite",

    backupManager: "Gestione backup",
    backupManagerDescription: "Gestisci i backup locali",

    version: "Versione",

    album: "Album",
    albumName: "Panini FIFA Coppa del Mondo 2026",

    languageDescription: "Scegli la lingua dell'applicazione",

    resetCollectionDialogTitle: "Reimposta collezione",
    resetCollectionConfirm: "Reimposta",
    resetCollectionMessage:
      "Tutte le figurine raccolte, i doppioni e le note verranno rimossi.",
    resetCollectionWarning:
      "Questa azione non può essere annullata senza un backup.",

    rebuildDatabaseDialogTitle: "Ricrea database",
    rebuildDatabaseConfirm: "Ricrea",
    rebuildDatabaseMessage:
      "Il database verrà ricreato dai dati originali dell'album.",
    rebuildDatabaseWarning:
      "Tutti i progressi della collezione, i doppioni e le note verranno rimossi definitivamente.",

    trade: "Scambi",
    tradeUserName: "Nome per gli scambi",
    tradeUserNameDescription:
      "Questo nome sarà incluso nei file JSON degli scambi.",
    tradeUserNamePlaceholder: "Inserisci il tuo nome",
  },

  appearance: {
    title: "Aspetto",
    system: "Sistema",
    light: "Chiaro",
    dark: "Scuro",
  },

  achievements: {
    title: "Obiettivi",
    subtitle: "Segui i traguardi della tua collezione",

    first: {
      title: "Prima figurina",
      description: "Raccogli la tua prima figurina.",
    },

    collector10: {
      title: "Collezionista I",
      description: "Raccogli 10 figurine.",
    },

    collector25: {
      title: "Collezionista II",
      description: "Raccogli 25 figurine.",
    },

    collector50: {
      title: "Collezionista III",
      description: "Raccogli 50 figurine.",
    },

    half: {
      title: "Metà album",
      description: "Raggiungi il 50% di completamento.",
    },

    collector75: {
      title: "Quasi fatto",
      description: "Raggiungi il 75% di completamento.",
    },

    collector100: {
      title: "Maestro dell'album",
      description: "Completa l'album.",
    },

    team: {
      title: "Squadra completata",
      description: "Completa una squadra.",
    },

    section: {
      title: "Sezione completata",
      description: "Completa una sezione.",
    },

    gettingStarted: {
      title: "Primi passi",
      description: "Raccogli il 25% dell'album.",
    },

    halfwayThere: {
      title: "A metà strada",
      description: "Raccogli il 50% dell'album.",
    },

    almostComplete: {
      title: "Quasi completo",
      description: "Raccogli il 75% dell'album.",
    },

    albumComplete: {
      title: "Album completato",
      description: "Raccogli tutte le figurine.",
    },
  },

  backup: {
    title: "Backup",
    backups: "Backup",
    totalSize: "Dimensione totale",

    create: "Crea",
    import: "Importa",

    owned: "Possedute",
    missing: "Mancanti",
    duplicates: "Doppioni",

    restore: "Ripristina",
    delete: "Elimina",
    share: "Condividi",

    restoreBackup: "Ripristina backup",
    currentCollectionReplaced:
      "La tua collezione attuale verrà sostituita da questo backup.",

    duplicatesCount: "{{count}} doppioni",

    noBackups: "Nessun backup",
    createFirstBackup:
      "Crea il tuo primo backup per proteggere la tua collezione.",

    deleteTitle: "Elimina backup",
    deleteConfirm: "Elimina",
    deleteWarning: "Questo file di backup verrà eliminato definitivamente.",

    created: "Backup creato.",
    imported: "Collezione importata.",
    restored: "Backup ripristinato.",
    deleted: "Backup eliminato.",
  },

  databaseInspector: {
    title: "Ispettore database",
    subtitle: "SQLite · panini2026.db",

    tables: {
      sections: "Sezioni",
      teams: "Squadre",
      stickers: "Figurine",
    },

    summary: {
      title: "Riepilogo figurine",
      regular: "Normali",
      bronze: "Bronzo",
      silver: "Argento",
      gold: "Oro",
      extra: "Extra",
      owned: "Possedute",
      duplicates: "Doppioni",
    },

    searchPlaceholder: "Cerca {{table}}...",

    loading: "Caricamento {{table}}...",

    error: {
      title: "Errore database",
    },

    empty: {
      title: "Nessuna riga",
      message: "Nessun record corrisponde alla ricerca.",
    },

    footer: "{{table}}: {{count}} righe",
    footerFiltered: "{{table}}: {{filtered}} / {{total}} righe",

    refresh: "Aggiorna",
    nullValue: "NULL",
  },
};
