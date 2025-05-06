import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import longTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import MedicarePage from '../pages/MedicarePage.js';

describe('smoke Flow Test', () => {
  it('should log in and create a recommendation', () => {
    

    // Use CSV test data
    cy.task('csv:parseFromDropbox').then((data) => {
      const testData = data[0]; // assuming only one row
      cy.visit(testData.baseUrl);
      const lPage = new LoginPage();
      lPage.setUserName(testData.username);
      lPage.setPassword(testData.password);
      lPage.clickLoginBtn();

      const recPage = new LandingPage();
      recPage.clickCreateRecommendation();

      const homepage = new HomePage();
      cy.wait(500);
      homepage.enterEmail(testData.email);
      homepage.enterName(testData.name);
      cy.wait(500);

      homepage.clickDatePicker();
      homepage.clickYear(testData.year);
      cy.wait(500);
      homepage.clickMonth(testData.month);
      cy.wait(500);
      homepage.enterStreet(testData.street);
      cy.wait(500);
      homepage.enterZip(testData.zip);
      homepage.clickSearch();
      cy.wait(500);
      homepage.entercommunicationEmail(testData.communicationEmail);
      cy.wait(500);
      homepage.enterContact(testData.contactNumber);
      cy.wait(500);
      homepage.clickhealthArrow();
      cy.wait(500);
      homepage.clickHealthProfile(testData.healthProfile);
      homepage.enterLifeexpectancy(testData.lifeExpactancy);
      homepage.clickTabaccoNo();
      homepage.clickTaxJoin();
      homepage.clickMagiTier();
      cy.wait(500);
      homepage.clickMaggiTireOptions(testData.magiTier);
      homepage.clickConceirgeNo();
      homepage.nextHomeClick();
      cy.wait(500);
      const prefPage = new PreferencePage();
      cy.wait(500);
      prefPage.clickyesRadioDrugCost();
      cy.wait(500);
      prefPage.clickNextPrefPage();

      const drugpage = new PrescriptionPage();
      cy.wait(500);
      drugpage.enterDrugSearchBox(testData.drugName1);
      cy.wait(500);
      drugpage.selectDrug();
      cy.wait(500);
      drugpage.clickAddToDrug();
      cy.wait(500);
      drugpage.doneAddDrugClick();

      const Pharmacypage = new PharmacyPage();
      cy.wait(500);
      Pharmacypage.clickFindFarmacy();
      cy.wait(500);
      Pharmacypage.clickfarmacyOne();
      cy.wait(500);
      Pharmacypage.clickfarmacyTwo();
      cy.wait(500);
      Pharmacypage.clicknextpharmacy();

      const planselctPg = new planselectionPage();
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
      longtermPg.backLongTermToPlanSelectionClick();
      cy.wait(500);
      planselctPg.aivanteImagClick();
    });
  });
});
