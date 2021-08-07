// action types
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

// actions

export const bugAdded = (description) => ({
  types: BUG_ADDED,
  payload: {
    description,
  },
});

export const bugRemoved = (id) => ({
  types: BUG_REMOVED,
  payload: {
    id,
  },
});

// reducer

let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  }
  return state;
}
