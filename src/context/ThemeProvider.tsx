import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";

const ThemeProvider = () => {
  const { darkMode } = useStore(storeMap);
  const documentClassList = document.documentElement.classList;

  useEffect(() => {
    darkMode ? documentClassList.add("dark") : documentClassList.remove("dark");
  }, [darkMode]);

  return <></>;
};

export default ThemeProvider;
