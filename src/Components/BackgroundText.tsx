import React, { FC } from "react";

interface Props {
  text: string;
}

const BackgroundText: FC<Props> = ({ text }) => {
  return (
    <div
      style={{ fontSize: `20vw`, color: "rgb(36,40,44)" }}
      className="bg-font position-absolute h-100 w-100 bg-font d-flex justify-content-center align-items-center"
    >
      {text}
    </div>
  );
};

export default BackgroundText;
