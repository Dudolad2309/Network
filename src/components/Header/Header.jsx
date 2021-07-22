import React from "react";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.img}>
        <img
          src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="#"
        ></img>
      </div>
      <div className={s.social}>Dima you can do it !!!</div>
    </header>
  );
};
export default Header;
