import React from 'react';

import css from './Base.sss';


export const Base = ({ children }) => (
    <div className={css.grid}>
        {children}
    </div>
);
