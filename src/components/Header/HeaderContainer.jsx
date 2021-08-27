import React from "react";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import {compose} from "redux";

const HeaderContainer = props => (
  <Header {...props} login={props.login} isAuth={props.isAuth}/>
);

const mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    isAuth: state.auth.isAuth,

});

export default compose(withRouter, connect(mapStateToProps, {logout}),)(HeaderContainer)
