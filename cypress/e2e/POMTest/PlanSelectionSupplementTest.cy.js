import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js'; 
import PrescriptionPage from '../pages/PrescriptionPage.js';
import PlanselectionPage from '../pages/PlanselectionPage.js';
import LongTermPage from '../pages/LongTermPage.js';
import MedicareAdvantagepage from '../pages/MedicarePage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
describe("Automation of test cases for PlanSelection Suppliment Page",()=>{
    let testData
    const planselectionpage= new PlanselectionPage();
    before(()=>{
   // cy.fixture('LoginFixture').then((data) => {
     //   testData = data;
     cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0];
    })
})
        
        const lPage = new LoginPage();
        const recPage = new LandingPage();
        const homepage = new HomePage();
        const prefPage = new PreferencePage();
        const prescriptionpage=new PrescriptionPage();
        const pharmacypage=new PharmacyPage();
     beforeEach("Login to PlanSelectionPage",()=>{
        cy.session("Plan Select session",()=>{
        cy.visit(testData.baseUrl );
        cy.wait(500);
         
 
            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful
            recPage.clickCreateRecommendation();
           cy.wait(500);
           homepage.enterEmail(testData.email);
           cy.wait(500);
           homepage.clickhealthArrow();
           cy.wait(500);
           homepage.clickHealthProfile(testData.healthProfile);
           cy.wait(500);
           homepage.enterName(testData.name);
           cy.wait(500);
           homepage.enterLifeexpectancy(testData.lifeExpectancy);
           cy.wait(500);
           homepage.clickDatePicker();
           cy.wait(500);
           homepage.clickYear(testData.yearOfBirth);
           cy.wait(500);
           homepage.clickMonth(testData.monthOfBirth);
           cy.wait(500);
           homepage.enterZip(testData.zip)
           cy.wait(500);
           homepage.clickSearch();
           cy.wait(500);
           homepage.nextHomeClick();
           cy.wait(500);
           prefPage.clickyesRadioDrugCost();
         cy.wait(500);
         prefPage.clickNextPrefPage();
         cy.wait(500);
         prescriptionpage.enterDrugSearchBox(testData.drugName1);
         cy.wait(500);
         prescriptionpage.selectDrug();
         cy.wait(500);
         prescriptionpage.clickAddToDrug();
        cy.wait(500);
        prescriptionpage.doneAddDrugClick();
        cy.wait(500);
        pharmacypage.clickFindFarmacy();
        cy.wait(500);
        pharmacypage.clickfarmacyOne();
        cy.wait(500);
        pharmacypage.clickfarmacyTwo();
        cy.wait(500);
        pharmacypage.clicknextpharmacy();
    })
//})
    cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/plan-selection")
})

it("TC_PDP_SUPL_PLAN_42:This is to verify the 'Suppliment Button' functionality on the plan-selection page .",()=>{
    planselectionpage.setSupplementButtn()
    cy.wait(10000)
    cy.url().should('eq','http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');  
})


it("TC_PDP_SUPL_PLAN_48:To verify the 'Select Supplement Plans' functionality on the plan-selection/plan-list/SUPPLIMENT page within the PDP application.",()=>{
    planselectionpage.setSupplementButtn()
    cy.wait(10000)
   // planselectionpage.setPlanSelectionCheckBox(1);
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1)
   // planselectionpage.setPlanSelectionCheckBox(2);
   // planselectionpage.setPlanSelectionCheckBox(3);
   // planselectionpage.setPlanSelectionCheckBox(4);
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG2)
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG3)
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG4)
    
    planselectionpage.max3PlanVerifyMsg();
    //planselectionpage.setPlanSelectionCheckBox(1); 
    planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1) 

})
it("TC_PDP_SUPL_PLAN_49:This is to verify the 'Deselect Supplement Plans' functionality on the plan-selection/plan-list/SUPPLIMENT page within the PDP application.",()=>{
    planselectionpage.setSupplementButtn()
    cy.wait(10000)
    //planselectionpage.setPlanSelectionCheckBox(1);
   // planselectionpage.setPlanSelectionCheckBox(2);
   // planselectionpage.setPlanSelectionCheckBox(3); 
   // planselectionpage.setPlanSelectionCheckBox(4);
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1)
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG2)
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG3)
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG4)
    planselectionpage.max3PlanVerifyMsg();
    //planselectionpage.setPlanSelectionCheckBox(1); 
    planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1)
})
  
it("TC_PDP_SUPL_PLAN_50:To verify that user can select only one supplement plan from previously selected 3 plans and able to see the plan details",()=>{
    planselectionpage.setSupplementButtn()
    cy.wait(10000)
   // planselectionpage.setPlanSelectionCheckBox(1);
    //planselectionpage.setPlanSelectionCheckBox(2);
   // planselectionpage.setPlanSelectionCheckBox(3);
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1)
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG2)
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG3)
    planselectionpage.donePlanSelectionClick();
    //planselectionpage.setPlanSelectionCheckBox(1);
    planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1)
    planselectionpage.verifyMsg(); 
    
})
it("TC_PDP_SUPL_PLAN_53:To verify the functionality of Medigap plan N",()=>{
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
   planselectionpage.setSupplementButtn();
   cy.wait(10000)
    cy.url().should('eq','http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT'); 
})
 
