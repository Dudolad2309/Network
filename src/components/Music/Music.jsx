import React from "react";
import s from "./Music.module.css";

const Music = () => {
	return (
		<div className={s.item}>
			<div>
				<div>Music</div>
				<img
					className={s.img}
					src="https://images.unsplash.com/photo-1511027748565-a0e907fcece4?ixid=MnwxMjA3fDB8MHxwaG90by
					1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
					alt="img"
				/>
			</div>
		</div>
	);
};

export default Music;
