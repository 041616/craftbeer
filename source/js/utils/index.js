import { COPYRIGHT } from './constants';


export function getCopyrightDate() {
    const currentYear = new Date().getFullYear();
    if (COPYRIGHT === currentYear) return currentYear;
    return `${COPYRIGHT}\u2014${currentYear}`;
}


export function UID() {
    return `f${(~~(Math.random()*1e8)).toString(16)}`;
}
