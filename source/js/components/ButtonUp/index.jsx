import React from 'react';
import { debounce } from 'utils';
import { DEBOUNCE_DELAY } from 'utils/constants';

// styles
import css from './ButtonUp.sss';


/*
    According to https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers,
    MINIMUM_DELAY is setted to 4
*/
const MINIMUM_DELAY = 4;
const TOP_INDENT = 300;
const SCROLL_SPEED = 500;


export class ButtonUp extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
            intervalId: 0,
            step: 0
        };
        this.clearDebounce = false;
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollStep = this.scrollStep.bind(this);
        this.scrollToTopHandle = this.scrollToTopHandle.bind(this);
    }

    componentDidMount() {
        this.onScrollHandle = debounce(this.handleScroll, DEBOUNCE_DELAY);
        window.addEventListener('scroll', this.onScrollHandle);
    }

    componentWillUnmount() {
        this.clearDebounce = true;
        window.removeEventListener('scroll', this.onScrollHandle);
    }

    handleScroll() {
        if (!this.clearDebounce) {
            const visibility = window.pageYOffset >= TOP_INDENT;
            this.setState({ isVisible: visibility });
        }
    }

    scrollStep() {
        const { intervalId, step } = this.state;
        if (window.pageYOffset === 0) {
            clearInterval(intervalId);
            this.setState({ visible: false, intervalId: 0, step: 0 });
        }
        window.scroll(0, window.pageYOffset - step);
    }

    scrollToTopHandle() {
        const step = MINIMUM_DELAY * window.pageYOffset / SCROLL_SPEED;
        const intervalId = setInterval(this.scrollStep, MINIMUM_DELAY);
        this.setState({ intervalId, step });
    }

    render() {
        if (!this.state.isVisible) return null;
        return (
            <button
                className={css.up}
                onClick={this.scrollToTopHandle}
                title='Вгору'
            />
        );
    }
}
