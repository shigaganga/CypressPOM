import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from "../pages/PreferencePage";
import PrescriptionPage from "../pages/PrescriptionPage";
import PharmacyPage from "../pages/PharmacyPage";
import PlanselectionPage from "../pages/PlanselectionPage";
import LongTermPage from "../pages/LongTermPage";

describe("ProviderDialysisFacility-TestSuite", () => {
    let testData;
    const lPage = new LoginPage();
    const recPage = new LandingPage();
    const homepage = new HomePage();
    const preferencePage = new PreferencePage();
    const prescriptionPage = new PrescriptionPage();
    const pharmacyPage = new PharmacyPage();
    const planselectionpage = new PlanselectionPage();
    const longtermpage = new LongTermPage();

    before(() => {
        cy.fixture('LoginFixture').then((data) => {
            testData = data;
        });
    });

    after(() => {
        cy.visit(testData.homePage_url);
        cy.wait(2000);
    });

    beforeEach(() => {
        cy.session("Provider User Session", () => {
            cy.visit(testData.baseUrl);
            cy.wait(500);

            lPage.setUserName(testData.username);
              cy.wait(500);

            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
              cy.wait(500);

            lPage.verifyLogin();
  cy.wait(500);

            recPage.clickCreateRecommendation();
              cy.wait(500);

            homepage.enterEmail(testData.email);
              cy.wait(500);

            homepage.enterName(testData.name);
              cy.wait(500);

            homepage.enterLifeexpectancy(testData.lifeExpectancy);
            homepage.enterZip(testData.zip);
            homepage.entercommunicationEmail(testData.communicationEmail);
              cy.wait(500);

            homepage.enterContact(testData.contactNumber);
            homepage.clickSearch();
              cy.wait(500);

            homepage.nextHomeClick();
  cy.wait(500);

            preferencePage.clickyesRadioDrugCost();
              cy.wait(500);

            preferencePage.clickNextPrefPage();
  cy.wait(500);

            prescriptionPage.enterDrugSearchBox(testData.drugName1);
              cy.wait(500);

            prescriptionPage.selectDrug();
              cy.wait(500);

            prescriptionPage.clickAddToDrug();
              cy.wait(500);

            prescriptionPage.doneAddDrugClick();

            pharmacyPage.clickFindFarmacy();
              cy.wait(500);

            pharmacyPage.clickfarmacyOne();
              cy.wait(500);

            pharmacyPage.clickfarmacyTwo();
            pharmacyPage.clicknextpharmacy();
  cy.wait(500);

            planselectionpage.setProviderButtn();
              cy.wait(500);

        });
  cy.wait(500);

        cy.visit(testData.manageProviders_url);
        cy.wait(2000);
    });

    it('TC-1 Verify navigation of Long Term button', () => {
          cy.wait(500);
        longtermpage.clickLongtermBtn();
          cy.wait(500);

    });

    it('TC-2 Validate UI elements', () => {
          cy.wait(500);

        longtermpage.clickLongtermBtn();
          cy.wait(500);

        longtermpage.validatepagelements();
    });

    it('TC-3 Validate user info details: age, retirement year, health profile, life expectancy', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.verifyUserInfoDetails();
    });

    it('LTC-5 Validate present and future values', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.verifyPresentFutureValueDetails();
    });

    it('LTC-6 Navigate back to plan selection', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.backLongTermToPlanSelectionClick();
    });

    it('TC-6 Generate PDF', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.pdfclick();
    });

    it('LTC-10 Check PDF icon in landing page after generating', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.pdfclick();
        planselectionpage.aivanteImagClick();
    });

    it('TC-8 Show more options on expand arrow click', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
    });

    it('TC-9 Collapse expanded panel on header click', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
    });

    it('TC-10 Default values of dropdowns', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
    });

    it('TC-11 Quality of care options: Comfort, Luxury, Premium Luxury', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickQualityofcareArrow();
    });

    it('LTC-17 Only one option can be selected from Quality of Care dropdown', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickQualityofcareArrow();
        longtermpage.clickLuxury();
    });

    it('TC-13 Quality of care affects values', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickQualityofcareArrow();
        longtermpage.clickLuxury();
        longtermpage.submitLongTermClick();
    });

    it('TC-14 Adult Day Care dropdown shows 1–10', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickAdultdaycareArrow();
    });

    it('TC-15 Only one option in Adult Day Care dropdown', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickAdultdaycareArrow();
        longtermpage.clickAdultcare3years();
    });

    it('TC-16 Adult Day Care affects values', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickAdultdaycareArrow();
        longtermpage.clickAdultcare4years();
        longtermpage.submitLongTermClick();
    });

    it('TC-17 Years of In-Home Care dropdown shows 1–10', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickInhomecareArrow();
    });

    it('TC-18 Only one option in In-Home Care dropdown', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickInhomecareArrow();
        longtermpage.clickInhomecare4years();
    });

    it('TC-19 In-Home Care affects values', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickInhomecareArrow();
        longtermpage.clickInhomecare2years();
        longtermpage.submitLongTermClick();
    });

    it('TC-20 Nursing Home Care dropdown shows 1–10', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickNursinghomecareArrow();
    });

    it('TC-21 Only one option in Nursing Home Care dropdown', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickNursinghomecareArrow();
        longtermpage.clickNursinghomecare2years();
    });

    it('TC-22 Nursing Home Care affects values', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickNursinghomecareArrow();
        longtermpage.clickNursinghomecare2years();
        longtermpage.submitLongTermClick();
    });

    it('TC-23 All dropdowns set -> Submit updates values', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickQualityofcareArrow();
        longtermpage.clickLuxury();
        longtermpage.clickAdultdaycareArrow();
        longtermpage.clickAdultcare2years();
        longtermpage.clickInhomecareArrow();
        longtermpage.clickInhomecare1years();
        longtermpage.clickNursinghomecareArrow();
        longtermpage.clickNursinghomecare1years();
        longtermpage.submitLongTermClick();
    });

    it('TC-24 Back button on LTC page navigates to plan selection', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.backLongTermToPlanSelectionClick();
    });

    it.skip('TC-4 Verify userinfo details when editing profile', () => {
        const landingpage = new LandingPage();
        landingpage.clickRecommendationRadioBut();
        landingpage.enterByEmail('prisci2');
        landingpage.clickExpandPlan();
        landingpage.clickEditRecommandtion();
        landingpage.clickEditHealthProfile();
        landingpage.clickEditHealthProfile4();
        landingpage.enterEditLifeExpectancy('77');
        landingpage.clickEditNextBut();

        const preferencepage = new PreferencePage();
        preferencepage.clicknoRadioDrugCost();
        preferencepage.clickNextPrefPage();
        
    });
});
