import { createStore } from 'redux';

import rootReducer from  './rootReducer.js';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default (initialState) => (
  createStore(rootReducer,
    initialState,
    reduxDevTools)
)
