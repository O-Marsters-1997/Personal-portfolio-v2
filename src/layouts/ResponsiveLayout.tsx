import { useState, useEffect, FC, ReactNode } from "react";

interface Props {
  breakpoints?: [number, number?];
  children: ReactNode;
  matchSlot?: ReactNode;
  fallbackSlot?: ReactNode;
}

export const breakpointsMap = {
  mobile: 0,
  tablet: 768,
  desktop: 1200,
};

const ResponsiveLayout: FC<Props> = ({
  breakpoints = [breakpointsMap.mobile],
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  useEffect(() => {
    const handleViewportChange = () => {
      setIsMatched(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, [isMounted]);

  if (!isMounted) {
    return <div>Loading</div>;
  }

  return (
    <>
      {isMatched ? matchSlot : fallbackSlot}
      {children}
    </>
  );
};

export default ResponsiveLayout;
