import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"
import PlanSelectionMA from "../pages/PlanSelectionPageMA.js";


describe('PlanSelectionMA', () => {
    const planSelectionMA = new PlanSelectionMA();
    beforeEach("Login to PlanSelectionPage", () => {
        cy.session("Plan Select session", () => {
            cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');

            const lPage = new LoginPage();
            const recPage = new LandingPage();
            const homepage = new HomePage();
            const preferencePage = new PreferencePage();
            const prescriptionPage = new PrescriptionPage();
            const pharmacyPage = new PharmacyPage();

            cy.fixture('LoginFixture').then((data) => {
                lPage.setUserName(data.username);
                lPage.setPassword(data.password);
                lPage.clickLoginBtn();
                lPage.verifyLogin(); // Ensure login was successful
            })

            //Steps to go to the MA Plan
            recPage.clickCreateRecommendation();
            cy.wait(100);
            homepage.enterEmail("ShigaPOM@gmail.com");
            cy.wait(100);
            homepage.clickhealthArrow();
            cy.wait(100);
            homepage.clickGoodHealth();
            cy.wait(100);
            homepage.enterName("Shigapage");
            cy.wait(100);
            homepage.enterLifeexpectancy("86");
            cy.wait(100);
            homepage.datePickerclick();
            cy.wait(100);
            homepage.year1957click();
            cy.wait(100);
            homepage.month1957click();
            cy.wait(100);
            homepage.enterZip("27529")
            cy.wait(100);
            homepage.clickSearch();
            cy.wait(100);
            homepage.nextHomeClick();
            cy.wait(100);
            preferencePage.clickyesRadioDrugCost();
            cy.wait(100);
            preferencePage.clickNextPrefPage();
            cy.wait(100);
            prescriptionPage.enterDrugSearchBox("Gabapentin");
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

        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/plan-selection")
        cy.wait(1000);

    })

    //TEST CASES
    it('TC-1 Steps to go to Medicare Advantage page.', () => {
        planSelectionMA.clickMedicareAdvantage();
        cy.wait(3000);
    });

    it('TC-2 Applying filters for plan on MA page.', () => {
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

    it('TC-3 Filter plan PDP option Plan on MA page.', () => {
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

    it('TC-4 Filter plan reset plan button on MA page.', () => {
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

    it('TC-5 Filter plan details of plans benefits on MA page.', () => {
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

    it('TC-6 PlanSelection Done button MA ', () => {
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
    it('TC-7 PlanSelection Short plans by lowest monthly premium on MA page.', () => {
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

    it('TC-8 PlanSelection Check box medicare selection on MA page.', () => {
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

    it('TC-9 PlanSelection Reset Button Test on MA page.', () => {
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

    it('TC-10 PlanSelection MA Aivante Logo Sign Function', () => {
        cy.wait(1000);
        planSelectionMA.clickAivanteLogo();

    });

});


