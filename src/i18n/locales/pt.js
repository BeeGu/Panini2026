// src/i18n/locales/pt.js

export default {
  common: {
    cancel: "Cancelar",
    save: "Guardar",
    edit: "Editar",
    yes: "Sim",
    no: "Não",
    close: "Fechar",
    reset: "Repor",
    completed: "Concluído",
    confirm: "Confirmar",

    select: "Selecionar...",
    searchField: "Pesquisar {{field}}...",
    noResults: "Nenhum resultado encontrado",
  },

  date: {
    justNow: "Agora mesmo",
    minutesAgo: "Há {{count}} min",
    hoursAgo: "Há {{count}} h",
    yesterday: "Ontem",
  },

  navigation: {
    search: "Pesquisar",
    sticker: "Cromos",
    editSticker: "Editar cromo",
    backups: "Cópias de segurança",
    databaseInspector: "Inspetor da base de dados",

    home: "Início",
    album: "Álbum",
    tradeCenter: "Centro de trocas",
    statistics: "Estatísticas",
    settings: "Definições",
  },

  home: {
    title: "🏆 Panini Tracker",
    subtitle: "FIFA World Cup 2026",

    albumProgress: "Progresso do álbum",

    owned: "Possuídos",
    missing: "Em falta",
    duplicates: "Repetidos",
    completed: "Concluído",

    album: "Álbum",
    search: "Pesquisar",
    statistics: "Estatísticas",
    settings: "Definições",

    recentActivity: "Atividade recente",
    noStickersCollected: "Ainda não colecionou nenhum cromo.",
  },

  album: {
    title: "Álbum",
    searchPlaceholder: "Número, jogador ou equipa...",

    filters: {
      all: "Todos",
      missing: "Em falta",
      owned: "Possuídos",
      duplicates: "Repetidos",
    },

    stats: {
      missing: "{{count}} em falta",
      duplicates: "{{count}} repetidos",
    },

    extraStickers: "Cromos extra",

    stickerList: {
      empty: "Nenhum cromo encontrado.",
    },

    types: {
      regular: "Normal",
      bronze: "Bronze",
      silver: "Prata",
      gold: "Ouro",
    },
  },

  search: {
    title: "Pesquisar",
    subtitle: "Encontre um cromo por número, jogador ou equipa",
    placeholder: "Número, jogador ou equipa...",

    sections: {
      regular: "Cromos normais",
      extra: "Cromos extra",
    },

    empty: {
      title: "Pesquisar cromos",
      text: "Introduza um número, nome de jogador, equipa ou código.",
    },

    noResults: {
      title: "Nenhum cromo encontrado",
      text: 'Nenhum resultado para "{{query}}".',
    },

    resultCount_one: "{{count}} cromo",
    resultCount_other: "{{count}} cromos",

    status: {
      collected: "Colecionado",
      missing: "Em falta",
    },

    types: {
      regular: "Normal",
      bronze: "Bronze",
      silver: "Prata",
      gold: "Ouro",
    },
  },

  sticker: {
    collected: "Colecionado",

    collection: "Coleção",
    owned: "Possuídos",
    duplicates: "Repetidos",

    information: "Informações do cromo",
    code: "Código",
    section: "Secção",
    team: "Equipa",
    teamCode: "Código da equipa",

    notes: "Notas",
    noNotes: "Sem notas",

    number: "Número do cromo",
    name: "Nome do cromo",
    performedDate: "Data de obtenção",
  },

  trade: {
    title: "Centro de trocas",

    duplicates: "Repetidos",
    missing: "Em falta",
    both: "Ambos",

    copy: "Copiar",
    share: "Partilhar",

    shareJson: "Partilhar ficheiro de troca",
    importJson: "Importar ficheiro de troca",

    summary: "{{duplicates}} repetidos • {{missing}} em falta",

    duplicatesCount: "Repetidos ({{count}})",
    missingCount: "Em falta ({{count}})",

    duplicatesAvailable_one: "{{count}} repetido disponível",
    duplicatesAvailable_other: "{{count}} repetidos disponíveis",

    stickersMissing_one: "{{count}} cromo em falta",
    stickersMissing_other: "{{count}} cromos em falta",

    duplicatesAndMissing: "{{duplicates}} repetidos • {{missing}} em falta",

    copySuccess: "Lista de trocas copiada para a área de transferência.",
    copyError: "Não foi possível copiar a lista de trocas.",

    shareSuccess: "Lista de trocas partilhada.",
    shareError: "Não foi possível partilhar a lista de trocas.",

    shareJsonSuccess: "Ficheiro de troca partilhado.",
    shareJsonError: "Não foi possível partilhar o ficheiro de troca.",

    importSuccess: "Ficheiro de troca importado.",
    importError: "Não foi possível importar o ficheiro de troca.",

    importedTrade: "Troca importada",
    tradeWith: "Troca com {{name}}",
    unknownUser: "Utilizador desconhecido",

    theyCanGiveYou: "Podem dar-lhe",
    youCanGiveThem: "Pode dar-lhes",

    theyCanGiveMe: "Podem dar-me",
    iCanGiveThem: "Posso dar-lhes",

    searchStickers: "Pesquisar cromos...",
    noMatchingStickers: "Nenhum cromo correspondente encontrado.",
    noStickers: "Nenhum cromo disponível.",

    availableStickers: "{{count}} cromos disponíveis",

    noStickersTheyCanGive: "Não têm nenhum dos cromos que lhe faltam.",

    noStickersYouCanGive: "Não tem nenhum dos cromos que lhes faltam.",
  },

  statistics: {
    title: "Estatísticas",
    collectionOverview: "Resumo da coleção",

    albumCompletion: "Conclusão do álbum",
    completedPercentage: "{{percentage}}% concluído",

    topTeams: "Melhores equipas",
    bestCompletedTeams: "Equipas mais completas",

    sections: "Secções",
    completionBySection: "Conclusão por secção",

    nationalTeams: "{{count}} seleções nacionais",
    sectionsCount: "{{count}} secções",

    achievements: "Conquistas",
    completed: "{{count}} concluídas",

    visualStatistics: "Estatísticas visuais",

    recentActivity: "Atividade recente",
    visualActivity: "Atividade visual",

    duplicates: "Repetidos",
    duplicatesByCategory: "Cromos repetidos por categoria",
    none: "Nenhum",

    owned: "Possuídos",
    missing: "Em falta",
    completion: "Conclusão",

    ofTotal: "de {{total}}",
    completePercentage: "{{percentage}}% concluído",

    availableForTrade: "Disponíveis para troca",
  },

  settings: {
    title: "Definições",
    subtitle: "Preferências da aplicação",

    general: "Geral",
    collection: "Coleção",
    developer: "Programador",
    appearance: "Aparência",
    language: "Idioma",
    backup: "Cópia de segurança",
    about: "Sobre",

    appVersion: "Versão da aplicação",
    databaseVersion: "Versão da base de dados",

    sections: "Secções",
    teams: "Equipas",
    stickers: "Cromos",
    owned: "Possuídos",
    missing: "Em falta",
    duplicates: "Repetidos",

    developerMode: "Modo de programador",
    developerModeDescription: "Ativar ferramentas de programador",

    databaseInspector: "Inspetor da base de dados",
    databaseInspectorDescription: "Inspecionar a base de dados SQLite",

    resetCollection: "Repor coleção",
    resetCollectionDescription: "Remover cromos possuídos e repetidos",

    rebuildDatabase: "Reconstruir base de dados",
    rebuildDatabaseDescription: "Recriar a base de dados SQLite",

    backupManager: "Gestor de cópias de segurança",
    backupManagerDescription: "Gerir cópias de segurança locais",

    version: "Versão",

    album: "Álbum",
    albumName: "Panini FIFA World Cup 2026",

    languageDescription: "Escolha o idioma da aplicação",

    resetCollectionDialogTitle: "Repor coleção",
    resetCollectionConfirm: "Repor",
    resetCollectionMessage:
      "Isto irá remover todos os cromos colecionados, repetidos e notas.",
    resetCollectionWarning:
      "Esta ação não pode ser anulada, exceto se tiver uma cópia de segurança.",

    rebuildDatabaseDialogTitle: "Reconstruir base de dados",
    rebuildDatabaseConfirm: "Reconstruir",
    rebuildDatabaseMessage:
      "A base de dados será recriada a partir dos dados originais do álbum.",
    rebuildDatabaseWarning:
      "Todo o progresso da coleção, cromos repetidos e notas serão removidos permanentemente.",

    trade: "Trocas",
    tradeUserName: "Nome para trocas",
    tradeUserNameDescription:
      "Este nome será incluído nos ficheiros JSON de troca.",
    tradeUserNamePlaceholder: "Introduza o seu nome",
  },

  appearance: {
    title: "Aparência",
    system: "Sistema",
    light: "Claro",
    dark: "Escuro",
  },

  achievements: {
    title: "Conquistas",
    subtitle: "Acompanhe os marcos da sua coleção",

    first: {
      title: "Primeiro cromo",
      description: "Colecione o seu primeiro cromo.",
    },

    collector10: {
      title: "Colecionador I",
      description: "Colecione 10 cromos.",
    },

    collector25: {
      title: "Colecionador II",
      description: "Colecione 25 cromos.",
    },

    collector50: {
      title: "Colecionador III",
      description: "Colecione 50 cromos.",
    },

    half: {
      title: "Metade do álbum",
      description: "Alcance 50% de conclusão.",
    },

    collector75: {
      title: "Quase lá",
      description: "Alcance 75% de conclusão.",
    },

    collector100: {
      title: "Mestre do álbum",
      description: "Complete o álbum.",
    },

    team: {
      title: "Equipa completa",
      description: "Complete uma equipa.",
    },

    section: {
      title: "Secção completa",
      description: "Complete uma secção.",
    },

    gettingStarted: {
      title: "Primeiros passos",
      description: "Colecione 25% do álbum.",
    },

    halfwayThere: {
      title: "A meio caminho",
      description: "Colecione 50% do álbum.",
    },

    almostComplete: {
      title: "Quase completo",
      description: "Colecione 75% do álbum.",
    },

    albumComplete: {
      title: "Álbum completo",
      description: "Colecione todos os cromos.",
    },
  },

  backup: {
    title: "Cópia de segurança",
    backups: "Cópias de segurança",
    totalSize: "Tamanho total",

    create: "Criar",
    import: "Importar",

    owned: "Possuídos",
    missing: "Em falta",
    duplicates: "Repetidos",

    restore: "Restaurar",
    delete: "Eliminar",
    share: "Partilhar",

    restoreBackup: "Restaurar cópia de segurança",
    currentCollectionReplaced:
      "A sua coleção atual será substituída por esta cópia de segurança.",

    duplicatesCount: "{{count}} repetidos",

    noBackups: "Ainda não existem cópias de segurança",
    createFirstBackup:
      "Crie a sua primeira cópia de segurança para manter a sua coleção segura.",

    deleteTitle: "Eliminar cópia de segurança",
    deleteConfirm: "Eliminar",
    deleteWarning:
      "Este ficheiro de cópia de segurança será eliminado permanentemente.",

    created: "Cópia de segurança criada.",
    imported: "Coleção importada.",
    restored: "Cópia de segurança restaurada.",
    deleted: "Cópia de segurança eliminada.",
  },

  databaseInspector: {
    title: "Inspetor da base de dados",
    subtitle: "SQLite · panini2026.db",

    tables: {
      sections: "Secções",
      teams: "Equipas",
      stickers: "Cromos",
    },

    summary: {
      title: "Resumo dos cromos",
      regular: "Normal",
      bronze: "Bronze",
      silver: "Prata",
      gold: "Ouro",
      extra: "Extra",
      owned: "Possuídos",
      duplicates: "Repetidos",
    },

    searchPlaceholder: "Pesquisar {{table}}...",

    loading: "A carregar {{table}}...",

    error: {
      title: "Erro na base de dados",
    },

    empty: {
      title: "Nenhuma linha",
      message: "Nenhum registo corresponde à sua pesquisa.",
    },

    footer: "{{table}}: {{count}} linhas",
    footerFiltered: "{{table}}: {{filtered}} / {{total}} linhas",

    refresh: "Atualizar",
    nullValue: "NULL",
  },
};
