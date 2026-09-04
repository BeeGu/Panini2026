export function formatDate(date) {
  if (!date) return "-";

  const value = new Date(date);

  return value.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatDateTime(date) {
  if (!date) return "-";

  const value = new Date(date);

  return value.toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatRelativeDate(date, t) {
  if (!date) return "-";

  const value = new Date(date);
  const now = new Date();

  const diff = Math.floor((now - value) / 1000);

  if (diff < 60) {
    return t?.("date.justNow") ?? "Just now";
  }

  if (diff < 3600) {
    return (
      t?.("date.minutesAgo", {
        count: Math.floor(diff / 60),
      }) ?? `${Math.floor(diff / 60)} min ago`
    );
  }

  if (diff < 86400) {
    return (
      t?.("date.hoursAgo", {
        count: Math.floor(diff / 3600),
      }) ?? `${Math.floor(diff / 3600)} h ago`
    );
  }

  if (diff < 172800) {
    return t?.("date.yesterday") ?? "Yesterday";
  }

  return value.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
