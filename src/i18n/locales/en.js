// src/i18n/locales/en.js

export default {
  common: {
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    yes: "Yes",
    no: "No",
    close: "Close",
    reset: "Reset",
    completed: "Completed",
    confirm: "Confirm",

    select: "Select...",
    searchField: "Search {{field}}...",
    noResults: "No results found",
  },

  date: {
    justNow: "Just now",
    minutesAgo: "{{count}} min ago",
    hoursAgo: "{{count}} h ago",
    yesterday: "Yesterday",
  },

  navigation: {
    search: "Search",
    sticker: "Sticker",
    editSticker: "Edit Sticker",
    backups: "Backups",
    databaseInspector: "Database Inspector",

    home: "Home",
    album: "Album",
    tradeCenter: "Trade Center",
    statistics: "Statistics",
    settings: "Settings",
  },

  home: {
    title: "🏆 Panini Tracker",
    subtitle: "FIFA World Cup 2026",

    albumProgress: "Album Progress",

    owned: "Owned",
    missing: "Missing",
    duplicates: "Duplicates",
    completed: "Completed",

    album: "Album",
    search: "Search",
    statistics: "Statistics",
    settings: "Settings",

    recentActivity: "Recent Activity",
    noStickersCollected: "No stickers collected yet.",
  },

  album: {
    title: "Album",
    searchPlaceholder: "Number, player or team...",

    filters: {
      all: "All",
      missing: "Missing",
      owned: "Owned",
      duplicates: "Duplicates",
    },

    stats: {
      missing: "{{count}} Missing",
      duplicates: "{{count}} Duplicates",
    },

    extraStickers: "Extra Stickers",

    stickerList: {
      empty: "No stickers found.",
    },

    types: {
      regular: "Regular",
      bronze: "Bronze",
      silver: "Silver",
      gold: "Gold",
    },
  },

  search: {
    title: "Search",
    subtitle: "Find a sticker by number, player or team",
    placeholder: "Number, player or team...",

    sections: {
      regular: "Regular Stickers",
      extra: "Extra Stickers",
    },

    empty: {
      title: "Search stickers",
      text: "Enter a number, player name, team or code.",
    },

    noResults: {
      title: "No stickers found",
      text: 'No results for "{{query}}".',
    },

    resultCount_one: "{{count}} sticker",
    resultCount_other: "{{count}} stickers",

    status: {
      collected: "Collected",
      missing: "Missing",
    },

    types: {
      regular: "Regular",
      bronze: "Bronze",
      silver: "Silver",
      gold: "Gold",
    },
  },

  sticker: {
    collected: "Collected",

    collection: "Collection",
    owned: "Owned",
    duplicates: "Duplicates",

    information: "Sticker Information",
    code: "Code",
    section: "Section",
    team: "Team",
    teamCode: "Team Code",

    notes: "Notes",
    noNotes: "No notes",

    number: "Sticker Number",
    name: "Sticker Name",
    performedDate: "Performed Date",
  },

  trade: {
    title: "Trade Center",

    duplicates: "Duplicates",
    missing: "Missing",
    both: "Both",

    copy: "Copy",
    share: "Share",

    shareJson: "Share Trade File",
    importJson: "Import Trade File",

    summary: "{{duplicates}} duplicates • {{missing}} missing",

    duplicatesCount: "Duplicates ({{count}})",
    missingCount: "Missing ({{count}})",

    duplicatesAvailable_one: "{{count}} duplicate available",
    duplicatesAvailable_other: "{{count}} duplicates available",

    stickersMissing_one: "{{count}} sticker missing",
    stickersMissing_other: "{{count}} stickers missing",

    duplicatesAndMissing: "{{duplicates}} duplicates • {{missing}} missing",

    copySuccess: "Trade list copied to clipboard.",
    copyError: "Could not copy trade list.",

    shareSuccess: "Trade list shared.",
    shareError: "Could not share trade list.",

    shareJsonSuccess: "Trade file shared.",
    shareJsonError: "Could not share trade file.",

    importSuccess: "Trade file imported.",
    importError: "Could not import trade file.",

    importedTrade: "Imported trade",
    tradeWith: "Trade with {{name}}",
    unknownUser: "Unknown user",

    theyCanGiveYou: "They can give you",
    youCanGiveThem: "You can give them",

    theyCanGiveMe: "They can give me",
    iCanGiveThem: "I can give them",

    searchStickers: "Search stickers...",
    noMatchingStickers: "No matching stickers found.",
    noStickers: "No stickers available.",

    availableStickers: "{{count}} available stickers",

    noStickersTheyCanGive: "They don't have any stickers you are missing.",

    noStickersYouCanGive: "You don't have any stickers they are missing.",
  },

  statistics: {
    title: "Statistics",
    collectionOverview: "Collection overview",

    albumCompletion: "Album Completion",
    completedPercentage: "{{percentage}}% completed",

    topTeams: "Top Teams",
    bestCompletedTeams: "Best completed teams",

    sections: "Sections",
    completionBySection: "Completion by section",

    nationalTeams: "{{count}} national teams",
    sectionsCount: "{{count}} sections",

    achievements: "Achievements",
    completed: "{{count}} completed",

    visualStatistics: "Visual statistics",

    recentActivity: "Recent activity",
    visualActivity: "Visual activity",

    duplicates: "Duplicates",
    duplicatesByCategory: "Duplicate stickers by category",
    none: "None",

    owned: "Owned",
    missing: "Missing",
    completion: "Completion",

    ofTotal: "of {{total}}",
    completePercentage: "{{percentage}}% complete",

    availableForTrade: "Available for trade",
  },

  settings: {
    title: "Settings",
    subtitle: "Application preferences",

    general: "General",
    collection: "Collection",
    developer: "Developer",
    appearance: "Appearance",
    language: "Language",
    backup: "Backup",
    about: "About",

    appVersion: "App Version",
    databaseVersion: "Database Version",

    sections: "Sections",
    teams: "Teams",
    stickers: "Stickers",
    owned: "Owned",
    missing: "Missing",
    duplicates: "Duplicates",

    developerMode: "Developer mode",
    developerModeDescription: "Enable developer tools",

    databaseInspector: "Database Inspector",
    databaseInspectorDescription: "Inspect SQLite database",

    resetCollection: "Reset Collection",
    resetCollectionDescription: "Remove owned stickers and duplicates",

    rebuildDatabase: "Rebuild Database",
    rebuildDatabaseDescription: "Recreate SQLite database",

    backupManager: "Backup Manager",
    backupManagerDescription: "Manage local backups",

    version: "Version",

    album: "Album",
    albumName: "Panini FIFA World Cup 2026",

    languageDescription: "Choose application language",

    resetCollection: "Reset Collection",
    resetCollectionDescription: "Remove owned stickers and duplicates",

    resetCollectionDialogTitle: "Reset collection",
    resetCollectionConfirm: "Reset",
    resetCollectionMessage:
      "This will remove all collected stickers, duplicates and notes.",
    resetCollectionWarning:
      "This action cannot be undone unless you have a backup.",

    rebuildDatabase: "Rebuild Database",
    rebuildDatabaseDescription: "Recreate SQLite database",

    rebuildDatabaseDialogTitle: "Rebuild database",
    rebuildDatabaseConfirm: "Rebuild",
    rebuildDatabaseMessage:
      "The database will be recreated from the original album data.",
    rebuildDatabaseWarning:
      "All collection progress, duplicates and notes will be permanently removed.",

    trade: "Trading",
    tradeUserName: "Trade name",
    tradeUserNameDescription: "This name will be included in trade JSON files.",
    tradeUserNamePlaceholder: "Enter your name",
  },

  appearance: {
    title: "Appearance",
    system: "System",
    light: "Light",
    dark: "Dark",
  },

  achievements: {
    title: "Achievements",
    subtitle: "Track your collection milestones",

    first: {
      title: "First Sticker",
      description: "Collect your first sticker.",
    },

    collector10: {
      title: "Collector I",
      description: "Collect 10 stickers.",
    },

    collector25: {
      title: "Collector II",
      description: "Collect 25 stickers.",
    },

    collector50: {
      title: "Collector III",
      description: "Collect 50 stickers.",
    },

    half: {
      title: "Half Album",
      description: "Reach 50% completion.",
    },

    collector75: {
      title: "Almost There",
      description: "Reach 75% completion.",
    },

    collector100: {
      title: "Album Master",
      description: "Complete the album.",
    },

    team: {
      title: "Team Complete",
      description: "Complete one team.",
    },

    section: {
      title: "Section Complete",
      description: "Complete one section.",
    },

    gettingStarted: {
      title: "Getting Started",
      description: "Collect 25% of the album.",
    },

    halfwayThere: {
      title: "Halfway There",
      description: "Collect 50% of the album.",
    },

    almostComplete: {
      title: "Almost Complete",
      description: "Collect 75% of the album.",
    },

    albumComplete: {
      title: "Album Complete",
      description: "Collect every sticker.",
    },
  },

  backup: {
    title: "Backup",
    backups: "Backups",
    totalSize: "Total size",

    create: "Create",
    import: "Import",

    owned: "Owned",
    missing: "Missing",
    duplicates: "Duplicates",

    restore: "Restore",
    delete: "Delete",
    share: "Share",

    restoreBackup: "Restore backup",
    currentCollectionReplaced:
      "Your current collection will be replaced by this backup.",

    duplicatesCount: "{{count}} duplicates",

    noBackups: "No backups yet",
    createFirstBackup: "Create your first backup to keep your collection safe.",

    deleteTitle: "Delete backup",
    deleteConfirm: "Delete",
    deleteWarning: "This backup file will be permanently deleted.",

    created: "Backup created.",
    imported: "Collection imported.",
    restored: "Backup restored.",
    deleted: "Backup deleted.",
  },

  databaseInspector: {
    title: "Database Inspector",
    subtitle: "SQLite · panini2026.db",

    tables: {
      sections: "Sections",
      teams: "Teams",
      stickers: "Stickers",
    },

    summary: {
      title: "Sticker Summary",
      regular: "Regular",
      bronze: "Bronze",
      silver: "Silver",
      gold: "Gold",
      extra: "Extra",
      owned: "Owned",
      duplicates: "Duplicates",
    },

    searchPlaceholder: "Search {{table}}...",

    loading: "Loading {{table}}...",

    error: {
      title: "Database error",
    },

    empty: {
      title: "No rows",
      message: "No records match your search.",
    },

    footer: "{{table}}: {{count}} rows",
    footerFiltered: "{{table}}: {{filtered}} / {{total}} rows",

    refresh: "Refresh",
    nullValue: "NULL",
  },
};
