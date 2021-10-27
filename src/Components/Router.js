import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV_show from "../Routes/TV_show";
import { Redirect, Switch } from "react-router";
import Header from "./Header";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/TV_show"  component={TV_show} />
            <Route path="/Search"  component={Search} />
            <Redirect from="*" to="/" />
        </Switch>

    </Router>
);