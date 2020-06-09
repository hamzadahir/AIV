// core
import React from 'react';

// library
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import { Home, Products } from "../pages";

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
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
