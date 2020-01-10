import { COPYRIGHT } from './constants';


export function getCopyrightDate() {
    const currentYear = new Date().getFullYear();
    if (COPYRIGHT === currentYear) return currentYear;
    return `${COPYRIGHT}\u2014${currentYear}`;
}


export function UID() {
    return `f${(~~(Math.random()*1e8)).toString(16)}`;
}


export function debounce(func, wait, immediate = false) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        }, wait);
        if (immediate && !timeout) func.apply(this, [...args]);
    };
}
