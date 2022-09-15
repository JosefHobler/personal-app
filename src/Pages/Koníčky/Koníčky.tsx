import { FC, Key, useState } from "react";
import { Card } from "@mui/material";
import uuid from "react-native-uuid";

import "./Koníčky.scss";

import { useSwipeable } from "react-swipeable";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { pageSliceAction } from "../../Store/pagesSlice";
import { displayResponsive, PagesProps, SCROLL_HORIZONTAL } from "../../setup";
import dataJSON from "../../Data/Koníčky/data.json";
import useWindowSize from "../../Hooks/useWindowSize";

import Arrow from "../../Components/Global/HorizontalPointer/Arrow";
import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import SimpleAccordion from "../../Components/Koníčky/Accordion/Accordion";
import CardVerticalLarge from "../../Components/Koníčky/Cards/CardVerticalLarge";
import CardSmall from "../../Components/Koníčky/Cards/CardSmall";
import CardHorizontalLarge from "../../Components/Koníčky/Cards/CardHorizontalLarge";
import Container from "../../Components/Global/Container/Container";
import useIsFirstTwoRenders from "../../Hooks/useIsFirstRender";
import { FormattedMessage, useIntl } from "react-intl";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

import snowboarding from "../../Assets/Konicky/snowboarding.webp";
import programming from "../../Assets/Konicky/programming.webp";
import webdevelopment from "../../Assets/Konicky/web-development.webp";
import fitness from "../../Assets/Konicky/fitness.jpg";
import crypto from "../../Assets/Konicky/crypto.webp";
import math from "../../Assets/Konicky/math.jpg";
import personaldevelopment from "../../Assets/Konicky/personal-development.webp";

const Koníčky: FC<PagesProps> = ({ sidewaysScroll }) => {
  useDocumentTitle("Habits | Josef Hobler");
  const intl = useIntl();
  const [cards, setCards] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [prevCards, setPrevCards] = useState([...cards]);

  const dispatch = useAppDispatch();
  const prevPage = useAppSelector((state) => state.pages.prevPage);
  const handlersHorizontal = useSwipeable({
    onSwipedRight: () => handleClick(),
    delta: 100,
  });
  const firstRenders = useIsFirstTwoRenders();
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  let animations = prevPage === 5 ? "animation-fadeOut" : "";

  const handleClick = () => {
    dispatch(pageSliceAction.changeCurPage(4));
    sidewaysScroll(SCROLL_HORIZONTAL.left);
  };

  const handleCardClick = (index: number) => {
    setPrevCards(cards);
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
      let imageToShow = webdevelopment;
      switch (dataJSON[i].image) {
        case "snowboarding":
          imageToShow = snowboarding;
          break;
        case "fitness":
          imageToShow = fitness;
          break;
        case "crypto":
          imageToShow = crypto;
          break;
        case "personaldevelopment":
          imageToShow = personaldevelopment;
          break;
        case "programming":
          imageToShow = programming;
          break;
        case "math":
          imageToShow = math;
          break;
      }

      content.push(
        <Card
          key={uuid.v4() as Key}
          className="mb-4"
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
            <div
              className={`
                animation-fadeIn
               delay-1 duration-3`}
            >
              <h5 className="text-center custom-text heading-font pt-2">
                <FormattedMessage id={`HABITS.HEADING.${i}`} />
              </h5>
              <p
                className="custom-text"
                style={{ marginTop: "-15px", transform: "scale(0.9)" }}
              >
                <FormattedMessage id={`HABITS.PARAGRAPH.${i}`} />
              </p>
            </div>
          ) : (
            <img
              src={imageToShow}
              className={`img-fluid ${prevCards[i] ? "animation-fadeIn" : ""} ${
                firstRenders ? "delay-5 duration-5" : "delay-1 duration-3"
              }`}
              alt=""
            />
          )}
        </Card>
      );
    }
    return content;
  };
  return (
    <>
      <div className={animations}>
        <BackgroundText text={intl.formatMessage({ id: "MIXED.NAMES.3" })} />
      </div>
      <Container
        animations={animations}
        handlersHorizontal={handlersHorizontal}
      >
        <div className="accessible-page d-flex justify-content-center align-items-center">
          <div
            className="container px-5 d-flex flex-column align-items-center justify-content-center"
            style={{ zIndex: 10, overflow: "hidden" }}
          >
            {/*Flex template, XS*/}
            <div
              style={{ height: "80vh", width: "70vw" }}
              className={`${
                handleResponsiveness() === 0 ? "d-flex" : "d-none"
              } justify-content-center align-items-center`}
            >
              <SimpleAccordion />
            </div>
            {/*Grid template, MD*/}
            <div
              className={`${
                handleResponsiveness() === 1 ? "d-block" : "d-none"
              }  animation-rightEntry`}
            >
              <div className="row h-100">
                <div className="col-4 d-flex flex-column m justify-content-center align-items-center">
                  {cardCreatorMD(0, 2)}
                </div>
                <div className="h-100 col-4 d-flex flex-column justify-content-center align-items-center">
                  {cardCreatorMD(2, 5)}
                </div>
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                  {cardCreatorMD(5, 7)}
                </div>
              </div>
            </div>
            {/* Grid template, XL */}
            <div
              className={`${
                handleResponsiveness() === 2 ? "d-flex" : "d-none"
              } align-items-center justify-content-center h-100 w-100  animation-rightEntry`}
            >
              <div
                className="d-grid custom-grid"
                style={{
                  height: "75vh",
                  width: "75vw",
                }}
              >
                <div className="grid-1">
                  <CardVerticalLarge
                    image={dataJSON[0].image}
                    heading={intl.formatMessage({ id: "HABITS.HEADING.0" })}
                    body={intl.formatMessage({ id: "HABITS.PARAGRAPH.0" })}
                  />
                </div>
                <div className="grid-2">
                  <CardHorizontalLarge
                    image={dataJSON[1].image}
                    heading={intl.formatMessage({ id: "HABITS.HEADING.1" })}
                    body={intl.formatMessage({ id: "HABITS.PARAGRAPH.1" })}
                  />
                </div>
                <div className="grid-3">
                  <CardVerticalLarge
                    image={dataJSON[2].image}
                    heading={intl.formatMessage({ id: "HABITS.HEADING.2" })}
                    body={intl.formatMessage({ id: "HABITS.PARAGRAPH.2" })}
                  />
                </div>
                <div className="grid-4">
                  <CardSmall
                    heading={intl.formatMessage({ id: "HABITS.HEADING.3" })}
                    body={intl.formatMessage({ id: "HABITS.PARAGRAPH.3" })}
                  />
                </div>
                <div className="grid-5">
                  <CardVerticalLarge
                    image={dataJSON[4].image}
                    heading={intl.formatMessage({ id: "HABITS.HEADING.4" })}
                    body={intl.formatMessage({ id: "HABITS.PARAGRAPH.4" })}
                  />
                </div>
                <div className="grid-6">
                  <CardHorizontalLarge
                    image={dataJSON[5].image}
                    heading={intl.formatMessage({ id: "HABITS.HEADING.5" })}
                    body={intl.formatMessage({ id: "HABITS.PARAGRAPH.5" })}
                  />
                </div>
                <div className="grid-7">
                  <CardSmall
                    heading={intl.formatMessage({ id: "HABITS.HEADING.6" })}
                    body={intl.formatMessage({ id: "HABITS.PARAGRAPH.6" })}
                  />
                </div>
              </div>
            </div>
          </div>
          <Arrow left={true} onClick={handleClick} />
        </div>
      </Container>
    </>
  );
};

export default Koníčky;
