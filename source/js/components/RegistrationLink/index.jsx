import React from 'react';
import ReactDOM from 'react-dom';
import { useStateValue } from 'components/StateProvider';

import commonCss from 'styles/Common.sss';


export const RegistrationLink = () => {
    const [_, dispatch] = useStateValue();
    const onClickHandler = () => {
        dispatch({ type: 'showRegistrationOverlay' });
    };

    return (
        <button className={commonCss.btnLink} onClick={onClickHandler}>
            Зареєструватися
        </button>
    );
};
