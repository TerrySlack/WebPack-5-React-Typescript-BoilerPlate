import { combineReducers } from 'redux';

// Import Reducers
import { NavReducer } from 'Containers/Nav';
import { EarthQuakeReducer } from 'Containers/EarthQuakeTable';
import { HomeReducer } from 'Containers/Home';
import { ProfileViewReducer } from 'Containers/ProfileView';
// Combine them
export default combineReducers({
  nav: NavReducer,
  earthQuake: EarthQuakeReducer,
  home: HomeReducer,
  profile: ProfileViewReducer,
});
