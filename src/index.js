import { bugAdded, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
import * as actions from "./store/api";
import configureStore from "./store/configStore";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    onSuccess: "bugsRecieved",
  })
);
