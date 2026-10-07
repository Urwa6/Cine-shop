import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
// Import the cart reducer from the cartSlice.js file
import cartReducer from './cartSlice';


const persistConfig = {
    key: 'cart',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);    

export const store = configureStore({
    reducer: {
        //Tells redux that our cart states will be managed by the cartReducer
        cart: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);