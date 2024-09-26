import { useState } from "react";
import bubbles from "./images/bubbles.jpg";
import greetcard from "./images/greeting-card.png";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import b1 from "./images/Hero/birthday1.png";
import b2 from "./images/Hero/birthday.png";
import confetti from "./images/Hero/confetti.png";
import surprise from "./images/Hero/surprise-box.png";
import wedding from "./images/Hero/wedding-couple.png";
import newyear from "./images/Hero/happy-new-year.png";
import fire from "./images/Hero/new-year.png";

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
  return (
    <div style={{ backgroundColor: "darkslategray" }}>
      <div className="navbar">
        <Link to="/" className="navbar-links">
          <h1>GIFT CARDS</h1>
        </Link>
        <div className="options">
          <Link to="/nav" className="navbar-links">
            <h3>Cards</h3>
          </Link>
          <Link className="navbar-links">
            <h3>Pricing</h3>
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
              <h1>isicing Tempora</h1>
              <Link to="/nav" className="splash-btn">
                <h3>Cards</h3>
                <MdOutlineKeyboardDoubleArrowRight />
              </Link>
            </div>
            <div
              className="splash-img"
              style={{ backgroundImage: `url(${greetcard})` }}
            ></div>
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
            <div
              className="splash-img"
              style={{ backgroundImage: `url(${wedding})` }}
            ></div>
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
            <div
              className="splash-img"
              style={{ backgroundImage: `url(${fire})` }}
            ></div>
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
            <div
              className="splash-img"
              style={{ backgroundImage: `url(${newyear})` }}
            ></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
