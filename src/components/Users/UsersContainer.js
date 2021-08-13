import {connect} from "react-redux";
import Users from './Users'
import {follow,unfollow,getUserThunkCreat, getUserPageThunkCreat, unfollowSuccess, followSuccess,} from "../../Redux/usersReducer";
import React from "react";
import Preloader from "../../common/preloader/Preloader";
import {WithAuthRedirect} from "../../HOC/WithAuthRedir";
import {compose} from "redux";


class UsersContainer extends React.Component {


    componentDidMount() {

        this.props.getUserThunkCreat(this.props.currentPage, this.props.pageSize)

    }

    onePageChanged = (pageNumber) => {

        this.props.getUserPageThunkCreat(pageNumber, this.props.pageSize)

    }


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


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        isFetchingFollow: state.UsersPage.isFetchingFollow
    }
}




export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    getUserThunkCreat,
    getUserPageThunkCreat,
    unfollowSuccess,
    followSuccess

}),WithAuthRedirect)(UsersContainer)

