import { defineConfig } from "cypress"
import createBundler from "@bahmutov/cypress-esbuild-preprocessor"
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor"
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild"

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      if (process.env.CODE_COVERAGE === "true") {
        require("@cypress/code-coverage/task")(on, config)
      }

      await addCucumberPreprocessorPlugin(on, config)

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )

      return config
    },
    baseUrl: "http://localhost:3000",
  },
})
