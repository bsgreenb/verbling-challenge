import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'

import itemsReducer from './reducers/itemsReducer.js'
import searchStrReducer from './reducers/searchStrReducer.js'

const rootReducer = combineReducers({
  intl: intlReducer,
  items: itemsReducer,
  searchStr: searchStrReducer
})

export default rootReducer
