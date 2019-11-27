export function getWindowLocation() {
    if (!window || !window.location) return {};
    return window.location;
}


export function getWindowLocationPathname() {
    const location = getWindowLocation();
    return location.pathname || "";
}


export function getWindowLocationHostname() {
    const location = getWindowLocation();
    return location.hostname || "";
}
