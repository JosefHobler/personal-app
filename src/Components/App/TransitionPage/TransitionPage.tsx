import React, { FC } from "react";
import { SCROLL } from "../../../setup";
import "./TransitionPage.scss";
interface Props {
  text: string;
  direction: SCROLL;
}

const TransitionPage: FC<Props> = ({ text, direction }) => {
  let animationClass = "";
  if (direction === SCROLL.down) {
    animationClass = "down";
  } else if (direction === SCROLL.up) {
    animationClass = "up";
  } else if (direction === SCROLL.left) {
    animationClass = "left";
  } else if (direction === SCROLL.right) {
    animationClass = "right";
  }
  return (
    <div
      className={`${animationClass} position-absolute w-100 h-100 bg-dark text-light bg-font d-flex align-items-center justify-content-center`}
      style={{
        zIndex: 100000,
        fontSize: "16vw",
        top: "100vh",
      }}
    >
      {text}
    </div>
  );
};

export default TransitionPage;
