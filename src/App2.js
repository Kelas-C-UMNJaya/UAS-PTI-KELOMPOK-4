import ComponentOne from "./components/buttons/ComponentOne";
import GamingBar from "./components/ProgressBar/Gaming";
import TidurBar from "./components/ProgressBar/Tidur";
import MakanBar from "./components/ProgressBar/Makan";
import BelajarBar from "./components/ProgressBar/Belajar";
import React from "react";

import "./styles.css";
import "./styles2.css";

function Apptwo() {
  return (
    <div>
      <div className="Box">
        <GamingBar />
        <TidurBar />
        <MakanBar />
        <BelajarBar />
      </div>
      <ComponentOne />
    </div>
  );
}

export default Apptwo;
