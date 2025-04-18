import ProviderHomeHealthservicesPage from "../pages/ProviderHomeHealthservicesPage.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import ProviderPage from "../pages/ProviderPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"

describe('ProviderHomeHealthservices', () => {

    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data) => {
            const loginpage = new LoginPage();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
        });
        const landingpage = new LandingPage();
        landingpage.clickCreateRecommendation();
        //Steps to Go To Provider_HomeHealthServices_Page
        const homepage=new HomePage();
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
        // homepage.verifyUrl("https://analytics.dzeecloud.com/medicareAdvantage_sandbox/preferences");

        const prefPage=new PreferencePage();
         cy.wait(100);
         prefPage.clickyesRadioDrugCost();
         cy.wait(100);
         prefPage.clickNextPrefPage();
        
        cy.wait(2000)
        const drugpage= new PrescriptionPage();
         cy.wait(100);
         drugpage.enterDrugSearchBox("Gabapentin");
         cy.wait(100);
         drugpage.selectDrug();
         cy.wait(100);
        drugpage.clickAddToDrug();
        cy.wait(100);
        drugpage.doneAddDrugClick();
        cy.wait(1000)
        
        const Pharmacypage=new PharmacyPage();
        cy.wait(100);
        Pharmacypage.clickFindFarmacy();
        cy.wait(100);
        Pharmacypage.clickfarmacyOne();
        cy.wait(100);
        Pharmacypage.clickfarmacyTwo();
        cy.wait(100);
        Pharmacypage.clicknextpharmacy();
        cy.wait(100);

        const providerPage = new ProviderPage();
        providerPage.clickProviderBtn();

        cy.log("Entering Home Health Service Page");
        cy.wait(3000)
    });

    it('TC-1 Enter Home Health Services button', () => {
      const providerhomehealthservices = new ProviderHomeHealthservicesPage();
      providerhomehealthservices.clickhomeHealthservicesBtn();
      cy.log("Home Health services button - Passed");
      cy.wait(5000)
  });

  it('TC-2 Click Home Health Services street_3', () =>{
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
  });
/*
  it('TC-3 Enter Home Health Services street_3', () =>{
    const providerhomehealthservices =new ProviderHomeHealthservicesPage();
    providerhomehealthservices.enterStreet_3("Girard");
    cy.log("Provider_Home Health Services Enter Street - Passed");
    cy.wait(5000)
  });

 it('TC-3 Home Health Services Click zipcode_3', () =>{
    const providerhomehealthservices = new ProviderHomeHealthservicesPage();
    providerhomehealthservices.clickhomeHealthservicesBtn();
    providerhomehealthservices.clickZipCode_3();
    //providerhomehealthservices.typeZipCode_3('backspace');
    providerhomehealthservices.enterZipcode_3("80113");
    providerhomehealthservices.clickZipSearch_3();
    cy.log("Provider_Home Health Services Enter ZipCode - Passed");
    cy.wait(5000)
  });

it('TC-5 Home Health Services Enter zipcode_3', () =>{
  const providerhomehealthservices = new ProviderHomeHealthservicesPage();
  providerhomehealthservices.enterZipcode_3("80113");
  cy.log("Provider_Home Health Services Enter ZipCode - Passed");
  cy.wait(5000)
});

it('TC-6 Home Health Services  clickzip search_3', () =>{
const providerhomehealthservices = new ProviderHomeHealthservicesPage();
providerhomehealthservices.clickZipSearch_3();
cy.log("Provider_Home Health Services Click Zip Search - Passed");
cy.wait(5000)
});

it('TC-7 Home Health Services clickcity', () =>{
const providerhomehealthservices = new ProviderHomeHealthservicesPage();
providerhomehealthservices.clickCity_3();
cy.log("Provider_Home Health Services Click City - Passed");
cy.wait(5000)
});

it('TC-8 Home Health Services selectcityname', () => {
const providerhomehealthservices = new ProviderHomeHealthservicesPage();
providerhomehealthservices.selectCityName_3();
cy.log("Provider_Home Health Services Select City Name - Passed");
cy.wait(5000)
});

it('TC-9 Click Home Health Services Search Provider button',() => {
  const providerhomehealthservices = new ProviderHomeHealthservicesPage();
  providerhomehealthservices.clickSearchProviderBtn_3();
  cy.log("Provider_Home Health Services Button - Passed");
  //cy.log("Home Health services button - Passed");
  cy.wait(5000)
});*/


  });