import React from "react";
import DialogsItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";




const Dialogs = (props) => {


    let DialogsElement = props.state.Dialog.DialogsData.map((dialog) => (
        <DialogsItem key ={dialog.id} name={dialog.name} id={dialog.id} />
    ));

    let MessagesElement = props.state.Dialog.MessageData.map((message) => (
        <Message key ={message.id}  text={message.text} />
    ));


    let addNewMessage = (values) => {

        props.sendMessages(values.onChangeMessage);
    };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogs}>{DialogsElement}</div>
      <div className={s.messages}>{MessagesElement}</div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Text"} component={"textarea"} name={"onChangeMessage"}/>

            <button >Send message</button>
        </form>

    )
}

const AddMessageReduxForm=reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;


