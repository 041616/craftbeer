import React from 'react';
import ReactDOM from 'react-dom';
import { useStateValue } from 'components/StateProvider';
import { Overlay } from 'components/Overlay';


export const RegistrationOverlay = () => {
    const [{ registrationOverlay }, dispatch] = useStateValue();
    if (!registrationOverlay.visible) return null;
    const onClickHandler = () => {
        document.body.style.paddingRight = null;
        document.body.style.overflow = null;
        document.body.style.backgroundSize = null;
        dispatch({ type: 'hideRegistrationOverlay' });
    };
    return ReactDOM.createPortal(
        <Overlay onClose={onClickHandler}>
            Lorem ipsum dolor sit amet.
        </Overlay>,
        document.body
    );
};
