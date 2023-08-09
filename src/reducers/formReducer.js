// Import for reducer action types
import { ACTION_TYPES } from "../variables/ACTION_TYPES";

export const INITIAL_STATE = {
  title: "",
  details: "",
  category: "todo",
  titleError: false,
  detailError: false,
};
export const formReducer = (form, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TITLE:
      return { ...form, title: action.payload };
    case ACTION_TYPES.SET_DETAILS:
      return { ...form, details: action.payload };
    case ACTION_TYPES.SET_CATEGORY:
      return { ...form, category: action.payload };
    case ACTION_TYPES.SET_TITLE_ERROR:
      return { ...form, titleError: action.payload };
    case ACTION_TYPES.SET_DETAIL_ERROR:
      return { ...form, detailError: action.payload };
    default:
      return form;
  }
};
