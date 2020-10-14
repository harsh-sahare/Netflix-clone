import React, { createContext, useReducer } from "react";
import reducer, { state } from "./reducer";

export const Context = createContext();

export default function DataLayer(attr) {
  return (
    <Context.Provider value={useReducer(reducer, state)}>
      {attr.children}
    </Context.Provider>
  );
}
