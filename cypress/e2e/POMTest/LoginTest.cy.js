import LoginPage from '../pages/LoginPage.js';

describe('Login Test Suite', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.fixture('LoginFixture').then((data) => {
            cy.visit(data.baseUrl); 
        });
    });

    it('Test1: Verify URL is correct', () => {
        cy.fixture('LoginFixture').then((data) => {
            cy.url().should('eq', data.baseUrl); 
        });
    });

    it('Test2: Verify username field is present and accepts input', () => {
        cy.fixture('LoginFixture').then((data) => {
            loginPage.setUserName(data.username);
        });
    });

    it('Test3: Verify password field is present and accepts input', () => {
        cy.fixture('LoginFixture').then((data) => {
            loginPage.setPassword(data.password);
        });
    });

    it('Test4: Verify login button is present and clickable', () => {
        loginPage.clickLoginBtn();
    });
});
