import {connect} from "react-redux";

import {
  addIngredient,
  addRecipeData,
  removeIngredients,
  resetIngredients,
  setEditId
} from "../actions/recipe.actions";

import Add from "../view/Add";

const getItem = (items, id) => {
  return items.find(item => item._id === id);
}

const mapStateToProps = ({recipe, user}) => {

  return {
    recipes: recipe.items,
    ingredients: recipe.ingredients ? recipe.ingredients : [],
    item: getItem(recipe.items, recipe.editId),
    editId: recipe.editId,
    isLoggedIn: user.isLoggedIn
  }
};

const mapDispatchToProps = {
  addIngredient,
  addRecipeData,
  removeIngredients,
  resetIngredients,
  setEditId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
