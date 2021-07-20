import React from "react";
import s from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="#"
        ></img>
      </div>
      <div>foto and title</div>
      <div>my post</div>
      <textarea></textarea>
      <button>Add post</button>
      <MyPost />
    </div>
  );
};
export default Profile;
