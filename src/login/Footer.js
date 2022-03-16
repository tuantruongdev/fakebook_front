import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  const lang = [
    "English (UK)",
    "Tiếng Việt",
    " 中文(台灣)",
    "한국어",
    "日本語",
    "Français (France)",
    "ภาษาไทย",
    "Español",
    "Português (Brasil)",
    "Deutsch",
    "Italiano",
  ];
  const products = [
    "Sign Up",
    "Log In",
    "Messenger",
    "Facebook Lite",
    "Watch",
    "Places",
    "Games",
    "Marketplace",
    "Facebook Pay",
    "Oculus",
    "Portal",
    "Instagram",
    "Bulletin",
    "Local",
    "Fundraisers",
    "Services ",
    "Voting Information Centre",
    "Groups",
    "About",
    "Create ad",
    "Create Page",
    "Developers",
    "Careers",
    "Privacy",
    "Cookies",
    "AdChoices",
    "Terms",
    "Help",
    "Settings",
    "Activity log",
  ];
  return (
    <div className={style.container}>
      <div className={style.centre2}>
        <div className={style.centre}>
          {lang.map(function (element) {
            return (
              <a className={style.lang} href="#">
                {element}
              </a>
            );
          })}
        </div>
        <div className={style.line} />
        <div className={style.centre}>
          {products.map(function (element) {
            return (
              <a className={style.prod} href="#">
                {element}
              </a>
            );
          })}
        </div>
        <div className={style.copyRight}>Menang © 2022</div>
      </div>
    </div>
  );
}
