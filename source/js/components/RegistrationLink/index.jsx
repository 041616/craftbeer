import React from 'react';
import { getVerticalScrollbarWidth } from 'utils/dom';
import { useStateValue } from 'components/StateProvider';

import commonCss from 'styles/Common.sss';


export const RegistrationLink = () => {
    const [_, dispatch] = useStateValue();
    const onClickHandler = () => {
        const scrollbarWidth = getVerticalScrollbarWidth();
        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0){
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.backgroundSize = `calc(100% - ${scrollbarWidth}px) auto`;
        }
        dispatch({ type: 'showRegistrationOverlay' });
    };

    return (
        <button className={commonCss.btnLink} onClick={onClickHandler}>
            Зареєструватися
        </button>
    );
};
