import React, { createContext, useState } from "react";
import initialState from "../data/initialState";

const AppContext = createContext([{}, (p) => {}]);

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
