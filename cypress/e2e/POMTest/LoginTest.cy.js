import LoginPage from '../pages/LoginPage.js';

describe('Login Test Suite', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.fixture('LoginFixture').then((data) => {
            cy.visit(data.baseUrl); 
        });
    });

    it('TC_PDP_URL_01: Verify URL is correct', () => {
        cy.fixture('LoginFixture').then((data) => {
            cy.url().should('eq', data.baseUrl); 
        });
    });

    it('TC_PDP_LOGIN_UN_02: Verify username field is present and accepts input', () => {
        cy.fixture('LoginFixture').then((data) => {
            loginPage.setUserName(data.username);
        });
    });

    it('TC_PDP_LOGIN_PW_03: Verify password field is present and accepts input', () => {
        cy.fixture('LoginFixture').then((data) => {
            loginPage.setPassword(data.password);
        });
    });

    it('TC_PDP_LOG IN_BUTTON_04: Verify login button is present and clickable', () => {
        loginPage.clickLoginBtn();
    });
});
