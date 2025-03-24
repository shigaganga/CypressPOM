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
import PreferencePage from "../Pages/PreferencesPage";
import PrescriptionPage from "../Pages/PrescriptionPage";
import PharmacyPage from "../Pages/PharmacyPage";
import PlanSelectionPage from "../Pages/PlanSelectionPage";

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
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickTsign();
        cy.wait(2000);
    });
    it.o('test2 Verify logout', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickTsign();
        cy.wait(2000);
        landingpage.clickLogOut();
        cy.wait(2000);
    });
    it('test3 Verify  Recommendation radio button', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
    });
    it('test4 Verify create Recommendation plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickCreateRecommandtionPlan();
        cy.wait(2000);
    });
    it.skip('test5 Verify delete Recommendation plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickDeleteRecommendationIcon();
        cy.wait(2000);
        landingpage.clickDeleteRecommandtionBut();
        cy.wait(2000);
    });
    it('test6 Verify cancel Recommendation plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickDeleteRecommendationIcon();
        cy.wait(2000);
        landingpage.clickCancelRecommendation();
        cy.wait(2000);
    });
    it('test7 Verify the Expand Plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Chha');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
    });
    it('test8 Verify the Collapses Plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Chha');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickCollapsesPlan();
        cy.wait(2000);
    });
    it('test9 Verify Items per page (Next Page)', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickItemPerPageNext();
        cy.wait(2000);
    });
    it('test10 Verify the Previous page (PreviousPage)', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickItemPreviousPage();
        cy.wait(2000);
    });
    it('test11 Verify the Last Page (LastPage)', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickItemLastPage();
        cy.wait(2000);
    });
    it('test12 Verify the First Page (firstPage)', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickItemFirstPage();
        cy.wait(2000);
    });
    it('test13 Verify create Recommendation', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickCreateRecommendation();
        cy.wait(2000);
        const homepage = new HomePage();
        cy.wait(2000);
        homepage.enterRecommendationEmail('chhabi@gmail.com');
        homepage.clickHealthProfile();
        homepage.clickBestHealth();
        homepage.enterRecommName('Lata');
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
        const planMA = new PlanSelectionPage();
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
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Lata');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
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
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Lata');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickviewRecom();
        cy.wait(2000)
        cy.wait(2000);
        landingpage.clickviewBackbut();
        cy.wait(2000);
    });
    it('test16 Verify view low cost pharmacy view-recommendation page then back to the landing page', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Lata');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickviewRecom();
        cy.wait(3000)
        landingpage.clickviewLowCost();
        cy.wait(3000);
        landingpage.clickbackLowCost();//back to the view-recommendation
        cy.wait(3000);
        landingpage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test17 Verify view provider on the view-recommendation page then back', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Lata');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickviewRecom();
        cy.wait(2000)
        landingpage.clickviewProvider();
        cy.wait(2000);
        landingpage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(2000);
        landingpage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test18 Verify view medicare on the view-recommendation page then back', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Lata');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickviewRecom();
        cy.wait(2000)
        landingpage.clickviewMedicare();
        cy.wait(2000);
        landingpage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(2000);
        landingpage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test19 Verify view longTerm on the view-recommendation page then back', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Lata');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickviewRecom();
        cy.wait(2000)
        landingpage.clickviewLongTerm();
        cy.wait(2000);
        landingpage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(2000);
        landingpage.clickviewBackbut();//back to the landing page
        cy.wait(2000);
    });
    it('test20 Verify delete recommendation plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Lata');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickDeletePlanIcon();
        cy.wait(2000)
        landingpage.clickDeleteBut();
    });
    it('test21 Verify cancel the delete recommendation plan', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Lata');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickDeletePlanIcon();
        cy.wait(2000)
        landingpage.clickCancelDeleteBut();
    });
    it('test22 Verify Prescription Radio button', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
    });
    it('test23 Verify Edit Prescription', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
        landingpage.enterEditPresEmail('chha');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickeditPresDrug();
        cy.wait(2000);
        landingpage.clickeditDrug();
        cy.wait(2000);
        landingpage.clickFrequencyBut();
        cy.wait(2000);
        landingpage.clickFrequency60();
        cy.wait(2000);
        landingpage.enterQuanty('45');
    });
    it('test24 Verify view Prescription', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
        landingpage.enterEditPresEmail('chha');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickviewDrug();
        cy.wait(2000);
    });
    it('test25 Verify view Prescription', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
        landingpage.enterEditPresEmail('chha');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickdeleteDrug();
        cy.wait(2000);
        landingpage.clickdeleteDrugBut();
        cy.wait(2000);clickcancelDeleteDrug
    });
    it('test26 Verify view Prescription', () => {
        const landingpage = new LandingPage();
        cy.wait(2000);
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
        landingpage.enterEditPresEmail('chha');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickdeleteDrug();
        cy.wait(2000);
        landingpage.clickcancelDeleteDrug();
        cy.wait(2000);
    });

});




