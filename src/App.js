import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import About from "./components/About";
import Team from "./components/Team";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Accordian from "./components/Accordian";
import RedditComment from "./components/RedditComment/RedditComment";
import ImageSlider from "./components/ImageSlider/ImageSlider";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header className="bg-black text-white flex mb-2 py-6 ps-3 gap-6">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Team">Team</a>
        <a href="/Login">Login</a>
        <a href="/Accordian">Accordian</a>
        <a href="/RedditComment">RedditComment</a>
        <a href="/ImageSlider">ImageSlider</a>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="text-black"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/About" element={<About lang={lang} />}></Route>
          </Route>
          <Route path="/Team" element={<Team />}></Route>
          <Route path="/Accordian" element={<Accordian />}></Route>
          <Route path="/RedditComment" element={<RedditComment />}></Route>
          <Route path="/ImageSlider" element={<ImageSlider />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
