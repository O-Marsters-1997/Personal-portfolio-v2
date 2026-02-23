import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";
import type { Store } from "@/types";

const ScrollProvider = () => {
  const $storeMap = useStore(storeMap) as unknown as Store;
  const isMobileNavOpen = $storeMap.mobileNavigationOpen;

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const htmlElementClassList = htmlElement?.classList;

    if (isMobileNavOpen) {
      htmlElementClassList?.add("disable-scroll");
    } else {
      htmlElementClassList?.remove("disable-scroll");
    }
  }, [isMobileNavOpen]);
  return <></>;
};

export default ScrollProvider;
