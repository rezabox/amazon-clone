import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import productSlice from "./slice/productSlice";


const rootReducer = combineReducers({
    auth: authSlice,
    product: productSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
