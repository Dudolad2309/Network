import React from "react";
import DialogsItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Box, Typography} from "@material-ui/core";


const Dialogs = (props) => {

  let DialogsElement = props.state.Dialog.DialogsData.map((dialog) => (
    <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>
  ));

  let MessagesElement = props.state.Dialog.MessageData.map((message) => (
    <Message key={message.id} text={message.text}/>
  ));

  let addNewMessage = (values) => {
    props.sendMessages(values.onChangeMessage);
  };

  return (
    <Box>
      <Typography className={s.dialogs}>{DialogsElement} </Typography>
      <Typography className={s.messages}>{MessagesElement}</Typography>
      <AddMessageReduxForm onSubmit={addNewMessage}/>
    </Box>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={""} component={"input"} name={"onChangeMessage"}/>
      <button>Send message</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;


