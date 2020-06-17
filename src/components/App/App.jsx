// core
import React from 'react';

// library
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

// components
import { Home, Pricing, Products, Success, Canceled } from "../pages";
import ContactForm from "../containers/Contact";

import { Footer, Header } from "../common";
import { routes } from './routes';
import configureStore from "../../redux/store/configureStore";

// assets
import styles from './App.module.scss';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className={styles.app}>
                <Header />
                <Switch>
                    <Redirect exact from='/' to={routes.home} />
                    <Route path={routes.home} component={Home} />
                    <Route path={routes.products} component={Products} />
                    <Route path={routes.pricing} component={Pricing} />
                    <Route path={routes.contact} component={ContactForm} />
                    <Route path={routes.success} component={Success} />
                    <Route path={routes.canceled} component={Canceled} />
                </Switch>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
