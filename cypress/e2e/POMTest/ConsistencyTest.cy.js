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

const csvToJson=require('convert-csv-to-json');
const consistency_dependency_file='consistency-dependency.csv';
let jsonOutput=[];
let SharedABDG_TotalExpences;
let SharedLifeExpectancy_G;
let SharedTaxFilingStatus_G;
let MedicareR5TotalExpense_G;
let MedicareR5LifeExpectancy_G;
let MedicareR5TaxFilingStatus_G;
let getPartDPlanPartBPremiumSurcharge_G;
let getPartDPlanMedigapOOP_G;
let getPartDPlanPartDPremiumSurcharge_G;
let getPartDPlanPartDDeductible_G;
let getPartDPlanTotalPrescriptionCost_G;
let SharedPartDSurcharge_G;
let SharedPartBSurcharge_G;
let SharedMedigapOOP_G;
let SharedPartDDeductible_G;
let SharedPartDPlanTotalPrescriptionCost_G;
let SharedABDN_TotalExpences ,SharedLifeExpectancy_N,SharedTaxFilingStatus_N,MedicareR5TotalExpense_N,MedicareR5LifeExpectancy_N,MedicareR5TaxFilingStatus_N,getPartDPlanPartBPremiumSurcharge_N,getPartDPlanMedigapOOP_N,getPartDPlanPartDPremiumSurcharge_N,getPartDPlanPartDDeductible_N,getPartDPlanTotalPrescriptionCost_N,SharedPartDSurcharge_N,
SharedPartBSurcharge_N,SharedMedigapOOP_N,SharedPartDDeductible_N,SharedPartDPlanTotalPrescriptionCost_N;
let SharedABDHDG_TotalExpences ,SharedLifeExpectancy_HDG,SharedTaxFilingStatus_HDG,MedicareR5TotalExpense_HDG,MedicareR5LifeExpectancy_HDG,MedicareR5TaxFilingStatus_HDG,getPartDPlanPartBPremiumSurcharge_HDG,getPartDPlanMedigapOOP_HDG,getPartDPlanPartDPremiumSurcharge_HDG,getPartDPlanPartDDeductible_HDG,getPartDPlanTotalPrescriptionCost_HDG,SharedPartDSurcharge_HDG,
SharedPartBSurcharge_HDG,SharedMedigapOOP_HDG,SharedPartDDeductible_HDG,SharedPartDPlanTotalPrescriptionCost_HDG;

let SharedABDMA_TotalExpences ,SharedLifeExpectancy_MA,SharedTaxFilingStatus_MA,MedicareR5TotalExpense_MA,MedicareR5LifeExpectancy_MA,MedicareR5TaxFilingStatus_MA,getPartDPlanPartBPremiumSurcharge_MA,getPartDPlanMedigapOOP_MA,getPartDPlanPartDPremiumSurcharge_MA,getPartDPlanPartDDeductible_MA,getPartDPlanTotalPrescriptionCost_MA,SharedPartDSurcharge_MA,
SharedPartBSurcharge_MA,SharedMedigapOOP_MA,SharedPartDDeductible_MA,SharedPartDPlanTotalPrescriptionCost_MA;

describe('Consistency Test', () => {

    let testData = null;
const planselectionpage= new PlanselectionPage();
const medicarepage = new MedicarePage();
const consistency=new Consistency();
const longtermpage= new LongTermPage();
const landingpage = new LandingPage();


  /*afterEach(function () {
  const testId = this.currentTest.title.split(':')[0].trim();
  const status = this.currentTest.state === 'passed' ? 'pass' : 'fail';

  cy.log(`Updating CSV for Test ID: ${testId} with status: ${status}`);

  // Add a small wait to avoid race condition on fast test runs
  cy.wait(200);

  cy.readFile(consistency_dependency_file, 'utf8').then((fileContent) => {
    csvToJson.fieldDelimiter(',');
    let jsonOutput = csvToJson.csvStringToJson(fileContent);

    // Trim both sides to ensure exact match
    const row = jsonOutput.find(r => r.Test_id.trim() === testId);
    if (row) {
      row.Status = status;
      cy.log(` Status updated for ${testId} -> ${status}`);
    } else {
      cy.log(` No matching Test_id found for: ${testId}`);
    }

    // Convert updated JSON back to CSV
    const csv = [
      Object.keys(jsonOutput[0]).join(","),
      ...jsonOutput.map(obj => Object.values(obj).join(","))
    ].join("\n");

    cy.writeFile(consistency_dependency_file, csv);
  });

  // Extra wait to ensure file write completes before next test
  cy.wait(100);
});
*/

        


before(() => {
    //cy.fixture('LoginFixture').then((data) => {
      //  testData=data;
      cy.task('csv:parseFromDropbox').then((data) => {
           testData = data[0];
    });


    //Rading dependency file
   /* cy.readFile(consistency_dependency_file).then((fileContent)=>{
      csvToJson.fieldDelimiter(',');
       jsonOutput = csvToJson.csvStringToJson(fileContent);
    })*/
})

    const pharmacypg = new PharmacyPage();
    beforeEach(() => {
cy.intercept('POST', '**/createPartDPlan').as('createProfile');
        cy.session("PDP session",()=>{
      
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

        });
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/plan-selection')
    })

    it("TC_PDP_CONS_PDP/G_01:Verify that PDP+G+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.", () => {
  cy.intercept('POST','**/individualMedicareR5').as('medicareR5');
  planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  cy.wait(5000)
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
 //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
 planselectionpage.setPDPButtn();
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
  cy.wait(1000)
  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
      //SharedABDG_TotalExpences=ABDG_TotalExpences;
    // cy.wait('@medicareR5').then((interception)=>{
       // expect(interception.response.statusCode).to.eq(200);
       //  MedicareR5TotalExpense_G=interception.response.body.lifeTimeABGDExpenses;
       // expect(MedicareR5TotalExpense_G).to.eql(Number(ABDG_TotalExpences.replace(/\$|,/g, '').trim()))
     // })
    });
  });
});

it("TC_PDP_CONS_PDP/G_03:Verify that all profile details on Medicare page e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
  cy.intercept('POST','**/individualMedicareR5').as('medicareR5');
  planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(2000);
  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
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
 cy.wait(1000)
 //cy.wait('@medicareR5').then((interception)=>{
 // expect(interception.response.statusCode).to.eq(200);
  consistency.setLifeExpectancy().then((LifeExpectancy)=>{
    expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  //MedicareR5LifeExpectancy_G=interception.response.body.lifeExpectancy;
  //SharedLifeExpectancy_G=LifeExpectancy;

  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
   // MedicareR5TaxFilingStatus_G=interception.response.body.taxFilingStatus;
   // SharedTaxFilingStatus_G=TaxFilingStatus;
  });
 //})

})


