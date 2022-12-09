import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/register" element={<Register />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
