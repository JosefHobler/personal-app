import { FC, useState } from "react";
import { Card } from "@mui/material";

import "./Koníčky.scss";

import { useSwipeable } from "react-swipeable";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { pageSliceAction } from "../../Store/pagesSlice";
import {
  displayResponsive,
  JSONValuesKonicky,
  PagesProps,
  SCROLL_HORIZONTAL,
} from "../../setup";
import dataJSON from "../../Data/Koníčky/data.json";
import useWindowSize from "../../Hooks/useWindowSize";

import Arrow from "../../Components/Global/HorizontalPointer/Arrow";
import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import SimpleAccordion from "../../Components/Koníčky/Accordion/Accordion";
import CardVerticalLarge from "../../Components/Koníčky/Cards/CardVerticalLarge";
import CardSmall from "../../Components/Koníčky/Cards/CardSmall";
import CardHorizontalLarge from "../../Components/Koníčky/Cards/CardHorizontalLarge";
import Container from "../../Components/Global/Container/Container";

const Koníčky: FC<PagesProps> = ({ sidewaysScroll }) => {
  const { data }: JSONValuesKonicky = dataJSON;

  const [cards, setCards] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const dispatch = useAppDispatch();
  const prevPage = useAppSelector((state) => state.pages.prevPage);
  const handlersHorizontal = useSwipeable({
    onSwipedRight: () => handleClick(),
  });
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  let animations = prevPage === 5 ? "animation-fadeOut" : "";

  const handleClick = () => {
    dispatch(pageSliceAction.changeCurPage(4));
    sidewaysScroll(SCROLL_HORIZONTAL.left);
  };
  // Udelat zitra
  const handleCardClick = (index: number) => {
    const cardsArray = [false, false, false, false, false, false, false];
    cardsArray[index!] = true;
    setCards(cardsArray);
  };

  const handleResponsiveness = () => {
    if (windowWidth! >= 768 && windowHeight! >= 730 && windowWidth! < 1200) {
      return displayResponsive.mediumLayout;
    } else if (
      windowWidth! < 768 ||
      (windowHeight! < 730 && windowWidth! < 1200)
    ) {
      return displayResponsive.smallLayout;
    }
    return displayResponsive.extraLargeLayout;
  };

  const cardCreatorMD = (lowerLimit: number, upperLimit: number) => {
    let content = [];
    for (let i = lowerLimit; i < upperLimit; i++) {
      content.push(
        <Card
          onClick={() => handleCardClick(i)}
          style={{
            height: "15vh",
            width: "15vh",
            minWidth: "175px",
            minHeight: "175px",
            cursor: "pointer",
          }}
        >
          {cards[i] ? (
            <div className="animation-fadeIn duration-3">
              <h5 className="text-center custom-text  pt-2">
                {data[i].text.heading}
              </h5>
              <p
                className="custom-text"
                style={{ marginTop: "-15px", transform: "scale(0.9)" }}
              >
                {data[i].text.body}
              </p>
            </div>
          ) : (
            <img
              src={require(`../../Assets/Konicky/${data[i].image}`)}
              className="img-fluid animation-fadeIn delay-3"
              alt=""
            />
          )}
        </Card>
      );
    }
    return content;
  };
  console.log(windowWidth, windowHeight);
  console.log(handleResponsiveness());
  return (
    <>
      <div className={animations}>
        <BackgroundText text="Koníčky" />
      </div>
      <Container
        animations={animations}
        handlersHorizontal={handlersHorizontal}
      >
        <div
          className="container px-5 d-flex flex-column align-items-center justify-content-center animation-rightEntry"
          style={{ zIndex: 10, overflow: "hidden" }}
        >
          {/*Flex template, XS*/}
          <div
            style={{ height: "80vh", width: "70vw" }}
            className={`${handleResponsiveness() === 0 ? "d-block" : "d-none"}`}
          >
            <SimpleAccordion data={data} />
          </div>
          {/*Grid template, MD*/}
          <div
            className={`${handleResponsiveness() === 1 ? "d-block" : "d-none"}`}
          >
            <div className="row h-100 g-5">
              <div className="h-100 col-4 d-flex flex-column justify-content-center gap-4 align-items-center">
                {cardCreatorMD(0, 2)}
              </div>
              <div className="h-100 col-4 d-flex flex-column justify-content-center gap-4 align-items-center">
                {cardCreatorMD(2, 5)}
              </div>
              <div className="h-100 col-4 d-flex flex-column justify-content-center gap-4 align-items-center">
                {cardCreatorMD(5, 7)}
              </div>
            </div>
          </div>
          {/* Grid template, XL */}
          <div
            className={`${
              handleResponsiveness() === 2 ? "d-flex" : "d-none"
            } align-items-center justify-content-center h-100 w-100`}
          >
            <div
              className="d-grid custom-grid"
              style={{
                height: "75vh",
                width: "75vw",
              }}
            >
              <div className="grid-1">
                <CardVerticalLarge image={data[0].image} text={data[0].text} />
              </div>
              <div className="grid-2">
                <CardHorizontalLarge
                  image={data[1].image}
                  text={data[1].text}
                />
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
                <CardHorizontalLarge
                  image={data[5].image}
                  text={data[5].text}
                />
              </div>
              <div className="grid-7">
                <CardSmall text={data[6].text} />
              </div>
            </div>
          </div>
        </div>
        <Arrow left={true} onClick={handleClick} />
      </Container>
    </>
  );
};

export default Koníčky;