it("TC_PDP_CONS_PDP/G_04:Verify that Total Present Value Expences under Long Term Care Expences Projection is equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care",()=>{
   planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
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
  longtermpage.clickLongtermBtn();
  cy.wait(1000)
  const parseAmount = (value) => parseFloat(value.replace(/[$,]/g, ''));

  consistency.setLongTermTotalPresentValueExpenses().then((LongTermTotalPresentValueExpenses)=>{
    consistency.setAdultDayCarePresentValue().then((AdultDayCarePresentValue)=>{
        consistency.setInHomeCarePresentValue().then((InHomeCarePresentValue)=>{
            consistency.setNursingCarePresentValue().then((NursingCarePresentValue)=>{
                 const total = 
        parseAmount(AdultDayCarePresentValue) +
        parseAmount(InHomeCarePresentValue) +
        parseAmount(NursingCarePresentValue);

      
      const actual = parseAmount(LongTermTotalPresentValueExpenses); // from the UI

        const tolerance = 3; // you can adjust this (e.g., 2 or 5)

        expect(Math.abs(total - actual)).to.be.lessThan(tolerance);

        cy.log(`✅ Expected Total: ${total}, Actual UI Value: ${actual}`);

      
         })
        })
    })
  })
})

it("TC_PDP_CONS_PDP/G_05:Verify that Total Futuret Value Expences under Long Term Care Expences Projection is equal to the addition of Future value Adult Day Care,In Home Care,Nursing Care ",()=>{
planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
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
  longtermpage.clickLongtermBtn();
  cy.wait(1000)
  const parseAmount = (value) => parseFloat(String(value).replace(/[$,]/g, ''));

consistency.setLongTermTotalFutureValueExpenses().then((LongTermTotalFutureValueExpenses)=>{
    consistency.setAdultDayCareFutureValue().then((AdultDayCareFutureValue)=>{
        consistency.setInHomeCareFutureValue().then((InHomeCareFutureValue)=>{
            consistency.setNursingCareFutureValue().then((NursingCareFutureValue)=>{
        cy.log(`Raw AdultDayCareFutureValue: ${AdultDayCareFutureValue}`);
        cy.log(`Raw InHomeCareFutureValue: ${InHomeCareFutureValue}`);
        cy.log(`Raw NursingCareFutureValue: ${NursingCareFutureValue}`);
        cy.log(`Raw LongTermTotalFutureValueExpenses: ${LongTermTotalFutureValueExpenses}`);

                 const total = 
        parseAmount(AdultDayCareFutureValue) +
        parseAmount(InHomeCareFutureValue) +
        parseAmount(NursingCareFutureValue);

      
      const actual = parseAmount(LongTermTotalFutureValueExpenses); // from the UI

        const tolerance = 3; // you can adjust this (e.g., 2 or 5)

        expect(Math.abs(total - actual)).to.be.lessThan(tolerance);

        cy.log(`✅ Expected Total: ${total}, Actual UI Value: ${actual}`);

      
         })
        })
    })
  })

})

it("TC_PDP_CONS_PDP/G_06:Verify that all profile details on LongTerm page e.g. Age,Retierment Age,Life Expectancy,Health Profile matches with the profile data entered on profile page while creating the plan.",()=>{
    planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
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
  longtermpage.clickLongtermBtn();
  cy.wait(1000)
  consistency.setLTCHealthProfile().then((LTCHealthProfile)=>{
    expect(LTCHealthProfile).to.eql(testData.healthProfile)
  });
  consistency.setLTCLifeExpectancy().then((LTCLifeExpectancy)=>{
    expect(LTCLifeExpectancy).to.eql(testData.lifeExpectancy)
  });
  

})

it("TC_PDP_CONS_PDP/G_07:Verify that Health Care Expense value and Health Care Present value on view page identical with ABD+G+Concirge charges and P.V as of year on medicare page respectively.",()=>{
  cy.intercept('POST','**/getPartDPlan').as('getPartDPlan');
  planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
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
  cy.wait(1000)
  medicarepage.clickbackbtn();
  cy.wait(1000)
  longtermpage.clickLongtermBtn(); 
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');   
  cy.wait(1000);
  landingpage.viewGreyEyeRecomendationClick();
  cy.wait(10000);
  consistency.setHealthCareExpense().then((HealthCareExpense)=>{
    consistency.setHealthCarePresentValue().then((HealthCarePresentValue)=>{
      consistency.setMedicareBtn()
      cy.wait(2000)
      consistency.setPVasOfYear().then((PVasOfYear)=>{
        consistency.setABDGTotalExpences().then((ABDGTotalExpences)=>{
            expect(ABDGTotalExpences).to.eql(HealthCareExpense);
            expect(PVasOfYear).to.eql(HealthCarePresentValue);
        })
      })  
    })
   /* cy.wait('@getPartDPlan').then((interception)=>{
   expect(interception.response.statusCode).to.eq(200);
   const body=interception.response.body;
   const emailKey = Object.keys(body.partDPlanMap)[0];
   getPartDPlanPartBPremiumSurcharge_G = body.partDPlanMap[emailKey][0].medigapQuote.partBPremiumSurcharge;
   getPartDPlanMedigapOOP_G=body.partDPlanMap[emailKey][0].medigapQuote.medigapOOP
   getPartDPlanPartDPremiumSurcharge_G=body.partDPlanMap[emailKey][0].partDPremiumSurcharge;
   getPartDPlanPartDDeductible_G=body.partDPlanMap[emailKey][0].partDPlanRecommendation.deductible;
   getPartDPlanTotalPrescriptionCost_G=body.partDPlanMap[emailKey][0].partDPlanRecommendation.totalPrescriptionCost;
   consistency.SetMedicareBackBtn();
   cy.wait(5000)
   consistency.SetPartDSurcharge().then((PartDSurcharge)=>{
    SharedPartDSurcharge_G=PartDSurcharge;
   });
   cy.wait(1000)
   consistency.SetPartBSurcharge().then((PartBSurcharge)=>{
    SharedPartBSurcharge_G=PartBSurcharge;
   });
   console.log(SharedPartBSurcharge_G);
   cy.wait(1000)
   consistency.SetMedigapOOP().then((MedigapOOP)=>{
    SharedMedigapOOP_G=MedigapOOP;
   });
   cy.wait(1000)
   consistency.SetPartDDeductible().then((PartDDeductible)=>{
    SharedPartDDeductible_G=PartDDeductible;
   });
   cy.wait(1000)
   consistency.SetPartDPlanTotalPrescriptionCost().then((PartDPlanTotalPrescriptionCost)=>{
    SharedPartDPlanTotalPrescriptionCost_G=PartDPlanTotalPrescriptionCost;
   });
   cy.wait(1000)
    })*/
 })
 

})


