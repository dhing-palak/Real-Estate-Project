import "./App.css";
import React, { createContext, useReducer } from "react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Terms from "./pages/Terms";
import Privacypolicy from "./pages/Privacypolicy";
import Helpcenter from "./pages/Helpcenter";
import Footer from "./components/footer/Footer";
import Postproperty from "./components/postproperty/Postproperty";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar/Header";

import { initialState,reducer } from "./reducer/UseReducer";

//1:contextApi
export const UserContext=createContext();

const Routing= ()=>{
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/login" element={<Login />}></Route>
      <Route path="/user/register" element={<Register />}></Route>
      <Route path="/terms" element={<Terms />}></Route>
      <Route path="/privacypolicy" element={<Privacypolicy />}></Route>
      <Route path="/helpcenter" element={<Helpcenter />}></Route>
      <Route path="/postproperty" element={<Postproperty />}></Route>
      <Route path="/user/profile" element={<Profile />}></Route>
      <Route path="/user/logout" element={<Logout />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
const App= () => {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <div className="Header">
          <Navbar />
        </div>
        <div>
          <Routing/>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}
function PageNotFound() {
  return (
    <div className="pagenot">
      <h2>404 Page not found</h2>
    </div>
  );
}

export default App;