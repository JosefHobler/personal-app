import { FC } from "react";
import { SCROLL_VERTICAL } from "../../../setup";
import "./MouseScroll.scss";

interface PropsExtended extends Props {
  top: boolean;
}

interface Props {
  onClick: (e: SCROLL_VERTICAL) => void;
}

const MouseScrollElement: FC<PropsExtended> = ({ top, onClick }) => {
  const rotateStyle = top
    ? { transform: "rotate(180deg)" }
    : { transform: "rotate(0deg)" };

  const positionStyle = () => {
    if (top) return { top: "0px" };
    return { bottom: "0px" };
  };

  const handleClick = () => {
    onClick(top ? SCROLL_VERTICAL.down : SCROLL_VERTICAL.up);
  };

  return (
    <button
      onClick={() => handleClick()}
      style={{
        border: "none",
        background: "transparent",
        ...positionStyle(),
        cursor: "pointer",
        width: "24px",
        height: "75px",
        zIndex: 100000,
        right: "50vw",
        transform: "translateX(50%)",
      }}
      className={`position-absolute d-flex flex-column ${
        top ? "justify-content-end" : "justify-content-start"
      }
       `}
    >
      <div className={`mouse_scroll fadeIn-animation ${top ? "" : ""}`}>
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
    </button>
  );
};

const MouseScroll: FC<Props> = ({ onClick }) => {
  return (
    <>
      <MouseScrollElement top={true} onClick={onClick} />

      <MouseScrollElement top={false} onClick={onClick} />
    </>
  );
};

export default MouseScroll;
