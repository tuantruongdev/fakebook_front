import React, { useState } from "react";
import style from "./LoginCard.module.css";
import Card from "../ui/Card";
import validator from "validator";
import login from "../apis/auth/login";

import SignUp from "./SignUp";

export default function LoginCard(props) {
  const [errName, setErrName] = useState("");
  const [errpassword, setErrPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const checkName = () => {
    if (validator.isEmail(userName)) {
      return true;
    }
    if (validator.isMobilePhone(userName)) {
      return true;
    }
    return false;
  };
  const checkPassword = () => {
    if (password.length < 3) {
      return false;
    }

    if (validator.isAscii(password)) {
      return true;
    }
    return false;
  };
  const checkNameAndPass = async () => {
    if (!checkName()) {
      setErrName("Your phone number or email is invalid");
    } else {
      setErrName("");
    }
    if (!checkPassword()) {
      setErrPassword("Password must be more than 3 character");
    } else {
      setErrPassword("");
    }
    if (errName == errpassword) {
      const fetchLogin = await login(userName, password);
      if (fetchLogin.status === "success") {
        console.log("login thành công với token:\n" + fetchLogin.token);
        await localStorage.setItem("token", "Bearer " + fetchLogin.token);
        //   window.location.replace("http://127.0.0.1:5500/public/index.html");
        var redir = props.onlogin;
        redir("Bearer " + fetchLogin.token);
      } else {
        console.log("login thất bại");
        setErrName(fetchLogin.message);
      }
    }
  };
  const onEnter = (event) => {
    if (event.keyCode === 13) {
      checkNameAndPass();
    }
  };
  const toggleModalHandler = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <Card>
        <div className={style.container}>
          <input
            value={userName}
            onChange={(text) => {
              setUserName(text.target.value);
            }}
            className={style.input}
            placeholder="Email address or phone number"
          ></input>
          <div className={style.error}>{errName}</div>
          <input
            value={password}
            onChange={(text) => {
              setPassword(text.target.value);
            }}
            className={style.input}
            type="password"
            placeholder="Password"
            onKeyDown={(e) => {
              onEnter(e);
            }}
          ></input>
          <div className={style.error}>{errpassword}</div>
          <input type="submit" hidden />
          <button
            onClick={() => {
              checkNameAndPass();
            }}
            className={style.signButton}
          >
            Log In
          </button>
          <a href="#">
            <div className={style.forgot}>Forgotten password?</div>
          </a>
          <div className={style.line}></div>
          <button onClick={toggleModalHandler} className={style.regButton}>
            Create New Account
          </button>
        </div>
        <SignUp
          onlogin={props.onlogin}
          openModal={openModal}
          onToggle={toggleModalHandler}
        ></SignUp>
      </Card>
    </div>
  );
}
