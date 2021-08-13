import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/Posts/MyPostContainer";

const Profile = (props) => {
  return (
    <div className={s.use}>
      <ProfileInfo profile={props.profile} status={props.status}   updateStatus={props.updateStatus}/>
      <MyPostContainer  />
    </div>
  );
};
export default Profile;
