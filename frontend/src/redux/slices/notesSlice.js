import { createSlice } from "@reduxjs/toolkit";
import { status } from "@/constants";

const initialState = {
  dbStatus: status.IDLE,
  dbError: "",
  notes: [],
  tags: {},
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    dbIdle: () => initialState,
    dbStart: (state) => {
      state.dbStatus = status.LOADING;
    },
    dbFailure: (state, action) => {
      state.dbStatus = status.FAILED;
      state.dbError = action.payload;
    },
    setNotes: (state, action) => {
      state.dbStatus = status.SUCCEEDED;
      state.notes = action.payload;
    },
    addNote: (state, action) => {
      state.dbStatus = status.SUCCEEDED;
      state.notes = [...state.notes, ...action.payload];
    },
    noteDeleted: (state, action) => {
      state.notes = state.notes.filter((note) => note._id !== action.payload);
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export const {
  dbIdle,
  dbStart,
  dbFailure,
  setNotes,
  addNote,
  noteDeleted,
  setTags,
} = notesSlice.actions;

export default notesSlice.reducer;