it("TC_PDP_CONS_PDP/G_08:Verify that LongTerm Care Expense value and LongTerm Care Present value on view page are identical with Total Future Value Expenses and Total Present Value Expenses on LongTerm page respectively.",()=>{
  planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
 // cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
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
  cy.wait(2000)
  medicarepage.clickbackbtn();
  cy.wait(1000)
  longtermpage.clickLongtermBtn(); 
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');
  cy.wait(1000);
  landingpage.viewGreyEyeRecomendationClick();
  cy.wait(10000);
  consistency.setLongtermCareExpenseViewPage().then((LongtermCareExpenseViewPage)=>{
    consistency.setLongtermCarePresentValueViewPage().then((LongtermCarePresentValueViewPage)=>{
      consistency.setLongTermBtn()
      cy.wait(2000)
      consistency.setLongTermTotalPresentValueExpenses().then((LongTermTotalPresentValueExpenses)=>{
        consistency.setLongTermTotalFutureValueExpenses().then((LongTermTotalFutureValueExpenses)=>{
            expect(LongtermCareExpenseViewPage).to.eql(LongTermTotalFutureValueExpenses);
            expect(LongtermCarePresentValueViewPage).to.eql(LongTermTotalPresentValueExpenses);
        })
      })  
    })
 })
  
})




//PDP+PlanN Consistency test cases
function PDPandPlanN(testData){
    planselectionpage.setMedigapArrow()
    planselectionpage.setSelectPlanN()
  planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');

  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanN1);
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();
  cy.wait(1000)
  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond();  
} 

it("TC_PDP_CONS_PDP/N_01:Verify that ABD+N+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
  cy.intercept('POST','**/individualMedicareR5').as('medicareR5');  
  PDPandPlanN(testData);
    cy.wait(1000)
    medicarepage.clickmedicare();
    cy.wait(1000)
  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
      SharedABDN_TotalExpences=ABDG_TotalExpences;
     //cy.wait('@medicareR5').then((interception)=>{
        //expect(interception.response.statusCode).to.eq(200);
         //MedicareR5TotalExpense_N=interception.response.body.lifeTimeABNDExpenses;
       
     // })
    });
  });
})

it("TC_PDP_CONS_PDP/N_03:Verify that all prifile details e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
 cy.intercept('POST','**/individualMedicareR5').as('medicareR5');  
  PDPandPlanN(testData);
cy.wait(1000)
medicarepage.clickmedicare();
cy.wait(1000)
//cy.wait('@medicareR5').then((interception)=>{
   //expect(interception.response.statusCode).to.eq(200);
consistency.setLifeExpectancy().then((LifeExpectancy)=>{
expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
 //MedicareR5LifeExpectancy_N=interception.response.body.lifeExpectancy;
 // SharedLifeExpectancy_N=LifeExpectancy;
  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())

    //MedicareR5TaxFilingStatus_N=interception.response.body.taxFilingStatus;
   // SharedTaxFilingStatus_N=TaxFilingStatus;
  });
//})
})


it("TC_PDP_CONS_PDP/N_04:Verify that Total Present Value Expences under Long Term Care Expences Projection is equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care",()=>{
    PDPandPlanN(testData);
    cy.wait(1000)
    longtermpage.clickLongtermBtn();
    cy.wait(1000)
    const parseAmount = (value) => parseFloat(value.replace(/[$,]/g, ''));

    consistency.setLongTermTotalPresentValueExpenses().then((LongTermTotalPresentValueExpenses)=>{
    consistency.setAdultDayCarePresentValue().then((AdultDayCarePresentValue)=>{
        consistency.setInHomeCarePresentValue().then((InHomeCarePresentValue)=>{
            consistency.setNursingCarePresentValue().then((NursingCarePresentValue)=>{
                 const total = 
        parseAmount(AdultDayCarePresentValue) +
        parseAmount(InHomeCarePresentValue) +
        parseAmount(NursingCarePresentValue);

      
      const actual = parseAmount(LongTermTotalPresentValueExpenses); // from the UI

        const tolerance = 3; // you can adjust this (e.g., 2 or 5)

        expect(Math.abs(total - actual)).to.be.lessThan(tolerance);

        cy.log(`✅ Expected Total: ${total}, Actual UI Value: ${actual}`);

      
         })
        })
    })
  })

})


it("TC_PDP_CONS_PDP/N_05:Verify that Total Futuret Value Expences under Long Term Care Expences Projection is equal to the addition of Future value Adult Day Care,In Home Care,Nursing Care",()=>{
   PDPandPlanN(testData);
   cy.wait(1000)
   longtermpage.clickLongtermBtn(); 
   cy.wait(1000)
   const parseAmount = (value) => parseFloat(String(value).replace(/[$,]/g, ''));

consistency.setLongTermTotalFutureValueExpenses().then((LongTermTotalFutureValueExpenses)=>{
    consistency.setAdultDayCareFutureValue().then((AdultDayCareFutureValue)=>{
        consistency.setInHomeCareFutureValue().then((InHomeCareFutureValue)=>{
            consistency.setNursingCareFutureValue().then((NursingCareFutureValue)=>{
        cy.log(`Raw AdultDayCareFutureValue: ${AdultDayCareFutureValue}`);
        cy.log(`Raw InHomeCareFutureValue: ${InHomeCareFutureValue}`);
        cy.log(`Raw NursingCareFutureValue: ${NursingCareFutureValue}`);
        cy.log(`Raw LongTermTotalFutureValueExpenses: ${LongTermTotalFutureValueExpenses}`);

                 const total = 
        parseAmount(AdultDayCareFutureValue) +
        parseAmount(InHomeCareFutureValue) +
        parseAmount(NursingCareFutureValue);

      
      const actual = parseAmount(LongTermTotalFutureValueExpenses); // from the UI

        const tolerance = 3; // you can adjust this (e.g., 2 or 5)

        expect(Math.abs(total - actual)).to.be.lessThan(tolerance);

        cy.log(`✅ Expected Total: ${total}, Actual UI Value: ${actual}`);

      
         })
        })
    })
  })
   
})


it("TC_PDP_CONS_PDP/N_06:Verify that all profile details on LongTerm page e.g. Age,Retierment Age,Life Expectancy,Health Profile matches with the profile data entered on profile page while creating the plan.",()=>{
   PDPandPlanN(testData);
   cy.wait(1000)
   longtermpage.clickLongtermBtn(); 
   cy.wait(1000)
   consistency.setLTCHealthProfile().then((LTCHealthProfile)=>{
    expect(LTCHealthProfile).to.eql(testData.healthProfile)
  });
  consistency.setLTCLifeExpectancy().then((LTCLifeExpectancy)=>{
    expect(LTCLifeExpectancy).to.eql(testData.lifeExpectancy)
  });
  
})

