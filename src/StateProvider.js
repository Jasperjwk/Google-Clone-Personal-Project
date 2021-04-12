import React, { createContext, useContext, useReducer } from "react";

// Prepare the data layer for what it has to come
export const StateContext = createContext();

// This is the actual data layer 
// Children is what it is wrap inside which is the App in index.js
// InitialState - is what the data layer looks like when the app is loaded
// Reducer - is something that is clever which listens to changes
export const StateProvider = ({ reducer, initialState, children }) => (
    // This is following the similiar layout as index.js
    // Whenever we see use reducer, use context, they are all react hooks
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook which allows me to pull information from data layer
export const useStateValue = () => useContext(StateContext);