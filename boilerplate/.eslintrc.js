module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "warn",
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
      files: ["e2e/**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:playwright/recommended"],
    },
  ],
}
