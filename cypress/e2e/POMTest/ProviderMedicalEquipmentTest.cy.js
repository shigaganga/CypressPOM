import ProviderDialysisFacility from "../pages/ProviderDialysisFacility.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
//import ProviderPage from "../pages/ProviderPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"
import PlanselectionPage from '../pages/PlanselectionPage.js';
import ProviderMedicalEquipment from "../pages/ProviderMedicalEquipmentPage.js"

describe('Providermedicalequipment', () => {

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
        cy.wait(1000)

        const Pharmacypage = new PharmacyPage();
        cy.wait(100);
        Pharmacypage.clickFindFarmacy();
        cy.wait(100);
        Pharmacypage.clickfarmacyOne();
        cy.wait(100);
        Pharmacypage.clickfarmacyTwo();
        cy.wait(100);
        Pharmacypage.clicknextpharmacy();
       // cy.wait(100);
       // Pharmacypage.clickProviderButton();

        //const providerPage = new ProviderPage();
       // providerPage.clickProviderBtn();
       //const planselectionPage=new PlanselectionPage();
       //planselectionPage.clickProviderButton();
       const planselectionpage = new PlanselectionPage();
        planselectionpage.setProviderButtn();
       //const providerDialysisFacility = new ProviderDialysisFacility();



       // cy.wait(3000)
       // const providerDialysisFacility = new ProviderDialysisFacility();
       // providerDialysisFacility.clickDialysis();
      //  providerDialysisFacility.enterDialysisFacilityName("Davita Englewood Dialysis Center");
       // providerDialysisFacility.enterStreet("Girard");
       // providerDialysisFacility.enterZipCode("80113");
      //  cy.wait(1000)
       // providerDialysisFacility.clickZipSearch();
       // cy.wait(2000)
       // providerDialysisFacility.clickCity();
       // cy.wait(1000)
       // providerDialysisFacility.clickCityName();
        //providerDialysisFacility.clickRadiusIn();
       // providerDialysisFacility.clickSearch();
       // cy.wait(1000)
       // providerDialysisFacility.clickProviderFilter();
       // cy.wait(1000)
        //providerDialysisFacility.enterDistance(10);
       // cy.wait(1000)
       // providerDialysisFacility.clickApplyFilter();
       // cy.wait(1000)
       // providerDialysisFacility.clickClearFilter();
        //cy.wait(1000)
       // providerDialysisFacility.clickBackBtn();


        cy.log("Entering MedicalProviderEquipmentPage");
        cy.wait(3000)
    });

    it('TC-1 Enter Medical Facility Name', () => {
        const providerMedicalEquipment = new ProviderMedicalEquipment();
        providerMedicalEquipment.clickMedcial()
        providerMedicalEquipment.typeEquipmentname("Nebulizer");
        providerMedicalEquipment.typeStreet("Holly")
    });
    it('TC-2 Click City ', () => {
        const providerMedicalEquipment = new ProviderMedicalEquipment();
        providerMedicalEquipment.enterZipCode("80112");
        providerMedicalEquipment.clickZipSearch();
       // providerMedicalEquipment.clickCountyState();
        providerMedicalEquipment.clickCity();
        providerMedicalEquipment.clickCityName();

    });

    it('TC-3 Click Radius ', () => {
        const providerMedicalEquipment = new ProviderMedicalEquipment();
        cy.wait(1000);
        providerMedicalEquipment.enterRadiusin("10");
        cy.wait(1000);
        providerMedicalEquipment.clickSearchProvider();

    });

    it('TC-4 provider filter ', () => {
        const providerMedicalEquipment = new ProviderMedicalEquipment();
        providerMedicalEquipment.enterRadiusin("10");
        providerMedicalEquipment.clickSearchProvider();
        providerMedicalEquipment.clickProviderFilter();
        providerMedicalEquipment.typeProviderFilterDistance("10");
        providerMedicalEquipment.clickApplyFilter();
        providerMedicalEquipment.clickClearFilter();
        providerMedicalEquipment.clickBackBtn();
        //providerMedicalEquipment.clickBackButtonToP();

    });

}); 