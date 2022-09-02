import { FC, ReactElement } from "react";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fab } from "@mui/material";

interface Props {
  text: ReactElement;
  padding?: number;
  onClick?: (e?: any) => void;
  rounded?: boolean;
}

const CTAButton: FC<Props> = ({ onClick, padding, text, rounded }) => {
  return (
    <Fab
      onClick={onClick}
      className={`${
        rounded && "rounded-3 "
      } bg-font orange-shadow p-${padding}`}
      variant="extended"
      color="secondary"
      aria-label="add"
    >
      {text}
    </Fab>
  );
};

export default CTAButton;
