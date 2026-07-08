import { useEffect, useRef } from "react";
import { mountHeroScene } from "./scenes";

const HeroScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return undefined;
    return mountHeroScene(canvasRef.current);
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
};

export default HeroScene;
