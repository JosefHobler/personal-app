import React, { FC } from "react";
import "./TransitionPage.scss";
import { Scroll } from "../App";
interface Props {
  text: string;
  direction: Scroll;
}

const TransitionPage: FC<Props> = ({ text, direction }) => {
  let animationClass = "";
  if (direction === Scroll.down) {
    animationClass = "down";
  } else if (direction === Scroll.up) {
    animationClass = "up";
  } else if (direction === Scroll.left) {
    animationClass = "left";
  } else if (direction === Scroll.right) {
    animationClass = "right";
  }
  return (
    <div
      className={`${animationClass} position-absolute w-100 h-100 bg-dark text-light d-flex align-items-center justify-content-center`}
      style={{
        zIndex: 100000,
        fontSize: "20vw",
        top: "100vh",
      }}
    >
      {text}
    </div>
  );
};

export default TransitionPage;
