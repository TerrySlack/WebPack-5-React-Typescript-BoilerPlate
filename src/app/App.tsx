import React from 'react';
import { Provider } from 'react-redux';

// Pull the mock data
import createStore from '../store';
import './App.css';
import AppDataWrapper from './AppDataWrapper';

// Create the store
const store = createStore();

// Render the app
const App = () => (
  <Provider store={store}>
    <AppDataWrapper />
  </Provider>
);

export default App;
