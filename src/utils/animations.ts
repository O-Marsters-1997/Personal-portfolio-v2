import {
  type TimelineDefinition,
  animate,
  timeline,
  inView,
  spring,
} from "motion";
import { myName, myDescriptionParas } from "@utils/constants";
import { logger } from "@utils/logger";
import base from "@/data/projects.json";

// Animation variables
const animationControls = {
  fadeInAnimation: 0.35,
};

// Animation utils
const validateElement = (element: Element | null) => {
  if (!element) {
    throw new Error("The element must exist and therefore not be null");
  }
  return element;
};

const validateElements = (elements: NodeListOf<Element> | null) => {
  if (!elements) {
    {
      throw new Error("There should be at least some relevant elements");
    }
  }
  return elements;
};

const delayElementIfInView = async (element: Element) => {
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

    observer.observe(element);
  });
  return await intersectionPromise;
};

// Animations
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
  const aboutText = validateElement(
    document.querySelector(".about-description")
  );

  const textDelayAnimation = await delayElementIfInView(aboutText);
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
              transform: { duration: 0.0008 },
              opacity: { duration: 0.0015 },
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

const animateProfileImage = async () => {
  const { fadeInAnimation } = animationControls;
  const aboutImage = validateElement(document.querySelector(".about-image"));
  const imageDelayAnimation = await delayElementIfInView(aboutImage);

  let options: Record<string, any> = {
    left: {
      easing: spring({
        stiffness: 150,
        damping: 22,
      }),
    },
  };

  if (imageDelayAnimation) {
    options = { delay: fadeInAnimation, ...options };
  }

  inView(".about-image", () => {
    timeline([
      [
        ".about-image__underlay",
        {
          left: ["100%", "0%"],
        },
        options,
      ],
      [
        ".about-image__image",
        { opacity: [0, 1] },
        {
          duration: 0.45,
          easing: "linear",
        },
      ],
    ]);
  });
};

const animateProjectImage = () => {
  const { fadeInAnimation } = animationControls;
  const { projects } = base;

  projects.forEach((_, index) => {
    inView(`.project-item__${index}`, () => {
      timeline([
        [
          `.project-item__${index} .img-overlay`,
          { right: ["100%", "0%"] },
          {
            easing: spring({
              stiffness: 150,
              damping: 50,
            }),
          },
        ],
        [
          `.project-item__${index} .animate-project-appear`,
          { opacity: [0, 1] },
          { duration: 0.45, easing: "linear" },
        ],
      ]);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  aboutTextAnimateInView();
  annimateAppear();
  animateProfileImage();
  animateProjectImage();
});
