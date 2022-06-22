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
        background: "transparent",
        border: "none",
        minWidth: "50px",
        zIndex: 100000,
        left: `${left ? "15px" : ""}`,
        right: `${left ? "" : "15px"}`,
        transform: `${left ? "rotate(180deg)" : ""}`,
      }}
      className="position-absolute align-self-center text-center animation-fadeIn-arrows"
    >
      <div id="arrowAnim">
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
