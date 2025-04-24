import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';

describe("Automation of test cases for PlanSelection Page PDP",()=> {
    //const planselectionpage=new planselectionPage();
    beforeEach("Login to PlanSelectionPage",()=>{
        cy.session("PlanSelection session",()=>{
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        
        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful
        })
           const recPage = new LandingPage();
           recPage.clickCreateRecommendation();
           cy.wait(2000);
           const homepage = new HomePage();
           homepage.enterEmail("siri21@gmail.com");
           cy.wait(2000);
           homepage.clickhealthArrow();
           cy.wait(1000);
           homepage.clickGoodHealth();
           cy.wait(2000);
           homepage.enterName("sneha");
           cy.wait(2000);
           homepage.enterLifeexpectancy("80");
           cy.wait(2000);
           homepage.datePickerclick();
           cy.wait(2000);
           homepage.year1957click();
           cy.wait(2000);
           homepage.month1957click();
           cy.wait(2000);
           homepage.enterZip("80109")
           cy.wait(2000);
           homepage.clickSearch();
           cy.wait(2000);
           homepage.nextHomeClick();
           cy.wait(2000);
           const prefPage = new PreferencePage();
           prefPage.clickyesRadioDrugCost();
           cy.wait(2000);
           prefPage.clickNextPrefPage();
           cy.wait(2000);
           const prescriptionpage=new PrescriptionPage();
           prescriptionpage.enterDrugSearchBox("Gabapentin");
           cy.wait(2000);
           prescriptionpage.selectDrug();
           cy.wait(2000);
           prescriptionpage.clickAddToDrug();
           cy.wait(2000);
           const pharmacypage=new PharmacyPage();
           prescriptionpage.doneAddDrugClick();
           cy.wait(2000);
           pharmacypage.clickFindFarmacy();
           cy.wait(2000);
           pharmacypage.clickfarmacyOne();
           cy.wait(2000);
           pharmacypage.clickfarmacyTwo();
           cy.wait(2000);
           pharmacypage.clicknextpharmacy();
           cy.wait(3000);

        });
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/plan-selection')
    })

           it('TC_PDP_PLAN_01, verify the "PDP Button" functionality on the plan-selection page',() => {
            
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(3000)

           });

           it('TC_PDP_PLAN_02,verify the message displays about duration of all expences ',() => {

            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(3000);
            planselectionpage.verifyRemaningYears();
            cy.wait(1000);

           });

           it('TC_PDP_PLAN_03, Verify Location Information Display',() => {
            
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(3000);
            planselectionpage.verifyLocationSelector()
            cy.wait(1000);

           });

           it('TC_PDP_PLAN_04,Verify selected Pharmacy is In-Network or out-Network detail msg should display under each plan',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(3000);
            planselectionpage.verifyInnetworkPharmacy()
            cy.wait(1000);

           })

           it('TC_PDP_PLAN_05,Verify selected Drugs are Covered by Insurance Plan message display',() => { 
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(3000);
            planselectionpage.verifyCoveragemessage();
            cy.wait(1000);

           });


           it('TC_PDP_PLAN_06,verify the PDP PlanDetails',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(3000);
            planselectionpage.clickPlandetailsBtn()
            
           });

           it('TC_PDP_PLAN_07,verify the "Select PDP Plan" functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(2000);
            planselectionpage.selectWellcarePlan()
            cy.wait(2000);
            planselectionpage.selectCignahealthCare()
            cy.wait(2000);
            planselectionpage.selectHumanaBasic()
            cy.wait(2000);
            planselectionpage.clickDoneBtn()
            cy.wait(2000);
    
           });

           it('TC_PDP_PLAN_08,verify the "Deselect PDP Plan" functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(2000);
            planselectionpage.selectWellcarePlan()
            cy.wait(2000);
            planselectionpage.selectCignahealthCare()
            cy.wait(2000);
            planselectionpage.selectHumanaBasic()
            cy.wait(2000);
            planselectionpage.selectWellcarePlan()
            cy.wait(2000);
            planselectionpage.selectCignahealthCare()
            cy.wait(2000);
            planselectionpage.selectHumanaBasic()
            cy.wait(2000);

           });

           it('TC_PDP_PLAN_09,verify the message displays after selecting a PDP plan on plan-selection page',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(2000);
            planselectionpage.selectWellcarePlan()
            cy.wait(2000);
            planselectionpage.selectCignahealthCare()
            cy.wait(2000);
            planselectionpage.selectHumanaBasic()
            cy.wait(2000);
            planselectionpage.clickDoneBtn()
            cy.wait(2000);
            planselectionpage.selectPdpPlanatPlanselectionPage()
            cy.log('Maximum 1 MA with/without 1 PDP or 1 PDP with 1 Supplement plan are allowed')

           });

           it('TC_PDP_PLAN_10,verify if warning message gets displayed when selecting more than 3 PDP plans using the Select PDP Plan functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(2000);
            planselectionpage.selectWellcarePlan()
            cy.wait(2000);
            planselectionpage.selectCignahealthCare()
            cy.wait(2000);
            planselectionpage.selectHumanaBasic()
            cy.wait(2000);
            planselectionpage.selectAARP()
            cy.log('Maximum 3 plans allowed. Remove previous plan to add new plan')
           
           });

           it('TC_PDP_PLAN_11,verify the selected pdp plans information displays correctly on the plan-selection page ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.selectWellcarePlan()
            cy.wait(1000);
            planselectionpage.selectCignahealthCare()
            cy.wait(1000);
            planselectionpage.selectHumanaBasic()
            cy.wait(1000);
            planselectionpage.clickDoneBtn()
            cy.wait(1000);
            
           });

           it('TC_PDP_PLAN_12,Verify the Reset button on the plan-selection/plan-list/PDP page ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickFilterplanBtn()
            cy.wait(1000);
            planselectionpage.clickInsuranceCarrierArrow()
            cy.wait(1000); 
            planselectionpage.selectHumanaPlanfrominsurancefilter()
            cy.wait(1000); 
            planselectionpage.clickResetBtn()

           });

           it('TC_PDP_PLAN_13,verify the "Filter Icon" functionality on the plan-selection/plan-list/PDP page within the PDP application.',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickFilterplanBtn()
            cy.wait(1000);

           });

           it('TC_PDP_PLAN_14,Filter Plans By Inurance Carrier',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickFilterplanBtn()
            cy.wait(1000);
            planselectionpage.clickInsuranceCarrierArrow()
            cy.wait(1000);
            planselectionpage.selectHumanaPlanfrominsurancefilter()
            cy.wait(1000);

           });

           it('TC_PDP_PLAN_15,Filter Plans By Star Rating',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickFilterplanBtn()
            cy.wait(1000);
            planselectionpage.clickStarRatingFilter()
            cy.wait(1000);
            planselectionpage.selectStarRating()
            cy.wait(1000);

           });

           it('TC_PDP_PLAN_16,Filter Plans with Drug Coverage',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickFilterplanBtn()
            cy.wait(1000);
            planselectionpage.clickDrugCoverage()
            cy.wait(1000);
            planselectionpage.SelectDrugCoveragefromfilter()
            cy.wait(1000);

           });

           it('TC_PDP_PLAN_17,Sort plan functionality on the plan-selection/plan-list/PDP page within the PDP application',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickSortPlan()
            cy.wait(1000);

           });

           it('TC_PDP_PLAN_18,Sort Plans with Lowest monthly premium functionality on the plan-selection/plan-list/PDP page within the PDP application',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickSortPlan()
            cy.wait(1000);
            planselectionpage.clickSortplanArrow()
            cy.wait(1000);
            planselectionpage.selectLowestPremium()

           });

           it('TC_PDP_PLAN_19, Sort Plan with Lowest drug + Premium cost',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickSortPlan()
            cy.wait(1000);
            planselectionpage.clickSortplanArrow()
            cy.wait(1000);
            planselectionpage.selectLowestdrugPremium()

            });

            it('TC_PDP_PLAN_20,verify the "Next page" functionality',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(2000);
            planselectionpage.selectNextExpandBtn()
                
            });

            it('TC_PDP_PLAN_21, verify the "last page" functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(2000);
            planselectionpage.clickLastPageBtn();
           
            });

            it('TC_PDP_PLAN_22, verify the "Previous page" functionality ',() => {    
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(2000);
            planselectionpage.clickLastPageBtn();
            cy.wait(2000);
            planselectionpage.clickPerivousPageBtn()
               
            });

            it('TC_PDP_PLAN_23, verify the "First page" functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(2000);
            planselectionpage.selectNextExpandBtn();
            cy.wait(2000);
            planselectionpage.clickFirstPageBtn();
            planselectionpage.itemPerPage();
            
            });

            it('TC_PDP_PLAN_24, verify the "PDP Plan Details" functionality on the plan-selection/plan-list/PDP page',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);

            });

            it('TC_PDP_PLAN_25, verify the "PDP Plan Details" functionality on the plan-selection/plan-list/PDP page',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);

            });

            it('TC_PDP_PLAN_26,Expand Drug Information in PDP plandetails',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickExpandDrugInfo()

            });

            it('TC_PDP_PLAN_27,close Drug Information in PDP plandetails',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickExpandDrugInfo()
            cy.wait(1000);
            planselectionpage.clickExpandDrugInfo()

            });

            it('TC_PDP_PLAN_28,Expand Remaining year Drug & OOP Costin plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickRemaningDrugYear()
            cy.wait(1000);
            
            });

            it('TC_PDP_PLAN_29,close Remaining year Drug & OOP Cost in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickRemaningDrugYear()
            cy.wait(1000);
            planselectionpage.clickRemaningDrugYear()

            });

            it('TC_PDP_PLAN_30,Expand Estimated total drug + premium cost in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickTotaldrugPeriumcost()
            cy.wait(1000);

            });

            it('TC_PDP_PLAN_31,close Estimated total drug + premium cost in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickTotaldrugPeriumcost()
            cy.wait(1000);
            planselectionpage.clickTotaldrugPeriumcost()
            cy.wait(1000);

            });

            it('TC_PDP_PLAN_32,Expand Estimated total monthly drug cost in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.expandTotalMonthlyDrugcost()

            });

            it('TC_PDP_PLAN_33,Close Estimated total monthly drug cost in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.expandTotalMonthlyDrugcost()
            cy.wait(1000);
            planselectionpage.expandTotalMonthlyDrugcost()

            });

            it('TC_PDP_PLAN_34, verify the BACK Button functionality in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickBackBtn()

            });

            it('TC_PDP_PLAN_35, verify the Done Button functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.selectWellcarePlan()
            cy.wait(1000);
            planselectionpage.clickDoneBtn()

            });

            it('TC_PDP_PLAN_36, verify the Cancle Button functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickCancleBtn()

            }); 



})