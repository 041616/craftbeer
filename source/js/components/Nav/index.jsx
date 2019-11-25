import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as URLS from 'utils/pages';
import { UID } from 'utils';

import css from './Nav.sss';


const MENU = [
    { id: UID(), title: 'Головна', url: URLS.MAIN },
    { id: UID(), title: 'Статут', url: URLS.REGULATIONS },
    { id: UID(), title: 'Діяльність', url: URLS.ACTIVITY },
    { id: UID(), title: 'Новини', url: URLS.NEWS },
    { id: UID(), title: 'Статті', url: URLS.ARTICLES },
    { id: UID(), title: 'Контакти', url: URLS.CONTACTS },
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
        const items = MENU.map(({ id, title, url }) => {
            const linkClassName = url === location.pathname ? css.linkActive : css.link;
            return (
                <li className={css.item} key={id}>
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
