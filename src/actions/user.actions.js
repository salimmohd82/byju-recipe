export const ADD_ROOT_USER_DATA = "user:addAuthUserData";
export const DO_LOGIN = "user:doLogin";
export const DO_LOGOUT = "user:doLogout";

export function addAuthUserData(data) {
  return {
    type: ADD_ROOT_USER_DATA,
    payload: {
      items: data
    }
  };
}

export function doLogin(data) {
  return {
    type: DO_LOGIN,
    payload: {
      user: data,
      loggedin: true
    }
  };
}

export function doLogout(data) {
  return {
    type: DO_LOGOUT,
    payload: {
      loggedin: false
    }
  };
}
