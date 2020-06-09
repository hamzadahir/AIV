// core
import React from 'react';

//library
import { HashRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

// components
import App from './components/App/App';

// assets
import './index.scss';


ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);
