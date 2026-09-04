// src/i18n/locales/de.js

export default {
  common: {
    cancel: "Abbrechen",
    save: "Speichern",
    edit: "Bearbeiten",
    yes: "Ja",
    no: "Nein",
    close: "Schließen",
    reset: "Zurücksetzen",
    completed: "Abgeschlossen",
    confirm: "Bestätigen",

    select: "Auswählen...",
    searchField: "{{field}} suchen...",
    noResults: "Keine Ergebnisse gefunden",
  },

  date: {
    justNow: "Gerade eben",
    minutesAgo: "vor {{count}} Min.",
    hoursAgo: "vor {{count}} Std.",
    yesterday: "Gestern",
  },

  navigation: {
    search: "Suche",
    sticker: "Sticker",
    editSticker: "Sticker bearbeiten",
    backups: "Sicherungen",
    databaseInspector: "Datenbankinspektor",

    home: "Startseite",
    album: "Album",
    tradeCenter: "Tauschbörse",
    statistics: "Statistiken",
    settings: "Einstellungen",
  },

  home: {
    title: "🏆 Panini Tracker",
    subtitle: "FIFA-Weltmeisterschaft 2026",

    albumProgress: "Albumfortschritt",

    owned: "Vorhanden",
    missing: "Fehlend",
    duplicates: "Doppelte",
    completed: "Abgeschlossen",

    album: "Album",
    search: "Suche",
    statistics: "Statistiken",
    settings: "Einstellungen",

    recentActivity: "Letzte Aktivitäten",
    noStickersCollected: "Noch keine Sticker gesammelt.",
  },

  album: {
    title: "Album",
    searchPlaceholder: "Nummer, Spieler oder Team...",

    filters: {
      all: "Alle",
      missing: "Fehlend",
      owned: "Vorhanden",
      duplicates: "Doppelte",
    },

    stats: {
      missing: "{{count}} fehlend",
      duplicates: "{{count}} doppelt",
    },

    extraStickers: "Extra-Sticker",

    stickerList: {
      empty: "Keine Sticker gefunden.",
    },

    types: {
      regular: "Normal",
      bronze: "Bronze",
      silver: "Silber",
      gold: "Gold",
    },
  },

  search: {
    title: "Suche",
    subtitle: "Sticker nach Nummer, Spieler oder Team finden",
    placeholder: "Nummer, Spieler oder Team...",

    sections: {
      regular: "Normale Sticker",
      extra: "Extra-Sticker",
    },

    empty: {
      title: "Sticker suchen",
      text: "Gib eine Nummer, einen Spielernamen, ein Team oder einen Code ein.",
    },

    noResults: {
      title: "Keine Sticker gefunden",
      text: 'Keine Ergebnisse für "{{query}}".',
    },

    resultCount_one: "{{count}} Sticker",
    resultCount_other: "{{count}} Sticker",

    status: {
      collected: "Vorhanden",
      missing: "Fehlend",
    },

    types: {
      regular: "Normal",
      bronze: "Bronze",
      silver: "Silber",
      gold: "Gold",
    },
  },

  sticker: {
    collected: "Vorhanden",

    collection: "Sammlung",
    owned: "Vorhanden",
    duplicates: "Doppelte",

    information: "Stickerinformationen",
    code: "Code",
    section: "Abschnitt",
    team: "Team",
    teamCode: "Teamcode",

    notes: "Notizen",
    noNotes: "Keine Notizen",

    number: "Stickernummer",
    name: "Stickername",
    performedDate: "Erfassungsdatum",
  },

  trade: {
    title: "Tauschbörse",

    duplicates: "Doppelte",
    missing: "Fehlend",
    both: "Beide",

    copy: "Kopieren",
    share: "Teilen",

    shareJson: "Tauschdatei teilen",
    importJson: "Tauschdatei importieren",

    summary: "{{duplicates}} doppelte • {{missing}} fehlende",

    duplicatesCount: "Doppelte ({{count}})",
    missingCount: "Fehlende ({{count}})",

    duplicatesAvailable_one: "{{count}} doppelter Sticker verfügbar",
    duplicatesAvailable_other: "{{count}} doppelte Sticker verfügbar",

    stickersMissing_one: "{{count}} Sticker fehlt",
    stickersMissing_other: "{{count}} Sticker fehlen",

    duplicatesAndMissing: "{{duplicates}} doppelte • {{missing}} fehlende",

    copySuccess: "Tauschliste in die Zwischenablage kopiert.",
    copyError: "Tauschliste konnte nicht kopiert werden.",

    shareSuccess: "Tauschliste geteilt.",
    shareError: "Tauschliste konnte nicht geteilt werden.",

    shareJsonSuccess: "Tauschdatei geteilt.",
    shareJsonError: "Tauschdatei konnte nicht geteilt werden.",

    importSuccess: "Tauschdatei importiert.",
    importError: "Tauschdatei konnte nicht importiert werden.",

    importedTrade: "Importierter Tausch",
    tradeWith: "Tausch mit {{name}}",
    unknownUser: "Unbekannter Benutzer",

    theyCanGiveYou: "Sie können dir geben",
    youCanGiveThem: "Du kannst ihnen geben",

    theyCanGiveMe: "Sie können mir geben",
    iCanGiveThem: "Ich kann ihnen geben",

    searchStickers: "Sticker suchen...",
    noMatchingStickers: "Keine passenden Sticker gefunden.",
    noStickers: "Keine Sticker verfügbar.",

    availableStickers: "{{count}} verfügbare Sticker",

    noStickersTheyCanGive: "Sie haben keine Sticker, die dir fehlen.",

    noStickersYouCanGive: "Du hast keine Sticker, die ihnen fehlen.",
  },

  statistics: {
    title: "Statistiken",
    collectionOverview: "Sammlungsübersicht",

    albumCompletion: "Albumfortschritt",
    completedPercentage: "{{percentage}}% abgeschlossen",

    topTeams: "Top-Teams",
    bestCompletedTeams: "Am besten abgeschlossene Teams",

    sections: "Abschnitte",
    completionBySection: "Fortschritt nach Abschnitt",

    nationalTeams: "{{count}} Nationalmannschaften",
    sectionsCount: "{{count}} Abschnitte",

    achievements: "Erfolge",
    completed: "{{count}} abgeschlossen",

    visualStatistics: "Visuelle Statistiken",

    recentActivity: "Letzte Aktivitäten",
    visualActivity: "Visuelle Aktivitäten",

    duplicates: "Doppelte",
    duplicatesByCategory: "Doppelte Sticker nach Kategorie",
    none: "Keine",

    owned: "Vorhanden",
    missing: "Fehlend",
    completion: "Fortschritt",

    ofTotal: "von {{total}}",
    completePercentage: "{{percentage}}% abgeschlossen",

    availableForTrade: "Zum Tauschen verfügbar",
  },

  settings: {
    title: "Einstellungen",
    subtitle: "Anwendungseinstellungen",

    general: "Allgemein",
    collection: "Sammlung",
    developer: "Entwickler",
    appearance: "Darstellung",
    language: "Sprache",
    backup: "Sicherung",
    about: "Über",

    appVersion: "App-Version",
    databaseVersion: "Datenbankversion",

    sections: "Abschnitte",
    teams: "Teams",
    stickers: "Sticker",
    owned: "Vorhanden",
    missing: "Fehlend",
    duplicates: "Doppelte",

    developerMode: "Entwicklermodus",
    developerModeDescription: "Entwicklerwerkzeuge aktivieren",

    databaseInspector: "Datenbankinspektor",
    databaseInspectorDescription: "SQLite-Datenbank überprüfen",

    resetCollection: "Sammlung zurücksetzen",
    resetCollectionDescription: "Vorhandene Sticker und Duplikate entfernen",

    rebuildDatabase: "Datenbank neu erstellen",
    rebuildDatabaseDescription: "SQLite-Datenbank neu erstellen",

    backupManager: "Sicherungsverwaltung",
    backupManagerDescription: "Lokale Sicherungen verwalten",

    version: "Version",

    album: "Album",
    albumName: "Panini FIFA-Weltmeisterschaft 2026",

    languageDescription: "Anwendungssprache auswählen",

    resetCollectionDialogTitle: "Sammlung zurücksetzen",
    resetCollectionConfirm: "Zurücksetzen",
    resetCollectionMessage:
      "Alle gesammelten Sticker, Duplikate und Notizen werden entfernt.",
    resetCollectionWarning:
      "Diese Aktion kann ohne Sicherung nicht rückgängig gemacht werden.",

    rebuildDatabaseDialogTitle: "Datenbank neu erstellen",
    rebuildDatabaseConfirm: "Neu erstellen",
    rebuildDatabaseMessage:
      "Die Datenbank wird aus den ursprünglichen Albumdaten neu erstellt.",
    rebuildDatabaseWarning:
      "Der gesamte Sammlungsfortschritt, Duplikate und Notizen werden dauerhaft entfernt.",

    trade: "Tauschen",
    tradeUserName: "Tauschname",
    tradeUserNameDescription:
      "Dieser Name wird in Tausch-JSON-Dateien aufgenommen.",
    tradeUserNamePlaceholder: "Deinen Namen eingeben",
  },

  appearance: {
    title: "Darstellung",
    system: "System",
    light: "Hell",
    dark: "Dunkel",
  },

  achievements: {
    title: "Erfolge",
    subtitle: "Verfolge deine Sammelfortschritte",

    first: {
      title: "Erster Sticker",
      description: "Sammle deinen ersten Sticker.",
    },

    collector10: {
      title: "Sammler I",
      description: "Sammle 10 Sticker.",
    },

    collector25: {
      title: "Sammler II",
      description: "Sammle 25 Sticker.",
    },

    collector50: {
      title: "Sammler III",
      description: "Sammle 50 Sticker.",
    },

    half: {
      title: "Halbes Album",
      description: "Erreiche 50 % Fortschritt.",
    },

    collector75: {
      title: "Fast geschafft",
      description: "Erreiche 75 % Fortschritt.",
    },

    collector100: {
      title: "Album-Meister",
      description: "Vervollständige das Album.",
    },

    team: {
      title: "Team vollständig",
      description: "Vervollständige ein Team.",
    },

    section: {
      title: "Abschnitt vollständig",
      description: "Vervollständige einen Abschnitt.",
    },

    gettingStarted: {
      title: "Erste Schritte",
      description: "Sammle 25 % des Albums.",
    },

    halfwayThere: {
      title: "Halbzeit",
      description: "Sammle 50 % des Albums.",
    },

    almostComplete: {
      title: "Fast vollständig",
      description: "Sammle 75 % des Albums.",
    },

    albumComplete: {
      title: "Album vollständig",
      description: "Sammle jeden Sticker.",
    },
  },

  backup: {
    title: "Sicherung",
    backups: "Sicherungen",
    totalSize: "Gesamtgröße",

    create: "Erstellen",
    import: "Importieren",

    owned: "Vorhanden",
    missing: "Fehlend",
    duplicates: "Doppelte",

    restore: "Wiederherstellen",
    delete: "Löschen",
    share: "Teilen",

    restoreBackup: "Sicherung wiederherstellen",
    currentCollectionReplaced:
      "Deine aktuelle Sammlung wird durch diese Sicherung ersetzt.",

    duplicatesCount: "{{count}} Duplikate",

    noBackups: "Noch keine Sicherungen",
    createFirstBackup:
      "Erstelle deine erste Sicherung, um deine Sammlung zu schützen.",

    deleteTitle: "Sicherung löschen",
    deleteConfirm: "Löschen",
    deleteWarning: "Diese Sicherungsdatei wird dauerhaft gelöscht.",

    created: "Sicherung erstellt.",
    imported: "Sammlung importiert.",
    restored: "Sicherung wiederhergestellt.",
    deleted: "Sicherung gelöscht.",
  },

  databaseInspector: {
    title: "Datenbankinspektor",
    subtitle: "SQLite · panini2026.db",

    tables: {
      sections: "Abschnitte",
      teams: "Teams",
      stickers: "Sticker",
    },

    summary: {
      title: "Stickerübersicht",
      regular: "Normal",
      bronze: "Bronze",
      silver: "Silber",
      gold: "Gold",
      extra: "Extra",
      owned: "Vorhanden",
      duplicates: "Doppelte",
    },

    searchPlaceholder: "{{table}} suchen...",

    loading: "{{table}} wird geladen...",

    error: {
      title: "Datenbankfehler",
    },

    empty: {
      title: "Keine Einträge",
      message: "Keine Datensätze entsprechen deiner Suche.",
    },

    footer: "{{table}}: {{count}} Zeilen",
    footerFiltered: "{{table}}: {{filtered}} / {{total}} Zeilen",

    refresh: "Aktualisieren",
    nullValue: "NULL",
  },
};
