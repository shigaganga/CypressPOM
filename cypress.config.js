const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");
const fs = require('fs');  // fs is fine

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
      require('cypress-grep/src/plugin')(config);

      on('task', {
        async 'csv:parse'(filePath) {
          const neatCSV = (await import('neat-csv')).default;  // 👈 dynamic import
          const csvContent = fs.readFileSync(filePath);
          const parsed = await neatCSV(csvContent);
          return parsed;
        }
      });

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
