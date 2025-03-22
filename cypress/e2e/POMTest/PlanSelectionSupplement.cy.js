import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import LongTermPage from '../pages/LongTermPage.js';
import MedicareAdvantagepage from '../pages/MedicarePage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
describe("Automation of test cases for PlanSelection Page",()=>{
    
    beforeEach("Login to PlanSelectionPage",()=>{
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        const lPage = new LoginPage();
        const recPage = new LandingPage();
        const homepage = new HomePage();
        const prefPage = new PreferencePage();
        const prescriptionpage=new PrescriptionPage();
        //const ConfirmDrugPage=new ConfirmDrug();
        const pharmacypage=new PharmacyPage();
       // const planselectionpage=new PdpSuppMA();
        cy.fixture('LoginFixture').then((data) => {
            
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful
        })
           recPage.clickCreateRecommendation();
           cy.wait(100);
           homepage.enterEmail("rani@gmail.com");
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
           prefPage.clickyesRadioDrugCost();
         cy.wait(100);
         prefPage.clickNextPrefPage();
         cy.wait(100);
         prescriptionpage.enterDrugSearchBox("Gabapentin");
         cy.wait(100);
         prescriptionpage.selectDrug();
         cy.wait(100);
         prescriptionpage.clickAddToDrug();
        cy.wait(100);
        prescriptionpage.doneAddDrugClick();
        cy.wait(100);
        pharmacypage.clickFindFarmacy();
        cy.wait(100);
        pharmacypage.clickfarmacyOne();
        cy.wait(100);
        pharmacypage.clickfarmacyTwo();
        cy.wait(100);
        pharmacypage.clicknextpharmacy();

})
const planselectionpage=new planselectionPage;

it("Test1:To verify functionality of supplement button on plan-selection/plan-list/SUPPLEMENT page and to verify that user can select max 3 plans",()=>{
    planselectionpage.SetSupplementButtn()
    cy.wait(5000)
    //cy.viewport(1920, 1080);
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container', { timeout: 10000 })
  .should('be.visible')
  .eq(1) .click({ force: true });

    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container').eq(2).click({force:true})
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container').eq(3).click({force:true})
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container').eq(4).click({force:true})
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains("Maximum 3 plans allowed.Remove previous plan to add new plan");     //asretion ,user can select maximum 3 plans.
        
    })
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container').eq(1).click({force:true});   //validating the uncheck functionality of plan checkbox.

})
  
it("Test2:To verify that user can select only one supplement plan from previously selected 3 plans and able to see the plan details",()=>{
    planselectionpage.SetSupplementButtn()
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container', { timeout: 10000 })
    .should('be.visible')
    .eq(1) .click({ force: true });
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container').eq(2).click({force:true})
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container').eq(3).click({force:true})
    planselectionpage.DoneplanSelectionClick();
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container').eq(1).click({force:true});
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains("Maximum 1 MA with/without 1 PDP or 1 PDP with 1 supplement plan are allowed");     //asretion ,user can selectonly 1 plan out of selected 3  maximum plans.
        
    })
    
})
 
it("Test3:To verify the functionality of Medigap plan N ,filter button",()=>{
    planselectionpage.SetMedigapArrow()
   cy.get(".mat-option-text").contains("N").wait(2000).click({force:true});
   planselectionpage.SetSupplementButtn();
   cy.wait(5000)
   cy.get('.right-container > .mat-tooltip-trigger',{timeout:5000}).should('be.visible').click({force:true})  //filter button
   cy.get('.mat-select-placeholder').click()
  cy.get('div>.mat-select-panel-wrap')
  .find('div[role="listbox"]')
  .contains('CIGNA HLTH GRP (61727)')
  .scrollIntoView({ timeout: 10000 })
  .should('be.visible')
  .click({ force: true })
      
})

it("Test4:To verify the functionality of Medigap plan N ,reset button",()=>{
  planselectionpage.SetMedigapArrow()
  cy.get(".mat-option-text").contains("N").wait(2000).click({force:true});
  planselectionpage.SetSupplementButtn();
  cy.wait(5000)
  cy.get('.right-container > .mat-tooltip-trigger',{timeout:5000}).should('be.visible').click({force:true})  //filter button
  cy.get('.mat-select-placeholder').click()
 cy.get('div>.mat-select-panel-wrap')
 .find('div[role="listbox"]')
 .contains('CIGNA HLTH GRP (61727)')
 .scrollIntoView({ timeout: 10000 })
 .should('be.visible')
 .click({ force: true })

cy.get('.mat-action-row > .mat-focus-indicator').click()       //reset button validation

})

it("Test5:To verify the functionality of Medigap plan N details:PartA ",()=>{
    planselectionpage.SetMedigapArrow()
    cy.get(".mat-option-text").contains("N").wait(2000).click({force:true});
    planselectionpage.SetSupplementButtn();
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container', { timeout: 10000 })
    .should('be.visible')
    .eq(1) .click({ force: true });
   cy.get(".mat-button-wrapper").contains('Plan Details').click();
   //cy.get("#mat-expansion-panel-header-1 span[class='mat-expansion-indicator']").click()         //partA expand validation

   cy.get('.mat-expansion-panel-body:nth-child(1)').contains("Hospitalization");  //Hospitalization validation under partA
   cy.wait(2000)
   cy.contains('Skilled Nursing Facility Care').should('exist');   //Skilled Nursing Facility Care validation

   cy.wait(2000)
   cy.contains('Blood').should('exist');  //Blood Validation
   cy.wait(2000)
   cy.contains("Hospice Care").should('exist');  //Hospics Care validation
      //Part A collapse validation
   cy.get('#mat-expansion-panel-header-1 > .mat-expansion-indicator').click();
})
 
