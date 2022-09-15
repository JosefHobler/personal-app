import React, { useContext, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import { MAIN_PAGES } from "./setup";

import "./App.scss";
import Logo from "./Components/Logo/Logo";
import czechRepublic from "./Assets/SVGs/Flags/CzechRepublic.svg";
import unitedStates from "./Assets/SVGs/Flags/UnitedStates.svg";

import { useRefresh } from "./Hooks/useRefresh";
import { useSwipeable } from "react-swipeable";
import { useAppSelector } from "./Hooks/useAppSelector";
import { useAppDispatch } from "./Hooks/useAppDispatch";
import { pageSliceAction } from "./Store/pagesSlice";
import { SCROLL_HORIZONTAL, SCROLL_VERTICAL } from "./setup";
import useIsFirstRender from "./Hooks/useIsFirstRender";

import About from "./Pages/About/About";
import Domů from "./Pages/Domů/Domů";
import Dovednosti from "./Pages/Dovednosti/Dovednosti";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Koníčky from "./Pages/Koníčky/Koníčky";
import Omně from "./Pages/Omně/Omně";
import Projekty from "./Pages/Projekty/Projekty";

import TransitionPage from "./Components/App/TransitionPage/TransitionPage";
import MouseScroll from "./Components/Global/VerticalPointer/MouseScroll";
import VerticalStepper from "./Components/App/VerticalStepper/VerticalStepper";
import HorizontalStepper from "./Components/App/HorizontalStepper.tsx/HorizontalStepper";
import { LocaleContext } from "./IntlWrapper";
import { useIntl } from "react-intl";

function App() {
  const wait = useRef(false);
  const ctrlPressed = useRef(false);
  const paginationVerticalRef = useRef<HTMLDivElement>(null);
  const paginationHorizontalRef = useRef<HTMLDivElement>(null);
  const mouseScrollRef = useRef<HTMLDivElement>(null);
  const lastRender = useRef(false);
  const scroll = useRef<SCROLL_HORIZONTAL | SCROLL_VERTICAL>(
    SCROLL_HORIZONTAL.null
  );
  const intl = useIntl();
  const curPage = useAppSelector((state) => state.pages.curPage);
  const dispatch = useAppDispatch();
  const refresh = useRefresh();
  const history = useNavigate();
  const firstRender = useIsFirstRender();

  const { handleSelectLang, locale } = useContext(LocaleContext)!;

  // Handle mobile swipe
  const handlersVertical = useSwipeable({
    onSwipedUp: () => handleScroll(SCROLL_VERTICAL.up),
    onSwipedDown: () => handleScroll(SCROLL_VERTICAL.down),
    delta: 100,
  });

  // Handling sideways scroll
  function sidewaysScroll(e: SCROLL_HORIZONTAL) {
    if (wait.current) return;
    wait.current = true;
    dispatch(pageSliceAction.changePrevPage(curPage));
    scroll.current = e;
    setTimeout(() => {
      wait.current = false;
      refresh();
    }, 2200);
    return undefined;
  }

  // Handling mouse horizontal scroll
  const handleScrollType = (e: React.WheelEvent<HTMLDivElement>): void => {
    if (ctrlPressed.current) return;
    const { deltaY } = e as React.WheelEvent<HTMLDivElement>;
    handleScroll(deltaY > 0 ? SCROLL_VERTICAL.up : SCROLL_VERTICAL.down);
  };
  // Handling horizontal scroll
  function handleScroll(e: SCROLL_VERTICAL): void {
    if (wait.current) return;
    wait.current = true;
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
    setTimeout(() => {
      wait.current = false;
      refresh();
    }, 2200);
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
    // Handling pagination animations
    if (wait.current) {
      const wrapper = paginationHorizontalRef.current;
      const wrapper2 = paginationVerticalRef.current;
      if (wrapper) {
        wrapper!.classList.remove("animation-fadeOut");
        wrapper!.classList.add("animation-fadeIn-pagination");
      }
      if (wrapper2) {
        wrapper2!.classList.remove("animation-fadeOut");
        wrapper2!.classList.add("animation-fadeIn-pagination");
      }
      setTimeout(() => {
        if (wrapper) {
          wrapper!.classList.add("animation-fadeOut");
          wrapper!.classList.remove("animation-fadeIn-pagination");
        }
        if (wrapper2) {
          wrapper2!.classList.add("animation-fadeOut");
          wrapper2!.classList.remove("animation-fadeIn-pagination");
        }
      }, 1000);

      // Allowing next scroll + handling vertical arrow animations
      const wrapperMouse = mouseScrollRef.current;
      if (wrapperMouse) {
        wrapperMouse!.classList.remove("animation-fadeIn-arrows");
        wrapperMouse!.classList.add("animation-fadeOut");
      }
    } else {
      const wrapperMouse = mouseScrollRef.current;
      setTimeout(() => {
        if (wrapperMouse) {
          wrapperMouse!.classList.add("animation-fadeIn-arrows");
          wrapperMouse!.classList.remove("animation-fadeOut");
        }
      }, 500);
    }
  }, [wait.current]);

  // Check if page refreshes
  window.onbeforeunload = function (event) {
    lastRender.current = true;
    refresh();
  };

  // Setting next page to the screen
  useEffect(() => {
    if (firstRender) return;
    if (lastRender.current) return;
    const timeout = setTimeout(() => {
      history(MAIN_PAGES[curPage]);
    }, 2200);
    return () => clearTimeout(timeout);
  }, [curPage]);

  useEffect(() => {
    // Making page same as device screen
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);

    history(MAIN_PAGES[0]);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    return e.ctrlKey ? (ctrlPressed.current = true) : undefined;
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    return (ctrlPressed.current = false);
  };

  return (
    <>
      {wait.current && (
        <TransitionPage
          direction={scroll.current}
          text={intl.formatMessage({ id: `MIXED.NAMES.${curPage}` })}
        />
      )}
      <Logo />
      <div
        {...handlersVertical}
        onWheel={handleScrollType}
        className="bg-dark text-light position-relative accessible-page"
        style={{ overflow: "hidden" }}
      >
        <div className="accessible-page">
          <Routes>
            <Route path="/" element={<Domů />} />
            <Route element={<About />} path="/about">
              <Route
                element={<Omně sidewaysScroll={sidewaysScroll} />}
                path="/about"
              />
              <Route
                element={<Dovednosti sidewaysScroll={sidewaysScroll} />}
                path="/about/skills"
              />
              <Route
                element={<Koníčky sidewaysScroll={sidewaysScroll} />}
                path="/about/habits"
              />
            </Route>
            <Route element={<Projekty />} path="/projects" />
            <Route element={<Kontakt />} path="/contact" />
            <Route element={<Domů />} />
          </Routes>
        </div>
        <div ref={mouseScrollRef}>
          <MouseScroll onClick={handleScroll} />
        </div>
      </div>
      <div
        className="position-absolute top-0 m-2"
        style={{ right: "10px", zIndex: 1001, color: "rgba(255,255,255,0.5)" }}
      >
        <img
          style={{ opacity: locale === "cs" ? 0.7 : 0.3 }}
          onClick={() => {
            if (locale !== "cs") {
              handleSelectLang("cs");
            }
          }}
          className="me-2 flag-hover"
          width="20px"
          height="20px"
          src={czechRepublic}
          alt="Czech Republic"
        />
        <img
          onClick={() => {
            if (locale === "cs") {
              handleSelectLang("en");
            }
          }}
          style={{ opacity: locale !== "cs" ? 0.7 : 0.3 }}
          className="flag-hover"
          width="20px"
          height="20px"
          src={unitedStates}
          alt="United States"
        />
      </div>
      {wait.current && (
        <div
          ref={paginationVerticalRef}
          className="position-absolute heading-color d-flex align-items-center justify-content-center"
          style={{ right: 15, top: 15, bottom: 15, zIndex: 1001 }}
        >
          <VerticalStepper />
        </div>
      )}
      {(curPage === 1 || curPage > 3) && (
        <div
          ref={paginationHorizontalRef}
          className="w-100 position-absolute heading-color d-flex align-items-center justify-content-center"
          style={{ bottom: 15, zIndex: 1001 }}
        >
          <HorizontalStepper />
        </div>
      )}
    </>
  );
}

export default App;
