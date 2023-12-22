import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editing: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleEditing: (state) => {
      state.editing = !state.editing;
    },
  },
});

export const { toggleEditing } = uiSlice.actions;
export default uiSlice.reducer;
