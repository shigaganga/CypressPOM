const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // Use Mochawesome for HTML reports
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on); // Register the plugin properly
      return config;
    },
    specPattern: [
      "cypress/e2e/POMTest/LoginTest.cy.js",
      "cypress/e2e/POMTest/HomeTest.cy.js",
      "cypress/e2e/POMTest/PrescriptionTest.cy.js",
      "cypress/e2e/POMTest/LandingTest.cy.js",
      "cypress/e2e/POMTest/ProviderDialysisFacilityTest.cy.js",
      "cypress/e2e/POMTest/PlanSelectionSupplementTest.cy.js",
      "cypress/e2e/POMTest/PlanSelectionPDPTest.cy.js",
    ],
  },
});
