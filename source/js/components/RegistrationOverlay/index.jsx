import React from 'react';
import ReactDOM from 'react-dom';
import { useStateValue } from 'components/StateProvider';
import { Overlay } from 'components/Overlay';


export const RegistrationOverlay = () => {
    const [{ registrationOverlay }, dispatch] = useStateValue();
    if (!registrationOverlay.visible) return null;
    const onClickHandler = () => {
        document.body.style.overflow = null;
        dispatch({ type: 'hideRegistrationOverlay' });
    };
    return ReactDOM.createPortal(
        <Overlay onClose={onClickHandler}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Overlay>,
        document.body
    );
};
