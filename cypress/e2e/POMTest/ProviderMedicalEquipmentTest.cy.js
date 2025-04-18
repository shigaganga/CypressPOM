import ProviderDialysisFacility from "../pages/ProviderDialysisFacility.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from "../pages/HomePage.js";
import PreferencePage from "../pages/PreferencePage.js";
import PrescriptionPage from "../pages/PrescriptionPage.js";
import LandingPage from "../pages/LandingPage.js";
import PharmacyPage from "../pages/PharmacyPage.js"
import PlanselectionPage from '../pages/PlanselectionPage.js';
import ProviderMedicalEquipment from "../pages/ProviderMedicalEquipmentPage.js"

describe('Providermedicalequipment', () => {
    const providerMedicalEquipment = new ProviderMedicalEquipment();
    beforeEach(() => {
        cy.session("Provider session", () => {
            cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page');
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


            //Steps to go to the dialysis page
            //cy.wait(3000);
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
           
            cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/manage-providers');
        });


           // cy.log("Entering MedicalProviderEquipmentPage");
           // cy.wait(3000)
       

        it('TC-1 Enter Medical Facility Name', () => {
            const providerMedicalEquipment = new ProviderMedicalEquipment();
            providerMedicalEquipment.clickMedcial()
            providerMedicalEquipment.typeEquipmentname("Nebulizer");
            providerMedicalEquipment.typeStreet("Holly")
        });
        it('TC-2 Click City ', () => {
            const providerMedicalEquipment = new ProviderMedicalEquipment();
            providerMedicalEquipment.enterZipCode("80112");
            cy.wait(1000);
            providerMedicalEquipment.clickZipSearch();
            cy.wait(1000);
            // providerMedicalEquipment.clickCountyState();
            providerMedicalEquipment.clickCity();
            cy.wait(1000);
            providerMedicalEquipment.clickCityName();

        });

        it('TC-3 Click Radius ', () => {
            const providerMedicalEquipment = new ProviderMedicalEquipment();
            cy.wait(1000);
            providerMedicalEquipment.enterZipCode("80112");
            cy.wait(1000);
            providerMedicalEquipment.clickZipSearch();
            cy.wait(1000);
            providerMedicalEquipment.clickCity();
            cy.wait(1000);
            providerMedicalEquipment.clickCityName();
            cy.wait(1000);
            providerMedicalEquipment.enterRadiusin("10");
            cy.wait(1000);
            providerMedicalEquipment.clickSearchProvider();

        });


        it('TC-4 provider filter ', () => {
            const providerMedicalEquipment = new ProviderMedicalEquipment();
           // cy.wait(1000);
           providerMedicalEquipment.enterZipCode("80112");
            cy.wait(1000);
            providerMedicalEquipment.clickZipSearch();
            cy.wait(1000);
            providerMedicalEquipment.clickCity();
            cy.wait(1000);
            providerMedicalEquipment.clickCityName();
            cy.wait(1000);
            providerMedicalEquipment.enterRadiusin("10");
            cy.wait(1000);
            providerMedicalEquipment.clickSearchProvider();
            cy.wait(1000);
            providerMedicalEquipment.clickProviderFilter();
            cy.wait(1000);
            providerMedicalEquipment.typeProviderFilterDistance("10");
            cy.wait(1000);
            providerMedicalEquipment.clickApplyFilter();
            cy.wait(1000);
            providerMedicalEquipment.clickProviderFilterCollapse();
            cy.wait(1000);
            providerMedicalEquipment.clickClearFilter();
            cy.wait(1000);
            providerMedicalEquipment.clickBackBtn();
            //providerMedicalEquipment.clickBackButtonToP();

        });

    }); 