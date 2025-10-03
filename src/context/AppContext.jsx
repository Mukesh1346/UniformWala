"use client";
import { createContext, useReducer, useContext } from "react";
import { appReducer, initialState, ACTIONS } from "./Reducer";

// Create Context
const AppContext = createContext();

// Provider Component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch, ACTIONS }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook to use context in any component
export function useAppContext() {
  return useContext(AppContext);
}
