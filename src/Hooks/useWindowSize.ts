import { useState, useEffect, useRef } from "react";

// Hook
const useWindowSize = () => {
  const isClient = typeof window === "object"; //Object represents browser window
  const lastWidth = useRef<null | {
    width: number | undefined;
  }>(null);

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    } //Exit if not user/browser

    function handleResize() {
      if (window?.innerWidth !== lastWidth.current?.width) {
        const width = getSize();
        lastWidth.current = width;
        setWindowSize(width);
      }
    }
    window.addEventListener("resize", handleResize); // <-- I am only interested in window.innerWidth !
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export default useWindowSize;
