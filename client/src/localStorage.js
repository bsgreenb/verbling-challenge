// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
// This follows above Egghead lesson which goes through how local storage works with React.
export const loadLocalStorage = () => {
  // Handles situation where browser does not allow us to use local storage.
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    console.error("Could not load local storage");
    return undefined;
  }
}

// Note: you might consider throttling this with lodash throttle() if the app
// got more dynamic to the point where this became expensive
export const saveLocalStorage = (state) => {
  // Ensure that we have the right to write
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error("Could not save to local storage");
  }
}
