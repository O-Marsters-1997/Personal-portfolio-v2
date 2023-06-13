import { useState, useEffect, ReactNode, Children, createElement } from "react";

interface Props {
  breakpoints: [number, number?];
  children: ReactNode;
  matchElement: any;
  queryMatchesComponent: any;
  matchSlot: any;
  fallbackSlot: any;
}

const ResponsiveLayout = (props: Props) => {
  console.log(props);

  const mediaQuery = props.breakpoints[1]
    ? window.matchMedia(
        `(min-width: ${props.breakpoints[0]}px) and (max-width: ${props.breakpoints[1]}px)`
      )
    : window.matchMedia(`(min-width: ${props.breakpoints[0]}px)`);

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

  return <>{isMatched ? props.matchSlot : props.fallbackSlot}</>;
};

export default ResponsiveLayout;
