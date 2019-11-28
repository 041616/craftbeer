import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MAIN, HTML_TEMPLATES_SETTINGS } from 'utils/pages';
import postcssVariables from 'root/postcss.variables';

import largeLogo from './images/logo-large.svg';
import mediumLogo from './images/logo-medium.svg';
import smallLogo from './images/logo-small.svg';

import css from './Logo.sss';


const Container = withRouter(({ children, location = {} }) => {
    if (location.pathname === MAIN) {
        return (
            <h1 className={css.container}>
                {HTML_TEMPLATES_SETTINGS.index.title}
                {children}
            </h1>
        );
    }
    return (
        <Link
            className={css.container}
            to={MAIN}
            title={HTML_TEMPLATES_SETTINGS.index.title}
        >
            {children}
        </Link>
    );
});


export const Logo = () => (
    <Container>
        <picture>
            <source srcSet={mediumLogo} media='(orientation: landscape) and (max-width: 768px) and (min-width: 421px), (orientation: portrait) and (max-width: 768px) and (min-width: 421px)'/>
            <source srcSet={smallLogo} media='(orientation: landscape) and (max-width: 420px), (orientation: portrait) and (max-width: 420px)'/>
            <img className={css.logo} src={largeLogo} alt='Craftbeer Horishni Plavni'/>
        </picture>
    </Container>
);
