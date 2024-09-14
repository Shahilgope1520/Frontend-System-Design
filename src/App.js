import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import About from "./components/About";
import Team from "./components/Team";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header className="bg-black text-white flex mb-2 py-6 ps-3 gap-6">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Team">Team</a>
        <a href="/Login">Login</a>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
