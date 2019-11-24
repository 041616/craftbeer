import React from 'react';
import { getCopyrightDate } from 'utils/copyright';

import css from './Footer.sss';


export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <p className={css.copyright}>
                    &copy; Громадська Організація
                    "Товариство шанувальників крафтового пива м. Горішні Плавні", {getCopyrightDate()}
                </p>
            </div>
        </footer>
    );
};
