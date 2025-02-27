const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',//for html report
  e2e: {
    setupNodeEvents(on, config) {
      screenshotOnRunFailure: true, // Enable screenshot on failure
      require('cypress-mochawesome-reporter/plugin')(on);//2nd config for html report
      return config;
    },
   
  },
});
