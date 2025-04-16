import ProviderDialysisFacility from "../pages/ProviderDialysisFacility.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"
import PlanselectionPage from '../pages/PlanselectionPage.js';

describe("ProviderDialysisFacility Testing", () => {
    const providerDialysisFacility = new ProviderDialysisFacility();

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
        });

        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/manage-providers");
    })





    

    it('TC-1 dialysisfacility clickdialysis', () => {
        providerDialysisFacility.clickDialysis();

    });

    it('TC-2 Enter Dialysis Facility Name', () => {
        providerDialysisFacility.clickDialysis();
        providerDialysisFacility.enterDialysisFacilityName("Davita Englewood Dialysis Center");
        cy.log("Dialysis Facility Name - Passed");
    });

    it('TC-3 dialysisfacility street', () => {
        cy.wait(1000);
        providerDialysisFacility.enterStreet("Girard");
    });

    it('TC-4 dialysisfacility enterzipcode', () => {
        cy.wait(1000);
        providerDialysisFacility.enterZipCode("80113");
        providerDialysisFacility.clickZipSearch();
        cy.wait(1000);
        providerDialysisFacility.clickCity();
        cy.wait(1000);
        providerDialysisFacility.clickCityName();
    });

    it('TC-5 dialysisfacility clickradius', () => {
        providerDialysisFacility.clickRadiusIn();
        providerDialysisFacility.clickSearch();
    });

    it('TC-6 dialysisfacility clickproviderfilter', () => {
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
        //Search to get to next page.
        providerDialysisFacility.clickRadiusIn();
        cy.wait(1000);
        providerDialysisFacility.clickSearch();
        cy.wait(1000);
        providerDialysisFacility.clickBackBtn();
    });

});
