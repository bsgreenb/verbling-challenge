import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'

import itemsReducer from './reducers/itemsReducer.js'
import searchStrReducer from './reducers/searchStrReducer.js'

const rootReducer = combineReducers({
  locale: intlReducer.locale,
  items: itemsReducer,
  searchStr: searchStrReducer
})

export default rootReducer
