import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import LongTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import MedicarePage from '../pages/MedicarePage.js';

function generateRandomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
}

describe("Automate consistency test cases for PDP/Supplimment plans",()=>{

    let testData;
    let email;
    const medicarepage = new MedicarePage();
    before(()=>{
        cy.task('csv:parseFromDropbox').then((data) => {
            testData = data[0];
        })
        const randomString = generateRandomString(10); // Generates a 10-character random string            
        email = "PDPRecom1_"+randomString+'@gmail.com';
        email= Cypress.env("recom_email", email);
    })

    const lPage = new LoginPage();
    const recPage = new LandingPage();
    const homepage = new HomePage();
    const prefPage = new PreferencePage();
    const prescriptionpage=new PrescriptionPage();
    const pharmacypage=new PharmacyPage();
         
    beforeEach("Login to Medicare Page",()=>{
        cy.session("Medicare Page",()=>{
            cy.log("beforeEach started for:", Cypress.currentTest.title);
            cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage");
            cy.wait(500);
     
            lPage.setUserName(testData.username);
            lPage.setPassword(testData.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); 
            recPage.clickCreateRecommendation();
            cy.wait(500);
            // homepage.enterEmail(testData.email);
            //const randomString = generateRandomString(10); // Generates a 10-character random string            
            // email = "PDPRecom_"+randomString+'@gmail.com';
            email = Cypress.env("recom_email", email);
            homepage.enterEmail(email);
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
            cy.wait(4000);
            homepage.clickConciergeYes();
            cy.wait(4000);
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
            cy.wait(1000);                                           
        })    
        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/plan-selection");
    })

    it("TC-PDP-CONS-PDP/G-01_consistency_ ABD+G+Concierge Total Expences should match with Total Expences under Lifetime Expences",()=>{                
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickplanGsupplementBtn();
        medicarepage.clickPdpSupplementPlanChkbox();
        medicarepage.planselectdone();
        medicarepage.clickFinalSupplementPlanChkbox();
        medicarepage.clickmedicare();
        medicarepage.IsPDPTotalCTEAmntsEqual();
    })
    
    it("TC-PDP-CONS-PDP/G-02_consistency_ ABD+G+Concierge Total Expences should match with Total Expences under Lifetime Expences",()=>{                
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickplanGsupplementBtn();
        medicarepage.clickPdpSupplementPlanChkbox();
        medicarepage.planselectdone();
        medicarepage.clickFinalSupplementPlanChkbox();
        medicarepage.clickmedicare();
        medicarepage.IsPDPTotalConciergeAmntsEqual();
    })

    it("TC-PDP-CONS-PDP/G-03_consistency_profile data should be identical to the profile data entered while creating a plan",()=>{                              
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickplanGsupplementBtn();
        medicarepage.clickPdpSupplementPlanChkbox();
        medicarepage.planselectdone();
        medicarepage.clickFinalSupplementPlanChkbox();
        medicarepage.clickmedicare();
        medicarepage.profiledetailspdp();
        medicarepage.Gplantypemagitaxfstatus();
        
    })

    it("TC-PDP-CONS-PDP/G-04_consistency_Total Present Value Expenses under LongTerm Care Expenses should be equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care ",()=>{  
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickplanGsupplementBtn();
        medicarepage.clickPdpSupplementPlanChkbox();
        medicarepage.planselectdone();
        medicarepage.clickFinalSupplementPlanChkbox();
        medicarepage.clicklongtermbtn();
        
        medicarepage.getPresentValuesTotals().then((pvaldown) => {
            medicarepage.getPresentValuesTotals().then((pvalUp) => {
                const variance = pvaldown - pvalUp;         
                expect(Math.abs(variance)).to.be.lessThan(2);
            })
        });
    })

    it("TC-PDP-CONS-PDP/G-05_consistency_Total Future Value Expenses under Long Term Care Expenses should be equal to the addition of Future value Adult Day Care, In Home Care, Nursing Care",()=>{     
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        medicarepage.clickFinalSupplementPlanChkbox();
        medicarepage.clicklongtermbtn();    
      
        medicarepage.getFutureValueFromDown().then((pvaldown) => {
            medicarepage.getFutureValuesTotals().then((pvalUp) => {
                const variance = pvaldown - pvalUp;          
                expect(Math.abs(variance)).to.be.lessThan(2);
            })
        });
    })

    it("TC-PDP-CONS-PDP/G-06_consistency_longterm profile data should be identical to the profile data entered while creating a plan",()=>{                              
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        medicarepage.clickFinalSupplementPlanChkbox();
        medicarepage.clicklongtermbtn();    
        medicarepage.profiledetailspdp();
        
    })
    it("TC-PDP-CONS-PDP/G-07_consistency_Health Care Expense value and Health Care Present value on view page are identical",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        medicarepage.clickFinalSupplementPlanChkbox();
        medicarepage.clickmedicare();
        medicarepage.clickbackbtn();       
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        email = Cypress.env("recom_email");
        cy.wait(3000);
        medicarepage.searchRecommendationAndView(email);
        cy.wait(3000)

        // capture the health care expences from view recomm plan page
        cy.xpath(medicarepage.healtCareAmtFrom_View_exp)
        .invoke('text')
            .then((text) => {
                const valueA = Number(text.replace(/[^0-9.]/g, ""));
                cy.wrap(valueA).as('valueA');   // save to alias
             });

        // capture the health care Present Value from view recomm plan page
         cy.xpath(medicarepage.healtCareAmtFrom_View_pv)
        .invoke('text')
            .then((text) => {
                const pv_value = Number(text.replace(/[^0-9.]/g, ""));
                cy.wrap(pv_value).as('pv_value');   // save to alias
             });
         // Then navigate to Medicare page
         cy.xpath(medicarepage.clickmedicarebtnEle, { timeout: 50000 }).should('be.visible').click();
        
        // then compare the total expense vs total expences from medicare plan view page
        medicarepage.getTotalExpensesAmt().then((total_exp_amt) => {           
            cy.get('@valueA').then((valueA) => {
                const variance = valueA - total_exp_amt
                expect(variance).to.be.lessThan(2); 
              });
        });
        // then compare the present value vs present value total expences from medicare plan view page
        medicarepage.getPvAsOfYearAmt().then((total_pv_amt) => {           
            cy.get('@pv_value').then((valueA) => {
                const variance = valueA - total_pv_amt
                expect(variance).to.be.lessThan(2); 
              });
        });         
      
    })
    it("TC-PDP-CONS-PDP/G-08_consistency_LongTerm Care Expense value and LongTerm Care Present value on view page should be identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickplanGsupplementBtn();
        medicarepage.clickPdpSupplementPlanChkbox();
        medicarepage.planselectdone();
        medicarepage.clickFinalSupplementPlanChkbox();       
        medicarepage.clicklongtermbtn();  
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        email = Cypress.env("recom_email");
        cy.wait(3000);
        cy.log('received from env 08 test='+email)
        medicarepage.searchRecommendationAndView(email);
        cy.wait(3000)
        // capture the health care expences from view recomm plan page
       cy.xpath(medicarepage.longTermCare_View_exp)
       .invoke('text')
           .then((text) => {
               const valueA = Number(text.replace(/[^0-9.]/g, ""));
               cy.wrap(valueA).as('valueA');   // save to alias
            });

       // capture the health care Present Value from view recomm plan page
        cy.xpath(medicarepage.longTermCare_View_pv)
       .invoke('text')
           .then((text) => {
               const pv_value = Number(text.replace(/[^0-9.]/g, ""));
               cy.wrap(pv_value).as('pv_value');   // save to alias
            });
        // Then navigate to Long term page
        cy.get(medicarepage.longTermBtn, { timeout: 50000 }).should('be.visible').click();
       
       // then compare the total expense vs total expences from medicare plan view page
       medicarepage.getLongTermFutureValueExpensesAmt().then((total_fv_amt) => {           
           cy.get('@valueA').then((valueA) => {
               const variance = valueA - total_fv_amt
               expect(variance).to.be.lessThan(2); 
             });
       });
       // then compare the present value vs present value total expences from medicare plan view page
       medicarepage.getLongTermPresentValueExpensesAmt().then((total_exp_amt) => {      
           
           cy.get('@pv_value').then((valueA) => {
               const variance = valueA - total_exp_amt
               expect(variance).to.be.lessThan(2); 
             });
       });     
    })
    it.skip("TC-PDP-CONS-PDP/G-09_consistency_to verify PDPSUPPL plan long term expences as NA from view screen",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickplanGsupplementBtn();
        medicarepage.clickPdpSupplementPlanChkbox();
        medicarepage.planselectdone();
        medicarepage.clickFinalSupplementPlanChkbox();            
        medicarepage.clickmedicare();
        cy.wait(3000);         
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        medicarepage.searchRecommendationAndView(email);        
        cy.wait(3000);
        medicarepage.verifyLongtermCareNA();

    })
    //PDP-Plan N
    it("TC-PDP_CONS_PDP/N_01_consistency_ABD+N+Concierge Total Expences under lifetime medicare projection should match with Total Expences",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.selectmedigapplanN();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clickmedicare();
        cy.wait(3000);
        medicarepage.IsPDPTotalCTEAmntsEqual();
    })
    it("TC-PDP_CONS_PDP/N_02_consistency_ Total Concierge charge under lifetime medicare projection should match with Total Concierge",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.selectmedigapplanN();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clickmedicare();
        cy.wait(3000);
        medicarepage.IsPDPTotalConciergeAmntsEqual();

    })
    it("TC-PDP_CONS_PDP/N_03_consistency_profile data is identical to the profile data entered while creating a plan",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.selectmedigapplanN();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clickmedicare();
        medicarepage.profiledetailspdp();
       // medicarepage.Nplantypemagitaxfstatus(); 
    })

    it("TC-PDP_CONS_PDP/N_04_consistency_Total Present Value Expenses under LongTerm Care Expences Projection should be equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care ",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.selectmedigapplanN();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clicklongtermbtn();       
        medicarepage.getPresentValuesTotals().then((pvaldown) => {
            medicarepage.getPresentValuesTotals().then((pvalUp) => {
                const variance = pvaldown - pvalUp;         
                expect(Math.abs(variance)).to.be.lessThan(2);
            })
        });
    })


