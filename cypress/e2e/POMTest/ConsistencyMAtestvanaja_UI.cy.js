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

describe("Automate consistency test cases for Medicare Advantage plan",()=>{

    let testData;
    let email;
    const medicarepage = new MedicarePage();
    before(()=>{
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
            const randomString = generateRandomString(10); // Generates a 10-character random string            
            email = "TestRecomm6_"+randomString+'@gmail.com';
            Cypress.env("recom_email", email);
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
            
            medicarepage.clickMAbtn();            
            medicarepage.wellcaresimpleopenppo();
            medicarepage.planselectdone();
            medicarepage.selectplanchkbox();                       
        })    
        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/plan-selection");
    })

   it("TC01_consistency_ Total concierge charge validation",()=>{                
        medicarepage.clickmedicare();
        medicarepage.IsTotalCTEAmntsEqual();
   });

   it("TC02_consistency_AB MA concierge total expenses validation",()=>{
        medicarepage.clickmedicare();
        medicarepage.IsTotal_AB_MA_CTE_AmntsEqual();
   });

   it("TC03_consistency_profile data validation from medicare",()=>{
        medicarepage.clickmedicare();
        medicarepage.profiledetails();
    });

    it("TC04_consistency_total present value expenses under Long TermCare validation",()=>{
        medicarepage.clicklongtermbtn();
        medicarepage.getPresentValuesTotals().then((pvaldown) => {
            medicarepage.getPresentValuesTotals().then((pvalUp) => {
                const variance = pvaldown - pvalUp;         
                expect(Math.abs(variance)).to.be.lessThan(2);
            })
        });
    });

    it("TC05_consistency_total future value expenses under Long TermCare validation",()=>{
        medicarepage.clicklongtermbtn();
        cy.wait(2000);
        medicarepage.getFutureValueFromDown().then((pvaldown) => {
            medicarepage.getFutureValuesTotals().then((pvalUp) => {
                const variance = pvaldown - pvalUp;          
                expect(Math.abs(variance)).to.be.lessThan(2);
            })
        });
    });

    it("TC06_consistency_profile data validation from Long TermCare",()=>{
        medicarepage.clicklongtermbtn();
        cy.wait(2000);
        medicarepage.longtrmcareprofiledetails();
    })

    it("TC07_consistency_view recomm Vs healthcare",()=>{
        medicarepage.clickmedicare();
        cy.wait(3000);
        medicarepage.clickbackbtn();
        cy.wait(3000);
        medicarepage.clicklongtermbtn();
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        email = Cypress.env("recom_email"); 
        medicarepage.searchRecommendationAndView(email);
         cy.wait(3000);
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

    it("TC08_consistency_view recomm plan- long Term view",()=>{
        medicarepage.clickmedicare();
        cy.wait(3000);
        medicarepage.clickbackbtn();
        cy.wait(3000);
        medicarepage.clicklongtermbtn();
        medicarepage.aivanteimgclick();
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

    it.only("TC09_consistency_to verify long term expences as NA from view screen",()=>{
        medicarepage.clickmedicare();
        cy.wait(3000);         
        medicarepage.aivanteimgclick();
        cy.wait(3000);
        medicarepage.searchRecommendationAndView(email);        
        cy.wait(3000);
        medicarepage.verifyLongtermCareNA();

    })
})