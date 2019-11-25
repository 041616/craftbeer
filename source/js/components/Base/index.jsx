import React from 'react';
import { withRouter } from 'react-router-dom';
import * as URLS from 'utils/pages';

import main from './images/main.png';
import process from './images/process.png';
import unknown from './images/unknown.png';

import css from './Base.sss';


const BACKGROUNDS = {
    [URLS.MAIN]: main,
    [URLS.REGULATIONS]: process,
    [URLS.ACTIVITY]: process,
    [URLS.NEWS]: process,
    [URLS.ARTICLES]: process,
    [URLS.CONTACTS]: process,
};


export const Base = withRouter(({ children, location = {} }) => {
    const image = `url(${BACKGROUNDS[location.pathname] || unknown})`;
    if (document.body.style.backgroundImage !== image) {
        document.body.style.backgroundImage = image;
    };
    return (
        <div className={css.grid}>
            {children}
        </div>
    );
});
