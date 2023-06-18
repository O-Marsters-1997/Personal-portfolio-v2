#!/usr/bin/env node
const fs = require("fs");
const resolveConfig = require("tailwindcss/resolveConfig");
const prettier = require("prettier");
const path = require("path");
const tailwindConfig = require("../../tailwind.config.cjs");

const { theme } = resolveConfig(tailwindConfig);
const themeStr = JSON.stringify(theme);
const js = `
const theme  = ${themeStr}
export default theme
`;

try {
  // write the file using fs
  fs.writeFileSync(
    path.resolve(process.cwd(), "./src/styles/theme.js"),
    prettier.format(js, { parser: "babel" }),
    "utf-8"
  );
} catch (error) {
  console.error(error.message);
}
