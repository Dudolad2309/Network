import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogsItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.text}</div>;
};

let DialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Vova" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Lena" },
  { id: 5, name: "Andrei" },
];

let MessageData = [
  { id: 1, text: "Hello" },
  { id: 2, text: "How are you" },
  { id: 3, text: "Nice to meet you" },
  { id: 4, text: "I have more asks" },
  { id: 5, text: "See soon" },
];

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogsItem name={DialogsData[0].name} id={DialogsData[0].id} />
        <DialogsItem name={DialogsData[1].name} id={DialogsData[1].id} />
        <DialogsItem name={DialogsData[2].name} id={DialogsData[2].id} />
        <DialogsItem name={DialogsData[3].name} id={DialogsData[3].id} />
        <DialogsItem name={DialogsData[4].name} id={DialogsData[4].id} />
      </div>
      <div className={s.messages}>
        <Message text={MessageData[0].text} />
        <Message text={MessageData[1].text} />
        <Message text={MessageData[2].text} />
        <Message text={MessageData[3].text} />
        <Message text={MessageData[4].text} />
      </div>
    </div>
  );
};

export default Dialogs;
