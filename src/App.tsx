import React, {
  createContext,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./Pages/About/About";
import Domů from "./Pages/Domů/Domů";
import Dovednosti from "./Pages/Dovednosti/Dovednosti";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Koníčky from "./Pages/Koníčky/Koníčky";
import Omně from "./Pages/Omně/Omně";
import Projekty from "./Pages/Projekty/Projekty";
import { useNavigate } from "react-router";
import { useRefresh } from "./Hooks/useRefresh";
import Logo from "./Assets/SVGs/logo.svg";
import { useSwipeable } from "react-swipeable";
import TransitionPage from "./Components/App/TransitionPage/TransitionPage";
import { MAIN_PAGES, NAMES, SCROLL } from "./setup";

export type contextTypes = { previousPage: number; firstLoad: boolean };

export const UserContext = createContext<contextTypes>({
  previousPage: 1,
  firstLoad: true,
});
//import Logo from "./Images/logo.svg";

type Wait = {
  current: {
    wait: boolean;
    scroll: SCROLL;
  };
};

function App() {
  const refresh = useRefresh();
  const [currentPage, setCurrentPage] = useState(0);
  const waitScroll: Wait = useRef({ wait: false, scroll: SCROLL.null });
  const history = useNavigate();
  const previousPage = useRef(1);
  const [firstLoad, setFirstLoad] = useState(true);

  // Handle mobile swipe
  const handlersUp = useSwipeable({
    onSwipedUp: (eventData) => handleScroll("Up"),
    onSwipedDown: (eventData) => handleScroll("Down"),
  });

  const sidewaysScroll = (scroll: SCROLL) => {
    if (waitScroll.current.wait) return;

    previousPage.current = currentPage;
    waitScroll.current.scroll = scroll;
    waitScroll.current.wait = true;
    return undefined;
  };

  function handleScroll(e: string): void;
  function handleScroll(e: React.WheelEvent<HTMLDivElement>): void;
  function handleScroll(e: unknown): void {
    if (waitScroll.current.wait) return;
    setFirstLoad(false);
    previousPage.current = currentPage;

    if (typeof e === "string") {
      switch (e) {
        case "Up":
          setCurrentPage((currentPage) =>
            currentPage === 4 || currentPage === 5
              ? 2
              : currentPage + 1 > 3
              ? 0
              : currentPage + 1
          );
          waitScroll.current.scroll = SCROLL.down;

          break;
        case "Down":
          setCurrentPage((currentPage) =>
            currentPage === 4 || currentPage === 5
              ? 0
              : currentPage - 1 < 0
              ? 3
              : currentPage - 1
          );
          waitScroll.current.scroll = SCROLL.up;

          break;
      }
    }
    if (typeof e === "object") {
      const { deltaY } = e as React.WheelEvent<HTMLDivElement>;
      if (deltaY > 0) {
        setCurrentPage((currentPage) =>
          currentPage === 4 || currentPage === 5
            ? 2
            : currentPage + 1 > 3
            ? 0
            : currentPage + 1
        );
        waitScroll.current.scroll = SCROLL.down;
      } else {
        setCurrentPage((currentPage) =>
          currentPage === 4 || currentPage === 5
            ? 0
            : currentPage - 1 < 0
            ? 3
            : currentPage - 1
        );
        waitScroll.current.scroll = SCROLL.up;
      }
    }
    waitScroll.current.wait = true;
  }

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
      <UserContext.Provider
        value={{ previousPage: previousPage.current, firstLoad: firstLoad }}
      >
        {waitScroll.current.wait && (
          <TransitionPage
            direction={waitScroll.current.scroll}
            text={NAMES[currentPage]}
          />
        )}
        <div
          {...handlersUp}
          onWheel={handleScroll}
          className="bg-dark custom-resolution text-light"
        >
          <Link
            to="/"
            onClick={() => setCurrentPage(0)}
            style={{ zIndex: 10000000 }}
            className="position-fixed m-2"
          >
            <img src={Logo} alt="logo-josef-hobler" />
          </Link>
          <div className="h-100">
            <Routes>
              <Route
                element={
                  <Domů
                    unmounting={MAIN_PAGES[previousPage.current] === "/"}
                    setCurrentPage={setCurrentPage}
                  />
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
                    unmounting={
                      MAIN_PAGES[previousPage.current] === "/Projekty"
                    }
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
      </UserContext.Provider>
    </>
  );
}

export default App;
