import { FETCH_RECIPES, AUTH_USER } from "../constants/actionTypes";
import { setRecipes } from "../actions/recipes";
import { setIngredients } from "../actions/ingredients";

const URL = "https://s3.amazonaws.com/500tech-shared/db.json";

function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(callback)
    .catch(err => console.log(`Error fetching recipes: ${err}`));
}

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === FETCH_RECIPES) {
    fetchData(URL, data => {
      dispatch(setRecipes(data.recipes));
      dispatch(setIngredients(data.ingredients));
    });
  }

  if (action.type === AUTH_USER) {
    console.log("ok");
  }

  next(action);
};

export default apiMiddleware;
