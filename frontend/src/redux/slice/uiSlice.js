import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [
    { name: "Assignment", background: "bg-info", badge: "badge-info" },
    { name: "Ideas", background: "bg-success", badge: "badge-success" },
    { name: "Meetings", background: "bg-primary", badge: "badge-primary" },
    { name: "Personal", background: "bg-secondary", badge: "badge-secondary" },
    { name: "Project", background: "bg-warning", badge: "badge-warning" },
    { name: "Shopping", background: "bg-info", badge: "badge-info" },
    { name: "Study", background: "bg-error", badge: "badge-error" },
    { name: "Wishlist", background: "bg-success", badge: "badge-success" },
    { name: "Work", background: "bg-primary", badge: "badge-primary" },

    { name: "Assignment", background: "bg-info", badge: "badge-info" },
    { name: "Ideas", background: "bg-success", badge: "badge-success" },
    { name: "Meetings", background: "bg-primary", badge: "badge-primary" },
    { name: "Personal", background: "bg-secondary", badge: "badge-secondary" },
    { name: "Project", background: "bg-warning", badge: "badge-warning" },
    { name: "Shopping", background: "bg-info", badge: "badge-info" },
    { name: "Study", background: "bg-error", badge: "badge-error" },
    { name: "Wishlist", background: "bg-success", badge: "badge-success" },
    { name: "Work", background: "bg-primary", badge: "badge-primary" },
  ],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

export default uiSlice.reducer;
