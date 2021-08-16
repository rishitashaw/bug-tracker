import { bugAdded, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/projects";
import configureStore from "./store/configStore";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch(projectAdded({ name: "project1" }));
store.dispatch(bugAdded({ description: "bug1" }));
store.dispatch(bugAdded({ description: "bug2" }));
store.dispatch(bugAdded({ description: "bug3" }));
store.dispatch(bugAdded({ description: "bug4" }));
store.dispatch(bugResolved({ id: 1 }));

console.log(store.getState());
