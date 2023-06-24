#!/usr/bin/env node
const fs = require("fs");
const resolveConfig = require("tailwindcss/resolveConfig");
const prettier = require("prettier");
const path = require("path");
const tailwindConfig = require("../../tailwind.config.cjs");

const { theme } = resolveConfig(tailwindConfig);
const argument = process.argv[2];

const themeMap = {
  colors: "colors",
  fontFamily: "typography",
};

const getTheme = () => {
  console.log(themeMap[argument]);

  const themeStr = JSON.stringify(theme[argument]);
  // determine ts based on npm argument

  const ts =
    argument === "typography"
      ? `
  // Make sure the TailwindTypography type is defined
  export const typography : TailwindColors  = ${themeStr}
  export default typography
`
      : `
  // Make sure the TailwindColors type is defined
  export const colors : TailwindColors  = ${themeStr}
  export default colors
`;

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
  console.error(error.message);
}
