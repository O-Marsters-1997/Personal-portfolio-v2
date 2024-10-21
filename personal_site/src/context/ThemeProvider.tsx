import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";

const ThemeProvider = () => {
  const { darkMode } = useStore(storeMap);
  const documentClassList = document.documentElement.classList;

  const handleToggleTheme = () => {
    darkMode ? documentClassList.add("dark") : documentClassList.remove("dark");
  };

  useEffect(() => {
    handleToggleTheme();

    document.addEventListener("astro:beforeload", handleToggleTheme);

    return () => {
      document.removeEventListener("astro:beforeload", handleToggleTheme);
    };
  }, [darkMode]);

  return <></>;
};

export default ThemeProvider;
