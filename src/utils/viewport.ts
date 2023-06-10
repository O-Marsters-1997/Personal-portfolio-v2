const viewports = {
  small: 0,
  medium: 400,
  large: 800,
};

export const useMobileLayout = (viewport: number) => {
  window.addEventListener("resize", resizeHandler);

  function resizeHandler() {
    const { innerWidth } = window;

    return viewport > innerWidth;
  }

  return window.removeEventListener("resize", resizeHandler);
};
