import { MAIN, REGULATIONS, NEWS, ARTICLES, CONTACTS } from 'utils/pages';

import main540 from './images/main540.jpg';
import main768 from './images/main768.jpg';
import main1200 from './images/main1200.jpg';
import unknown540 from './images/unknown540.jpg';
import unknown768 from './images/unknown768.jpg';
import unknown1200 from './images/unknown1200.jpg';


const MAIN_BACKGROUND = {
    '540': main540,
    '768': main768,
    '1200': main1200,
};


export const UNKNOWN_BACKGROUND = {
    '540': unknown540,
    '768': unknown768,
    '1200': unknown1200,
};


export const PAGES = {
    [MAIN]: {
        name: 'index',
        background: MAIN_BACKGROUND,
    },
    [REGULATIONS]: {
        name: 'regulations',
        background: MAIN_BACKGROUND,
    },
    [NEWS]: {
        name: 'news',
        background: MAIN_BACKGROUND,
    },
    [ARTICLES]: {
        name: 'articles',
        background: MAIN_BACKGROUND,
    },
    [CONTACTS]: {
        name: 'contacts',
        background: MAIN_BACKGROUND,
    },
};
