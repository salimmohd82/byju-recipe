import React, {Component} from "react";
import {Redirect} from 'react-router';

import {popFromLocalStore} from "../data/storageHelper";
class Logout extends Component {

  componentDidMount() {
    this.props.doLogout();
    popFromLocalStore("loginflag");
    popFromLocalStore("loggedinUser");
  }

  render() {
    if (this.props.isLoggedIn === false) {
      return (<Redirect to="/" />);
    }
    else {
      return null;
    }
  }
}

export default Logout;
