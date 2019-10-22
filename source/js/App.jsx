import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as urls from 'utils/pages';
import { Content } from 'components/Content';
import { Footer } from 'components/Footer';
import { Nav } from 'components/Nav';
import { Main } from 'pages/Main';
import { Articles } from 'pages/Articles';


const App = () => (
    <BrowserRouter>
        <Nav/>
        <Content>
            <Switch>
                <Route exact path={urls.MAIN}>
                    <Main/>
                </Route>
                <Route exact path={urls.ARTICLES}>
                    <Articles/>
                </Route>
            </Switch>
        </Content>
        <Footer/>
    </BrowserRouter>
);


export default App;
