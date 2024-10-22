import { runAnimations } from "@utils/animations";

document.addEventListener("DOMContentLoaded", async () => {
  runAnimations();
});

document.addEventListener("astro:after-swap", async () => {
  runAnimations();
});
