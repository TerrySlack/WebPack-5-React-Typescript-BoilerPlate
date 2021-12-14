import React, { useEffect } from "react";

import { WeatherForecastTable } from "Components/WeatherForecastTable";
import { createSelector } from "reselect";
import { useDispatch } from "react-redux";
import { getWeatherData } from "./actions";

const WeatherForecastTableContainer = function () {
  /*
    Pull data from Redux.  Look at memoized selectors.
  */

  /*
    I know this seems convoluted, but you need a method that extracts state
    and one that then returns state.  Usually you do something to it.
    In this case, I'll just return state and then the output method will return the weatherForecast array
    But the key is, we're  using reselect, with createSelector, to memoize your selector.
    This will prevent unnecessary re-renders.
  */
  const dispatch = useDispatch();
  const forecasts = createSelector(
    (state: any) => state,
    ({ weatherForecast }) => weatherForecast
  );

  useEffect(() => {
    // Lets fetch the data.  Look at getWeatherData.  It will show you how the store gets updated.
    dispatch(getWeatherData());
  }, []);
  return <WeatherForecastTable forecasts={forecasts} />;
};
export { WeatherForecastTableContainer };
