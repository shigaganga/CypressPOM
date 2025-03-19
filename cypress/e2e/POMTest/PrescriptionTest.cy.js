import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import PreferencePage from '../pages/PreferencePage.js';
describe('PrescriptionPageTest', () => {

    beforeEach(() => {
        cy.visit('http://169.61.105.110/medicareAdvantage_sandbox/medicare-advantage');

        cy.fixture('LoginFixture').then((data) => {
            const lPage = new LoginPage();
            lPage.setUserName(data.username);
            lPage.setPassword(data.password);
            lPage.clickLoginBtn();
        });

        const recPage = new LandingPage();
        recPage.clickCreateRecommendation();
        const homepage = new HomePage();
        
        homepage.enterEmail("ShigaPOM@gmail.com");
        
        homepage.clickhealthArrow();
        
        homepage.clickGoodHealth();
        
        homepage.enterName("Shigapage");
        
        homepage.enterLifeexpectancy("86");
        
        homepage.datePickerclick();
        
        homepage.year1957click();
        
        homepage.month1957click();
        
        homepage.enterZip("27529");
        
        homepage.searchclick();
        
        homepage.NextHomeClick();
        
    });
    it('test1,Begin typing to find select your drug', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("Gabapentin");
        
        drugPage.selectDrug();
        
        drugPage.clickAddToDrug();
        
        drugPage.doneAddDrugClick();
    });
    it('test2,drug search', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("ibup");
        
        drugPage.selectDrug();
        
        drugPage.clickAddToDrug();
        cy.log("drug was  found in the dropdown, test passed.");
    });
    it('test3,Add drug with dosage function', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("amoxicillin");
        //cy.log("drug was not found in the dropdown, test passed.");
        drugPage.selectDrug();
        
        drugPage.clickAddToDrug();
        drugPage.verifyDosageWindow();
    });
    
    it('test4,Add drugsearch with package', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("amoxicillin");
        drugPage.selectDrug();
        
        drugPage.clickAddToDrug();
        drugPage.verifyDosageWindow();
        cy.log("user should view dosage information in dosageWindow , test passed.");
    });
    it('test5,Add drugsearch with refill freequency', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("amoxicillin");
        drugPage.selectDrug();
        cy.wait(500);
        drugPage.clickRefillFreequency();
        drugPage.clickSixtyDaysRefill();
        drugPage.clickAddToDrug();
       drugPage.verifyDosageWindow();
      cy.log("user should view refil freequency information in dosageWindow as every 2 month , test passed.");
    });
    it('test6,verify user should add drug with quantity', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("amoxicillin");
        drugPage.selectDrug();
        cy.wait(500);
        drugPage.enterQuantity("45");
        cy.wait(500);
        drugPage.clickAddToDrug();
    cy.log("when quantity less than zero it throw error message");
       
    });

    it('test7,boundary value test as quantity zero', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("amoxicillin");
        drugPage.selectDrug();
        
        drugPage.enterQuantity("0");
    drugPage.verifyQuantityText();
    cy.log("when quantity less than zero it throw error message");
       
    });
    it('test8,Add branded drug to generic drug', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("ATORVALIQ");
        drugPage.selectDrug();
        
        drugPage.verifyGenericBrandWindow();
        drugPage.addBrandInsteadClick();
        drugPage.addMyDrugListClick();
     //drugPage.doneAddDrugClick();
        cy.log("user should add branded drug to generic, test passed.");
    });
    it('test9,verify user should  save drug list ', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("ibuprofen");
        drugPage.selectDrug();
        drugPage.addMyDrugListClick();
        drugPage.doneAddDrugClick();
        const homepage=new HomePage();
        homepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/manage-pharmacies");
        cy.log("user should be able to save druglist under recommendation, test passed.");
    });
    it('test10,verify user can add another drug ', () => {
        const prefPage = new PreferencePage();
        
       prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("ibuprofen");
       // drugPage.selectDrug();
        drugPage.addMyDrugListClick();
        drugPage.clickAddAnotherDrug();
        
        drugPage.enterDrugSearchBox("cipro");
        
        drugPage.selectDrug();
        
        drugPage.addGenericClick();
        drugPage.clickAddToDrug();
        
        cy.log("user should be able to save another drug, test passed.");
    });
    it('test11,verify user should  done adding drugs ', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("ibuprofen");
        drugPage.selectDrug();
        drugPage.addMyDrugListClick();
        drugPage.doneAddDrugClick();
        const homepage=new HomePage();
        homepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/manage-pharmacies");
        cy.log("user should be able to done adding drug, test passed.");
    });

    it('test12,verify Browse Drugs A_Z functionality', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const prescriptionpage= new PrescriptionPage();
        prescriptionpage.clickBrowseAtoZlink(); 
        cy.wait(1000)
        prescriptionpage.enterLetter("B");
        cy.wait(1000);
        prescriptionpage.clickDrugFound();
        cy.wait(1000);
        prescriptionpage.clickSelectDrug();
        cy.wait(1000);
        prescriptionpage.clickAddDrug();
        cy.wait(5000);
        prescriptionpage.clickAddToDrugList();
        cy.wait(5000);
        prescriptionpage.doneAddDrugClick();
        const homepage=new HomePage();
        homepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/manage-pharmacies");
        cy.log("user should be able to save drug by browsing letter, test passed.");
        
    });
    it('test13,verify drugsearch with invalid name,cant find your drug', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("albuterol HFA");
        cy.log("drug was not found in the dropdown, test passed.");

    });
    
    it('test14,verify select prescription drug from existing list ', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        
        cy.log("user should be able to see prescription list , test passed.");
    });
    it('test15,verify clear search ', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("Gabapentin");
        
        drugPage.selectDrug();
        cy.wait(1000);
        drugPage.clickClearSearch();
        cy.log("user should be able to clear drug on search box, test passed.");
    });
    it('test16,go back preference navigation testing ', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.clickGobackPreference();
        const homepage=new HomePage();
        homepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/preferences");
        cy.log("user should be able to return to yhe search preference page, test passed.");
    });
    it('test17,go back to add drug navigation testing ', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        drugPage.enterDrugSearchBox("ibuprofen");
        drugPage.selectDrug();
        drugPage.addMyDrugListClick();
        
        drugPage.clickGobackAddDrug();
        //const homepage=new HomePage();
        //homepage.verifyUrl("http://169.61.105.110/medicareAdvantage_sandbox/preferences");
        cy.log("user should be able to return to yhe search preference page, test passed.");
    });
    it('test18,Edit drug functional testing ', () => {
        const prefPage = new PreferencePage();
        
        prefPage.clickyesRadioDrugCost();  
        
        prefPage.clickNextPrefPage();  
        const drugPage = new PrescriptionPage();
        
        
        drugPage.enterDrugSearchBox("ibuprofen");
        drugPage.selectDrug();
        drugPage.addMyDrugListClick();
        
        drugPage.editDrugClick();
        drugPage.enterQuantity("60");
        cy.wait(500);
       // drugPage.clickRefillFreequency();
        //drugPage.clickSixtyDaysRefill();
        drugPage.updateThisDrugClick();
    cy.log("quantity is edited, test passed");
});
it('test19,remove drug functional testing ', () => {
    const prefPage = new PreferencePage();
    
    prefPage.clickyesRadioDrugCost();  
    
    prefPage.clickNextPrefPage();  
    const drugPage = new PrescriptionPage();
    
    drugPage.enterDrugSearchBox("ibuprofen");
    drugPage.selectDrug();
    drugPage.addMyDrugListClick();
    
    drugPage.removeDrugClick();
    cy.log("the drug is removed, test passed");
});
it('test20,review prescriptional list ,functional testing ', () => {
    const prefPage = new PreferencePage();
    
    prefPage.clickyesRadioDrugCost();  
    
    prefPage.clickNextPrefPage();  
    const drugPage = new PrescriptionPage();
    
    
    drugPage.enterDrugSearchBox("ibuprofen");
    drugPage.selectDrug();
    drugPage.addMyDrugListClick();
    
   drugPage.clickAddAnotherDrug();
   drugPage.reviewPrescriptionListClick();
    cy.log("user can see prescriptionlist, test passed");
});
});