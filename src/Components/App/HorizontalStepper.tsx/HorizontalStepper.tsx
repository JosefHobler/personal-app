import { Key } from "react";
import uuid from "react-native-uuid";

import { useAppSelector } from "../../../Hooks/useAppSelector";
import { SECONDARY_NAMES } from "../../../setup";

function HorizontalStepper() {
  const curPage = useAppSelector((state) => state.pages.curPage);

  const index = curPage === 1 ? 0 : curPage === 4 ? 1 : 2;

  const renderSteppers = () => {
    const helperArr = [];

    for (let i = 0; i < 3; i++) {
      helperArr.push(
        <li
          key={uuid.v4() as Key}
          className="position-relative d-flex justify-content-center align-items-center"
          style={{
            width: `${i !== 2 ? "33%" : "8.25%"}`,
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: `${i !== 2 ? "25%" : "100%"}`,
            }}
            className={`d-flex ${
              i === 0
                ? "justify-content-end"
                : i === 1
                ? "justify-content-center"
                : "justify-content-start"
            } align-items-center`}
          >
            <p
              style={{
                transition: "color 1.5s",
                color: `${i === index ? "white" : "rgba(256,256,256,0.5)"}`,
              }}
              className={` my-auto custom-text-pagination`}
            >
              {SECONDARY_NAMES[i]}
            </p>
          </div>
          {i !== 2 && (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: `75%`,
              }}
            >
              <div
                style={{
                  width: "100%",
                  zIndex: 1,
                  border: "1px solid rgba(256,256,256,0.3)",
                  backgroundColor: "rgba(256,256,256,0.3)",
                }}
                className={`${
                  i === 1
                    ? " ms-2 ms-xl-0 ms-md-1 me-1"
                    : " me-2 me-xl-0 me-md-1 ms-1"
                }`}
              ></div>
            </div>
          )}
        </li>
      );
    }
    return helperArr;
  };

  return (
    <ul
      className="w-50 d-flex justify-content-center align-items-center"
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        textAlign: "center",
      }}
    >
      {renderSteppers()}
    </ul>
  );
}

export default HorizontalStepper;
