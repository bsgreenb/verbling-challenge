//TODO: import actions.  determine where they and their constants should go..
import itemReducer from './itemReducer.js'
import { OPEN_ALL_ITEMS, CLOSE_ALL_ITEMS, TOGGLE_ALL_ITEMS, ADD_ITEM } from '../actions/itemsActions.js'
import { TOGGLE_ITEM, toggleItem, openItem, closeItem } from '../actions/itemActions.js'

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_ITEM:
      return state.map(item => itemReducer(item, action))
    case OPEN_ALL_ITEMS:
      return state.map(item => itemReducer(item, openItem(item.id)))
    case CLOSE_ALL_ITEMS:
      return state.map(item => itemReducer(item, closeItem(item.id)))
    case TOGGLE_ALL_ITEMS:
      // I'm a fan of how it always goes through the same toggleItem logic
      return state.map(item => itemReducer(item, toggleItem(item.id)))
    case ADD_ITEM:
      // Note: this ID approach only works because we don't have deletes.
      // You'll want to use node-uuid for a unique ID if you want to allow deletes without overlap.
      const nextId = state.length ? state[state.length - 1].id + 1 : 1;
      return [...state, {id: nextId, title: action.title, body: action.body, open: true}]
    default:
      return state;
  }
}

// Co-locating selector function with reducers per https://twitter.com/dan_abramov/status/664581975764766721?lang=en
// Note that if our state tree were to expand, we might consider using the reseelect library, so that visibleItems would
// not be updated by unrelated state changes.  In our case, it actually makes sense for visibleItems to update on all
// other state changes.
export const getVisibleItems = (items, searchStr) => {
  if (searchStr.length === 0) {
    return items;
  } else {
    return items.filter(item => (item.title.indexOf(searchStr) !== -1) || item.body.indexOf(searchStr) !== -1)
  }
}


export default itemsReducer;
