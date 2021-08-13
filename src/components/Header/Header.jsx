import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {

  return (
    <header className={s.header}>
      <div className={s.img}>
        <img
          src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="#"
        />
      </div>
      <div className={s.social}>SOCIAL NETWORK

      </div>
        <div className={s.login}>
            {props.isAuth === true
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink className={s.loginLink} to={"/login"}>Login</NavLink>}
        </div>


    </header>
  );
};
export default Header;
