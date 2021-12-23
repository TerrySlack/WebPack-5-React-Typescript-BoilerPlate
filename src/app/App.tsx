import React from "react";
import { Provider } from "react-redux";

import "./App.scss";
import createStore from "../store";
import "./App.css";
import { AppRoutes } from "../routes";

// Create the store
const store = createStore();

// Render the app
const App = function () {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
