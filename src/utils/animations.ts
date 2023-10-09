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
          transform: ["translateY(75px)", "none"],
        },
        { duration: 0.04, easing: "ease-out" },
      ]);
    })
    .reduce((acc, currentValue) => acc.concat(currentValue), [])
    .concat([
      [
        ".hello-animation",
        { opacity: [0, 1] },
        { duration: 0.75, easing: "ease-out" },
      ],
    ] as any) as any;

  console.log(sequence);

  timeline(sequence);
};

testAnimate();
