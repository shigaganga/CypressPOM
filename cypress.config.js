const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Medicare Regression Report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: false,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      on("before:run", async (details) => {
        console.log(">>> [Mochawesome] before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log(">>> [Mochawesome] after:run");
        await afterRunHook();
      });

      return config;
    },
    specPattern: "cypress/e2e/POMTest/**/*.cy.js",
  },
});
