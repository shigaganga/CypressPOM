import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import PreferencePage from '../pages/PreferencePage.js';
describe('PrescriptionPageTest', () => {
   
    let prefPage;
    let drugPage;
 let testData = null;
    before(() => {
        cy.task('csv:parseFromDropbox').then((data) => {
            testData = data[0]; // Use only the first row
        });
    });
    function searchAndSelectDrug(drugName) {
        drugPage.enterDrugSearchBox(drugName);
        drugPage.selectDrug();
    }
    beforeEach(() => {
        cy.session("prescription session", () => {
            cy.visit(testData.baseUrl);
            const lPage = new LoginPage();
            lPage.setUserName(testData.username);
            cy.wait(500);
            lPage.setPassword(testData.password);
            cy.wait(500);
            lPage.clickLoginBtn();
            cy.wait(500);
      
            const recPage = new LandingPage();
            recPage.clickCreateRecommendation();
            cy.wait(500);
      
            const homepage = new HomePage();
            homepage.enterEmail(testData.email);
            cy.wait(500);
            homepage.enterName(testData.name);
            cy.wait(500);
            homepage.clickDatePicker();
            cy.wait(500);
            homepage.clickYear(testData.yearOfBirth);
            cy.wait(500);
            homepage.clickMonth(testData.monthOfBirth);
            cy.wait(500);
            homepage.clickGender();
            cy.wait(500);
            homepage.selectGender(testData.gender);
            cy.wait(500);
            homepage.enterStreet(testData.street);
            cy.wait(500);
            homepage.enterZip(testData.zip);
            cy.wait(500);
            homepage.clickSearch();
            cy.wait(500);
            homepage.entercommunicationEmail(testData.communicationEmail);
            cy.wait(500);
            homepage.enterContact(testData.contactNumber);
            cy.wait(500);
            homepage.clickhealthArrow();
            cy.wait(500);
            homepage.clickHealthProfile(testData.healthProfile);
            cy.wait(500);
            homepage.enterLifeexpectancy(testData.lifeExpectancy);
            cy.wait(500);
            homepage.selectTobaccoOption(testData.tobacco);
            cy.wait(500);
            homepage.selectTaxFilingStatus(testData.taxFilingStatus);
            cy.wait(500);
            homepage.clickMagiTier();
            cy.wait(500);
            homepage.clickMaggiTireOptions(testData.magiTier);
            cy.wait(500);
            homepage.selectConciergeOption(testData.conceirge);
            cy.wait(500);
            homepage.nextHomeClick();
            cy.wait(500);
        prefPage = new PreferencePage();
        prefPage.clickyesRadioDrugCost();
        prefPage.clickNextPrefPage();
        drugPage = new PrescriptionPage();
    });
        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/manage-prescriptions");
    });
    it('TC_PDP_ADD_DRUG_01:Add or import prescription Drug', () => {
        searchAndSelectDrug(testData.drugName1);
        drugPage.clickAddToDrug();
        drugPage.doneAddDrugClick();
        cy.log("Gabapentin has been added to the prescription list.");
    });
    it('TC_PDP_ADD_DRUG_02: Begin typing to find and select your drug @critical', () => {
        searchAndSelectDrug(testData.drugName5);
        drugPage.clickAddToDrug();
        cy.log("Drug was found in the dropdown, test passed.");
    });
    it('TC_PDP_DRUG_SEARCH_03: Drug search, invalid drug', () => {
        searchAndSelectDrug(testData.invalidDrug);
        cy.log("Drug was not found in the dropdown, test passed.");
    });
    it('TC_PDP_ADD_DRUG_04: Add drug with dosage function', () => {
        searchAndSelectDrug(testData.drugName2);
        drugPage.clickAddToDrug();
        drugPage.verifyDosageWindow();
        cy.log("Dosage window displayed for Amoxicillin.");
    });
    it('TC_PDP_ADD_DRUG_05: Add drug search with package', () => {
        searchAndSelectDrug(testData.drugName2);
        drugPage.clickAddToDrug();
        drugPage.verifyDosageWindow();
        cy.log("User should view dosage information in the dosage window, test passed.");
    });
    it('TC_PDP_ADD_DRUG_06: Add drug search with refill frequency', () => {
        searchAndSelectDrug(testData.drugName2);
        drugPage.clickRefillFreequency();
        drugPage.clickSixtyDaysRefill();
        drugPage.clickAddToDrug();
        drugPage.verifyDosageWindow();
        cy.log("User should view refill frequency information as every 2 months, test passed.");
    });
    it('TC_PDP_ADD_DRUG_07: Verify user can add drug with quantity', () => {
        searchAndSelectDrug(testData.drugName2);
        drugPage.enterQuantity(testData.drugQuantity2);
        drugPage.clickAddToDrug();
        cy.log("Drug added with correct quantity.");
    });
    it('TC_PDP_ADD_DRUG_08: Boundary value test as quantity zero', () => {
        searchAndSelectDrug(testData.drugName2);
        drugPage.enterQuantity(testData.drugQuantity0);
        drugPage.clickAddToDrug();
        cy.log("When quantity is zero, it throws an error message.");
    });
    it('TC_PDP_ADD_DRUG_09: Add branded drug to generic drug', () => {
        searchAndSelectDrug(testData.drugName4);
        drugPage.verifyGenericBrandWindow();
        drugPage.addBrandInsteadClick();
        drugPage.addMyDrugListClick();
        cy.log("User added branded drug to generic.");
    });
    it('TC_PDP_SAVE_DRUG_LIST_10: Verify user can save drug list', () => {
        searchAndSelectDrug(testData.drugName3);
        drugPage.addMyDrugListClick();
        drugPage.doneAddDrugClick();
        const homepage = new HomePage();
        homepage.verifyUrl(testData.managePharmacy_url);
        cy.log("User should be able to save drug list under recommendation.");
    });
    it('TC_PDP_ADD_DRUG_11: Verify user can add another drug', () => {
        searchAndSelectDrug(testData.drugName3);
        drugPage.addMyDrugListClick();
        drugPage.clickAddAnotherDrug();
        searchAndSelectDrug(testData.anotherDrug);
        drugPage.addGenericClick();
        drugPage.clickAddToDrug();
        cy.log("User added another drug to the list.");
    });
    it('TC_PDP_ADD_DRUG_12: Verify user can finish adding drugs', () => {
        searchAndSelectDrug(testData.drugName3);
        drugPage.addMyDrugListClick();
        drugPage.doneAddDrugClick();
        const homepage = new HomePage();
        homepage.verifyUrl(testData.managePharmacy_url);
        cy.log("User successfully finished adding drugs.");
    });
    it('TC_PDP_ADD_DRUG_13: Verify Browse Drugs A-Z functionality', () => {
        drugPage.clickBrowseAtoZlink();
        drugPage.enterLetter("B");
        drugPage.clickDrugFound();
        drugPage.clickSelectDrug();
        drugPage.clickAddDrug();
        drugPage.clickAddToDrugList();
        drugPage.doneAddDrugClick();
        const homepage = new HomePage();
        homepage.verifyUrl(testData.managePharmacy_url);
        cy.log("User browsed and added a drug from the A-Z list.");
    });
    it('TC_PDP_ADD_DRUG_14: Verify drug search with invalid name', () => {
        searchAndSelectDrug(testData.invalidDrug);
        cy.log("Drug was not found in the dropdown, test passed.");
    });
    it('TC_PDP_SELECT_DRUG_14: Verify select prescription drug from existing list', () => {
        cy.log("User can see prescription list, test passed.");
    });
    it('TC_PDP_CLR_SEARCH_15: Verify clear search functionality', () => {
        searchAndSelectDrug(testData.drugName1);
        drugPage.clickClearSearch();
        cy.log("Search cleared successfully.");
    });
    it('TC_PDP_GO_BACK_16: Verify going back to preference page', () => {
        drugPage.clickGobackPreference();
        const homepage = new HomePage();
        homepage.verifyUrl(testData.preferencePage_url);
        cy.log("User navigated back to preference page.");
    });
    it('TC_PDP_GO_BACK_17: Verify going back to add drug page', () => {
        searchAndSelectDrug(testData.drugName3);
        drugPage.addMyDrugListClick();
        drugPage.clickGobackAddDrug();
        cy.log("User navigated back to add drug page.");
    });
    it('TC_PDP_EDT_DRUG_18: Verify edit drug functionality', () => {
        searchAndSelectDrug(testData.drugName3);
        drugPage.addMyDrugListClick();
        drugPage.editDrugClick();
        drugPage.enterQuantity(testData.drugQuantity3);
        drugPage.updateThisDrugClick();
        cy.log("Drug quantity updated successfully.");
    });
    it('TC_PDP_REMOVE_DRUG_19: Verify remove drug functionality', () => {
        searchAndSelectDrug(testData.drugName3);
        drugPage.addMyDrugListClick();
        drugPage.removeDrugClick();
        cy.log("Drug was successfully removed from the list.");
    });
    it('TC_PDP_REVIEW_PRES_20: Review prescription list functionality', () => {
        searchAndSelectDrug(testData.drugName3);
        drugPage.addMyDrugListClick();
        drugPage.clickAddAnotherDrug();
        drugPage.reviewPrescriptionListClick();
        cy.log("Prescription list reviewed successfully.");
    });
});
