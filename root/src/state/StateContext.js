import React, { useState, createContext } from "react";

export const AppContext = createContext();

const StateContext = ({ children }) => {
  const [userData, setuserData] = useState({});
  const [propertyData, setPropertyData] = useState([]);

  // const [searchData,setSearchData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        userData,
        setuserData,
        propertyData,
        setPropertyData,
        // setSearchData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
