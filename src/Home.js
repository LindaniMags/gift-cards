import { useState } from "react";
import greetcard from "./images/greeting-card.png";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import b1 from "./images/Hero/birthday1.png";
import b2 from "./images/Hero/birthday.png";
import confetti from "./images/Hero/confetti.png";
import surprise from "./images/Hero/surprise-box.png";
import wedding from "./images/Hero/wedding-couple.png";
import newyear from "./images/Hero/happy-new-year.png";
import fire from "./images/Hero/new-year.png";

import { TiThMenu } from "react-icons/ti";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";

const Home = () => {
  const [hero, setHero] = useState("Hi from Hero");
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
  return (
    <div style={{ backgroundColor: "darkslategray" }}>
      <div className="navbar">
        <Link to="/" className="navbar-links">
          <h1>GIFT CARDS</h1>
        </Link>
        <div className="menu-con">
          <div className="menu-icon-con">
            <TiThMenu className="menu-icon" onClick={toggleMenu} />
          </div>
          <div className="options home-menu" style={{ display: burgerMenu }}>
            <h3 className="navbar-links">Cards</h3>
            <h3 className="navbar-links">Pricing</h3>
            <h3 className="navbar-links">About</h3>
            <h3 className="navbar-links">FAQ</h3>
            <h3 className="navbar-links">Account</h3>
          </div>
        </div>
        <div className="options">
          <Link to="/nav" className="navbar-links">
            <h3>Cards</h3>
          </Link>
          <Link className="navbar-links">
            <h3>Pricing</h3>
          </Link>
          <Link className="navbar-links">
            <h3>About</h3>
          </Link>
          <Link className="navbar-links">
            <h3>FAQ</h3>
          </Link>
          <Link className="navbar-links">
            <h3>Account</h3>
          </Link>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        Autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="splash-con">
            <div className="splash-text">
              <h1>Lorem ipsum dolor</h1>
              <h1>consectetur adipisi</h1>
              <Link to="/nav" className="splash-btn">
                <h3>Cards</h3>
                <MdOutlineKeyboardDoubleArrowRight />
              </Link>
            </div>
            <div className="splash-img">
              <img src={greetcard} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="splash-con">
            <div className="splash-text">
              <h1>Occassions</h1>
              <Link to="/nav" className="splash-btn">
                <h3>Cards</h3>
                <MdOutlineKeyboardDoubleArrowRight />
              </Link>
            </div>
            <div className="splash-img">
              <img src={wedding} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="splash-con">
            <div className="splash-text">
              <h1>Birthdays</h1>
              <Link to="/nav" className="splash-btn">
                <h3>Cards</h3>
                <MdOutlineKeyboardDoubleArrowRight />
              </Link>
            </div>
            <div className="splash-img">
              <img src={fire} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="splash-con">
            <div className="splash-text">
              <h1>Holidays</h1>
              <Link to="/nav" className="splash-btn">
                <h3>Cards</h3>
                <MdOutlineKeyboardDoubleArrowRight />
              </Link>
            </div>
            <div className="splash-img">
              <img src={newyear} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
