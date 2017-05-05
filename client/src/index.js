import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App.js';
import createStore from './store.js';

const storeInstance = createStore();

// Handle all mounting concerns through here,
// whereas <App /> on down is domain-specific to this app.
ReactDOM.render(
  <Provider store={ storeInstance }><App /></Provider>,
  document.getElementById('root')
);
