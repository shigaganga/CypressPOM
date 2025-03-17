const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // For HTML report
  e2e: {
    setupNodeEvents(on, config) {
      // Enable screenshot on failure
      config.screenshotOnRunFailure = true;
      
      // Integrate the Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});
