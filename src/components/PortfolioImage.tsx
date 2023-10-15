import { useState, useEffect } from "react";
import clsx from "clsx";
import { useStore } from "@nanostores/react";
import { imgMap } from "@utils/constants";
import { storeMap } from "@utils/nanostore";

interface Props {
  alt: string;
  className: string;
}

const PortfolioImage = ({ alt, className }: Props) => {
  const [src, setSrc] = useState(imgMap.portfolio);
  const { darkMode } = useStore(storeMap);

  useEffect(() => {
    setSrc(!darkMode ? imgMap.portfolio : imgMap.light_portfolio);
  }, [darkMode]);

  return <img src={src.src} alt={alt} className={className} />;
};

export default PortfolioImage;
