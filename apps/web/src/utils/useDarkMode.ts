import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { storeMap } from "./nanostore";

/**
 * The server always renders dark (it can't read the stored design variant),
 * so return the SSR value for the first client render to keep hydration
 * clean, then flip to the real store value after mount.
 */
export const useDarkMode = () => {
  const { darkMode } = useStore(storeMap);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? Boolean(darkMode) : true;
};
