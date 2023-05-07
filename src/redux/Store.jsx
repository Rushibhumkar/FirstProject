import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice';
export const Store = configureStore({
    reducer: {
        product: ProductReducer,
    },
})