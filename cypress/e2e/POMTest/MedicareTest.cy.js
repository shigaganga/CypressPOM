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

   it("Test01_Click on medicare button",()=>{
       medicarepage.clickmedicare();
    })

    it("Test02_Click on medicare button and validatepgelements",()=>{
        medicarepage.clickmedicare();
        medicarepage.validatepgelements();
    })

    it("Test03_PurchasepartA",()=>{
        medicarepage.clickmedicare();
        medicarepage.togglepurchasepartA();
    })

    it("Test04_Verify user info detalis",()=>{ 
        medicarepage.clickmedicare();  
        medicarepage.verifyuserinfodetalis();
    })

    it("Test05_Verify PV ABMA IRMA",()=>{
        medicarepage.clickmedicare();
        medicarepage.verifyPVABMAIRMA();
    })

    it("Test06_Verify total premium surcharge oop",()=>{
        medicarepage.clickmedicare();
        medicarepage.verifytotalpremiumsurchargeoop();
    })
 
    it("Test07_Click on AIVANTE_IMAGE",()=>{
        medicarepage.clickmedicare();
        medicarepage.aivanteimgclick();
    })

    it("Test08_Edit recommendation and check the profile details if the user profile is updated",()=>{
        medicarepage.clickmedicare();
        medicarepage.aivanteimgclick();
        medicarepage.editrecommendation();         
    })

    it("Test09_Select 30 lifetime reserve days and submit plan details",()=>{
        medicarepage.clickmedicare();
        medicarepage.select30lifetimeresdays();
        cy.wait(3000);
        cy.url().should("eq","http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage");
    })

    it("Test10_View recommendation and check OOP details",()=>{
        medicarepage.clickmedicare();
        medicarepage.aivanteimgclick();
        medicarepage.viewrecommendation();
        cy.wait(3000);         
    })

    it("Test11_Click on BACK buton",()=>{
        medicarepage.clickmedicare();
        medicarepage.clickbackbtn();
        })

    it("Test12_Click on generatepdf button to generate plan details",()=>{
    medicarepage.clickmedicare();
    medicarepage.generatepdf();
    })

    //medicarepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage");
})






