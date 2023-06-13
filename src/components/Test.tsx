import { useState, useEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
  breakpoint: number;
};

export default function MySidebar({ breakpoint, children }: Props) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <aside>{width > breakpoint && <main>{children}</main>}</aside>;
}
