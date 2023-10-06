import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";



const rootReducer = combineReducers({
    auth: authSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
