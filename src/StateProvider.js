import React, { createContext, useContext, useReducer } from "react";
//preparing data layter
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//hook which allow us to ull information from the data layer
export const useStateValue = () => useContext(StateContext);
