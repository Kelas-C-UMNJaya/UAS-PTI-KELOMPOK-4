import { useState } from "react";
function Home() {
  const [belajar, setBelajar] = useState(true);
  const [main, setMain] = useState(false);
  const [tidur, setTidur] = useState(false);
  const [makan, setMakan] = useState(false);

  const belajarHandler = () => {
    setBelajar(true);
    setMain(false);
    setTidur(false);
    setMakan(false);
    document.body.style.backgroundImage =
      "url('https://wallpapercave.com/wp/wp7216104.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };
  const mainHandler = () => {
    setBelajar(false);
    setMain(true);
    setTidur(false);
    setMakan(false);
    document.body.style.backgroundImage =
      "url('https://www.ruparupa.com/blog/wp-content/uploads/2021/08/Screen-Shot-2021-08-16-at-05.42.17.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };
  const tidurHandler = () => {
    setBelajar(false);
    setMain(false);
    setTidur(true);
    setMakan(false);
    document.body.style.backgroundImage =
      "url('https://www.udesign.es/wp-content/uploads/2017/10/UD-sleep-better-2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };
  const makanHandler = () => {
    setBelajar(false);
    setMain(false);
    setTidur(false);
    setMakan(true);
    document.body.style.backgroundImage =
      "url('https://cdn.vox-cdn.com/thumbor/1Yi6g9Z3d-TaXaUQfSmart7s1HQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19603884/Dining_Room_0719_Beck_8.30.183448.0.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };

  return (
    <div>
      <p align="right">
        <button onClick={belajarHandler}>STUDY ROOM</button>
        <br />
        <button onClick={mainHandler}>GAMING ROOM</button>
        <br />
        <button onClick={tidurHandler}>BEDROOM</button>
        <br />
        <button onClick={makanHandler}>DINING ROOM</button>
      </p>
      {belajar}
      {main}
      {tidur}
      {makan}
    </div>
  );
}

export default Home;
