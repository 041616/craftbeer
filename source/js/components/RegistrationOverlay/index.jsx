import React from 'react';
import ReactDOM from 'react-dom';
import { useStateValue, stateContext } from 'components/StateProvider';
import { Overlay } from 'components/Overlay';
import { Spinner } from 'components/Spinner';

import css from './RegistrationOverlay.sss';


const EMAIL_FIELD_NAME = 'email';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzFyedrBtww9f4vFdqnpk4jDMIKsmtsqFSzlSVY8XNOQ6YqEass/exec';


export class RegistrationOverlay extends React.Component {
    static contextType = stateContext;

    constructor() {
        super();
        this.state = { isLoading: false };
        this.onOverlayCloseHandler = this.onOverlayCloseHandler.bind(this);
        this.onFormSubmitHandler = this.onFormSubmitHandler.bind(this);
    }

    onOverlayCloseHandler() {
        const [_, dispatch] = this.context;
        document.body.style.paddingRight = null;
        document.body.style.overflow = null;
        document.body.style.backgroundSize = null;
        dispatch({ type: 'hideRegistrationOverlay' });
    }

    onFormSubmitHandler(e) {
        this.setState({ isLoading: true });
        e.preventDefault();
        const data = JSON.stringify({
            [EMAIL_FIELD_NAME]: e.target.elements[EMAIL_FIELD_NAME].value
        });
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: data,
        }).then((response) => {
            const result = response.json();
            debugger;
            return result;
        }).then((result) => {
            debugger;
            this.setState({ isLoading: false });
        }).catch((error) => {
            debugger;
            this.setState({ isLoading: false });
        });
    }

    render() {
        const [{ registrationOverlay }, _] = this.context;
        if (!registrationOverlay.visible) return null;

        return ReactDOM.createPortal(
            <Overlay onClose={this.onOverlayCloseHandler}>
                <form
                    className={css.form}
                    onSubmit={this.onFormSubmitHandler}
                    noValidate
                >
                    <input
                        className={css.field}
                        name={EMAIL_FIELD_NAME}
                        type='email'
                        placeholder='email'
                        size='30'
                        disabled={this.state.isLoading}
                    />
                    <button
                        className={css.submit}
                        type='submit'
                        disabled={this.state.isLoading}
                    >
                        Отправить
                        {this.state.isLoading ? <Spinner/> : null}
                    </button>
                </form>
            </Overlay>,
            document.body
        );
    }
}


export const _RegistrationOverlay = () => {
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
            Введите адрес своей электронной почты
            <form
                className={css.form}
                onSubmit={this.onFormSubmitHandler}
                noValidate
            >
                <input
                    className={css.field}
                    name={EMAIL_FIELD_NAME}
                    type='email'
                    placeholder='email'
                    size='25'
                    disabled={this.state.isLoading}
                />
                <button
                    className={css.submit}
                    type='submit'
                    disabled={this.state.isLoading}
                >
                    Отправить
                    {this.state.isLoading ? <Spinner/> : null}
                </button>
            </form>
            На этот адрес будет выслана анкета, заполнив которую вы станете
            членом клуба ценителей крафтового пива
        </Overlay>,
        document.body
    );
};
