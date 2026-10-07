import { configureStore } from '@reduxjs/toolkit';
// Import the cart reducer from the cartSlice.js file
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        //Tells redux that our cart states will be managed by the cartReducer
        cart: cartReducer,
    },
});