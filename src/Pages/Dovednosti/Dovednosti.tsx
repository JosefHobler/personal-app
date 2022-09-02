import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSass,
  faGitAlt,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Rating } from "@mui/material";
import uuid from "react-native-uuid";

import "./Dovednosti.scss";

import { useSwipeable } from "react-swipeable";
import { pageSliceAction } from "../../Store/pagesSlice";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { PagesProps, SCROLL_HORIZONTAL } from "../../setup";
import { PRIMARY_TECHNOLOGIES } from "../../setup";
import { OTHER_TECHNOLOGIES } from "../../setup";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import Arrow from "../../Components/Global/HorizontalPointer/Arrow";
import Container from "../../Components/Global/Container/Container";
import { FormattedMessage, useIntl } from "react-intl";

const Dovednosti: FC<PagesProps> = ({ sidewaysScroll }) => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const prevPage = useAppSelector((state) => state.pages.prevPage);
  const handlersHorizontal = useSwipeable({
    onSwipedLeft: () => handleRight(),
    onSwipedRight: () => handleLeft(),
    delta: 100,
  });

  let animations = prevPage === 4 ? "animation-fadeOut" : "";

  let fadeTopOrBottom = "animation-leftEntry";
  if (prevPage === 1) {
    fadeTopOrBottom = "animation-rightEntry";
  }

  const handleLeft = () => {
    dispatch(pageSliceAction.changeCurPage(1));
    sidewaysScroll(SCROLL_HORIZONTAL.left);
  };

  const handleRight = () => {
    dispatch(pageSliceAction.changeCurPage(5));
    sidewaysScroll(SCROLL_HORIZONTAL.right);
  };

  const mappingPrimary = (): JSX.Element[] => {
    return PRIMARY_TECHNOLOGIES.map(({ name, rating }) => {
      return (
        <li
          key={uuid.v4() as string}
          className={`text-color text-font d-flex mx-auto mx-md-0 ps-sm-3 ps-4 ps-md-0 justify-content-between ${"w-100"} custom-text`}
        >
          <p className="mb-1">{name}</p>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
        </li>
      );
    });
  };
  const mappingOther = (): JSX.Element[] => {
    return OTHER_TECHNOLOGIES.map((tech) => {
      return (
        <li
          key={uuid.v4() as string}
          className="text-font text-color custom-text"
        >
          {tech}
        </li>
      );
    });
  };

  return (
    <>
      <div className={animations}>
        <BackgroundText text={intl.formatMessage({ id: "MIXED.NAMES.2" })} />
      </div>

      <Container
        animations={animations}
        handlersHorizontal={handlersHorizontal}
      >
        <div className="container px-5 accessible-page d-flex align-items-center">
          <div className="d-flex align-items-center w-100 justify-content-around">
            <div className=" text-center text-md-start">
              <h2 className={`heading-color heading-font ${fadeTopOrBottom}`}>
                <FormattedMessage id="SKILLS.HEADING.NAME" />
              </h2>
              <ul
                className="p-0 animation-fadeIn delay-8"
                style={{ listStyle: "none" }}
              >
                {mappingPrimary()}
              </ul>
              <div className="mt-5">
                <h3
                  className={`heading-color heading-font delay-1 ${fadeTopOrBottom}
                `}
                >
                  <FormattedMessage id="SKILLS.HEADING.NAME.NEXT" />
                </h3>
                <ul
                  style={{ listStyle: "none" }}
                  className="p-0 animation-fadeIn delay-9"
                >
                  {mappingOther()}
                </ul>
              </div>
            </div>
            <div className=" d-none d-md-block d-flex align-items-center justify-content-center delay-11 animation-fadeIn">
              {/*Cube styles in dovednosti.scss */}
              <div className="scene">
                <div className="cube">
                  <div className="cube-face cube-face-front">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className="w-75 h-75"
                      color="#F06529"
                    />
                  </div>
                  <div className="cube-face cube-face-back">
                    <FontAwesomeIcon
                      className="w-75 h-75"
                      style={{ transform: "rotateZ(90deg)" }}
                      icon={faCss3}
                      color="#28A4D9"
                    />
                  </div>
                  <div className="cube-face cube-face-left">
                    <FontAwesomeIcon
                      className="w-75 h-75"
                      style={{ transform: "rotateZ(90deg)" }}
                      icon={faJsSquare}
                      color="#EFD81D"
                    />
                  </div>
                  <div className="cube-face cube-face-right">
                    <FontAwesomeIcon
                      icon={faReact}
                      className="w-75 h-75"
                      color="#5ED4F4"
                    />
                  </div>
                  <div className="cube-face cube-face-top">
                    <FontAwesomeIcon
                      className="w-75 h-75"
                      icon={faGitAlt}
                      style={{ transform: "rotateZ(-90deg)" }}
                      color="#EC4D28"
                    />
                  </div>
                  <div className="cube-face cube-face-bottom">
                    <FontAwesomeIcon
                      icon={faSass}
                      className="w-75 h-75"
                      color="#ce679a"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Arrow onClick={handleLeft} left={true} />
        <Arrow onClick={handleRight} left={false} />
      </Container>
    </>
  );
};

export default Dovednosti;
