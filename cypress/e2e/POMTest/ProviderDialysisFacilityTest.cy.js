import ProviderDialysisFacility from "../pages/ProviderDialysisFacility.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"
import PlanselectionPage from '../pages/PlanselectionPage.js';

describe('ProviderDialysisFacility Testing', () => {

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
        const homepage = new HomePage();
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

        const prefPage = new PreferencePage();
        cy.wait(100);
        prefPage.clickyesRadioDrugCost();
        cy.wait(100);
        prefPage.clickNextPrefPage();

        cy.wait(2000)
        const drugpage = new PrescriptionPage();
        cy.wait(100);
        drugpage.enterDrugSearchBox("Gabapentin");
        cy.wait(100);
        drugpage.selectDrug();
        cy.wait(100);
        drugpage.clickAddToDrug();
        cy.wait(100);
        drugpage.doneAddDrugClick();
        cy.wait(1000);

        const Pharmacypage = new PharmacyPage();
        cy.wait(100);
        Pharmacypage.clickFindFarmacy();
        cy.wait(100);
        Pharmacypage.clickfarmacyOne();
        cy.wait(100);
        Pharmacypage.clickfarmacyTwo();
        cy.wait(100);
        Pharmacypage.clicknextpharmacy();
        cy.wait(100);
        //PlanselectionPage
        const planselectionpage = new PlanselectionPage();
        planselectionpage.setProviderButtn();

        cy.log("Entering Dialysis Facility Page");
        cy.wait(3000)
    });

    it('TC-1 dialysisfacility clickdialysis', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.clickDialysis();

    });

    it('TC-2 Enter Dialysis Facility Name', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.enterDialysisFacilityName("Davita Englewood Dialysis Center");
        cy.log("Dialysis Facility Name - Passed");
    });

    it('TC-3 dialysisfacility street', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000);
        providerDialysisFacility.enterStreet("Girard");
    });

    it('TC-4 dialysisfacility enterzipcode', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        cy.wait(1000);
        providerDialysisFacility.enterZipCode("80113");
        providerDialysisFacility.clickZipSearch();
        cy.wait(1000);
        providerDialysisFacility.clickCity();
        cy.wait(1000);
        providerDialysisFacility.clickCityName();
    });

    it('TC-5 dialysisfacility clickradius', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        providerDialysisFacility.clickRadiusIn();
        providerDialysisFacility.clickSearch();
    });

    it('TC-6 dialysisfacility clickproviderfilter', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        //Search to get to next page.
        providerDialysisFacility.clickRadiusIn();
        providerDialysisFacility.clickSearch();
        cy.wait(1000);
        //Search Provider Page Test
        providerDialysisFacility.clickProviderFilter();
        cy.wait(1000);
        providerDialysisFacility.enterDistance(10);
        cy.wait(1000);
        //These fields are not on the test app.
        //providerDialysisFacility.clickRating();
        //cy.wait(1000);
        //providerDialysisFacility.selectRatingFive();
        //cy.wait(1000);
        providerDialysisFacility.clickApplyFilter();
        cy.wait(1000);
        providerDialysisFacility.clickClearFilter();
    });

    it('TC-7 dialysisfacility clickback button', () => {
        const providerDialysisFacility = new ProviderDialysisFacility();
        //Search to get to next page.
        providerDialysisFacility.clickRadiusIn();
        cy.wait(1000);
        providerDialysisFacility.clickSearch();
        cy.wait(1000);
        providerDialysisFacility.clickBackBtn();
    });

});
