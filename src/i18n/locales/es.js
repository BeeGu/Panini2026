// src/i18n/locales/es.js

export default {
  common: {
    cancel: "Cancelar",
    save: "Guardar",
    edit: "Editar",
    yes: "Sí",
    no: "No",
    close: "Cerrar",
    reset: "Restablecer",
    completed: "Completado",
    confirm: "Confirmar",

    select: "Seleccionar...",
    searchField: "Buscar {{field}}...",
    noResults: "No se encontraron resultados",
  },

  date: {
    justNow: "Justo ahora",
    minutesAgo: "Hace {{count}} min",
    hoursAgo: "Hace {{count}} h",
    yesterday: "Ayer",
  },

  navigation: {
    search: "Buscar",
    sticker: "Cromo",
    editSticker: "Editar cromo",
    backups: "Copias de seguridad",
    databaseInspector: "Inspector de base de datos",

    home: "Inicio",
    album: "Álbum",
    tradeCenter: "Centro de intercambios",
    statistics: "Estadísticas",
    settings: "Ajustes",
  },

  home: {
    title: "🏆 Panini Tracker",
    subtitle: "Copa Mundial FIFA 2026",

    albumProgress: "Progreso del álbum",

    owned: "Conseguidos",
    missing: "Faltantes",
    duplicates: "Repetidos",
    completed: "Completado",

    album: "Álbum",
    search: "Buscar",
    statistics: "Estadísticas",
    settings: "Ajustes",

    recentActivity: "Actividad reciente",
    noStickersCollected: "Aún no has conseguido cromos.",
  },

  album: {
    title: "Álbum",
    searchPlaceholder: "Número, jugador o equipo...",

    filters: {
      all: "Todos",
      missing: "Faltantes",
      owned: "Conseguidos",
      duplicates: "Repetidos",
    },

    stats: {
      missing: "{{count}} faltantes",
      duplicates: "{{count}} repetidos",
    },

    extraStickers: "Cromos extra",

    stickerList: {
      empty: "No se encontraron cromos.",
    },

    types: {
      regular: "Normal",
      bronze: "Bronce",
      silver: "Plata",
      gold: "Oro",
    },
  },

  search: {
    title: "Buscar",
    subtitle: "Encuentra un cromo por número, jugador o equipo",
    placeholder: "Número, jugador o equipo...",

    sections: {
      regular: "Cromos normales",
      extra: "Cromos extra",
    },

    empty: {
      title: "Buscar cromos",
      text: "Introduce un número, jugador, equipo o código.",
    },

    noResults: {
      title: "No se encontraron cromos",
      text: 'No hay resultados para "{{query}}".',
    },

    resultCount_one: "{{count}} cromo",
    resultCount_other: "{{count}} cromos",

    status: {
      collected: "Conseguido",
      missing: "Faltante",
    },

    types: {
      regular: "Normal",
      bronze: "Bronce",
      silver: "Plata",
      gold: "Oro",
    },
  },

  sticker: {
    collected: "Conseguido",

    collection: "Colección",
    owned: "Conseguido",
    duplicates: "Repetidos",

    information: "Información del cromo",
    code: "Código",
    section: "Sección",
    team: "Equipo",
    teamCode: "Código del equipo",

    notes: "Notas",
    noNotes: "Sin notas",

    number: "Número del cromo",
    name: "Nombre del cromo",
    performedDate: "Fecha de actualización",
  },

  trade: {
    title: "Centro de intercambios",

    duplicates: "Repetidos",
    missing: "Faltantes",
    both: "Ambos",

    copy: "Copiar",
    share: "Compartir",

    shareJson: "Compartir archivo de intercambio",
    importJson: "Importar archivo de intercambio",

    summary: "{{duplicates}} repetidos • {{missing}} faltantes",

    duplicatesCount: "Repetidos ({{count}})",
    missingCount: "Faltantes ({{count}})",

    duplicatesAvailable_one: "{{count}} repetido disponible",
    duplicatesAvailable_other: "{{count}} repetidos disponibles",

    stickersMissing_one: "{{count}} cromo faltante",
    stickersMissing_other: "{{count}} cromos faltantes",

    duplicatesAndMissing: "{{duplicates}} repetidos • {{missing}} faltantes",

    copySuccess: "Lista de intercambio copiada.",
    copyError: "No se pudo copiar la lista.",

    shareSuccess: "Lista de intercambio compartida.",
    shareError: "No se pudo compartir la lista.",

    shareJsonSuccess: "Archivo de intercambio compartido.",
    shareJsonError: "No se pudo compartir el archivo de intercambio.",

    importSuccess: "Archivo de intercambio importado.",
    importError: "No se pudo importar el archivo de intercambio.",

    importedTrade: "Intercambio importado",
    tradeWith: "Intercambio con {{name}}",
    unknownUser: "Usuario desconocido",

    theyCanGiveYou: "Te pueden dar",
    youCanGiveThem: "Puedes darles",

    theyCanGiveMe: "Me pueden dar",
    iCanGiveThem: "Les puedo dar",

    searchStickers: "Buscar cromos...",
    noMatchingStickers: "No se encontraron cromos.",
    noStickers: "No hay cromos disponibles.",

    availableStickers: "{{count}} cromos disponibles",

    noStickersTheyCanGive: "No tienen cromos que te falten.",
    noStickersYouCanGive: "No tienes cromos que les falten.",
  },

  statistics: {
    title: "Estadísticas",
    collectionOverview: "Resumen de la colección",

    albumCompletion: "Completado del álbum",
    completedPercentage: "{{percentage}}% completado",

    topTeams: "Mejores equipos",
    bestCompletedTeams: "Equipos más completos",

    sections: "Secciones",
    completionBySection: "Completado por sección",

    nationalTeams: "{{count}} selecciones nacionales",
    sectionsCount: "{{count}} secciones",

    achievements: "Logros",
    completed: "{{count}} completados",

    visualStatistics: "Estadísticas visuales",

    recentActivity: "Actividad reciente",
    visualActivity: "Actividad visual",

    duplicates: "Repetidos",
    duplicatesByCategory: "Cromos repetidos por categoría",
    none: "Ninguno",

    owned: "Conseguidos",
    missing: "Faltantes",
    completion: "Completado",

    ofTotal: "de {{total}}",
    completePercentage: "{{percentage}}% completado",

    availableForTrade: "Disponibles para intercambio",
  },

  settings: {
    title: "Ajustes",
    subtitle: "Preferencias de la aplicación",

    general: "General",
    collection: "Colección",
    developer: "Desarrollador",
    appearance: "Apariencia",
    language: "Idioma",
    backup: "Copia de seguridad",
    about: "Acerca de",

    appVersion: "Versión de la aplicación",
    databaseVersion: "Versión de la base de datos",

    sections: "Secciones",
    teams: "Equipos",
    stickers: "Cromos",
    owned: "Conseguidos",
    missing: "Faltantes",
    duplicates: "Repetidos",

    developerMode: "Modo desarrollador",
    developerModeDescription: "Activar herramientas de desarrollador",

    databaseInspector: "Inspector de base de datos",
    databaseInspectorDescription: "Inspeccionar la base de datos SQLite",

    resetCollection: "Restablecer colección",
    resetCollectionDescription: "Eliminar cromos conseguidos y repetidos",

    rebuildDatabase: "Reconstruir base de datos",
    rebuildDatabaseDescription: "Recrear la base de datos SQLite",

    backupManager: "Gestor de copias",
    backupManagerDescription: "Gestionar copias de seguridad locales",

    version: "Versión",

    album: "Álbum",
    albumName: "Panini FIFA World Cup 2026",

    languageDescription: "Elegir idioma de la aplicación",

    resetCollectionDialogTitle: "Restablecer colección",
    resetCollectionConfirm: "Restablecer",
    resetCollectionMessage:
      "Esto eliminará todos los cromos conseguidos, repetidos y notas.",
    resetCollectionWarning:
      "Esta acción no se puede deshacer sin una copia de seguridad.",

    rebuildDatabaseDialogTitle: "Reconstruir base de datos",
    rebuildDatabaseConfirm: "Reconstruir",
    rebuildDatabaseMessage:
      "La base de datos se recreará a partir de los datos originales del álbum.",
    rebuildDatabaseWarning:
      "Todo el progreso, repetidos y notas se eliminarán permanentemente.",

    trade: "Intercambios",
    tradeUserName: "Nombre para intercambios",
    tradeUserNameDescription:
      "Este nombre se incluirá en los archivos JSON de intercambio.",
    tradeUserNamePlaceholder: "Introduce tu nombre",
  },

  appearance: {
    title: "Apariencia",
    system: "Sistema",
    light: "Claro",
    dark: "Oscuro",
  },

  achievements: {
    title: "Logros",
    subtitle: "Sigue los objetivos de tu colección",

    first: {
      title: "Primer cromo",
      description: "Consigue tu primer cromo.",
    },

    collector10: {
      title: "Coleccionista I",
      description: "Consigue 10 cromos.",
    },

    collector25: {
      title: "Coleccionista II",
      description: "Consigue 25 cromos.",
    },

    collector50: {
      title: "Coleccionista III",
      description: "Consigue 50 cromos.",
    },

    half: {
      title: "Medio álbum",
      description: "Alcanza el 50% de la colección.",
    },

    collector75: {
      title: "Casi allí",
      description: "Alcanza el 75% de la colección.",
    },

    collector100: {
      title: "Maestro del álbum",
      description: "Completa el álbum.",
    },

    team: {
      title: "Equipo completo",
      description: "Completa un equipo.",
    },

    section: {
      title: "Sección completa",
      description: "Completa una sección.",
    },

    gettingStarted: {
      title: "Primeros pasos",
      description: "Consigue el 25% del álbum.",
    },

    halfwayThere: {
      title: "A mitad de camino",
      description: "Consigue el 50% del álbum.",
    },

    almostComplete: {
      title: "Casi completo",
      description: "Consigue el 75% del álbum.",
    },

    albumComplete: {
      title: "Álbum completo",
      description: "Consigue todos los cromos.",
    },
  },

  backup: {
    title: "Copia de seguridad",
    backups: "Copias de seguridad",
    totalSize: "Tamaño total",

    create: "Crear",
    import: "Importar",

    owned: "Conseguidos",
    missing: "Faltantes",
    duplicates: "Repetidos",

    restore: "Restaurar",
    delete: "Eliminar",
    share: "Compartir",

    restoreBackup: "Restaurar copia",
    currentCollectionReplaced:
      "Tu colección actual será reemplazada por esta copia.",

    duplicatesCount: "{{count}} repetidos",

    noBackups: "No hay copias de seguridad",
    createFirstBackup:
      "Crea tu primera copia de seguridad para proteger tu colección.",

    deleteTitle: "Eliminar copia de seguridad",
    deleteConfirm: "Eliminar",
    deleteWarning: "Este archivo se eliminará permanentemente.",

    created: "Copia de seguridad creada.",
    imported: "Colección importada.",
    restored: "Copia de seguridad restaurada.",
    deleted: "Copia de seguridad eliminada.",
  },

  databaseInspector: {
    title: "Inspector de base de datos",
    subtitle: "SQLite · panini2026.db",

    tables: {
      sections: "Secciones",
      teams: "Equipos",
      stickers: "Cromos",
    },

    summary: {
      title: "Resumen de cromos",
      regular: "Normales",
      bronze: "Bronce",
      silver: "Plata",
      gold: "Oro",
      extra: "Extra",
      owned: "Conseguidos",
      duplicates: "Repetidos",
    },

    searchPlaceholder: "Buscar {{table}}...",
    loading: "Cargando {{table}}...",

    error: {
      title: "Error de base de datos",
    },

    empty: {
      title: "Sin registros",
      message: "Ningún registro coincide con la búsqueda.",
    },

    footer: "{{table}}: {{count}} registros",
    footerFiltered: "{{table}}: {{filtered}} / {{total}} registros",

    refresh: "Actualizar",
    nullValue: "NULL",
  },
};
