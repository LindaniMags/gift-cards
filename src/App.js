import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Edit from "./Edit";
import { Link, Route, Routes } from "react-router-dom";
import { VoiceRecorder } from "react-voice-recorder-player";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
