import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combineReducer";

export default function () {
  return configureStore({ reducer });
}
