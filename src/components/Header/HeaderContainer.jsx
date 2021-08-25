import React from "react";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {connect} from "react-redux";
import { logout} from "../../Redux/authReducer";
import {compose} from "redux";


class HeaderContainer extends React.Component {




    render() {
        return (


            <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>

        );
    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    isAuth: state.auth.isAuth

})



export default compose( withRouter, connect(mapStateToProps, {logout}),)(HeaderContainer)
