import { configureStore } from "@reduxjs/toolkit";
import { catSlice } from "./slices/catSlice";

export default configureStore({
    reducer: {
        //slices
        cat: catSlice.reducer
    },
})