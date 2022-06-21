import { Link } from "react-router-dom";

import Image2 from "../../Assets/MainImages/Image2.png";

import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { pageSliceAction } from "../../Store/pagesSlice";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import CTAButton from "../../Components/Global/CallToAction/CTAButton";
import Container from "../../Components/Global/Container/Container";

const Domů = () => {
  const dispatch = useAppDispatch();
  const prevPage = useAppSelector((state) => state.pages.prevPage);

  let animations = prevPage === 0 ? "animation-fadeOut" : "";

  let fadeTopOrBottom = "animation-upEntry";
  if (prevPage !== 3) {
    fadeTopOrBottom = "animation-downEntry";
  }

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Domů" />
      </div>
      <Container animations={animations}>
        <div
          className="d-flex justify-content-around align-items-center accessible-page "
          style={{ zIndex: 10 }}
        >
          <div
            className="text-center text-md-start px-5 d-flex flex-column justify-content-center"
            style={{ zIndex: 100 }}
          >
            <h1
              className={`heading-font heading-color ${fadeTopOrBottom} ${
                fadeTopOrBottom === "animation-downEntry" ? "delay-2" : ""
              }`}
            >
              Josef Hobler
            </h1>
            <p
              className={`mb-3 custom-text text-color text-font ${fadeTopOrBottom} delay-1`}
            >
              Jsem mladý ambiciózní junior front-end developer, který v týmu
              podpoří pozitivní a přátelskou atmosféru a bude plnit úkoly s
              nejvyšším nasazením.
            </p>
            <div
              className={`${fadeTopOrBottom} ${
                fadeTopOrBottom === "animation-downEntry" ? "" : "delay-2"
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
          <div className="col-md-3"></div>
          <div
            className="d-none d-md-flex align-items-center justify-content-end"
            style={{ zIndex: 100 }}
          >
            {/*Image here*/}
            <img
              className="animation-fadeIn img-fluid"
              style={{
                transform: "scale(1.5)",
                borderRadius: "7rem",
                filter: "drop-shadow(0px 0px 39px #000)",
              }}
              src={Image2}
              alt="Já"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Domů;
