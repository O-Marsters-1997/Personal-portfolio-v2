import { useState, useEffect, ReactNode } from "react";

interface Props {
  breakpoints: [number, number?];
  children: ReactNode;
}

const ResponsiveLayout = ({ children, breakpoints }: Props) => {
  const mediaQuery = breakpoints[1]
    ? window.matchMedia(
        `(min-width: ${breakpoints[0]}px) and (max-width: ${breakpoints[1]}px)`
      )
    : window.matchMedia(`(min-width: ${breakpoints[0]}px)`);

  const [isMatched, setIsMatched] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleViewportChange = () => {
      console.log("hello");
      setIsMatched(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return <>{isMatched && children}</>;
};

export default ResponsiveLayout;
