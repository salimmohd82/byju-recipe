import {
  ADD_ROOT_USER_DATA,
  DO_LOGIN,
  DO_LOGOUT
} from "../actions/user.actions";

export default function userReducer(state = {}, {type, payload}) {
  switch (type) {
    case ADD_ROOT_USER_DATA:
      return {
        ...state,
        list: payload.items
      };
    case DO_LOGIN:
      return {
        ...state,
        loggedIn: payload.user,
        isLoggedIn: payload.loggedin
      };
    case DO_LOGOUT:
      return {
        ...state,
        loggedIn: {},
        isLoggedIn: payload.loggedin
      };
    default:
      return state;
  }
}

