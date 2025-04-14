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

    const medicarepage = new MedicarePage();

    beforeEach("Login to Medicare Page",()=>{
        cy.session("Medicare Page",()=>{
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/landing-page ');
        const lPage = new LoginPage();
        const recPage = new LandingPage();
        const homepage = new HomePage();
        const prefPage = new PreferencePage();
        const prescriptionpage=new PrescriptionPage();
        //const ConfirmDrugPage=new ConfirmDrug();
        const pharmacypage=new PharmacyPage();
       //const planselectionpage=new PdpSuppMA();
        cy.fixture('LoginFixture').then((data) => {
            
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
            lPage.verifyLogin(); 
        })
           recPage.clickCreateRecommendation();
           cy.wait(100);
           homepage.enterEmail("Vanaja@gmail.com");
           cy.wait(100);
           homepage.clickhealthArrow();
           cy.wait(100);
           homepage.clickGoodHealth();
           cy.wait(100);
           homepage.enterName("Vanaja");
           cy.wait(100);
           homepage.enterLifeexpectancy("95");
           cy.wait(100);
           homepage.datePickerclick();
           cy.wait(100);
           //homepage.year1957click();
           homepage.clickYear();
           cy.wait(100);
           //homepage.month1957click();
           homepage.clickMonth();
           cy.wait(100);
           homepage.enterZip("18976")
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
        cy.wait(100);
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

    it("Test08_Edit recommendation and check for purchase Part A",()=>{
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






