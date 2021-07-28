import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";
import { createRef } from "react";
import { addPostActionCreator } from "../../../Redux/ProfileReducer";
import { onChangePostActionCreator } from "../../../Redux/ProfileReducer";

const MyPost = (props) => {
  let PostElement = props.state.PostData.map((post) => (
    <Post message={post.message} countLike={post.countLike} />
  ));

  let postTextElement = createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onChangePost = () => {
    debugger;
    let text = postTextElement.current.value;

    props.dispatch(onChangePostActionCreator(text));
  };

  return (
    <div>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <textarea
          onChange={onChangePost}
          ref={postTextElement}
          value={props.state.textArea}
        />
      </div>
      <button onClick={addPost}>Add post</button>

      <div className={s.content}>
        <div>{PostElement}</div>
      </div>
    </div>
  );
};

export default MyPost;
