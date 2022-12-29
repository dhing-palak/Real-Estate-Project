import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar/Header";
// import About from "./pages/about/about";
// import City from "./api/location/city";s



function App() {
  return (
    
    <>    
      <div className="Header">
        <Navbar/>
      </div>
      <div >
    
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/login" element={<Login />}></Route>
          <Route path="/user/register" element={<Register />}></Route>
          <Route path="/user/profile" element={<Profile />}></Route>
          <Route path="/user/logout" element={<Logout />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}
function PageNotFound() {
  return (
    <div className="App">
      <h2>404 Page not found</h2>
    </div>
  );
}


export default App;