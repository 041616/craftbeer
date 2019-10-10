import React from 'react';

import css from './Base.sss';


export const Base = ({ children }) => {
    return (
        <div className={css.base}>{children}</div>
    );
};
