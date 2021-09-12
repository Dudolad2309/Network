import React from "react";
import s from "./Settings.module.css";

const Settings = () => {
	return (
		<div className={s.item}>
			Settings
			<div>
				<img
					className={s.img}
					src="https://picsum.photos/640/360"
					alt="img"
				/>
			</div>
		</div>
	);
};

export default Settings;
