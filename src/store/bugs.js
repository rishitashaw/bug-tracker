import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loaded: false,
    lastFetch: null,
  },

  reducers: {
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      return bugs.list.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
export default slice.reducer;

// Selector
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs.list,
  (list) => list.filter((bug) => !bug.resolved)
);
