import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import HomePage from "./components/pages/home/HomePage";
import Register from "./components/pages/Register";
import Task from "./components/pages/home/aboutPages/Task";
import Categories from "./components/pages/home/aboutPages/Categories";
import CreatCategories from "./components/pages/home/aboutPages/CreatCategories";
import CreatTask from "./components/pages/home/aboutPages/CreatTask";

const App = () => {

    
    return (
        <>
            <Box>
                <Routes>
                    <Route path="/" element={<HomePage />}>
                        <Route path="/" element={<Task />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="creat-task" element={<CreatTask />} />
                        <Route
                            path="creat-categories"
                            element={<CreatCategories />}
                        />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Box>
        </>
    );
};

export default App;
