import React, { useContext } from "react";
import PageContext from "../store/pageContext";
import Header from "./Header";
import NewsFeed from "./pages/NewsFeed";
import Market from "./pages/Market";
import Watch from "./pages/Watch";
import GroupsFeed from "./pages/GroupsFeed";

export default function Home(props) {
  var ctx = useContext(PageContext);
  return (
    <div style={{ background: "#F1F1F1", height: "100%" }}>
      <Header />
      {ctx.currentPage === "home" && <NewsFeed onLogout={props.onLogout} />}
      {ctx.currentPage === "watch" && <Watch />}
      {ctx.currentPage === "market" && <Market />}
      {ctx.currentPage === "groups" && <GroupsFeed />}
    </div>
  );
}
