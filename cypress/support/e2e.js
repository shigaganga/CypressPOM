// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
//Prepared by Rani Yelgalwar
// Import commands.js using ES2015 syntax:
import './commands'
//import 'cypress-mochawesome-reporter/register';
import 'cypress-mochawesome-reporter/register';
require('cypress-xpath')
require('cypress-grep')()

const fs = require("fs");
const path = require("path");
const csvToJson = require("convert-csv-to-json");
const os = require("os");

let dependencyData = [];
let allowed = [];
let consistency_dependency_file;


// ----------------------
// BEFORE ALL TESTS
// ----------------------
before(() => {
  // Get the full file path from the environment variable.
  consistency_dependency_file = Cypress.env("dependencyFile");

  // Throw an error if the path is not provided to prevent the `cy.readFile` error.
  if (!consistency_dependency_file) {
    throw new Error("The 'dependencyFile' environment variable is not defined. Ensure it's passed from your test runner script.");
 }

  // Load allowed tests from the environment variable.
  let rawAllowed = Cypress.env("allowedTests") || [];
  if (typeof rawAllowed === "string") {
    try {
      const parsed = JSON.parse(rawAllowed);
      rawAllowed = Array.isArray(parsed) ? parsed : rawAllowed.split(",").map(s => s.trim());
    } catch {
      rawAllowed = rawAllowed.split(",").map(s => s.trim());
    }
  }
  allowed = rawAllowed.map(s => s.toUpperCase());

  // Use cy.readFile to asynchronously read the file content.
  cy.readFile(consistency_dependency_file, "utf8").then((fileContent) => {
    csvToJson.fieldDelimiter(",");
   dependencyData = csvToJson.csvStringToJson(fileContent);
 });
});

// ----------------------
// BEFORE EACH TEST

beforeEach(function () {
  const title = this.currentTest.title;
  const testId = title.match(/TC[_A-Z0-9\/]*/i)?.[0].toUpperCase();

  console.log('Current Test Title:', title);
  console.log('Extracted Test ID:', testId);
  console.log('Allowed Tests Array:', allowed);


  // If a test doesn't have a valid ID or isn't in the allowed list, skip it.
  if (!testId || !allowed.includes(testId)) {
    this.skip();
    return;
  }
cy.readFile(consistency_dependency_file, "utf8").then((fileContent) => {
    csvToJson.fieldDelimiter(",");
   dependencyData = csvToJson.csvStringToJson(fileContent);


  // Check for dependencies and skip if the dependent test has not passed.
  const row = dependencyData.find(r => r.Test_id.trim().toUpperCase() === testId);
  if (row && row.Dependency && row.Dependency.trim().toUpperCase() !== "NA") {
    const depRow = dependencyData.find(r => r.Test_id.trim().toUpperCase() === row.Dependency.trim().toUpperCase());
    if (depRow && ((depRow.Status === "fail")||(depRow.Status === "Can_not_execute"))) {
      // Update the status and write to the CSV.
      row.Status = "Can_not_execute";
      //cy.writeFile(consistency_dependency_file, generateCsv(dependencyData));
     const csvData=generateCsv(dependencyData);
      cy.task("writeCsvSync", {
        fileName: consistency_dependency_file,
        data:csvData
      });
      this.skip();
    
  }
  }
})
});

// ----------------------
// AFTER EACH TEST
// ----------------------
afterEach(function () {
  const title = this.currentTest.title;
  const testId = title.match(/TC[_A-Z0-9\/]*/i)?.[0].toUpperCase();

  const status =
    this.currentTest.state === "passed"
      ? "pass"
      : this.currentTest.state === "failed"?"fail":"Can_not_execute";
      
      cy.readFile(consistency_dependency_file, "utf8").then((fileContent) => {
    csvToJson.fieldDelimiter(",");
   dependencyData = csvToJson.csvStringToJson(fileContent);
   console.log("Type of dependencyData:", typeof dependencyData);
   console.log("Is Array:", Array.isArray(dependencyData));


  const row = dependencyData.find(r => r.Test_id.trim().toUpperCase() === testId);
  if (row) {
   if (row.Status !== "Can_not_execute") {
        row.Status = status;
      }
    //cy.writeFile(consistency_dependency_file, generateCsv(dependencyData));
   
    const csvData=generateCsv(dependencyData)
    if (typeof csvData !== "string") {
  throw new Error("generateCsv did not return a string. Check input format.");
}

    cy.log("CSV length: " + csvData.length);
console.log("About to write file:", consistency_dependency_file);
console.log("CSV Preview:", csvData.substring(0, 200));
    cy.task("writeCsvSync", {
        fileName: consistency_dependency_file,
        data:csvData
      });
 
  }
})
});


/**
 * Generates CSV content from a JSON array.
 * @param {Array<Object>} data The array of objects to convert.
 * @returns {string} The CSV content.
 */
const generateCsv = (data) => {
  if (data.length === 0) return "";
  const header = Object.keys(data[0]).join(",");
  const rows = data.map(obj => Object.values(obj).join(","));
  return [header, ...rows].join("\n");
};



