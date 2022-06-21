import { useState, useEffect, useRef } from "react";

const useWindowSize = () => {
  const isClient = typeof window === "object";
  const lastWidth = useRef<null | {
    width: number | undefined;
  }>(null);
  const lastHeight = useRef<null | {
    height: number | undefined;
  }>(null);

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      if (
        window?.innerWidth !== lastWidth.current?.width ||
        window?.innerHeight !== lastHeight.current?.height
      ) {
        const obj = getSize();
        if (lastWidth.current?.width) {
          lastWidth.current.width = obj.width;
        }
        if (lastHeight.current?.height) {
          lastHeight.current.height = obj.height;
        }
        setWindowSize(obj);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
