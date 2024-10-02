import { useState } from "react";
import { Link } from "react-router-dom";

import Edit from "./Edit";
import b0 from "./images/Birthday/birth0.jpeg";
import b1 from "./images/Birthday/birth1.jpeg";
import b2 from "./images/Birthday/birth2.jpeg";
import b3 from "./images/Birthday/birth3.jpeg";
import b4 from "./images/Birthday/birth4.jpeg";

import g0 from "./images/Greetings/greet0.jpeg";
import g1 from "./images/Greetings/greet1.jpeg";
import g2 from "./images/Greetings/greet2.jpeg";
import g3 from "./images/Greetings/greet3.jpeg";
import g4 from "./images/Greetings/greet4.jpeg";

import w0 from "./images/Wedding/wed0.jpeg";
import w1 from "./images/Wedding/wed1.jpeg";
import w2 from "./images/Wedding/wed2.jpeg";
import w3 from "./images/Wedding/wed3.jpeg";

import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  /*Image Lists */
  const bdayImgList = [b0, b1, b2, b3, b4, b4];
  const wedImgList = [w0, w1, w2, w3, w3];
  const greetImgList = [g0, g1, g2, g3, g4, g4];
  const tempsImgList = [g0, w0, b0, g1, w1, b1, g2, w2, b2, g3, w3, b3, g4, b4];

  const [temps, setTemps] = useState(
    <div className="temp-img-con">
      {tempsImgList.map((pic) => (
        <div onClick={() => handleImgClick(pic)}>
          <img
            src={pic}
            alt="bday"
            style={{ boxShadow: "0 4px 8px #cecbcb" }}
            className="temps-img"
          />
        </div>
      ))}
    </div>
  );

  const [burgerMenu, setburgerMenu] = useState("none");
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    if (menu) {
      setburgerMenu("none");
    } else {
      setburgerMenu("flex");
    }
  };
  const handleBirthday = () => {
    setTemps(
      <div className="temp-img-con">
        {bdayImgList.map((pic) => (
          <div onClick={() => handleImgClick(pic)}>
            <img
              src={pic}
              alt="bday"
              style={{ boxShadow: "0 4px 8px #cecbcb" }}
              className="temps-img"
            />
          </div>
        ))}
      </div>
    );
  };
  const handleWedding = () => {
    setTemps(
      <div className="temp-img-con">
        {wedImgList.map((pic) => (
          <div onClick={() => handleImgClick(pic)}>
            <img
              src={pic}
              alt="bday"
              style={{ boxShadow: "0 4px 8px #cecbcb" }}
              className="temps-img"
            />
          </div>
        ))}
      </div>
    );
  };
  const handleGreetings = () => {
    setTemps(
      <div className="temp-img-con">
        {greetImgList.map((pic) => (
          <div onClick={() => handleImgClick(pic)}>
            <img
              src={pic}
              alt="bday"
              style={{ boxShadow: "0 4px 8px #cecbcb" }}
              className="temps-img"
            />
          </div>
        ))}
      </div>
    );
  };

  const handleImgClick = (pict) => {
    setTemps(
      <>
        <Edit pic={pict} />
      </>
    );
  };
  return (
    <div className="navbar-con">
      <div className="navbar">
        <Link to="/">
          <h1>GIFT CARDS</h1>
        </Link>
        <div className="menu-con">
          <div className="menu-icon-con">
            <TiThMenu className="menu-icon" onClick={toggleMenu} />
          </div>
          <div className="options menu" style={{ display: burgerMenu }}>
            <h3 onClick={handleBirthday} className="hover">
              Birthday
            </h3>
            <h3 onClick={handleWedding} className="hover">
              Wedding
            </h3>
            <h3 onClick={handleGreetings} className="hover">
              Greetings
            </h3>
          </div>
        </div>
        <div className="options">
          <h3 onClick={handleBirthday} className="hover">
            Birthday
          </h3>
          <h3 onClick={handleWedding} className="hover">
            Wedding
          </h3>
          <h3 onClick={handleGreetings} className="hover">
            Greetings
          </h3>
        </div>
      </div>

      <div className="temps-view">{temps}</div>
    </div>
  );
};

export default Navbar;
