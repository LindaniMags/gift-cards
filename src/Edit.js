import { useState } from "react";
import { VoiceRecorder } from "react-voice-recorder-player";

import adp from "./images/Spons/adp.png";
import bnb from "./images/Spons/airbnb.png";
import amazon from "./images/Spons/amazon.png";
import coke from "./images/Spons/cocacola.png";
import ebay from "./images/Spons/ebay.png";
import exp from "./images/Spons/expedia.png";
import nike from "./images/Spons/nike.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle";

const Edit = (props) => {
  const styles = {
    mainContainerStyle: {
      backgroundColor: "gray",
      border: "1px solid black",
      borderRadius: "5px",
      padding: "10px",
    },
    controllerContainerStyle: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
    },
    controllerStyle: {
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: "5px",
      cursor: "pointer",
      padding: "5px",
    },
    waveContainerStyle: {
      height: "100px",
      marginTop: "10px",
      width: "100%",
    },
  };

  const [message, setMessage] = useState("");
  return (
    <div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ height: "300px" }}
        >
          <SwiperSlide>
            <div className="swiper-img-wrap">
              <h1 style={{ color: "red" }}>Slide 1</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-wrap">
              <h1 style={{ color: "yellow" }}>Slide 2</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-wrap">
              <h1 style={{ color: "blue" }}>Slide 3</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-wrap">
              <h1 style={{ color: "green" }}>Slide 4</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="edit-con">
        <div
          className="bg-img"
          style={{
            backgroundImage: `url(${props.pic})`,
            width: "300px",
            height: "420px",
          }}
        >
          <h3>{message}</h3>
        </div>
        <div className="input-con">
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
          <div className="voice-rec-con">
            <VoiceRecorder />
          </div>
          <div className="voucher">
            <h3>Add Voucher</h3>
          </div>
        </div>
      </div>
      <div className="swiper-con">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ height: "160px" }}
        >
          <SwiperSlide className="swiper-img">
            <img src={adp} alt="adp-logo" className="brand-logo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <img src={nike} alt="nike-logo" className="brand-logo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <img src={amazon} alt="amazon-logo" className="brand-logo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <img src={coke} alt="coke-logo" className="brand-logo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <img src={exp} alt="exp-logo" className="brand-logo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <img src={ebay} alt="ebay-logo" className="brand-logo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <img src={amazon} alt="amazon-logo" className="brand-logo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <img src={adp} alt="adp-logo" className="brand-logo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Edit;
