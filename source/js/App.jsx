import './Reset.sss';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as URLS from 'utils/pages';
import { Base } from 'components/Base';
import { Header } from 'components/Header';
import { Content } from 'components/Content';
import { Footer } from 'components/Footer';
import { Main } from 'pages/Main';
import { Articles } from 'pages/Articles';


const App = () => (
    <BrowserRouter>
        <Base>
            <Header/>
            <Content>
                <Switch>
                    <Route exact path={URLS.MAIN}>
                        <Main/>
                    </Route>
                    <Route exact path={URLS.ARTICLES}>
                        <Articles/>
                    </Route>
                </Switch>
            </Content>
            <Footer/>
        </Base>
    </BrowserRouter>
);


export default App;
