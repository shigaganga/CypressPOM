const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // Use Mochawesome for HTML reports
  video: false, // Disable video recordings to save execution time
  screenshotOnRunFailure: true, // Capture screenshots on failure
  e2e: {
   // baseUrl: "http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage", // Define base URL
    setupNodeEvents(on, config) {
      mochawesome(on); // Register Mochawesome
      return config;
    },
    specPattern: "cypress/e2e/POMTest/**/*.cy.js", // Automatically run all tests in the POMTest folder
  },
});