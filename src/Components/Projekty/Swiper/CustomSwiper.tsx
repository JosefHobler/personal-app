import { FC } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import dataJSON from "../../../Data/Projekty/data.json";
import uuid from "react-native-uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { JSONValuesProjekty } from "../../../setup";
interface Props {
  pagination: number;
}
const CustomSwiper: FC<Props> = ({ pagination }) => {
  const { data }: JSONValuesProjekty = dataJSON;
  console.log(typeof data, data);
  const mapProjects = () => {
    return data.map(({ image, text: { body, heading }, link }) => {
      return (
        <SwiperSlide key={uuid.v4() as string} className="animation-darken">
          <img
            className="animation-fadeIn delay-9  img-fluid"
            src={require(`../../../Assets/Projects/${image}`)}
          />
          <div className="animation-fadeIn delay-11 ">
            <h5 className="text-center pt-2 heading-font heading-color">
              {heading}
            </h5>
            <p className="px-3 text-font text-color custom-text">{body}</p>
            <div
              className="position-absolute"
              style={{ right: "5px", bottom: "5px" }}
            >
              <a className="text-font text-color custom-text" href={link}>
                {link}
              </a>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={pagination}
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
      {mapProjects()}
    </Swiper>
  );
};

export default CustomSwiper;
