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
    const homepage = new HomePage();

    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');
            cy.fixture('LoginFixture').then((data) => {
                const loginpage = new LoginPage();
                loginpage.setUserName(data.username);
                loginpage.setPassword(data.password);
                loginpage.clickLoginBtn();

                // wait for login confirmation (very important!)
                cy.get('#userInitial', { timeout: 10000 }).should('be.visible');
            });
        });
        // navigate to the page your tests start from
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page');
    });

    it('TC_PDP_REC_02 Verify Tsign', () => {
        landingpage.clickTsign();
    });
    it('TC_PDP_REC_03 Verify logout', () => {
        landingpage.clickTsign();
        landingpage.clickLogOut();
        // Assert user is on login page again
        cy.url().should('include', '/login');
    });
    it.skip('TC_PDP_CRT_REC_04 Verify create Recommendation', () => {
        cy.wait(1000);
        landingpage.clickCreateRecommendation();
        cy.wait(1000);
       homepage.enterEmail('chhabi@gmail.com');
        cy.wait(1000);
        homepage.clickHealthProfile();
        cy.wait(1000);
        homepage.clickBestHealth();
        cy.wait(1000);
        homepage.enterName('Lata');
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
        planselectionpage.clickbackMA();//Back from medicare-advantage to the PlanSelection page.
        cy.wait(1000);
        planselectionpage.longtermClick();
        cy.wait(1000);
        planselectionpage.clickbackMA();//Back from long-term to the PlanSelection page.
        cy.wait(1000);
        planselectionpage.aivanteImagClick();
});
    it('TC_PDP_PVOVIDER_05 Verify Provider button on the Landing Page.', () => {
        landingpage.clickproviderBut();
        cy.wait(2000);
    });
    it('TC_PDP_REC_08 Verify  Recommendation radio button', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
    });
    it('TC_PDP_SRH_REC_EMAIL_10 Verify the filter by email', () => {
        cy.wait(2000);
    landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
    cy.wait(2000);
    });
    it('TC_PDP_SRH_REC_EMAIL_11 Verify the filter by email', () => {
        cy.wait(2000);
        landingpage.enterByEmail('Name');//Filter by recommendation email or name
        cy.wait(2000);
    });
    it('TC_11_PDP_EXP_REC_PLAN_14 Verify the Expand Plan', () => {
        cy.wait(2000);
       landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
    });
    it('TC_PDP_COL_REC_PLAN_15 Verify the Collapses Plan', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickCollapsesPlan();
        cy.wait(2000);
    });
    it('TC_PDP_EXA_REC_NEXT_16 Verify Items per page (Next Page)', () => {
        landingpage.clickItemPerPageNext();
        cy.wait(2000);
    });
    it('TC_PDP_EXA_REC_LAST_17 Verify the Last Page (LastPage)', () => {
        landingpage.clickItemLastPage();
        cy.wait(2000);
    });
    it('TC_PDP_EXA_REC_PREV_18 Verify the Previous page (PreviousPage)', () => {
        landingpage.clickItemPerPageNext();
        cy.wait(2000);
        landingpage.clickItemPreviousPage();
        cy.wait(2000);
    });
    it('TC_PDP_EXA_REC_1ST_19 Verify the First Page (firstPage)', () => {
        landingpage.clickItemFirstPage();
        cy.wait(2000);
    });
    it('TC_PDD_VIEW_REC_24 edit icon', () => {
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();//enterEditRecommendationName
        cy.wait(2000)
    });
    it('test13 edit healthProfile', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(1000);
        landingpage.clickExpandRecomm();
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
        landingpage.clickExpandRecomm();
        cy.wait(1000);
        landingpage.clickEditRecommandtion();//enterEditRecommendationName
        cy.wait(1000);
        landingpage.enterEditRecommendationName('Name');
    });
    it('test15 edit life expectancy', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(4000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(4000);
        landingpage.clickEditRecommandtion();
        cy.wait(4000);
        landingpage.enterEditLifeExpectancy('90');
    });
    it('test16 edit DOB', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(4000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();
        cy.wait(2000);
        landingpage.clickeditCalenderEle();
        cy.wait(2000);
        landingpage.clickeditYear();
        cy.wait(2000);
        landingpage.clickeditMonth();
    });
    it('test17 edit Gender Male', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
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
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(4000);
        landingpage.clickExpandRecomm();
        cy.wait(4000);
        landingpage.clickEditRecommandtion();
        cy.wait(4000);
        landingpage.clickEditGender();
        cy.wait(4000);
        landingpage.clickEditGenderFemale();
        cy.wait(4000);
    });
    it('test19 edit Tabacco No', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();
        cy.wait(2000);
        landingpage.clickEditTabaccoNo();
        cy.wait(2000);
    });
    it('test20 edit Tabacco Yes', () => {
        cy.wait(1000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(1000);
        landingpage.clickExpandRecomm();
        cy.wait(1000);
        landingpage.clickEditRecommandtion();
        cy.wait(1000);
        landingpage.clickEditTabaccoYes();
    });
    it('test21 edit Tax filing with individual', () => {
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();
        cy.wait(2000);
        landingpage.clickEditTaxFilingIndiv();
    });
    it('test22 edit Tax filing with Jointly', () => {
        cy.wait(2000);
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();
        cy.wait(2000);
        landingpage.clickEditTaxFilingJoin();
        cy.wait(2000);
    });
    it('test23 edit Street', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();
        cy.wait(2000);
        landingpage.enterStreet('Castle');
        cy.wait(2000);
    });
    it('test24 edit Zip code', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();
        cy.wait(2000);
        landingpage.enterEditZipcode('80112');
        cy.wait(2000);
        landingpage.clickZipcodeSearchBut();
        cy.wait(2000);
    });
    it('test25 edit Contact', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickEditRecommandtion();
        cy.wait(2000);
        landingpage.enterEditContact('1234567899');
        cy.wait(2000);
    });
    it('TC_PDD_VIEW_REC_24 Verify view recommendation', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('chhabi@gmail.com');
        cy.wait(1000);
        landingpage.clickExpandRecomm();
        cy.wait(1000);
        landingpage.clickviewRecom();
        cy.wait(1000);
        landingpage.clickviewBackbut();
        cy.wait(1000);
    });
    it('TC_PDD_VIEW_REC_24 Verify view low cost pharmacy then go back', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('chhabi@gmail.com');
        cy.wait(1000);
        landingpage.clickExpandRecomm();
        cy.wait(1000);
        landingpage.clickviewRecom();
        cy.wait(1000);
        landingpage.clickviewLowCost();
        cy.wait(1000);
        landingpage.clickbackLowCost();//back to the view-recommendation
        cy.wait(1000);
        landingpage.clickviewBackbut();//back to the landing page
        cy.wait(1000);
    });
    it('TC_PDP_VIEW_LC_PHAR_31 Verify view low cost pharmacy radius filter then back to the landing page', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('chhabi@gmail.com');
        cy.wait(1000);
        landingpage.clickExpandRecomm();
        cy.wait(1000);
        landingpage.clickviewRecom();
        cy.wait(1000)
        landingpage.clickviewLowCost();
        cy.wait(1000);
        landingpage.clickexpandPharmacyFilter();
        cy.wait(1000);
        //landingpage.enterradiusPharmacyFilter('9');
        //cy.wait(1000);
        landingpage.clicksumbit();
        cy.wait(1000);
    });
    it('TC_PDP_VIEW_LC_PHAR_32 Verify add/remove prescription then back to the landing page', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('chhabi@gmail.com');
        cy.wait(1000);
        landingpage.clickExpandRecomm();
        cy.wait(1000);
        landingpage.clickviewRecom();
        cy.wait(1000)
        landingpage.clickviewLowCost();
        cy.wait(1000);
        landingpage.clickaddRemovePrescription();
        cy.wait(1000);
    });
    it('test28 Verify view provider on the view-recommendation page then back', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(1000);
        landingpage.enterByEmail('chhabi@gmail.com');
        cy.wait(1000);
        landingpage.clickExpandRecomm();
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
        landingpage.enterByEmail('chhabi@gmail.com');
        cy.wait(1000);
        landingpage.clickExpandRecomm();
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
        landingpage.enterByEmail('chhabi@gmail.com');
        cy.wait(1000);
        landingpage.clickExpandRecomm();
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
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickDeletePlanIcon();
        cy.wait(2000);
        landingpage.clickDeleteBut();
        cy.wait(2000);
    });
    it('test34 Verify cancel delete Recommendation plan', () => {
        landingpage.clickRecommendationRadioBut();
        cy.wait(2000);
        landingpage.enterByEmail('chhabi@gmail.com');//Filter by recommendation email or name
        cy.wait(2000);
        landingpage.clickExpandRecomm();
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
        landingpage.enterEditPresEmail('chhabi@gmail.com');
        cy.wait(2000);
        landingpage.clickExpandRecomm();
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
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickviewDrug();
        cy.wait(2000);
    });
    it.skip('test38 Verify delete durg', () => {
        landingpage.clickPrescriptionRadioBut();
        cy.wait(2000);
        landingpage.enterEditPresEmail('chha');
        cy.wait(2000);
        landingpage.clickExpandRecomm();
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
        landingpage.clickExpandRecomm();
        cy.wait(2000);
        landingpage.clickdeleteDrug();
        cy.wait(2000);
        landingpage.clickcancelDeleteDrug();
        cy.wait(2000);
    });
});