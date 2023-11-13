it("Browsing some pages", () => {
  cy.visitHome();
  cy.waitLoading();
  cy.screenshot("home");

  cy.visitAbout();
  cy.screenshot("about");

  cy.visitMe();
  cy.screenshot("me");
});
