import React, {Component} from "react";
import {Redirect} from 'react-router';

import {setToLocalStore} from "../data/storageHelper";


import "./login.css";

import authUserData from "../data/authuser";
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginStatus: true
    }
  }

  onLogin = e => {
    e.preventDefault();

    const input = {
      userName: e.target.username.value,
      password: e.target.password.value
    };

    authUserData.forEach((item) => {
      if (item.userName === input.userName && item.password === input.password) {
        this.props.doLogin(item);
        setToLocalStore("loginflag", true);
        setToLocalStore("loggedinUser", item);
      }
      else {
        this.setState({
          loginStatus: false
        })
      }
    })
  };

  render() {
    if (this.props.isLoggedIn === true) {
      return (<Redirect to="/" />);
    } else {
      return (<div className="wrapper fadeInDown">
        <div id="formContent">
          {!this.state.loginStatus && (
            <div className="login-error">invalid credentials</div>
          )}
          <form name="login-form" onSubmit={this.onLogin}>
            <input type="text" id="login" className="fadeIn second" name="username" placeholder="login" />
            <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>);
    }
  }
}

Login.defaultProps = {

};
export default Login;
