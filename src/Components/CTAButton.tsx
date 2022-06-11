import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fab } from "@mui/material";
import React, { FC } from "react";

interface Props {
  text: string;
  padding?: number;
  onClick?: (e?: any) => void;
  rounded?: boolean;
}

const CTAButton: FC<Props> = ({ onClick, padding, text, rounded }) => {
  return (
    <Fab
      onClick={onClick}
      className={`${rounded && "rounded "} bg-font orange-shadow p-${padding}`}
      variant="extended"
      color="secondary"
      aria-label="add"
    >
      {text === "Životopis" && (
        <FontAwesomeIcon className="me-2" icon={faDownload} />
      )}
      {text}
    </Fab>
  );
};

export default CTAButton;
