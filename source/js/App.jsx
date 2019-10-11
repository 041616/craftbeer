import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as urls from 'utils/pages';
import { Base } from 'components/Base';
import { Nav } from 'components/Nav';
import { Main } from 'pages/Main';
import { Articles } from 'pages/Articles';


const App = () => (
    <BrowserRouter>
        <Base>
            <Nav/>
            <Switch>
                <Route exact path={urls.MAIN}>
                    <Main/>
                </Route>
                <Route exact path={urls.ARTICLES}>
                    <Articles/>
                </Route>
            </Switch>
        </Base>
    </BrowserRouter>
);


export default App;
