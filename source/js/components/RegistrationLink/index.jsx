import React from 'react';
import ReactDOM from 'react-dom';
import { useStateValue } from 'components/StateProvider';


export const RegistrationLink = () => {
    const [_, dispatch] = useStateValue();
    const onClickHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch({ type: 'showRegistrationOverlay' });
    };

    return (
        <button onClick={onClickHandler}>
            Зареєструватися
        </button>
    );
};
