import React from "react";
import DialogsItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
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
    </div>
  );
};

export default Dialogs;
