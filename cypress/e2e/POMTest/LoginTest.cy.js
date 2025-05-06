import LoginPage from '../pages/LoginPage.js';

describe('Login Test Suite for Single User from CSV', () => {
    const loginPage = new LoginPage();
    let loginData = null;

    before(() => {
        // Load the CSV data from Dropbox
        cy.task('csv:parseFromDropbox').then((data) => {
            if (data.length === 0) {
                throw new Error("CSV file is empty!");
            }
            loginData = data[0]; // Get the first (and only) row
        });
    });

    beforeEach(() => {
        cy.visit(loginData.baseUrl);
    });

    it('TC_PDP_URL_01: Verify URL is correct', () => {
        cy.url().should('eq', loginData.baseUrl);
    });

    it('TC_PDP_LOGIN_UN_02: Verify username input field', () => {
        loginPage.setUserName(loginData.username);
    });

    it('TC_PDP_LOGIN_PW_03: Verify password input field', () => {
        loginPage.setPassword(loginData.password);
    });

    it('TC_PDP_LOGIN_BUTTON_04: Verify login button is clickable', () => {
        loginPage.clickLoginBtn();
    });
});
