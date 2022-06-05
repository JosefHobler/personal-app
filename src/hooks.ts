import { useState } from "react";

export const useRefresh = () => {
  const [refresh, setRefresh] = useState(0);

  return () => setRefresh(refresh + 1);
};
