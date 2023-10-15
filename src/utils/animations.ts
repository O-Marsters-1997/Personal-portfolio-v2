import { timeline, inView, type TimelineDefinition } from "motion";
import { myName, myDescriptionParas } from "@utils/constants";
import { logger } from "./logger";

const animationControls = {
  fadeInAnimation: 0.35,
};

// TODO: wait for type definitons from motion one
const annimateAppear = () => {
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

const aboutTextAnimateInView = async () => {
  const { fadeInAnimation } = animationControls;
  const aboutText = document.querySelector(".about-description");

  if (!aboutText) {
    throw new Error("The about description element must be defined");
  }

  const shouldDelayAboutDescription = async () => {
    const intersectionPromise = new Promise((resolve, reject) => {
      const observer = new IntersectionObserver((entries) => {
        try {
          observer.disconnect();
          resolve(entries[0].isIntersecting);
        } catch (err) {
          reject(err);
          logger.error(err);
        }
      });

      observer.observe(aboutText);
    });

    return await intersectionPromise;
  };

  const textDelayAnimation = await shouldDelayAboutDescription();
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
              opacity: { duration: 0.001 },
              transform: { duration: 0.001 },
            };

            if (isFirst && textDelayAnimation) {
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
  inView(".about-description", () => {
    timeline(sequence as TimelineDefinition);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  aboutTextAnimateInView();
  annimateAppear();
});
