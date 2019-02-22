import {
  ADD_RECIPE,
  FETCH_RECIPES,
  SET_RECIPES
} from "../constants/actionTypes";

export const addRecipe = (name, val) => ({
  type: ADD_RECIPE,
  name,
  val
});

export const fetchRecipes = () => ({
  type: FETCH_RECIPES
});

export const setRecipes = recipes => ({
  type: SET_RECIPES,
  recipes
});
