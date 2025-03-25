
import ProviderDialysisFacility from "../pages/ProviderDialysisFacility.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import ProviderPage from "../pages/ProviderPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"

describe('ProviderDialysisFacility', () => {

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

        //Steps to go to the dialysis page
        //cy.wait(3000);
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

        cy.log("Entering Dialysis Facility Page");
        cy.wait(3000)
    });

    it('TC-1 Enter Dialysis Facility Name', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.enterDialysisFacilityName("Davita Englewood Dialysis Center");
        providerDialysisFacility.clickSearch();
        cy.log("Dialysis Facility Name - Passed");
        cy.wait(3000)
    });

    it('TC-2 dialysisfacility street', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.enterStreet("Girard");
        cy.wait(3000)
    });

    it('TC-3 dialysisfacility clickdialysis', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.clickDialysis();
        cy.wait(3000)
    });

    it('TC-4 dialysisfacility centerzipcode', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.enterZipCode("80113");
        cy.wait(1000)
    });

    it('TC-5 dialysisfacility clickzip search', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000)
        providerDialysisFacility.clickZipSearch();
    });

    it('TC-6 dialysisfacility clickcity', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.clickCity();
    });

    it('TC-7 dialysisfacilitys electcityname', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.selectCityName();
    });

    it('TC-8 dialysisfacility clickradius', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.clickRadiusIn();
    });

    it('TC-9 dialysisfacility clicksearch', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.clickSearch();
    });

    it('TC-10 dialysisfacility clickproviderfilter', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000)
        providerDialysisFacility.clickProviderFilter();
    });

    it('TC-11 dialysisfacility enterdistance', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000)
        providerDialysisFacility.enterDistance(10);
    });

    it('TC-11 dialysisfacility clickrating', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000)
        providerDialysisFacility.clickRating();
    });

    it('TC-12 dialysisfacility select ratingfive', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000)
        providerDialysisFacility.selectRatingFive();
    });

    it('TC-13 dialysisfacility clickapply filter', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000)
        providerDialysisFacility.clickApplyFilter();
    });

    it('TC-13 dialysisfacility clickclear filter', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000)
        providerDialysisFacility.clickClearFilter();
    });

    it('TC-14 dialysisfacility clickback button', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000)
        providerDialysisFacility.clickBackBtn();
    });

});
