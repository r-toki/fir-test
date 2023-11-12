const { baseUrl } = require("./constants");

Cypress.Commands.add("visitHome", () => {
  cy.visit(baseUrl + "/");
});
