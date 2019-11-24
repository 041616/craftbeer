import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MAIN } from 'utils/pages';
import largeLogo from './images/logo-large.svg';
import mediumLogo from './images/logo-medium.svg';
import smallLogo from './images/logo-small.svg';
import postcssVariables from 'root/postcss.variables';

import css from './Logo.sss';


const Container = withRouter(({ children, location = {} }) => {
    if (location.pathname === MAIN) {
        return (
            <h1 className={css.container}>
                Крафтове пиво, Горішні Плавні
                {children}
            </h1>
        );
    }
    return (
        <Link className={css.container} to={MAIN}>
            {children}
        </Link>
    );
});


export const Logotype = () => (
    <Container>
        <picture>
            <source srcSet={largeLogo} media='(min-width: 769px)'/>
            <source srcSet={mediumLogo} media='(max-width: 768px) and (min-width: 421px)'/>
            <source srcSet={smallLogo} media='(max-width: 420px)'/>
            <img className={css.logo} src={largeLogo} alt='Craftbeer Horishni Plavni'/>
        </picture>
    </Container>
);


export const Logo = withRouter(Logotype);
