import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectChar from "./selectChar";
import About from "./about";
import Apptwo from "./App2";
import News from "./components/buttons/News/News";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SelectChar />} />
      <Route path="/about" element={<About />} />
      <Route path="/App2" element={<Apptwo />} />
      <Route path="/News" element={<News />} />
    </Routes>
  );
}