it("TC_PDP_CONS_PDP/N_07:Verify that Health Care Expense value and Health Care Present value on view page identical with ABD+N+Concirge charges and P.V as of year on medicare page respectively.",()=>{
  cy.intercept('POST','**/getPartDPlan').as('getPartDPlan'); 
  PDPandPlanN(testData);
    cy.wait(1000)
   medicarepage.clickmedicare();
   cy.wait(1000)
  medicarepage.clickbackbtn();
  cy.wait(1000)
  longtermpage.clickLongtermBtn(); 
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');   
  cy.wait(1000);
  landingpage.viewGreyEyeRecomendationClick();
  cy.wait(10000);
  consistency.setHealthCareExpense().then((HealthCareExpense)=>{
    consistency.setHealthCarePresentValue().then((HealthCarePresentValue)=>{
      consistency.setMedicareBtn()
      cy.wait(2000)
      consistency.setPVasOfYear().then((PVasOfYear)=>{
        consistency.setABDGTotalExpences().then((ABDGTotalExpences)=>{
            expect(ABDGTotalExpences).to.eql(HealthCareExpense);
            expect(PVasOfYear).to.eql(HealthCarePresentValue);
        })
      }) 
        
    })

   /* cy.wait('@getPartDPlan').then((interception)=>{
   expect(interception.response.statusCode).to.eq(200);
   const body=interception.response.body;
   const emailKey = Object.keys(body.partDPlanMap)[0];
   getPartDPlanPartBPremiumSurcharge_N = body.partDPlanMap[emailKey][0].medigapQuote.partBPremiumSurcharge;
   getPartDPlanMedigapOOP_N=body.partDPlanMap[emailKey][0].medigapQuote.medigapOOP
   getPartDPlanPartDPremiumSurcharge_N=body.partDPlanMap[emailKey][0].partDPremiumSurcharge;
   getPartDPlanPartDDeductible_N=body.partDPlanMap[emailKey][0].partDPlanRecommendation.deductible;
   getPartDPlanTotalPrescriptionCost_N=body.partDPlanMap[emailKey][0].partDPlanRecommendation.totalPrescriptionCost;
   consistency.SetMedicareBackBtn();
   cy.wait(5000)
   consistency.SetPartDSurcharge().then((PartDSurcharge)=>{
    SharedPartDSurcharge_N=PartDSurcharge;
   });
   cy.wait(1000)
   consistency.SetPartBSurcharge().then((PartBSurcharge)=>{
    SharedPartBSurcharge_N=PartBSurcharge;
   });
   console.log(SharedPartBSurcharge_N);
   cy.wait(1000)
   consistency.SetMedigapOOP().then((MedigapOOP)=>{
     SharedMedigapOOP_N=MedigapOOP;
    });
   cy.wait(1000)
   consistency.SetPartDDeductible().then((PartDDeductible)=>{
    SharedPartDDeductible_N=PartDDeductible;
    });
   cy.wait(1000)
   consistency.SetPartDPlanTotalPrescriptionCost().then((PartDPlanTotalPrescriptionCost)=>{
    SharedPartDPlanTotalPrescriptionCost_N=PartDPlanTotalPrescriptionCost;
     });
   cy.wait(1000)
    })*/
 })
 
 })
 


it("TC_PDP_CONS_PDP/N_08:Verify that LongTerm Care Expense value and LongTerm Care Present value on view page are identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page respectively.",()=>{
 PDPandPlanN(testData);
 cy.wait(1000)
   medicarepage.clickmedicare();
   cy.wait(1000)
  medicarepage.clickbackbtn();
  cy.wait(1000)
  longtermpage.clickLongtermBtn(); 
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');   
  cy.wait(1000);
  landingpage.viewGreyEyeRecomendationClick();
  cy.wait(10000);
  consistency.setLongtermCareExpenseViewPage().then((LongtermCareExpenseViewPage)=>{
    consistency.setLongtermCarePresentValueViewPage().then((LongtermCarePresentValueViewPage)=>{
      consistency.setLongTermBtn()
      cy.wait(2000)
      consistency.setLongTermTotalPresentValueExpenses().then((LongTermTotalPresentValueExpenses)=>{
        consistency.setLongTermTotalFutureValueExpenses().then((LongTermTotalFutureValueExpenses)=>{
            expect(LongtermCareExpenseViewPage).to.eql(LongTermTotalFutureValueExpenses);
            expect(LongtermCarePresentValueViewPage).to.eql(LongTermTotalPresentValueExpenses);
        })
      })  
    })
 })

})


//PDP+PlanHDG Consistency test cases
function PDPandPlanHDG(testData){
    planselectionpage.setMedigapArrow()
    cy.wait(500);
    planselectionpage.setSelectPlanHDG()
    cy.wait(500);
  planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  cy.wait(5000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanHDG);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
 cy.wait(1000)
  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
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
} 



it("TC_PDP_CONS_PDP/HDG_01:Verify that ABD+HDG+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
   cy.intercept('POST','**/individualMedicareR5').as('medicareR5');  
  PDPandPlanHDG(testData);
    cy.wait(1000)
    medicarepage.clickmedicare();
    cy.wait(1000)
  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
      SharedABDHDG_TotalExpences=ABDG_TotalExpences;
     // cy.wait('@medicareR5').then((interception)=>{
       // expect(interception.response.statusCode).to.eq(200);
        // MedicareR5TotalExpense_HDG=interception.response.body.lifeTimeABGDExpenses;
    //});
  });
})
})

it("TC_PDP_CONS_PDP/HDG_03:Verify that all prifile details e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
cy.intercept('POST','**/individualMedicareR5').as('medicareR5');
  PDPandPlanHDG(testData);
cy.wait(1000)
medicarepage.clickmedicare();
cy.wait(1000)
//cy.wait('@medicareR5').then((interception)=>{
  //expect(interception.response.statusCode).to.eq(200);
  consistency.setLifeExpectancy().then((LifeExpectancy)=>{
    expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  //MedicareR5LifeExpectancy_HDG=interception.response.body.lifeExpectancy;
  //SharedLifeExpectancy_HDG=LifeExpectancy;

  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
   // MedicareR5TaxFilingStatus_HDG=interception.response.body.taxFilingStatus;
   // SharedTaxFilingStatus_HDG=TaxFilingStatus;
  });
//})

})



