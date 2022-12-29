import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Terms from "./pages/Terms";
import Privacypolicy from "./pages/Privacypolicy";
import Helpcenter from "./pages/Helpcenter";
import Footer from "./components/footer/Footer";
import Postproperty from "./components/postproperty/Postproperty";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/register" element={<Register />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/privacypolicy" element={<Privacypolicy />}></Route>
        <Route path="/helpcenter" element={<Helpcenter />}></Route>
        <Route path="/postproperty" element={<Postproperty />}></Route>
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
