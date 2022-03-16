import React from "react";
import style from "./FlatButton.module.css";
export default function FlatButton(props) {
  return <div className={style.button}>{props.children}</div>;
}
