import React, { createContext, useState } from "react";

const AppContext = createContext([{}, (p) => {}]);

const initialState = {
  expression: "",
};

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
