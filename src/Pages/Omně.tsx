import { Rating } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Scroll } from "../App";
import BackgroundText from "../Components/BackgroundText";
import Arrow from "../Images/Feather-arrows-arrow-down.svg";

interface Props {
  unmounting: boolean;
  sidewaysScroll: (scroll: Scroll) => undefined;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
}

const Omně: FC<Props> = ({ unmounting, setCurrentPage, sidewaysScroll }) => {
  let animations = "";
  if (unmounting) {
    animations = "animation-fade";
  }

  const handleClick = () => {
    sidewaysScroll(Scroll.right);
    setCurrentPage(4);
  };

  return (
    <>
      <div className={animations}>
        <BackgroundText text="O mně" />
      </div>
      <div
        className={`${animations} h-100 d-flex flex-column justify-content-center position-relative`}
      >
        <div className="container px-5">
          <div className="row">
            <div className="col-6">
              <div>
                <h2>Profil</h2>
                <p className="paragraph-width">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem eum voluptatibus, temporibus reiciendis doloribus iste
                  possimus quae repudiandae rerum illo molestiae ea! Rerum
                  cumque quis expedita, asperiores odio provident veniam.
                </p>
              </div>
              <div>
                <h2>Vzdělání</h2>
                <p className="paragraph-width">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam ipsa, consequuntur eveniet quia veniam modi!
                </p>
              </div>
              <div>
                <h2>Jazyky</h2>
                <div className="d-flex align-items-baseline gap-3">
                  <p>Čeština</p>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="d-flex align-items-baseline gap-3">
                  <p>Angličtina</p>
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.5}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="d-flex align-items-baseline gap-3">
                  <p>Španělština</p>
                  <Rating
                    name="half-rating-read"
                    defaultValue={1}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src="../Images/Konzultant.png" alt="fwfw" />
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          style={{ right: 0, transform: "rotate(-90deg)" }}
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

export default Omně;
