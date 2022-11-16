module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
  overrides: [
    {
      files: ["src/**/*.{js,jsx,ts,tsx}"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
    {
      files: ["cypress/**/*.{js,jsx,ts,tsx}"],
      extends: ["plugin:cypress/recommended"],
      rules: {
        "@typescript-eslint/no-namespace": "off",
      },
    },
  ],
}
