import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN } from 'utils/pages';
import LargeLogo from 'components/SVG/LargeLogo';

import css from './Logo.sss';


export const Logo = () => (
    <Link className={css.link} to={MAIN}>
        <LargeLogo className={css.logo}/>
    </Link>
);
