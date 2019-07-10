import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./Home.jsx";

export default () =>
  <Provider store={store}>
    <Home />
  </Provider>;
