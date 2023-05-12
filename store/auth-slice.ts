/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isAuth: false,
   user: {},
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login(state, action) {
         state.isAuth = true;
         const { user } = action.payload;
         state.user = user;
      },
      logout(state) {
         state = initialState;
      },
   },
});

export const authActions = authSlice.actions;
export default authSlice;
