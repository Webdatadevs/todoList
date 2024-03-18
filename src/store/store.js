import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import  todoTaskSlice  from "./taskSlice";

export const store = configureStore({
    reducer: {
        categories: todoSlice,
        task: todoTaskSlice,
    },
});
