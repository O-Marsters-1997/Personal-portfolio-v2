/**
 * A small echo of the hero's cursor-gravity: project media panels lean
 * toward the pointer and glow at the contact point. Event-delegated on
 * document (cheap, survives Astro view-transition swaps without rebinding)
 * and skipped entirely under prefers-reduced-motion.
 */
let attached = false;

export const initProjectTilt = () => {
  if (attached) return;
  attached = true;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches) return;

  const setPosition = (target: HTMLElement, event: PointerEvent) => {
    const rect = target.getBoundingClientRect();
    const mx = ((event.clientX - rect.left) / rect.width) * 100;
    const my = ((event.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--mx", `${mx}%`);
    target.style.setProperty("--my", `${my}%`);
  };

  document.addEventListener(
    "pointermove",
    (event) => {
      const target = (event.target as Element)?.closest?.(
        ".project-media"
      ) as HTMLElement | null;
      if (!target) return;
      target.classList.add("is-hovering");
      setPosition(target, event);
    },
    { passive: true }
  );

  document.addEventListener(
    "pointerout",
    (event) => {
      const target = (event.target as Element)?.closest?.(
        ".project-media"
      ) as HTMLElement | null;
      if (!target) return;
      const next = (event as PointerEvent).relatedTarget as Element | null;
      if (next && target.contains(next)) return;
      target.classList.remove("is-hovering");
    },
    { passive: true }
  );
};
