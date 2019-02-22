import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/root";
import logMiddleware from "./middleware/log";
import apiMiddleware from "./middleware/api";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logMiddleware, apiMiddleware))
);

window.store = store;

export default store;
