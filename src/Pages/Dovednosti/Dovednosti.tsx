import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import { FC, useContext, useRef } from "react";
import { contextTypes, Scroll, UserContext } from "../../App";
import BackgroundText from "../../Components/BackgroundText";
import "./Dovednosti.scss";
import {
  faSass,
  faGitAlt,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Arrow from "../../Components/Arrow/Arrow";
import MouseScroll from "../../Components/MouseScrollDown/MouseScroll";
import MouseScroll2 from "../../Components/MouseScrollUp/MouseScroll2";
import MouseComponent from "../../Components/MouseComponent/MouseComponent";

const PRIMARY_TECHNOLOGIES = [
  { name: "HTML", rating: 4 },
  { name: "CSS", rating: 3.5 },
  { name: "Javascript", rating: 4 },
  { name: "React", rating: 4 },
  { name: "Git", rating: 3 },
  { name: "Sass", rating: 3 },
];

const OTHER_TECHNOLOGIES = [
  "Typescript",
  "Bootstrap",
  "Redux Toolkit",
  "MUI",
  "NPM",
  "GSAP",
];

interface Props {
  unmounting: boolean;
  sidewaysScroll: (scroll: Scroll) => undefined;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
}

const Dovednosti: FC<Props> = ({
  unmounting,
  sidewaysScroll,
  setCurrentPage,
}) => {
  let animations = "";
  if (unmounting) {
    animations = "animation-fade";
  }

  let fadeTopOrBottom = "animation-left";

  const data = useContext(UserContext) as contextTypes;
  console.log(data);
  if (data.firstLoad) {
  } else if (data.previousPage === 1) {
    fadeTopOrBottom = "animation-right";
  }

  const handleLeft = () => {
    setCurrentPage(1);
    sidewaysScroll(Scroll.left);
  };

  const handleRight = () => {
    setCurrentPage((page) => 5);
    sidewaysScroll(Scroll.right);
  };

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Dovednosti" />
      </div>
      <div
        className={`${animations} h-100 d-flex flex-column justify-content-center position-relative`}
      >
        <div className="container px-5">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-xl-5 col-lg-6 col-md-8 text-center text-md-start">
              <h2 className={`heading-color heading-font ${fadeTopOrBottom}`}>
                Primární technologie
              </h2>
              <ul
                className="p-0 animation-fadeIn"
                style={{ listStyle: "none" }}
              >
                {PRIMARY_TECHNOLOGIES.map(({ name, rating }) => {
                  return (
                    <li className="text-color text-font d-flex mx-auto mx-md-0 ps-sm-3 ps-md-0 justify-content-between w-50 custom-text">
                      <p className="mb-1">{name}</p>
                      <Rating
                        name="half-rating-read"
                        defaultValue={rating}
                        precision={0.5}
                        readOnly
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5">
                <h3
                  className={`heading-color heading-font delay-100 ${fadeTopOrBottom}
                `}
                >
                  Další...
                </h3>
                <ul
                  style={{ listStyle: "none" }}
                  className="p-0 animation-fadeIn _1"
                >
                  {OTHER_TECHNOLOGIES.map((tech) => {
                    return (
                      <li className="text-font text-color custom-text">
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 my-auto col-lg-5 col-md-4 d-none d-md-block d-flex align-items-center justify-content-center animation-fadeIn">
              {/*Cube styles in dovednosti.scss */}
              <div className="scene">
                <div className="cube">
                  <div className="cube-face cube-face-front">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                  </div>
                  <div className="cube-face cube-face-back">
                    <FontAwesomeIcon
                      style={{ transform: "rotateZ(90deg)" }}
                      icon={faCss3}
                      color="#28A4D9"
                    />
                  </div>
                  <div className="cube-face cube-face-left">
                    <FontAwesomeIcon
                      style={{ transform: "rotateZ(90deg)" }}
                      icon={faJsSquare}
                      color="#EFD81D"
                    />
                  </div>
                  <div className="cube-face cube-face-right">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                  </div>
                  <div className="cube-face cube-face-top">
                    <FontAwesomeIcon
                      icon={faGitAlt}
                      style={{ transform: "rotateZ(-90deg)" }}
                      color="#EC4D28"
                    />
                  </div>
                  <div className="cube-face cube-face-bottom">
                    <FontAwesomeIcon icon={faSass} color="#ce679a" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleLeft}
          style={{
            all: "unset",
            left: "5px",
            cursor: "pointer",
            transform: "rotate(180deg)",
          }}
          className="position-absolute align-self-center text-center"
        >
          <Arrow />
        </button>
        <button
          onClick={handleRight}
          style={{ all: "unset", right: "5px", cursor: "pointer" }}
          className="position-absolute align-self-center text-center"
        >
          <Arrow />
        </button>
        <MouseComponent top={true} />
        <MouseComponent top={false} />
      </div>
    </>
  );
};

export default Dovednosti;
