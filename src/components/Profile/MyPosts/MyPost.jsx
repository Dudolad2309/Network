import React from "react";
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {Box, Container, Typography} from "@material-ui/core";


const MyPost = React.memo(props => {

    let PostElement = props.state.Profile.PostData.map((post) => (
        <Post key={post.id} message={post.message} countLike={post.countLike}/>
    ));


    let onChangePost = (values) => {
        props.addPost(values.onChangePost)

    };

    return (
        <Container>
            <Typography variant="h4">My post</Typography>
            <AddMessageReduxForm onSubmit={onChangePost}/>
            <Typography paragraph>{PostElement}</Typography>
        </Container>
    );
});


const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={""} component={"input"} name={"onChangePost"}/>
           <Box marginTop={3}><button>Add post</button></Box>
        </form>

    )
}
const AddMessageReduxForm = reduxForm({form: "addPostForm"})(AddPostForm)

export default MyPost;
