import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editing: false,
  deleting: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleEditing: (state) => {
      state.editing = !state.editing;
    },
    toggleDeleting: (state, action) => {
      state.deleting = action.payload;
    },
  },
});

export const { toggleEditing, toggleDeleting } = uiSlice.actions;
export default uiSlice.reducer;
