import { Then } from "@badeball/cypress-cucumber-preprocessor"

Then("Welcome 메시지가 보인다", () => {
  cy.findByRole("heading", { level: 1 }).should("have.text", "Welcome to Next.js!")
})
