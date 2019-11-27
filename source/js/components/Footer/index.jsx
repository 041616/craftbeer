import React from 'react';
import { getCopyrightDate } from 'utils';

import css from './Footer.sss';
import commonCss from 'styles/Common.sss';


export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={commonCss.container}>
                <p className={css.copyright}>
                    &copy; Громадська організація
                    &laquo;Товариство шанувальників крафтового пива м.&nbsp;Горішні&nbsp;Плавні&raquo;, {getCopyrightDate()}
                </p>
            </div>
        </footer>
    );
};
