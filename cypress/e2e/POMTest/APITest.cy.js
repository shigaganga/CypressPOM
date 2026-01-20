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

describe('API Test', () => {

    let testData = null;
const planselectionpage= new PlanselectionPage();
const medicarepage = new MedicarePage();
const consistency=new Consistency();
const longtermpage= new LongTermPage();
const landingpage = new LandingPage();
/*afterEach(function(){
  const testId=this.currentTest.title;
  const status=this.currentTest.state==='passed'?'pass':'fail';

  cy.readFile(consistency_dependency_file).then((fileContent)=>{
      csvToJson.fieldDelimiter(',');
       jsonOutput = csvToJson.csvStringToJson(fileContent);
    })
  const row = jsonOutput.find(r =>testId.includes(r.Test_id));
    if (row) {
      row.Status = status;
      console.log(row.Status)
    }

    // Convert updated JSON back to CSV
     const csv = [
    Object.keys(jsonOutput[0]).join(","), // header
    ...jsonOutput.map(obj => Object.values(obj).join(","))
  ].join("\n");

    // Write updated CSV back
    cy.writeFile(consistency_dependency_file, csv);
  });*/


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
    /*cy.readFile(consistency_dependency_file).then((fileContent)=>{
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

    it("TC_PDP_API_PDP/G_01:Verify that PDP+G+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.", () => {
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
     cy.wait('@medicareR5').then((interception)=>{
        expect(interception.response.statusCode).to.eq(200);
        let MedicareR5TotalExpense_G=interception.response.body.lifeTimeABGDExpenses;
        expect(MedicareR5TotalExpense_G).to.eql(Number(ABDG_TotalExpences.replace(/\$|,/g, '').trim()))
      })
    });
  });
    })



    it("TC_PDP_API_PDP/G_03:Verify that all profile details on Medicare page e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
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
 cy.wait('@medicareR5').then((interception)=>{
  expect(interception.response.statusCode).to.eq(200);
  consistency.setLifeExpectancy().then((LifeExpectancy)=>{
    expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  let MedicareR5LifeExpectancy_G=interception.response.body.lifeExpectancy;
  expect(MedicareR5LifeExpectancy_G).to.eql(Number(LifeExpectancy.replace(/\$|,/g, '').trim()));
  
  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
   let MedicareR5TaxFilingStatus_G=interception.response.body.taxFilingStatus;
    
    expect (MedicareR5TaxFilingStatus_G.toLowerCase()).to.include(TaxFilingStatus.trim().toLowerCase());
    
 
  });
 })

})


it("TC_PDP_API_PDP/G_04:Verify that Health Care Expense value and Health Care Present value on view page identical with ABD+G+Concirge charges and P.V as of year on medicare page respectively.",()=>{
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
    cy.wait('@getPartDPlan').then((interception)=>{
   expect(interception.response.statusCode).to.eq(200);
   const body=interception.response.body;
   const emailKey = Object.keys(body.partDPlanMap)[0];
   let getPartDPlanPartBPremiumSurcharge_G = body.partDPlanMap[emailKey][0].medigapQuote.partBPremiumSurcharge;
   let getPartDPlanMedigapOOP_G=body.partDPlanMap[emailKey][0].medigapQuote.medigapOOP
   let getPartDPlanPartDPremiumSurcharge_G=body.partDPlanMap[emailKey][0].partDPremiumSurcharge;
   let getPartDPlanPartDDeductible_G=body.partDPlanMap[emailKey][0].partDPlanRecommendation.deductible;
   let getPartDPlanTotalPrescriptionCost_G=body.partDPlanMap[emailKey][0].partDPlanRecommendation.totalPrescriptionCost;
   consistency.SetMedicareBackBtn();
   cy.wait(5000)
   consistency.SetPartDSurcharge().then((PartDSurcharge)=>{
    let SharedPartDSurcharge_G=PartDSurcharge;
    expect(getPartDPlanPartDPremiumSurcharge_G).to.eql(Number(SharedPartDSurcharge_G.replace(/\$|,/g,'').trim()));
   });
   cy.wait(1000)
   consistency.SetPartBSurcharge().then((PartBSurcharge)=>{
   let SharedPartBSurcharge_G=PartBSurcharge;
    expect(getPartDPlanPartBPremiumSurcharge_G).to.eql(Number(SharedPartBSurcharge_G.replace(/\$|,/g,'').trim()));
   });
   console.log(SharedPartBSurcharge_G);
   cy.wait(1000)
   consistency.SetMedigapOOP().then((MedigapOOP)=>{
    let SharedMedigapOOP_G=MedigapOOP;
    expect(getPartDPlanMedigapOOP_G).to.eql(Number(SharedMedigapOOP_G.replace(/\$|,/g,'').trim()));
   });
   cy.wait(1000)
   consistency.SetPartDDeductible().then((PartDDeductible)=>{
   let SharedPartDDeductible_G=PartDDeductible;
    expect(getPartDPlanPartDDeductible_G).to.eql(Number(SharedPartDDeductible_G.replace(/\$|,/g,'').trim()));
   });
   cy.wait(1000)
   consistency.SetPartDPlanTotalPrescriptionCost().then((PartDPlanTotalPrescriptionCost)=>{
   let SharedPartDPlanTotalPrescriptionCost_G=PartDPlanTotalPrescriptionCost;
    expect(getPartDPlanTotalPrescriptionCost_G).to.eql(Number(SharedPartDPlanTotalPrescriptionCost_G.replace(/\$|,/g,'').trim()));
   });
   cy.wait(1000)
    })
 })
 
 })


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

it("TC_PDP_API_PDP/N_01:Verify that ABD+N+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
  cy.intercept('POST','**/individualMedicareR5').as('medicareR5');  
  PDPandPlanN(testData);
    cy.wait(1000)
    medicarepage.clickmedicare();
    cy.wait(1000)
  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
      let SharedABDN_TotalExpences=ABDG_TotalExpences;
     cy.wait('@medicareR5').then((interception)=>{
        expect(interception.response.statusCode).to.eq(200);
        let MedicareR5TotalExpense_N=interception.response.body.lifeTimeABNDExpenses;
       expect(MedicareR5TotalExpense_N).to.eql(Number(SharedABDN_TotalExpences.replace(/\$|,/g, '').trim())) 
      })
    });
  });
})

