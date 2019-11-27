import 'styles/Reset.sss';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as pages from 'utils/pages';
import { Base } from 'components/Base';
import { Header } from 'components/Header';
import { Content } from 'components/Content';
import { Footer } from 'components/Footer';
import { Main } from 'pages/Main';
import { Articles } from 'pages/Articles';
import { NotFound } from 'pages/NotFound';


const App = () => {
    console.log('-------------------------------------------');
    console.log(process.env.PUBLIC_URL);
    console.log('-------------------------------------------');
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};


export default App;
