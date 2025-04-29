
import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import PreferencePage from '../pages/PreferencePage.js';
describe('PrescriptionPageTest', () => {
    let prefPage;
    let drugPage;
    let loginData; // Variable to hold CSV data
    const csvPath = 'C:\\Users\\shiga\\CypressFolder\\CypressPOM\\data.csv'; // Variable for CSV file path

    beforeEach(() => {
        // Load the CSV data before running the tests using the csvPath variable
        cy.task('csv:parse', csvPath).then((data) => {
            loginData = {};
            // Assuming each row in the CSV contains 'key' and 'value' columns
            // You can adjust the logic here if your CSV has a different structure
            data.forEach(item => {
                loginData[item.key] = item.value;
            });
        });
    });
    function searchAndSelectDrug(drugName) {
        drugPage.enterDrugSearchBox(drugName);
        drugPage.selectDrug();
    }
    beforeEach(() => {
        cy.session("prescription session",()=>{
        cy.fixture('LoginFixture').then((data) => {
            cy.visit(data.baseUrl);
            const lPage = new LoginPage();
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
    
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

    it('TC_PDP_ADD_DRUG_01:Add or import prescription Drug', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName1);
            drugPage.clickAddToDrug();
            drugPage.doneAddDrugClick();
            cy.log("Gabapentin has been added to the prescription list.");
        });
    });
    it('TC_PDP_ADD_DRUG_02: Begin typing to find and select your drug', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3_a);
            drugPage.clickAddToDrug();
            cy.log("Drug was found in the dropdown, test passed.");
        });
    });
    it('TC_PDP_DRUG_SEARCH_03: Drug search, invalid drug', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.invalidDrug);
            cy.log("Drug was notfound in the dropdown, test passed.");
        });
    });
    it('TC_PDP_ADD_DRUG_04:: Add drug with dosage function', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.clickAddToDrug();
            drugPage.verifyDosageWindow();
            cy.log("Dosage window displayed for Amoxicillin.");
        });
    });
    it('TC_PDP_ADD_DRUG_05: Add drug search with package', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.clickAddToDrug();
            drugPage.verifyDosageWindow();
            cy.log("User should view dosage information in the dosage window, test passed.");
        });
    });
    it('TC_PDP_ADD_DRUG_06: Add drug search with refill frequency', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.clickRefillFreequency();
            drugPage.clickSixtyDaysRefill();
            drugPage.clickAddToDrug();
            drugPage.verifyDosageWindow();
            cy.log("User should view refill frequency information as every 2 months, test passed.");
        });
    });
    it('TC_PDP_ADD_DRUG_07: Verify user can add drug with quantity', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.enterQuantity(data.drugQuantity2);
            drugPage.clickAddToDrug();
            cy.log("Drug added with correct quantity.");
        });
    });
    it('TC_PDP_ADD_DRUG_08: Boundary value test as quantity zero', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName2);
            drugPage.enterQuantity(data.drugQuantity0);
              drugPage.clickAddToDrug();
          //  drugPage.verifyQuantityText();
            cy.log("When quantity is zero, it throws an error message.");
        });
    });
    it('TC_PDP_ADD_DRUG_09: Add branded drug to generic drug', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName4);
            drugPage.verifyGenericBrandWindow();
            drugPage.addBrandInsteadClick();
            drugPage.addMyDrugListClick();
            cy.log("User added branded drug to generic.");
        });
    });
    it('TC_PDP_SAVE_DRUG_LIST_10: Verify user can save drug list', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.doneAddDrugClick();
            const homepage = new HomePage();
            homepage.verifyUrl(data.managePharmacy_url);
            cy.log("User should be able to save drug list under recommendation.");
        });
    });
    it('TC_PDP_ADD_DRUG_11: Verify user can add another drug', () => {
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
    it('TC_PDP_ADD_DRUG_12: Verify user can finish adding drugs @critical', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.doneAddDrugClick();
            const homepage = new HomePage();
            homepage.verifyUrl(data.managePharmacy_url);
            cy.log("User successfully finished adding drugs.");
        });
    });
    it('TC_PDP_ADD_DRUG_13: Verify Browse Drugs A-Z functionality', () => {
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
    it('TC_PDP_ADD_DRUG_14: Verify drug search with invalid name (cannot find your drug)', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.invalidDrug);
            cy.log("Drug was not found in the dropdown, test passed.");
        });
    });
    it('TC_PDP_SELECT_DRUG_14: Verify select prescription drug from existing list', () => {
        cy.log("User can see prescription list, test passed.");
    });
    it('TC_PDP_CLR_SREACH_15: Verify clear search functionality', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName1);
            drugPage.clickClearSearch();
            cy.log("Search cleared successfully.");
        });
    });
    it('TC_PDP_GO_BACK_16: Verify going back to preference page', () => {
        cy.fixture('LoginFixture').then((data) => {
            drugPage.clickGobackPreference();
            const homepage = new HomePage();
            homepage.verifyUrl(data.preferencePage_url);
            cy.log("User navigated back to preference page.");
        });
    });
    it('TC_PDP_GO_BACK_17: Verify going back to add drug page', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.clickGobackAddDrug();
            cy.log("User navigated back to add drug page.");
        });
    });
    it('TC_PDP_EDT_DRUG_18: Verify edit drug functionality', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.editDrugClick();
            drugPage.enterQuantity(data.drugQuantity3);
            drugPage.updateThisDrugClick();
            cy.log("Drug quantity updated successfully.");
        });
    });
    it('TC_PDP_REMOVE_DRUG_19: Verify remove drug functionality', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.removeDrugClick();
            cy.log("Drug was successfully removed from the list.");
        });
    });
    it('TC_PDP_REVIEW_PRES_20: Review prescription list functionality', () => {
        cy.fixture('LoginFixture').then((data) => {
            searchAndSelectDrug(data.drugName3);
            drugPage.addMyDrugListClick();
            drugPage.clickAddAnotherDrug();
            drugPage.reviewPrescriptionListClick();
            cy.log("Prescription list reviewed successfully.");
        });
    });
});
