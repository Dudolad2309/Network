import React from "react";
import s from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.use}>
      <ProfileInfo />
      <MyPost state={props.state} />
    </div>
  );
};
export default Profile;
