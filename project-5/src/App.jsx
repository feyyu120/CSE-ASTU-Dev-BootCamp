import Statics from "./Statics.jsx";
import { useState } from "react";
import "./index.css";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./assets/background.jpg";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <div className="App">
        <div className={dark ? "dark" : "light"}>
          <Header dark={dark} setDark={setDark} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statics" element={<Statics />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
