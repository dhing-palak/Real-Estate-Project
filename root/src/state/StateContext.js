import React, { useState, createContext } from "react";

export const AppContext = createContext();

const StateContext = ({ children }) => {
  const [userData, setuserData] = useState({});

  return (
    <AppContext.Provider
      value={{
        userData,
        setuserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
