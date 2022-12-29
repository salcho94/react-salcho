import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
    Route,
    Switch,
    HashRouter
} from "react-router-dom";

import './assets/scss/style.scss';

// pages for this product
import Main from "./views/main.jsx";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <Switch>
            <Route path="/custom-components" component={CustomComponents} />
            <Route path="/components" component={Components} />
            <Route path="/" component={Main} />
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);
