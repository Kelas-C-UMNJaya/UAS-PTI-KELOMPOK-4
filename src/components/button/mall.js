import { useState } from "react";
function Mall() {
  const [bioskop, setBioskop] = useState(true);
  const [restoran, setRestoran] = useState(false);
  const [iceskate, setIceskate] = useState(false);

  const bioskopHandler = () => {
    setBioskop(true);
    setRestoran(false);
    setIceskate(false);
    document.body.style.backgroundImage = "url(../public/background/Bioskop.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };

  const restoranHandler = () => {
    setBioskop(false);
    setRestoran(true);
    setIceskate(false);
    document.body.style.backgroundImage = "url(../public/background/RestoPagi.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };

  const iceskateHandler = () => {
    setBioskop(false);
    setRestoran(false);
    setIceskate(true);
    document.body.style.backgroundImage = "url(../public/background/IceSkate.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };
  
  return (
    <div>
      <p align="right">
        <button onClick={bioskopHandler}>THEATRE</button>
        <br />
        <button onClick={restoranHandler}>RESTAURANT</button>
        <br />
        <button onClick={iceskateHandler}>ICE SKATE</button>
      </p>
      {bioskop}
      {restoran}
      {iceskate}
    </div>
  );
}

export default Mall;
