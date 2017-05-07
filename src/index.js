import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-intl-redux'
import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import esLocaleData from 'react-intl/locale-data/es'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import { loadLocalStorage, saveLocalStorage } from './localStorage.js'
import App from './App.js'
import createStore from './store.js'

import locales from './locales/'

const persistedState = loadLocalStorage()

const DEFAULT_LOCALE = 'es'
addLocaleData([...enLocaleData, ...esLocaleData]);
let locale = DEFAULT_LOCALE
if (persistedState && persistedState.intl && persistedState.intl.locale) {
    locale = persistedState.intl.locale
}

const initialState = Object.assign({}, persistedState, {
  intl: {
    locale: locale,
    defaultLocale: DEFAULT_LOCALE,
    messages: locales[locale]['messages']
  }
})

// We handle all mounting concerns through this top level component file,
// whereas <App /> on down is domain-specific to this app.

const store = createStore(initialState)

// Subscribe to changes in the store so we can save them to local storage.
store.subscribe(() => {
  // We don't want to persist searchStr
  const { items, intl } = store.getState()
  saveLocalStorage({ items, intl })
})

// See https://github.com/yahoo/react-intl/wiki for how translations work.
ReactDOM.render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
)
