import React, { FC, useState } from "react";
import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import "./Koníčky.scss";
import data from "../../Data/Koníčky/data";
import Arrow from "../../Components/Global/HorizontalPointer/Arrow";
import { Card } from "@mui/material";
import SimpleAccordion from "../../Components/Koníčky/Accordion/Accordion";
import CardVerticalLarge from "../../Components/Koníčky/Cards/CardVerticalLarge";
import CardSmall from "../../Components/Koníčky/Cards/CardSmall";
import CardHorizontalLarge from "../../Components/Koníčky/Cards/CardHorizontalLarge";
import { PagesProps, PagesPropsExtended, SCROLL_HORIZONTAL } from "../../setup";
import { useSwipeable } from "react-swipeable";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { pageSliceAction } from "../../Store/pagesSlice";

const Koníčky: FC<PagesPropsExtended> = ({ unmounting, sidewaysScroll }) => {
  let animations = "";
  if (unmounting) {
    animations = "animation-fade";
  }

  const dispatch = useAppDispatch();

  const handlersSideways = useSwipeable({
    onSwipedRight: () => handleClick(),
  });

  const handleClick = () => {
    dispatch(pageSliceAction.changeCurPage(4));
    sidewaysScroll(SCROLL_HORIZONTAL.left);
  };

  const [cards, setCards] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [prevClickIndex, setPrevClickIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    const arr = [...cards];
    arr[prevClickIndex!] = false;
    arr[index] = !arr[index];
    setPrevClickIndex(index);
    setCards(arr);
  };

  const customJSXLoop = (lowerLimit: number, upperLimit: number) => {
    let content = [];
    for (let i = lowerLimit; i < upperLimit; i++) {
      content.push(
        <Card
          onClick={() => handleCardClick(i)}
          style={{ height: "17.5vw", width: "17.5vw", cursor: "pointer" }}
        >
          {cards[i] ? (
            <div className="md-card-animation">
              <h5 className="text-center pt-2" style={{ fontSize: "0.9rem" }}>
                {data[i].text.heading}
              </h5>
              <p className="px-2 pb-2" style={{ fontSize: "0.65rem" }}>
                {data[i].text.body}
              </p>
            </div>
          ) : (
            <img src={data[i].image} className="img-fluid an-fadeIn" alt="" />
          )}
        </Card>
      );
    }
    return content;
  };

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Koníčky" />
      </div>

      <div
        className={`${animations} grid-fadeIn  h-100 w-100 d-flex flex-column justify-content-center position-relative`}
        {...handlersSideways}
      >
        <div className="container px-5 d-flex flex-column align-items-center justify-content-center">
          {/*Flex template, XS*/}
          <div
            style={{ height: "80vh", width: "70vw" }}
            className=" d-block d-md-none"
          >
            <SimpleAccordion data={data} />
          </div>
          {/*Grid template, MD*/}
          <div
            style={{ height: "80vh", width: "70vw" }}
            className="d-md-block d-none d-xl-none md-card-animation"
          >
            <div className="row h-100 g-5">
              <div className="col-4 d-flex flex-column justify-content-center gap-4 align-items-center">
                {customJSXLoop(0, 2)}
              </div>
              <div className="col-4 d-flex flex-column justify-content-center gap-4 align-items-center">
                {customJSXLoop(2, 5)}
              </div>
              <div className="col-4 d-flex flex-column justify-content-center gap-4 align-items-center">
                {customJSXLoop(5, 7)}
              </div>
            </div>
          </div>
          {/* Grid template, XL */}
          <div
            style={{ height: "75vh", width: "75vw" }}
            className="d-xl-grid d-none custom-grid"
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
            left: "5vw",
            cursor: "pointer",
            transform: "rotate(180deg",
          }}
          className="position-absolute align-self-center text-center"
        >
          <Arrow />
        </button>
      </div>
    </>
  );
};

export default Koníčky;
