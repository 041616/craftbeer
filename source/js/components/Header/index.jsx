import React from 'react';
import { Nav } from '../Nav';
import { Logo } from '../Logo';
import { Slogan } from '../Slogan';

import css from './Header.sss';


export const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.container}>
                <Logo/>
                <Slogan/>
                <Nav/>
            </div>
        </div>
    );
};
