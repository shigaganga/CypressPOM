const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const os = require("os");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: false,
    json: true, // required to generate .json files
    charts: true,
    reportPageTitle: "Aivante Regression Report",
    embeddedScreenshots: true,
    inlineAssets: true
  },
  video: false,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);

      on('task', {
        // Existing local CSV parsing
        async 'csv:parse'(filePath) {
          try {
            const neatCSV = (await import('neat-csv')).default;
            const csvContent = fs.readFileSync(filePath, 'utf8');
            const parsed = await neatCSV(csvContent);
            return parsed;
          } catch (error) {
            console.error("Error parsing CSV:", error);
            throw error;
          }
        },

        // NEW: Dropbox CSV parser
        async 'csv:parseFromDropbox'() {
          const url = 'https://www.dropbox.com/scl/fi/dbo7oliwefy1lub9ahju2/data.csv?rlkey=s2rxqgzlijc9f8gmkpdrdgzp8&st=9wvlsftw&dl=1';
         
          try {
            const response = await axios.get(url);
            const neatCSV = (await import('neat-csv')).default;
            const parsed = await neatCSV(response.data);
            return parsed;
          } catch (error) {
            console.error("Error downloading or parsing CSV from Dropbox:", error);
            throw error;
          }
        },

        // Existing write CSV file task
        writeCsvSync({fileName, data}) {
          try {

            console.log("writeCsvSync called with:");
    console.log("→ fileName:", fileName);
    console.log("→ typeof data:", typeof data);
    console.log("→ data preview:", data?.substring?.(0, 200));

            if (typeof data !== "string") {
          throw new Error("writeCsvSync: data must be a string. Received: " + typeof data);
        }
            //const filePath = path.join(os.homedir(), "Downloads", fileName);
            fs.writeFileSync(fileName,data,'utf8');
            return null;
          } catch (error) {
            console.error("Error writing CSV file:", error);
            throw error;
          }
        }


        
      });

      // Mochawesome hooks
      on("before:run", async (details) => {
        console.log(">>> [Mochawesome] before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log(">>> [Mochawesome] after:run");
        await afterRunHook();
      });


const filePath = path.resolve(__dirname, 'allowedTests.json');
      let allowedTests = [];

      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, 'utf8');
          allowedTests = JSON.parse(raw);
        } catch (e) {
          console.error('❌ Failed to parse allowedTests.json:', e.message);
        }
      }

      config.env.allowedTests = allowedTests;





     return config;
    },
    specPattern: "cypress/e2e/POMTest/**/*.cy.js",
  },


});
