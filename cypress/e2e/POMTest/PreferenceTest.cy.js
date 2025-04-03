import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import PlanSelectionPage from '../pages/PlanselectionPage.js';

describe('Preference Test Suite', () => {
    const loginPage = new LoginPage();
    const landingPage = new LandingPage();
    const homePage = new HomePage();
    const preferencePage = new PreferencePage();
    const prescriptionPage = new PrescriptionPage();
    const planSelectionPage = new PlanSelectionPage();

    beforeEach(() => {
        cy.fixture('LoginFixture').then((data) => {
            cy.visit(data.baseUrl); // Using baseUrl from fixture
            
            loginPage.setUserName(data.username);
            loginPage.setPassword(data.password);
            loginPage.clickLoginBtn();
            

            landingPage.clickCreateRecommendation();
            homePage.enterEmail(data.email);  // Using email from fixture
            homePage.clickhealthArrow();
            homePage.clickGoodHealth();
            homePage.enterName(data.name);  // Using name from fixture
            homePage.enterLifeexpectancy(data.lifeexpectancy);  // Using life expectancy from fixture
            homePage.datePickerclick();
            homePage.year1957click();
            homePage.month1957click();
            homePage.enterZip(data.zip);  // Using ZIP code from fixture
            homePage.clickSearch();
            homePage.nextHomeClick();
        });
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

    it('test1,should test search preference with YES', () => {
        setPreference('yes');
        preferencePage.verifyManagePrescriptionurl();
    });

    it('test2,should test search preference with NO', () => {
        setPreference('no');
        preferencePage.verifyPlanSelectionUrl();
    });

    it('test3,should test search preference with back navigation', () => {
        setPreference('yes');
        preferencePage.verifyManagePrescriptionurl();
        
        prescriptionPage.clickGobackPreference();
        preferencePage.verifyPreferencePageUrl();
    });

    it('test4,should test navigation from preference to plan selection', () => {
        setPreference('yes');
        preferencePage.verifyManagePrescriptionurl();
    });
});
