import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Support from "../pages/Support";
import Login from "../auth/Login";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default Main;