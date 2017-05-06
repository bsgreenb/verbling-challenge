import { SEARCH_ITEMS } from '../actions/itemsActions.js';

const searchStrReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_ITEMS:
      return action.searchStr;
    default:
      return state;
  }
}

export default searchStrReducer;
