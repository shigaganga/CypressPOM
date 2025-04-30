import LoginPage from '../pages/LoginPage.js';

describe('Login Test Suite', () => {
    const loginPage = new LoginPage();
    let loginData; // Variable to hold CSV data

    before(() => {
        // Load the CSV data from Dropbox before running the tests using the csv:parseFromDropbox task
        cy.task('csv:parseFromDropbox').then((data) => {
            loginData = {};
            // Assuming each row in the CSV contains 'key' and 'value' columns
            // You can adjust the logic here if your CSV has a different structure
            data.forEach(item => {
                loginData[item.key] = item.value;
            });
        });
    });

    beforeEach(() => {
        // Visit the URL from the CSV file before each test
        cy.visit(loginData.baseUrl);
    });

    it('TC_PDP_URL_01: Verify URL is correct', () => {
        // Verify that the page URL matches the expected URL from CSV
        cy.url().should('eq', loginData.baseUrl);
    });

    it('TC_PDP_LOGIN_UN_02: Verify username field is present and accepts input', () => {
        // Verify that the username field accepts input from the CSV
        loginPage.setUserName(loginData.username);
    });

    it('TC_PDP_LOGIN_PW_03: Verify password field is present and accepts input', () => {
        // Verify that the password field accepts input from the CSV
        loginPage.setPassword(loginData.password);
    });

    it('TC_PDP_LOGIN_BUTTON_04: Verify login button is present and clickable', () => {
        // Verify that the login button is clickable
        loginPage.clickLoginBtn();
    });
});
