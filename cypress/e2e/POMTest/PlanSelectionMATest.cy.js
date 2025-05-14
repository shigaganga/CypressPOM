import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"
import PlanSelectionMA from "../pages/PlanSelectionPageMA.js";
// Steps for MA tests
describe('PlanSelectionMA', () => {
    let testData;
    const lPage = new LoginPage();
    const recPage = new LandingPage();
    const homepage = new HomePage();
    const preferencePage = new PreferencePage();
    const prescriptionPage = new PrescriptionPage();
    const pharmacyPage = new PharmacyPage();
    const planSelectionMA = new PlanSelectionMA();

    //Load data fixures before tests.
    before(() => {
        cy.fixture('LoginFixture').then((data) => {
            testData = data;
        })
    })

    //Go to home page after all tests.
    after(() => {
        cy.visit(testData.homePage_url);
        cy.wait(2000);
    })

    //Run this before each test
    beforeEach("Login to PlanSelectionPage", () => {
        cy.session("Plan Select session", () => {
            cy.visit(testData.landingPage_url);
            cy.wait(500)

            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful

            //Steps to go to the MA Plan
            recPage.clickCreateRecommendation();
            cy.wait(100);
            homepage.enterEmail(testData.email);
            cy.wait(100);
            homepage.clickhealthArrow();
            cy.wait(100);
            homepage.clickGoodHealth();
            cy.wait(100);
            homepage.enterName(testData.name);
            cy.wait(100);
            homepage.enterLifeexpectancy(testData.lifeExpectancy);
            cy.wait(100);
            homepage.datePickerclick();
            cy.wait(100);
            homepage.year1957click();
            cy.wait(100);
            homepage.month1957click();
            cy.wait(100);
            homepage.enterZip(testData.zip)
            cy.wait(100);
            homepage.clickSearch();
            cy.wait(100);
            homepage.nextHomeClick();
            cy.wait(100);
            preferencePage.clickyesRadioDrugCost();
            cy.wait(100);
            preferencePage.clickNextPrefPage();
            cy.wait(100);
            prescriptionPage.enterDrugSearchBox(testData.drugName1);
            cy.wait(100);
            prescriptionPage.selectDrug();
            cy.wait(100);
            prescriptionPage.clickAddToDrug();
            cy.wait(100);
            prescriptionPage.doneAddDrugClick();
            cy.wait(100);
            pharmacyPage.clickFindFarmacy();
            cy.wait(100);
            pharmacyPage.clickfarmacyOne();
            cy.wait(100);
            pharmacyPage.clickfarmacyTwo();
            cy.wait(100);
            pharmacyPage.clicknextpharmacy();
            cy.wait(1000)
        })

        cy.log("Entering PlanSelectionPage...");
        cy.visit(testData.planSelection_url)
        cy.wait(1000);
    })

    //TEST CASES
    it('TC_PDP_MA_PLAN_01 This is to verify the "Medicare Advantage" functionality on the plan-selection page within the PDP application..', () => {
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
    });

    it('TC_PDP_MA_PLAN_02 This is to verify the "Filter Icon" functionality on the plan-selection/plan-list/MEDICARE page within the PDP application, .', () => {
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
        planSelectionMA.clickFilterPlans();
        cy.wait(1000);
        planSelectionMA.clickInsuranceCarrier();
        cy.wait(1000);
        planSelectionMA.clickCignaHealth();
        cy.wait(1000);
        planSelectionMA.clickStarRating();
        cy.wait(1000);
        planSelectionMA.clickRatingFour();
        cy.wait(1000);
        planSelectionMA.clickDrugCoverage();
        cy.wait(1000);
        planSelectionMA.clickNoCoverage();
    });

    it('TC_PDP_MA_PLAN_03 This is to verify the "Filter Plans with prescription" functionality on the plan-selection/plan-list/MEDICARE page within the PDP application..', () => {
        cy.wait(1000);
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
        planSelectionMA.clickFilterPlans();
        cy.wait(1000);
        planSelectionMA.clickInsuranceCarrier();
        cy.wait(1000);
        planSelectionMA.clickCignaHealth();
        cy.wait(1000);
        planSelectionMA.clickStarRating();
        cy.wait(1000);
        planSelectionMA.clickRatingFour();
        cy.wait(1000);
        planSelectionMA.clickDrugCoverage();
        cy.wait(1000);
        planSelectionMA.clickNoCoverage();
        cy.wait(1000);
        planSelectionMA.clickPDPOption();
        cy.wait(1000);
        planSelectionMA.clickWithPrescription();
    });

    it('TC_PDP_MA_PLAN_04 to verify the funcitionality of reset button on plan selection.', () => {
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
        planSelectionMA.clickFilterPlans();
        cy.wait(1000);
        planSelectionMA.clickInsuranceCarrier();
        cy.wait(1000);
        planSelectionMA.clickCignaHealth();
        cy.wait(1000);
        planSelectionMA.clickStarRating();
        cy.wait(1000);
        planSelectionMA.clickRatingFour();
        cy.wait(1000);
        planSelectionMA.clickDrugCoverage();
        cy.wait(1000);
        planSelectionMA.clickNoCoverage();
        cy.wait(1000);
        planSelectionMA.clickPDPOption();
        cy.wait(1000);
        planSelectionMA.clickWithPrescription();
        cy.wait(1000);
        planSelectionMA.clickReset();
    });

    it('TC_PDP_MA_PLAN_05 This is to verify the MA plan details functionality on the plan-selection/plan-list/MEDICARE within the PDP application., .', () => {
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
        planSelectionMA.clickFilterPlans();
        cy.wait(1000);
        planSelectionMA.clickInsuranceCarrier();
        cy.wait(1000);
        planSelectionMA.clickCignaHealth();
        cy.wait(1000);
        planSelectionMA.clickStarRating();
        cy.wait(1000);
        planSelectionMA.clickRatingFour();
        cy.wait(1000);
        planSelectionMA.clickDrugCoverage();
        cy.wait(1000);
        planSelectionMA.clickNoCoverage();
        cy.wait(1000);
        planSelectionMA.clickPDPOption();
        cy.wait(1000);
        planSelectionMA.clickWithPrescription();
        //added new step
        cy.wait(1000);
        planSelectionMA.clickCignaTrueChoiceMedicare();
        cy.wait(1000);
        //planSelectionMA.clickBenefits();
        //cy.wait(1000);
        // planSelectionMA.clickPlanBenefitBoxEle();
        planSelectionMA.clickPlanDetails();
        cy.wait(1000);
        planSelectionMA.clickDrugInformation();
        cy.wait(1000);
        planSelectionMA.clickRemainingYearCostAndOOP();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalDrugPlusPremiumCost();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalMonthlyDrugCost();
        cy.wait(1000);
        planSelectionMA.clickBackButton();
    });

    it('TC_PDP_MA_PLAN_06 funcitionality of PlanSelection Done button MA ', () => {
        cy.wait(1000);
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
        planSelectionMA.clickFilterPlans();
        cy.wait(1000);
        planSelectionMA.clickInsuranceCarrier();
        cy.wait(1000);
        planSelectionMA.clickCignaHealth();
        cy.wait(1000);
        planSelectionMA.clickStarRating();
        cy.wait(1000);
        planSelectionMA.clickRatingFour();
        cy.wait(1000);
        planSelectionMA.clickDrugCoverage();
        cy.wait(1000);
        planSelectionMA.clickNoCoverage();
        cy.wait(1000);
        planSelectionMA.clickPDPOption();
        cy.wait(1000);
        planSelectionMA.clickWithPrescription();
        cy.wait(1000);
        planSelectionMA.clickCignaTrueChoiceMedicare();
        cy.wait(1000);
        planSelectionMA.clickPlanDetails();
        cy.wait(1000);
        planSelectionMA.clickDrugInformation();
        cy.wait(1000);
        planSelectionMA.clickRemainingYearCostAndOOP();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalDrugPlusPremiumCost();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalMonthlyDrugCost();
        cy.wait(1000);
        planSelectionMA.clickBackButton();
        cy.wait(1000);
        planSelectionMA.clickDoneButton();
    });

    //short plan filter
    it('TC_PDP_MA_PLAN_07 This is to verify the "Sort Plans" and cancel button functionality on the plan-selection/plan-list/MEDICARE page within the PDP application., .', () => {
        cy.wait(1000);
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
        planSelectionMA.clickFilterPlans();
        cy.wait(1000);
        planSelectionMA.clickInsuranceCarrier();
        cy.wait(1000);
        planSelectionMA.clickCignaHealth();
        cy.wait(1000);
        planSelectionMA.clickStarRating();
        cy.wait(1000);
        planSelectionMA.clickRatingFour();
        cy.wait(1000);
        planSelectionMA.clickDrugCoverage();
        cy.wait(1000);
        planSelectionMA.clickNoCoverage();
        cy.wait(1000);
        planSelectionMA.clickPDPOption();
        cy.wait(1000);
        planSelectionMA.clickWithPrescription();
        cy.wait(1000);
        planSelectionMA.clickCignaTrueChoiceMedicare();
        cy.wait(1000);
        planSelectionMA.clickPlanDetails();
        cy.wait(1000);
        planSelectionMA.clickDrugInformation();
        cy.wait(1000);
        planSelectionMA.clickRemainingYearCostAndOOP();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalDrugPlusPremiumCost();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalMonthlyDrugCost();
        cy.wait(1000);
        planSelectionMA.clickBackButton();
        //short plan by lowest monthly premium
        cy.wait(1000);
        planSelectionMA.clickShortPlan();
        cy.wait(1000);
        planSelectionMA.clickShortPlanOption();
        cy.wait(1000);
        planSelectionMA.clickLowestMonthlyPremium();
        cy.wait(1000);
        planSelectionMA.clickHumanaGoldPlus();
        //cy.wait(1000);
        // planSelectionMA.clickBenefitsShortPlan();
        // cy.wait(1000);
        // planSelectionMA.clickBenefitsBoxDisappear();
        cy.wait(1000);
        planSelectionMA.clickPlanShortDetails();
        cy.wait(1000);
        planSelectionMA.clickDrugInformationOne();
        cy.wait(1000);
        planSelectionMA.clickRemainingCost();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalDrug();
        cy.wait(1000);
        planSelectionMA.clickTotalMonthlyDrugCost();
        cy.wait(1000);
        planSelectionMA.cliclBackButtonPlan();
        cy.wait(2000);
        planSelectionMA.clickCancelButton();
    });

    it('TC_PDP_MA_PLAN_08 to verify nthe funciotionality of back and done button.', () => {
        cy.wait(1000);
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
        planSelectionMA.clickFilterPlans();
        cy.wait(1000);
        planSelectionMA.clickInsuranceCarrier();
        cy.wait(1000);
        planSelectionMA.clickCignaHealth();
        cy.wait(1000);
        planSelectionMA.clickStarRating();
        cy.wait(1000);
        planSelectionMA.clickRatingFour();
        cy.wait(1000);
        planSelectionMA.clickDrugCoverage();
        cy.wait(1000);
        planSelectionMA.clickNoCoverage();
        cy.wait(1000);
        planSelectionMA.clickPDPOption();
        cy.wait(1000);
        planSelectionMA.clickWithPrescription();
        cy.wait(1000);
        planSelectionMA.clickCignaTrueChoiceMedicare();
        cy.wait(1000);
        planSelectionMA.clickPlanDetails();
        cy.wait(1000);
        planSelectionMA.clickDrugInformation();
        cy.wait(1000);
        planSelectionMA.clickRemainingYearCostAndOOP();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalDrugPlusPremiumCost();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalMonthlyDrugCost();
        cy.wait(1000);
        planSelectionMA.clickBackButton();
        cy.wait(4000);
        planSelectionMA.clickDoneButton(); 
        cy.wait(1000);
    });

    it('TC_PDP_MA_PLAN_09 This is to verify that the "Reset" button is always enabled on the plan selection page..', () => {
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
        planSelectionMA.clickFilterPlans();
        cy.wait(1000);
        planSelectionMA.clickInsuranceCarrier();
        cy.wait(1000);
        planSelectionMA.clickCignaHealth();
        cy.wait(1000);
        planSelectionMA.clickStarRating();
        cy.wait(1000);
        planSelectionMA.clickRatingFour();
        cy.wait(1000);
        planSelectionMA.clickDrugCoverage();
        cy.wait(1000);
        planSelectionMA.clickNoCoverage();
        cy.wait(1000);
        planSelectionMA.clickPDPOption();
        cy.wait(1000);
        planSelectionMA.clickWithPrescription();
        cy.wait(1000);
        planSelectionMA.clickCignaTrueChoiceMedicare();
        cy.wait(1000);
        planSelectionMA.clickPlanDetails();
        cy.wait(1000);
        planSelectionMA.clickDrugInformation();
        cy.wait(1000);
        planSelectionMA.clickRemainingYearCostAndOOP();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalDrugPlusPremiumCost();
        cy.wait(1000);
        planSelectionMA.clickEstimatedTotalMonthlyDrugCost();
        cy.wait(1000);
        planSelectionMA.clickBackButton();
        cy.wait(1000);
        planSelectionMA.clickDoneButton(); 
        cy.wait(1000);
        planSelectionMA.clickCignaTrueMedicare();
        cy.wait(1000);
        planSelectionMA.clickmedicareButton();
        cy.wait(1000);
        planSelectionMA.clickbackButtonMA();
        cy.wait(1000);
        planSelectionMA.clickResetButton();
        cy.wait(1000);
        planSelectionMA.clickWarningButton(); 
    });

    it('TC_PDP_MA_PLAN_10, PlanSelection MA Aivante Logo Sign Function', () => {
        cy.wait(1000);
        planSelectionMA.clickAivanteLogo();
    });
});


