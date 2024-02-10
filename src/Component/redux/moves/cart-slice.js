import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart:(state, action) => {
            state.push(action.payload);
        },
        deleteFromCart:(state, action) => {
            
        },
        clear:(state, action) => {
            return []
        },

    }
})

export const {addToCart, deleteFromCart, clear} = cartSlice.actions;
export default cartSlice.reducer