import { useState, useEffect, FC, ReactNode } from "react";

interface Props {
  breakpoints: [number, number?];
  children: ReactNode;
  matchSlot: ReactNode;
  fallbackSlot: ReactNode;
}

const ResponsiveLayout: FC<Props> = ({
  breakpoints,
  children,
  matchSlot,
  fallbackSlot,
}) => {
  const mediaQuery = breakpoints[1]
    ? window.matchMedia(
        `(min-width: ${breakpoints[0]}px) and (max-width: ${breakpoints[1]}px)`
      )
    : window.matchMedia(`(min-width: ${breakpoints[0]}px)`);

  const [isMatched, setIsMatched] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleViewportChange = () => {
      setIsMatched(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <>
      {isMatched ? matchSlot : fallbackSlot}
      {children}
    </>
  );
};

export default ResponsiveLayout;
