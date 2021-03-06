import React from "react";
import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import {Typography} from "@material-ui/core";

const DialogsItem = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink activeClassName={s.activeLink} to={"/dialogs/" + props.id}>
				<img src="https://s.pfst.net/2017.06/57345286756788a2d6aa37c7a739fe2b7beab61d3c94_b.jpg" alt={"image"}/>
				<Typography paragraph>{props.name}</Typography>
			</NavLink>
		</div>
	);
};

export default DialogsItem;
