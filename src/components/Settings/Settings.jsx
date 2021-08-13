import React from "react";
import s from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={s.item}>
      Settings
      <div>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="1"
        />
      </div>
    </div>
  );
};

export default Settings;
