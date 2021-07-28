import ProfileReducer from "./ProfileReducer";
import DialogReducer from "./DialogReducer";
import SideBarReducer from "./SideBarReducer";

let store = {
  _State: {
    sideBar: {
      NavData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Vova" },
        { id: 3, name: "Sveta" },
      ],
    },
    pageProfile: {
      PostData: [
        { id: 1, message: "Hello how are you?", countLike: 5 },
        { id: 2, message: "It my first message", countLike: 2 },
        { id: 3, message: "Hello how are you?", countLike: 45 },
      ],
      textArea: "Hello",
    },

    pageDialogs: {
      MessageData: [
        { id: 1, text: "Hello" },
        { id: 2, text: "How are you" },
        { id: 3, text: "Nice to meet you" },
      ],

      textAreaMessage: "",

      DialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Vova" },
        { id: 3, name: "Sveta" },
      ],
    },
  },
  renderEntireTree() {
    console.log("hhhhhh");
  },
  getState() {
    return this._State;
  },
  subscribe(observer) {
    this._renderEntireTree = observer;
  },

  dispatch(action) {
    this._State.pageProfile = ProfileReducer(this._State.pageProfile, action);
    this._State.pageDialogs = DialogReducer(this._State.pageDialogs, action);
    this._State.sideBar = SideBarReducer(this._State.sideBar, action);
    this._renderEntireTree(this._State);
  },
};

export default store;
