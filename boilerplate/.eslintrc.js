module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["testing-library", "jest-dom", "cypress"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
  overrides: [
    {
      files: ["src/**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
    {
      files: ["src/**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:jest-dom/recommended"],
    },
    {
      files: ["cypress/**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
};
