import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import SingUp from "./views/SignUp";
import SingIn from "./views/SignIn";

const Routess: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<SingIn/>} />
        <Route path="/signup" element={<SingUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
