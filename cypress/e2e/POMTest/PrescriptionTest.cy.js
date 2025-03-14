import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import PreferencePage from '../pages/PreferencePage.js';
describe('PrescriptionPageTest', () => {

    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); 
        });

        const recPage = new LandingPage();
        recPage.clickRecommedation();
        const homepage = new HomePage();
        cy.wait(100);
        homepage.enterEmail("ShigaPOM@gmail.com");
        cy.wait(100);
        homepage.clickhealthArrow();
        cy.wait(100);
        homepage.clickGoodHealth();
        cy.wait(100);
        homepage.enterName("Shigapage");
        cy.wait(100);
        homepage.enterLifeexpectancy("86");
        cy.wait(100);
        homepage.datePickerclick();
        cy.wait(100);
        homepage.year1957click();
        cy.wait(100);
        homepage.month1957click();
        cy.wait(100);
        homepage.enterZip("27529");
        cy.wait(100);
        homepage.searchclick();
        cy.wait(100);
        homepage.NextHomeClick();
        cy.wait(100);
    });
    it('should add or import prescription drug and proceed', () => {
        const prefPage = new PreferencePage();
        cy.wait(100);
        prefPage.clickyesRadioDrugCost();  
        cy.wait(100);
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        cy.wait(100);
        drugPage.enterDrugSearchBox("Gabapentin");
        cy.wait(100);
        drugPage.selectDrug();
        cy.wait(100);
        drugPage.clickAddToDrug();
        cy.wait(100);
        drugPage.doneAddDrugClick();
    });
    it('validate begin typing to find &select your drug', () => {
        const prefPage = new PreferencePage();
        cy.wait(100);
        prefPage.clickyesRadioDrugCost();  
        cy.wait(100);
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        cy.wait(100);
        drugPage.enterDrugSearchBox("Gabapentin");
        cy.wait(100);
        drugPage.selectDrug();
        cy.wait(100);
        drugPage.clickAddToDrug();
        cy.wait(100);
        drugPage.doneAddDrugClick();
    });
});