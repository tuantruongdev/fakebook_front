import React, { useState, useEffect } from "react";
import style from "./NewsFeedLeft.module.css";
import avt from "../../imgs/avt.jpg";
import FlatButton from "../../ui/FlatButton";
import jwt_decode from "jwt-decode";

export default function NewsFeedLeft(props) {
  const [fullname, setFullName] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const getName = async () => {
    var firstName = localStorage.getItem("firstName");
    var lastName = localStorage.getItem("lastName");
    var avt2 = localStorage.getItem("imageUrl");
    setFullName(firstName + " " + lastName);
    if (avt2 === "") {
      setimgUrl(
        "https://scontent.fhan5-10.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0DaJUl7B1iMAX-afQEO&_nc_ht=scontent.fhan5-10.fna&oh=00_AT-cLAInxBgatkBBGAMfNjA_t5GkTPpqnli_PwjzBpevbA&oe=625BB9F8"
      );
    } else {
      setimgUrl(avt);
    }
  };
  useEffect(() => {
    getName();
  }, []);
  return (
    <div className={style.container}>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <img alt="" src={imgUrl} className={style["main-avt"]} />
          <div className={style.fullname}>{fullname}</div>
        </li>
        <li>
          <img
            alt=""
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
            className={style.avt}
          />
          <div className={style.fullname}>Friends</div>
        </li>
        <li>
          <img
            alt=""
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
            className={style.avt}
          />
          <div className={style.fullname}>Groups</div>
        </li>
        <li>
          <img
            alt=""
            src="	https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
            className={style.avt}
          />
          <div className={style.fullname}>Marketplace</div>
        </li>
        <li>
          <img
            alt=""
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
            className={style.avt}
          />
          <div className={style.fullname}>Watch</div>
        </li>

        <li>
          <img
            alt=""
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"
            className={style.avt}
          />
          <div className={style.fullname}>Memories</div>
        </li>
        <li>
          <div onClick={props.onLogout} className={style.flatbtn}>
            <svg
              className={style["svgscale"]}
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
            >
              <g fillRule="evenodd" transform="translate(-448 -544)">
                <path
                  fillRule="nonzero"
                  d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                ></path>
              </g>
            </svg>
          </div>
          <div className={style.fullname}>More</div>
        </li>
      </ul>
    </div>
  );
}
