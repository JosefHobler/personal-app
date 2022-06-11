import React, { FC } from "react";
import MouseScroll from "../MouseScrollDown/MouseScroll";
import MouseScroll2 from "../MouseScrollUp/MouseScroll2";

interface Props {
  top: boolean;
}

const MouseComponent: FC<Props> = ({ top }) => {
  const handlePosition = () => {
    if (top) return { top: "-130px" };
    return { bottom: "0px" };
  };

  return (
    <div
      className="position-absolute align-self-center text-center fadeIn-animation"
      style={handlePosition()}
    >
      {top ? <MouseScroll2 /> : <MouseScroll />}
    </div>
  );
};

export default MouseComponent;
