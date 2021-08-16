import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
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

const {
  bugsReceived,
  bugAssignedToUser,
  bugAdded,
  bugResolved,
  bugRemoved,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Selector
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs.list,
  (list) => list.filter((bug) => !bug.resolved)
);
