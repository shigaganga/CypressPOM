import ProviderDialysisFacility from "../pages/ProviderDialysisFacility.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"
import PlanselectionPage from '../pages/PlanselectionPage.js';
//Steps for Dialysis test
describe("ProviderDialysisFacility-TestSuite", () => {
    let testData;
    const lPage = new LoginPage();
    const recPage = new LandingPage();
    const homepage = new HomePage();
    const preferencePage = new PreferencePage();
    const prescriptionPage = new PrescriptionPage();
    const pharmacyPage = new PharmacyPage();
    const planselectionpage = new PlanselectionPage();
    const providerDialysisFacility = new ProviderDialysisFacility();

    //Load data fixures before tests.
    before(() => {
        cy.fixture('LoginFixture').then((data) => {
            testData = data;
        })
    })

    //Go to home page after all tests.
    after(() => {
        cy.visit(testData.homePage_url);
        cy.wait(2000);
    })
    
    beforeEach(() => {
        cy.session("Provider User Session", () => {
            cy.visit(testData.baseUrl);
            cy.wait(500)

            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin();

            recPage.clickCreateRecommendation();
            cy.wait(100);
            homepage.enterEmail(testData.email);
            cy.wait(100);
            homepage.clickhealthArrow();
            cy.wait(100);
            homepage.clickGoodHealth(testData.healthProfile);
            cy.wait(100);
            homepage.enterName(testData.name);
            cy.wait(100);
            homepage.enterLifeexpectancy(testData.lifeExpectancy);
            cy.wait(100);
            homepage.datePickerclick();
            cy.wait(100);
            homepage.year1957click(testData.yearOfBirth);
            cy.wait(100);
            homepage.month1957click(testData.yearOfBirth);
            cy.wait(100);
            homepage.enterZip(testData.zip)
            cy.wait(100);
            homepage.clickSearch();
            cy.wait(100);
            homepage.nextHomeClick();
            cy.wait(100);
            preferencePage.clickyesRadioDrugCost();
            cy.wait(100);
            preferencePage.clickNextPrefPage();
            cy.wait(100);
            prescriptionPage.enterDrugSearchBox(testData.drugName1);
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

        // cy.visit(`${appUrl}/manage-providers`);
        cy.log("Entering MedicalProviderEquipmentPage...");
        cy.visit(testData.manageProviders_url);
        cy.wait(2000)
    })

    it('TC_PDP_PRV_DF_01 Verify "Dialysis facilities" Category ', () => {
        providerDialysisFacility.clickDialysis();

    });

    it('TC_PDP_PRV_DF_02 Verify Functionality of the Optional "Dialysis facilities Name (Optional)" Field on the Provider Page', () => {
        providerDialysisFacility.clickDialysis();
        providerDialysisFacility.enterDialysisFacilityName(testData.providerdialysisfacilityname);
        cy.log("Dialysis Facility Name - Passed");
    });

    it(' TC_PDP_PRV_DF_03,dialysisfacility street', () => {
        providerDialysisFacility.enterStreet(testData.providerdialysisstreetname);
    });

    it('TC_PDP_PRV_DF_04 to verify the dialysisfacility enterzipcode and search zipcode button', () => {
        providerDialysisFacility.enterZipCode(testData.providerdialysiszipcode);
        providerDialysisFacility.clickZipSearch();
        cy.wait(1000);
        providerDialysisFacility.clickCity();
        cy.wait(1000);
        providerDialysisFacility.clickCityName();
    });

    it('TC_PDP_PRV_DF_05 verify the distance and click search provider', () => {
        providerDialysisFacility.clickRadiusIn();
        providerDialysisFacility.clickSearch();
    });

    it('TC_PDP_PRV_DF_06 verify Distance Filter Options for "Dialysis facilities" Category on the Provider Page', () => {
        providerDialysisFacility.enterZipCode(testData.providerdialysiszipcode);
        providerDialysisFacility.clickZipSearch();
        cy.wait(1000);
        providerDialysisFacility.clickCity();
        cy.wait(1000);
        providerDialysisFacility.clickCityName();
        //Search to get to next page.
        providerDialysisFacility.clickRadiusIn();
        providerDialysisFacility.clickSearch();
        cy.wait(1000);
        //Search Provider Page Test
        providerDialysisFacility.clickProviderFilter();
        cy.wait(1000);
        providerDialysisFacility.enterDistance(testData.providerdialysisdistance);
        cy.wait(1000);
        //These fields are not on the test app. (optional)
        //providerDialysisFacility.clickRating();
        //cy.wait(1000);
        //providerDialysisFacility.selectRatingFive();
        //cy.wait(1000);
        providerDialysisFacility.clickApplyFilter();
        cy.wait(1000);
        providerDialysisFacility.clickClearFilter();
    });

    it('TC_PDP_PRV_DF_07 This is to verify "Back button"', () => {
        //Search to get to next page.
        providerDialysisFacility.clickRadiusIn();
        cy.wait(1000);
        providerDialysisFacility.clickSearch();
        cy.wait(1000);
        providerDialysisFacility.clickBackBtn();
    });

});
