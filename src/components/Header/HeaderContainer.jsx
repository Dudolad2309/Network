import React from "react";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout} from "../../Redux/authReducer";


class HeaderContainer extends React.Component {


    componentDidMount() {
        this.props.getAuth()

    }

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

let UrlContainer = withRouter(HeaderContainer)


export default connect(mapStateToProps, {getAuth,logout})(UrlContainer)
