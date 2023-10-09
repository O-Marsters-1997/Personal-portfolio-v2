import { timeline } from "motion";

// TODO: wait for type definitons from motion one
const testAnimate = () => {
  const sequence = [
    [
      ".name-word-0 .text-animation-0",
      {
        opacity: [0, 1],
        transform: ["translateY(100px)", "translateY(0px)"],
      },
      { duration: 0.05 },
    ],
    [
      ".name-word-0 .text-animation-1",
      {
        opacity: [0, 1],
        transform: ["translateY(100px)", "translateY(0px)"],
      },
      { duration: 0.05 },
    ],
    [
      ".name-word-0 .text-animation-2",
      {
        opacity: [0, 1],
        transform: ["translateY(100px)", "translateY(0px)"],
      },
      { duration: 0.05 },
    ],
    [
      ".name-word-0 .text-animation-3",
      {
        opacity: [0, 1],
        transform: ["translateY(100px)", "translateY(0px)"],
      },
      { duration: 0.05 },
    ],
    [
      ".name-word-0 .text-animation-4",
      {
        opacity: [0, 1],
        transform: ["translateY(100px)", "translateY(0px)"],
      },
      { duration: 0.05 },
    ],
  ] as any;

  timeline(sequence);
};

testAnimate();
