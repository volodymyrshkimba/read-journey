import { createSlice } from "@reduxjs/toolkit";

import { signup, signin, current } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isSignedIn: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isSignedIn = true;
        state.isLoading = false;
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isSignedIn = true;
        state.isLoading = false;
      })
      .addCase(signin.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(current.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isSignedIn = true;
        state.isLoading = false;
      })
      .addCase(current.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
