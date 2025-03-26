
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
           
           homepage.enterEmail("ShigaPOM@gmail.com");
           
           homepage.clickhealthArrow();
           
           homepage.clickGoodHealth();
           
           homepage.enterName("Shigapage");
           
           homepage.enterLifeexpectancy("86");
           
           homepage.datePickerclick();
           
           homepage.year1957click();
           
           homepage.month1957click();
           
           homepage.enterZip("27529")
           
           homepage.clickSearch();
           
           homepage.nextHomeClick();
           
        // homepage.verifyUrl("https://analytics.dzeecloud.com/medicareAdvantage_sandbox/preferences");
         
         const prefPage=new PreferencePage();
         
         prefPage.clickyesRadioDrugCost();
         
         prefPage.clickNextPrefPage();
         
         const drugpage=new PrescriptionPage();
         
         drugpage.enterDrugSearchBox("Gabapentin");
         
         drugpage.selectDrug();
         
        drugpage.clickAddToDrug();
        
        drugpage.doneAddDrugClick();
        
        const Pharmacypage=new PharmacyPage();
        
        Pharmacypage.clickFindFarmacy();
        
        Pharmacypage.clickfarmacyOne();
        
        Pharmacypage.clickfarmacyTwo();
        
        Pharmacypage.clicknextpharmacy();
        
        const planselctPg=new planselectionPage();
        
        const medicarepg=new MedicarePage()
        
        const longtermPg=new longTermPage();

        planselctPg.medicareAdvantageClick();
        
        planselctPg.planWellCaresimpleClick();
        
        planselctPg.donePlanSelectionClick();
        
        planselctPg.tickClick();
        
        planselctPg.medicareclick();
        
        medicarepg.medicarArrowClick();
        
        medicarepg.submitMedicareClick();
        
        medicarepg.backToplanSelectionClick();
        
        planselctPg.longtermClick();
        
        longtermPg.longTermArrowClick();
        
        longtermPg.submitLongTermClick();
        
        //longtermPg.pdfclick();
        
        longtermPg.backLongTermToPlanSelectionClick();
        
        planselctPg.aivanteImagClick();
        
      
     


    });
});
