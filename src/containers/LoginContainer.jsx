import {connect} from "react-redux";

import {
  addAuthUserData,
  doLogin
} from "../actions/user.actions";

import Login from "../view/Login";

const mapStateToProps = ({user}) => {
  return {
    users: user.list,
    isLoggedIn: user.isLoggedIn
  }
};

const mapDispatchToProps = {
  addAuthUserData,
  doLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
