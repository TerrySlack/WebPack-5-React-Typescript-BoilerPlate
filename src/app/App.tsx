import React from "react";
import { Provider } from "react-redux";

import { WeatherForecastTableContainer } from "Containers/WeatherForecastTable";
import createStore from "../store";
import "./App.css";

// Create the store
const store = createStore();

// Render the app
const App = function () {
  return (
    <Provider store={store}>
      <WeatherForecastTableContainer />
    </Provider>
  );
};

export default App;
