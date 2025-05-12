import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PlanselectionPage from '../pages/PlanselectionPage.js';
import longTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import MedicarePage from '../pages/MedicarePage.js';

describe('smoke Flow Test', () => {
  it('should log in and create a recommendation', () => {

    cy.task('csv:parseFromDropbox').then((data) => {
      const testData = data[0];
      cy.visit(testData.baseUrl);
      cy.wait(500);

      const lPage = new LoginPage();
      lPage.setUserName(testData.username);
      cy.wait(500);
      lPage.setPassword(testData.password);
      cy.wait(500);
      lPage.clickLoginBtn();
      cy.wait(500);

      const recPage = new LandingPage();
      recPage.clickCreateRecommendation();
      cy.wait(500);

      const homepage = new HomePage();
      homepage.enterEmail(testData.email);
      cy.wait(500);
      homepage.enterName(testData.name);
      cy.wait(500);
      homepage.clickDatePicker();
      cy.wait(500);
      homepage.clickYear(testData.yearOfBirth);
      cy.wait(500);
      homepage.clickMonth(testData.monthOfBirth);
      cy.wait(500);
      homepage.clickGender();
      cy.wait(500);
      homepage.selectGender(testData.gender);
      cy.wait(500);
      homepage.enterStreet(testData.street);
      cy.wait(500);
      homepage.enterZip(testData.zip);
      cy.wait(500);
      homepage.clickSearch();
      cy.wait(500);
      homepage.entercommunicationEmail(testData.communicationEmail);
      cy.wait(500);
      homepage.enterContact(testData.contactNumber);
      cy.wait(500);
      homepage.clickhealthArrow();
      cy.wait(500);
      homepage.clickHealthProfile(testData.healthProfile);
      cy.wait(500);
      homepage.enterLifeexpectancy(testData.lifeExpectancy);
      cy.wait(500);
      homepage.selectTobaccoOption(testData.tobacco);
      cy.wait(500);
      homepage.selectTaxFilingStatus(testData.taxFilingStatus);
      cy.wait(500);
      homepage.clickMagiTier();
      cy.wait(500);
      homepage.clickMaggiTireOptions(testData.magiTier);
      cy.wait(500);
      homepage.selectConciergeOption(testData.conceirge);
      cy.wait(500);
      homepage.nextHomeClick();
      cy.wait(500);

      const prefPage = new PreferencePage();
      prefPage.clickyesRadioDrugCost();
      cy.wait(500);
      prefPage.clickNextPrefPage();
      cy.wait(500);

      const drugpage = new PrescriptionPage();
      drugpage.enterDrugSearchBox(testData.drugName1);
      cy.wait(500);
      drugpage.selectDrug();
      cy.wait(500);
      drugpage.clickAddToDrug();
      cy.wait(500);
      drugpage.doneAddDrugClick();
      cy.wait(500);

      const Pharmacypage = new PharmacyPage();
      Pharmacypage.clickFindFarmacy();
      cy.wait(500);
      Pharmacypage.clickfarmacyOne();
      cy.wait(500);
      Pharmacypage.clickfarmacyTwo();
      cy.wait(500);
      Pharmacypage.clicknextpharmacy();
      cy.wait(500);

      const planselctPg = new PlanselectionPage();
      const medicarepg = new MedicarePage();
      const longtermPg = new longTermPage();

      planselctPg.medicareAdvantageClick();
      cy.wait(500);
      planselctPg.planWellCaresimpleClick();
      cy.wait(500);
      planselctPg.donePlanSelectionClick();
      cy.wait(500);
      planselctPg.tickClick();
      cy.wait(500);
      planselctPg.medicareclick();
      cy.wait(500);

      medicarepg.medicarArrowClick();
      cy.wait(500);
      medicarepg.submitMedicareClick();
      cy.wait(500);
      medicarepg.backToplanSelectionClick();
      cy.wait(1000);

      planselctPg.longtermClick();
      cy.wait(500);

      longtermPg.submitLongTermClick();
      cy.wait(500);
       longtermPg.pdfclick();
       cy.wait(500);
      longtermPg.backLongTermToPlanSelectionClick();
      cy.wait(500);

      planselctPg.aivanteImagClick();
      cy.wait(500);
    });
  });
});
