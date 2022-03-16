import React from "react";
import style from "./Story.module.css";
import avt from "../../../imgs/avt.jpg";
export default function Story(props) {
  return (
    <div className={style["card-container"]}>
      <img className={style["avt-container--unseen"]} alt="avt" src={avt} />

      <img className={style["img-container"]} alt="cac" src={props.url} />
      <div className={style["owner-name"]}>Nguyễn Tuấn Trường</div>
    </div>
  );
}
