import React from "react";
import s from "./News.module.css";

const News = (props) => {
  return (
    <div className={s.item}>
      News
      <div>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="1"
        />
      </div>
    </div>
  );
};

export default News;
