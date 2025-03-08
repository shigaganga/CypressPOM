import LoginPage from '../pages/LoginPage.js';
import RecommendationLandingPage from '../pages/RecomendationLandingPage.cy.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import ManagePrescriptionPage from '../pages/ManagePrescriptionPage.js';
import ManageFarmacyPage from '../pages/ManageFarmacyPage';
import planselectionPage from '../pages/PlanselectionPage.js';
import planListPage from '../pages/PlanListPage.js';
import longTermPage from '../pages/LongTermPage.js';
import MedicareAdvantagepage from '../pages/MedicareAdvantagePage.js';

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
            lPage.ClickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful
        });
            // Now, on the landing page the recommendation button exists
            // Interact with recommendation page after login
         const recPage = new RecommendationLandingPage();
           recPage.clickRecommedation();
           const HPage=new HomePage();
           cy.wait(100);
           HPage.EnterEmail("ShigaPOM@gmail.com");
           cy.wait(100);
           HPage.clickhealthArrow();
           cy.wait(100);
           HPage.clickGoodHealth();
           cy.wait(100);
           HPage.EnterName("Shigapage");
           cy.wait(100);
           HPage.enterLifeExpectancy("86");
           cy.wait(100);
           HPage.DatePickerclick();
           cy.wait(100);
           HPage.Yearclick();
           cy.wait(100);
           HPage.Monthclick();
           cy.wait(100);
           HPage.Enterzip("27529")
           cy.wait(100);
           HPage.searchclick();
           cy.wait(100);
           HPage.NextHomeClick();
           cy.wait(100);
        // HPage.verifyUrl("https://analytics.dzeecloud.com/medicareAdvantage_sandbox/preferences");
         cy.wait(100);
         const prefPage=new PreferencePage();
         cy.wait(100);
         prefPage.clickyesRadioDrugCost();
         cy.wait(100);
         prefPage.clickNextPrefPage();
         cy.wait(100);
         const drugpage=new ManagePrescriptionPage();
         cy.wait(100);
         drugpage.EnterDrugSearchBox("Gabapentin");
         cy.wait(100);
         drugpage.SelectDrug();
         cy.wait(100);
        drugpage.clickAddToDrug();
        cy.wait(100);
        drugpage.DoneAddDrugClick();
        cy.wait(100);
        const Pharmacypage=new ManageFarmacyPage();
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
        const planListPg=new planListPage();
        cy.wait(100);
        const medicarepg=new MedicareAdvantagepage()
        cy.wait(100);
        const longtermPg=new longTermPage();

        planselctPg.medicareAdvantageClick();
        cy.wait(100);
        planListPg.planWellCaresimpleClick();
        cy.wait(100);
        planListPg.DoneplanSelectionClick();
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
       // longtermPg.pdfclick();
        cy.wait(100);
        longtermPg.backLongTermToPlanSelectionClick();
        cy.wait(100);
        planselctPg.AivanteImagClick();
        cy.wait(100);
      
     


    });
});