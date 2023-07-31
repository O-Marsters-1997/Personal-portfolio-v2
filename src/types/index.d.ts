type ProjectLinks = {
  flaskCricket: string;
  bbcSleighRide: string;
  clanhub: string;
  portfolio: string;
};

export type ExternalLinks = {
  githubProfile: string;
  linkedin: string;
};

export interface ProjectItem {
  title: string;
  titleShort: string;
  description: string;
  category: string;
  technologiesUsed: string[];
  imgSrc: string;
  imgAlt: string;
  details: string[];
  githubHref: string;
}
