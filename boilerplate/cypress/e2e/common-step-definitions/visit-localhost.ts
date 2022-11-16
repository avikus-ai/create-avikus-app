import { When } from "@badeball/cypress-cucumber-preprocessor"

When("localhost:3000에 접근한다", () => {
  cy.visit("/")
})
