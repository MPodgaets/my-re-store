import React from "react";
import ReactDOM  from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import App from './components/app';
import ErrorBoundry from './components/error-boundry';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ErrorBoundry>
        <Router>
            <App/>
        </Router>
    </ErrorBoundry>
);
