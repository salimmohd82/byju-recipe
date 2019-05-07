import React, {Component} from "react";
import {Link} from "react-router-dom";

import {getFromLocalStore} from "../data/storageHelper";

import "./view.css";

class Header extends Component {

  componentDidMount() {
    let isLoggedIn = getFromLocalStore("loginflag");
    if (isLoggedIn === true) {
      this.props.doLogin(getFromLocalStore("loggedinUser"));
    }
  }

  render() {
    return (
      <>
        <header className="header">
          <div className="logo">Logo</div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/"> Recipes <span className="sr-only">(current)</span></Link>
                </li>
                {this.props.isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link active" to="add" >Add Recipe</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        {`Welcome ${this.props.loggedInUser.name}  `}<i className="fa fa-user fa-3" aria-hidden="true"></i>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/profile">Profile</Link>
                        <Link className="dropdown-item" to="/logout">Logout</Link>
                      </div>
                    </li>
                  </>
                ) : (
                    <li className="nav-item active">
                      <Link className="nav-link" to="/login"> Login </Link>
                    </li>

                  )}
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
