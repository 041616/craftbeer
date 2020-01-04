import React from 'react';

import css from './CenteredMessage.sss';


export const CenteredMessage = ({ children }) => (
    <div className={css.text}>{children}</div>
);