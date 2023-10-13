import { timeline, glide } from "motion";
import { myName } from "@utils/constants";

// TODO: wait for type definitons from motion one
const testAnimate = () => {
  const sequence = myName
    .split(" ")
    .map((word: string, index) => {
      const key = index;
      return word.split("").map((_: string, index) => [
        `.name-word-${key} .animate-text-${index}`,
        {
          opacity: [0, 1],
          transform: ["translateY(100px)", "none"],
        },
        {
          duration: 0.025,
          opacity: {
            duration: 0.04,
            easing: "ease-in",
          },
        },
      ]);
    })
    .reduce((acc, currentValue) => acc.concat(currentValue), [])
    .concat([
      [
        ".animate-appear",
        { opacity: [0, 1] },
        { duration: 0.35, easing: "ease-in" },
      ],
    ] as any) as any;

  console.log(sequence);

  timeline(sequence);
};

testAnimate();
