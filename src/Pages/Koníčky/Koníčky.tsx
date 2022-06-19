import { FC, useState } from "react";
import { Card } from "@mui/material";

import "./Koníčky.scss";

import { useSwipeable } from "react-swipeable";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { pageSliceAction } from "../../Store/pagesSlice";
import { JSONValues, PagesProps, SCROLL_HORIZONTAL } from "../../setup";
import dataJSON from "../../Data/Koníčky/data.json";

import Arrow from "../../Components/Global/HorizontalPointer/Arrow";
import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import SimpleAccordion from "../../Components/Koníčky/Accordion/Accordion";
import CardVerticalLarge from "../../Components/Koníčky/Cards/CardVerticalLarge";
import CardSmall from "../../Components/Koníčky/Cards/CardSmall";
import CardHorizontalLarge from "../../Components/Koníčky/Cards/CardHorizontalLarge";
import Container from "../../Components/Global/Container/Container";

const Koníčky: FC<PagesProps> = ({ sidewaysScroll }) => {
  const { data }: JSONValues = dataJSON;

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

  let animations = prevPage === 5 ? "animation-fadeOut" : "";

  const handleClick = () => {
    dispatch(pageSliceAction.changeCurPage(4));
    sidewaysScroll(SCROLL_HORIZONTAL.left);
  };
  // Udelat zitra
  const handleCardClick = (index: number) => {
    console.log(cards.indexOf(true) >= 0 ? cards.indexOf(true) : null);
    const cardsArray = [false, false, false, false, false, false, false];
    cardsArray[index!] = true;
    setCards(cardsArray);
  };

  const cardCreatorMD = (lowerLimit: number, upperLimit: number) => {
    let content = [];
    for (let i = lowerLimit; i < upperLimit; i++) {
      content.push(
        <Card
          onClick={() => handleCardClick(i)}
          style={{
            height: "15vw",
            width: "15vw",
            minWidth: "170px",
            minHeight: "170px",
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
          style={{ zIndex: 10 }}
        >
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
            className="d-md-block d-none d-xl-none"
          >
            <div className="row h-100 g-5">
              <div className="col-4 d-flex flex-column justify-content-center gap-4 align-items-center">
                {cardCreatorMD(0, 2)}
              </div>
              <div className="col-4 d-flex flex-column justify-content-center gap-4 align-items-center">
                {cardCreatorMD(2, 5)}
              </div>
              <div className="col-4 d-flex flex-column justify-content-center gap-4 align-items-center">
                {cardCreatorMD(5, 7)}
              </div>
            </div>
          </div>
          {/* Grid template, XL */}
          <div
            className="d-flex align-items-center"
            style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            <div
              style={{
                height: "75vh",
                width: "75vw",
              }}
              className="d-xl-grid d-none custom-grid"
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
