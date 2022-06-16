import React, { createContext, useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";

import "./App.scss";

import { useRefresh } from "./Hooks/useRefresh";
import { useSwipeable } from "react-swipeable";
import { useAppSelector } from "./Hooks/useAppSelector";
import { useAppDispatch } from "./Hooks/useAppDispatch";
import About from "./Pages/About/About";
import Domů from "./Pages/Domů/Domů";
import Dovednosti from "./Pages/Dovednosti/Dovednosti";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Koníčky from "./Pages/Koníčky/Koníčky";
import Omně from "./Pages/Omně/Omně";
import Projekty from "./Pages/Projekty/Projekty";
import TransitionPage from "./Components/App/TransitionPage/TransitionPage";
import MouseScroll from "./Components/Global/VerticalPointer/MouseScroll";
import { pageSliceAction } from "./Store/pagesSlice";
import { MAIN_PAGES, NAMES, SCROLL_HORIZONTAL, SCROLL_VERTICAL } from "./setup";
import { contextTypes } from "./setup";
import Logo from "./Components/Logo/Logo";

export const UserContext = createContext<contextTypes>({
  previousPage: 1,
  firstLoad: true,
});

type Wait = {
  current: {
    wait: boolean;
    scroll: SCROLL_HORIZONTAL | SCROLL_VERTICAL;
  };
};

function App() {
  const [firstLoad, setFirstLoad] = useState(true);
  const waitScroll: Wait = useRef({
    wait: false,
    scroll: SCROLL_VERTICAL.null,
  });
  const { curPage, prevPage } = useAppSelector((state) => state.pages);
  const dispatch = useAppDispatch();
  const refresh = useRefresh();
  const history = useNavigate();

  // Handle mobile swipe
  const handlersVertical = useSwipeable({
    onSwipedUp: () => handleScroll(SCROLL_VERTICAL.up),
    onSwipedDown: () => handleScroll(SCROLL_VERTICAL.down),
  });

  // Handling sideways scroll
  function sidewaysScroll(scroll: SCROLL_HORIZONTAL) {
    if (waitScroll.current.wait) return;
    dispatch(pageSliceAction.changePrevPage(curPage));
    waitScroll.current.scroll = scroll;
    waitScroll.current.wait = true;
    return undefined;
  }

  // Handling mouse horizontal scroll
  const handleScrollType = (e: React.WheelEvent<HTMLDivElement>): void => {
    const { deltaY } = e as React.WheelEvent<HTMLDivElement>;
    handleScroll(deltaY > 0 ? SCROLL_VERTICAL.up : SCROLL_VERTICAL.down);
  };

  // Handling horizontal scroll
  function handleScroll(e: SCROLL_VERTICAL): void {
    if (waitScroll.current.wait) return;
    setFirstLoad(false);
    dispatch(pageSliceAction.changePrevPage(curPage));

    switch (e) {
      case SCROLL_VERTICAL.up:
        waitScroll.current.scroll = SCROLL_VERTICAL.down;
        handlePageChange(SCROLL_VERTICAL.up);
        break;
      case SCROLL_VERTICAL.down:
        waitScroll.current.scroll = SCROLL_VERTICAL.up;
        handlePageChange(SCROLL_VERTICAL.down);
        break;
    }
    waitScroll.current.wait = true;

    if (waitScroll.current.wait === true) {
      setTimeout(() => {
        waitScroll.current.wait = false;
        refresh();
      }, 1800);
    }
  }

  // Handling page flow
  const handlePageChange = (direction: SCROLL_VERTICAL) => {
    if (direction === SCROLL_VERTICAL.down) {
      dispatch(
        pageSliceAction.changeCurPage(
          curPage === 4 || curPage === 5 ? 0 : curPage - 1 < 0 ? 3 : curPage - 1
        )
      );
    } else {
      dispatch(
        pageSliceAction.changeCurPage(
          curPage === 4 || curPage === 5 ? 2 : curPage + 1 > 3 ? 0 : curPage + 1
        )
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      history(MAIN_PAGES[curPage]);
    }, 1800);
  }, [curPage]);

  // Making page same as device screen
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{ previousPage: prevPage, firstLoad: firstLoad }}
      >
        {waitScroll.current.wait && (
          <TransitionPage
            direction={waitScroll.current.scroll}
            text={NAMES[curPage]}
          />
        )}
        <Logo />
        <div
          {...handlersVertical}
          onWheel={handleScrollType}
          className="bg-dark custom-resolution text-light position-relative"
        >
          <div className="h-100">
            <Routes>
              <Route
                element={<Domů unmounting={MAIN_PAGES[prevPage] === "/"} />}
                path="/"
              />
              <Route element={<About />} path="/Omne">
                <Route
                  element={
                    <Omně
                      sidewaysScroll={sidewaysScroll}
                      unmounting={MAIN_PAGES[prevPage] === "/Omne"}
                    />
                  }
                  path="/Omne"
                />
                <Route
                  element={
                    <Dovednosti
                      unmounting={MAIN_PAGES[prevPage] === "/Omne/Dovednosti"}
                      sidewaysScroll={sidewaysScroll}
                    />
                  }
                  path="/Omne/Dovednosti"
                />
                <Route
                  element={
                    <Koníčky
                      unmounting={MAIN_PAGES[prevPage] === "/Omne/Konicky"}
                      sidewaysScroll={sidewaysScroll}
                    />
                  }
                  path="/Omne/Konicky"
                />
              </Route>
              <Route
                element={
                  <Projekty unmounting={MAIN_PAGES[prevPage] === "/Projekty"} />
                }
                path="/Projekty"
              />
              <Route
                element={
                  <Kontakt unmounting={MAIN_PAGES[prevPage] === "/Kontakt"} />
                }
                path="/Kontakt"
              />
            </Routes>
          </div>
          <MouseScroll onClick={handleScroll} />
          <MouseScroll onClick={handleScroll} />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
