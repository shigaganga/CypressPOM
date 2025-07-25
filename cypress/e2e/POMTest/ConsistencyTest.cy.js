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


describe('PlanselectionPDP Test', () => {

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

    const pharmacypg = new PharmacyPage();
    beforeEach(() => {
cy.intercept('POST', '**/createPartDPlan').as('createProfile');
        cy.session("PDP session",()=>{
      // cy.intercept('POST', '**/createPartDPlan').as('createProfile');
  
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
  planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  planselectionpage.donePlanSelectionClick();

 //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
 planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();

  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond();
  medicarepage.clickmedicare();

  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
    });
  });
});

it("TC_PDP_CONS_PDP/G_03:Verify that all profile details on Medicare page e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  planselectionpage.donePlanSelectionClick();
cy.wait(2000);
  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();

  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond();
  medicarepage.clickmedicare();

  consistency.setLifeExpectancy().then((LifeExpectancy)=>{
    expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
  });


})


it("TC_PDP_CONS_PDP/G_04:Verify that Total Present Value Expences under Long Term Care Expences Projection is equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care",()=>{
   planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  planselectionpage.donePlanSelectionClick();

  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();

  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond(); 
  longtermpage.clickLongtermBtn();
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
  planselectionpage.donePlanSelectionClick();

  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();

  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond(); 
  longtermpage.clickLongtermBtn();
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
  planselectionpage.donePlanSelectionClick();

  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();

  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond(); 
  longtermpage.clickLongtermBtn();
  consistency.setLTCHealthProfile().then((LTCHealthProfile)=>{
    expect(LTCHealthProfile).to.eql(testData.healthProfile)
  });
  consistency.setLTCLifeExpectancy().then((LTCLifeExpectancy)=>{
    expect(LTCLifeExpectancy).to.eql(testData.lifeExpectancy)
  });
  

})

it("TC_PDP_CONS_PDP/G_07:Verify that Health Care Expense value and Health Care Present value on view page identical with ABD+G+Concirge charges and P.V as of year on medicare page respectively.",()=>{
    planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  planselectionpage.donePlanSelectionClick();

  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();

  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond(); 
  medicarepage.clickmedicare();
  medicarepage.clickbackbtn();
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
 })
 

})


it("TC_PDP_CONS_PDP/G_08:Verify that LongTerm Care Expense value and LongTerm Care Present value on view page are identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page respectively.",()=>{
  planselectionpage.setSupplementButtn();
  cy.wait(10000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/SUPPLEMENT');
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.supplimentPlanG1);
  planselectionpage.donePlanSelectionClick();

 // cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
 planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();

  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond(); 
  medicarepage.clickmedicare();
  cy.wait(2000)
  medicarepage.clickbackbtn();
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

  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();

  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond();  
} 

it("TC_PDP_CONS_PDP/N_01:Verify that ABD+N+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
    PDPandPlanN(testData);
    medicarepage.clickmedicare();

  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
    });
  });
})

it("TC_PDP_CONS_PDP/N_03:Verify that all prifile details e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
PDPandPlanN(testData);
medicarepage.clickmedicare();
consistency.setLifeExpectancy().then((LifeExpectancy)=>{
    expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
  });

})


it("TC_PDP_CONS_PDP/N_04:Verify that Total Present Value Expences under Long Term Care Expences Projection is equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care",()=>{
    PDPandPlanN(testData);
    longtermpage.clickLongtermBtn();
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
   longtermpage.clickLongtermBtn(); 
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
   longtermpage.clickLongtermBtn(); 

   consistency.setLTCHealthProfile().then((LTCHealthProfile)=>{
    expect(LTCHealthProfile).to.eql(testData.healthProfile)
  });
  consistency.setLTCLifeExpectancy().then((LTCLifeExpectancy)=>{
    expect(LTCLifeExpectancy).to.eql(testData.lifeExpectancy)
  });
  
})

it("TC_PDP_CONS_PDP/N_07:Verify that Health Care Expense value and Health Care Present value on view page identical with ABD+N+Concirge charges and P.V as of year on medicare page respectively.",()=>{
    PDPandPlanN(testData);
   medicarepage.clickmedicare();
  medicarepage.clickbackbtn();
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
 })
 
})

it("TC_PDP_CONS_PDP/N_08:Verify that LongTerm Care Expense value and LongTerm Care Present value on view page are identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page respectively.",()=>{
 PDPandPlanN(testData);
   medicarepage.clickmedicare();
  medicarepage.clickbackbtn();
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
  planselectionpage.donePlanSelectionClick();

  //cy.xpath("//span[normalize-space()='PDP']", { timeout: 1000 }).click({ force: true });
  planselectionpage.setPDPButtn();
  cy.wait(5000);
  cy.url().should('eq', 'http://169.61.105.110/medicareAdvantage_sandbox/plan-selection/plan-list/PDP');
  cy.wait(10000);
  planselectionpage.setPlanSelectionCheckBoxByPlanName(testData.PDPPlan1);
  planselectionpage.donePlanSelectionClick();

  consistency.setPlanSelectCheckboxFirst();
  consistency.setPlanSelectCheckboxSecond();  
} 



it("TC_PDP_CONS_PDP/HDG_01:Verify that ABD+HDG+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
    PDPandPlanHDG(testData);
    medicarepage.clickmedicare();

  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
    });
  });
})

