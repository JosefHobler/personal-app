import { FC } from "react";
import { useSwipeable } from "react-swipeable";

import "./Omně.scss";
import Konzultant from "../../Assets/Images/Konzultant.png";

import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { PagesProps } from "../../setup";
import { SCROLL_HORIZONTAL } from "../../setup";
import { pageSliceAction } from "../../Store/pagesSlice";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import CustomizedRating from "../../Components/Dovednosti/CustomizedRating";
import CTAButton from "../../Components/Global/CallToAction/CTAButton";
import Arrow from "../../Components/Global/HorizontalPointer/Arrow";
import Container from "../../Components/Global/Container/Container";

const Omně: FC<PagesProps> = ({ sidewaysScroll }) => {
  const dispatch = useAppDispatch();
  const prevPage = useAppSelector((state) => state.pages.prevPage);
  let animations = prevPage === 1 ? "animation-fade" : "";
  const handlersHorizontal = useSwipeable({
    onSwipedLeft: (eventData) => handleClick(),
  });

  const handleClick = () => {
    sidewaysScroll(SCROLL_HORIZONTAL.right);
    dispatch(pageSliceAction.changeCurPage(4));
  };

  let fadeTopOrBottom = "animation-up";

  if (prevPage === 2) {
    fadeTopOrBottom = "animation-down";
  }
  if (prevPage === 4) {
    fadeTopOrBottom = "animation-left";
  }

  return (
    <>
      <div className={animations}>
        <BackgroundText text="O mně" />
      </div>
      <Container
        animations={animations}
        handlersHorizontal={handlersHorizontal}
      >
        <div className="container px-5">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h2
                  className={`heading-font heading-color ${fadeTopOrBottom}
                ${fadeTopOrBottom === "animation-down" ? "delay-200" : ""}
                `}
                >
                  Profil
                </h2>
                <p
                  className={`custom-text text-font text-color animation-fadeIn
                ${fadeTopOrBottom === "animation-down" ? "_2" : ""}
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
                  className={`heading-font heading-color ${fadeTopOrBottom} delay-100
                `}
                >
                  Vzdělání
                </h2>
                <p className="custom-text text-font text-color  animation-fadeIn _1">
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
                ${fadeTopOrBottom === "animation-down" ? "" : "delay-200"}
                `}
                >
                  Jazyky
                </h2>
                <div
                  className={`
                ${fadeTopOrBottom === "animation-down" ? "" : "_2"}
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
                    <CustomizedRating value={1.5} />
                  </div>
                </div>
              </div>
              <div
                className={`mt-4 ${fadeTopOrBottom}
                ${fadeTopOrBottom === "animation-down" ? "" : "delay-300"}
                `}
              >
                <CTAButton padding={3} text="Životopis" rounded={true} />
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block animation-fadeIn d-flex justify-content-center align-items-center">
              <img src={Konzultant} style={{ width: "55%" }} alt="fwfw" />
            </div>
          </div>
        </div>
        <Arrow onClick={handleClick} left={false} />
      </Container>
    </>
  );
};

export default Omně;
