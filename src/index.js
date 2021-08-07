import store from "./store/store";
import { bugAdded, bugResolved } from "./store/bugs";

store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch(bugAdded({ description: "bug1" }));
store.dispatch(bugAdded({ description: "bug2" }));
store.dispatch(bugAdded({ description: "bug3" }));
store.dispatch(bugAdded({ description: "bug4" }));
store.dispatch(bugResolved({ bug: 1 }));

console.log(store.getState());
