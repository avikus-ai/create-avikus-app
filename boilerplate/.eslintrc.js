module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-var-requires": "off",
  },
  overrides: [
    {
      files: ["src/**/*.{js,jsx,ts,tsx}"],
      extends: ["plugin:playwright/recommended", "plugin:jest-dom/recommended"],
    },
  ],
}
