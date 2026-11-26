export function readQuery(name) {
    return new URLSearchParams(window.location.search).get(name);
}

export function buildHref(changes) {
    const params = new URLSearchParams(window.location.search);

    Object.entries(changes).forEach(([key, value]) => {
        if (value === null) {
            params.delete(key);
        } else {
            params.set(key, value);
        }
    });

    const query = params.toString();

    return query === "" ? window.location.pathname : `${window.location.pathname}?${query}`;
}

export function navigateTo(changes) {
    window.location.href = buildHref(changes);
}
