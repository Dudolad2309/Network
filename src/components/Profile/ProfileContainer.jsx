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
            userId = 18809
        }

        this.props.getProfile(userId)

        this.props.getStatus(userId)

    }

    render() {

        return (


            <div className={s.use}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}  updateStatus={this.props.updateStatus}/>

            </div>
        );
    }
}




let mapStateToProps = (state) => ({
    profile: state.Profile.profile,
    status: state.Profile.status
})




export default compose(  withRouter, connect(mapStateToProps, {setUserProfile, getProfile,getStatus,updateStatus}))(ProfileContainer)





