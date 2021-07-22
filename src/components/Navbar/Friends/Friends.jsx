import React from "react";
import { NavLink } from "react-router-dom";
import Post from "../../Profile/MyPosts/Posts/Post";
import s from "./Friends.module.css";

const Friends = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.footer}>
        <NavLink activeClassName={s.activeLink} to="/friends/">
          <img
            src="https://s.pfst.net/2017.06/57345286756788a2d6aa37c7a739fe2b7beab61d3c94_b.jpg"
            alt="1"
          ></img>
        </NavLink>
        <div className={s.footerName}>name</div>
      </div>
    </nav>
  );
};
export default Friends;
