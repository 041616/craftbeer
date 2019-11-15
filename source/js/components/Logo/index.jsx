import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN } from 'utils/pages';
import largeLogo from './images/logo-large.svg';
import mediumLogo from './images/logo-medium.svg';
import smallLogo from './images/logo-small.svg';

import css from './Logo.sss';


export const Logo = () => (
    <Link className={css.link} to={MAIN}>
        <img className={css.logo} src={largeLogo} alt='Craftbeer Horishni Plavni'/>
        <img className={css.logo} src={mediumLogo} alt='Craftbeer Horishni Plavni'/>
        <img className={css.logo} src={smallLogo} alt='Craftbeer Horishni Plavni'/>
    </Link>
);