it("TC_PDP_CONS_PDP/HDG_04:Verify that Total Present Value Expences under Long Term Care Expences Projection is equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care",()=>{
    PDPandPlanHDG(testData);
    cy.wait(1000)
    longtermpage.clickLongtermBtn();
    cy.wait(1000)
    const parseAmount = (value) => parseFloat(value.replace(/[$,]/g, ''));

    consistency.setLongTermTotalPresentValueExpenses().then((LongTermTotalPresentValueExpenses)=>{
    consistency.setAdultDayCarePresentValue().then((AdultDayCarePresentValue)=>{
        consistency.setInHomeCarePresentValue().then((InHomeCarePresentValue)=>{
            consistency.setNursingCarePresentValue().then((NursingCarePresentValue)=>{
                 const total = 
        parseAmount(AdultDayCarePresentValue) +
        parseAmount(InHomeCarePresentValue) +
        parseAmount(NursingCarePresentValue);

      
      const actual = parseAmount(LongTermTotalPresentValueExpenses); // from the UI

        const tolerance = 3; // you can adjust this (e.g., 2 or 5)

        expect(Math.abs(total - actual)).to.be.lessThan(tolerance);

        cy.log(`✅ Expected Total: ${total}, Actual UI Value: ${actual}`);

      
         })
        })
    })
  })

})


it("TC_PDP_CONS_PDP/HDG_05:Verify that Total Futuret Value Expences under Long Term Care Expences Projection is equal to the addition of Future value Adult Day Care,In Home Care,Nursing Care",()=>{
   PDPandPlanHDG(testData);
   cy.wait(1000)
   longtermpage.clickLongtermBtn(); 
   cy.wait(1000)
   const parseAmount = (value) => parseFloat(String(value).replace(/[$,]/g, ''));

consistency.setLongTermTotalFutureValueExpenses().then((LongTermTotalFutureValueExpenses)=>{
    consistency.setAdultDayCareFutureValue().then((AdultDayCareFutureValue)=>{
        consistency.setInHomeCareFutureValue().then((InHomeCareFutureValue)=>{
            consistency.setNursingCareFutureValue().then((NursingCareFutureValue)=>{
        cy.log(`Raw AdultDayCareFutureValue: ${AdultDayCareFutureValue}`);
        cy.log(`Raw InHomeCareFutureValue: ${InHomeCareFutureValue}`);
        cy.log(`Raw NursingCareFutureValue: ${NursingCareFutureValue}`);
        cy.log(`Raw LongTermTotalFutureValueExpenses: ${LongTermTotalFutureValueExpenses}`);

                 const total = 
        parseAmount(AdultDayCareFutureValue) +
        parseAmount(InHomeCareFutureValue) +
        parseAmount(NursingCareFutureValue);

      
      const actual = parseAmount(LongTermTotalFutureValueExpenses); // from the UI

        const tolerance = 3; // you can adjust this (e.g., 2 or 5)

        expect(Math.abs(total - actual)).to.be.lessThan(tolerance);

        cy.log(`✅ Expected Total: ${total}, Actual UI Value: ${actual}`);

      
         })
        })
    })
  })
   
})


it("TC_PDP_CONS_PDP/HDG_06:Verify that all profile details on LongTerm page e.g. Age,Retierment Age,Life Expectancy,Health Profile matches with the profile data entered on profile page while creating the plan.",()=>{
   PDPandPlanHDG(testData);
   cy.wait(1000)
   longtermpage.clickLongtermBtn(); 
    cy.wait(1000)
   consistency.setLTCHealthProfile().then((LTCHealthProfile)=>{
    expect(LTCHealthProfile).to.eql(testData.healthProfile)
  });
  consistency.setLTCLifeExpectancy().then((LTCLifeExpectancy)=>{
    expect(LTCLifeExpectancy).to.eql(testData.lifeExpectancy)
  });
  
})

it("TC_PDP_CONS_PDP/HDG_07:Verify that Health Care Expense value and Health Care Present value on view page identical with ABD+N+Concirge charges and P.V as of year on medicare page respectively.",()=>{
   cy.intercept('POST','**/getPartDPlan').as('getPartDPlan'); 
  PDPandPlanHDG(testData);
    cy.wait(1000)
   medicarepage.clickmedicare();
   cy.wait(1000)
  medicarepage.clickbackbtn();
  cy.wait(1000)
  longtermpage.clickLongtermBtn(); 
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');   
  cy.wait(1000);
  landingpage.viewGreyEyeRecomendationClick();
  cy.wait(10000);
  consistency.setHealthCareExpense().then((HealthCareExpense)=>{
    consistency.setHealthCarePresentValue().then((HealthCarePresentValue)=>{
      consistency.setMedicareBtn()
      cy.wait(2000)
      consistency.setPVasOfYear().then((PVasOfYear)=>{
        consistency.setABDGTotalExpences().then((ABDGTotalExpences)=>{
            expect(ABDGTotalExpences).to.eql(HealthCareExpense);
            expect(PVasOfYear).to.eql(HealthCarePresentValue);
        })
      })  
    })
 /*cy.wait('@getPartDPlan').then((interception)=>{
   expect(interception.response.statusCode).to.eq(200);
   const body=interception.response.body;
   const emailKey = Object.keys(body.partDPlanMap)[0];
   getPartDPlanPartBPremiumSurcharge_HDG = body.partDPlanMap[emailKey][0].medigapQuote.partBPremiumSurcharge;
   getPartDPlanMedigapOOP_HDG=body.partDPlanMap[emailKey][0].medigapQuote.medigapOOP
   getPartDPlanPartDPremiumSurcharge_HDG=body.partDPlanMap[emailKey][0].partDPremiumSurcharge;
   getPartDPlanPartDDeductible_HDG=body.partDPlanMap[emailKey][0].partDPlanRecommendation.deductible;
   getPartDPlanTotalPrescriptionCost_HDG=body.partDPlanMap[emailKey][0].partDPlanRecommendation.totalPrescriptionCost;
   consistency.SetMedicareBackBtn();
   cy.wait(5000)
   consistency.SetPartDSurcharge().then((PartDSurcharge)=>{
    SharedPartDSurcharge_HDG=PartDSurcharge;
   });
   cy.wait(1000)
   consistency.SetPartBSurcharge().then((PartBSurcharge)=>{
    SharedPartBSurcharge_HDG=PartBSurcharge;
   });
   console.log(SharedPartBSurcharge_N);
   cy.wait(1000)
   consistency.SetMedigapOOP().then((MedigapOOP)=>{
     SharedMedigapOOP_HDG=MedigapOOP;
    });
   cy.wait(1000)
   consistency.SetPartDDeductible().then((PartDDeductible)=>{
    SharedPartDDeductible_HDG=PartDDeductible;
    });
   cy.wait(1000)
   consistency.SetPartDPlanTotalPrescriptionCost().then((PartDPlanTotalPrescriptionCost)=>{
    SharedPartDPlanTotalPrescriptionCost_HDG=PartDPlanTotalPrescriptionCost;
     });
   cy.wait(1000)
    })*/
 })
 
 })
 

