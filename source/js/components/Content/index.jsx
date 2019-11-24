import React from 'react';
import { withRouter } from 'react-router-dom';
import * as URLS from 'utils/pages';

import main from './images/main.jpg';
import process from './images/process.jpg';
import unknown from './images/unknown.jpg';

import css from './Content.sss';


const BACKGROUNDS = {
    [URLS.MAIN]: main,
    [URLS.REGULATIONS]: process,
    [URLS.ACTIVITY]: process,
    [URLS.NEWS]: process,
    [URLS.ARTICLES]: process,
    [URLS.CONTACTS]: process,
};


export const Content = withRouter(({ children, location = {} }) => {
    const image = BACKGROUNDS[location.pathname] || unknown;
    const style = { backgroundImage: `url(${image})` };
    return (
        <div className={css.content} style={style}>
            <div className={css.container}>
                {children}
            </div>
        </div>
    );
});
