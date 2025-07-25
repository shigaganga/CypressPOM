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

// Import commands.js using ES2015 syntax:
import './commands'
//import 'cypress-mochawesome-reporter/register';
import 'cypress-mochawesome-reporter/register';
require('cypress-xpath')
require('cypress-grep')()

// Alternatively you can use CommonJS syntax:
// require('./commands')

/*beforeEach(function () {
  let allowed = Cypress.env('allowedTests') || [];

  // Normalize to array
  if (typeof allowed === 'string') {
    try {
      const parsed = JSON.parse(allowed);
      if (Array.isArray(parsed)) {
        allowed = parsed;
      } else {
        allowed = allowed.split(',').map(s => s.trim());
      }
    } catch (e) {
      allowed = allowed.split(',').map(s => s.trim());
    }
  }

  const title = this.currentTest.title;
  const testId = title.match(/(TC_[A-Za-z0-9_]+)/)?.[1];

  if (testId && !allowed.includes(testId)) {
    console.log(`⏩ Skipping test: ${testId}`);
    this.skip();
  }
});*/


/*beforeEach(function () {
  let allowed = Cypress.env('allowedTests') || [];

  // Normalize to array
  if (typeof allowed === 'string') {
    try {
      const parsed = JSON.parse(allowed);
      if (Array.isArray(parsed)) {
        allowed = parsed;
      } else {
        allowed = allowed.split(',').map(s => s.trim());
      }
    } catch (e) {
      allowed = allowed.split(',').map(s => s.trim());
    }
  }

  // Normalize casing to avoid case mismatch
  allowed = allowed.map(s => s.toUpperCase());

  const title = this.currentTest.title;
  const testId = title.match(/TC_[A-Z0-9_]+/i)?.[0].toUpperCase();

  console.log('🔍 Test title:', title);
  console.log('🔍 Extracted testId:', testId);
  console.log('✅ Allowed list:', allowed);

  if (testId && !allowed.includes(testId)) {
    console.log(`⏩ Skipping test: ${testId}`);
    this.skip();
  }
});*/

