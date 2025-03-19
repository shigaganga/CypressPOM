import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import LongTermPage from '../pages/LongTermPage.js';
import MedicareAdvantagepage from '../pages/MedicarePage.js';
import PharmacyPage from '../pages/PharmacyPage.js';

describe('PreferenceTest', () => {

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
        recPage.clickCreateRecommendation();
        const homepage = new HomePage();
        
        homepage.enterEmail("ShigaPOM@gmail.com");
        
        homepage.clickhealthArrow();
        
        homepage.clickGoodHealth();
        
        homepage.enterName("Shigapage");
        
        homepage.enterLifeexpectancy("86");
        
        homepage.datePickerclick();
        
        homepage.year1957click();
        
        homepage.month1957click();
        
        homepage.enterZip("27529");
        
        homepage.searchclick();
        
        homepage.NextHomeClick();
        
    });

    it('test1,should test search preference with YES', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.verifyGreatText();
        prefPage.clickNextPrefPage();  
        
        prefPage.verifyManagePrescriptionurl();
    });

    it.only('test2,should test search preference with No', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clicknoRadioDrugCost();  
        
        prefPage.verifyAreUSureText();
        prefPage.clickNextPrefPage();  
        
        prefPage.verifyPlanSelectionUrl();
    });

    it('test3,should test search preference with back', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        prefPage.clickNextPrefPage();  
        
        prefPage.verifyManagePrescriptionurl();
        const drugpage=new PrescriptionPage();
        cy.wait(500);
        drugpage.clickGobackPreference();
        prefPage.verifyPreferencePageUrl();
    
    });
    
    it.skip('should test search preference with no, FunctionalTesting', () => {
        const prefPage = new PreferencePage();
        const recPage = new LandingPage();
        const homepage = new HomePage();
        const drugpage=new PrescriptionPage();
        const Pharmacypage=new PharmacyPage();
        const planselctPg=new planselectionPage();
        const longtermPg=new LongTermPage();
        const medicarepg=new MedicareAdvantagepage()
        
        prefPage.clickyesRadioDrugCost();  
        prefPage.clickNextPrefPage();  
         
         drugpage.enterDrugSearchBox("Gabapentin");
         
         drugpage.selectDrug();
         
        drugpage.clickAddToDrug();
        
        drugpage.doneAddDrugClick();
        
        Pharmacypage.clickFindFarmacy();
        
        Pharmacypage.clickfarmacyOne();
        
        Pharmacypage.clickfarmacyTwo();
        
        Pharmacypage.clicknextpharmacy();
        
        
        planselctPg.medicareAdvantageClick();
        
        planselctPg.planWellCaresimpleClick();
        
        planselctPg.DoneplanSelectionClick();
        
        planselctPg.tickClick();
        
        planselctPg.medicareclick();
        
        medicarepg.medicarArrowClick();
        
        medicarepg.submitMedicareClick();
        
        medicarepg.backToplanSelectionClick();
        
        planselctPg.longtermClick();
        
        longtermPg.longTermArrowClick();
        
        longtermPg.submitLongTermClick();
        
       // longtermPg.pdfclick();
        
        longtermPg.backLongTermToPlanSelectionClick();
        
        planselctPg.AivanteImagClick();
        
       recPage.editRecommendationClick();
     homepage.nextHomeClick();
     prefPage.clickNextPrefPage();
     drugpage.doneAddDrugClick();
     Pharmacypage.clickfarmacy3Edit();
     Pharmacypage.clicknextpharmacy();
     planselctPg.medicareAdvantageClick();
     planselctPg.HumanaGoldPlanClick();
     planselctPg.DoneplanSelectionClick();
     planselctPg.tickClick();
     planselctPg.medicareclick();
     cy.wait(300);
     medicarepg.medicarArrowClick();
     cy.wait(200);
     medicarepg.aivanteImgClick();
   
    })
    it('should test next button on view recommendation, navigationTesting', () => {
        const prefPage = new PreferencePage();
        const planselctPg=new planselectionPage()
        prefPage.clicknoRadioDrugCost();  
        prefPage.clickNextPrefPage();  
    planselctPg.verifyManagePrescriptionurl();
    })
});
