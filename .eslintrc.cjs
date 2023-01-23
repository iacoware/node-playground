module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    es2021: true,
    node: true,
    browser: false,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    // sourceType: "module",
    // ecmaVersion: 2021,
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
