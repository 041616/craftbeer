import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN } from 'utils/pages';
import largeLogo from './images/logo-large.svg';
import mediumLogo from './images/logo-medium.svg';
import smallLogo from './images/logo-small.svg';
import postcssVariables from 'root/postcss.variables';

import css from './Logo.sss';


export const Logo = () => {
    return (
        <Link className={css.link} to={MAIN}>
            <picture>
                <source srcSet={largeLogo} media='(min-width: 769px)'/>
                <source srcSet={mediumLogo} media='(max-width: 768px) and (min-width: 421px)'/>
                <source srcSet={smallLogo} media='(max-width: 420px)'/>
                <img className={css.logo} src={largeLogo} alt='Craftbeer Horishni Plavni'/>
            </picture>
        </Link>
    );
};
