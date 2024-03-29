import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCalculator,
  faCode,
  faDumbbell,
  faPersonSnowboarding,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import uuid from "react-native-uuid";
import { faBitcoin, faChrome } from "@fortawesome/free-brands-svg-icons";
import useIsFirstTwoRenders from "../../../Hooks/useIsFirstRender";
import dataJSON from "../../../Data/Koníčky/data.json";
import { FormattedMessage } from "react-intl";

const ICONS = [
  <FontAwesomeIcon icon={faChrome} />,
  <FontAwesomeIcon icon={faPersonSnowboarding} />,
  <FontAwesomeIcon icon={faDumbbell} />,
  <FontAwesomeIcon icon={faBitcoin} />,
  <FontAwesomeIcon icon={faUserGraduate} />,
  <FontAwesomeIcon icon={faCode} />,
  <FontAwesomeIcon icon={faCalculator} />,
];

const SimpleAccordion: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const firstRender = useIsFirstTwoRenders();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div
      className="w-100 h-100 d-flex flex-column align-items-center justify-content-center"
      style={{ transform: "scale(0.9)" }}
    >
      {dataJSON.map((element: { image: string }, index: number) => {
        return (
          <Accordion
            key={uuid.v4() as string}
            className={`delay-${index} ${
              firstRender ? "animation-rightEntry" : ""
            }`}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              className={`access-child-margin`}
              expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div
                style={{
                  width: "80%",
                  flexShrink: 0,
                  display: "flex",
                  gap: 5,
                }}
                className="heading-font custom-text"
              >
                <p>{ICONS[index]}</p>
                <FormattedMessage id={`HABITS.HEADING.${index}`} />
              </div>
            </AccordionSummary>
            <AccordionDetails className="p-0 px-2 m-0">
              <p className="custom-text text-font">
                <FormattedMessage id={`HABITS.PARAGRAPH.${index}`} />
              </p>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default SimpleAccordion;
