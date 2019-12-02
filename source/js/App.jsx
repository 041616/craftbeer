import 'styles/Reset.sss';

import React from 'react';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';
import { HOST_MAP } from 'utils/constants';
import * as pages from 'utils/pages';
import { getWindowLocationHostname } from 'utils/url';
import { StateProvider } from 'components/StateProvider';
import { Base } from 'components/Base';
import { Header } from 'components/Header';
import { Content } from 'components/Content';
import { Footer } from 'components/Footer';
import { RegistrationOverlay } from 'components/RegistrationOverlay';
import { Main } from 'pages/Main';
import { Regulations } from 'pages/Regulations';
import { NotFound } from 'pages/NotFound';
import { reducer } from './reducer';
import initialState from './init';


const App = () => {
    const Router = !window ? StaticRouter : BrowserRouter ;
    const basename = HOST_MAP[getWindowLocationHostname()];
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Router basename={basename}>
                <Base>
                    <Header/>
                    <Content>
                        <Switch>
                            <Route exact path={pages.MAIN} component={Main}/>
                            <Route exact path={pages.REGULATIONS} component={Regulations}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Content>
                    <Footer/>
                </Base>
            </Router>
            <RegistrationOverlay/>
        </StateProvider>
    );
};


export default App;
