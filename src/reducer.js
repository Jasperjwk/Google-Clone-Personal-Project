// This is what the data layer looks like
export const initialState = {
    term: null,
  };
  
// Whenever i want to change the data layer, i must dispatch an action
  export const actionTypes = {
      SET_SEARCH_TERM: "SET_SEARCH_TERM",
  }
  
  // State is how it currently looks like
  // Action is what i manipulate what the data layer looks like
  // For example: set the item that we are currently playing
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      // When you receive this action, you basically want to return 
      case actionTypes.SET_SEARCH_TERM:
        return {
          // Keep whatever it is in the current state 
          // Need to have ...state otherwise it will overwrite the state
          ...state,
          // Update the user with whatever is inside the action
          term: action.term,
        };
  
      default:
        // nothing changes so it does not break my app
        return state;
    }
  };
  
  export default reducer;