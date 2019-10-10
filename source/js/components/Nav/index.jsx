import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN, ARTICLES } from 'utils/pages';

import css from './Nav.sss';


export const Nav = () => {
    return (
        <nav className={css.nav}>
            <Link to={MAIN}>Main</Link>
            <Link to={ARTICLES}>Articles</Link>
        </nav>
    );
};
