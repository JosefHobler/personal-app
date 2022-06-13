import React, { FC, useEffect } from "react";
import "./MouseScroll2.scss";

const MouseScroll2: FC = () => {
  return (
    <div className="mouse_scroll2 fadeIn-animation">
      <div>
        <span className="m_scroll_arrows2 trei2"></span>
        <span className="m_scroll_arrows2 doi2"></span>
        <span className="m_scroll_arrows2 unu2"></span>
      </div>
      <div className="mouse d-none d-md-block">
        <div className="wheel"></div>
      </div>
    </div>
  );
};

export default MouseScroll2;
