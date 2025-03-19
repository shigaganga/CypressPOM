
import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import longTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import MedicarePage from '../pages/MedicarePage.js';
describe('Home Flow Test', () => {
    it('should log in and accesshome page', () => {
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
           homepage.enterZip("27529")
           cy.wait(100);
           homepage.searchclick();
           cy.wait(100);
           homepage.NextHomeClick();
           cy.wait(100);
        // homepage.verifyUrl("https://analytics.dzeecloud.com/medicareAdvantage_sandbox/preferences");
         cy.wait(100);
         const prefPage=new PreferencePage();
         cy.wait(100);
         prefPage.clickyesRadioDrugCost();
         cy.wait(100);
         prefPage.clickNextPrefPage();
         cy.wait(100);
         const drugpage=new PrescriptionPage();
         cy.wait(100);
         drugpage.enterDrugSearchBox("Gabapentin");
         cy.wait(100);
         drugpage.selectDrug();
         cy.wait(100);
        drugpage.clickAddToDrug();
        cy.wait(100);
        drugpage.doneAddDrugClick();
        cy.wait(100);
        const Pharmacypage=new PharmacyPage();
        cy.wait(100);
        Pharmacypage.clickFindFarmacy();
        cy.wait(100);
        Pharmacypage.clickfarmacyOne();
        cy.wait(100);
        Pharmacypage.clickfarmacyTwo();
        cy.wait(100);
        Pharmacypage.clicknextpharmacy();
        cy.wait(100);
        const planselctPg=new planselectionPage();
        cy.wait(100);
        const medicarepg=new MedicarePage()
        cy.wait(100);
        const longtermPg=new longTermPage();

        planselctPg.medicareAdvantageClick();
        cy.wait(100);
        planselctPg.planWellCaresimpleClick();
        cy.wait(100);
        planselctPg.DoneplanSelectionClick();
        cy.wait(100);
        planselctPg.tickClick();
        cy.wait(100);
        planselctPg.medicareclick();
        cy.wait(100);
        medicarepg.medicarArrowClick();
        cy.wait(100);
        medicarepg.submitMedicareClick();
        cy.wait(100);
        medicarepg.backToplanSelectionClick();
        cy.wait(100);
        planselctPg.longtermClick();
        cy.wait(100);
        longtermPg.longTermArrowClick();
        cy.wait(100);
        longtermPg.submitLongTermClick();
        cy.wait(100);
        //longtermPg.pdfclick();
        cy.wait(100);
        longtermPg.backLongTermToPlanSelectionClick();
        cy.wait(100);
        planselctPg.AivanteImagClick();
        cy.wait(100);
      
     


    });
});
