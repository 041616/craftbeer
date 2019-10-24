import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN, ARTICLES } from 'utils/pages';
import LargeLogo from 'components/SVG/LargeLogo';

import css from './Nav.sss';
import style from '../../App.sss';

const style_={
    position: 'fixed',
    top: 0,
    left: '50%',
    width: '2px',
    height: '100vh',
    marginLeft: '-1px',
    backgroundColor: '#f00',
    zIndex: 10,
};

export const Nav = () => {
    return (
        <nav className={css.block}>
            <div style={style_} />
            <div className={style.container}>
                <div className={css.nav}>
                    <Link className={css.linkLogo} to={MAIN}>
                        <LargeLogo className={css.logo}/>
                    </Link>
                    <Link className={css.link} to={MAIN}>Головна</Link>
                    <Link className={css.link} to={MAIN}>Статут</Link>
                    <Link className={css.link} to={MAIN}>Діяльність</Link>
                    <Link className={css.linkAfter} to={ARTICLES}>Новини</Link>
                    <Link className={css.linkAfter} to={ARTICLES}>Статті</Link>
                    <Link className={css.linkAfter} to={ARTICLES}>Контакти</Link>
                </div>
            </div>
        </nav>
    );
};
