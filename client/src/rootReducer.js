import { combineReducers } from 'redux';

import itemsReducer from './components/ItemResults/itemsReducer.js'

const rootReducer = combineReducers({
  items: itemsReducer
});

export default rootReducer;
