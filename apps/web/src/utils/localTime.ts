/**
 * Real, ticking Europe/London time for any [data-local-time] element —
 * an honest "the person behind this is awake right now" signal, not a
 * fabricated stat.
 */
const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  hour: "2-digit",
  minute: "2-digit",
});

export const initLocalTime = () => {
  const targets = document.querySelectorAll<HTMLElement>("[data-local-time]");
  if (!targets.length) return undefined;

  const tick = () => {
    const time = formatter.format(new Date());
    targets.forEach((el) => {
      el.textContent = time;
    });
  };

  tick();
  const id = window.setInterval(tick, 30_000);
  return () => window.clearInterval(id);
};
