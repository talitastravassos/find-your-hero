import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Route path="/" exact component={App} />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
