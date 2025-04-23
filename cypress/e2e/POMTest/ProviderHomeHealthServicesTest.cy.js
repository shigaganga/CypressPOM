
import ProviderHomeHealthservicesPage from "../pages/ProviderHomeHealthservicesPage.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"
import PlanselectionPage from '../pages/PlanselectionPage.js';

describe("ProviderHomeHealthservicesPage", () => {
    const providerhomehealthservices = new ProviderHomeHealthservicesPage();
    //const providerDialysisFacility = new ProviderDialysisFacility();

    beforeEach("Login to PlanSelectionPage", () => {
        cy.session("Provider session", () => {
            cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');

            const lPage = new LoginPage();
            const recPage = new LandingPage();
            const homepage = new HomePage();
            const preferencePage = new PreferencePage();
            const prescriptionPage = new PrescriptionPage();
            const pharmacyPage = new PharmacyPage();
            const planselectionpage = new PlanselectionPage();

            cy.fixture('LoginFixture').then((data) => {
                lPage.setUserName(data.username);
                lPage.setPassword(data.password);
                lPage.clickLoginBtn();
                lPage.verifyLogin();
            });

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
            cy.wait(2000)
            planselectionpage.setProviderButtn();

            cy.log("Entering Home Health Service Page");
            cy.wait(3000)
        });

        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/manage-providers");
    })

    it('TC-1 Enter Home Health Services button', () => {
      const providerhomehealthservices = new ProviderHomeHealthservicesPage();
      providerhomehealthservices.clickhomeHealthservicesBtn();
      cy.log("Home Health services button - Passed");
      cy.wait(5000)
  });

  it('TC-2 Click Home Health Services SearchProvider_Button', () =>{
   const providerhomehealthservices = new ProviderHomeHealthservicesPage();
   providerhomehealthservices.clickhomeHealthservicesBtn();
   providerhomehealthservices.clickStreet_3;
   providerhomehealthservices.enterStreet_3("Girard");
    cy.log("Provider_Home Health Services Click Street - Passed");
    cy.wait(5000)
    providerhomehealthservices.clickZipCode_3();
    providerhomehealthservices.enterZipcode_3("80113");
    providerhomehealthservices.clickZipSearch_3();
    cy.log("Provider_Home Health Services Enter ZipCode - Passed");
    cy.wait(5000)
    providerhomehealthservices.clickSearchProviderBtn_3();
    cy.log("Provider_Home Health Services Button - Passed");
    cy.log("Home Health services button - Passed");
    cy.wait(5000)
    providerhomehealthservices.clickBackButton_3();
    cy.log("Back to Home Health services Page - Passed");
    cy.wait(5000)
    providerhomehealthservices.enterHomeHealthName_3("CAREBRIDGE");
    cy.log("Provider_Home Health Services_Enter Home Health Name - Passed");
    cy.wait(5000)
    providerhomehealthservices.clickSearchProviderBtn_3();
    cy.log("Provider_Home Health Services Button - Passed");
    cy.log("Home Health services button - Passed");
    cy.wait(5000)

  });
  
});