import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    userAdded: (users, action) => {
      users.list.push(action.payload);
    },
    userResolved: (users, action) => {
      const index = users.list.findIndex(
        (user) => user.id === action.payload.id
      );
      users.list[index].resolved = true;
    },
    userRemoved: (users, action) => {
      return users.list.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { userAdded, userResolved, userRemoved } = slice.actions;
export default slice.reducer;
