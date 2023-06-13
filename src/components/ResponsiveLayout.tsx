import { useState, useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  breakpoints: [number, number?];
}

const ResponsiveLayout = ({ breakpoints, children }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const isVisible = breakpoints[1]
    ? width <= breakpoints[0] && width >= breakpoints[1]
    : width >= breakpoints[0];

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isVisible && children}</>;
};

export default ResponsiveLayout;
