import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";

let PostData = [
  { id: 1, message: "Hello how are you?", countLike: 15 },
  { id: 2, message: "It my first message", countLike: 2 },
];

const MyPost = () => {
  return (
    <div className={s.content}>
      <div>
        <Post message={PostData[0].message} countLike={PostData[0].countLike} />
        <Post message={PostData[1].message} countLike={PostData[1].countLike} />
      </div>
    </div>
  );
};
export default MyPost;
