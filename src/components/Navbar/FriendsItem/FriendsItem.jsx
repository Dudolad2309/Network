import React from "react";
import { NavLink } from "react-router-dom";
import s from "./FriendsItem.module.css";

const FriendsItem = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.footer}>
        <NavLink activeClassName={s.activeLink} to="/friends/">
          <img
            src="https://s.pfst.net/2017.06/57345286756788a2d6aa37c7a739fe2b7beab61d3c94_b.jpg"
            alt="1"
          ></img>
          <div className={s.footerName}>{props.name}</div>
        </NavLink>
      </div>
    </nav>
  );
};
export default FriendsItem;
