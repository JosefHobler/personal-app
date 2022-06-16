import { FC } from "react";
import { SwipeableHandlers } from "react-swipeable";

interface Props {
  animations: string;
  children: JSX.Element | JSX.Element[];
  handlersHorizontal?: SwipeableHandlers;
}

const Container: FC<Props> = ({
  animations,
  handlersHorizontal = null,
  children,
}) => {
  return (
    <div
      className={`${animations} h-100 d-flex flex-column justify-content-center container`}
      {...handlersHorizontal}
    >
      {children}
    </div>
  );
};

export default Container;
