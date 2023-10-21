import { runAnimations } from "@utils/animations";

document.addEventListener("DOMContentLoaded", async () => {
  await runAnimations();
});

document.addEventListener("astro:after-swap", async () => {
  await runAnimations();
});
