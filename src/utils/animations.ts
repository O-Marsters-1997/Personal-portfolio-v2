import {
  animate,
  timeline,
  glide,
  inView,
  type TimelineDefinition,
} from "motion";
import { myName, myDescriptionParas } from "@utils/constants";

// To do sort out dealy
const animationControls = {
  fadeInAnimation: 0.5,
};

// TODO: wait for type definitons from motion one
const testAnimate = () => {
  const { fadeInAnimation } = animationControls;

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
          opacity: {
            duration: 0.04,
            easing: "ease-in",
          },
          transform: { duration: 0.02 },
        },
      ]);
    })
    .reduce((acc, currentValue) => acc.concat(currentValue), [])
    .concat([
      [
        ".animate-appear",
        { opacity: [0, 1] },
        { duration: fadeInAnimation, easing: "ease-in" },
      ],
    ] as any);

  timeline(sequence as TimelineDefinition);
};

const aboutTextAnimateInView = () => {
  const { fadeInAnimation } = animationControls;
  const sequence = myDescriptionParas
    .map((para, index) => {
      const paraKey = index;
      return para
        .split(" ")
        .map((word, index) => {
          const wordKey = index;
          return word.split("").map((_, index) => {
            const isFirst = paraKey == 0 && wordKey == 0 && index == 0;
            let options: Record<string, any> = {
              easing: "ease-in",
              opacity: { duration: 0.0015 },
              transform: { duration: 0.0015 },
            };

            if (isFirst) {
              options = { ...options, delay: fadeInAnimation };
            }

            return [
              `.animate-text-para-${paraKey} .animate-text-word-${wordKey} .animate-text__scroll-${index}`,
              {
                opacity: [0, 1],
                transform: ["translateY(-100px)", "none"],
              },
              options,
            ];
          });
        })
        .reduce((acc, currentValue) => acc.concat(currentValue), []);
    })
    .flat();
  timeline(sequence as TimelineDefinition);
};

aboutTextAnimateInView();
testAnimate();
