const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      allureWriter(on, config);

      return config;
    },
    screenshotOnRunFailure: true, // Enable screenshot on failure
    video: true, // Disable video recording (optional)
    screenshotsFolder: 'cypress/screenshots', // Set folder for screenshots
    //trashAssetsBeforeRuns: true, // Clean up previous screenshots before the new run
  },
});
