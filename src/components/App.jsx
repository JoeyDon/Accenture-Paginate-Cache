import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import Home from "./home/Home";

/* Components Family Tree:

            => LoadingLinear
APP => Home => Cards => Card => CardDetail
            => Pagination
            => LoadingCircle
*/

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
