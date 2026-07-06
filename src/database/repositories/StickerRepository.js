import db from "../db";

export function getAll() {
  return db.getAllSync(
    "SELECT * FROM stickers ORDER BY number"
  );
}

export function getById(id) {
  return db.getFirstSync(
    "SELECT * FROM stickers WHERE id = ?",
    [id]
  );
}

export function updateOwned(id, owned) {
  db.runSync(
    "UPDATE stickers SET owned = ? WHERE id = ?",
    [owned ? 1 : 0, id]
  );
}

export function updateDuplicates(id, duplicates) {
  db.runSync(
    "UPDATE stickers SET duplicates = ? WHERE id = ?",
    [duplicates, id]
  );
}

export function toggleOwned(id) {
  const sticker = db.getFirstSync(
    "SELECT owned FROM stickers WHERE id = ?",
    [id]
  );

  const newValue = sticker.owned ? 0 : 1;

  db.runSync(
    "UPDATE stickers SET owned = ? WHERE id = ?",
    [newValue, id]
  );

  return newValue;
}