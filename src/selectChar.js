import React, { useState } from "react";
import "./selectChar.css";
import "./styles.css";
import Content from "./char";
import { Link } from "react-router-dom";

function SelectChar() {
  const [count, setCount] = useState(0);

  function next() {
    if (count !== 2) {
      setCount(count + 1);
    }
    if (count === 2) {
      setCount(0);
    }
  }
  function prev() {
    if (count !== 0) {
      setCount(count - 1);
    }
    if (count === 0) {
      setCount(2);
    }
  }

  let userValue = "";
  let jurusanUser = "";

  const getInputValue = (event) => {
    userValue = event.target.value;
  };

  const getJurusan = (event) => {
    jurusanUser = event.target.value;
  };

  const setSession = () => {
    localStorage.setItem("name", userValue);
    localStorage.setItem("image", Content[count].imgURL);
    localStorage.setItem("jurusan", jurusanUser);
  };

  return (
    <div className="main">
      <div className="heading">
        <img src="https://i.gifer.com/XqyT.gif" alt="trophy" />
        <h1>7 Days Student</h1>
      </div>

      <div className="aboutUs">
        <Link to="/about">
          <img
            src="./logo/aboutuslogo.png"
            className="aboutUs"
            alt=" "
            //onClick={this.myfunction}
          />
        </Link>
      </div>
      <div className="youtube">
        <a href="#">
          <img src="./logo/ytlogo.png" className="youtube" alt=" " />
        </a>
      </div>

      <div class="mh-100">
        <div className="content">
          <div className="left">
            <img
              className="arrow"
              onClick={prev}
              src="https://thumbs.dreamstime.com/z/white-pop-art-retro-arrow-sign-yellow-background-vector-illustration-white-pop-art-arrow-yellow-background-119138550.jpg"
              alt="#"
            />
          </div>

          <div>
            <img id="image" src={Content[count].imgURL} alt="#"></img>
          </div>

          <div className="right">
            <img
              className="arrow"
              onClick={next}
              src="https://thumbs.dreamstime.com/z/white-cartoon-arrow-blue-background-vector-paper-illustration-white-arrow-sign-blue-background-118951543.jpg"
              alt="#"
            />
          </div>
        </div>
      </div>

      <div className="input">
        <form>
          <div>
            <input
              id="Name"
              type="text"
              onChange={getInputValue}
              placeholder="Masukkan Nama"
              action="src/buttons/ComponentOne.js"
            ></input>
          </div>
          <div>
            <select onClick={getJurusan}>
              <option>Pilih Jurusan</option>
              <option>Informatika</option>
              <option>Strategic Communication</option>
              <option>DKV</option>
            </select>
          </div>

          <div>
            <Link to="/App2">
              <button className="start" onClick={setSession}>
                START
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SelectChar;
