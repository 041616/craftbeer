import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as URLS from 'utils/pages';

import css from './Nav.sss';


const MENU = [
    { title: 'Головна', url: URLS.MAIN },
    { title: 'Статут', url: URLS.REGULATIONS },
    { title: 'Діяльність', url: URLS.ACTIVITY },
    { title: 'Новини', url: URLS.NEWS },
    { title: 'Статті', url: URLS.ARTICLES },
    { title: 'Контакти', url: URLS.CONTACTS },
];


class Navigation extends React.Component {
    constructor() {
        super();
        this.state = { isNavActive: false };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onWindowResizeHandler = this.onWindowResizeHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResizeHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResizeHandler);
    }

    onClickHandler() {
        this.setState({ isNavActive: !this.state.isNavActive });
    }

    onWindowResizeHandler() {
        if (this.state.isNavActive) {
            this.setState({ isNavActive: false });
        }
    }

    render() {
        const { location = {} } = this.props;
        const navClassName = this.state.isNavActive ? css.navActive : css.nav;
        const items = MENU.map(({ title, url }) => {
            const linkClassName = url === location.pathname ? css.linkActive : css.link;
            return (
                <li className={css.item}>
                    <Link
                        className={linkClassName}
                        onClick={this.onWindowResizeHandler}
                        to={url}
                    >{title}</Link>
                </li>
            );
        });

        return (
            <nav className={navClassName}>
                <button className={css.btnNav} onClick={this.onClickHandler}/>
                <ul className={css.list}>{items}</ul>
            </nav>
        );
    }
}


export const Nav = withRouter(Navigation);
