export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const OPEN_ITEM = 'OPEN_ITEM';
export const CLOSE_ITEM = 'CLOSE_ITEM';

export const toggleItem = (id) => (
  {
    type: TOGGLE_ITEM,
    id,
  }
);

export const openItem = (id) => (
  {
    type: OPEN_ITEM,
    id,
  }
)

export const closeItem = (id) => (
  {
    type: CLOSE_ITEM,
    id,
  }
)
