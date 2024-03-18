import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import HomePageHeader from "./HomePageHeader";
import { Outlet, Route, Routes } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const HomePage = () => {
    function goOut() {
        if (!localStorage.getItem(`todo-token`)) {
            location.pathname = "/login";
        }
    }
    goOut()
    return (
        <>
            <HomePageHeader />
            <Sidebar />
            {<Outlet />}
        </>
    );
};

export default HomePage;
