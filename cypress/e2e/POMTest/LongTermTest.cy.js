import LoginPage from "../pages/LoginPage"; // Import the LoginPage class
import LandingPage from "../pages/LandingPage"; // Import the LandingPage class 
import HomePage from "../pages/HomePage"; // Import the HomePage class
import PreferencePage from "../pages/PreferencePage";   // Import the PreferencePage class
import PrescriptionPage from "../pages/PrescriptionPage"; // Import the PrescriptionPage class
import PharmacyPage from "../pages/PharmacyPage"; // Import the PharmacyPage class
import planselectionPage from "../pages/PlanselectionPage"; // Import the PlanselectionPage class
import LongTermPage from "../pages/LongTermPage"; // Import the LongTermPage class

describe('Longterm Test cases', ()=> {
   
    const loginpage = new LoginPage();
    const landingpage = new LandingPage();
    const homepage = new HomePage();
    const preferencepage = new PreferencePage();
    const drugPage = new PrescriptionPage();
    const pharmacypage = new PharmacyPage();
    const planselectionpage = new planselectionPage();
    const longtermpage = new LongTermPage();


  beforeEach (() => { 
  cy.session('Longterm', () => { // Start a new session for each test
  cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage'); // Visit the URL before each test

 cy.fixture('LoginFixture').then((data) => {
           
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickLoginBtn();
        });

        
        landingpage.clickCreateRecommendation();
        homepage.enterEmail("prisci2@gmail.com");
        homepage.clickHealthProfile();
        cy.wait(100)
        homepage.clickGoodHealth();
        cy.wait(100)
        homepage.enterName('prisci2');
        homepage.enterLifeexpectancy('85');
        homepage.clickDateOfBirth();
        cy.wait(100)
        homepage.clickCalenderEle();
        cy.wait(100)
        homepage.clickYear();
        cy.wait(100)
        homepage.clickMonth();
        cy.wait(100)
        homepage.clickGender();
        homepage.clickFemale();
        homepage.enterZip('27529');
        cy.wait(100);
        homepage.clickSearch();
        cy.wait(100);
        homepage.clickTabaccoNo();
        homepage.clickTaxJoin();
        homepage.clickMagiTier();
        homepage.clickMagiTier2();
        homepage.entercommunicationEmail('broker@gmail.com');
        homepage.enterContact('1234567890');
        homepage.clickNext();
        preferencepage.clickyesRadioDrugCost();
        preferencepage.clickNextPrefPage();
        cy.wait(100);
        drugPage.enterDrugSearchBox("Gabapentin");  
        cy.wait(5000);
        drugPage.selectDrug();  
        // drugPage.addGeneric();
        drugPage.clickAddToDrug(); 
        drugPage.doneAddDrugClick();
        pharmacypage.clickFindFarmacy();
        cy.wait(100);
        pharmacypage.clickfarmacyOne();
        cy.wait(100);
        pharmacypage.clickfarmacyTwo();
        cy.wait(100);
        pharmacypage.clicknextpharmacy();
        planselectionpage.medicareAdvantageClick();
        cy.wait(100);
        planselectionpage.planWellCaresimpleClick();
        cy.wait(100);
        planselectionpage.donePlanSelectionClick();
        cy.wait(100);
        planselectionpage.tickClick();
        cy.wait(100);
        
        
  });   
  cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/plan-selection");
    });


 it('TC -1 Verify the navigation of longterm button', () => {

    longtermpage.clickLongtermBtn();
    cy.wait(100);
});

 it('TC-2 Validate user interface elements', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.validatepagelements();
    cy.wait(100);
});
 
it('TC-3 Validate userinfo details of age retirement age year health profile and life expectancy', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.verifyUserInfoDetails();
    cy.wait(100);  
});

it('LTC-5 Validate presentvalue and future values of longterm plan', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.verifyPresentFutureValueDetails();
    cy.wait(100);  
});

it('LTC-6 Verify user is able to go back to control page to view selected MA plan', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.backLongTermToPlanSelectionClick();
    cy.wait(100);
});

it('TC-6 Verify clicking generate pdf button generates pdf doc', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.pdfclick();
    cy.wait(100);
});

