
//PDP Consistency test cases by Rani Yelgalwar
import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js'; 
import PrescriptionPage from '../pages/PrescriptionPage.js';
import PlanselectionPage from '../pages/PlanselectionPage.js';
import LongTermPage from '../pages/LongTermPage.js';
import MedicarePage from '../pages/MedicarePage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PlanSelectionMA from "../pages/PlanSelectionPageMA.js";
import Consistency from '../pages/ConsistencyPage.js';

describe("Consistency Test for PDP application",()=>{
    let testData = null;
const planselectionpage= new PlanselectionPage();
const medicarepage = new MedicarePage();
const consistency=new Consistency();
const longtermpage= new LongTermPage();
const landingpage = new LandingPage();
before(() => {
    //cy.fixture('LoginFixture').then((data) => {
      //  testData=data;
      cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0];
    });
})


function createPlan(testData){
    cy.visit(testData.baseUrl);
       
        const lPage = new LoginPage();
        lPage.setUserName(testData.username);
        lPage.setPassword(testData.password);
        lPage.clickLoginBtn();
        lPage.verifyLogin();
        
       
        const recPage = new LandingPage();
        recPage.clickCreateRecommendation();

        const homepage = new HomePage();
        
        homepage.enterEmail(testData.email); // Using email from fixture
        cy.wait(1000)
        homepage.clickhealthArrow();
        cy.wait(1000)
        homepage.clickHealthProfile(testData.healthProfile);
        cy.wait(1000)
        homepage.enterName(testData.name); // Using name from fixture
        cy.wait(1000)
        homepage.enterLifeexpectancy(testData.lifeExpectancy);  // Using life expectancy from fixture
        cy.wait(3000)
        homepage.selectTaxFilingStatus(testData.taxFilingStatus);
        cy.wait(3000);
        homepage.clickDatePicker();
        cy.wait(1000)
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
        homepage.enterContact(testData.contactNumber);
        homepage.enterZip(testData.zip);   // Using ZIP code from fixture
        cy.wait(1000)
        homepage.clickSearch();
        cy.wait(1000)
        homepage.nextHomeClick();
        cy.wait(2000)
const prefPage=new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();
        cy.wait(1000)
        prefPage.clickNextPrefPage();
        cy.wait(1000)
        const drugpage=new PrescriptionPage();
        
        drugpage.enterDrugSearchBox(testData.drugName1);  //using drugname from fixture
        cy.wait(1000)
        drugpage.selectDrug();
        cy.wait(1000)
        drugpage.clickAddToDrug();
        cy.wait(100);
        drugpage.doneAddDrugClick();
        cy.wait(1000);

        const pharmacypage=new PharmacyPage();
        
        pharmacypage.clickFindFarmacy();
        cy.wait(1000);
        pharmacypage.clickfarmacyOne();
        cy.wait(1000);
        pharmacypage.clickfarmacyTwo();
        cy.wait(1000);
        pharmacypage.clicknextpharmacy();
        cy.wait(1000);

}