it("TC_PDP_CONS_PDP/HDG_08:Verify that LongTerm Care Expense value and LongTerm Care Present value on view page are identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page respectively.",()=>{
 PDPandPlanHDG(testData);
 cy.wait(1000)
   medicarepage.clickmedicare();
   cy.wait(1000)
  medicarepage.clickbackbtn();
  cy.wait(1000)
  longtermpage.clickLongtermBtn(); 
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');   
  cy.wait(1000);
  landingpage.viewGreyEyeRecomendationClick();
  cy.wait(10000);
  consistency.setLongtermCareExpenseViewPage().then((LongtermCareExpenseViewPage)=>{
    consistency.setLongtermCarePresentValueViewPage().then((LongtermCarePresentValueViewPage)=>{
      consistency.setLongTermBtn()
      cy.wait(2000)
      consistency.setLongTermTotalPresentValueExpenses().then((LongTermTotalPresentValueExpenses)=>{
        consistency.setLongTermTotalFutureValueExpenses().then((LongTermTotalFutureValueExpenses)=>{
            expect(LongtermCareExpenseViewPage).to.eql(LongTermTotalFutureValueExpenses);
            expect(LongtermCarePresentValueViewPage).to.eql(LongTermTotalPresentValueExpenses);
        })
      })  
    })
 })

})

//PlanMA Consistency test cases
function PlanMA(testData){
  planselectionpage.setMedicareAdvantageButtn()
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/MEDICARE');

  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.MAplan);
  cy.wait(1000)
  planselectionpage.donePlanSelectionClick();
  cy.wait(2000);
  consistency.setPlanSelectCheckboxMA();
   
} 

it("TC_PDP_CONS_MA_01:Verify that AB+MA+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
   cy.intercept('POST','**/individualMedicareR5').as('medicareR5');  
  PlanMA(testData);
    cy.wait(1000)
    medicarepage.clickmedicare();
    cy.wait(1000)
  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
      SharedABDMA_TotalExpences=ABDG_TotalExpences;
      //cy.wait('@medicareR5').then((interception)=>{
        //expect(interception.response.statusCode).to.eq(200);
        // MedicareR5TotalExpense_MA=interception.response.body.lifeTimeABMedicareAdvantageExpenses;
    });
  });
//})
})


it("TC_PDP_CONS_MA_03:Verify that all prifile details e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
cy.intercept('POST','**/individualMedicareR5').as('medicareR5');
  PlanMA(testData);
cy.wait(1000)
medicarepage.clickmedicare();
cy.wait(1000)
//cy.wait('@medicareR5').then((interception)=>{
  expect(interception.response.statusCode).to.eq(200);
  consistency.setLifeExpectancy().then((LifeExpectancy)=>{
    expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  //MedicareR5LifeExpectancy_MA=interception.response.body.lifeExpectancy;
  //SharedLifeExpectancy_MA=LifeExpectancy;

  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
   // MedicareR5TaxFilingStatus_MA=interception.response.body.taxFilingStatus;
   // SharedTaxFilingStatus_MA=TaxFilingStatus;
  });
//})

})


it("TC_PDP_CONS_MA_04:Verify that Total Present Value Expences under Long Term Care Expences Projection is equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care",()=>{
    PlanMA(testData);
    cy.wait(1000)
    longtermpage.clickLongtermBtn();
    cy.wait(1000)
    const parseAmount = (value) => parseFloat(value.replace(/[$,]/g, ''));

    consistency.setLongTermTotalPresentValueExpenses().then((LongTermTotalPresentValueExpenses)=>{
    consistency.setAdultDayCarePresentValue().then((AdultDayCarePresentValue)=>{
        consistency.setInHomeCarePresentValue().then((InHomeCarePresentValue)=>{
            consistency.setNursingCarePresentValue().then((NursingCarePresentValue)=>{
                 const total = 
        parseAmount(AdultDayCarePresentValue) +
        parseAmount(InHomeCarePresentValue) +
        parseAmount(NursingCarePresentValue);

      
      const actual = parseAmount(LongTermTotalPresentValueExpenses); // from the UI

        const tolerance = 3; // you can adjust this (e.g., 2 or 5)

        expect(Math.abs(total - actual)).to.be.lessThan(tolerance);

        cy.log(`✅ Expected Total: ${total}, Actual UI Value: ${actual}`);

      
         })
        })
    })
  })

})


it("TC_PDP_CONS_MA_05:Verify that Total Futuret Value Expences under Long Term Care Expences Projection is equal to the addition of Future value Adult Day Care,In Home Care,Nursing Care",()=>{
   PlanMA(testData);
   cy.wait(1000)
   longtermpage.clickLongtermBtn();
   cy.wait(1000) 
   const parseAmount = (value) => parseFloat(String(value).replace(/[$,]/g, ''));

consistency.setLongTermTotalFutureValueExpenses().then((LongTermTotalFutureValueExpenses)=>{
    consistency.setAdultDayCareFutureValue().then((AdultDayCareFutureValue)=>{
        consistency.setInHomeCareFutureValue().then((InHomeCareFutureValue)=>{
            consistency.setNursingCareFutureValue().then((NursingCareFutureValue)=>{
        cy.log(`Raw AdultDayCareFutureValue: ${AdultDayCareFutureValue}`);
        cy.log(`Raw InHomeCareFutureValue: ${InHomeCareFutureValue}`);
        cy.log(`Raw NursingCareFutureValue: ${NursingCareFutureValue}`);
        cy.log(`Raw LongTermTotalFutureValueExpenses: ${LongTermTotalFutureValueExpenses}`);

                 const total = 
        parseAmount(AdultDayCareFutureValue) +
        parseAmount(InHomeCareFutureValue) +
        parseAmount(NursingCareFutureValue);

      
      const actual = parseAmount(LongTermTotalFutureValueExpenses); // from the UI

        const tolerance = 3; // you can adjust this (e.g., 2 or 5)

        expect(Math.abs(total - actual)).to.be.lessThan(tolerance);

        cy.log(`✅ Expected Total: ${total}, Actual UI Value: ${actual}`);

      
         })
        })
    })
  })
   
})


it("TC_PDP_CONS_MA_06:Verify that all profile details on LongTerm page e.g. Age,Retierment Age,Life Expectancy,Health Profile matches with the profile data entered on profile page while creating the plan.",()=>{
   PlanMA(testData);
   cy.wait(1000)
   longtermpage.clickLongtermBtn(); 
  cy.wait(1000)
   consistency.setLTCHealthProfile().then((LTCHealthProfile)=>{
    expect(LTCHealthProfile).to.eql(testData.healthProfile)
  });
  consistency.setLTCLifeExpectancy().then((LTCLifeExpectancy)=>{
    expect(LTCLifeExpectancy).to.eql(testData.lifeExpectancy)
  });
  
})

