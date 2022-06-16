import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import "./Projekty.scss";

import { useAppSelector } from "../../Hooks/useAppSelector";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import Container from "../../Components/Global/Container/Container";

const Projekty = () => {
  const prevPage = useAppSelector((state) => state.pages.prevPage);
  let animations = prevPage === 2 ? "animation-fade" : "";
  let fadeTopOrBottom = "animation-down";
  if (prevPage !== 3) {
    fadeTopOrBottom = "animation-up";
  }

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Projekty" />
      </div>
      <div
        className={`${fadeTopOrBottom} d-flex d-md-none h-100 d-flex flex-column justify-content-center position-relative align-items-center`}
      >
        <Container animations={animations}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper h-75 w-75 py-4"
          >
            <SwiperSlide className="animation-darken">
              <img
                className="image-fadeIn img-fluid"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
              />
              <div className="text-fadeIn">
                <h5 className="text-center pt-2 heading-font heading-color">
                  Osobní stránka
                </h5>
                <p className="px-3 text-font text-color custom-text">
                  Moje osobní webová stránka sloužící jako ukázka mé práce
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="animation-darken">
              <img
                className="image-fadeIn img-fluid"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
              />
              <div className="text-fadeIn">
                <h5 className="text-center pt-2 heading-font heading-color">
                  Lorem, ipsum dolor.
                </h5>
                <p className="px-3 text-font text-color custom-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  dolor.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
      <div
        className={`${fadeTopOrBottom} d-md-flex d-xl-none d-none h-100 d-flex flex-column justify-content-center position-relative align-items-center`}
      >
        <Container animations={animations}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper h-75 w-75 py-4"
          >
            <SwiperSlide className="animation-darken">
              <img
                className="image-fadeIn img-fluid"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
              />
              <div className="text-fadeIn">
                <h5 className="text-center pt-2 heading-font heading-color">
                  Osobní stránka
                </h5>
                <p className="px-3 text-font text-color custom-text">
                  Moje osobní webová stránka sloužící jako ukázka mé práce
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="animation-darken">
              <img
                className="image-fadeIn img-fluid"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
              />
              <div className="text-fadeIn">
                <h5 className="text-center pt-2 heading-font heading-color">
                  Lorem, ipsum dolor.
                </h5>
                <p className="px-3 text-font text-color custom-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  dolor.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
      <div
        className={`${fadeTopOrBottom} d-xl-flex d-none h-100 d-flex flex-column justify-content-center position-relative align-items-center`}
      >
        <Container animations={animations}>
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
            className="mySwiper h-75 w-75 py-4"
          >
            <SwiperSlide className="animation-darken">
              <img
                className="image-fadeIn img-fluid"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
              />
              <div className="text-fadeIn">
                <h5 className="text-center pt-2 heading-font heading-color">
                  Osobní stránka
                </h5>
                <p className="px-3 text-font text-color custom-text">
                  Moje osobní webová stránka sloužící jako ukázka mé práce
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="animation-darken">
              <img
                className="image-fadeIn img-fluid"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
              />
              <div className="text-fadeIn">
                <h5 className="text-center pt-2 heading-font heading-color">
                  Lorem, ipsum dolor.
                </h5>
                <p className="px-3 text-font text-color custom-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  dolor.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default Projekty;
