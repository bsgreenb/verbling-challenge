import { OPEN_ITEM, CLOSE_ITEM, TOGGLE_ITEM } from '../actions/itemActions.js'

const itemReducer = (state={}, action) => {
  if (state.id === action.id) {
    switch (action.type) {
      case TOGGLE_ITEM:
        return {
          ...state,
          open: !state.open,
        };
      case OPEN_ITEM:
        return {
          ...state,
          open: true,
        };
      case CLOSE_ITEM:
        return {
          ...state,
          open: false,
        }
      default:
        return state;
    }
  } else {
    return state;
  }
};

export default itemReducer;
