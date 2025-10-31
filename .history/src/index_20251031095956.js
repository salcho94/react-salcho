/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import HttpsRedirect from 'react-https-redirect';
import {
    Route,
    Switch,
    HashRouter
} from "react-router-dom";

import './assets/scss/style.scss';

// pages for this product
import Main from "./views/main.jsx";

import Chat from "./views/pages/chat.jsx";
import Portfolio from "./views/pages/portPolio.jsx";
import PhoneNumber from "./views/pages/phoneNumber.jsx";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Components from "./views/components/css/components";
import Inquiry from "./views/pages/inquiry";

let hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <div id="main-wrapper">
            <HttpsRedirect>
            <Header />
                <Switch>
                    <Route path="/contact" component={Inquiry} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/phoneNumber" component={PhoneNumber} />
                    <Route path="/" component={Main} />
                </Switch>
            <Footer />
            </HttpsRedirect>
        </div>
    </HashRouter>,
    document.getElementById("root")
);
