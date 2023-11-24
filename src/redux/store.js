import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import productSlice from "./slice/productSlice";
import cartSlice from "./slice/cartSlice";
import filterSlice from "./slice/filterSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    product: productSlice,
    cart: cartSlice,
    filter: filterSlice    
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
