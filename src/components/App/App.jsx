// core
import React from 'react';

// library
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import { Contact, Home, Pricing, Products } from "../pages";

import { Footer, Header } from "../common";
import { routes } from './routes';

// assets
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <Switch>
                <Redirect exact from='/' to={routes.home} />
                <Route path={routes.home} component={Home} />
                <Route path={routes.products} component={Products} />
                <Route path={routes.pricing} component={Pricing} />
                <Route path={routes.contact} component={Contact} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
