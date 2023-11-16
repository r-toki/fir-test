it("Browsing some pages", () => {
  cy.visitHome();
  cy.waitLoading();
  cy.get("h1").contains("Home").should("be.visible");

  cy.visitAbout();
  cy.get("h1").contains("About").should("be.visible");

  cy.visitMe();
  cy.get("h1").contains("Me").should("be.visible");
});
