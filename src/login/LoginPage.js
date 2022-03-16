import React from "react";
import LoginCard from "./LoginCard";
import style from "./LoginPage.module.css";
import logo from "../imgs/fakebook.png";
import Footer from "./Footer";
export default function LoginPage(props) {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#f0f2f5" }}>
      <div className={style.parentcentre}>
        <div className={style.centre}>
          <div className={style.bodycontainer}>
            <div className={style.containlogotext}>
              <img alt="" className={style.logo} src={logo} />
              <div className={style.undertext}>
                Facebook helps you connect and share with the people in your
                life.
              </div>
            </div>
            <div>
              <LoginCard onlogin={props.onlogin} />
              <div className={style.underform}>
                <h5>Create a Page </h5>

                <span className={style.span}>
                  for a celebrity, brand or business.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
