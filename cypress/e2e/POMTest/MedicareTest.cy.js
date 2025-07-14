import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import planselectionPage from '../pages/PlanselectionPage.js';
import LongTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import MedicarePage from '../pages/MedicarePage.js';

describe("Automate test cases for Medicare Page",()=>{

    let testData
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
           
    cy.visit(testData.baseUrl );
    cy.wait(500);
     
       lPage.setUserName(testData.username);
       lPage.setPassword(testData.password);
       lPage.clickLoginBtn();
       lPage.verifyLogin(); 
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

    medicarepage.clickMAbtn();
        medicarepage.wellcaresimpleopenppo();
         medicarepage.planselectdone();
         medicarepage.selectplanchkbox();
})

   cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/plan-selection")
    })

   
   it("TC_PDP_MC_01: Click on medicare button",()=>{
       medicarepage.clickmedicare();
    })

    it("TC_PDP_MC_02:Click on medicare button and validatepgelements",()=>{
        medicarepage.clickmedicare();
        medicarepage.validatepgelements();
    })

    it("TC_PDP_MC_10:PurchasepartA",()=>{
        medicarepage.clickmedicare();
        medicarepage.togglepurchasepartA();
    })

    it("TC_PDP_MC_03:Verify user info detalis",()=>{ 
        medicarepage.clickmedicare();  
        medicarepage.verifyuserinfodetalis();
    })

    it("TC_PDP_MC_07:Verify PV ABMA IRMA",()=>{
        medicarepage.clickmedicare();
        medicarepage.verifyPVABMAIRMA();
    })

    it("TC_PDP_MC_06:Verify total premium surcharge oop",()=>{
        medicarepage.clickmedicare();
        medicarepage.verifytotalpremiumsurchargeoop();
    })
 
    it("TC_PDP_MC_22:Click on AIVANTE_IMAGE",()=>{
        medicarepage.clickmedicare();
        medicarepage.aivanteimgclick();
    })

    it("TC_PDP_MC_09: Edit recommendation and check the profile details if the user profile is updated",()=>{
        medicarepage.clickmedicare();
        medicarepage.aivanteimgclick();
        medicarepage.editrecommendation();         
    })  //This test is not in manual test file

    it("TC_PDP_MC_21:Select 30 lifetime reserve days and submit plan details",()=>{
        medicarepage.clickmedicare();
        medicarepage.select30lifetimeresdays();
        cy.wait(3000);
        cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage");
    })

    it("TC_PDP_MC_08:View recommendation and check OOP details",()=>{
        medicarepage.clickmedicare();
        medicarepage.aivanteimgclick();
        medicarepage.viewrecommendation();
        cy.wait(3000);         
    })

    it("TC_PDP_MC_15:Click on BACK buton",()=>{
        medicarepage.clickmedicare();
        medicarepage.clickbackbtn();
        })

    it("TC_PDP_MC_16:Click on generatepdf button to generate plan details",()=>{
    medicarepage.clickmedicare();
    medicarepage.generatepdf();
    })

    //medicarepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage");
})






