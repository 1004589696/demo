import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import config from "./config";

function getRouteDOM(val, origin) {
  if (val.children) {
    return val.children.map((itm) => {
      return (
        <Route
          exact
          key={val.path + itm.path}
          path={val.path + itm.path}
          render={() => {
            return (
              <val.component>
                <itm.component />
              </val.component>
            );
          }}
        />
      );
    });
  } else {
    return (
      <Route exact key={val.path} path={val.path} component={val.component} />
    );
  }
}

export default class AppRoutes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {config.map((val) => {
            return getRouteDOM(val);
          })}
        </Switch>
      </HashRouter>
    );
  }
}
