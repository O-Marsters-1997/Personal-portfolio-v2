import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";
import type { Store } from "@types";

const ScrollProvider = () => {
  const $storeMap = useStore(storeMap) as Store;
  const isMobileNavOpen = $storeMap.mobileNavigationOpen;

  useEffect(() => {
    const html = document.documentElement;

    if (isMobileNavOpen) {
      html.classList.add("disable-scroll");
    } else {
      html.classList.remove("disable-scroll");
    }
  }, [isMobileNavOpen]);
  return <></>;
};

export default ScrollProvider;
