import { combineReducers } from "redux";
import recipesReducer from "./recipes";
import ingredientsReducer from "./ingredients";
import message from "./authentification";
const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  message
});

export default rootReducer;
