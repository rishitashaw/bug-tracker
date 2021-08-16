import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combineReducer";
import logger from "./middleware/logger";

export default function () {
  return configureStore({ reducer, middleware: [logger] });
}
