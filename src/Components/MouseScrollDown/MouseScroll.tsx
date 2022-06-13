import React, { FC } from "react";
import "./MouseScroll.scss";

const MouseScroll: FC = () => {
  return (
    <div className="mouse_scroll fadeIn-animation">
      <div className="mouse d-none d-md-block">
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
