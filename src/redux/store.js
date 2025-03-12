import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./rootSlice";
export const store = configureStore({
    reducer:{
        root: reducers
    }

    
})