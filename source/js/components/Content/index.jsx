import React from 'react';

import css from './Content.sss';


export const Content = ({ children }) => (
    <div className={css.content}>
        <div className={css.container}>
            {children}
        </div>
    </div>
);
