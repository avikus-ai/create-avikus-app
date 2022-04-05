import "./commands"

if (Cypress.env("CODE_COVERAGE")) {
  ;(async () => {
    import("@cypress/code-coverage/support")
  })()
}

afterEach(() =>
  cy.window().then((window) => {
    const { worker } = window.msw
    worker.resetHandlers()
  })
)
