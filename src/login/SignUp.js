import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import style from "./SignUp.module.css";
import signUp from "../apis/auth/signup";
Modal.setAppElement("#modal");
export default function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("2000");
  const [modalIsOpen, setIsOpen] = React.useState(props.openModal);
  const [gender, setGender] = useState(1);
  const [err, setErr] = useState("");
  // console.log(modalIsOpen);
  useEffect(() => {
    setIsOpen(props.openModal);
  }, [props.openModal]);

  function closeModal() {
    setIsOpen(false);
    props.onToggle();
  }
  const maleHandler = () => {
    setGender(1);
  };
  const femaleHandler = () => {
    setGender(2);
  };
  const gayHandler = () => {
    setGender(3);
  };
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };
  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const surNameChangeHandler = (event) => {
    setSurName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const dayChangeHandler = (event) => {
    setDay(event.target.value);
  };
  const monthChangeHandler = (event) => {
    setMonth(event.target.value);
  };
  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  const signInHandler = async () => {
    const fetchSignUp = await signUp(
      firstName,
      surName,
      email,
      phone,
      password,
      gender,
      new Date(month + "/" + day + "/" + year)
    );
    console.log(fetchSignUp);
    if (fetchSignUp.status === "success") {
      console.log("signup thành công với token:\n" + fetchSignUp.token);
      await localStorage.setItem("token", "Bearer " + fetchSignUp.token);
      await localStorage.setItem("firstName", fetchSignUp.firstName);
      await localStorage.setItem("lastName", fetchSignUp.lastName);
      await localStorage.setItem("imageUrl", fetchSignUp.imageUrl);
      //   window.location.replace("http://127.0.0.1:5500/public/index.html");
      var redir = props.onlogin;
      redir("Bearer " + fetchSignUp.token);
    } else {
      //   setErr("Some error appear!")
      //  console.log("signup thất bại");
      setErr(fetchSignUp.message);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={closeModal}
        className={style.content}
        overlayClassName={style.Overlay}
      >
        <div className={style["div-header"]}>
          <img
            className={style.exit}
            alt=""
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
            onClick={() => {
              closeModal();
            }}
          />
          <div className={style["text-signup"]}>Sign Up</div>
          <div className={style["text-slogan"]}>It's quick and easy.</div>
        </div>

        <div className={style.line}></div>
        <div className={style["div-body"]}>
          <div className={style["div-name"]}>
            <input
              onChange={firstNameChangeHandler}
              value={firstName}
              placeholder="First name"
              className={style["input-half"]}
            />
            <input
              onChange={surNameChangeHandler}
              value={surName}
              placeholder="Surname"
              className={style["input-half"]}
            />
          </div>
          <input
            onChange={emailChangeHandler}
            value={email}
            placeholder="Email address"
            className={style["input"]}
          />
          <input
            onChange={phoneChangeHandler}
            value={phone}
            placeholder="Mobile number"
            className={style["input"]}
          />
          <input
            onChange={passwordChangeHandler}
            value={password}
            type="password"
            placeholder="New password"
            className={style["input"]}
          />
          <p>Date of birth</p>
          <div className={style["dob-container"]}>
            <div className={style["dob-item"]}>
              <select onChange={dayChangeHandler} value={day} id="dob">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            <div className={style["dob-item"]}>
              <select onChange={monthChangeHandler} value={month} id="dob">
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Otc</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
            </div>
            <div className={style["dob-item"]}>
              <select onChange={yearChangeHandler} value={year} id="dob">
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
              </select>
            </div>
          </div>
          <p>Gender</p>
          <div className={style["dob-container"]}>
            <div onClick={maleHandler} className={style["dob-item1"]}>
              <label htmlFor="age1">Male</label>
              <input
                type="radio"
                id="gen1"
                name="gen"
                value="M"
                checked={gender === 1}
                onChange={maleHandler}
              />
            </div>
            <div onClick={femaleHandler} className={style["dob-item1"]}>
              <label htmlFor="gen2">Female</label>
              <input
                type="radio"
                id="gen2"
                name="gen"
                value="F"
                checked={gender === 2}
                onChange={femaleHandler}
              />
            </div>
            <div onClick={gayHandler} className={style["dob-item1"]}>
              <label htmlFor="gen3">LGTV</label>
              <input
                type="radio"
                id="gen3"
                name="gen"
                value="L"
                checked={gender === 3}
                onChange={gayHandler}
              />
            </div>
          </div>

          <div className={style.tos}>
            By clicking Sign Up, you agree to our <a href="#">Terms</a>,{" "}
            <a href="#">Data Policy</a> and <a href="#">Cookie Policy</a>. You
            may receive SMS notifications from us and can opt out at any time.
          </div>
          <div className={style.err}>{err}</div>
          <button
            onClick={() => {
              signInHandler();
            }}
            className={style.regButton}
          >
            Sign Up
          </button>
        </div>
      </Modal>
    </div>
  );
}
