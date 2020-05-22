import initReducer from "./init/reducer";
import { createStore, combineReducers } from "redux";

const store = createStore(initReducer);

store.asyncReducers = { initReducer };

store.replaceReducer(combineReducers(store.asyncReducers));

export default store;
