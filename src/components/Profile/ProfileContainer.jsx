import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../Redux/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authId ? this.props.authId : this.props.history.push("/Login")
		}
		this.props.getProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return (
			<div className={s.use}>
				<Profile {...this.props} profile={this.props.profile}
				         status={this.props.status} updateStatus={this.props.updateStatus}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.Profile.profile,
	status: state.Profile.status,
	authId: state.auth.id,
	isAuth: state.auth.isAuth,
});

export default compose
(withRouter,
	connect(mapStateToProps,
		{setUserProfile, getProfile, getStatus, updateStatus}))(ProfileContainer)





