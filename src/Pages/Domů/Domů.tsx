import { FC, useContext } from "react";
import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import Konzultant from "../../Assets/Images/Konzultant.png";
import { Link } from "react-router-dom";
import CTAButton from "../../Components/Global/CallToAction/CTAButton";
import "./Domů.scss";
import { UserContext } from "../../App";
import { contextTypes } from "../../setup";
import { PagesProps } from "../../setup";
import { useDispatch } from "react-redux";
import { pageSliceAction } from "../../Store/pagesSlice";

const Domů: FC<PagesProps> = ({ unmounting }) => {
  let animations = "";
  if (unmounting) {
    animations = "animation-fade";
  }

  const dispatch = useDispatch();

  let fadeTopOrBottom = "animation-up";
  const data = useContext(UserContext) as contextTypes;
  if (data.firstLoad) {
  } else if (data.previousPage !== 3) {
    fadeTopOrBottom = "animation-down";
  }

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Domů" />
      </div>
      <div
        className={`${animations} h-100 d-flex flex-column justify-content-center container`}
      >
        <div className="row">
          <div
            className="col-md-6 text-center text-md-start px-5 d-flex flex-column justify-content-center"
            style={{ zIndex: 100 }}
          >
            <h1
              className={`heading-font heading-color ${fadeTopOrBottom} ${
                fadeTopOrBottom === "animation-down" ? "delay-200" : ""
              }`}
            >
              Josef Hobler
            </h1>
            <p
              className={`mb-3 custom-text text-color text-font ${fadeTopOrBottom} delay-100`}
            >
              Jsem mladý ambiciózní junior front-end developer, který v týmu
              podpoří pozitivní a přátelskou atmosféru a bude plnit úkoly s
              nejvyšším nasazením.
            </p>
            <div
              className={`${fadeTopOrBottom} ${
                fadeTopOrBottom === "animation-down" ? "" : "delay-200"
              }`}
            >
              <Link
                onClick={() => dispatch(pageSliceAction.changeCurPage(3))}
                style={{ all: "unset" }}
                to="/Kontakt"
              >
                <CTAButton padding={3} text="Kontakt" />
              </Link>
            </div>
          </div>
          <div
            className="col-md-6 d-none d-md-block d-flex align-items-center justify-content-center"
            style={{ zIndex: 100 }}
          >
            <img
              className="animation-fadeIn img-fluid h-75"
              src={Konzultant}
              alt="Já"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Domů;
