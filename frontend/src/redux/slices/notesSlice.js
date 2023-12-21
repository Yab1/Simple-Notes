import { createSlice } from "@reduxjs/toolkit";
import { status } from "@/constants";

const initialState = {
  dbStatus: status.IDLE,
  dbError: "",
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    dbIdle: () => initialState,
    dbStart: (state) => {
      state.dbStatus = status.LOADING;
    },
    dbSucceeded: (state, action) => {
      state.dbStatus = status.SUCCEEDED;
      state.notes = action.payload;
    },
    dbFailure: (state, action) => {
      state.dbStatus = status.FAILED;
      state.dbError = action.payload;
    },
  },
});

export const { dbIdle, dbStart, dbSucceeded, dbFailure } = notesSlice.actions;

export default notesSlice.reducer;
