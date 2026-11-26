export function formatSalary(amount) {
    return `$${amount.toLocaleString("en-US")}`;
}

export function formatSalaryShort(amount) {
    return `$${Math.round(amount / 1000)}k`;
}

export function formatDate(isoDate) {
    return new Date(isoDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
    });
}

export function pluralize(count, word) {
    return `${count} ${word}${count === 1 ? "" : "s"}`;
}

export function getInitials(name) {
    const parts = name.trim().split(" ").filter((part) => part !== "");

    if (parts.length === 0) {
        return "?";
    }

    const first = parts[0][0];
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";

    return `${first}${last}`.toUpperCase();
}
