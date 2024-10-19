import { type ReactNode } from "react";
import { scroller } from "react-scroll";

interface Props {
  to: string;
  children: ReactNode;
  duration?: number;
  className?: string;
}

const ReactScrollLink = ({ to, children, duration, className }: Props) => {
  const handleScroll = () => {
    scroller.scrollTo(to, {
      duration: duration ?? 1500,
      smooth: "easeInOutCubic",
    });
  };

  return (
    <a href={`/#${to}`} className={className} onClick={handleScroll}>
      {children}
    </a>
  );
};

export default ReactScrollLink;
