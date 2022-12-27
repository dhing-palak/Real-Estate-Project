import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/register" element={<Register />}></Route>
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route path="/user/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
