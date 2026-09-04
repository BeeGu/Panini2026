const TYPE_ORDER = {
  regular: 0,
  bronze: 1,
  silver: 2,
  gold: 3,
};

export default function sortTradeStickers(stickers) {
  return [...stickers].sort((a, b) => {
    const numberA = Number(a.number);
    const numberB = Number(b.number);

    if (numberA !== numberB) {
      return numberA - numberB;
    }

    const typeA = TYPE_ORDER[a.type] ?? 99;
    const typeB = TYPE_ORDER[b.type] ?? 99;

    if (typeA !== typeB) {
      return typeA - typeB;
    }

    return String(a.code ?? "").localeCompare(String(b.code ?? ""));
  });
}
