const ADD_MESSAGE = "ADD-MESSAGE";



let initialStat = {
  MessageData: [
    { id: 1, text: "Hello" },
    { id: 2, text: "How are you" },
    { id: 3, text: "Nice to meet you" },
  ],

  DialogsData: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Vova" },
    { id: 3, name: "Sveta" },
  ],

}

const DialogReducer = (state =initialStat, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = action.onChangeMessage
        return {...state,

          MessageData:[...state.MessageData, { id: 4, text: newMessage }]
      }
    }

    default:
      return state;
  }
};

export const sendMessageActiveCreator = (onChangeMessage) => {
  return { type: ADD_MESSAGE, onChangeMessage};
};

export default DialogReducer;
