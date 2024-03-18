import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        getCategories(state, action) {
            state.categories = action.payload;
        },
    },
});

export const { getCategories } = todoSlice.actions;

export default todoSlice.reducer;