it('LTC-10 Verify clicking generate pdf button generates pdf icon in view landing page', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.pdfclick();
    planselectionpage.aivanteImagClick();
    cy.wait(100);
});

it('TC-8 Verify clicking on Longterm expand arrow shows additional  4 options', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    cy.wait(100);
});

it('TC-9 Verify clicking on the expanded Long Term Care Details Header panel collapses the panel', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    //longtermpage.clickdisableddlEle();
});

it('TC-10 Verify the default values for the dropdowns are set correctly showing comfort care and 1 year for all options', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
});    

it('TC-11 Verify clicking on Quality of care shows options of comfort luxury and premium luxury', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickQualityofcareArrow();
    cy.wait(100);   
});

it('LTC-17 Verify only one option can be select from the Quality of Care dropdown', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickQualityofcareArrow();
    longtermpage.clickLuxury();
    cy.wait(100);
    
});
it('TC-13 Verify Verify that the future value and present value increases or decreased based on the "Qualityof care"', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickQualityofcareArrow();
    longtermpage.clickLuxury();
    longtermpage.submitLongTermClick();
    cy.wait(100);
});

it('TC-14 Verify that the Adult Day Care (Years) dropdown displays the numbers from 1 to 10 ', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickAdultdaycareArrow();
    cy.wait(100);
});

it('TC-15 Verify that only one option can be selected from the Adult Day Care (Years) dropdown.', () => {
        longtermpage.clickLongtermBtn();
        longtermpage.longTermArrowClick();
        longtermpage.clickAdultdaycareArrow();
        longtermpage.clickAdultcare3years();
        cy.wait(5000);
    
});

it('TC-16 Verify that Future Value and Present Value is changing accordingly Adult Day Care (Years) options', () => {
            longtermpage.clickLongtermBtn();
            longtermpage.longTermArrowClick();
            longtermpage.clickAdultdaycareArrow();
            longtermpage.clickAdultcare4years();
            longtermpage.submitLongTermClick();
            cy.wait(5000);
 });

 it('TC-17 Verify that the Years of In-Home Care dropdown displays the numbers from 1 to 10 ', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickInhomecareArrow();
    cy.wait(100);
});

it('TC-18 Verify that only one option can be selected from the Years of In-Home Care dropdown ', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickInhomecareArrow();
    longtermpage.clickInhomecare4years();
    cy.wait(100);
});

it('TC-19 Verify that Future Value and Present Value is changing accordingly Years of In-Home Care options ', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickInhomecareArrow();
    longtermpage.clickInhomecare2years();
    longtermpage.submitLongTermClick();
    cy.wait(100);
});

it('TC-20 Verify that the Years of Nursing Home Care dropdown displays the numbers from 1 to 10 ', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickNursinghomecareArrow();
    cy.wait(100);
});

it('TC-21 Verify that only one option can be selected from the Years of Nursing Home Care dropdown ', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickNursinghomecareArrow();
    longtermpage.clickNursinghomecare2years();
    cy.wait(100);
});

it('TC-22 Verify that Future Value and Present Value is changing accordingly Years of Nursing Home Care options ', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickNursinghomecareArrow();
    longtermpage.clickNursinghomecare2years();
    longtermpage.submitLongTermClick();
    cy.wait(100);
});

it('TC-23 Verify when the Submit button is clicked after chosing valid inputs in the Quality of care, Adult day care, In Home care and Nursing Home care ', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickQualityofcareArrow();
    longtermpage.clickLuxury();
    longtermpage.clickAdultdaycareArrow();
    longtermpage.clickAdultcare2years();
    longtermpage.clickInhomecareArrow();
    longtermpage.clickInhomecare1years();
    longtermpage.clickNursinghomecareArrow();
    longtermpage.clickNursinghomecare1years();  
    longtermpage.submitLongTermClick();
    cy.wait(100);
});
it('TC-24 Verify that clicking the Back button on the Long Term Care page navigates the user back to the Control page', () => {
    longtermpage.clickLongtermBtn();
    longtermpage.backLongTermToPlanSelectionClick();
    cy.wait(100);
});

 it.skip('TC-4 Verify userinfo details when editing Profile', () => {

    const landingpage = new LandingPage();
    cy.wait(6000);
    landingpage.clickRecommendationRadioBut();
    landingpage.enterByEmail('prisci2');//Filter by recommendation email or name
    landingpage.clickExpandPlan();
    landingpage.clickEditRecommandtion();
    landingpage.clickEditHealthProfile(); 
    landingpage.clickEditHealthProfile4();
    landingpage.enterEditLifeExpectancy('77'); 
    landingpage.clickEditNextBut();
    const preferencepage = new PreferencePage();
    preferencepage.clicknoRadioDrugCost();
    preferencepage.clickNextPrefPage();
     planselectionpage.medicareAdvantageClick();
     cy.wait(100);
    planselectionpage.planWellCaresimpleClick();
    cy.wait(100);
    planselectionpage.donePlanSelectionClick();
    cy.wait(100);
    planselectionpage.tickClick();
    cy.wait(100);
    const longtermpage = new LongTermPage();
    longtermpage.clickLongtermBtn();
});


