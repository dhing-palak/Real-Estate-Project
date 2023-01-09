import React, { useState, createContext } from "react";

export const AppContext = createContext();

const StateContext = ({ children }) => {
  const [userData, setuserData] = useState({});
  const [propertyData, setPropertyData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        userData,
        setuserData,
        propertyData,
        setPropertyData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
