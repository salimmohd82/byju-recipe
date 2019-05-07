import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HeaderContainer from "./containers/HeaderContainer";
import RecipeListContainer from "./containers/RecipeListContainer";
import RecipeDetailContainer from "./containers/RecipeDetailContainer";
import LoginContainer from "./containers/LoginContainer";
import LogoutContainer from "./containers/LogoutContainer";
import AddItemContainer from "./containers/AddItemContainer";
import EditItemContainer from "./containers/EditItemContainer";
import Profile from "./view/Profile";

class App extends Component {

  render() {
    return (
      <div className="App" id="App">
        <main>
          <Router>
            <HeaderContainer />
            <Route exact path="/" component={RecipeListContainer} />
            <Route path="/detail" component={RecipeDetailContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/logout" component={LogoutContainer} />
            <Route path="/add" component={AddItemContainer} />
            <Route path="/update" component={EditItemContainer} />
            <Route path="/profile" component={Profile} />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
