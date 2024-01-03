/* eslint-disable react/prop-types */
import { useContext, useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";

const AppContext = createContext();

const defaultValue = {
  quote: "",
  worldTime: {},
  location: "",
  timeStatus: "",
  timeNow: "",
  timeZone: "",
};

export const useGlobalContext = () => useContext(AppContext);

export default function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
