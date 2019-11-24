import React from 'react';
import { withRouter } from 'react-router-dom';
import { MAIN } from 'utils/pages';

import css from './PrimaryHeadline.sss';


const Headline = ({ children, location = {} }) => {
    const Tag = location.pathname === MAIN ? 'h2' : 'h1';
    return <Tag className={css.headline}>{children}</Tag>;
};


export const PrimaryHeadline = withRouter(Headline);