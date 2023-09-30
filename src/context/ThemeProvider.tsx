import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";

const ThemeProvider = () => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const { darkMode } = useStore(storeMap);
  const documentClassList = document.documentElement.classList;

  useEffect(() => {
    if (!isFirstRender) {
      darkMode
        ? documentClassList.remove("dark")
        : documentClassList.add("dark");
    } else {
      setIsFirstRender(false);
    }
  }, [darkMode]);

  return <></>;
};

export default ThemeProvider;