it("TC_PDP_CONS_PDP/G_09:Verify that view page shows only medicare health expences when LongTerm expences are not added",()=>{
    cy.intercept('POST', '**/createPartDPlan').as('createProfile');
    cy.intercept('POST','**/getPartDPlanList').as('getPlan');
    createPlan(testData)
    planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  cy.wait(1000)
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();

  cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  consistency.setPlanSelectCheckboxFirst();
  cy.wait(1000)
  consistency.setPlanSelectCheckboxSecond();
  cy.wait(1000) 
  medicarepage.clickmedicare();
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');
  cy.wait(3000);

  cy.wait('@createProfile').then((interception) => {
    expect(interception.response.statusCode).to.eq(201);
  
    const createdOnISO = interception.response.body.createdOn;
  
    const createdOnFormatted = new Date(createdOnISO).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short', // "Feb"
      day: 'numeric', // "28"
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // 12-hour format with AM/PM
      timeZone: 'UTC'
    });
  
    cy.log('Formatted Date:', createdOnFormatted); // Debugging log
    cy.wait(10000)
    cy.wait('@getPlan');
    cy.xpath(`//div[contains(@class, 'inner-table')]//table[contains(@class, 'mat-table')]//tbody//tr[contains(., "${createdOnFormatted}")]`)
      .invoke('index') 
      .then(rowIndex => {
        cy.log(`Row number: ${rowIndex + 1}`);
        cy.wait(2000)
        cy.xpath(`//div[contains(@class, 'inner-table')]//table[contains(@class, 'mat-table')]//tbody/tr`,{timeout:10000})
           .eq(rowIndex)
          .find('td.cdk-column-actions button mat-icon[role="img"]')
          .contains('remove_red_eye')
          .click({ force: true });
          cy.wait(3000)
      
      });
    })
    
  cy.wait(10000);
  consistency.setLongtermCareExpenseViewPage().then((LongtermCareExpenseViewPage)=>{
    expect(LongtermCareExpenseViewPage).to.eql('NA');
  })
  consistency.setLongtermCarePresentValueViewPage().then((LongtermCarePresentValueViewPage)=>{
    expect(LongtermCarePresentValueViewPage).to.eql('NA');
  })

})


it("TC_PDP_CONS_PDP/N_09:Verify that view page shows only medicare health expences when LongTerm expences are not added",()=>{
    cy.intercept('POST', '**/createPartDPlan').as('createProfile');
    cy.intercept('POsT','**/getPartDPlanList').as('getPlan');
    createPlan(testData);
    
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
  planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');

  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanN1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)

  cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  consistency.setPlanSelectCheckboxFirst();
  cy.wait(1000)
  consistency.setPlanSelectCheckboxSecond();
  cy.wait(1000)
  medicarepage.clickmedicare();
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');
  cy.wait(3000);

  cy.wait('@createProfile').then((interception) => {
    expect(interception.response.statusCode).to.eq(201);
  
    const createdOnISO = interception.response.body.createdOn;
  
    const createdOnFormatted = new Date(createdOnISO).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short', // "Feb"
      day: 'numeric', // "28"
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // 12-hour format with AM/PM
      timeZone: 'UTC'
    });
  
    cy.log('Formatted Date:', createdOnFormatted); // Debugging log
    cy.wait('@getPlan');
    cy.wait(10000)
    
    cy.xpath(`//div[contains(@class, 'inner-table')]//table[contains(@class, 'mat-table')]//tbody//tr[contains(., "${createdOnFormatted}")]`)
      .invoke('index') 
      .then(rowIndex => {
        cy.log(`Row number: ${rowIndex + 1}`);
        cy.wait(2000)
        cy.xpath(`//div[contains(@class, 'inner-table')]//table[contains(@class, 'mat-table')]//tbody/tr`,{timeout:10000})
           .eq(rowIndex)
          .find('td.cdk-column-actions button mat-icon[role="img"]')
          .contains('remove_red_eye')
          .click({ force: true });
          cy.wait(3000)
     })
    
    })
    
  cy.wait(10000);
  consistency.setLongtermCareExpenseViewPage().then((LongtermCareExpenseViewPage)=>{
    expect(LongtermCareExpenseViewPage).to.eql('NA');
  })
  consistency.setLongtermCarePresentValueViewPage().then((LongtermCarePresentValueViewPage)=>{
    expect(LongtermCarePresentValueViewPage).to.eql('NA');
  })


})


