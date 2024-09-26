import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import bday from "./images/birthday.jpeg";
import wed from "./images/wedding.jpeg";
import greet from "./images/greetings.jpeg";
import Edit from "./Edit";
import { Link, Route, Routes } from "react-router-dom";
import { VoiceRecorder } from "react-voice-recorder-player";

function App() {
  const [temps, setTemps] = useState("");

  const [message, setMessage] = useState("");
  const [birthday, setBirthday] = useState(
    <img src={bday} alt="bday" style={{ height: "200px" }} />
  );
  const handleBirthday = () => {
    setTemps(
      <Link to="/edit">
        <img src={bday} alt="bday" style={{ height: "200px" }} />
      </Link>
    );
  };
  const [wedding, setWedding] = useState(
    <img src={wed} alt="bday" style={{ height: "200px" }} />
  );
  const handleWedding = () => {
    setTemps(<img src={wed} alt="bday" style={{ height: "200px" }} />);
  };
  const [greetings, setGreetings] = useState(
    <img src={greet} alt="bday" style={{ height: "200px" }} />
  );
  const handleGreetings = () => {
    setTemps(<img src={greet} alt="bday" style={{ height: "200px" }} />);
  };
  const handleEdit = () => {
    setTemps(
      <>
        <div>
          <img src={bday} alt="bday" style={{ height: "400px" }} />
          <h2>{message}</h2>
        </div>
        <div>
          <label>Add Message</label>
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </>
    );
  };
  return (
    <div className="App">
      <div className="navbar">
        <h1>GIFT CARDS</h1>
        <div className="options">
          <h3 onClick={handleBirthday}>Birthday</h3>
          <h3 onClick={handleWedding}>Wedding</h3>
          <h3 onClick={handleGreetings}>Greetings</h3>
        </div>
      </div>
      <div className="home-con">
        <div>{temps}</div>
      </div>
      <Routes>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>

      <div>
        <h1>React Voice Recorder</h1>
        <VoiceRecorder />
      </div>
    </div>
  );
}

export default App;
