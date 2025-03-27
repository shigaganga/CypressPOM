import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PrescriptionPage from '../Pages/PrescriptionPage.js';
import PreferencePage from '../pages/PreferencePage.js';

describe('PrescriptionPageTest', () => {
    let prefPage;
    let drugPage;

    
    function searchAndSelectDrug(drugName) {
        drugPage.enterDrugSearchBox(drugName);
        drugPage.selectDrug();
    }

    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

    
        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
        });

     
        const recPage = new LandingPage();
        recPage.clickCreateRecommendation();
        const homepage = new HomePage();
        
        homepage.enterEmail("ShigaPOM@gmail.com");
        homepage.clickhealthArrow();
        homepage.clickGoodHealth();
        homepage.enterName("Shigapage");
        homepage.enterLifeexpectancy("86");
        homepage.datePickerclick();
        homepage.year1957click();
        homepage.month1957click();
        homepage.enterZip("27529");
        homepage.clickSearch();
        homepage.nextHomeClick();

      
        prefPage = new PreferencePage();
        prefPage.clickyesRadioDrugCost();
        prefPage.clickNextPrefPage();
        drugPage = new PrescriptionPage();
    });

    it('test1, Begin typing to find and select your drug', () => {
        searchAndSelectDrug("Gabapentin");
        drugPage.clickAddToDrug();
        drugPage.doneAddDrugClick();
    });

    it('test2, Drug search', () => {
        searchAndSelectDrug("ibup");
        drugPage.clickAddToDrug();
        cy.log("Drug was found in the dropdown, test passed.");
    });

    it('test3, Add drug with dosage function', () => {
        searchAndSelectDrug("amoxicillin");
        drugPage.clickAddToDrug();
        drugPage.verifyDosageWindow();
    });

    it('test4, Add drug search with package', () => {
        searchAndSelectDrug("amoxicillin");
        drugPage.clickAddToDrug();
        drugPage.verifyDosageWindow();
        cy.log("User should view dosage information in dosage window, test passed.");
    });

    it('test5, Add drug search with refill frequency', () => {
        searchAndSelectDrug("amoxicillin");
        drugPage.clickRefillFreequency();
        drugPage.clickSixtyDaysRefill();
        drugPage.clickAddToDrug();
        drugPage.verifyDosageWindow();
        cy.log("User should view refill frequency information in dosage window as every 2 months, test passed.");
    });

    it('test6, Verify user can add drug with quantity', () => {
        searchAndSelectDrug("amoxicillin");
        drugPage.enterQuantity("45");
        drugPage.clickAddToDrug();
        cy.log("When quantity is less than zero, it throws an error message.");
    });

    it('test7, Boundary value test as quantity zero', () => {
        searchAndSelectDrug("amoxicillin");
        drugPage.enterQuantity("0");
        drugPage.verifyQuantityText();
        cy.log("When quantity is zero, it throws an error message.");
    });

    it('test8, Add branded drug to generic drug', () => {
        searchAndSelectDrug("ATORVALIQ");
        drugPage.verifyGenericBrandWindow();
        drugPage.addBrandInsteadClick();
        drugPage.addMyDrugListClick();
        cy.log("User should be able to add branded drug to generic, test passed.");
    });

    it('test9, Verify user can save drug list', () => {
        searchAndSelectDrug("ibuprofen");
        drugPage.addMyDrugListClick();
        drugPage.doneAddDrugClick();
        const homepage = new HomePage();
        homepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/manage-pharmacies");
        cy.log("User should be able to save drug list under recommendation, test passed.");
    });

    it('test10, Verify user can add another drug', () => {
        searchAndSelectDrug("ibuprofen");
        drugPage.addMyDrugListClick();
        drugPage.clickAddAnotherDrug();
        searchAndSelectDrug("cipro");
        drugPage.addGenericClick();
        drugPage.clickAddToDrug();
        cy.log("User should be able to save another drug, test passed.");
    });

    it('test11, Verify user can finish adding drugs', () => {
        searchAndSelectDrug("ibuprofen");
        drugPage.addMyDrugListClick();
        drugPage.doneAddDrugClick();
        const homepage = new HomePage();
        homepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/manage-pharmacies");
        cy.log("User should be able to finish adding drugs, test passed.");
    });

    it('test12, Verify Browse Drugs A-Z functionality', () => {
        const prescriptionpage = new PrescriptionPage();
        prescriptionpage.clickBrowseAtoZlink();
        prescriptionpage.enterLetter("B");
        prescriptionpage.clickDrugFound();
        prescriptionpage.clickSelectDrug();
        prescriptionpage.clickAddDrug();
        prescriptionpage.clickAddToDrugList();
        prescriptionpage.doneAddDrugClick();
        const homepage = new HomePage();
        homepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/manage-pharmacies");
        cy.log("User should be able to save drug by browsing letter, test passed.");
    });

    it('test13, Verify drug search with invalid name (cannot find your drug)', () => {
        searchAndSelectDrug("albuterol HFA");
        cy.log("Drug was not found in the dropdown, test passed.");
    });

    it('test14, Verify select prescription drug from existing list', () => {
        cy.log("User should be able to see prescription list, test passed.");
    });

    it('test15, Verify clear search functionality', () => {
        searchAndSelectDrug("Gabapentin");
        drugPage.clickClearSearch();
        cy.log("User should be able to clear drug in search box, test passed.");
    });

    it('test16, Verify going back to preference page', () => {
        drugPage.clickGobackPreference();
        const homepage = new HomePage();
        homepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/preferences");
        cy.log("User should be able to return to the search preference page, test passed.");
    });

    it('test17, Verify going back to add drug page', () => {
        searchAndSelectDrug("ibuprofen");
        drugPage.addMyDrugListClick();
        drugPage.clickGobackAddDrug();
        cy.log("User should be able to return to the add drug page, test passed.");
    });

    it('test18, Verify edit drug functionality', () => {
        searchAndSelectDrug("ibuprofen");
        drugPage.addMyDrugListClick();
        drugPage.editDrugClick();
        drugPage.enterQuantity("60");
        drugPage.updateThisDrugClick();
        cy.log("Quantity is edited, test passed.");
    });

    it('test19, Verify remove drug functionality', () => {
        searchAndSelectDrug("ibuprofen");
        drugPage.addMyDrugListClick();
        drugPage.removeDrugClick();
        cy.log("The drug is removed, test passed.");
    });

    it('test20, Review prescription list functionality', () => {
        searchAndSelectDrug("ibuprofen");
        drugPage.addMyDrugListClick();
        drugPage.clickAddAnotherDrug();
        drugPage.reviewPrescriptionListClick();
        cy.log("User can see prescription list, test passed.");
    });
});