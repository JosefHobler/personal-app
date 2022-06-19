import { FC } from "react";

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
        minWidth: "50px",
        all: "unset",
        zIndex: 100000,
        left: `${left ? "15px" : ""}`,
        right: `${left ? "" : "15px"}`,
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
