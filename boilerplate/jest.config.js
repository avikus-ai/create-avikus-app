const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
}

module.exports = createJestConfig(customJestConfig)
