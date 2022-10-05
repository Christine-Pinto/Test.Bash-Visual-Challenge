/// <reference types="cypress" />

describe("Test Bash() visual challenge", () => {
  it("Check if the map loads correctly", () => {
    cy.eyesOpen({
      testName: Cypress.currentTest.title,
    });
    cy.visit("https://automationintesting.online");

    cy.get("div.map").scrollIntoView().should("be.visible");

    cy.eyesCheckWindow({
      tag: "Map check",
      target: "region",
      selector: {
        type: "css",
        selector: "div.map",
      },
    });
    cy.eyesClose();
  });
});
