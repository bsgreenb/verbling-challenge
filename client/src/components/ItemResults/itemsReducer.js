//TODO: import actions.  determine where they and their constants should go..
import itemReducer from './Item/itemReducer.js'
import { OPEN_ALL_ITEMS, CLOSE_ALL_ITEMS, TOGGLE_ALL_ITEMS, ADD_ITEM } from '../../actions.js'
import { TOGGLE_ITEM, toggleItem, openItem, closeItem } from './Item/actions.js'

//TODO: remove this once I have it dynamically initialized
const startingItems = [
  {
    id: 1,
    title: "Lipsum ipsum dolor sit amet, consectetur",
    body: "elit, sed do eiusmod tempor incidundt ut labore",
    open: true,
  },
  {
    id: 2,
    title: "Lipsum ipsum dolor sit amet, consectetur",
    body: "elit, sed do eiusmod tempor incidundt ut labore elit, sed do eiusmod tempor incidundt ut labore",
    open: true,
  },
  {
    id: 3,
    title: "Lipsum ipsum dolor sit amet, consectetur",
    body: "elit, sed do eiusmod tempor incidundt ut labore elit, sed do eiusmod tempor incidundt ut labore",
    open: true,
  },
];

//QSTN: do I need to percolate TOGGLE_TODO downwards or would it reach their regardless?
const itemsReducer = (state = startingItems, action) => {
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
      const nextId = state.length ? state[state.length - 1].id + 1 : 1;
      return [...state, {id: nextId, title: action.title, body: action.body, open: true}]
    default:
      return state;
  }
}

export default itemsReducer;
