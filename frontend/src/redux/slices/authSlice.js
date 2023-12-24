import { createSlice } from "@reduxjs/toolkit";
import { status } from "@/constants";

const initialState = {
  authStatus: status.IDLE,
  authError: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authIdle: () => initialState,
    authStart: (state) => {
      state.authStatus = status.LOADING;
    },
    authSucceeded: (state, action) => {
      state.authStatus = status.SUCCEEDED;
      state.user = action.payload.json;
      state.authError = null;
    },
    authFailure: (state, action) => {
      state.authStatus = status.FAILED;
      state.authError = action.payload;
    },
  },
});

export const { authIdle, authStart, authSucceeded, authFailure } =
  authSlice.actions;
export default authSlice.reducer;