/*
it('TC-28 Verify that the panel calculates the expenses for Adult Day Care,Home care and Nursing Home care correctly for one year',() => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickQualityofcareArrow();
    cy.wait(10000);
    longtermpage.clickComfort();
    cy.wait(6000);
    longtermpage.clickAdultdaycareArrow();
    cy.wait(6000);
    longtermpage.clickAdultcare1years()
    cy.wait(6000);
    longtermpage.clickInhomecareArrow();
    cy.wait(6000);
    longtermpage.clickInhomecare1years();
    cy.wait(6000);
    longtermpage.clickNursinghomecareArrow();
    cy.wait(6000);
    longtermpage.clickNursinghomecare1years();
    longtermpage.submitLongTermClick();
    cy.wait(100);
});

it('TC-29 Verify that the panel calculates the expenses for Adult Day Care,In Home care and Nursing Home care correctly for two or more years chosen',() => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    longtermpage.clickQualityofcareArrow();
    cy.wait(2000);
    longtermpage.clickComfort();
    cy.wait(5000);
    longtermpage.clickAdultdaycareArrow();
    cy.wait(5000);
    longtermpage.clickAdultcare2years();
    cy.wait(5000);
    longtermpage.clickInhomecareArrow();
    cy.wait(5000);
    longtermpage.clickInhomecare2years();
    cy.wait(5000);
    longtermpage.clickNursinghomecareArrow();
    cy.wait(5000);
    longtermpage.clickNursinghomecare2years();
    cy.wait(2500);
    longtermpage.submitLongTermClick();
    cy.wait(1000);
});
*/
it('TC-30 Verify for every option chosen in Quality of Care dropdown the Price increase or decrease in the Long term care Panel for Adult day care,In home care and Nursing Home',() => {
    longtermpage.clickLongtermBtn();
    longtermpage.longTermArrowClick();
    cy.wait(1000)
    longtermpage.clickQualityofcareArrow();
    cy.wait(2000);
    longtermpage.clickComfort();
    cy.wait(2000);
    longtermpage.submitLongTermClick();
    cy.wait(2000);
    longtermpage.clickQualityofcareArrow();
    cy.wait(2000);
    longtermpage.clickLuxury();
    cy.wait(2000);
    longtermpage.submitLongTermClick();
    cy.wait(2000);
    longtermpage.clickQualityofcareArrow();
    cy.wait(2000);
    longtermpage.clickPremiumLuxury();
    cy.wait(2000);
    longtermpage.submitLongTermClick();
    cy.wait(2000);

});


it('TC-31 Verify that the Care Begin Years are reserved correctly based on the user present age and life expectancy and the number of years reserved for each care',() => {
    longtermpage.clickLongtermBtn();
    longtermpage.verifyAdultDayCareYear('2042')
    cy.wait(1000)
    longtermpage.verifyInHomeCareYear('2043')
    cy.wait(1000)
    longtermpage.verifyNursingCareYear('2044')
});

it('TC-32 Verify that the Bar Chart displays the correct years on the X-axis based on the Care Begin Years and Future costs on Y-axis',() => {
    longtermpage.clickLongtermBtn();
    cy.wait(1000)
    longtermpage.verifyaAdultdayInchart()
    cy.wait(3000)
    longtermpage.verifyInHomecareInchart()
    cy.wait(3000)
    longtermpage.verifyNurisngcareInchart()
    
});



});