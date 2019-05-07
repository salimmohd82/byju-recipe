import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {compose, createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

import recipeReducer from "./reducers/recipe-reducers";
import userReducer from "./reducers/user-reducers";

const rootReducers = combineReducers({
  recipe: recipeReducer,
  user: userReducer
});

const initialState = {
  recipe: {
    items: [],
    itemId: "",
    ingredients: [],
    newRecipie: {},
    removeId: "",
    editId: ""
  },
  user: {
    loggedIn: {},
    isLoggedIn: false
  }
};

const allStoreEnhanceres = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(rootReducers, initialState, allStoreEnhanceres);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
