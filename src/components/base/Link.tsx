import { type ReactNode } from "react";
import { Link } from "react-scroll";

type Props = {
  to: string;
  children: ReactNode;
  duration?: number;
  className?: string;
  onClick?: () => void;
};

const ReactScrollLink = ({
  to,
  children,
  duration,
  className,
  onClick,
}: Props) => {
  return (
    <Link
      to={to}
      smooth={"easeInOutQuad"}
      className={className}
      duration={duration ?? 900}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ReactScrollLink;
