import * as actions from "./store/bugs";
import configureStore from "./store/configStore";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch(actions.loadBugs());
