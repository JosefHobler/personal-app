import { useAppSelector } from "../../Hooks/useAppSelector";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import Container from "../../Components/Global/Container/Container";
import CustomSwiper from "../../Components/Projekty/Swiper/CustomSwiper";

const Projekty = () => {
  const prevPage = useAppSelector((state) => state.pages.prevPage);

  let animations = prevPage === 2 ? "animation-fadeOut" : "";
  let fadeTopOrBottom = "animation-downEntry";

  if (prevPage !== 3) {
    fadeTopOrBottom = "animation-upEntry";
  }

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Projekty" />
      </div>
      {/* Swiper template, XS */}
      <div
        className={`${fadeTopOrBottom} 
        d-flex d-md-none accessible-page d-flex flex-column justify-content-center position-relative align-items-center`}
        style={{ zIndex: 10 }}
      >
        <Container animations={animations}>
          <CustomSwiper pagination={1} />
        </Container>
      </div>
      {/* Swiper template, MD */}
      <div
        className={`${fadeTopOrBottom} accessible-page   d-md-flex d-xl-none d-none h-100 d-flex flex-column justify-content-center position-relative align-items-center`}
      >
        <Container animations={animations}>
          <CustomSwiper pagination={2} />
        </Container>
      </div>
      {/* Swiper template, XL */}
      <div
        className={`${fadeTopOrBottom} accessible-page  d-xl-flex d-none h-100 d-flex flex-column justify-content-center position-relative align-items-center`}
      >
        <Container animations={animations}>
          <CustomSwiper pagination={3} />
        </Container>
      </div>
    </>
  );
};

export default Projekty;
