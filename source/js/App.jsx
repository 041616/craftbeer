import 'styles/Reset.sss';
import commonCss from 'styles/Common.sss';

import React from 'react';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';
import { HOST_MAP } from 'utils/constants';
import { MAIN, REGULATIONS, ARTICLES, NEWS, CONTACTS } from 'utils/pages';
import { getWindowLocationHostname } from 'utils/url';
import { StateProvider } from 'components/StateProvider';
import { Meta } from 'components/Meta';
import { Header } from 'components/Header';
import { Content } from 'components/Content';
import { Footer } from 'components/Footer';
import { RegistrationOverlay } from 'components/RegistrationOverlay';
import { Main } from 'pages/Main';
import { Regulations } from 'pages/Regulations';
import { News } from 'pages/News';
import { Articles } from 'pages/Articles';
import { Contacts } from 'pages/Contacts';
import { NotFound } from 'pages/NotFound';
import { reducer } from './reducer';
import initialState from './init';


const App = () => {
    const Router = !window ? StaticRouter : BrowserRouter ;
    const basename = HOST_MAP[getWindowLocationHostname()];
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Router basename={basename}>
                <Meta/>
                <div className={commonCss.grid}>
                    <Header/>
                    <Content>
                        <Switch>
                            <Route exact path={MAIN} component={Main}/>
                            <Route exact path={REGULATIONS} component={Regulations}/>
                            <Route exact path={NEWS} component={News}/>
                            <Route exact path={ARTICLES} component={Articles}/>
                            <Route exact path={CONTACTS} component={Contacts}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Content>
                    <Footer/>
                </div>
            </Router>
            <RegistrationOverlay/>
        </StateProvider>
    );
};


export default App;
