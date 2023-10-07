import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { imgMap } from "@utils/constants";
import { storeMap } from "@utils/nanostore";

interface Props {
  alt: string;
}

const PortfolioImage = ({ alt }: Props) => {
  const [src, setSrc] = useState(imgMap.portfolio);
  const { darkMode } = useStore(storeMap);

  useEffect(() => {
    setSrc(!darkMode ? imgMap.portfolio : imgMap.light_portfolio);
  }, [darkMode]);

  return <img src={src} alt={alt} className="rounded-sm w-full h-full" />;
};

export default PortfolioImage;
