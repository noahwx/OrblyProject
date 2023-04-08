import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Messages from "../pages/Messages";
import Account from "../auth/Account";
import Notifications from "../pages/Notifications";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/account" element={<Account />} />
        </Routes>
    );
}

export default Main;