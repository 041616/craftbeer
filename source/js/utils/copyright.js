import { COPYRIGHT } from './constants';


export function getCopyrightDate() {
    const currentYear = new Date().getFullYear();
    // debugger;
    if (COPYRIGHT === currentYear) return currentYear;
    return `${COPYRIGHT}\u2014${currentYear}`;
}
