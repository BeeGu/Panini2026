// src/i18n/locales/nl.js

export default {
  common: {
    cancel: "Annuleren",
    save: "Opslaan",
    edit: "Bewerken",
    yes: "Ja",
    no: "Nee",
    close: "Sluiten",
    reset: "Resetten",
    completed: "Voltooid",
    confirm: "Bevestigen",

    select: "Selecteren...",
    searchField: "{{field}} zoeken...",
    noResults: "Geen resultaten gevonden",
  },

  date: {
    justNow: "Zojuist",
    minutesAgo: "{{count}} min geleden",
    hoursAgo: "{{count}} uur geleden",
    yesterday: "Gisteren",
  },

  navigation: {
    search: "Zoeken",
    sticker: "Sticker",
    editSticker: "Sticker bewerken",
    backups: "Back-ups",
    databaseInspector: "Database-inspecteur",

    home: "Home",
    album: "Album",
    tradeCenter: "Ruilcentrum",
    statistics: "Statistieken",
    settings: "Instellingen",
  },

  home: {
    title: "🏆 Panini Tracker",
    subtitle: "FIFA Wereldkampioenschap 2026",

    albumProgress: "Albumvoortgang",

    owned: "In bezit",
    missing: "Ontbrekend",
    duplicates: "Dubbele",
    completed: "Voltooid",

    album: "Album",
    search: "Zoeken",
    statistics: "Statistieken",
    settings: "Instellingen",

    recentActivity: "Recente activiteit",
    noStickersCollected: "Nog geen stickers verzameld.",
  },

  album: {
    title: "Album",
    searchPlaceholder: "Nummer, speler of team...",

    filters: {
      all: "Alle",
      missing: "Ontbrekend",
      owned: "In bezit",
      duplicates: "Dubbele",
    },

    stats: {
      missing: "{{count}} ontbrekend",
      duplicates: "{{count}} dubbele",
    },

    extraStickers: "Extra stickers",

    stickerList: {
      empty: "Geen stickers gevonden.",
    },

    types: {
      regular: "Normaal",
      bronze: "Brons",
      silver: "Zilver",
      gold: "Goud",
    },
  },

  search: {
    title: "Zoeken",
    subtitle: "Vind een sticker op nummer, speler of team",
    placeholder: "Nummer, speler of team...",

    sections: {
      regular: "Normale stickers",
      extra: "Extra stickers",
    },

    empty: {
      title: "Stickers zoeken",
      text: "Voer een nummer, spelersnaam, team of code in.",
    },

    noResults: {
      title: "Geen stickers gevonden",
      text: 'Geen resultaten voor "{{query}}".',
    },

    resultCount_one: "{{count}} sticker",
    resultCount_other: "{{count}} stickers",

    status: {
      collected: "In bezit",
      missing: "Ontbrekend",
    },

    types: {
      regular: "Normaal",
      bronze: "Brons",
      silver: "Zilver",
      gold: "Goud",
    },
  },

  sticker: {
    collected: "In bezit",

    collection: "Verzameling",
    owned: "In bezit",
    duplicates: "Dubbele",

    information: "Stickerinformatie",
    code: "Code",
    section: "Sectie",
    team: "Team",
    teamCode: "Teamcode",

    notes: "Notities",
    noNotes: "Geen notities",

    number: "Stickernummer",
    name: "Stickernaam",
    performedDate: "Registratiedatum",
  },

  trade: {
    title: "Ruilcentrum",

    duplicates: "Dubbele",
    missing: "Ontbrekend",
    both: "Beide",

    copy: "Kopiëren",
    share: "Delen",

    shareJson: "Ruilbestand delen",
    importJson: "Ruilbestand importeren",

    summary: "{{duplicates}} dubbele • {{missing}} ontbrekende",

    duplicatesCount: "Dubbele ({{count}})",
    missingCount: "Ontbrekende ({{count}})",

    duplicatesAvailable_one: "{{count}} dubbele sticker beschikbaar",
    duplicatesAvailable_other: "{{count}} dubbele stickers beschikbaar",

    stickersMissing_one: "{{count}} ontbrekende sticker",
    stickersMissing_other: "{{count}} ontbrekende stickers",

    duplicatesAndMissing: "{{duplicates}} dubbele • {{missing}} ontbrekende",

    copySuccess: "Ruilijst naar klembord gekopieerd.",
    copyError: "Ruilijst kon niet worden gekopieerd.",

    shareSuccess: "Ruilijst gedeeld.",
    shareError: "Ruilijst kon niet worden gedeeld.",

    shareJsonSuccess: "Ruilbestand gedeeld.",
    shareJsonError: "Ruilbestand kon niet worden gedeeld.",

    importSuccess: "Ruilbestand geïmporteerd.",
    importError: "Ruilbestand kon niet worden geïmporteerd.",

    importedTrade: "Geïmporteerde ruil",
    tradeWith: "Ruil met {{name}}",
    unknownUser: "Onbekende gebruiker",

    theyCanGiveYou: "Zij kunnen je geven",
    youCanGiveThem: "Jij kunt hen geven",

    theyCanGiveMe: "Zij kunnen mij geven",
    iCanGiveThem: "Ik kan hen geven",

    searchStickers: "Stickers zoeken...",
    noMatchingStickers: "Geen overeenkomende stickers gevonden.",
    noStickers: "Geen stickers beschikbaar.",

    availableStickers: "{{count}} beschikbare stickers",

    noStickersTheyCanGive: "Ze hebben geen stickers die jij mist.",

    noStickersYouCanGive: "Je hebt geen stickers die zij missen.",
  },

  statistics: {
    title: "Statistieken",
    collectionOverview: "Overzicht van de verzameling",

    albumCompletion: "Albumvoltooiing",
    completedPercentage: "{{percentage}}% voltooid",

    topTeams: "Topteams",
    bestCompletedTeams: "Best voltooide teams",

    sections: "Secties",
    completionBySection: "Voltooiing per sectie",

    nationalTeams: "{{count}} nationale teams",
    sectionsCount: "{{count}} secties",

    achievements: "Prestaties",
    completed: "{{count}} voltooid",

    visualStatistics: "Visuele statistieken",

    recentActivity: "Recente activiteit",
    visualActivity: "Visuele activiteit",

    duplicates: "Dubbele",
    duplicatesByCategory: "Dubbele stickers per categorie",
    none: "Geen",

    owned: "In bezit",
    missing: "Ontbrekend",
    completion: "Voltooiing",

    ofTotal: "van {{total}}",
    completePercentage: "{{percentage}}% voltooid",

    availableForTrade: "Beschikbaar om te ruilen",
  },

  settings: {
    title: "Instellingen",
    subtitle: "Applicatievoorkeuren",

    general: "Algemeen",
    collection: "Verzameling",
    developer: "Ontwikkelaar",
    appearance: "Uiterlijk",
    language: "Taal",
    backup: "Back-up",
    about: "Over",

    appVersion: "App-versie",
    databaseVersion: "Databaseversie",

    sections: "Secties",
    teams: "Teams",
    stickers: "Stickers",
    owned: "In bezit",
    missing: "Ontbrekend",
    duplicates: "Dubbele",

    developerMode: "Ontwikkelaarsmodus",
    developerModeDescription: "Ontwikkelaarstools inschakelen",

    databaseInspector: "Database-inspecteur",
    databaseInspectorDescription: "SQLite-database bekijken",

    resetCollection: "Verzameling resetten",
    resetCollectionDescription:
      "Verwijder stickers in bezit en dubbele stickers",

    rebuildDatabase: "Database opnieuw opbouwen",
    rebuildDatabaseDescription: "SQLite-database opnieuw maken",

    backupManager: "Back-upbeheer",
    backupManagerDescription: "Lokale back-ups beheren",

    version: "Versie",

    album: "Album",
    albumName: "Panini FIFA Wereldkampioenschap 2026",

    languageDescription: "Kies de taal van de applicatie",

    resetCollectionDialogTitle: "Verzameling resetten",
    resetCollectionConfirm: "Resetten",
    resetCollectionMessage:
      "Alle verzamelde stickers, dubbele stickers en notities worden verwijderd.",
    resetCollectionWarning:
      "Deze actie kan niet ongedaan worden gemaakt zonder een back-up.",

    rebuildDatabaseDialogTitle: "Database opnieuw opbouwen",
    rebuildDatabaseConfirm: "Opbouwen",
    rebuildDatabaseMessage:
      "De database wordt opnieuw opgebouwd vanuit de oorspronkelijke albumgegevens.",
    rebuildDatabaseWarning:
      "Alle voortgang, dubbele stickers en notities worden permanent verwijderd.",

    trade: "Ruilen",
    tradeUserName: "Ruilnaam",
    tradeUserNameDescription:
      "Deze naam wordt opgenomen in JSON-bestanden voor ruilen.",
    tradeUserNamePlaceholder: "Voer je naam in",
  },

  appearance: {
    title: "Uiterlijk",
    system: "Systeem",
    light: "Licht",
    dark: "Donker",
  },

  achievements: {
    title: "Prestaties",
    subtitle: "Volg de mijlpalen van je verzameling",

    first: {
      title: "Eerste sticker",
      description: "Verzamel je eerste sticker.",
    },

    collector10: {
      title: "Verzamelaar I",
      description: "Verzamel 10 stickers.",
    },

    collector25: {
      title: "Verzamelaar II",
      description: "Verzamel 25 stickers.",
    },

    collector50: {
      title: "Verzamelaar III",
      description: "Verzamel 50 stickers.",
    },

    half: {
      title: "Half album",
      description: "Bereik 50% voltooiing.",
    },

    collector75: {
      title: "Bijna klaar",
      description: "Bereik 75% voltooiing.",
    },

    collector100: {
      title: "Albummeester",
      description: "Voltooi het album.",
    },

    team: {
      title: "Team voltooid",
      description: "Voltooi één team.",
    },

    section: {
      title: "Sectie voltooid",
      description: "Voltooi één sectie.",
    },

    gettingStarted: {
      title: "Aan de slag",
      description: "Verzamel 25% van het album.",
    },

    halfwayThere: {
      title: "Halverwege",
      description: "Verzamel 50% van het album.",
    },

    almostComplete: {
      title: "Bijna compleet",
      description: "Verzamel 75% van het album.",
    },

    albumComplete: {
      title: "Album compleet",
      description: "Verzamel elke sticker.",
    },
  },

  backup: {
    title: "Back-up",
    backups: "Back-ups",
    totalSize: "Totale grootte",

    create: "Maken",
    import: "Importeren",

    owned: "In bezit",
    missing: "Ontbrekend",
    duplicates: "Dubbele",

    restore: "Herstellen",
    delete: "Verwijderen",
    share: "Delen",

    restoreBackup: "Back-up herstellen",
    currentCollectionReplaced:
      "Je huidige verzameling wordt vervangen door deze back-up.",

    duplicatesCount: "{{count}} dubbele stickers",

    noBackups: "Nog geen back-ups",
    createFirstBackup:
      "Maak je eerste back-up om je verzameling veilig te bewaren.",

    deleteTitle: "Back-up verwijderen",
    deleteConfirm: "Verwijderen",
    deleteWarning: "Dit back-upbestand wordt permanent verwijderd.",

    created: "Back-up gemaakt.",
    imported: "Verzameling geïmporteerd.",
    restored: "Back-up hersteld.",
    deleted: "Back-up verwijderd.",
  },

  databaseInspector: {
    title: "Database-inspecteur",
    subtitle: "SQLite · panini2026.db",

    tables: {
      sections: "Secties",
      teams: "Teams",
      stickers: "Stickers",
    },

    summary: {
      title: "Stickeroverzicht",
      regular: "Normaal",
      bronze: "Brons",
      silver: "Zilver",
      gold: "Goud",
      extra: "Extra",
      owned: "In bezit",
      duplicates: "Dubbele",
    },

    searchPlaceholder: "{{table}} zoeken...",

    loading: "{{table}} laden...",

    error: {
      title: "Databasefout",
    },

    empty: {
      title: "Geen rijen",
      message: "Geen records komen overeen met je zoekopdracht.",
    },

    footer: "{{table}}: {{count}} rijen",
    footerFiltered: "{{table}}: {{filtered}} / {{total}} rijen",

    refresh: "Vernieuwen",
    nullValue: "NULL",
  },
};
