import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, intlReducer } from 'react-intl-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import { loadLocalStorage, saveLocalStorage } from './localStorage.js'
import App from './App.js'
import createStore from './store.js'

// We handle all mounting concerns through this top level component file,
// whereas <App /> on down is domain-specific to this app.

const persistedState = loadLocalStorage()
const store = createStore(persistedState)

// Subscribe to changes in the store so we can save them to local storage.
store.subscribe(() => {
  // We only want to persist changes to items, not searchStr.
  saveLocalStorage({ items: store.getState().items })
})

// See https://github.com/yahoo/react-intl/wiki for how translations work.
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
