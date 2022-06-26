import { Key } from "react";
import uuid from "react-native-uuid";

import { useAppSelector } from "../../../Hooks/useAppSelector";
import { PRIMARY_NAMES } from "../../../setup";

function VerticalStepper() {
  const curPage = useAppSelector((state) => state.pages.curPage);

  const index = curPage > 3 ? 1 : curPage;

  const renderSteppers = () => {
    const helperArr = [];

    for (let i = 0; i < 4; i++) {
      helperArr.push(
        <li
          key={uuid.v4() as Key}
          style={{
            height: `${i !== 3 ? "25%" : "2.5%"}`,
            position: "relative",
          }}
        >
          <div
            style={{
              height: `${i !== 3 ? "10%" : "100%"}`,
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <p
              style={{
                transition: "color 1.5s",
                color: `${i === index ? "white" : "rgba(256,256,256,0.5)"}`,
              }}
              className="my-auto custom-text-pagination"
            >
              {PRIMARY_NAMES[i]}
            </p>
          </div>
          {i !== 3 && (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "85%", marginTop: "20%" }}
            >
              <div
                style={{
                  height: "100%",
                  width: "1px",
                  border: "1px solid rgba(256,256,256,0.3)",
                  backgroundColor: "rgba(256,256,256,0.3)",
                }}
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
      className="h-75 d-flex flex-column justify-content-center align-items-center"
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

export default VerticalStepper;
