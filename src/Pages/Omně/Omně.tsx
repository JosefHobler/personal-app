import { FC, useLayoutEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./Omně.scss";
import Image1 from "../../Assets/MainImages/Image1.png";
import Image3 from "../../Assets/MainImages/Image3.png";
import Image4 from "../../Assets/MainImages/Image4.png";
import Image5 from "../../Assets/MainImages/Image5.png";

import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { PagesProps } from "../../setup";
import { SCROLL_HORIZONTAL } from "../../setup";
import { pageSliceAction } from "../../Store/pagesSlice";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import CustomizedRating from "../../Components/Dovednosti/CustomizedRating";
import Arrow from "../../Components/Global/HorizontalPointer/Arrow";
import Container from "../../Components/Global/Container/Container";

const Omně: FC<PagesProps> = ({ sidewaysScroll }) => {
  const [image, setImage] = useState(Image1);
  const dispatch = useAppDispatch();
  const prevPage = useAppSelector((state) => state.pages.prevPage);
  let animations = prevPage === 1 ? "animation-fadeOut" : "";
  const handlersHorizontal = useSwipeable({
    onSwipedLeft: () => handleClick(),
    delta: 100,
  });

  const handleClick = () => {
    sidewaysScroll(SCROLL_HORIZONTAL.right);
    dispatch(pageSliceAction.changeCurPage(4));
  };

  let fadeTopOrBottom = "animation-upEntry";

  if (prevPage === 2) {
    fadeTopOrBottom = "animation-downEntry";
  }
  if (prevPage === 4) {
    fadeTopOrBottom = "animation-leftEntry";
  }
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setImage((image) =>
        image === Image1
          ? Image5
          : image === Image5
          ? Image3
          : image === Image3
          ? Image4
          : Image1
      );
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={animations}>
        <BackgroundText text="O mně" />
      </div>
      <Container
        animations={animations}
        handlersHorizontal={handlersHorizontal}
      >
        <div className="container px-5 accessible-page">
          <div className="accessible-page row align-items-center">
            <div className="col-md-6">
              <div>
                <h2
                  className={`heading-font heading-color ${fadeTopOrBottom}
                ${fadeTopOrBottom === "animation-downEntry" ? "delay-2" : ""}
                `}
                >
                  Profil
                </h2>
                <p
                  className={`custom-text text-width-5 text-font text-color animation-fadeIn
                ${
                  fadeTopOrBottom === "animation-downEntry"
                    ? "delay-10"
                    : "delay-8"
                }
                `}
                >
                  Motivovaný a pracovitý student hledající uplatnění v praxi.
                  Sebevědomí, pracovitost a odhodlání dosahovat nejlepších
                  výsledků v oblasti tvorby webových stránek. Ochotný učit se
                  novým věcem a zlepšovat v navyklých.
                </p>
              </div>
              <div>
                <h2
                  className={`heading-font heading-color ${fadeTopOrBottom} delay-1
                `}
                >
                  Vzdělání
                </h2>
                <p
                  className={`custom-text text-font text-color  animation-fadeIn 
                delay-9
                `}
                >
                  Studuji třetím rokem na{" "}
                  <a
                    target="_blank"
                    href="https://gyza.cz/"
                    className="text-info text-color"
                  >
                    Gymnáziu v Zábřeze na Moravě
                  </a>
                  .
                </p>
              </div>
              <div>
                <h2
                  className={`heading-font heading-color ${fadeTopOrBottom}
                  ${fadeTopOrBottom === "animation-downEntry" ? "" : "delay-2"}
                `}
                >
                  Jazyky
                </h2>
                <div
                  className={`
                  ${
                    fadeTopOrBottom === "animation-downEntry"
                      ? "delay-8"
                      : "delay-10"
                  }
                animation-fadeIn`}
                >
                  <div className="d-flex align-items-start gap-3 custom-text">
                    <p className="text-font text-color mb-1">Čeština</p>
                    <CustomizedRating value={4} />
                  </div>
                  <div className="d-flex align-items-start gap-3 custom-text">
                    <p className="text-font text-color mb-1">Angličtina</p>
                    <CustomizedRating value={3.5} />
                  </div>
                  <div className="d-flex align-items-start gap-3 custom-text">
                    <p className="text-font text-color">Španělština</p>
                    <CustomizedRating value={1} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 d-none d-md-block d-flex justify-content-center align-items-center"
              style={{ padding: "5vw" }}
            >
              <div className="image-wrapper">
                <div className="multiple-animations">
                  {image === Image1 && <img src={Image1} alt="já" />}
                  {image === Image3 && <img src={Image3} alt="já" />}
                  {image === Image4 && <img src={Image4} alt="já" />}
                  {image === Image5 && <img src={Image5} alt="já" />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Arrow onClick={handleClick} left={false} />
      </Container>
    </>
  );
};

export default Omně;
