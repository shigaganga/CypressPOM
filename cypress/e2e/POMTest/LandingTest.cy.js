import LoginPage from "../pages/LoginPage.js";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from "../pages/PrescriptionPage.js";
//import PharmacyPage from "../pages/PharmacyPage.js";
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
        cy.wait(1000);
        homepage.clickHealthProfile();
        cy.wait(1000);
        homepage.clickBestHealth();
        cy.wait(1000);
        homepage.enterName('Test');
        cy.wait(1000);
        homepage.enterLifeexpectancy('80');
        cy.wait(1000);
        homepage.clickCalenderEle();
        cy.wait(1000);
        homepage.clickYear();
        cy.wait(1000);
        homepage.clickMonth();
        cy.wait(1000);
        homepage.clickGender();
        cy.wait(1000);
        homepage.clickMale();
        cy.wait(1000);
        homepage.enterZip("80108");
        cy.wait(2000);
        homepage.clickSearch();
        cy.wait(2000);
        homepage.clickMagiTier();
        cy.wait(1000);
        homepage.clickMagiTier1();
        cy.wait(1000);
        homepage.clickNext();
        cy.wait(1000);
        const preferencespage = new PreferencePage();
        cy.wait(2000);
        preferencespage.clickyesRadioDrugCost();
        cy.wait(2000);
        preferencespage.clickNextPrefPage();
        cy.wait(1000);
        const prescriptionpage = new PrescriptionPage();
        cy.wait(1000);
        prescriptionpage.clickBrowseAtoZlink();
        cy.wait(1000);
        prescriptionpage.enterLetter('C');
        cy.wait(1000);
        prescriptionpage.clickSelectDrug();//Captopril
        cy.wait(1000);
        prescriptionpage.clickAddDrug();
        cy.wait(1000);
        prescriptionpage.clickAddToDrugList();
        cy.wait(1000);
        prescriptionpage.doneAddDrugClick();
        cy.wait(1000);
        const pharmacypg = new PharmacyPage();
        cy.wait(1000);
        pharmacypg.clickPharmacy3();
        cy.wait(1000);
        pharmacypg.clicknextpharmacy();
        cy.wait(1000);
        const planselectionpage = new planselectionPage();
        cy.wait(1000);
        planselectionpage.medicareAdvantageClick();
        cy.wait(1000);
        planselectionpage.clickSecondPlan();
        cy.wait(1000);
        planselectionpage.donePlanSelectionClick();
        cy.wait(1000);
        planselectionpage.tickClick();
        cy.wait(1000);
        planselectionpage.medicareclick();
        cy.wait(1000);
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
        cy.wait(2000);//clickproviderBut
});
it.only('test6 Verify Provider button on the Landing Page.', () => {
    landingpage.clickproviderBut();
    cy.wait(2000);
});
    it('test7 Verify the Expand Plan', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
       
        landingpage.clickExpandPlan();
        cy.wait(2000);
    });
    it('test8 Verify the Collapses Plan', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickCollapsesPlan();
        cy.wait(2000);
    });
    it('test9 Verify Items per page (Next Page)', () => {
        landingpage.clickItemPerPageNext();
        cy.wait(2000);
    });
    it('test10 Verify the Previous page (PreviousPage)', () => {
        landingpage.clickItemPerPageNext();
        cy.wait(2000);
        landingpage.clickItemPreviousPage();
        cy.wait(2000);
    });
    it('test11 Verify the Last Page (LastPage)', () => {
        landingpage.clickItemLastPage();
        cy.wait(2000);
    });
    it('test12 Verify the First Page (firstPage)', () => {
        landingpage.clickItemFirstPage();
        cy.wait(2000);
    });
    it('test13 edit healthProfile', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(1000);
        landingpage.clickExpandPlan();
        cy.wait(1000);
        landingpage.clickEditRecommandtion();
        cy.wait(1000);
        landingpage.clickEditHealthProfile();
        cy.wait(1000);
        landingpage.clickeditModerateHealth();
    });
    it('test14 edit name', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(4000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(4000);
        landingpage.clickExpandPlan();
        cy.wait(1000);
        landingpage.clickEditRecommandtion();//enterEditRecommendationName
        cy.wait(1000);
        landingpage.enterEditRecommendationName('Name');
    });
    it('test15 edit life expectancy', () => {
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
    it('test16 edit DOB', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(4000);
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickeditCalenderEle();
        landingpage.clickeditYear();
        landingpage.clickeditMonth();
    });
    it('test17 edit Gender Male', () => {
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
    it('test18 edit Gender Female', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(4000);
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditGender();
        landingpage.clickEditGenderFemale();
    });
    it('test19 edit Tabacco No', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditTabaccoNo();
    });
    it('test20 edit Tabacco Yes', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditTabaccoYes();
    });
    it('test21 edit Tax filing with individual', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditTaxFilingIndiv();
    });
    it('test22 edit Tax filing with Jointly', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditTaxFilingJoin();
    });
    it('test23 edit Street', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.enterStreet('Castle');
    });
    it('test24 edit Zip code', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.enterEditZipcode('80112');
        landingpage.clickZipcodeSearchBut();
    });
    it('test25 edit Contact', () => {
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('Test');//Filter by recommendation email or name
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.enterEditContact('1234567899');
    });
    it('test26 Verify view recommendation', () => {
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
    it('test27 Verify view low cost pharmacy view-recommendation page then back to the landing page', () => {
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
    it('test28 Verify view provider on the view-recommendation page then back', () => {
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
    it('test29 Verify view medicare on the view-recommendation page then back', () => {
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
    it('test30 Verify view longTerm on the view-recommendation page then back', () => {
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
    it.skip('test31 Verify delete User-ID', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.clickdeleteUserIDIcon();
        cy.wait(2000);
        landingpage.clickDeleteBut();
        cy.wait(2000);
    });
    it('test32 Verify cancel delete User-ID', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.clickdeleteUserIDIcon();
        cy.wait(2000);
        landingpage.clickCancelDeleteBut();
        cy.wait(2000);
    });
    it.skip('test33 Verify delete Recommendation plan', () => {
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
    it('test34 Verify cancel delete Recommendation plan', () => {
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
    it('test35 Verify Prescription Radio button', () => {
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
    });
    it('test36 Verify Edit Prescription', () => {
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
    it('test37 Verify view drug', () => {
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
        landingpage.enterEditPresEmail('chha');
        cy.wait(2000);
        landingpage.clickExpandPlan();
        cy.wait(2000);
        landingpage.clickviewDrug();
        cy.wait(2000);
    });
    it.skip('test38 Verify delete durg', () => {
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
    it('test39 Verify cancel Delete Drug', () => {
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





