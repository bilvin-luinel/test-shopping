import { Route, Routes } from "react-router-dom";
import './App.css';
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Product from "./page/Product";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";

function App() {

  const [authenticate, setAuthenticate] = useState(false);


  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
