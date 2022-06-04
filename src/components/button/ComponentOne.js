import React, { useState, useEffect } from "react";
import Home from "./home";
import UMN from "./umn";
import Mall from "./mall";
import { Link } from "react-router-dom";
function ComponentOne() {
  const [home, setHome] = useState(true);
  const [umn, setUmn] = useState(false);
  const [mall, setMall] = useState(false);
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [i, seti] = useState(0);
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const homeHandler = () => {
    setHome(true);
    setUmn(false);
    setMall(false);
    document.body.style.backgroundImage =
      "url('https://i.pinimg.com/originals/5d/9e/04/5d9e04cb5f5e0c1593b91329cdc2a6fb.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };
  const umnHandler = () => {
    setHome(false);
    setUmn(true);
    setMall(false);
    document.body.style.backgroundImage =
      "url('https://www.phiradio.net/wp-content/uploads/2020/05/Raih-Beasiswa-Di-Universitas-Multimedia-Nusantara.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };
  const mallHandler = () => {
    setHome(false);
    setUmn(false);
    setMall(true);
    document.body.style.backgroundImage =
      "url('https://wallpapercave.com/wp/wp2110665.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };

  //greet sesuai realtime, bukan waktu di game
  if (hours >= 6 && hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
  } else if (hours >= 17 && hours < 21) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }

  useEffect(() => {
    if (i === 7) {
      seti(0);
    }
    if (minutes === 24) {
      seti(i + 1);
      setMinutes(0);
    }
    if (seconds === 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }
    const interval = setInterval(() => {
      setSeconds(seconds + 5);
    }, 1000);

    if (i === 7 && minutes === 0 && seconds === 0) {
      alert("Thank you for playing our game!");
      window.location.href = "/";
    }

    return () => clearInterval(interval);
  });

  const image = localStorage.getItem("image");
  const name = localStorage.getItem("name");
  const jurusan = localStorage.getItem("jurusan");

  return (
    <div>
      <div align="left">
        <button id="Home" onClick={homeHandler}>
          HOME
        </button>
        <br />
        <button
          onClick={umnHandler}
          disabled={i === 0 || i === 6 || minutes < 8 || minutes > 18}
        >
          CAMPUS
        </button>
        <br />
        <button onClick={mallHandler} disabled={minutes < 10 || minutes > 20}>
          MALL
        </button>
        <br />
        <Link to="/News">
          <button>NEWS</button>
        </Link>
      </div>
      <div>
        <img id="image" src={image} alt="#"></img>
      </div>
      <div>
        {home && <Home />}
        {umn && <UMN />}
        {mall && <Mall />}
      </div>
      <div id="footer">
        <div id="home"></div>
        <div id="greetings">
          <h2 align="center">
            Good {timeOfDay}, {name}!
          </h2>
          <h5 align="center"> "Selamat datang di {jurusan}"</h5>
          <h2 align="center">
            {day[i]}, {minutes} : {seconds}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ComponentOne;
