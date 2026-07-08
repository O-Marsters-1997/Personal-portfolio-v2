import { runAnimations } from "@utils/animations";
import { initLocalTime } from "@utils/localTime";
import { initProjectTilt } from "@utils/projectTilt";

let stopLocalTime: (() => void) | undefined;

const boot = () => {
  runAnimations();
  stopLocalTime?.();
  stopLocalTime = initLocalTime();
  initProjectTilt();
};

document.addEventListener("DOMContentLoaded", boot);
document.addEventListener("astro:after-swap", boot);
