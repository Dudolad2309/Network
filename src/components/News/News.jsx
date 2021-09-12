import React from "react";
import s from "./News.module.css";

const News = () => {
	return (
		<div className={s.item}>
			News
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

export default News;
