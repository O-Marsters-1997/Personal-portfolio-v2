#!/usr/bin/env node
const fs = require("fs");
const resolveConfig = require("tailwindcss/resolveConfig");
const prettier = require("prettier");
const path = require("path");
const tailwindConfig = require("../../tailwind.config.cjs");
const logger = "../utils.logger.ts";

const { theme } = resolveConfig(tailwindConfig);
const argument = process.argv[2];

const themeMap = {
  colors: "colors",
  fontFamily: "typography",
  spacing: "spacing",
  screens: "screens",
};

const propertyMap = (themeStr, argument) => {
  switch (argument) {
    case "fontFamily":
      return `
  // Make sure the TailwindTypography type is defined
  export const typography : TailwindColors  = ${themeStr}
  export default typography
`;
    case "spacing":
      return `
  // Make sure the TailwindSpacing type is defined
  export const spacing : TailwindColors  = ${themeStr}
  export default spacing
`;
    case "screens":
      return `
  // Make sure the TailwindScreens type is defined
  export const screens : TailwindColors = ${themeStr}
  export default screens
      `;
    default:
      return `
  // Make sure the TailwindColors type is defined
  export const colors : TailwindColors  = ${themeStr}
  export default colors
`;
  }
};

const getTheme = () => {
  const themeStr = JSON.stringify(theme[argument]);
  // determine ts based on npm argument
  const ts = propertyMap(themeStr, argument);
  return { ts };
};

const { ts } = getTheme();

try {
  // write the file using fs
  fs.writeFileSync(
    path.resolve(process.cwd(), `./src/styles/theme/${themeMap[argument]}.ts`),
    prettier.format(ts, { parser: "babel" }),
    "utf-8"
  );
} catch (error) {
  logger.error(error.message);
}
