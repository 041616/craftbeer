import React from 'react';
import ReactDOM from 'react-dom';
import { useStateValue } from 'components/StateProvider';


export const RegistrationOverlay = () => {
    const [{ registrationOverlay }, dispatch] = useStateValue();
    if (!registrationOverlay.visible) return null;
    const onClickHandler = () => {
        document.body.style.overflow = null;
        dispatch({ type: 'hideRegistrationOverlay' });
    };
    const style = {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        textAlign: 'center',
        fontSize: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
    };
    return ReactDOM.createPortal(
        <div
            onClick={onClickHandler}
            style={style}
        >RegistrationOverlay</div>,
        document.body
    );
};
