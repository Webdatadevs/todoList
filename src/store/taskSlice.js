import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [],
};

export const todoTaskSlice = createSlice({
    name: "todoTask",
    initialState,
    reducers: {
        getTask(state, action) {
            state.task = action.payload;
        },
    },
});

export const { getTask } = todoTaskSlice.actions;

export default todoTaskSlice.reducer;
