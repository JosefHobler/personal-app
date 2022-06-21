import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import { MAIN_PAGES } from "./setup";

import "./App.scss";
import Logo from "./Components/Logo/Logo";

import { useRefresh } from "./Hooks/useRefresh";
import { useSwipeable } from "react-swipeable";
import { useAppSelector } from "./Hooks/useAppSelector";
import { useAppDispatch } from "./Hooks/useAppDispatch";
import { pageSliceAction } from "./Store/pagesSlice";
import { NAMES, SCROLL_HORIZONTAL, SCROLL_VERTICAL } from "./setup";

import About from "./Pages/About/About";
import Domů from "./Pages/Domů/Domů";
import Dovednosti from "./Pages/Dovednosti/Dovednosti";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Koníčky from "./Pages/Koníčky/Koníčky";
import Omně from "./Pages/Omně/Omně";
import Projekty from "./Pages/Projekty/Projekty";

import TransitionPage from "./Components/App/TransitionPage/TransitionPage";
import MouseScroll from "./Components/Global/VerticalPointer/MouseScroll";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function App() {
  const wait = useRef(false);
  const mouseScrollRef = useRef<HTMLDivElement>(null);
  const scroll = useRef<SCROLL_HORIZONTAL | SCROLL_VERTICAL>(
    SCROLL_HORIZONTAL.null
  );
  const curPage = useAppSelector((state) => state.pages.curPage);
  const dispatch = useAppDispatch();
  const refresh = useRefresh();
  const history = useNavigate();

  // Handle mobile swipe
  const handlersVertical = useSwipeable({
    onSwipedUp: () => handleScroll(SCROLL_VERTICAL.up),
    onSwipedDown: () => handleScroll(SCROLL_VERTICAL.down),
  });

  // Handling sideways scroll
  function sidewaysScroll(e: SCROLL_HORIZONTAL) {
    if (wait.current) return;
    dispatch(pageSliceAction.changePrevPage(curPage));
    scroll.current = e;
    wait.current = true;
    return undefined;
  }

  // Handling mouse horizontal scroll
  const handleScrollType = (e: React.WheelEvent<HTMLDivElement>): void => {
    const { deltaY } = e as React.WheelEvent<HTMLDivElement>;
    handleScroll(deltaY > 0 ? SCROLL_VERTICAL.up : SCROLL_VERTICAL.down);
  };

  // Handling horizontal scroll
  function handleScroll(e: SCROLL_VERTICAL): void {
    if (wait.current) return;
    dispatch(pageSliceAction.changePrevPage(curPage));
    switch (e) {
      case SCROLL_VERTICAL.up:
        scroll.current = SCROLL_VERTICAL.down;
        handlePageChange(SCROLL_VERTICAL.up);
        break;
      case SCROLL_VERTICAL.down:
        scroll.current = SCROLL_VERTICAL.up;
        handlePageChange(SCROLL_VERTICAL.down);
        break;
    }
    wait.current = true;
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

  // Allowing next scroll
  useEffect(() => {
    if (!wait.current) return;
    const wrapper = mouseScrollRef.current;
    if (mouseScrollRef) {
      wrapper!.classList.add("animation-fadeOut");
    }
    setTimeout(() => {
      if (mouseScrollRef) {
        wrapper!.classList.remove("animation-fadeOut");
        wrapper!.classList.add("animation-fadeIn");
      }
      wait.current = false;
      refresh();
    }, 2000);
  }, [wait.current]);

  // Setting next page to the screen
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
      {wait.current && (
        <TransitionPage direction={scroll.current} text={NAMES[curPage]} />
      )}
      <Logo />
      <div
        {...handlersVertical}
        onWheel={handleScrollType}
        className="bg-dark text-light position-relative accessible-page"
        style={{}}
      >
        <div className="h-100">
          <Routes>
            <Route path="/" element={<Domů />} />
            <Route element={<About />} path="/Omne">
              <Route
                element={<Omně sidewaysScroll={sidewaysScroll} />}
                path="/Omne"
              />
              <Route
                element={<Dovednosti sidewaysScroll={sidewaysScroll} />}
                path="/Omne/Dovednosti"
              />
              <Route
                element={<Koníčky sidewaysScroll={sidewaysScroll} />}
                path="/Omne/Konicky"
              />
            </Route>
            <Route element={<Projekty />} path="/Projekty" />
            <Route element={<Kontakt />} path="/Kontakt" />
          </Routes>
        </div>
        <div ref={mouseScrollRef}>
          <MouseScroll onClick={handleScroll} />
          <MouseScroll onClick={handleScroll} />
        </div>
      </div>
    </>
  );
}

export default App;
