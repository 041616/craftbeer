import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as pages from 'utils/pages';
import { UID } from 'utils';

import css from './Nav.sss';


const MENU = [
    { id: UID(), title: 'Головна', url: pages.MAIN },
    { id: UID(), title: 'Статут', url: pages.REGULATIONS },
    { id: UID(), title: 'Новини', url: pages.NEWS },
    { id: UID(), title: 'Статті', url: pages.ARTICLES },
    { id: UID(), title: 'Контакти', url: pages.CONTACTS },
];


class Navigation extends React.Component {
    constructor() {
        super();
        this.state = { isNavActive: false };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onOrientationChangeHandler = this.onOrientationChangeHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('orientationchange', this.onOrientationChangeHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('orientationchange', this.onOrientationChangeHandler);
    }

    onClickHandler() {
        const { isNavActive } = this.state;
        this.setState({ isNavActive: !isNavActive });
        document.body.style.overflow = isNavActive ? null : 'hidden';
    }

    onOrientationChangeHandler() {
        if (this.state.isNavActive) {
            this.setState({ isNavActive: false });
            document.body.style.overflow = null;
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
                        onClick={this.onOrientationChangeHandler}
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
