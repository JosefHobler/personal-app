import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

import Image2 from "../../Assets/MainImages/Image2.png";

import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { pageSliceAction } from "../../Store/pagesSlice";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import CTAButton from "../../Components/Global/CallToAction/CTAButton";
import Container from "../../Components/Global/Container/Container";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const Domů = () => {
  const dispatch = useAppDispatch();
  const prevPage = useAppSelector((state) => state.pages.prevPage);
  const intl = useIntl();
  useDocumentTitle("Home | Josef Hobler");

  let animations = prevPage === 0 ? "animation-fadeOut" : "";

  let fadeTopOrBottom = "animation-upEntry";
  if (prevPage !== 3) {
    fadeTopOrBottom = "animation-downEntry";
  }

  return (
    <>
      <div className={animations}>
        <BackgroundText text={intl.formatMessage({ id: "MIXED.NAMES.0" })} />
      </div>
      <Container animations={animations}>
        <div className="d-flex justify-content-around align-items-center accessible-page ">
          <div
            className="text-center text-md-start px-5 d-flex flex-column justify-content-center"
            style={{ zIndex: 100 }}
          >
            <h1
              className={`heading-font heading-color ${fadeTopOrBottom} ${
                fadeTopOrBottom === "animation-downEntry" ? "delay-2" : ""
              }`}
            >
              <FormattedMessage id="DOMU.HEADING.NAME" />
            </h1>
            <p
              className={`mb-3 custom-text text-width-5 text-color text-font ${fadeTopOrBottom} delay-1`}
            >
              <FormattedMessage id="DOMU.PARAGRAPH.DESCRIPTION" />
            </p>
            <div
              className={`${fadeTopOrBottom} ${
                fadeTopOrBottom === "animation-downEntry" ? "" : "delay-2"
              }`}
            >
              <Link
                onClick={() => dispatch(pageSliceAction.changeCurPage(3))}
                style={{ all: "unset" }}
                to="/Kontakt"
              >
                <CTAButton
                  padding={3}
                  text={<FormattedMessage id="COMMON.BUTTON.CONTACT" />}
                />
              </Link>
            </div>
          </div>
          <div
            className="d-none d-md-flex align-items-center justify-content-end"
            style={{ zIndex: 100, transform: "scale(1.5)" }}
          >
            <img
              className="animation-fadeIn delay-10 img-fluid"
              style={{
                borderRadius: "7rem",
                filter: "drop-shadow(0px 0px 8px #000)",
              }}
              src={Image2}
              alt="Já"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Domů;
