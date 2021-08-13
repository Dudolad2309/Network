import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";


const MyPost = (props) => {

    let PostElement = props.state.Profile.PostData.map((post) => (
        <Post key={post.id} message={post.message} countLike={post.countLike}/>
    ));


    let onChangePost = (values) => {
        props.addPost(values.onChangePost)

    };

    return (
        <div>
            <div>
                <h3>My post</h3>
            </div>
            <AddMessageReduxForm onSubmit={onChangePost}/>
            <div className={s.content}>
                <div>{PostElement}</div>
            </div>
        </div>
    );
};


const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Text"} component={"textarea"} name={"onChangePost"}/>

            <button>Add post</button>
        </form>

    )
}
const AddMessageReduxForm = reduxForm({form: "addPostForm"})(AddPostForm)

export default MyPost;
