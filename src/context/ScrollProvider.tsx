import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import type { ReactNode } from "react";
import { storeMap } from "@utils/nanostore";

const ScrollProvider = () => {
  const $storeMap = useStore(storeMap);
  const isMobileNavOpen = $storeMap.mobileNavigationOpen;

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const htmlElementClassList = htmlElement?.classList;
    const classArray = htmlElementClassList && Array.from(htmlElementClassList);

    if (classArray?.length && !isMobileNavOpen) {
      htmlElementClassList?.remove("disable-scroll");
    }

    if (htmlElementClassList && isMobileNavOpen) {
      htmlElementClassList.add("disable-scroll");
    }
  }, [isMobileNavOpen]);

  return <></>;
};

export default ScrollProvider;
