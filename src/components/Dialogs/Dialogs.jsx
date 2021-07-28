import DialogsItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { sendMessageActiveCreator } from "../../Redux/DialogReducer";
import { onChangeMessageActiveCreator } from "../../Redux/DialogReducer";

const Dialogs = (props) => {
  let sendMessages = () => {
    props.dispatch(sendMessageActiveCreator());
  };

  let onChangeMessage = (e) => {
    let text = e.target.value;
    props.dispatch(onChangeMessageActiveCreator(text));
  };

  let DialogsElement = props.state.DialogsData.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));

  let MessagesElement = props.state.MessageData.map((message) => (
    <Message text={message.text} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>{DialogsElement}</div>
      <div className={s.messages}>{MessagesElement}</div>
      <div>
        <textarea
          onChange={onChangeMessage}
          value={props.state.textAreaMessage}
        />
      </div>
      <button onClick={sendMessages}>Send message</button>
    </div>
  );
};

export default Dialogs;
