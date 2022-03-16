import React from "react";
import style from "./Story.module.css";
export default function Story(props) {
  return (
    <div className={style["card-container"]}>
      <img className={style["img-container"]} alt="cac" src={props.url} />
    </div>
  );
}