it("TC-PDP_CONS_PDP/N_05_consistency_Total Future Value Expences under Long Term Care Expenses should be equal to the addition of Future value Adult Day Care,In Home Care,Nursing Care",()=>{
    medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.selectmedigapplanN();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clicklongtermbtn();       
    medicarepage.getFutureValueFromDown().then((pvaldown) => {
        medicarepage.getFutureValuesTotals().then((pvalUp) => {
            const variance = pvaldown - pvalUp;          
            expect(Math.abs(variance)).to.be.lessThan(2);
        })
    });
})

it("TC-PDP_CONS_PDP/N_06_consistency_longterm profile data should be identical to the profile data entered while creating a plan",()=>{
    medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.selectmedigapplanN();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clicklongtermbtn(); 
        medicarepage.profiledetailspdp();
})
it("TC-PDP_CONS_PDP/N_07_consistency_Health Care Expense value and Health Care Present value on view page should be identical with ABD+N+Concirge charges  and P.V. as of year values on medicare page",()=>{
    medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.selectmedigapplanN();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clickmedicare();             
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        email = Cypress.env("recom_email"); 
        cy.wait(3000);
        medicarepage.searchRecommendationAndView(email);
        cy.wait(3000)

        // capture the health care expences from view recomm plan page
        cy.xpath(medicarepage.healtCareAmtFrom_View_exp)
        .invoke('text')
            .then((text) => {
                const valueA = Number(text.replace(/[^0-9.]/g, ""));
                cy.wrap(valueA).as('valueA');   // save to alias
             });

        // capture the health care Present Value from view recomm plan page
         cy.xpath(medicarepage.healtCareAmtFrom_View_pv)
        .invoke('text')
            .then((text) => {
                const pv_value = Number(text.replace(/[^0-9.]/g, ""));
                cy.wrap(pv_value).as('pv_value');   // save to alias
             });
         // Then navigate to Medicare page
         cy.xpath(medicarepage.clickmedicarebtnEle, { timeout: 50000 }).should('be.visible').click();
        
        // then compare the total expense vs total expences from medicare plan view page
        medicarepage.getTotalExpensesAmt().then((total_exp_amt) => {           
            cy.get('@valueA').then((valueA) => {
                const variance = valueA - total_exp_amt
                expect(variance).to.be.lessThan(2); 
              });
        });
        // then compare the present value vs present value total expences from medicare plan view page
        medicarepage.getPvAsOfYearAmt().then((total_pv_amt) => {           
            cy.get('@pv_value').then((valueA) => {
                const variance = valueA - total_pv_amt
                expect(variance).to.be.lessThan(2); 
              });
        });         
      })
    it("TC-PDP_CONS_PDP/N_08_consistency_LongTerm Care Expense value and LongTerm Care Present value on view page should be identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.selectmedigapplanN();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clicklongtermbtn();  
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        email = Cypress.env("recom_email"); 
        cy.wait(3000);
        medicarepage.searchRecommendationAndView(email);
        cy.wait(3000);
        // capture the health care expences from view recomm plan page
       cy.xpath(medicarepage.longTermCare_View_exp)
       .invoke('text')
           .then((text) => {
               const valueA = Number(text.replace(/[^0-9.]/g, ""));
               cy.wrap(valueA).as('valueA');   // save to alias
            });

       // capture the health care Present Value from view recomm plan page
        cy.xpath(medicarepage.longTermCare_View_pv)
       .invoke('text')
           .then((text) => {
               const pv_value = Number(text.replace(/[^0-9.]/g, ""));
               cy.wrap(pv_value).as('pv_value');   // save to alias
            });
        // Then navigate to Long term page
        cy.get(medicarepage.longTermBtn, { timeout: 50000 }).should('be.visible').click();
       
       // then compare the total expense vs total expences from medicare plan view page
       medicarepage.getLongTermFutureValueExpensesAmt().then((total_fv_amt) => {           
           cy.get('@valueA').then((valueA) => {
               const variance = valueA - total_fv_amt
               expect(variance).to.be.lessThan(2); 
             });
       });
       // then compare the present value vs present value total expences from medicare plan view page
       medicarepage.getLongTermPresentValueExpensesAmt().then((total_exp_amt) => {      
           
           cy.get('@pv_value').then((valueA) => {
               const variance = valueA - total_exp_amt
               expect(variance).to.be.lessThan(2); 
             });
       });     

      })
    it.skip("TC-PDP_CONS_PDP/N_09_consistency_ View page should not show the long term expences",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.selectmedigapplanN();
        medicarepage.clickplanGsupplementBtn();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clickmedicare();
        cy.wait(3000);         
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        medicarepage.searchRecommendationAndView(email);        
        cy.wait(3000);
        medicarepage.verifyLongtermCareNA();

      })
    it("TC-PDP_CONS_PDP/HDG_01_consistency_ABD+HDG+Concierge Total Expences under lifetime medicare projection should match with Total Expences under Lifetime Expences",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickonmedigaparrowandselectHDG();
        cy.wait(3000);
        medicarepage.clicksupplimentbuttonhdg();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clickmedicare();
        cy.wait(3000);
        medicarepage.IsPDPTotalCTEAmntsEqual();        
      })

    it("TC-PDP_CONS_PDP/HDG_02_consistency_Total Concierge charge under lifetime medicare projection should match with Total Concierge charge under Lifetime Expences",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickonmedigaparrowandselectHDG();
        cy.wait(3000);
        medicarepage.clicksupplimentbuttonhdg();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clickmedicare();
        cy.wait(3000);
        medicarepage.IsPDPTotalConciergeAmntsEqual();
    })

    it("TC-PDP_CONS_PDP/HDG_03_consistency_profile data should be identical to the profile data entered while creating a plan",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickonmedigaparrowandselectHDG();
        cy.wait(3000);
        medicarepage.clicksupplimentbuttonhdg();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clickmedicare();
        medicarepage.profiledetailspdp();
       //medicarepage.HDGplantypemagitaxfstatus();
    })

    it("TC-PDP_CONS_PDP/HDG_04_consistency_Total Present Value Expences under Long Term Care Expences Projection should be equal to the addition of Present value Adult Day Care,In Home Care,Nursing Care",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickonmedigaparrowandselectHDG();
        cy.wait(3000);
        medicarepage.clicksupplimentbuttonhdg();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clicklongtermbtn();       
        medicarepage.getPresentValuesTotals().then((pvaldown) => {
            medicarepage.getPresentValuesTotals().then((pvalUp) => {
                const variance = pvaldown - pvalUp;         
                expect(Math.abs(variance)).to.be.lessThan(2);
            });
        });
    });

    it("TC-PDP_CONS_PDP/HDG_05_consistency_Total Future Value Expences under Long Term Care Expences Projection should be equal to the addition of Future value Adult Day Care,In Home Care,Nursing Care",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickonmedigaparrowandselectHDG();
        cy.wait(3000);
        medicarepage.clicksupplimentbuttonhdg();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clicklongtermbtn();       
        medicarepage.getFutureValueFromDown().then((pvaldown) => {
            medicarepage.getFutureValuesTotals().then((pvalUp) => {
                const variance = pvaldown - pvalUp;          
                expect(Math.abs(variance)).to.be.lessThan(2);
            });
        });
    });

    it("TC-PDP_CONS_PDP/HDG_06_consistency_ profile data should be identical to the profile data entered while creating a plan",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickonmedigaparrowandselectHDG();
        cy.wait(3000);
        medicarepage.clicksupplimentbuttonhdg();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clicklongtermbtn(); 
        medicarepage.profiledetailspdp();
    })

    it("TC-PDP_CONS_PDP/HDG_07_consistency_Health Care Expense value and Health Care Present value on view page should be identical with ABD+HDG+Concirge charges  and P.V. as of year values on medicare page",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickonmedigaparrowandselectHDG();
        cy.wait(3000);
        medicarepage.clicksupplimentbuttonhdg();
        cy.wait(3000);
        medicarepage.clickPdpSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.planselectdone();
        cy.wait(3000);
        medicarepage.clickFinalSupplementPlanChkbox();
        cy.wait(3000);
        medicarepage.clickmedicare();             
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        email = Cypress.env("recom_email"); 
        cy.log('received email='+email)
        cy.wait(3000);
        medicarepage.searchRecommendationAndView(email);
        cy.wait(3000)

        // capture the health care expences from view recomm plan page
        cy.xpath(medicarepage.healtCareAmtFrom_View_exp)
        .invoke('text')
            .then((text) => {
                const valueA = Number(text.replace(/[^0-9.]/g, ""));
                cy.wrap(valueA).as('valueA');   // save to alias
             });

        // capture the health care Present Value from view recomm plan page
         cy.xpath(medicarepage.healtCareAmtFrom_View_pv)
        .invoke('text')
            .then((text) => {
                const pv_value = Number(text.replace(/[^0-9.]/g, ""));
                cy.wrap(pv_value).as('pv_value');   // save to alias
             });
         // Then navigate to Medicare page
         cy.xpath(medicarepage.clickmedicarebtnEle, { timeout: 50000 }).should('be.visible').click();
        
        // then compare the total expense vs total expences from medicare plan view page
        medicarepage.getTotalExpensesAmt().then((total_exp_amt) => {           
            cy.get('@valueA').then((valueA) => {
                const variance = valueA - total_exp_amt
                expect(variance).to.be.lessThan(2); 
              });
        });
        // then compare the present value vs present value total expences from medicare plan view page
        medicarepage.getPvAsOfYearAmt().then((total_pv_amt) => {           
            cy.get('@pv_value').then((valueA) => {
                const variance = valueA - total_pv_amt
                expect(variance).to.be.lessThan(2); 
              });
        });        

    });

    it("TC-PDP_CONS_PDP/HDG_08_consistency_LongTerm Care Expense value and LongTerm Care Present value on view page should be identical withTotal Future Value Expenses and Total Present Value Expenses on LongTerm page",()=>{
        medicarepage.clickPdpBtn();
        medicarepage.cignaHealthCareSaverPlanSelect();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
        medicarepage.clickonmedigaparrowandselectHDG();
        cy.wait(3000);
        medicarepage.clicksupplimentbuttonhdg();
        cy.wait(3000);
    medicarepage.clickPdpSupplementPlanChkbox();
    cy.wait(3000);
    medicarepage.planselectdone();
    cy.wait(3000);
    medicarepage.clickFinalSupplementPlanChkbox();
       cy.wait(3000);
        medicarepage.clicklongtermbtn();  
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        email = Cypress.env("recom_email"); 
        cy.log('received email='+email)
        cy.wait(3000);
        medicarepage.searchRecommendationAndView(email);
        cy.wait(3000)
        // capture the health care expences from view recomm plan page
       cy.xpath(medicarepage.longTermCare_View_exp)
       .invoke('text')
           .then((text) => {
               const valueA = Number(text.replace(/[^0-9.]/g, ""));
               cy.wrap(valueA).as('valueA');   // save to alias
            });

       // capture the health care Present Value from view recomm plan page
        cy.xpath(medicarepage.longTermCare_View_pv)
       .invoke('text')
           .then((text) => {
               const pv_value = Number(text.replace(/[^0-9.]/g, ""));
               cy.wrap(pv_value).as('pv_value');   // save to alias
            });
        // Then navigate to Long term page
        cy.get(medicarepage.longTermBtn, { timeout: 50000 }).should('be.visible').click();
       
       // then compare the total expense vs total expences from medicare plan view page
       medicarepage.getLongTermFutureValueExpensesAmt().then((total_fv_amt) => {           
           cy.get('@valueA').then((valueA) => {
               const variance = valueA - total_fv_amt
               expect(variance).to.be.lessThan(2); 
             });
       });
       // then compare the present value vs present value total expences from medicare plan view page
       medicarepage.getLongTermPresentValueExpensesAmt().then((total_exp_amt) => {      
           
           cy.get('@pv_value').then((valueA) => {
               const variance = valueA - total_exp_amt
               expect(variance).to.be.lessThan(2); 
             });
       });     

});
it.skip("TC-PDP_CONS_PDP/HDG_09_consistency_ View page should not show the long term expences",()=>{
    medicarepage.clickPdpBtn();
    medicarepage.cignaHealthCareSaverPlanSelect();
    medicarepage.planselectdone();
    medicarepage.selectplanchkbox();
    medicarepage.clickonmedigaparrowandselectHDG();
    cy.wait(3000);
    medicarepage.clicksupplimentbuttonhdg();
    cy.wait(3000);
    medicarepage.clickPdpSupplementPlanChkbox();
    cy.wait(3000);
    medicarepage.planselectdone();
    cy.wait(3000);
    medicarepage.clickFinalSupplementPlanChkbox();
    cy.wait(3000);
    medicarepage.clickmedicare();
    cy.wait(3000);         
    medicarepage.aivanteimgclick();
    cy.wait(3000);
    medicarepage.searchRecommendationAndView(email);        
    cy.wait(3000);
    medicarepage.verifyLongtermCareNA();
})

})

