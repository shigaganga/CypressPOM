import ProviderDialysisFacility from "../pages/ProviderDialysisFacility.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"
import PlanselectionPage from '../pages/PlanselectionPage.js';
import ProviderMedicalEquipment from "../pages/ProviderMedicalEquipmentPage.js"
//Steps for Medicalequipment Page
describe('ProviderMedicalEquipment-TestSuite', () => {
    let testData;
    const lPage = new LoginPage();
    const recPage = new LandingPage();
    const homepage = new HomePage();
    const preferencePage = new PreferencePage();
    const prescriptionPage = new PrescriptionPage();
    const pharmacyPage = new PharmacyPage();
    const planselectionpage = new PlanselectionPage();
    const providerMedicalEquipment = new ProviderMedicalEquipment();

    //Load data fixures before tests.
    before(() => {
        cy.fixture('LoginFixture').then((data) => {
            testData = data;
        })
    });

    //Go to home page after all tests.
    after(() => {
        cy.visit(testData.homePage_url);
        cy.wait(2000);
    })

    beforeEach(() => {
        cy.session("Provider User Session", () => {
            cy.visit(testData.baseUrl);
            cy.wait(1000); 

            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin();

            //Steps to go to the dialysis page
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
        })
        cy.log("Entering MedicalProviderEquipmentPage...");
        cy.visit(testData.manageProviders_url);
        cy.wait(1000);
    });

    it('TC_PDP_PRV_ME_01 Verify "Medical equipment & suppliers" Category is Visible and Clickable on the Provider Page and facility name, ', () => {
        cy.wait(1000);
        providerMedicalEquipment.clickMedcial()
        cy.wait(1000);
        providerMedicalEquipment.typeEquipmentname(testData.medicalequipmentfacilityname);
        cy.wait(1000);
        providerMedicalEquipment.typeStreet(testData.medicalequipmentstreet);
    });

    it('TC_PDP_PRV_ME_02 Verify the Zip code Search icon for  "Medical equipment & suppliers" Category on the Provider Page., ', () => {
        providerMedicalEquipment.enterZipCode(testData.medicalequipmentzipcode);
        cy.wait(1000);
        providerMedicalEquipment.clickZipSearch();
        cy.wait(1000);
        // providerMedicalEquipment.clickCountyState();
        providerMedicalEquipment.clickCity();
        cy.wait(1000);
        providerMedicalEquipment.clickCityName();

    });

    it('TC_PDP_PRV_ME_03 Verify the Distance and search provider for  "Medical equipment & suppliers" Category on the Provider Page. ', () => {
        providerMedicalEquipment.enterZipCode(testData.medicalequipmentzipcode);
        cy.wait(1000);
        providerMedicalEquipment.clickZipSearch();
        cy.wait(1000);
        providerMedicalEquipment.clickCity();
        cy.wait(1000);
        providerMedicalEquipment.clickCityName();
        cy.wait(1000);
        providerMedicalEquipment.enterRadiusin(testData.medicalequipmentradius);
        cy.wait(1000);
        providerMedicalEquipment.clickSearchProvider();
    });

    it('TC_PDP_PRV_ME_04 Verify "Apply Filter" and clear,back Button Functionality in the " Medical equipment" Category on the Provider Page,  ', () => {
        providerMedicalEquipment.enterZipCode(testData.medicalequipmentzipcode);
        cy.wait(1000);
        providerMedicalEquipment.clickZipSearch();
        cy.wait(1000);
        providerMedicalEquipment.clickCity();
        cy.wait(1000);
        providerMedicalEquipment.clickCityName();
        cy.wait(1000);
        providerMedicalEquipment.enterRadiusin(testData.medicalequipmentradius);
        cy.wait(1000);
        providerMedicalEquipment.clickSearchProvider();
        cy.wait(1000);
        providerMedicalEquipment.clickProviderFilter();
        cy.wait(1000);
        providerMedicalEquipment.typeProviderFilterDistance(testData.medicalequipmentdistance);
        cy.wait(1000);
        providerMedicalEquipment.clickApplyFilter();
        cy.wait(1000);
        providerMedicalEquipment.clickProviderFilterCollapse();
        cy.wait(1000);
        providerMedicalEquipment.clickClearFilter();
        cy.wait(1000);
        providerMedicalEquipment.clickBackBtn();
    });
}); 