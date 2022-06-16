import { Link } from "react-router-dom";

import "./Domů.scss";
import Konzultant from "../../Assets/Images/Konzultant.png";

import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { pageSliceAction } from "../../Store/pagesSlice";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import CTAButton from "../../Components/Global/CallToAction/CTAButton";
import Container from "../../Components/Global/Container/Container";

const Domů = () => {
  const dispatch = useAppDispatch();
  const prevPage = useAppSelector((state) => state.pages.prevPage);

  let animations = prevPage === 0 ? "animation-fade" : "";

  let fadeTopOrBottom = "animation-up";
  if (prevPage !== 3) {
    fadeTopOrBottom = "animation-down";
  }

  return (
    <>
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
          Jsem mladý ambiciózní junior front-end developer, který v týmu podpoří
          pozitivní a přátelskou atmosféru a bude plnit úkoly s nejvyšším
          nasazením.
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
      <div className={animations}>
        <BackgroundText text="Domů" />
      </div>
      <Container animations={animations}>
        <div className="row">
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
      </Container>
    </>
  );
};

export default Domů;
