import {connect} from "react-redux";
import {
  addAuthUserData
} from "../actions/user.actions";
import {
  addRecipeData,
  setRecipeItemId,
  setDeleteId,
  removeDeleteId,
  setEditId,
  resetIngredients
} from "../actions/recipe.actions";

import RecipeList from "../view/RecipeList";

const mapStateToProps = ({user, recipe}) => {
  return {
    recipes: recipe.items,
    isLoggedIn: user.isLoggedIn,
    removeId: recipe.removeId
  }
};

const mapDispatchToProps = {
  addAuthUserData,
  addRecipeData,
  setRecipeItemId,
  setDeleteId,
  removeDeleteId,
  setEditId,
  resetIngredients
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);
