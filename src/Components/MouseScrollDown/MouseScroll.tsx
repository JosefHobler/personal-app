import React, { FC } from "react";
import "./MouseScroll.scss";

interface Props {
  delay?: string;
}

const MouseScroll: FC<Props> = ({ delay }) => {
  return (
    <div className="mouse_scroll fadeIn-animation">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className={`m_scroll_arrows unu`}></span>
        <span className={`m_scroll_arrows doi`}></span>
        <span className={`m_scroll_arrows trei`}></span>
      </div>
    </div>
  );
};

export default MouseScroll;
