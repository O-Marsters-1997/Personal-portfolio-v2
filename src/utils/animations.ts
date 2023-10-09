import { timeline } from "motion";
import { myName } from "@utils/constants";

// TODO: wait for type definitons from motion one
const testAnimate = () => {
  const sequence = myName
    .split(" ")
    .map((word: string, index) => {
      const key = index;
      return word.split("").map((_: string, index) => [
        `.name-word-${key} .text-animation-${index}`,
        {
          opacity: [0, 1],
          transform: ["translateY(100px)", "translateY(0px)"],
        },
        { duration: 0.05 },
      ]);
    })
    .reduce((acc, currentValue) => acc.concat(currentValue), []) as any;

  timeline(sequence);
};

testAnimate();
