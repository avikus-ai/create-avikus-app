const browserify = require("@cypress/browserify-preprocessor")
const cucumber = require("cypress-cucumber-preprocessor").default
const resolve = require("resolve")

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  if (process.env.CODE_COVERAGE === "true") {
    config.env.CODE_COVERAGE = process.env.CODE_COVERAGE
    require("@cypress/code-coverage/task")(on, config)
  }
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
  }
  on("file:preprocessor", cucumber(options))
  return config
}
