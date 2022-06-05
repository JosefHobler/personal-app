import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import { FC, useRef } from "react";
import { Scroll } from "../App";
import BackgroundText from "../Components/BackgroundText";
import Arrow from "../Images/Feather-arrows-arrow-down.svg";
import "./Dovednosti.scss";
import {
  faSass,
  faGitAlt,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

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
            <div className="col-6">
              <ul></ul>
              <li className="d-flex justify-content-between w-50">
                <p>HTML</p>
                <Rating
                  style={{ lineHeight: "100px" }}
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
              </li>
              <li className="d-flex justify-content-between w-50">
                <p>CSS</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={3.5}
                  precision={0.5}
                  readOnly
                />
              </li>
              <li className="d-flex justify-content-between w-50">
                <p>Javascript</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
              </li>
              <li className="d-flex justify-content-between w-50">
                <p>React</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
              </li>
              <li className="d-flex justify-content-between w-50">
                <p>Git</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={3}
                  precision={0.5}
                  readOnly
                />
              </li>
              <li className="d-flex justify-content-between w-50">
                <p>Sass</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={3}
                  precision={0.5}
                  readOnly
                />
              </li>
              <div className="mt-5">
                <h5>Další technologie</h5>
                <p>Typescript</p>
                <p>Bootstrap</p>
                <p>Redux toolkit</p>
                <p>MUI</p>
                <p>NPM</p>
                <p>GSAP</p>
              </div>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center">
              {/*Cube styles in dovednosti.scss */}
              <div className="scene">
                <div className="cube">
                  <div className="cube-face cube-face-front">
                    <FontAwesomeIcon icon={faHtml5} />
                  </div>
                  <div className="cube-face cube-face-back">
                    <FontAwesomeIcon icon={faCss3} />
                  </div>
                  <div className="cube-face cube-face-left">
                    <FontAwesomeIcon icon={faJsSquare} />
                  </div>
                  <div className="cube-face cube-face-right">
                    <FontAwesomeIcon icon={faReact} />
                  </div>
                  <div className="cube-face cube-face-top">
                    <FontAwesomeIcon icon={faGitAlt} />
                  </div>
                  <div className="cube-face cube-face-bottom">
                    <FontAwesomeIcon icon={faSass} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleRight}
          style={{ right: 0, transform: "rotate(-90deg)" }}
          className="position-absolute align-self-center text-center"
        >
          <img style={{ width: "50px" }} src={Arrow} alt="h" />
        </button>
        <button
          onClick={handleLeft}
          style={{ left: 0, transform: "rotate(90deg)" }}
          className="position-absolute align-self-center text-center"
        >
          <img style={{ width: "50px" }} src={Arrow} alt="h" />
        </button>
        <div className="position-absolute bottom-0 align-self-center text-center">
          <p>Scroll</p>
          <img style={{ width: "50px" }} src={Arrow} alt="h" />
        </div>
      </div>
    </>
  );
};

export default Dovednosti;
