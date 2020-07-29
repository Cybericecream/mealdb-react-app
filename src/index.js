import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from "./search/Search";
import NotFound from "./NotFound";
import Meal from './meal/Meal';
import * as serviceWorker from './serviceWorker';

import './index.css'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Header from "./boiler/Header";
import CssBaseline from "@material-ui/core/CssBaseline";


const routing = (

    <BrowserRouter >
        <React.Fragment>
            <Header title="Your Cook Book" />
            <CssBaseline />
            <Switch>
                <Route path="/search/:search" component={Search} />
                <Route path="/meal/:id" component={Meal} />
                <Route path="/" component={App} exact />
            </Switch>

        </React.Fragment>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
