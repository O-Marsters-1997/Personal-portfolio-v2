import { runAnimations } from "@utils/animations";

document.addEventListener("DOMContentLoaded", () => {
  runAnimations();
});

document.addEventListener("astro:after-swap", () => {
  runAnimations();
});
