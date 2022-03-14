import "./commands"

if (Cypress.env("CODE_COVERAGE")) {
  ;(async () => {
    import("@cypress/code-coverage/support")
  })()
}
