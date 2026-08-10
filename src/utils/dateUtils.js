export function formatDate(date) {

    if (!date)
        return "-";

    const value = new Date(date);

    return value.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

}

export function formatDateTime(date) {

    if (!date)
        return "-";

    const value = new Date(date);

    return value.toLocaleString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

}

export function formatRelativeDate(date) {

    if (!date)
        return "-";

    const value = new Date(date);
    const now = new Date();

    const diff = Math.floor((now - value) / 1000);

    if (diff < 60)
        return "Just now";

    if (diff < 3600)
        return `${Math.floor(diff / 60)} min ago`;

    if (diff < 86400)
        return `${Math.floor(diff / 3600)} h ago`;

    if (diff < 172800)
        return "Yesterday";

    return value.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

}