it("TC_PDP_CONS_MA_07:Verify that Health Care Expense value and Health Care Present value on view page identical with AB+MA+Concirge charges and P.V as of year on medicare page respectively.",()=>{
  cy.intercept('POST','**/getPartDPlan').as('getPartDPlan');   
  PlanMA(testData);
   cy.wait(1000)
   medicarepage.clickmedicare();
   cy.wait(1000)
  medicarepage.clickbackbtn();
  cy.wait(1000)
  longtermpage.clickLongtermBtn(); 
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');   
  cy.wait(1000);
  landingpage.viewGreyEyeRecomendationClick();
  cy.wait(10000);
  consistency.setHealthCareExpense().then((HealthCareExpense)=>{
    consistency.setHealthCarePresentValue().then((HealthCarePresentValue)=>{
      consistency.setMedicareBtn()
      cy.wait(2000)
      consistency.setPVasOfYear().then((PVasOfYear)=>{
        consistency.setABDGTotalExpences().then((ABDGTotalExpences)=>{
            expect(ABDGTotalExpences).to.eql(HealthCareExpense);
            expect(PVasOfYear).to.eql(HealthCarePresentValue);
        })
      })  
    })
 /*cy.wait('@getPartDPlan').then((interception)=>{
   expect(interception.response.statusCode).to.eq(200);
   const body=interception.response.body;
   const emailKey = Object.keys(body.partDPlanMap)[0];
   //getPartDPlanPartBPremiumSurcharge_MA = body.partDPlanMap[emailKey][0].medigapQuote.partBPremiumSurcharge;
   getPartDPlanPartBPremiumSurcharge_MA = body.partDPlanMap[emailKey][0].partBPremiumSurcharge;
   getPartDPlanMedigapOOP_MA=body.partDPlanMap[emailKey][0].medigapQuote.medigapOOP
   getPartDPlanPartDPremiumSurcharge_MA=body.partDPlanMap[emailKey][0].partDPremiumSurcharge;
   getPartDPlanPartDDeductible_MA=body.partDPlanMap[emailKey][0].partDPlanRecommendation.deductible;
   getPartDPlanTotalPrescriptionCost_MA=body.partDPlanMap[emailKey][0].partDPlanRecommendation.totalPrescriptionCost;
   consistency.SetMedicareBackBtn();
   cy.wait(5000)
   consistency.SetPartDSurcharge().then((PartDSurcharge)=>{
    SharedPartDSurcharge_MA=PartDSurcharge;
   });
   cy.wait(1000)
   consistency.SetPartBSurcharge().then((PartBSurcharge)=>{
    SharedPartBSurcharge_MA=PartBSurcharge;
   });
   console.log(SharedPartBSurcharge_N);
   cy.wait(1000)
   consistency.SetMedigapOOP().then((MedigapOOP)=>{
     SharedMedigapOOP_MA=MedigapOOP;
    });
   cy.wait(1000)
   consistency.SetPartDDeductible().then((PartDDeductible)=>{
    SharedPartDDeductible_MA=PartDDeductible;
    });
   cy.wait(1000)
   consistency.SetPartDPlanTotalPrescriptionCost().then((PartDPlanTotalPrescriptionCost)=>{
    SharedPartDPlanTotalPrescriptionCost_MA=PartDPlanTotalPrescriptionCost;
     });
   cy.wait(1000)
    })*/
 })
 
 })

it("TC_PDP_CONS_MA_08:Verify that LongTerm Care Expense value and LongTerm Care Present value on view page are identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page respectively.",()=>{
 PlanMA(testData);
 cy.wait(1000)
   medicarepage.clickmedicare();
   cy.wait(1000)
  medicarepage.clickbackbtn();
  cy.wait(1000)
  longtermpage.clickLongtermBtn(); 
  cy.wait(2000);
  consistency.setAivanteLogo();
  cy.wait(10000);
  cy.url().should('eql','http://169.61.105.110/medicareAdvantage_sandbox/landing-page');   
  cy.wait(1000);
  landingpage.viewGreyEyeRecomendationClick();
  cy.wait(10000);
  consistency.setLongtermCareExpenseViewPage().then((LongtermCareExpenseViewPage)=>{
    consistency.setLongtermCarePresentValueViewPage().then((LongtermCarePresentValueViewPage)=>{
      consistency.setLongTermBtn()
      cy.wait(2000)
      consistency.setLongTermTotalPresentValueExpenses().then((LongTermTotalPresentValueExpenses)=>{
        consistency.setLongTermTotalFutureValueExpenses().then((LongTermTotalFutureValueExpenses)=>{
            expect(LongtermCareExpenseViewPage).to.eql(LongTermTotalFutureValueExpenses);
            expect(LongtermCarePresentValueViewPage).to.eql(LongTermTotalPresentValueExpenses);
        })
      })  
    })
 })

})


})



