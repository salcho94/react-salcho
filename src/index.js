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
import Components from "./views/components/components.jsx";
import Chat from "./views/pages/chat.jsx";
import Board from "./views/pages/board.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

var hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <div id="main-wrapper">
            <HttpsRedirect>
            <Header />
                <Switch>
                    <Route path="/custom-components" component={CustomComponents} />
                    <Route path="/components" component={Components} />
                    <Route path="/chat" component={Chat} />
                    <Route path="/board" component={Board} />
                    <Route path="/" component={Main} />
                </Switch>
            <Footer />
            </HttpsRedirect>
        </div>
    </HashRouter>,
    document.getElementById("root")
);
