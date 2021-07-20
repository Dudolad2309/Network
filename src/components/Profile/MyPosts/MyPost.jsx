import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";

const MyPost = () => {
  return (
    <div className={s.content}>
      <div>
        <Post message="Hello how are you?" count="15" />
        <Post message="It my first message" count="2" />
      </div>
    </div>
  );
};
export default MyPost;
