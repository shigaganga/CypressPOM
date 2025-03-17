describe('Regression Suite', function() {
    it('Login Test', function() {
      cy.exec('npx cypress run --spec cypress/e2e/POMTest/LoginTest.cy.js', { failOnNonZeroExit: false });
    });
  
    it('Home Test', function() {
      cy.exec('npx cypress run --spec cypress/e2e/POMTest/HomeTest.cy.js', { failOnNonZeroExit: false });
    });
  
    it('Preference Test', function() {
      cy.exec('npx cypress run --spec cypress/e2e/POMTest/PreferenceTest.cy.js', { failOnNonZeroExit: false });
    });
  
    it('Prescription Test', function() {
      cy.exec('npx cypress run --spec cypress/e2e/POMTest/PrescriptionTest.cy.js', { failOnNonZeroExit: false });
    });
  });
  