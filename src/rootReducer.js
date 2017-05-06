import { combineReducers } from 'redux'

import itemsReducer from './reducers/itemsReducer.js'
import searchStrReducer from './reducers/searchStrReducer.js'

const rootReducer = combineReducers({
  items: itemsReducer,
  searchStr: searchStrReducer
})

export default rootReducer
