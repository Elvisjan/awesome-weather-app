import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router"
import { history } from "./lib/routing"
import App from './App';

const Root = () => (
    <Router history={history}>
        <App />
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
