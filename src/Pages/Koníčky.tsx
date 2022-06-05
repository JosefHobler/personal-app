import React, { FC } from "react";
import { Link } from "react-router-dom";
import BackgroundText from "../Components/BackgroundText";
import "./Koníčky.scss";
import Arrow from "../Images/Feather-arrows-arrow-down.svg";
import { Scroll } from "../App";

interface Props {
  unmounting: boolean;
  sidewaysScroll: (scroll: Scroll) => undefined;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
}

const Koníčky: FC<Props> = ({ unmounting, sidewaysScroll, setCurrentPage }) => {
  let animations = "";
  if (unmounting) {
    animations = "animation-fade";
  }

  const handleClick = () => {
    setCurrentPage(4);
    sidewaysScroll(Scroll.left);
  };

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Koníčky" />
      </div>

      <div
        className={`${animations} h-100 d-flex flex-column justify-content-center position-relative`}
      >
        <div className="container px-5">
          <div className="custom-grid">
            <div className="grid-1">rge</div>
            <div className="grid-2">fwf</div>
            <div className="grid-3">wfwf</div>
            <div className="grid-4">fwfw</div>
            <div className="grid-5">fwf</div>
            <div className="grid-6">fwf</div>
            <div className="grid-7">wwww</div>
          </div>
        </div>
        <button
          onClick={handleClick}
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

export default Koníčky;
