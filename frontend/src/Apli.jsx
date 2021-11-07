
import React from "react";
import Principal from "./pages/Principal";
import App from "./pages/App";
import Login from "./pages/Login";
import {BrowserRouter,Routes,Route,} from "react-router-dom";

function Apli() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Principal />} />
        <Route path="productos/*" element={<App />} />
        <Route path="login/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}



export default Apli;