it("TC_PDP_API_PDP/N_03:Verify that all prifile details e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
 cy.intercept('POST','**/individualMedicareR5').as('medicareR5');  
  PDPandPlanN(testData);
cy.wait(1000)
medicarepage.clickmedicare();
cy.wait(1000)
cy.wait('@medicareR5').then((interception)=>{
   expect(interception.response.statusCode).to.eq(200);
consistency.setLifeExpectancy().then((LifeExpectancy)=>{
expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
 let MedicareR5LifeExpectancy_N=interception.response.body.lifeExpectancy;
  let SharedLifeExpectancy_N=LifeExpectancy;
  expect(MedicareR5LifeExpectancy_N).to.eql(Number(SharedLifeExpectancy_N.replace(/\$|,/g, '').trim()));
  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())

   let MedicareR5TaxFilingStatus_N=interception.response.body.taxFilingStatus;
   let SharedTaxFilingStatus_N=TaxFilingStatus;
   expect (MedicareR5TaxFilingStatus_N.toLowerCase()).to.include(SharedTaxFilingStatus_N.trim().toLowerCase());
  });
})
})

it("TC_PDP_API_PDP/N_04:Verify that Health Care Expense value and Health Care Present value on view page identical with ABD+N+Concirge charges and P.V as of year on medicare page respectively.",()=>{
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

    cy.wait('@getPartDPlan').then((interception)=>{
   expect(interception.response.statusCode).to.eq(200);
   const body=interception.response.body;
   const emailKey = Object.keys(body.partDPlanMap)[0];
   let getPartDPlanPartBPremiumSurcharge_N = body.partDPlanMap[emailKey][0].medigapQuote.partBPremiumSurcharge;
   let getPartDPlanMedigapOOP_N=body.partDPlanMap[emailKey][0].medigapQuote.medigapOOP
   let getPartDPlanPartDPremiumSurcharge_N=body.partDPlanMap[emailKey][0].partDPremiumSurcharge;
   let getPartDPlanPartDDeductible_N=body.partDPlanMap[emailKey][0].partDPlanRecommendation.deductible;
   let getPartDPlanTotalPrescriptionCost_N=body.partDPlanMap[emailKey][0].partDPlanRecommendation.totalPrescriptionCost;
   consistency.SetMedicareBackBtn();
   cy.wait(5000)
   consistency.SetPartDSurcharge().then((PartDSurcharge)=>{
   let SharedPartDSurcharge_N=PartDSurcharge;
   expect(getPartDPlanPartDPremiumSurcharge_N).to.eql(Number(SharedPartDSurcharge_N.replace(/\$|,/g,'').trim()));
   });
   cy.wait(1000)
   consistency.SetPartBSurcharge().then((PartBSurcharge)=>{
    let SharedPartBSurcharge_N=PartBSurcharge;
    expect(getPartDPlanPartBPremiumSurcharge_N).to.eql(Number(SharedPartBSurcharge_N.replace(/\$|,/g,'').trim()));
   });
   console.log(SharedPartBSurcharge_N);
   cy.wait(1000)
   consistency.SetMedigapOOP().then((MedigapOOP)=>{
     let SharedMedigapOOP_N=MedigapOOP;
     expect(getPartDPlanMedigapOOP_N).to.eql(Number(SharedMedigapOOP_N.replace(/\$|,/g,'').trim()));
    });
   cy.wait(1000)
   consistency.SetPartDDeductible().then((PartDDeductible)=>{
    let SharedPartDDeductible_N=PartDDeductible;
    expect(getPartDPlanPartDDeductible_N).to.eql(Number(SharedPartDDeductible_N.replace(/\$|,/g,'').trim()));
    });
   cy.wait(1000)
   consistency.SetPartDPlanTotalPrescriptionCost().then((PartDPlanTotalPrescriptionCost)=>{
   let SharedPartDPlanTotalPrescriptionCost_N=PartDPlanTotalPrescriptionCost;
   expect(getPartDPlanTotalPrescriptionCost_N).to.eql(Number(SharedPartDPlanTotalPrescriptionCost_N.replace(/\$|,/g,'').trim()));
     });
   cy.wait(1000)
    })
 })
 
 })
 

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



