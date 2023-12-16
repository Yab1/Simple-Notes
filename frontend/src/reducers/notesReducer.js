// Import for reducer action types
import { ACTION_TYPES } from "../variables/ACTION_TYPES";

export const actionReducer = (notes, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_NOTE:
      return [...notes, action.payload];
    case ACTION_TYPES.UPDATE_NOTES:
      return [...action.payload];
    default:
      return notes;
  }
};
