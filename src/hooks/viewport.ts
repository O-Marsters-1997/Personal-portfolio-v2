import { useState, useEffect } from "react";

const viewports = {
  small: 0,
  medium: 400,
  large: 800,
};

export const useMobileLayout = (viewport: number) => {
  return 2;
};
