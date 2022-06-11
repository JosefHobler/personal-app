import React, { FC } from "react";
import BackgroundText from "../../Components/BackgroundText";
import "./Koníčky.scss";
import { Scroll } from "../../App";
import CardVerticalLarge from "../../Components/KoníčkyPage/CardVerticalLarge";
import CardHorizontalLarge from "../../Components/KoníčkyPage/CardHorizontalLarge";
import CardSmall from "../../Components/KoníčkyPage/CardSmall";
import data from "../../Data/KoníčkyData";
import Arrow from "../../Components/Arrow/Arrow";
import MouseScroll2 from "../../Components/MouseScrollUp/MouseScroll2";
import MouseScroll from "../../Components/MouseScrollDown/MouseScroll";
import MouseComponent from "../../Components/MouseComponent/MouseComponent";

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
        className={`${animations} grid-fadeIn  h-100 w-100 d-flex flex-column justify-content-center position-relative`}
      >
        <div className="container px-5">
          <div
            style={{ height: "75vh", width: "75vw" }}
            className="d-md-grid custom-grid"
          >
            <div className="grid-1">
              <CardVerticalLarge image={data[0].image} text={data[0].text} />
            </div>
            <div className="grid-2">
              <CardHorizontalLarge image={data[1].image} text={data[1].text} />
            </div>
            <div className="grid-3">
              <CardVerticalLarge image={data[2].image} text={data[2].text} />
            </div>
            <div className="grid-4">
              <CardSmall text={data[3].text} />
            </div>
            <div className="grid-5">
              <CardVerticalLarge image={data[4].image} text={data[4].text} />
            </div>
            <div className="grid-6">
              <CardHorizontalLarge image={data[5].image} text={data[5].text} />
            </div>
            <div className="grid-7">
              <CardSmall text={data[6].text} />
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          style={{
            all: "unset",
            left: "5px",
            cursor: "pointer",
            transform: "rotate(180deg",
          }}
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

export default Koníčky;
