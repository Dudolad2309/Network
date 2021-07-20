import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.item}>
        <img
          src="https://s.pfst.net/2017.06/57345286756788a2d6aa37c7a739fe2b7beab61d3c94_b.jpg"
          alt="1"
        ></img>
        {props.message}
        <div>Like {props.count}</div>
      </div>
    </div>
  );
};
export default Post;
