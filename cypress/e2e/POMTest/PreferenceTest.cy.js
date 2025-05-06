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
        cy.task('csv:parseFromDropbox').then((data) => {
            testData = data[0]; // ✅ assign to outer variable
        });
    });

    beforeEach(() => {
        // ✅ Ensure testData is loaded
        if (!testData) {
            throw new Error('Test data not loaded!');
        }

        cy.session('Preference session', () => {
            cy.visit(testData.baseUrl);
            const lPage = new LoginPage();
            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
      
            const recPage = new LandingPage();
            recPage.clickCreateRecommendation();
      
            const homepage = new HomePage();
            cy.wait(500);
            homepage.enterEmail(testData.email);
            homepage.enterName(testData.name);
            cy.wait(500);
      
            homepage.clickDatePicker();
            homepage.clickYear(testData.year);
            cy.wait(500);
            homepage.clickMonth(testData.month);
            cy.wait(500);
            homepage.enterStreet(testData.street);
            cy.wait(500);
            homepage.enterZip(testData.zip);
            homepage.clickSearch();
            cy.wait(500);
            homepage.entercommunicationEmail(testData.communicationEmail);
            cy.wait(500);
            homepage.enterContact(testData.contactNumber);
            cy.wait(500);
            homepage.clickhealthArrow();
            cy.wait(500);
            homepage.clickHealthProfile(testData.healthProfile);
            homepage.enterLifeexpectancy(testData.lifeExpactancy);
            homepage.clickTabaccoNo();
            homepage.clickTaxJoin();
            homepage.clickMagiTier();
            cy.wait(500);
            homepage.clickMaggiTireOptions(testData.magiTier);
            homepage.clickConceirgeNo();
            homepage.nextHomeClick();
            cy.wait(500);
        });
        cy.visit(testData.preferencePage_url);
    });

    function setPreference(option) {
        if (option === 'yes') {
            preferencePage.clickyesRadioDrugCost();
            preferencePage.verifyGreatText();
        } else if (option === 'no') {
            preferencePage.clicknoRadioDrugCost();
            preferencePage.verifyAreUSureText();
        }
        preferencePage.clickNextPrefPage();
    }

    it('TC_PDP_SEARCH_PREF_YES_01: should test search preference with YES @critical', () => {
        setPreference('yes');
        preferencePage.verifyManagePrescriptionurl();
        cy.log("critical test completed");
    });

    it('TC_PDP_SEARCH_PREF_NO_02: should test search preference with NO', () => {
        setPreference('no');
        preferencePage.verifyPlanSelectionUrl();
    });

    it('TC_PDP_SEARCH_PREF_BACK_03: should test back navigation from Prescription page to Preference', () => {
        setPreference('yes');
        preferencePage.verifyManagePrescriptionurl();
        prescriptionPage.clickGobackPreference();
        preferencePage.verifyPreferencePageUrl();
    });

    it('TC_05_PDP_NEXT: should test navigation from Preference to Plan Selection', () => {
        setPreference('yes');
        preferencePage.verifyManagePrescriptionurl();
    });
});
