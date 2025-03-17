import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import planListPage from '../pages/PlanListPage.js';
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
        recPage.clickRecommedation();
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

    it('should test search preference with YES', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.verifyGreatText();
        prefPage.clickNextPrefPage();  
        
        prefPage.verifyManagePrescriptionurl();
    });

    const prefPage = new PreferencePage();

    it('should test search preference with back', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        prefPage.clickNextPrefPage();  
        
        prefPage.verifyManagePrescriptionurl();
        const drugpage=new PrescriptionPage();
        cy.wait(500);
        drugpage.clickGobackPreference();
        prefPage.verifyPreferencePageUrl();
    
    });
    
    it('should test Edit Yes FunctionalTesting', () => {
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
        
        const planListPg=new planListPage();
        
        planselctPg.medicareAdvantageClick();
        
        planListPg.planWellCaresimpleClick();
        
        planListPg.DoneplanSelectionClick();
        
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
     homepage.NextHomeClick();
     prefPage.clickNextPrefPage();
     drugpage.doneAddDrugClick();
     Pharmacypage.clickfarmacy3Edit();
     
     Pharmacypage.clicknextpharmacy();
     
     planselctPg.medicareAdvantageClick();
     
     planListPg.HumanaGoldPlanClick();
     
     planListPg.DoneplanSelectionClick();
     
     planselctPg.tickClick();
     
     planselctPg.medicareclick();
     cy.wait(300);
     medicarepg.medicarArrowClick();
     cy.wait(200);
     medicarepg.aivanteImgClick();
   
    })
    it('should test Edit No FunctionalTesting', () => {
        const prefPage = new PreferencePage();
        const recPage = new LandingPage();
        const homepage = new HomePage();
        const drugpage=new PrescriptionPage();
        const Pharmacypage=new PharmacyPage();
        const planselctPg=new planselectionPage();
        const longtermPg=new LongTermPage();
        const medicarepg=new MedicareAdvantagepage()
        const planListPg=new planListPage();
        
        prefPage.clicknoRadioDrugCost();  
        prefPage.clickNextPrefPage();  
        planselctPg.medicareAdvantageClick();
        
        prefPage.verifyMedicarePageUrl();
        planListPg.HumanaGoldPlusPlanClick();
        
        planListPg.DoneplanSelectionClick();
        
        planselctPg.tickClick();
        
        planselctPg.medicareclick();
        
        medicarepg.medicarArrowClick();
        
        medicarepg.submitMedicareClick();
        
        medicarepg.backToplanSelectionClick();
        
        planselctPg.longtermClick();
        
        longtermPg.longTermArrowClick();
        
        longtermPg.submitLongTermClick();
        
        longtermPg.backLongTermToPlanSelectionClick()
        planListPg.pdpClick();
       prefPage.verifyPdpPageUrl();
       planListPg.wellcareValuScriptClick();
       planListPg.donePdpClick();
      //lanselctPg.prescriptionClick();
    })
});