it("TC_PDP_SUPL_PLAN_56:To verify the functionality of filter icon",()=>{
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
   planselectionpage.setSupplementButtn();
   cy.wait(10000)
   planselectionpage.setFilterButton() 
   planselectionpage.filterByInsuranceCarrier(testData.supplimentInsuranceCarrier)
      
})

it("TC_PDP_SUPL_PLAN_57:To verify the functionality of reset button",()=>{
  planselectionpage.setMedigapArrow()
  planselectionpage.setSelectPlanN()
  planselectionpage.setSupplementButtn();
  cy.wait(10000)
  planselectionpage.setFilterButton() 
   planselectionpage.filterByInsuranceCarrier(testData.supplimentInsuranceCarrier)
   cy.wait(2000)
   planselectionpage.setResetButton(); 

})

it("TC_PDP_SUPL_PLAN_62:To verify that clicking on the part A Header panel expands and display additional options. ",()=>{
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
    planselectionpage.setSupplementButtn();
    cy.wait(10000)
    //planselectionpage.setPlanSelectionCheckBox(1);
    planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanN1)
    planselectionpage.setPlanDetailsButton()         

    planselectionpage.verifyHospitalization()  //Hospitalization validation under partA
   
   cy.contains('Skilled Nursing Facility Care').should('exist');   //Skilled Nursing Facility Care validation

   cy.wait(2000)
   cy.contains('Blood').should('exist');  //Blood Validation
   cy.wait(2000)
   cy.contains("Hospice Care").should('exist');  //Hospics Care validation
   planselectionpage.setPartAExpandsCollapsIndicator()
})
 
it("TC_PDP_SUPL_PLAN_64:Verify that clicking on the Hospitalization should expands and display additional options.",()=>{
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
    planselectionpage.setSupplementButtn();
    cy.wait(10000)
   // planselectionpage.setPlanSelectionCheckBox(1);
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanN1)
    planselectionpage.setPlanDetailsButton() 
    planselectionpage.setHospitalizationClick()
    cy.get(".mat-expansion-panel-body table.mat-table.cdk-table.detail-table tbody", { timeout: 10000 })
    .should('be.visible') 
   .find('tr') 
   .should('have.length.greaterThan', 0) 
   .each(($row) => {
    cy.wrap($row).find('td').each(($cell) => {
      cy.wrap($cell).invoke('text').should('not.be.empty'); 
    });
  });
})


it("TC_PDP_SUPL_PLAN_72:To verify Part B expands and collapse",()=>{
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
    planselectionpage.setSupplementButtn();
    cy.wait(10000)
    //planselectionpage.setPlanSelectionCheckBox(1);
    planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanN1)
    planselectionpage.setPlanDetailsButton()
    planselectionpage.setPartBExpands()   
    planselectionpage.setPartBCollapse()  
}) 

it("TC_PDP_SUPL_PLAN_80:To verify Part A & B expands and collapse",()=>{
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
    planselectionpage.setSupplementButtn();
    cy.wait(10000)
   // planselectionpage.setPlanSelectionCheckBox(1);
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanN1)
    planselectionpage.setPlanDetailsButton()
    planselectionpage.setPartABExpands()
    planselectionpage.setPartABCollapse()
})

it("TC_PDP_SUPL_PLAN_86:To verify Other Benefits expands and collapse",()=>{
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
    planselectionpage.setSupplementButtn();
    cy.wait(10000)
   // planselectionpage.setPlanSelectionCheckBox(1);
   planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanN1)
    planselectionpage.setPlanDetailsButton()
    planselectionpage.setOtherBenefitsExpands()
    planselectionpage.setOtherBenefitsCollapse()
})
 it("TC_PDP_SUPL_PLAN_91:To verify functionality of Back button on suppliment plan details page",()=>{
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
    planselectionpage.setSupplementButtn();
    cy.wait(10000)
    //planselectionpage.setPlanSelectionCheckBox(1);
    planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanN1)
    planselectionpage.setPlanDetailsButton()
    planselectionpage.setBackButton() 
   cy.wait(2000);
   cy.url().should('eq','http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
 })

 it("TC_PDP_SUPL_PLAN_98: To verify the functionality of Cancel button on suppliment planlist page",()=>{
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
    planselectionpage.setSupplementButtn();
    cy.wait(10000)
    planselectionpage.setCancelButton()  //Cancel button
    cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/plan-selection");

 })

 it("TC_PDP_MA_PLAN_121: To verify functionality of Profile Button",()=>{
    planselectionpage.setProfileButtn()
    cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/home");
 })

 

 it("TC_PDP_MA_PLAN_122: To verify functionality of Prescription Button",()=>{
    planselectionpage.setPrescriptionButtn()
    cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/manage-prescriptions");
 })
 
 it("TC_PDP_MA_PLAN_123: To verify functionality of Pharmacy Button",()=>{
    planselectionpage.setPharmacyButtn()
    cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/manage-pharmacies");

})


})
   
   