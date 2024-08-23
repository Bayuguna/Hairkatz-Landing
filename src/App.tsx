import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MediaApp } from "./views/test/inheritance_polymorf_abstrraction";
import HomePage from "./views/home";
import { Route, Routes } from "react-router-dom";
import ComingSoonPage from "./views/coming_soon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/coming_soon" element={<ComingSoonPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
