const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

const DialogReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        text: state.textAreaMessage,
      };
      state.MessageData.push(newMessage);
      state.textAreaMessage = "";
      return state;
    case CHANGE_NEW_MESSAGE_TEXT:
      state.textAreaMessage = action.text;
      return state;

    default:
      return state;
  }
};

export const sendMessageActiveCreator = () => {
  return { type: ADD_MESSAGE };
};
export const onChangeMessageActiveCreator = (text) => {
  return { type: CHANGE_NEW_MESSAGE_TEXT, text: text };
};
export default DialogReducer;
