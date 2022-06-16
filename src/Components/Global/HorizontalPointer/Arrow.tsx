import React, { FC } from "react";
import "./Arrow.scss";

interface Props {
  onClick: () => void;
  left: boolean;
}

const Arrow: FC<Props> = ({ onClick, left }) => {
  return (
    <button
      onClick={onClick}
      style={{
        all: "unset",
        left: `${left ? "5vw" : ""}`,
        right: `${left ? "" : "5vw"}`,
        cursor: "pointer",
        transform: `${left ? "rotate(180deg)" : ""}`,
      }}
      className="position-absolute align-self-center text-center"
    >
      <div id="arrowAnim" className="  fadeIn-animation">
        <div className="arrowSliding">
          <div className="arrow"></div>
        </div>
        <div className="arrowSliding delay1">
          <div className="arrow"></div>
        </div>
        <div className="arrowSliding delay2">
          <div className="arrow"></div>
        </div>
        <div className="arrowSliding delay3">
          <div className="arrow"></div>
        </div>
      </div>
    </button>
  );
};

export default Arrow;
