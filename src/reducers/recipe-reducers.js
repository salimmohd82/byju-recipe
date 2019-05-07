import {
  ADD_ROOT_DATA,
  SET_RECIPE_ITEM_ID,
  ADD_INGREDIENT,
  REMOVE_INGREDIENTS,
  RESET_INGREDIENTS,
  SET_RECIPE_DELETE_ID,
  REMOVE_RECIPE_DELETE_ID,
  SET_RECIPE_EDIT_ID
} from "../actions/recipe.actions";

export default function recipeReducer(state = {}, {type, payload}) {
  switch (type) {
    case ADD_ROOT_DATA:
      return {
        ...state,
        items: payload.items
      };
    case SET_RECIPE_ITEM_ID:
      return {
        ...state,
        itemId: payload.itemId
      };
    case ADD_INGREDIENT:
      let merged = state.ingredients.concat(payload.item);
      return {
        ...state,
        ingredients: merged
      };
    case RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: payload.items
      };
    case REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: []
      };
    case SET_RECIPE_DELETE_ID:
      return {
        ...state,
        removeId: payload.itemId
      };
    case REMOVE_RECIPE_DELETE_ID:
      return {
        ...state,
        removeId: ""
      };
    case SET_RECIPE_EDIT_ID:
      return {
        ...state,
        editId: payload.itemId
      };
    default:
      return state;
  }
}