it("TC_PDP_API_PDP/HDG_01:Verify that ABD+HDG+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
   cy.intercept('POST','**/individualMedicareR5').as('medicareR5');  
  PDPandPlanHDG(testData);
    cy.wait(1000)
    medicarepage.clickmedicare();
    cy.wait(1000)
  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
      let SharedABDHDG_TotalExpences=ABDG_TotalExpences;
      cy.wait('@medicareR5').then((interception)=>{
        expect(interception.response.statusCode).to.eq(200);
         let MedicareR5TotalExpense_HDG=interception.response.body.lifeTimeABGDExpenses;
         expect(MedicareR5TotalExpense_HDG).to.eql(Number(SharedABDHDG_TotalExpences.replace(/\$|,/g, '').trim())); 
    });
  });
})
})

it("TC_PDP_API_PDP/HDG_03:Verify that all prifile details e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
cy.intercept('POST','**/individualMedicareR5').as('medicareR5');
  PDPandPlanHDG(testData);
cy.wait(1000)
medicarepage.clickmedicare();
cy.wait(1000)
cy.wait('@medicareR5').then((interception)=>{
  expect(interception.response.statusCode).to.eq(200);
  consistency.setLifeExpectancy().then((LifeExpectancy)=>{
  expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  let MedicareR5LifeExpectancy_HDG=interception.response.body.lifeExpectancy;
  let SharedLifeExpectancy_HDG=LifeExpectancy;
  expect(MedicareR5LifeExpectancy_HDG).to.eql(Number(SharedLifeExpectancy_HDG.replace(/\$|,/g, '').trim()));

  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
    let MedicareR5TaxFilingStatus_HDG=interception.response.body.taxFilingStatus;
    let SharedTaxFilingStatus_HDG=TaxFilingStatus;
    expect (MedicareR5TaxFilingStatus_HDG.toLowerCase()).to.include(SharedTaxFilingStatus_HDG.trim().toLowerCase());
  });
})

})


