import type { ExternalLinks } from "../types";
import flaskCricket from "@assets/images/flask_cricket.jpg";
import bbcSleighride from "@assets/images/bbc_sleighride.jpg";
import clanhub from "@assets/images/clanhub.jpg";
import portfolio from "@assets/images/portfolio.jpg";

export const responsiveSlotTypes = {
  matchSlot: "matchSlot",
  fallbackSlot: "fallbackSlot",
};

export const imgMap: Record<string, string> = {
  python: flaskCricket,
  bbcSleighride,
  clanhub,
  portfolio,
};

export const externalLinks: ExternalLinks = {
  githubProfile: "https://github.com/O-Marsters-1997",
  linkedin: "https://www.linkedin.com/in/olly-marsters/",
};
