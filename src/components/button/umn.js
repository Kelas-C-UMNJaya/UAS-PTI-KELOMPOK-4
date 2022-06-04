import { useState } from "react";
function UMN() {
  const [kuliah, setKuliah] = useState(true);
  const [kantin, setKantin] = useState(false);
  const [perpustakaan, setPerpustakaan] = useState(false);

  const kuliahHandler = () => {
    setKuliah(true);
    setKantin(false);
    setPerpustakaan(false);
    document.body.style.backgroundImage =
      "url('https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1024,h_576/https://www.umn.ac.id/wp-content/uploads/2020/09/Lab-AI.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };
  const kantinHandler = () => {
    setKuliah(false);
    setKantin(true);
    setPerpustakaan(false);
    document.body.style.backgroundImage =
      "url('https://ultimagz.com/wp-content/uploads/590349.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };
  const perpustakaanHandler = () => {
    setKuliah(false);
    setKantin(false);
    setPerpustakaan(true);
    document.body.style.backgroundImage =
      "url('https://library.vgu.edu.vn/wp-content/uploads/2021/04/fulbright-library.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "100%";
  };
  return (
    <div>
      <p align="right">
        <button onClick={kuliahHandler}>CLASS</button>
        <br />
        <button onClick={kantinHandler}>CANTEEN</button>
        <br />
        <button onClick={perpustakaanHandler}>LIBRARY</button>
      </p>
      {kuliah}
      {kantin}
      {perpustakaan}
    </div>
  );
}

export default UMN;
