import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN, ARTICLES } from 'utils/pages';
import LargeLogo from 'components/SVG/LargeLogo';

import css from './Nav.sss';
import style from '../../App.sss';


export const Nav = () => {
    return (
        <nav className={css.nav}>
            <div className={style.container}>
                <LargeLogo/>
                <Link to={MAIN}>Main</Link>
                <Link to={ARTICLES}>Articles</Link>
            </div>
        </nav>
    );
};
