const { upperFirst } = require("lodash");

const { baseUrl } = require("./constants");

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/me",
    name: "me",
  },
];

routes.forEach((v) => {
  Cypress.Commands.add(`visit${upperFirst(v.name)}`, () =>
    cy.visit(baseUrl + v.path)
  );
});

Cypress.Commands.add("waitLoading", () => {
  cy.contains("Loading...", { timeout: 10 * 1_000 }).should("be.visible");
  cy.contains("Loading...", { timeout: 10 * 1_000 }).should("not.exist");
});
