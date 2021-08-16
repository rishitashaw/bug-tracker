import { combineReducers } from "redux";
import projects from "./projects";
import bugs from "./bugs";

export default combineReducers({
  projects: projects,
  bugs: bugs,
});
