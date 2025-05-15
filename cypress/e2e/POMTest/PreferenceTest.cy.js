import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';

describe('Preference Test Suite (Single Row from Dropbox CSV)', () => {
    const loginPage = new LoginPage();
    const landingPage = new LandingPage();
    const homePage = new HomePage();
    const preferencePage = new PreferencePage();
    const prescriptionPage = new PrescriptionPage();

    let testData = null;

    before(() => {
        // Load the test data from Dropbox CSV
       cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0]; //  assign to outer variable
            //cy.fixture('LoginFixture').then((data) => {
              // testData=data;
        });
    });

    beforeEach(() => {
        // Ensure testData is loaded and contains all required fields
        if (!testData || !testData.username || !testData.password || !testData.baseUrl) {
            throw new Error('Test data or required fields not loaded!');
        }

        // Use session to preserve state across tests
        cy.session('Preference session', () => {
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
        });

        // Visit the preference page
        cy.visit(testData.preferencePage_url);
    });

    // Test case 1: Test search preference with YES
    it('TC_PDP_SEARCH_PREF_YES_01: should test search preference with YES @critical', () => {
        preferencePage.setPreference('yes');
        preferencePage.verifyManagePrescriptionurl();
        cy.log("Critical test completed");
    });

    // Test case 2: Test search preference with NO
    it('TC_PDP_SEARCH_PREF_NO_02: should test search preference with NO', () => {
        preferencePage.setPreference('no');
        preferencePage.verifyPlanSelectionUrl();
    });

    // Test case 3: Test back navigation from Prescription page to Preference
    it('TC_PDP_SEARCH_PREF_BACK_03: should test back navigation from Prescription page to Preference', () => {
        preferencePage.setPreference('yes');
        preferencePage.verifyManagePrescriptionurl();
        prescriptionPage.clickGobackPreference();
        preferencePage.verifyPreferencePageUrl();
    });

    // Test case 4: Test navigation from Preference to Plan Selection
    it('TC_05_PDP_NEXT: should test navigation from Preference to Plan Selection', () => {
        preferencePage.setPreference('yes');
        preferencePage.verifyManagePrescriptionurl();
    });
});