it("Test6:To verify the functionality of Medigap plan N details:PartA:Hospitalization",()=>{
    planselectionpage.SetMedigapArrow()
    cy.get(".mat-option-text").contains("N").wait(2000).click({force:true});
    planselectionpage.SetSupplementButtn();
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container', { timeout: 10000 })
    .should('be.visible')
    .eq(1) .click({ force: true });
   cy.get(".mat-button-wrapper").contains('Plan Details').click();
    cy.get('.mat-expansion-panel-body:nth-child(1)').contains("Hospitalization").click({force:true})
    cy.get(".mat-expansion-panel-body table.mat-table.cdk-table.detail-table tbody", { timeout: 10000 })
    
  .should('be.visible') // Check table is visible
  .find('tr') // Find all rows in the table
  .should('have.length.greaterThan', 0) // Ensure at least one row exists
  .each(($row) => {
    cy.wrap($row).find('td').each(($cell) => {
      cy.wrap($cell).invoke('text').should('not.be.empty'); // Ensure each cell has text
    });
  });
})


it("Test7:To verify Part B expands and collapse",()=>{
planselectionpage.SetMedigapArrow()
    cy.get(".mat-option-text").contains("N").wait(2000).click({force:true});
    planselectionpage.SetSupplementButtn();
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container', { timeout: 10000 })
    .should('be.visible')
    .eq(1) .click({ force: true });
   cy.get(".mat-button-wrapper").contains('Plan Details').click();
cy.get(".mat-content .mat-expansion-panel-header-title").contains('Part B').click(); //PartB expands
cy.wait(2000)
cy.get('#mat-expansion-panel-header-2 >span.mat-expansion-indicator').should('be.visible').invoke('click');
}) //Part B collapse

it("Test8:To verify Part A & B expands and collapse",()=>{
    planselectionpage.SetMedigapArrow()
    cy.get(".mat-option-text").contains("N").wait(2000).click({force:true});
    planselectionpage.SetSupplementButtn();
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container', { timeout: 10000 })
    .should('be.visible')
    .eq(1) .click({ force: true });
   cy.get(".mat-button-wrapper").contains('Plan Details').click();
cy.get(".mat-content .mat-expansion-panel-header-title").contains('Parts A & B').click(); //Part A &B expands
cy.wait(2000)
cy.get('#mat-expansion-panel-header-2 >span.mat-expansion-indicator').should('be.visible').invoke('click');;
; //Part A & B collapse
cy.wait(2000)
})

it("Test9:To verify Other Benefits expands and collapse",()=>{
    planselectionpage.SetMedigapArrow()
    cy.get(".mat-option-text").contains("N").wait(2000).click({force:true});
    planselectionpage.SetSupplementButtn();
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container', { timeout: 10000 })
    .should('be.visible')
    .eq(1) .click({ force: true });
   cy.get(".mat-button-wrapper").contains('Plan Details').click();
cy.get(".mat-content .mat-expansion-panel-header-title").contains('Other Benefits').click(); //Other Benefits expands
cy.wait(2000)
cy.get("#mat-expansion-panel-header-3 > span.mat-expansion-indicator").should('be.visible').click({force:true}); //Other Benefits collapse
cy.wait(2000)
})
 it("Test10:To verify functionality of Back button on suppliment plan details page",()=>{
    planselectionpage.SetMedigapArrow()
    cy.get(".mat-option-text").contains("N").wait(2000).click({force:true});
    planselectionpage.SetSupplementButtn();
    cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container', { timeout: 10000 })
    .should('be.visible')
    .eq(1) .click({ force: true });
   cy.get(".mat-button-wrapper").contains('Plan Details').click();
   cy.get('.button-wrapper > .mat-focus-indicator').click() //Back button validation
   cy.wait(2000);
   cy.url().should('eq','http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
 })

 it("Test 11: To verify the functionality of Cancel button on suppliment planlist page",()=>{
    planselectionpage.SetMedigapArrow()
    cy.get(".mat-option-text").contains("N").wait(2000).click({force:true});
    planselectionpage.SetSupplementButtn();
    cy.get('.right-container > .mat-focus-indicator > .mat-button-wrapper').click();  //Cancel button
    cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/plan-selection");

 })

 it("Test12: To verify functionality of Profile Button",()=>{
    planselectionpage.SetProfileButtn()
    cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/home");
 })

 it("Test13: To verify functionality of Provider Button",()=>{
    planselectionpage.SetProviderButtn()
    cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/manage-providers");
 })

 it("Test14: To verify functionality of Prescription Button",()=>{
    planselectionpage.SetPrescriptionButtn()
    cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/manage-prescriptions");
 })
 
 it("Test15: To verify functionality of Pharmacy Button",()=>{
    planselectionpage.SetPharmacyButtn()
    cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/manage-pharmacies");

})



})
   
   




