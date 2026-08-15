export default function getFlagEmoji(iso2) {
  if (!iso2 || iso2 === "xx") {
    return "🏳️";
  }

  const code = iso2.toUpperCase();

  if (code.length !== 2) {
    return "🏳️";
  }

  return String.fromCodePoint(
    ...[...code].map((char) => 127397 + char.charCodeAt(0)),
  );
}
