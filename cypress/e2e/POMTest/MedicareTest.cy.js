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
    before("Login to Medicare Page",()=>{
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
            lPage.verifyLogin(); // Ensure login was successful
        })
           recPage.clickCreateRecommendation();
           cy.wait(100);
           homepage.enterEmail("POM@gmail.com");
           cy.wait(100);
           homepage.clickhealthArrow();
           cy.wait(100);
           homepage.clickGoodHealth();
           cy.wait(100);
           homepage.enterName("pom");
           cy.wait(100);
           homepage.enterLifeexpectancy("95");
           cy.wait(100);
           homepage.datePickerclick();
           cy.wait(100);
           homepage.year1957click();
           cy.wait(100);
           homepage.month1957click();
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

        const medicarepage = new MedicarePage();
        medicarepage.clickMAbtn();
        medicarepage.wellcaresimpleopenppo();
        medicarepage.planselectdone();
        medicarepage.selectplanchkbox();
      
})


it("Click on medicare button",()=>{
    medicarepage.clickmedicare();
    medicarepage.validatepgelements();
    medicarepage.togglepurchasepartA();
    medicarepage.verifyuserinfodetalis();
    medicarepage.verifyPVABMAIRMA();
    medicarepage.verifytotalpremiumsurchargeoop();
    //medicarepage.aivanteimgclick();
    //medicarepage.generatepdf();
    //medicarepage.clickbackbtn();
    medicarepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage");
})


})