module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  bracketSpacing: true,
  printWidth: 120,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: ["<THIRD_PARTY_MODULES>", "^[@.]+/"],
  importOrderSeparation: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}