it("TC_PDP_CONS_PDP/HDG_09:Verify that view page shows only medicare health expences when LongTerm expences are not added",()=>{
    cy.intercept('POST', '**/createPartDPlan').as('createProfile');
    cy.intercept('POST','**/getPartDPlanList').as('getPlan');
    createPlan(testData);
    cy.wait(1000)
    planselectionpage.setMedigapArrow()
    cy.wait(1000)
     planselectionpage.setSelectPlanHDG()
     cy.wait(1000)
  planselectionpage.setSupplementButtn();
  
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');

  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanHDG);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  consistency.setPlanSelectCheckboxFirst();
  cy.wait(1000)
  consistency.setPlanSelectCheckboxSecond();
  cy.wait(1000)
  medicarepage.clickmedicare();
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');
  cy.wait(3000);

  cy.wait('@createProfile').then((interception) => {
    expect(interception.response.statusCode).to.eq(201);
  
    const createdOnISO = interception.response.body.createdOn;
  
    const createdOnFormatted = new Date(createdOnISO).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short', // "Feb"
      day: 'numeric', // "28"
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // 12-hour format with AM/PM
      timeZone: 'UTC'
    });
  
    cy.log('Formatted Date:', createdOnFormatted); // Debugging log
    cy.wait('@getPlan');
    cy.wait(10000);
    cy.xpath(`//div[contains(@class, 'inner-table')]//table[contains(@class, 'mat-table')]//tbody//tr[contains(., "${createdOnFormatted}")]`)
      .invoke('index') 
      .then(rowIndex => {
        cy.log(`Row number: ${rowIndex + 1}`);
        cy.wait(2000)
        cy.xpath(`//div[contains(@class, 'inner-table')]//table[contains(@class, 'mat-table')]//tbody/tr`,{timeout:10000})
          .eq(rowIndex)
          .find('td.cdk-column-actions button mat-icon[role="img"]')
          .contains('remove_red_eye')
          .click({ force: true });
          cy.wait(3000)

      })
    
    })
    
  cy.wait(10000);
  consistency.setLongtermCareExpenseViewPage().then((LongtermCareExpenseViewPage)=>{
    expect(LongtermCareExpenseViewPage).to.eql('NA');
  })
  consistency.setLongtermCarePresentValueViewPage().then((LongtermCarePresentValueViewPage)=>{
    expect(LongtermCarePresentValueViewPage).to.eql('NA');
  })

})

it("TC_PDP_CONS_MA_09:Verify that view page shows only medicare health expences when LongTerm expences are not added",()=>{
    cy.intercept('POST', '**/createPartDPlan').as('createProfile');
    cy.intercept('POST','**/getPartDPlanList').as('getPlan');
    createPlan(testData); 
    cy.wait(1000) 
  planselectionpage.setMedicareAdvantageButtn()
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/MEDICARE');

  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.MAplan);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(2000);
  consistency.setPlanSelectCheckboxMA();
  cy.wait(1000)
  medicarepage.clickmedicare();
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');
  cy.wait(3000);

  cy.wait('@createProfile').then((interception) => {
    expect(interception.response.statusCode).to.eq(201);
  
    const createdOnISO = interception.response.body.createdOn;
  
    const createdOnFormatted = new Date(createdOnISO).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short', // "Feb"
      day: 'numeric', // "28"
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // 12-hour format with AM/PM
      timeZone: 'UTC'
    });
  
    cy.log('Formatted Date:', createdOnFormatted); // Debugging log
    cy.wait('@getPlan');
    cy.wait(10000);
    cy.xpath(`//div[contains(@class, 'inner-table')]//table[contains(@class, 'mat-table')]//tbody//tr[contains(., "${createdOnFormatted}")]`)
      .invoke('index') 
      .then(rowIndex => {
        cy.log(`Row number: ${rowIndex + 1}`);
        cy.wait(2000)
        cy.xpath(`//div[contains(@class, 'inner-table')]//table[contains(@class, 'mat-table')]//tbody/tr`,{timeout:10000})
           .eq(rowIndex)
          .find('td.cdk-column-actions button mat-icon[role="img"]')
          .contains('remove_red_eye')
          .click({ force: true });
          cy.wait(3000)
    })
  })
    
  cy.wait(10000);
  consistency.setLongtermCareExpenseViewPage().then((LongtermCareExpenseViewPage)=>{
    expect(LongtermCareExpenseViewPage).to.eql('NA');
  })
  consistency.setLongtermCarePresentValueViewPage().then((LongtermCarePresentValueViewPage)=>{
    expect(LongtermCarePresentValueViewPage).to.eql('NA');
  })

})


})
