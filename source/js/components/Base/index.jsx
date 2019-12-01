import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as pages from 'utils/pages';

import main from './images/main.png';
import process from './images/process.png';
import unknown from './images/unknown.png';

import css from './Base.sss';


const PAGES = {
    [pages.MAIN]: {
        name: 'index',
        background: main,
    },
    [pages.REGULATIONS]: {
        name: 'regulations',
        background: process,
    },
    [pages.ACTIVITY]: {
        name: 'activity',
        background: process,
    },
    [pages.NEWS]: {
        name: 'news',
        background: process,
    },
    [pages.ARTICLES]: {
        name: 'articles',
        background: process,
    },
    [pages.CONTACTS]: {
        name: 'contacts',
        background: process,
    },
};


export const Base = withRouter(({ children, location = {} }) => {
    const page = PAGES[location.pathname] || {};
    const settings = pages.HTML_TEMPLATES_SETTINGS[page.name] || {};
    const title = settings.title || 'Undefined';
    const description = settings.metaDescription;
    const keywords = settings.metaKeywords;
    const image = page.background || unknown;
    const style = `.application-container{background-image:url(${image})}`;
    return (
        <div className={css.grid}>
            <Helmet>
                <title>{title}</title>
                {description ? <meta name='description' content={description}/> : null}
                {keywords ? <meta name='keywords' content={keywords}/> : null}
                <style type='text/css'>{style}</style>
            </Helmet>
            {children}
        </div>
    );
});
