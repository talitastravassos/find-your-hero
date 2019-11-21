import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import Details from "./views/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Route path="/" exact component={App} />
          <Route path="/details/:heroname" exact component={Details} />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
