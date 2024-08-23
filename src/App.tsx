import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MediaApp } from "./views/test/inheritance_polymorf_abstrraction";
import HomePage from "./views/home";
import { Route, Routes } from "react-router-dom";
import ComingSoonPage from "./views/coming_soon";
import app from "./utils/constant/app";

function App() {
  return (
    <>
      <Routes>
        {app.APP_MODE === "development" && (
          <>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/coming_soon" element={<ComingSoonPage />}></Route>
          </>
        )}

        {app.APP_MODE === "production" && (
          <>
            <Route path="/" element={<ComingSoonPage />}></Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
