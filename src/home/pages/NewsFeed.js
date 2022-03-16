import { height } from "@mui/system";
import React from "react";
import MainFeed from "./MainFeed";
import NewsFeedLeft from "./NewsFeedLeft";
import style from "./NewsFeed.module.css";
export default function NewsFeed(props) {
  return (
    <div className={style.container}>
      <NewsFeedLeft onLogout={props.onLogout} />
      <MainFeed />
    </div>
  );
}
