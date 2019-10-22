import React from 'react';

import './Reset.sss';
import css from './Content.sss';
import style from '../../App.sss';


export const Content = ({ children }) => {
    return (
        <div className={css.content}>
            <div className={style.container}>
                {children}
            </div>
        </div>
    );
};
