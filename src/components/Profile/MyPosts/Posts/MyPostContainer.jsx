import MyPost from "../MyPost";
import {addPostActionCreator} from "../../../../Redux/ProfileReducer";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
  return {
    state: state
  }
}
let mapDispatchToProps=(dispatch)=>{
  return {
    addPost:(onChangePost)=>{
      dispatch(addPostActionCreator(onChangePost))
    },

  }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)



export default MyPostContainer;






