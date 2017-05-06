export const OPEN_ALL_ITEMS = 'OPEN_ALL_ITEMS';
export const CLOSE_ALL_ITEMS = 'CLOSE_ALL_ITEMS';
export const TOGGLE_ALL_ITEMS = 'TOGGLE_ALL_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const SEARCH_ITEMS = 'SEARCH_ITEMS';

// Note that in the README instructions it says these actions
// "should open/close/toggle *all items*"", not just the visible ones.

export const openAllItems = () => (
  {
    type: OPEN_ALL_ITEMS
  }
)

export const closeAllItems = () => (
  {
    type: CLOSE_ALL_ITEMS
  }
)

export const toggleAllItems = () => (
  {
    type: TOGGLE_ALL_ITEMS
  }
)

export const addItem = (title, body) => (
  {
    type: ADD_ITEM,
    title,
    body,
  }
)

export const searchItems = (searchStr) => (
  {
    type: SEARCH_ITEMS,
    searchStr
  }
)
