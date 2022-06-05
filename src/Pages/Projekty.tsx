import React, { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../Images/Feather-arrows-arrow-down.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import BackgroundText from "../Components/BackgroundText";

interface Props {
  unmounting: boolean;
}

const Projekty: FC<Props> = ({ unmounting }) => {
  let animations = "";
  if (unmounting) {
    animations = "animation-fade";
  }

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Projekty" />
      </div>
      <div
        className={`${animations} h-100 d-flex flex-column justify-content-center position-relative align-items-center`}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper h-75 w-100"
        >
          <SwiperSlide>
            <img
              className="img-fluid"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
            <h5>Lorem, ipsum dolor.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              dolor.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img-fluid"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
            <h5>Lorem, ipsum dolor.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              dolor.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img-fluid"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
            <h5>Lorem, ipsum dolor.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              dolor.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img-fluid"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
            <h5>Lorem, ipsum dolor.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              dolor.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img-fluid"
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
            <h5>Lorem, ipsum dolor.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              dolor.
            </p>
          </SwiperSlide>
        </Swiper>
        <div className="position-absolute bottom-0 align-self-center text-center">
          <p>Scroll</p>
          <img style={{ width: "50px" }} src={Arrow} alt="h" />
        </div>
      </div>
    </>
  );
};

export default Projekty;
