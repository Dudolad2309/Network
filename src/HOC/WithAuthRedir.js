import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
	auth: state.auth.isAuth
});

export const WithAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.auth) return <Redirect to={"/Login"}/>;
			return <Component {...this.props}/>
		}
	}

	const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

	return ConnectedAuthRedirectComponent
}