import { combineReducers } from "redux";

// Import Reducers
import { HomeReducer } from "Containers/Home";
// Combine them
export default combineReducers({
  home: HomeReducer,
});
