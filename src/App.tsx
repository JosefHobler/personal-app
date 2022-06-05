import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./Pages/About";
import Domů from "./Pages/Domů";
import Dovednosti from "./Pages/Dovednosti";
import Kontakt from "./Pages/Kontakt";
import Koníčky from "./Pages/Koníčky";
import Omně from "./Pages/Omně";
import Projekty from "./Pages/Projekty";
import { useNavigate } from "react-router";
import TransitionPage from "./Components/TransitionPage";
import { useRefresh } from "./hooks";
//import Logo from "./Images/logo.svg";

export const MAIN_PAGES = [
  "/",
  "/Omne",
  "/Projekty",
  "/Kontakt",
  "/Omne/Dovednosti",
  "/Omne/Konicky",
];
const NAMES = ["Domů", "O mně", "Projekty", "Kontakt", "Dovednosti", "Koníčky"];

export enum Scroll {
  down = "down",
  up = "up",
  right = "right",
  left = "left",
  null = "null",
}

type Wait = {
  current: {
    wait: boolean;
    scroll: Scroll;
  };
};

function App() {
  const refresh = useRefresh();
  const [currentPage, setCurrentPage] = useState(0);
  const waitScroll: Wait = useRef({ wait: false, scroll: Scroll.null });
  const history = useNavigate();
  const previousPage = useRef(1);

  const sidewaysScroll = (scroll: Scroll) => {
    if (waitScroll.current.wait) return;

    previousPage.current = currentPage;
    waitScroll.current.scroll = scroll;
    waitScroll.current.wait = true;
    return undefined;
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (waitScroll.current.wait) return;
    const { deltaY } = e;
    previousPage.current = currentPage;
    if (deltaY > 0) {
      setCurrentPage((currentPage) =>
        currentPage === 4 || currentPage === 5
          ? 2
          : currentPage + 1 > 3
          ? 0
          : currentPage + 1
      );
      waitScroll.current.scroll = Scroll.down;
    } else {
      setCurrentPage((currentPage) =>
        currentPage === 4 || currentPage === 5
          ? 0
          : currentPage - 1 < 0
          ? 3
          : currentPage - 1
      );
      waitScroll.current.scroll = Scroll.up;
    }
    waitScroll.current.wait = true;
  };

  if (waitScroll.current.wait === true) {
    setTimeout(() => {
      waitScroll.current.wait = false;
      refresh();
    }, 1800);
  }

  useEffect(() => {
    setTimeout(() => {
      history(MAIN_PAGES[currentPage]);
    }, 1800);
  }, [currentPage]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      {waitScroll.current.wait && (
        <TransitionPage
          direction={waitScroll.current.scroll}
          text={NAMES[currentPage]}
        />
      )}
      <div
        onWheel={handleScroll}
        className="bg-dark custom-resolution text-light text-font"
      >
        <div style={{ zIndex: 100000000 }} className="position-fixed m-2">
          <img src="" alt="Josef" />
        </div>
        <div className="h-100">
          <Routes>
            <Route
              element={
                <Domů unmounting={MAIN_PAGES[previousPage.current] === "/"} />
              }
              path="/"
            />
            <Route element={<About />} path="/Omne">
              <Route
                element={
                  <Omně
                    sidewaysScroll={sidewaysScroll}
                    setCurrentPage={setCurrentPage}
                    unmounting={MAIN_PAGES[previousPage.current] === "/Omne"}
                  />
                }
                path="/Omne"
              />
              <Route
                element={
                  <Dovednosti
                    unmounting={
                      MAIN_PAGES[previousPage.current] === "/Omne/Dovednosti"
                    }
                    setCurrentPage={setCurrentPage}
                    sidewaysScroll={sidewaysScroll}
                  />
                }
                path="/Omne/Dovednosti"
              />
              <Route
                element={
                  <Koníčky
                    setCurrentPage={setCurrentPage}
                    unmounting={
                      MAIN_PAGES[previousPage.current] === "/Omne/Konicky"
                    }
                    sidewaysScroll={sidewaysScroll}
                  />
                }
                path="/Omne/Konicky"
              />
            </Route>
            <Route
              element={
                <Projekty
                  unmounting={MAIN_PAGES[previousPage.current] === "/Projekty"}
                />
              }
              path="/Projekty"
            />
            <Route
              element={
                <Kontakt
                  unmounting={MAIN_PAGES[previousPage.current] === "/Kontakt"}
                />
              }
              path="/Kontakt"
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
