import React from 'react';
import { UID } from 'utils';

import css from './Overlay.sss';


export class Overlay extends React.Component {
    constructor() {
        super();
        this.uid = UID();
        this.onKeydownHandler = this.onKeydownHandler.bind(this);
        this.onCloseHandler = this.onCloseHandler.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeydownHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydownHandler);
    }

    onKeydownHandler({ key }) {
        if (key === 'Escape') this.props.onClose();
    }

    onCloseHandler({ target, stopPropagation }) {
        if (target.id === this.uid) this.props.onClose();
    }

    render() {
        const { children, onClose: onCloseHandler } = this.props;
        return (
            <div id={this.uid} onClick={this.onCloseHandler} className={css.overlay}>
                <div className={css.overlayBody}>
                    <button
                        className={css.btnClose}
                        onClick={onCloseHandler}
                        title='закрити'
                    />
                    {children}
                </div>
            </div>
        );
    }
}
