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

export const myName = "Olly Marsters";

export const myDescriptionParas = [
  "My name is Olly, I’m a full-stack developer, based in Edinburgh.",
  "I am always looking for any opportunities I can find to improve my skillset and learn new things. I am particularly focused on frontend development as I find the constantly evolving landscape of technologies used in this space to be incredibly exciting.",
  "I passionately believe that making tech more diverse is essential for enabling development teams to create digital experiences for everyone.",
  "Whether you would like to find out what I can help you with or just want to start a conversation about tech, don’t hesitate to get in touch via the form below.",
];
