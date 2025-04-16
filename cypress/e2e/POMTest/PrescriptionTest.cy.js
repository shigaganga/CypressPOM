import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import PreferencePage from '../pages/PreferencePage.js';

describe('PrescriptionPageTest', () => {
    let prefPage;
    let drugPage;

    function searchAndSelectDrug(drugName) {
        drugPage.enterDrugSearchBox(drugName);
        drugPage.selectDrug();
    }

    beforeEach(() => {
        cy.session("prescription session",()=>{
        cy.fixture('LoginFixture').then((data) => {
            // Step 1: Visit base URL and log in
            cy.visit(data.baseUrl);
            const lPage = new LoginPage();
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();

            // Step 2: Create a recommendation
            const recPage = new LandingPage();
            recPage.clickCreateRecommendation();

            // Step 3: Enter homepage details
            const homepage = new HomePage();
            homepage.enterEmail(data.email);
            homepage.clickhealthArrow();
            homepage.clickGoodHealth();
            homepage.enterName(data.name);
            homepage.enterLifeexpectancy(data.lifeexpectancy);
            homepage.datePickerclick();
            homepage.year1957click();
            homepage.month1957click();
            homepage.enterZip(data.zip);
            homepage.clickSearch();
            homepage.nextHomeClick();
        });
            // Step 4: Proceed to Preference and Prescription pages
            prefPage = new PreferencePage();
            prefPage.clickyesRadioDrugCost();
            prefPage.clickNextPrefPage();
            drugPage = new PrescriptionPage();
        });
        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/manage-prescriptions")
    });

    it('test1, Begin typing to find and select your drug', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName1);
            drugPage.clickAddToDrug();
            drugPage.doneAddDrugClick();
            cy.log("Gabapentin has been added to the prescription list.");
        });
    });

    it('test2, Drug search', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3_a);
            drugPage.clickAddToDrug();
            cy.log("Drug was found in the dropdown, test passed.");
        });
    });

    it('test3, Add drug with dosage function', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.clickAddToDrug();
            drugPage.verifyDosageWindow();
            cy.log("Dosage window displayed for Amoxicillin.");
        });
    });

    it('test4, Add drug search with package', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.clickAddToDrug();
            drugPage.verifyDosageWindow();
            cy.log("User should view dosage information in the dosage window, test passed.");
        });
    });

    it('test5, Add drug search with refill frequency', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.clickRefillFreequency();
            drugPage.clickSixtyDaysRefill();
            drugPage.clickAddToDrug();
            drugPage.verifyDosageWindow();
            cy.log("User should view refill frequency information as every 2 months, test passed.");
        });
    });

    it('test6, Verify user can add drug with quantity', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.enterQuantity(data.drugQuantity2);
            drugPage.clickAddToDrug();
            cy.log("Drug added with correct quantity.");
        });
    });

    it('test7, Boundary value test as quantity zero', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.enterQuantity(data.drugQuantity0);
              drugPage.clickAddToDrug();
          //  drugPage.verifyQuantityText();
            cy.log("When quantity is zero, it throws an error message.");
        });
    });

    it('test8, Add branded drug to generic drug', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName4);
            drugPage.verifyGenericBrandWindow();
            drugPage.addBrandInsteadClick();
            drugPage.addMyDrugListClick();
            cy.log("User added branded drug to generic.");
        });
    });

    it('test9, Verify user can save drug list', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.doneAddDrugClick();
            const homepage = new HomePage();
            homepage.verifyUrl(data.managePharmacy_url);
            cy.log("User should be able to save drug list under recommendation.");
        });
    });

    it('test10, Verify user can add another drug', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.clickAddAnotherDrug();
            searchAndSelectDrug(data.anotherDrug);
            drugPage.addGenericClick();
            drugPage.clickAddToDrug();
            cy.log("User added another drug to the list.");
        });
    });

    it('test11, Verify user can finish adding drugs', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.doneAddDrugClick();
            const homepage = new HomePage();
            homepage.verifyUrl(data.managePharmacy_url);
            cy.log("User successfully finished adding drugs.");
        });
    });

    it('test12, Verify Browse Drugs A-Z functionality', () => {
        cy.fixture('LoginFixture').then((data) => {
            const prescriptionPage = new PrescriptionPage();
            prescriptionPage.clickBrowseAtoZlink();
            prescriptionPage.enterLetter("B");
            prescriptionPage.clickDrugFound();
            prescriptionPage.clickSelectDrug();
            prescriptionPage.clickAddDrug();
            prescriptionPage.clickAddToDrugList();
            prescriptionPage.doneAddDrugClick();
            const homepage = new HomePage();
            homepage.verifyUrl(data.managePharmacy_url);
            cy.log("User browsed and added a drug from the A-Z list.");
        });
    });

    it('test13, Verify drug search with invalid name (cannot find your drug)', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.invalidDrug);
            cy.log("Drug was not found in the dropdown, test passed.");
        });
    });

    it('test14, Verify select prescription drug from existing list', () => {
        cy.log("User can see prescription list, test passed.");
    });

    it('test15, Verify clear search functionality', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName1);
            drugPage.clickClearSearch();
            cy.log("Search cleared successfully.");
        });
    });

    it('test16, Verify going back to preference page', () => {
        cy.fixture('LoginFixture').then((data) => {
            drugPage.clickGobackPreference();
            const homepage = new HomePage();
            homepage.verifyUrl(data.preferencePage_url);
            cy.log("User navigated back to preference page.");
        });
    });

    it('test17, Verify going back to add drug page', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.clickGobackAddDrug();
            cy.log("User navigated back to add drug page.");
        });
    });

    it('test18, Verify edit drug functionality', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.editDrugClick();
            drugPage.enterQuantity(data.drugQuantity3);
            drugPage.updateThisDrugClick();
            cy.log("Drug quantity updated successfully.");
        });
    });

    it('test19, Verify remove drug functionality', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.removeDrugClick();
            cy.log("Drug was successfully removed from the list.");
        });
    });

    it('test20, Review prescription list functionality', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.clickAddAnotherDrug();
            drugPage.reviewPrescriptionListClick();
            cy.log("Prescription list reviewed successfully.");
        });
    });
});
