import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./combineReducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

export default function () {
  return configureStore({
    reducer,
    middleware: [thunk, logger({ destination: "console" }), toast, api],
  });
}
