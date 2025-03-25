import ProviderPage from "../pages/ProviderPage.js";

describe('Automation testing', () => {
    it('test', () => {

        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        cy.fixture('LoginFixture').then((data) => {

            const providerPage = new ProviderPage();
            providerPage.clickProviderBtn();

        })

    })
})