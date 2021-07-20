import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.item}>
      Dialogs
      <div>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1590424599820-0e7a41598db9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1009&q=80"
          alt="1"
        />
      </div>
    </div>
  );
};

export default Dialogs;
