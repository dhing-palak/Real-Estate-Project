import React, { useState, createContext} from "react";

export const AppContext = createContext();



const StateContext = ({ children }) => {
  const [userData, setuserData] = useState({});
  const [propertyData, setPropertyData] = useState([]);
  const [isLoggedin,setisLoggedin] = useState(false)

  return (
    <AppContext.Provider
      value={{
        userData,
        setuserData,
        propertyData,
        setPropertyData,
        isLoggedin,
        setisLoggedin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;