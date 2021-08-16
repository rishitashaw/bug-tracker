import { combineReducers } from "redux";
import projects from "./projects";
import bugs from "./bugs";
import users from "./users";

export default combineReducers({
  projects: projects,
  bugs: bugs,
  users: users,
});
