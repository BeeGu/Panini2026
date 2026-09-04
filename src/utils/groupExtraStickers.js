const TYPES = ["regular", "bronze", "silver", "gold"];

export default function groupExtraStickers(stickers) {
  const map = new Map();

  stickers.forEach((sticker) => {
    const key = `${sticker.team_id}_${sticker.number}`;

    if (!map.has(key)) {
      map.set(key, {
        id: key,
        number: sticker.number,
        name: sticker.name,

        team_id: sticker.team_id,
        team_code: sticker.team_code,
        team: sticker.team,
        team_iso2: sticker.team_iso2,

        variants: {},
      });
    }

    map.get(key).variants[sticker.type] = sticker;
  });

  return [...map.values()]
    .sort((a, b) => {
      if (a.team_code !== b.team_code) {
        return a.team_code.localeCompare(b.team_code);
      }

      return a.number - b.number;
    })
    .map((item) => ({
      ...item,

      variants: TYPES.map((type) => ({
        type,
        sticker: item.variants[type] ?? null,
      })),
    }));
}
