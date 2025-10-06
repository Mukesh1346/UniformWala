"use client";
import { createContext, useReducer, useContext, useEffect } from "react";
import { appReducer, initialState, ACTIONS } from "./Reducer";

// Create Context
const AppContext = createContext();

// Provider Component
export function AppProvider({ children }) {
  // ✅ Load from localStorage on startup
  const getStoredData = (key) => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  };

  // ✅ Initialize with saved data (if any)
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    cart: getStoredData("cart"),
    wishlist: getStoredData("wishlist"),
  });

  // ✅ Sync state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.cart, state.wishlist]);

  return (
    <AppContext.Provider value={{ state, dispatch, ACTIONS }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook to use context anywhere
export function useAppContext() {
  return useContext(AppContext);
}
