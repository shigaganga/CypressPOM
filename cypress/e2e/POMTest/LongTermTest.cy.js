import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PreferencePage from "../pages/PreferencePage";
import PrescriptionPage from "../pages/PrescriptionPage";
import PharmacyPage from "../pages/PharmacyPage";
import PlanselectionPage from "../pages/PlanselectionPage";
import LongTermPage from "../pages/LongTermPage";
import PlanSelectionMA from "../pages/PlanSelectionPageMA.js";

describe("Long Term Care-TestSuite", () => {
  let testData;
  const lPage = new LoginPage();
  const recPage = new LandingPage();
  const homepage = new HomePage();
  const preferencePage = new PreferencePage();
  const prescriptionPage = new PrescriptionPage();
  const pharmacyPage = new PharmacyPage();
  const planselectionpage = new PlanSelectionMA();
  const longtermpage = new LongTermPage();

  before(() => {
    //cy.fixture('LoginFixture').then((data) => {
      testData = data;
      cy.task('csv:parseFromDropbox').then((data) => {
          testData = data[0];
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
    });
    cy.wait(500);
    cy.visit(testData.planSelection_url);
    cy.wait(2000);
  });

  it('TC_PDP_LTC_01 Verify navigation of Long Term button', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);

  });

  it('TC_PDP_LTC_02 Validate UI elements', () => {
    cy.wait(500);
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.validatepagelements();
  });

  it('TC_PDP_LTC_03 Validate user info details: age, retirement year, health profile, life expectancy', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.verifyUserInfoDetails();
  });

  it('TC_PDP_LTC_05 Validate present and future values', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.verifyPresentFutureValueDetails();
  });

 
it('TC_PDP_LTC_47 Navigate back to plan selection', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.backLongTermToPlanSelectionClick();
  });

  it('TC_PDP_LTC_08 Generate PDF', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.pdfclick();
  });

  it('TC_PDP_LTC_09 Check PDF icon in landing page after generating', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.pdfclick();
    cy.wait(500);
    longtermpage.clickAivanteLogo();
  });

  it('TC_PDP_LTC_14 Show more options on expandLong Term arrow click', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
  });

  it('TC_PDP_LTC-10 Collapse expanded panel on header click', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
  });

  it('TC_PDP_LTC_11 Default values of dropdowns', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
  });

  it('TC_PDP_LTC_16 Quality of care options: Comfort, Luxury, Premium Luxury', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickQualityofcareArrow();
  });

  it('TC_PDP_LTC_17 Only one option can be selected from Quality of Care dropdown', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickQualityofcareArrow();
    cy.wait(500);
    longtermpage.clickLuxury();
  });

  it('TC_PDP_LTC_27 Quality of care affects values', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickQualityofcareArrow();
    cy.wait(500);
    longtermpage.clickLuxury();
    cy.wait(500);
    longtermpage.submitLongTermClick();
  });

  it('TC_PDP_LTC_18 Adult Day Care dropdown shows 1–10', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickAdultdaycareArrow();
  });

  it('TC_PDP_LTC_19 Only one option in Adult Day Care dropdown', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickAdultdaycareArrow();
    cy.wait(500);
    longtermpage.clickAdultcare3years();
  });

  it('TC_PDP_LTC_20 Adult Day Care affects values', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickAdultdaycareArrow();
    cy.wait(500);
    longtermpage.clickAdultcare4years();
    cy.wait(500);
    longtermpage.submitLongTermClick();
  });

  it('TC_PDP_LTC_21 Years of In-Home Care dropdown shows 1–10', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickInhomecareArrow();
  });

  it('TC_PDP_LTC_22 Only one option in In-Home Care dropdown', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickInhomecareArrow();
    cy.wait(500);
    longtermpage.clickInhomecare1years();
  });

  it('TC_PDP_LTC_23 In-Home Care affects values', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickInhomecareArrow();
    cy.wait(500);
    longtermpage.clickInhomecare2years();
    cy.wait(500);
    longtermpage.submitLongTermClick();
  });

  it('TC_PDP_LTC_24 Nursing Home Care dropdown shows 1–10', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickNursinghomecareArrow();
  });

  it('TC_PDP_LTC_25 Only one option in Nursing Home Care dropdown', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickNursinghomecareArrow();
    cy.wait(500);
    longtermpage.clickNursinghomecare2years();
  });

  it('TC_PDP_LTC_26 Nursing Home Care affects values', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickNursinghomecareArrow();
    cy.wait(500);
    longtermpage.clickNursinghomecare2years();
    cy.wait(500);
    longtermpage.submitLongTermClick();
  });

  it('TC_PDP_LTC_41 All dropdowns set -> Submit updates values', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.longTermArrowClick();
    cy.wait(500);
    longtermpage.clickQualityofcareArrow();
    cy.wait(500);
    longtermpage.clickLuxury();
    cy.wait(500);
    longtermpage.clickAdultdaycareArrow();
    cy.wait(500);
    longtermpage.clickAdultcare2years();
    cy.wait(500);
    longtermpage.clickInhomecareArrow();
    cy.wait(500);
    longtermpage.clickInhomecare1years();
    cy.wait(500);
    longtermpage.clickNursinghomecareArrow();
    cy.wait(500);
    longtermpage.clickNursinghomecare1years();
    cy.wait(500);
    longtermpage.submitLongTermClick();
  });

  it('TC_PDP_LTC_47 Back button on LTC page navigates to plan selection', () => {
    longtermpage.clickMedicareAdvantageButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldPlusPlan();
    cy.wait(500);
    longtermpage.clickDoneButton();
    cy.wait(500);
    longtermpage.clickHumanaGoldCheckMark();
    cy.wait(500);
    longtermpage.clickLongtermBtn();
    cy.wait(500);
    longtermpage.backLongTermToPlanSelectionClick();
  });

  it.skip('TC_PDP_LTC_43 Verify userinfo details when editing profile', () => {
    const landingpage = new LandingPage();
    landingpage.clickRecommendationRadioBut();
    landingpage.enterByEmail('prisci2');
    landingpage.clickExpandRecomm();
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