it("TC_PDP_API_PDP/HDG_04:Verify that Health Care Expense value and Health Care Present value on view page identical with ABD+N+Concirge charges and P.V as of year on medicare page respectively.",()=>{
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
 cy.wait('@getPartDPlan').then((interception)=>{
   expect(interception.response.statusCode).to.eq(200);
   const body=interception.response.body;
   const emailKey = Object.keys(body.partDPlanMap)[0];
   let getPartDPlanPartBPremiumSurcharge_HDG = body.partDPlanMap[emailKey][0].medigapQuote.partBPremiumSurcharge;
   let getPartDPlanMedigapOOP_HDG=body.partDPlanMap[emailKey][0].medigapQuote.medigapOOP
   let getPartDPlanPartDPremiumSurcharge_HDG=body.partDPlanMap[emailKey][0].partDPremiumSurcharge;
   let getPartDPlanPartDDeductible_HDG=body.partDPlanMap[emailKey][0].partDPlanRecommendation.deductible;
   let getPartDPlanTotalPrescriptionCost_HDG=body.partDPlanMap[emailKey][0].partDPlanRecommendation.totalPrescriptionCost;
   consistency.SetMedicareBackBtn();
   cy.wait(5000)
   consistency.SetPartDSurcharge().then((PartDSurcharge)=>{
    let SharedPartDSurcharge_HDG=PartDSurcharge;
    expect(getPartDPlanPartDPremiumSurcharge_HDG).to.eql(Number(SharedPartDSurcharge_HDG.replace(/\$|,/g,'').trim()));
   });
   cy.wait(1000)
   consistency.SetPartBSurcharge().then((PartBSurcharge)=>{
    let SharedPartBSurcharge_HDG=PartBSurcharge;
    expect(getPartDPlanPartBPremiumSurcharge_HDG).to.eql(Number(SharedPartBSurcharge_HDG.replace(/\$|,/g,'').trim()));
   });
   console.log(SharedPartBSurcharge_HDG);
   cy.wait(1000)
   consistency.SetMedigapOOP().then((MedigapOOP)=>{
     let SharedMedigapOOP_HDG=MedigapOOP;
     expect(getPartDPlanMedigapOOP_HDG).to.eql(Number(SharedMedigapOOP_HDG.replace(/\$|,/g,'').trim()));
    });
   cy.wait(1000)
   consistency.SetPartDDeductible().then((PartDDeductible)=>{
    let SharedPartDDeductible_HDG=PartDDeductible;
    expect(getPartDPlanPartDDeductible_HDG).to.eql(Number(SharedPartDDeductible_HDG.replace(/\$|,/g,'').trim()));
    });
   cy.wait(1000)
   consistency.SetPartDPlanTotalPrescriptionCost().then((PartDPlanTotalPrescriptionCost)=>{
    let SharedPartDPlanTotalPrescriptionCost_HDG=PartDPlanTotalPrescriptionCost;
    expect(getPartDPlanTotalPrescriptionCost_HDG).to.eql(Number(SharedPartDPlanTotalPrescriptionCost_HDG.replace(/\$|,/g,'').trim()));
     });
   cy.wait(1000)
    })
 })
 
 })
 
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

