import React from "react";
import { Link } from "react-router-dom";
import "./selectChar.css";

function About() {
  return (
    <div>
      <Link to="/">
        <h3>Back To Home</h3>
      </Link>
      <h2>Hi! Welcome to TEAM 4</h2>
      <h4>
        {" "}
        This is a react based game, and This game simulates the daily life of
        Multimedia Nusantara University College student for 7 days! ^-^
      </h4>
      <h7>Created By:</h7>
      <br />
      <h7>1. Muhammad Bayu Pratama (00000057853)</h7>
      <br />
      <h7>2. Kevin Andreli (00000058005)</h7>
      <br />
      <h7>3. Arvin Winardi (00000058607)</h7>
      <br />
      <h7>4. Andrea Zoe Putri Sukonco (00000059793)</h7>
      <div id="box">
        <div id="member1">
          <img src="./member/Bayu.png" alt="" />
        </div>
        <div id="member2">
          <img src="./member/Kevin.png" alt="" />
        </div>
        <div id="member3">
          <img src="./member/Arvin.png" alt="" />
        </div>
        <div id="member4">
          <img src="./member/Dea.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
