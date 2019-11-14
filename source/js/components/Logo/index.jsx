import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN } from 'utils/pages';
// import LargeLogo from 'images/logo-large.svg';

import css from './Logo.sss';


export const Logo = () => (
    <Link className={css.link} to={MAIN}>
        <img className={css.logo} src='public/img/logo-large.svg' alt='Craftbeer Horishni Plavni'/>
    </Link>
);
