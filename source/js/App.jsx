import 'styles/Reset.sss';

import React from 'react';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';
import { HOST_MAP } from 'utils/constants';
import * as pages from 'utils/pages';
import { getWindowLocationHostname } from 'utils/url';
import { Base } from 'components/Base';
import { Header } from 'components/Header';
import { Content } from 'components/Content';
import { Footer } from 'components/Footer';
import { Main } from 'pages/Main';
import { Articles } from 'pages/Articles';
import { NotFound } from 'pages/NotFound';


const App = () => {
    const Router = !window ? StaticRouter : BrowserRouter ;
    const basename = HOST_MAP[getWindowLocationHostname()];
    return (
        <Router basename={basename}>
            <Base>
                <Header/>
                <Content>
                    <Switch>
                        <Route exact path={pages.MAIN} component={Main}/>
                        <Route exact path={pages.ARTICLES} component={Articles}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Content>
                <Footer/>
            </Base>
        </Router>
    );
};


export default App;
