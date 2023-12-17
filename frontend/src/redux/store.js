import { configureStore } from "@reduxjs/toolkit";
import { uiReducer, notesReducer } from "./slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    notes: notesReducer,
  },
});

export default store;
