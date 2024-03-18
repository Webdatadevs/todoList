import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import HomePageHeader from "./HomePageHeader";
import { Outlet, Route, Routes } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const HomePage = () => {
    function goOut() {
        if (!localStorage.getItem(`todo-token`)) {
            location.pathname = "/login";
        }else{
            // location.pathname = "/login";
        }
    }
    goOut()
    // const toastEl = () => toast("Успешно!");

    if (localStorage.getItem("todo-token")) {
        toast.success("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }
    return (
        <>
            <HomePageHeader />
            <Sidebar />
            {<Outlet />}
        </>
    );
};

export default HomePage;