it("TC_PDP_CONS_PDP/HDG_03:Verify that all prifile details e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
PDPandPlanHDG(testData);
medicarepage.clickmedicare();
consistency.setLifeExpectancy().then((LifeExpectancy)=>{
    expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
  });

})


it("TC_PDP_CONS_PDP/HDG_04:Verify that Total Present Value Expences under Long Term Care Expences Projection is equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care",()=>{
    PDPandPlanHDG(testData);
    longtermpage.clickLongtermBtn();
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
   longtermpage.clickLongtermBtn(); 
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
   longtermpage.clickLongtermBtn(); 

   consistency.setLTCHealthProfile().then((LTCHealthProfile)=>{
    expect(LTCHealthProfile).to.eql(testData.healthProfile)
  });
  consistency.setLTCLifeExpectancy().then((LTCLifeExpectancy)=>{
    expect(LTCLifeExpectancy).to.eql(testData.lifeExpectancy)
  });
  
})

it("TC_PDP_CONS_PDP/HDG_07:Verify that Health Care Expense value and Health Care Present value on view page identical with ABD+N+Concirge charges and P.V as of year on medicare page respectively.",()=>{
    PDPandPlanHDG(testData);
   medicarepage.clickmedicare();
  medicarepage.clickbackbtn();
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
 })
 
})

it("TC_PDP_CONS_PDP/HDG_08:Verify that LongTerm Care Expense value and LongTerm Care Present value on view page are identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page respectively.",()=>{
 PDPandPlanHDG(testData);
   medicarepage.clickmedicare();
  medicarepage.clickbackbtn();
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
  planselectionpage.donePlanSelectionClick();
  cy.wait(2000);
  consistency.setPlanSelectCheckboxMA();
   
} 

it("TC_PDP_CONS_MA_01:Verify that AB+MA+Concierge Total Expences under lifetime medicare projection matches with Total Expences under Lifetime Expences.",()=>{
    PlanMA(testData);
    medicarepage.clickmedicare();

  consistency.setABDGTotalExpences().then((ABDG_TotalExpences) => {
    consistency.setLifeTimeTotalExpences().then((LifeTimeTotalExpences) => {
      expect(ABDG_TotalExpences).to.eql(LifeTimeTotalExpences);
    });
  });
})

it("TC_PDP_CONS_MA_03:Verify that all prifile details e.g. Age,Retierment Age,Life Expectancy,Health profile,Income during medicare,Tax Filing Status matches with the profile data entered on profile page while creating the plan.",()=>{
PlanMA(testData);
medicarepage.clickmedicare();
consistency.setLifeExpectancy().then((LifeExpectancy)=>{
    expect(LifeExpectancy).to.eql(testData.lifeExpectancy)
  });

  consistency.setHealthProfile().then((HealthProfile)=>{
    expect(HealthProfile).to.eql(testData.healthProfile)
  });

  consistency.setTaxFilingStatus().then((TaxFilingStatus)=>{
    expect(TaxFilingStatus.toLowerCase()).to.eql(testData.taxFilingStatus.toLowerCase())
  });

})


it("TC_PDP_CONS_MA_04:Verify that Total Present Value Expences under Long Term Care Expences Projection is equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care",()=>{
    PlanMA(testData);
    longtermpage.clickLongtermBtn();
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
   longtermpage.clickLongtermBtn(); 
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
   longtermpage.clickLongtermBtn(); 

   consistency.setLTCHealthProfile().then((LTCHealthProfile)=>{
    expect(LTCHealthProfile).to.eql(testData.healthProfile)
  });
  consistency.setLTCLifeExpectancy().then((LTCLifeExpectancy)=>{
    expect(LTCLifeExpectancy).to.eql(testData.lifeExpectancy)
  });
  
})

it("TC_PDP_CONS_MA_07:Verify that Health Care Expense value and Health Care Present value on view page identical with AB+MA+Concirge charges and P.V as of year on medicare page respectively.",()=>{
    PlanMA(testData);
   medicarepage.clickmedicare();
  medicarepage.clickbackbtn();
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
 })
 
})

it("TC_PDP_CONS_MA_08:Verify that LongTerm Care Expense value and LongTerm Care Present value on view page are identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page respectively.",()=>{
 PlanMA(testData);
   medicarepage.clickmedicare();
  medicarepage.clickbackbtn();
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


