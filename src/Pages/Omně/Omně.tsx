import { Rating } from "@mui/material";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { contextTypes, Scroll, UserContext } from "../../App";
import BackgroundText from "../../Components/BackgroundText";
import CustomizedRating from "../../Components/CustomizedRating";
import CTAButton from "../../Components/CTAButton";
import Arrow from "../../Components/Arrow/Arrow";
import MouseScroll from "../../Components/MouseScrollDown/MouseScroll";
import "./Omně.scss";
import Konzultant from "../../Assets/Images/Konzultant.png";
import MouseScroll2 from "../../Components/MouseScrollUp/MouseScroll2";
import MouseComponent from "../../Components/MouseComponent/MouseComponent";

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

  let fadeTopOrBottom = "animation-up";

  const data = useContext(UserContext) as contextTypes;
  console.log(data.previousPage);
  if (data.firstLoad) {
  } else if (data.previousPage === 2) {
    fadeTopOrBottom = "animation-down";
  } else if (data.previousPage === 4) {
    fadeTopOrBottom = "animation-left";
  }

  return (
    <>
      <div className={animations}>
        <BackgroundText text="O mně" />
      </div>
      <div
        className={`${animations}  h-100 d-flex flex-column justify-content-center position-relative`}
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
        <button
          onClick={handleClick}
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

export default Omně;
