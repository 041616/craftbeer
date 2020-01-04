import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HTML_TEMPLATES_SETTINGS } from 'utils/pages';
import postcssVariables from 'root/postcss.variables';
import { PAGES, UNKNOWN_BACKGROUND } from './utils';


export const Meta = withRouter(({ location = {} }) => {
    const page = PAGES[location.pathname] || {};
    const settings = HTML_TEMPLATES_SETTINGS[page.name] || {};
    const title = settings.title || 'Undefined';
    const description = settings.metaDescription;
    const keywords = settings.metaKeywords;
    const image = page.background || UNKNOWN_BACKGROUND;
    const style = [
        `body{background-image:url(${image['1200']})}`,
        `@media ${postcssVariables['max-768']}{body{background-image:url(${image['768']})}}`,
        `@media ${postcssVariables['max-540']}{body{background-image:url(${image['540']})}}`,
    ].join('');

    return (
        <Helmet>
            <title>{title}</title>
            {description ? <meta name='description' content={description}/> : null}
            {keywords ? <meta name='keywords' content={keywords}/> : null}
            <style type='text/css'>{style}</style>
        </Helmet>
    );
});
