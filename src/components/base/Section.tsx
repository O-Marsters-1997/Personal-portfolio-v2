import type { ReactNode } from "react";
import { Element } from "react-scroll";

type Props = {
  name: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ name, className, children }: Props) => {
  return (
    <Element id={name} name={name} className={className}>
      {children}
    </Element>
  );
};

export default Section;
