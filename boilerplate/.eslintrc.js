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
      files: ["src/**/*.{js,jsx,ts,tsx}"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
    {
      files: ["e2e/**/*.{js,jsx,ts,tsx}"],
      extends: ["plugin:playwright/recommended"],
    },
  ],
}