/*

describe("Consistency test with api",()=>{


beforeEach(function () {
    const testId = this.currentTest.title;
   
    cy.readFile(consistency_dependency_file).then((fileContent)=>{
      csvToJson.fieldDelimiter(',');
       jsonOutput = csvToJson.csvStringToJson(fileContent);
    
    const row = jsonOutput.find(r =>testId.includes(r.Test_id));
    if (row && row.dependency) {
      const depRow = jsonOutput.find(r => r.Test_id === row.dependency);

      if (depRow && (depRow.Status === 'Not executed' || depRow.Status === 'fail')) {
        row.Status = 'Can_not_execute';
        this.skip(); // skip dynamically
      }
    }
  })
  });


afterEach(function () {
  const testId = this.currentTest.title.split(':')[0].trim();
  const status = this.currentTest.state === 'passed' ? 'pass' : 'fail';

  cy.log(`Updating CSV for Test ID: ${testId} with status: ${status}`);

  // Add a small wait to avoid race condition on fast test runs
  cy.wait(200);

  cy.readFile(consistency_dependency_file, 'utf8').then((fileContent) => {
    csvToJson.fieldDelimiter(',');
    let jsonOutput = csvToJson.csvStringToJson(fileContent);

    // Trim both sides to ensure exact match
    const row = jsonOutput.find(r => r.Test_id.trim() === testId);
    if (row) {
      row.Status = status;
      cy.log(`✅ Status updated for ${testId} -> ${status}`);
    } else {
      cy.log(`⚠️ No matching Test_id found for: ${testId}`);
    }

    // Convert updated JSON back to CSV
    const csv = [
      Object.keys(jsonOutput[0]).join(","),
      ...jsonOutput.map(obj => Object.values(obj).join(","))
    ].join("\n");

    cy.writeFile(consistency_dependency_file, csv);
  });

  // Extra wait to ensure file write completes before next test
  cy.wait(100);
});



it("TC_PDP_CONS_API_PDP/G_01:Verify that PDP+G+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
        
   expect(MedicareR5TotalExpense_G).to.eql(Number(SharedABDG_TotalExpences.replace(/\$|,/g, '').trim())) 
  
} )


it("TC_PDP_CONS_API_PDP/G_03:Verify that all profile details on Medicare page e.g. ,Life Expectancy,Tax Filing Status matches with the profile data in the MedicareR5 api response body.",()=>{
  expect(MedicareR5LifeExpectancy_G).to.eql(Number(SharedLifeExpectancy_G.replace(/\$|,/g, '').trim()));
  expect (MedicareR5TaxFilingStatus_G.toLowerCase()).to.include(SharedTaxFilingStatus_G.trim().toLowerCase());
})

it("TC_PDP_CONS_API_PDP/G_04:Verify that PartD and Medigap Plan G Expences on view page are equal to the getPartDPlan api response body",()=>{
 expect(getPartDPlanPartBPremiumSurcharge_G).to.eql(Number(SharedPartBSurcharge_G.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanMedigapOOP_G).to.eql(Number(SharedMedigapOOP_G.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanPartDPremiumSurcharge_G).to.eql(Number(SharedPartDSurcharge_G.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanPartDDeductible_G).to.eql(Number(SharedPartDDeductible_G.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanTotalPrescriptionCost_G).to.eql(Number(SharedPartDPlanTotalPrescriptionCost_G.replace(/\$|,/g,'').trim()));

})

it("TC_PDP_CONS_API_PDP/N_01:Verify that PDP+G+Concierge Total Expences under lifetime medicare projection matches with Total Expences in MedicareR5 api response body.",()=>{
expect(MedicareR5TotalExpense_N).to.eql(Number(SharedABDN_TotalExpences.replace(/\$|,/g, '').trim())) 
  
})

it("TC_PDP_CONS_API_PDP/N_03:Verify that all profile details on Medicare page e.g. ,Life Expectancy,Tax Filing Status matches with the profile data in the MedicareR5 api response body.",()=>{
  expect(MedicareR5LifeExpectancy_N).to.eql(Number(SharedLifeExpectancy_N.replace(/\$|,/g, '').trim()));
  expect (MedicareR5TaxFilingStatus_N.toLowerCase()).to.include(SharedTaxFilingStatus_N.trim().toLowerCase());
})

it("TC_PDP_CONS_API_PDP/N_04:Verify that PartD and Medigap Plan N Expences on view page are equal to the getPartDPlan api response body",()=>{
 expect(getPartDPlanPartBPremiumSurcharge_N).to.eql(Number(SharedPartBSurcharge_N.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanMedigapOOP_N).to.eql(Number(SharedMedigapOOP_N.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanPartDPremiumSurcharge_N).to.eql(Number(SharedPartDSurcharge_N.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanPartDDeductible_N).to.eql(Number(SharedPartDDeductible_N.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanTotalPrescriptionCost_N).to.eql(Number(SharedPartDPlanTotalPrescriptionCost_N.replace(/\$|,/g,'').trim()));

})

it("TC_PDP_CONS_API_PDP/HDG_01:Verify that PDP+G+Concierge Total Expences under lifetime medicare projection matches with Total Expences in MedicareR5 api response body.",()=>{
expect(MedicareR5TotalExpense_HDG).to.eql(Number(SharedABDHDG_TotalExpences.replace(/\$|,/g, '').trim())); 
  
})

it("TC_PDP_CONS_API_PDP/HDG_03:Verify that all profile details on Medicare page e.g. ,Life Expectancy,Tax Filing Status matches with the profile data in the MedicareR5 api response body.",()=>{
  expect(MedicareR5LifeExpectancy_HDG).to.eql(Number(SharedLifeExpectancy_HDG.replace(/\$|,/g, '').trim()));
  expect (MedicareR5TaxFilingStatus_HDG.toLowerCase()).to.include(SharedTaxFilingStatus_HDG.trim().toLowerCase());
})

it("TC_PDP_CONS_API_PDP/HDG_04:Verify that PartD and Medigap Plan HDG Expences on view page are equal to the getPartDPlan api response body",()=>{
 expect(getPartDPlanPartBPremiumSurcharge_HDG).to.eql(Number(SharedPartBSurcharge_HDG.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanMedigapOOP_HDG).to.eql(Number(SharedMedigapOOP_HDG.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanPartDPremiumSurcharge_HDG).to.eql(Number(SharedPartDSurcharge_HDG.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanPartDDeductible_HDG).to.eql(Number(SharedPartDDeductible_HDG.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanTotalPrescriptionCost_HDG).to.eql(Number(SharedPartDPlanTotalPrescriptionCost_HDG.replace(/\$|,/g,'').trim()));

})


it("TC_PDP_CONS_API_MA_01:Verify that MA Total Expences under lifetime medicare projection matches with Total Expences in MedicareR5 api response body.",()=>{
expect(MedicareR5TotalExpense_MA).to.eql(Number(SharedABDMA_TotalExpences.replace(/\$|,/g, '').trim())); 
  
})

it("TC_PDP_CONS_API_MA_03:Verify that all profile details on Medicare page e.g. ,Life Expectancy,Tax Filing Status matches with the profile data in the MedicareR5 api response body.",()=>{
  expect(MedicareR5LifeExpectancy_MA).to.eql(Number(SharedLifeExpectancy_MA.replace(/\$|,/g, '').trim()));
  expect (MedicareR5TaxFilingStatus_MA.toLowerCase()).to.include(SharedTaxFilingStatus_MA.trim().toLowerCase());
})

it("TC_PDP_CONS_API_MA_04:Verify that MA plan Expences on view page are equal to the getPartDPlan api response body",()=>{
 expect(getPartDPlanPartBPremiumSurcharge_MA).to.eql(Number(SharedPartBSurcharge_MA.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanMedigapOOP_MA).to.eql(Number(SharedMedigapOOP_MA.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanPartDPremiumSurcharge_MA).to.eql(Number(SharedPartDSurcharge_MA.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanPartDDeductible_MA).to.eql(Number(SharedPartDDeductible_MA.replace(/\$|,/g,'').trim()));
 expect(getPartDPlanTotalPrescriptionCost_MA).to.eql(Number(SharedPartDPlanTotalPrescriptionCost_MA.replace(/\$|,/g,'').trim()));

})


})


*/
