
import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import longTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import MedicarePage from '../pages/MedicarePage.js';
describe('smoke Flow Test', () => {
    it('should log in and creaate a recommendation', () => {
         // Visit the login page
         cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        // Use fixture data for login credentials
        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            // Perform login steps
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful
        });
            // Now, on the landing page the recommendation button exists
            // Interact with recommendation page after login
         const recPage = new LandingPage();
           recPage.clickCreateRecommendation();
           const homepage=new HomePage();
           cy.wait(500);
           homepage.enterEmail("ShigaPOM@gmail.com");
           cy.wait(500);
           homepage.clickhealthArrow();
           cy.wait(500);
           homepage.clickGoodHealth();
           cy.wait(500);
           homepage.enterName("Shigapage");
           cy.wait(500);
           homepage.enterLifeexpectancy("86");
           cy.wait(500);
           homepage.datePickerclick();
           cy.wait(500);
           homepage.year1957click();
           cy.wait(500);
           homepage.month1957click();
           cy.wait(500);
           homepage.enterZip("27529")
           cy.wait(500);
           homepage.clickSearch();
           cy.wait(500);
           homepage.nextHomeClick();
           cy.wait(500);
        // homepage.verifyUrl("https://analytics.dzeecloud.com/medicareAdvantage_sandbox/preferences");
         cy.wait(500);
         const prefPage=new PreferencePage();
         cy.wait(500);
         prefPage.clickyesRadioDrugCost();
         cy.wait(500);
         prefPage.clickNextPrefPage();
         cy.wait(500);
         const drugpage=new PrescriptionPage();
         cy.wait(500);
         drugpage.enterDrugSearchBox("Gabapentin");
         cy.wait(500);
         drugpage.selectDrug();
         cy.wait(500);
        drugpage.clickAddToDrug();
        cy.wait(500);
        drugpage.doneAddDrugClick();
        cy.wait(500);
        const Pharmacypage=new PharmacyPage();
        cy.wait(500);
        Pharmacypage.clickFindFarmacy();
        cy.wait(500);
        Pharmacypage.clickfarmacyOne();
        cy.wait(500);
        Pharmacypage.clickfarmacyTwo();
        cy.wait(500);
        Pharmacypage.clicknextpharmacy();
        cy.wait(500);
        const planselctPg=new planselectionPage();
        cy.wait(500);
        const medicarepg=new MedicarePage()
        cy.wait(500);
        const longtermPg=new longTermPage();

        planselctPg.medicareAdvantageClick();
        cy.wait(500);
        planselctPg.planWellCaresimpleClick();
        cy.wait(500);
        planselctPg.donePlanSelectionClick();
        cy.wait(500);
        planselctPg.tickClick();
        cy.wait(500);
        planselctPg.medicareclick();
        cy.wait(500);
        medicarepg.medicarArrowClick();
        cy.wait(500);
        medicarepg.submitMedicareClick();
        cy.wait(500);
        medicarepg.backToplanSelectionClick();
        cy.wait(500);
        planselctPg.longtermClick();
        cy.wait(500);
        longtermPg.longTermArrowClick();
        cy.wait(500);
        longtermPg.submitLongTermClick();
        cy.wait(500);
        //longtermPg.pdfclick();
        cy.wait(500);
        longtermPg.backLongTermToPlanSelectionClick();
        cy.wait(500);
        planselctPg.aivanteImagClick();
        cy.wait(500);
      
     


    });
});
