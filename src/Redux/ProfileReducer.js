const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.textArea,
        countLike: 0,
      };
      state.PostData.push(newPost);
      state.textArea = "";
      return state;
    case CHANGE_NEW_POST_TEXT:
      state.textArea = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const onChangePostActionCreator = (text) => {
  return { type: CHANGE_NEW_POST_TEXT, newText: text };
};

export default ProfileReducer;
