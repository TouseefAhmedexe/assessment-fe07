export function joinClasses(...names) {
    return names.filter(Boolean).join(" ");
}

export function toClassName(text) {
    return text.toLowerCase().split(" ").join("-");
}
