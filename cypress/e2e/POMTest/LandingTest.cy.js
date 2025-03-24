/*import LoginPage from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';

describe('Recommendation Flow Test', () => {
    it('should log in and access recommendation page', () => {
         // Visit the login page
         cy.visit('http://analytics.dzeecloud.com/medicareAdvantage_sandbox/login');

        // Use fixture data for login credentials
        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            // Perform login steps
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful
        });
          
         const recPage = new LandingPage();
           recPage.clickCreateRecommendation();
       
    });
});*/

import LoginPage from "../Pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from "../Pages/PrescriptionPage";
import PharmacyPage from "../Pages/PharmacyPage";
import planselectionPage from "../Pages/PlanSelectionPage.js";

describe('LandingPage test', () => {
    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data) => {
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
        });

    });

    it('test1 Verify Tsign', () => {
        //const recPage = new LandingPage();
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickTsign();
        cy.wait(2000);
    });
    it('test2 Verify logout', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickTsign();
        cy.wait(2000);
        recPage.clickLogOut();
        cy.wait(2000);
    });
    it('test3 Verify  Recommendation radio button', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
    });
    it('test4 Verify create Recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickCreateRecommandtionPlan();
        cy.wait(2000);
    });
    it.skip('test5 Verify delete Recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('lata');//Filter by recommendation email or name
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickDeletePlanIcon();
        cy.wait(2000);
        recPage.clickDeleteBut();
        cy.wait(2000);
    });
    it('test6 Verify cancel Recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('lata');//Filter by recommendation email or name
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickDeletePlanIcon();
        cy.wait(2000);
        recPage.clickCancelDeleteBut();
        cy.wait(2000);
        
    });
    it('test7 Verify the Expand Plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('lata');//Filter by recommendation email or name
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
    });
    it('test8 Verify the Collapses Plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('lata');//Filter by recommendation email or name
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickCollapsesPlan();
        cy.wait(2000);
    });
    it('test9 Verify Items per page (Next Page)', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickItemPerPageNext();
        cy.wait(2000);
    });
    it('test10 Verify the Previous page (PreviousPage)', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickItemPreviousPage();
        cy.wait(2000);
    });
    it('test11 Verify the Last Page (LastPage)', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickItemLastPage();
        cy.wait(2000);
    });
    it('test12 Verify the First Page (firstPage)', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickItemFirstPage();
        cy.wait(2000);
    });
    it.only('test13 Verify create Recommendation', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickCreateRecommendation();
        cy.wait(2000);
        const homepage = new HomePage();
        cy.wait(2000);
        homepage.enterEmail('chhabi@gmail.com');
        homepage.clickHealthProfile();
        homepage.clickBestHealth();
        homepage.enterName('Lata');
        homepage.enterLifeexpectancy('80');
        homepage.clickDateOfBirth();
        homepage.clickCalenderEle();
        homepage.clickYear();
        homepage.clickMonth();
        homepage.clickGender();
        homepage.clickMale();
        homepage.enterZip("80108");
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
        homepage.clickMagiTier();
        homepage.clickMagiTier1();
        homepage.clickNext();
        const preferencespage = new PreferencePage();
        preferencespage.clickyesRadioDrugCost();
        preferencespage.clickNextPrefPage();
        const prescriptionpage = new PrescriptionPage();
        prescriptionpage.clickBrowseAtoZlink();
        prescriptionpage.enterLetter('C');
        prescriptionpage.clickSelectDrug();//Captopril
        prescriptionpage.clickAddDrug();
        prescriptionpage.clickAddToDrugList();
        prescriptionpage.doneAddDrugClick();
        const pharmacypage = new PharmacyPage();
        pharmacypage.selectPharmacy();
        pharmacypage.clickNextBtn();
        const planMA = new PlanselectionPage();
        planMA.clickMA();
        planMA.clickPlan();
        planMA.clickDone();
        planMA.clickPlanCheckbox();
        planMA.clickMedicareBut();
        planMA.clickBackBut();
        planMA.clicklongTermBut();
        planMA.clickAivanteLogo();
    });
    it('test14 edit recommendation', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        recPage.enterByEmail('Lata');//Filter by recommendation email or name
        recPage.clickExpandPlan();
        recPage.clickEditRecommandtion();
        const homepage = new HomePage();
        homepage.enterLifeexpectancy('85');
        homepage.clickGender();
        cy.wait(2000);
        homepage.clickFemale();
        homepage.enterStreet('Castle');
        homepage.enterZip("80112");
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
        homepage.clickMagiTier();
        homepage.clickMagiTier3();
        homepage.clickNext();
        const preferencespage = new PreferencePage();
        preferencespage.clickyesRadioDrugCost();
        preferencespage.clickNextPrefPage();
        const prescriptionpage = new PrescriptionPage();
        prescriptionpage.editDrugClick();
    });
    it('test15 Verify view recommendation', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(2000);
        recPage.clickviewBackbut();
        cy.wait(2000);
    });
    it('test16 Verify view low cost pharmacy view-recommendation page then back to the landing page', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(3000)
        recPage.clickviewLowCost();
        cy.wait(3000);
        recPage.clickbackLowCost();//back to the view-recommendation
        cy.wait(3000);
        recPage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test17 Verify view provider on the view-recommendation page then back', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(2000)
        recPage.clickviewProvider();
        cy.wait(2000);
        recPage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(2000);
        recPage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test18 Verify view medicare on the view-recommendation page then back', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(2000)
        recPage.clickviewMedicare();
        cy.wait(2000);
        recPage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(2000);
        recPage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test19 Verify view longTerm on the view-recommendation page then back', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewRecom();
        cy.wait(2000)
        recPage.clickviewLongTerm();
        cy.wait(2000);
        recPage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(2000);
        recPage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test20 Verify delete recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickDeletePlanIcon();
        cy.wait(2000)
        recPage.clickDeleteBut();
    });
    it('test21 Verify cancel the delete recommendation plan', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickRecommendationRadioBut();
        cy.wait(2000);
        recPage.enterByEmail('Lata');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickDeletePlanIcon();
        cy.wait(2000)
        recPage.clickCancelDeleteBut();
    });
    it('test22 Verify Prescription Radio button', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
    });
    it('test23 Verify Edit Prescription', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
        recPage.enterEditPresEmail('chha');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickeditPresDrug();
        cy.wait(2000);
        recPage.clickeditDrug();
        cy.wait(2000);
        recPage.clickFrequencyBut();
        cy.wait(2000);
        recPage.clickFrequency60();
        cy.wait(2000);
        recPage.enterQuanty('45');
    });
    it('test24 Verify view Prescription', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
        recPage.enterEditPresEmail('chha');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickviewDrug();
        cy.wait(2000);
    });
    it('test25 Verify view Prescription', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
        recPage.enterEditPresEmail('chha');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickdeleteDrug();
        cy.wait(2000);
        recPage.clickdeleteDrugBut();
        cy.wait(2000); clickcancelDeleteDrug
    });
    it('test26 Verify view Prescription', () => {
        const recPage = new LandingPage();
        cy.wait(2000);
        recPage.clickPrescriptionRadioBut();
        cy.wait(2000);
        recPage.enterEditPresEmail('chha');
        cy.wait(2000);
        recPage.clickExpandPlan();
        cy.wait(2000);
        recPage.clickdeleteDrug();
        cy.wait(2000);
        recPage.clickcancelDeleteDrug();
        cy.wait(2000);
    });

});




