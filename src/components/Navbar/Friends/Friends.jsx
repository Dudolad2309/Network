import React from "react";
import FriendsItem from "../FriendsItem/FriendsItem";
import s from "./Friends.module.css";

const Friends = (props) => {

  let FriendElement = props.state.SideBar.NavData.map((el) => (
    <FriendsItem key={el.id} name={el.name} id={el.id} />
  ));

  return (
    <nav className={s.footer}>
      <div className={s.footer}>{FriendElement}</div>
    </nav>
  );
};
export default Friends;
