import { createStore } from 'redux';

// Normally use this if there were multiple reducers.
import reducers from './combinedReducers';

// const setupStore = (reducers: any, data: any) => createStore(reducers, data);
const setupStore = () => createStore(reducers);

export default setupStore;
