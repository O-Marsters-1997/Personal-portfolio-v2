import type { ExternalLinks } from "../types";
import flaskCricket from "@assets/images/flask_cricket.jpg";
import bbcSleighride from "@assets/images/bbc_sleighride.jpg";
import clanhub from "@assets/images/clanhub.jpg";
import portfolio from "@assets/images/portfolio.jpg";
import light_portfolio from "@assets/images/light_portfolio.jpg";

export const imgMap: Record<string, ImageMetadata> = {
  python: flaskCricket,
  bbcSleighride,
  clanhub,
  portfolio,
  light_portfolio,
};

export const externalLinks: ExternalLinks = {
  githubProfile: "https://github.com/O-Marsters-1997",
  linkedin: "https://www.linkedin.com/in/olly-marsters/",
};
