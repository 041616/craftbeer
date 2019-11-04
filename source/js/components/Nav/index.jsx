import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN, ARTICLES } from 'utils/pages';

import css from './Nav.sss';


export const Nav = () => {
    // на ресайз убирать navActive
    return (
        <nav className={css.nav}>
            <button className={css.close} onClick={() => alert('asdadasd')}/>
            <ul className={css.list}>
                <li className={css.item}>
                    <Link className={css.link} to={MAIN}>Головна</Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} to={MAIN}>Статут</Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} to={MAIN}>Діяльність</Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} to={ARTICLES}>Новини</Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} to={ARTICLES}>Статті</Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} to={ARTICLES}>Контакти</Link>
                </li>
            </ul>
        </nav>
    );
};
