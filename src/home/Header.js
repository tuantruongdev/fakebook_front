import React, { useState, useContext } from "react";
import style from "./Header.module.css";
import FlatButton from "../ui/FlatButton";
import { Menu, Watch, Market, Groups } from "../ui/Logos";
import PageContext from "../store/pageContext";
export default function Header() {
  const [sMenu, setSMenu] = useState({
    fill: "#1b74e4",
    selected: "-selected",
  });
  const [sWatch, setSWatch] = useState({ fill: "#65676b", selected: "" });
  const [sMarket, setSMarket] = useState({ fill: "#65676b", selected: "" });
  const [sGroup, setSGroup] = useState({ fill: "#65676b", selected: "" });
  var ctx = useContext(PageContext);
  const reset = () => {
    const obj = { fill: "#65676b", selected: "" };
    setSMenu(obj);
    setSGroup(obj);
    setSMarket(obj);
    setSWatch(obj);
  };
  const onSelectMenu = () => {
    ctx.onPageChange("home");
    reset();
    setSMenu({ fill: "#1b74e4", selected: "-selected" });
  };
  const onSelectWatch = () => {
    ctx.onPageChange("watch");
    reset();
    setSWatch({ fill: "#1b74e4", selected: "-selected" });
  };
  const onSelectMarket = () => {
    ctx.onPageChange("market");
    reset();
    setSMarket({ fill: "#1b74e4", selected: "-selected" });
  };
  const onSelectGroup = () => {
    ctx.onPageChange("groups");
    reset();
    setSGroup({ fill: "#1b74e4", selected: "-selected" });
  };
  return (
    <div className={style["header-container"]}>
      <div className={style["logo-container"]}>
        <img
          className={style.logo}
          alt="logo"
          src="https://img.icons8.com/fluency/48/000000/facebook-circled.png"
        />
      </div>
      <div className={style["search-logo-container"]}>
        <FlatButton>
          <img
            className={style["search-logo"]}
            alt=""
            src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          />
        </FlatButton>
      </div>
      <div className={style["main-header-container"]}>
        <div className={style["grid-header-container"]}>
          <Menu onSelect={onSelectMenu} opts={sMenu} />

          <Watch onSelect={onSelectWatch} opts={sWatch} />

          <Market onSelect={onSelectMarket} opts={sMarket} />

          <Groups onSelect={onSelectGroup} opts={sGroup} />
        </div>
      </div>
      <div className={style["alt-controller"]}>
        <FlatButton>
          <svg
            viewBox="0 0 20 20"
            width="1em"
            height="1em"
            class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry jnigpg78 odw8uiq3"
          >
            <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
          </svg>
        </FlatButton>
        <FlatButton>
          <svg
            viewBox="0 0 28 28"
            alt=""
            class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry"
            height="20"
            width="20"
          >
            <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
          </svg>
        </FlatButton>
        <FlatButton>
          <svg
            viewBox="0 0 28 28"
            alt=""
            class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry"
            height="20"
            width="20"
          >
            <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
          </svg>
        </FlatButton>
        <FlatButton>
          <svg
            viewBox="0 0 44 44"
            width="1em"
            height="1em"
            class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry jnigpg78 odw8uiq3"
          >
            <circle cx="7" cy="7" r="6"></circle>
            <circle cx="22" cy="7" r="6"></circle>
            <circle cx="37" cy="7" r="6"></circle>
            <circle cx="7" cy="22" r="6"></circle>
            <circle cx="22" cy="22" r="6"></circle>
            <circle cx="37" cy="22" r="6"></circle>
            <circle cx="7" cy="37" r="6"></circle>
            <circle cx="22" cy="37" r="6"></circle>
            <circle cx="37" cy="37" r="6"></circle>
          </svg>
        </FlatButton>
      </div>
    </div>
  );
}
