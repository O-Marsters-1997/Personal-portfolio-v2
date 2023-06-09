import { useState, useEffect } from "react";

export const useMobileLayout = (viewport: number) => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsMobileView(innerWidth < viewport);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewport]);

  return isMobileView;
};

console.log(useMobileLayout(600));
