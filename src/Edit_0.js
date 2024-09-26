import { useState } from "react";
import bday from "./images/birthday.jpeg";

const Edit = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="edit-con">
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${bday})`,
          width: "300px",
          height: "420px",
        }}
      >
        <h3>{message}</h3>
      </div>
      <div className="message">
        <input
          type="text"
          placeHolder="Add Message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Edit;
