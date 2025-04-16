import LoginPage from "../pages/LoginPage.js";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from "../pages/PrescriptionPage.js";
import PharmacyPage from "../pages/PharmacyPage.js";
import planselectionPage from '../pages/PlanselectionPage.js';

describe('Recommendation Flow Test', () => {
    const landingpage = new LandingPage();
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
landingpage.clickTsign();
});
    it('test2 Verify logout', () => {
        landingpage.clickTsign();
     landingpage.clickLogOut();
    
    });
    it('test3 Verify create Recommendation', () => {
        landingpage.clickCreateRecommendation();
        cy.wait(2000);
        const homepage = new HomePage();
        cy.wait(2000);
        homepage.enterEmail('chhabi@gmail.com');
        homepage.clickHealthProfile();
        homepage.clickBestHealth();
        homepage.enterName('Test');
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
        const pharmacypg = new PharmacyPage();
        pharmacypg.clickPharmacy3();
        pharmacypg.clicknextpharmacy();
        const planselectionpage = new planselectionPage();
        planselectionpage.medicareAdvantageClick();
        planselectionpage.clickSecondPlan();
        planselectionpage.donePlanSelectionClick();
        planselectionpage.tickClick();
        planselectionpage.medicareclick();
        //planselectionpage.clickbackMA();
        //planselectionpage.longtermClick();
        planselectionpage.aivanteImagClick();

    });
    it('test4 Verify  Recommendation radio button', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
    });
    it('test5 Verify create Recommendation button', () => {
        landingpage.clickCreateRecommendation();
        cy.wait(2000);
    });
    it('test6 Verify the Expand Plan', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
    });
    it('test7 Verify the Collapses Plan', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickCollapsesPlan();
        cy.wait(2000);
    });
    it('test8 Verify Items per page (Next Page)', () => {
        landingpage.clickItemPerPageNext();
        cy.wait(2000);
    });
    it('test9 Verify the Previous page (PreviousPage)', () => {
        landingpage.clickItemPerPageNext();
        cy.wait(2000);
        landingpage.clickItemPreviousPage();
        cy.wait(2000);
    });
    it('test10 Verify the Last Page (LastPage)', () => {
        landingpage.clickItemLastPage();
        cy.wait(2000);
    });
    it('test11 Verify the First Page (firstPage)', () => {
        landingpage.clickItemFirstPage();
        cy.wait(2000);
    });
    it('test12 edit healthProfile', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditHealthProfile();
        landingpage.clickeditModerateHealth();
    });
    it('test13 edit name', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(4000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(4000);
        landingpage.clickExpandPlan();
        cy.wait(4000);
        landingpage.clickEditRecommandtion();//enterEditRecommendationName
        cy.wait(2000);
        landingpage.enterEditRecommendationName('Name');
    });
    it('test14 edit life expectancy', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(4000);
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(4000);
        landingpage.clickEditRecommandtion();
        cy.wait(4000);
        landingpage.enterEditLifeExpectancy('90');
    });
    it('test15 edit DOB', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(4000);
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickeditCalenderEle();
        landingpage.clickeditYear();
        landingpage.clickeditMonth();
    });
    it('test16 edit Gender Male', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();
        cy.wait(2000);
        landingpage.clickEditGender();
        cy.wait(2000);
        landingpage.clickEditGenderMale();
    });
    it('test17 edit Gender Female', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(4000);
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditGender();
        landingpage.clickEditGenderFemale();
    });
    it('test18 edit Tabacco No', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditTabaccoNo();
    });
    it('test19 edit Tabacco Yes', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditTabaccoYes();
    });
    it('test20 edit Tax filing with individual', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditTaxFilingIndiv();
    });
    it('test21 edit Tax filing with Jointly', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditTaxFilingJoin();
    });
    it('test22 edit Street', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.enterStreet('Castle');
    });
    it('test23 edit Zip code', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.enterEditZipcode('80112');
        landingpage.clickZipcodeSearchBut();
    });
    it('test24 edit Contact', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.enterEditContact('1234567899');
    });
    it('test25 Verify view recommendation', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('Test');
        cy.wait(1000);
        landingpage.clickExpandPlan();
        cy.wait(1000);
        landingpage.clickviewRecom();
        cy.wait(1000);
        landingpage.clickviewBackbut();
        cy.wait(1000);
    });
    it('test26 Verify view low cost pharmacy view-recommendation page then back to the landing page', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('Test');
        cy.wait(1000);
        landingpage.clickExpandPlan();
        cy.wait(1000);
        landingpage.clickviewRecom();
        cy.wait(1000)
        landingpage.clickviewLowCost();
        cy.wait(1000);
        landingpage.clickbackLowCost();//back to the view-recommendation
        cy.wait(1000);
        landingpage.clickviewBackbut();//back to the landing page
        cy.wait(1000);
    });
    it('test27 Verify view provider on the view-recommendation page then back', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('Test');
        cy.wait(1000);
        landingpage.clickExpandPlan();
        cy.wait(1000);
        landingpage.clickviewRecom();
        cy.wait(1000)
        landingpage.clickviewProvider();
        cy.wait(1000);
        landingpage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(1000);
        landingpage.clickviewBackbut();//back to the landing page
        cy.wait(1000);
    });
    it('test28 Verify view medicare on the view-recommendation page then back', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('Test');
        cy.wait(1000);
        landingpage.clickExpandPlan();
        cy.wait(1000);
        landingpage.clickviewRecom();
        cy.wait(1000)
        landingpage.clickviewMedicare();
        cy.wait(1000);
        landingpage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(1000);
        landingpage.clickviewBackbut();//back to the landing page
        cy.wait(1000);
    });
    it('test29 Verify view longTerm on the view-recommendation page then back', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('Test');
        cy.wait(1000);
        landingpage.clickExpandPlan();
        cy.wait(1000);
        landingpage.clickviewRecom();
        cy.wait(1000)
        landingpage.clickviewLongTerm();
        cy.wait(1000);
        landingpage.clickbackViewRecommendation();//back to the view-recommendation
        cy.wait(1000);
        landingpage.clickviewBackbut();//back to the landing page
        cy.wait(1000);
    });
    it.skip('test30 Verify delete User-ID', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.clickdeleteUserIDIcon();
        cy.wait(2000);
        landingpage.clickDeleteBut();
        cy.wait(2000);
    });
    it('test31 Verify cancel delete User-ID', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
       landingpage.clickdeleteUserIDIcon();
        cy.wait(2000);
        landingpage.clickCancelDeleteBut();
        cy.wait(2000);
    });
    it.skip('test32 Verify delete Recommendation plan', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickDeletePlanIcon();
        cy.wait(2000);
        landingpage.clickDeleteBut();
        cy.wait(2000);
    });
    it('test33 Verify cancel delete Recommendation plan', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(3000);
        landingpage.clickDeletePlanIcon();
        cy.wait(2000);
        landingpage.clickCancelDeleteBut();
        cy.wait(2000);
    });
    it('test34 Verify Prescription Radio button', () => {
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
    });
    it('test35 Verify Edit Prescription', () => {
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
    it('test36 Verify view drug', () => {
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
        landingpage.enterEditPresEmail('chha');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickviewDrug();
        cy.wait(2000);
    });
    it.skip('test37 Verify delete durg', () => {
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
        landingpage.enterEditPresEmail('chha');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickdeleteDrug();
        cy.wait(2000);
        landingpage.clickdeleteDrugBut();
        cy.wait(2000);
    });
    it('test38 Verify cancel Delete Drug', () => {
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





