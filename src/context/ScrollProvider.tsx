import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";
import type { Store } from "@types";

const ScrollProvider = () => {
  const $storeMap = useStore(storeMap) as Store;
  const isMobileNavOpen = $storeMap.mobileNavigationOpen;

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const htmlElementClassList = htmlElement?.classList;
    const classArray =
      htmlElementClassList != null && Array.from(htmlElementClassList);

    if (classArray && classArray.length > 0 && !isMobileNavOpen) {
      htmlElementClassList?.remove("disable-scroll");
    }

    if (htmlElementClassList != null && isMobileNavOpen) {
      htmlElementClassList.add("disable-scroll");
    }
  }, [isMobileNavOpen]);

  return <></>;
};

export default ScrollProvider;
