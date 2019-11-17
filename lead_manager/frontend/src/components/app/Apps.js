import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../store/configureStore";
import HomePage from "./HomePage/HomePage";
import Header from "./layouts/Header/Header";

const store = configureStore;

const Apps = ({ location }) => {
  return (
    <Provider store={store}>
      <Header />
      <Switch key={location.key}>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Provider>
  );
};

export default withRouter(Apps);
