export const ADD_ROOT_DATA = "recipe:addRecipeData";
export const SET_RECIPE_ITEM_ID = "recipe:setRecipeItemId";
export const ADD_INGREDIENT = "recipe:addIngredient";
export const REMOVE_INGREDIENTS = "recipe:removeIngredients";
export const RESET_INGREDIENTS = "recipe:resetIngredients";
export const SET_RECIPE_DELETE_ID = "recipe:setDeleteId";
export const REMOVE_RECIPE_DELETE_ID = "recipe:removeDeleteId";
export const SET_RECIPE_EDIT_ID = "recipe:setEditId";

export function addRecipeData(data) {
  return {
    type: ADD_ROOT_DATA,
    payload: {
      items: data
    }
  };
}

export function setRecipeItemId(data) {
  return {
    type: SET_RECIPE_ITEM_ID,
    payload: {
      itemId: data
    }
  };
}

export function addIngredient(data) {
  return {
    type: ADD_INGREDIENT,
    payload: {
      item: data
    }
  };
}

export function removeIngredients(data) {
  return {
    type: REMOVE_INGREDIENTS,
    payload: {}
  };
}

export function resetIngredients(data) {
  return {
    type: RESET_INGREDIENTS,
    payload: {
      items: data
    }
  };
}


export function setDeleteId(data) {
  return {
    type: SET_RECIPE_DELETE_ID,
    payload: {
      itemId: data
    }

  };
}

export function removeDeleteId() {
  return {
    type: REMOVE_RECIPE_DELETE_ID,
    payload: {}
  };
}

export function setEditId(data) {
  return {
    type: SET_RECIPE_EDIT_ID,
    payload: {
      itemId: data
    }

  };
}
