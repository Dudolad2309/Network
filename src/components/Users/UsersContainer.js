import {connect} from "react-redux";
import Users from './Users'
import {
	follow,
	followSuccess,
	getUserPageThunkCreat,
	getUserThunkCreat,
	unfollow,
	unfollowSuccess,
} from "../../Redux/usersReducer";
import React from "react";
import Preloader from "../../common/preloader/Preloader";
import {WithAuthRedirect} from "../../HOC/WithAuthRedir";
import {compose} from "redux";
import {
	getCurrentPage1,
	getIsFetching1,
	getIsFetchingFollow1,
	getPageSize1,
	getTotalUsersCount1,
	getUser1
} from "../../Redux/UsersSelectors";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUserThunkCreat(this.props.currentPage, this.props.pageSize)
	};

	onePageChanged = (pageNumber) => {
		this.props.getUserPageThunkCreat(pageNumber, this.props.pageSize)
	};

	render() {
		return <>
			<div>
				{this.props.isFetching ? <Preloader/> : null}
			</div>
			<Users users={this.props.users}
			       totalUsersCount={this.props.totalUsersCount}
			       pageSize={this.props.pageSize}
			       onePageChanged={this.onePageChanged}
			       unfollow={this.props.unfollow}
			       follow={this.props.follow}
			       currentPage={this.props.currentPage}
			       isFetchingFollow={this.props.isFetchingFollow}
			       unfollowSuccess={this.props.unfollowSuccess}
			       followSuccess={this.props.followSuccess}
			/>
		</>
	}
}

const mapStateToProps = (state) => {
	return {
		users: getUser1(state),
		pageSize: getPageSize1(state),
		totalUsersCount: getTotalUsersCount1(state),
		currentPage: getCurrentPage1(state),
		isFetching: getIsFetching1(state),
		isFetchingFollow: getIsFetchingFollow1(state),
	}
};

export default compose(connect(mapStateToProps, {
	follow,
	unfollow,
	getUserThunkCreat,
	getUserPageThunkCreat,
	unfollowSuccess,
	followSuccess
}), WithAuthRedirect)(UsersContainer)

