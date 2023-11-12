it("Browsing some pages", () => {
  cy.visitHome();
  cy.get("h1").contains("Home").should("be.visible");
  cy.contains("Loading...").should("be.visible");
  cy.contains("Good evening from firebase!").should("be.visible");

  cy.contains("a", "About").click();
  cy.get("h1").contains("About").should("be.visible");

  cy.contains("a", "Me").click();
  cy.get("h1").contains("Me").should("be.visible");

  cy.contains("a", "Home").click();
  cy.get("h1").contains("Home").should("be.visible");
  cy.contains("Loading...").should("not.exist");
  cy.contains("Good evening from firebase!").should("be.visible");

  cy.reload();
  cy.contains("Loading...").should("be.visible");
  cy.contains("Good evening from firebase!").should("be.visible");
});
