import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import configStore from "./state";
import routers from "./routers";

import "./style/main.sass";

const store = configStore({});

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routers.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
