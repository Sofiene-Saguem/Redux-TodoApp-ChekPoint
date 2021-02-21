import { createStore } from "redux";
import todoReducer from "./reducer/todoReducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(todoReducer, devtools);

export default store;
