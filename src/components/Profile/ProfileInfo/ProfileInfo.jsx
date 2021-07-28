import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="#"
        ></img>
      </div>
      <div>Image and title</div>
    </div>
  );
};
export default ProfileInfo;
