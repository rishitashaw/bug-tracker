import { bugAdded, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

import configureStore from "./store/configStore";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch({
  type: "error",
  payload: { message: "hello" },
});
