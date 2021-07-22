import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";

const MyPost = (props) => {
  let PostElement = props.state.PostData.map((post) => (
    <Post message={post.message} countLike={post.countLike} />
  ));

  return (
    <div className={s.content}>
      <div>{PostElement}</div>
    </div>
  );
};

export default MyPost;
