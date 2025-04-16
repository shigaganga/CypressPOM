import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';

describe("Automation of test cases for PlanSelection Page PDP",()=> {
    const planselectionpage=new planselectionPage();
    beforeEach("Login to PlanSelectionPage",()=>{
        cy.session("Pharmacy session",()=>{
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        const lPage = new LoginPage();
        const recPage = new LandingPage();
        const homepage = new HomePage();
        const prefPage = new PreferencePage();
        const prescriptionpage=new PrescriptionPage();
        const pharmacypage=new PharmacyPage();
    
        cy.fixture('LoginFixture').then((data) => {
            
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); // Ensure login was successful
        })
           recPage.clickCreateRecommendation();
           cy.wait(100);
           homepage.enterEmail("siri21@gmail.com");
           cy.wait(100);
           homepage.clickhealthArrow();
           cy.wait(100);
           homepage.clickGoodHealth();
           cy.wait(100);
           homepage.enterName("sneha");
           cy.wait(100);
           homepage.enterLifeexpectancy("80");
           cy.wait(100);
           homepage.datePickerclick();
           cy.wait(100);
           homepage.year1957click();
           cy.wait(100);
           homepage.month1957click();
           cy.wait(100);
           homepage.enterZip("80109")
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
           cy.wait(2000);
           pharmacypage.clicknextpharmacy();
           cy.wait(2000);

        });
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/plan-selection')
    })

        
           it('Test1, verify the "PDP Button" functionality on the plan-selection page',() => {
            
            const planselectionpage=new planselectionPage();
            cy.wait(1000)
            planselectionpage.clickPdpBtn();
            cy.wait(100)

           });


           it('Test2,verify the message displays about duration of all expences ',() => {

            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(6000);
            planselectionpage.verifyRemaningYears();
            cy.wait(1000);

           });

           it('Test3, Verify Location Information Display',() => {
            
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.verifyLocationSelector()
            cy.wait(1000);

           });

           it('Test4,Verify selected Pharmacy is In-Network or out-Network detail msg should display under each plan',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.verifyInnetworkPharmacy()
            cy.wait(1000);

           })

           it('Test5,Verify selected Drugs are Covered by Insurance Plan message display',() => { 
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.verifyCoveragemessage();
            cy.wait(1000);

           });


           it('Test6,verify the PDP PlanDetails',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            
           });

           it('Test7,verify the "Select PDP Plan" functionality ',() => {
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

           it('Test8,verify the "Deselect PDP Plan" functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.selectWellcarePlan()
            cy.wait(1000);
            planselectionpage.selectCignahealthCare()
            cy.wait(1000);
            planselectionpage.selectHumanaBasic()
            cy.wait(1000);
            planselectionpage.selectWellcarePlan()
            cy.wait(1000);
            planselectionpage.selectCignahealthCare()
            cy.wait(1000);
            planselectionpage.selectHumanaBasic()
            cy.wait(1000);

           });

           it('Test9,verify the message displays after selecting a PDP plan on plan-selection page',() => {
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
            planselectionpage.selectPdpPlanatPlanselectionPage()
            cy.log('Maximum 1 MA with/without 1 PDP or 1 PDP with 1 Supplement plan are allowed')

           });


           it('Test10,verify if warning message gets displayed when selecting more than 3 PDP plans using the Select PDP Plan functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.selectWellcarePlan()
            cy.wait(1000);
            planselectionpage.selectCignahealthCare()
            cy.wait(1000);
            planselectionpage.selectHumanaBasic()
            cy.wait(1000);
            planselectionpage.selectAARP()
            cy.log('Maximum 3 plans allowed. Remove previous plan to add new plan')
           
            
           });

           it('Test11,verify the selected pdp plans information displays correctly on the plan-selection page ',() => {
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


           it('Test12,Verify the Reset button on the plan-selection/plan-list/PDP page ',() => {
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


           it('Test13,verify the "Filter Icon" functionality on the plan-selection/plan-list/PDP page within the PDP application.',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickFilterplanBtn()
            cy.wait(1000);

           });

           it('Test14,Filter Plans By Inurance Carrier',() => {
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

           it('Test15,Filter Plans By Star Rating',() => {
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

           it('Test16,Filter Plans with Drug Coverage',() => {
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

           it('Test17,Sort plan functionality on the plan-selection/plan-list/PDP page within the PDP application',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickSortPlan()
            cy.wait(1000);

           });

           it('Test18,Sort Plans with Lowest monthly premium functionality on the plan-selection/plan-list/PDP page within the PDP application',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickSortPlan()
            cy.wait(1000);
            planselectionpage.clickSortplanArrow()
            cy.wait(1000);
            planselectionpage.selectLowestPremium()

           });

           it('Test19, Sort Plan with Lowest drug + Premium cost',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickSortPlan()
            cy.wait(1000);
            planselectionpage.clickSortplanArrow()
            cy.wait(1000);
            planselectionpage.selectLowestdrugPremium()

            });

            it('Test20,verify the "Next page" functionality',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.selectNextExpandBtn()
                
            });

            it('Test21, verify the "last page" functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickLastPageBtn();
           
            });

            it('Test22, verify the "Previous page" functionality ',() => {    
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickLastPageBtn();
            cy.wait(1000);
            planselectionpage.clickPerivousPageBtn()
               
            });

            it('Test23, verify the "First page" functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.selectNextExpandBtn();
            cy.wait(1000);
            planselectionpage.clickFirstPageBtn();
            planselectionpage.itemPerPage();
            
            });

            it('Test24, verify the "PDP Plan Details" functionality on the plan-selection/plan-list/PDP page',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);

            });

            it('Test25, verify the "PDP Plan Details" functionality on the plan-selection/plan-list/PDP page',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);

            });

            it('Test26,Expand Drug Information in PDP plandetails',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickExpandDrugInfo()

            });

            it('Test27,close Drug Information in PDP plandetails',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickExpandDrugInfo()
            cy.wait(1000);
            planselectionpage.clickExpandDrugInfo()

            });

            it('Test28,Expand Remaining year Drug & OOP Costin plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickRemaningDrugYear()
            cy.wait(1000);
            
            });

            it('Test29,close Remaining year Drug & OOP Cost in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickRemaningDrugYear()
            cy.wait(1000);
            planselectionpage.clickRemaningDrugYear()

            });

            it('Test30,Expand Estimated total drug + premium cost in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickTotaldrugPeriumcost()
            cy.wait(1000);

            });

            it('Test31,close Estimated total drug + premium cost in plan details',() => {
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

            it('Test32,Expand Estimated total monthly drug cost in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.expandTotalMonthlyDrugcost()

            });

            it('Test33,Close Estimated total monthly drug cost in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.expandTotalMonthlyDrugcost()
            cy.wait(1000);
            planselectionpage.expandTotalMonthlyDrugcost()

            });

            it('Test34, verify the BACK Button functionality in plan details',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickPlandetailsBtn()
            cy.wait(1000);
            planselectionpage.clickBackBtn()

            });

            it('Test35, verify the Done Button functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.selectWellcarePlan()
            cy.wait(1000);
            planselectionpage.clickDoneBtn()

            });

            it('Test36, verify the Cancle Button functionality ',() => {
            const planselectionpage=new planselectionPage();
            planselectionpage.clickPdpBtn();
            cy.wait(1000);
            planselectionpage.clickCancleBtn()

            }); 



})