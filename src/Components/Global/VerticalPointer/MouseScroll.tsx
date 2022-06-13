import React, { FC } from "react";
import "./MouseScroll.scss";

interface Props {
  top: boolean;
}

const MouseScroll: FC<Props> = ({ top }) => {
  const positionStyle = () => {
    if (top) return { top: "-130px" };
    return { bottom: "0px" };
  };

  const rotateStyle = top ? { transform: "rotate(180deg)" } : {};

  return (
    <div
      className="position-absolute align-self-center text-center fadeIn-animation"
      style={positionStyle()}
    >
      <div className="mouse_scroll fadeIn-animation">
        {!top && (
          <div className="mouse d-none d-md-block">
            <div className="wheel"></div>
          </div>
        )}

        <div style={rotateStyle}>
          <span className={`m_scroll_arrows unu`}></span>
          <span className={`m_scroll_arrows doi`}></span>
          <span className={`m_scroll_arrows trei`}></span>
        </div>
        {top && (
          <div className="mouse d-none d-md-block">
            <div className="wheel"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MouseScroll;
