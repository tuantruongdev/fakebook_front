import React from "react";
import style from "./MainFeed.module.css";
import Story from "./newsfeed/Story";
import Post from "./Post";
export default function MainFeed() {
  return (
    <div className={style["untra-main-container"]}>
      <div className={style["main-container"]}>
        <div className={style["story-container"]}>
          <Story url="https://images.unsplash.com/photo-1647314877456-e3a7c17e5ef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <Story url="https://images.unsplash.com/photo-1647268342868-c4afe93719a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" />
          <Story url="https://images.unsplash.com/photo-1647285542926-0a6fa21c8216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80" />
          <Story url="https://images.unsplash.com/photo-1647336399635-71872d9ae16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <Story url="https://images.unsplash.com/photo-1647314877456-e3a7c17e5ef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
