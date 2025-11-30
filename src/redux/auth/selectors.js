import { createSelector } from "@reduxjs/toolkit";

export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectUser = (state) => state.auth.user;
export const selectIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserName = (state) => state.auth.user.name;

export const selectUserNameAndFirstLetter = createSelector(
  [selectUserName],
  (name) => ({
    name,
    letter: name ? name[0] : "",
  })
);
