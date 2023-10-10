import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isLoggedIn: false,
   email: null,
   userName: null,
   userID: null,
   userImage:null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            const { email, userName, userID, userImage } = action.payload;
            state.isLoggedIn = true;
            state.email = email;
            state.userName = userName;
            state.userID = userID;
            state.userImage = userImage;
        },
        REMOVE_ACTIVE_USER(state, action) {
          state.isLoggedIn = false;
          state.email = null;
          state.userName = null;
          state.userID = null;
          state.userImage = null
        },
    },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.userName;
export const selectUserID = (state) => state.auth.userID;
export const selectUserImage = (state) => state.auth.userImage

export default authSlice.reducer;