import { createStore } from "redux";
import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";
import reducer from "./reducer";

const store = createStore(reducer, devToolsEnhancer({ trace: true }));

export default store;