it("TC_PDP_API_MA_01:Verify that AB+MA+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
   cy.intercept('POST','**/individualMedicareR5').as('medicareR5');  
  PlanMA(testData);
    cy.wait(1000)
    medicarepage.clickmedicare();
    cy.wait(1000)
  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
      let SharedABDMA_TotalExpences=ABDG_TotalExpences;
      cy.wait('@medicareR5').then((interception)=>{
        expect(interception.response.statusCode).to.eq(200);
         let MedicareR5TotalExpense_MA=interception.response.body.lifeTimeABMedicareAdvantageExpenses;
         expect(MedicareR5TotalExpense_MA).to.eql(Number(SharedABDMA_TotalExpences.replace(/\$|,/g, '').trim())); 
    });
  });
})
})
it("TC_PDP_API_MA_03:Verify that all prifile details e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
cy.intercept('POST','**/individualMedicareR5').as('medicareR5');
  PlanMA(testData);
cy.wait(1000)
medicarepage.clickmedicare();
cy.wait(1000)
cy.wait('@medicareR5').then((interception)=>{
  expect(interception.response.statusCode).to.eq(200);
  consistency.setLifeExpectancy().then((LifeExpectancy)=>{
    expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  let MedicareR5LifeExpectancy_MA=interception.response.body.lifeExpectancy;
  let SharedLifeExpectancy_MA=LifeExpectancy;
  expect(MedicareR5LifeExpectancy_MA).to.eql(Number(SharedLifeExpectancy_MA.replace(/\$|,/g, '').trim()));

  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
   let MedicareR5TaxFilingStatus_MA=interception.response.body.taxFilingStatus;
   let SharedTaxFilingStatus_MA=TaxFilingStatus;
    expect (MedicareR5TaxFilingStatus_MA.toLowerCase()).to.include(SharedTaxFilingStatus_MA.trim().toLowerCase());
  });
})

})

it("TC_PDP_API_MA_04:Verify that Health Care Expense value and Health Care Present value on view page identical with AB+MA+Concirge charges and P.V as of year on medicare page respectively.",()=>{
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
 cy.wait('@getPartDPlan').then((interception)=>{
   expect(interception.response.statusCode).to.eq(200);
   const body=interception.response.body;
   const emailKey = Object.keys(body.partDPlanMap)[0];
   //getPartDPlanPartBPremiumSurcharge_MA = body.partDPlanMap[emailKey][0].medigapQuote.partBPremiumSurcharge;
   let getPartDPlanPartBPremiumSurcharge_MA = body.partDPlanMap[emailKey][0].partBPremiumSurcharge;
  //let getPartDPlanMedigapOOP_MA=body.partDPlanMap[emailKey][0].medigapQuote.medigapOOP
   let getPartDPlanPartDPremiumSurcharge_MA=body.partDPlanMap[emailKey][0].partDPremiumSurcharge;
   let TotalSurcharge=getPartDPlanPartBPremiumSurcharge_MA+getPartDPlanPartDPremiumSurcharge_MA;
   let getPartDPlanDeductible_MA=body.partDPlanMap[emailKey][0].maPlanRecommendation.deductible;
   let getPartDPlanTotalPrescriptionCost_MA=body.partDPlanMap[emailKey][0].maPlanRecommendation.totalPrescriptionCost;
   consistency.SetMedicareBackBtn();
   cy.wait(5000)
   consistency.SetPartBDSurcharge().then((PartBDSurcharge)=>{
    let SharedPartBDSurcharge_MA=PartBDSurcharge;
    expect(TotalSurcharge).to.eql(Number(SharedPartBDSurcharge_MA.replace(/\$|,/g,'').trim()));
   });
   cy.wait(1000)
   

   consistency.SetPartDDeductible().then((PartDDeductible)=>{
   let SharedPartDDeductible_MA=PartDDeductible;
   expect(getPartDPlanDeductible_MA).to.eql(Number(SharedPartDDeductible_MA.replace(/\$|,/g,'').trim()));
    });
   cy.wait(1000)
   consistency.SetPartDPlanTotalPrescriptionCost().then((PartDPlanTotalPrescriptionCost)=>{
    let SharedPartDPlanTotalPrescriptionCost_MA=PartDPlanTotalPrescriptionCost;
    expect(getPartDPlanTotalPrescriptionCost_MA).to.eql(Number(SharedPartDPlanTotalPrescriptionCost_MA.replace(/\$|,/g,'').trim()));
     });
   cy.wait(1000)
    })
 })
 
 })



})
