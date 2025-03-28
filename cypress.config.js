const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // Generates HTML reports using Mochawesome
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on); // Register Mochawesome plugin
      return config;
    },
    screenshotOnRunFailure: true, // Capture screenshots on test failure
    video: false, // Disable video recording to save space (optional)
  },
});
