// We handle all mounting concerns through this top level component file,
// whereas <App /> on down is domain-specific to this app.
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-intl-redux'

import { loadLocalStorage, saveLocalStorage } from './localStorage.js'
import App from './App.js'
import createStore from './store.js'
import { getIntl } from './intl.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

const persistedState = loadLocalStorage()
let previousLocale = undefined
if (persistedState && persistedState.intl && persistedState.intl.locale) {
  previousLocale = persistedState.intl.locale
}
const initialState = Object.assign({}, persistedState, getIntl(previousLocale))
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
