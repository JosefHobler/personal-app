import { FC } from "react";

import "./TransitionPage.scss";

import { SCROLL_HORIZONTAL, SCROLL_VERTICAL } from "../../../setup";
interface Props {
  text: string;
  direction: SCROLL_VERTICAL | SCROLL_HORIZONTAL;
}

const TransitionPage: FC<Props> = ({ text, direction }) => {
  let animationClass = "";
  switch (direction) {
    case SCROLL_VERTICAL.down:
      animationClass = "down";
      break;
    case SCROLL_VERTICAL.up:
      animationClass = "up";
      break;
    case SCROLL_HORIZONTAL.left:
      animationClass = "left";
      break;
    case SCROLL_HORIZONTAL.right:
      animationClass = "right";
      break;
  }

  return (
    <div
      className={`${animationClass} position-absolute w-100 h-100 bg-dark text-light bg-font d-flex align-items-center justify-content-center`}
      style={{
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
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
