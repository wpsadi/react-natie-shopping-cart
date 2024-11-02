import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice.js";

export const store = configureStore({
    reducer:{
        // Add your reducers here    
        cart:cartSlice
    },
    devTools:true
})
