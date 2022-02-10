it("should render a heading", () => {
  cy.visit("/");

  cy.findByRole("heading", { name: /welcome to next.js/i }).should(
    "be.visible"
  );
});
