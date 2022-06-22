import { useRef } from "react";

function useIsFirstRender(): boolean {
  const isFirst = useRef(true);
  const count = useRef(0);

  if (isFirst.current) {
    count.current++;
    if (count.current >= 2) {
      isFirst.current = false;
    }
    return true;
  }

  return isFirst.current;
}

export default useIsFirstRender;
