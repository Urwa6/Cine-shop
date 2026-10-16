import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // Define reducers for adding, removing, and clearing items in the cart
    reducers: {
        setCart: (state, action) => {
        state.items = action.payload;
         },
        addToCart: (state, action) => {
         const existingItem = state.items.find((item) => 
            item.id === action.payload.id);

         if (existingItem) {
         existingItem.quantity += 1;
         } else {
         state.items.push({ ...action.payload, quantity: 1 });
         
         }

        },

        increaseQuantity: (state, action) => {
        const item = state.items.find(
        (item) => item.id === action.payload
         );

        if (item) {
        item.quantity += 1;
       }
      },

        decreaseQuantity: (state, action) => {
        const item = state.items.find(
        (item) => item.id === action.payload
        );

        if (item && item.quantity > 1) {item.quantity -= 1;
        }
       },

        removeFromCart: (state, action) => {
        state.items = state.items.filter(
        (item) => item.id !== action.payload
         );
       },
       // Remove old T-shirts and figures
       removeOldMerchandise: (state) => {
       state.items = state.items.filter(
       (item) =>
        !item.id.startsWith('merch-figure-') &&
        !item.id.startsWith('merch-shirt-')
         ); 
       },
    },
});
        

export const { setCart,addToCart, increaseQuantity,decreaseQuantity, removeFromCart, 
    removeOldMerchandise,} = cartSlice.actions;

export default cartSlice.reducer;